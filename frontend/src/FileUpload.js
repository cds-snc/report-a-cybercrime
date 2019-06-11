/** @jsx jsx */
import { Component } from 'react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { P } from './components/paragraph'
import { Button } from './components/button'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { UPLOAD_FILE_MUTATION } from './utils/queriesAndMutations'
import { Trans } from '@lingui/macro'
import {RadioButton} from './components/radiobutton'
import {Container} from './components/container'
import {Question} from './Question'
import {TextArea} from './components/text-area'

const FileUploadAdapter = finalFormAdapter(FileUpload)
const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`
export class FileUploadPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: undefined,
      resultText: "", // Text that shows the result of the upload operation, does not appear if blank
      postSubmission: false, // Whether or not we are asking the user to submit further files
      TLP: "White",
      TLPShare:true,
      thirdPartiesAllowed:true,
      internetAccessAllowed:true,
      openSourceAllowed:true,
      dataRestrictions:false,
      dataRestrictionsSpecific:""
    }
  }

  onChange = e => {
    this.resetRadioButtons()
    this.setState({ file: e.target.files[0] })
  }

  makeFeedbackString = result => {
    var returnString = ''
    returnString += (result.success === true ? "File uploaded successfully" : result.errorMessage)
    if (result.success === true){
      returnString += "\n" + "MD5: " + result.md5
    }
    return returnString 
  }

  submit = uploadFile => {
    console.log(this.state.file)
    const file = this.state.file
    uploadFile({ variables: { file: file , TLP:this.state.TLP, TLPShare: this.state.TLPShare, 
        thirdPartiesAllowed:this.state.thirdPartiesAllowed, internetAccessAllowed:this.state.internetAccessAllowed,
        openSourceAllowed:this.state.openSourceAllowed, dataRestrictions: this.state.dataRestrictions, 
        dataRestrictionsSpecific:(this.state.dataRestrictions ? this.state.dataRestrictionsSpecific : "")
    } }).then(fileResult => {
      console.log(fileResult)
      this.setState({file:undefined, postSubmission:true, resultText:this.makeFeedbackString(fileResult.data.uploadFile)})
    })
    //navigate(`/summary/${encodeURIComponent(data.identifier)}`)
  }

  resetRadioButtons = () => {
    for (let x of document.getElementsByClassName("resettable-radio-button")) {
      x.checked = false
    }
    this.forceUpdate()
  }

  reportAnswerSelected = () => {
    for (let x of document.getElementsByClassName("resettable-radio-button")) {
      if (x.checked === true && x.name === "Question1" && (x.value === "true" || x.value === "false")){
        // These are stored as text, we need to convert to boolean
        return x.value === "true"
      }
    }
    return null;
  }

  shareAnswerSelected = () => {
    for (let x of document.getElementsByClassName("resettable-radio-button")) {
      if (x.checked === true && x.name === "Question2"){
        // These are stored as text, we need to convert to boolean
        return x.value
      }
    }
    return null;
  }

  handleTLPChange = (tlp) => {
    var tlpShare = false;
    if (tlp === "White"){
      tlpShare = true
    } else if (tlp === "Red"){
      tlpShare = false
    } else {
      tlpShare = this.state.TLPShare
    }
    this.setState({TLP:tlp, TLPShare:tlpShare})
  }

  drawTextbox = () => {
    if (this.state.dataRestrictions === false){
      return <div/>
    }  

    return <TextArea width="800px" padding="10px" style={{resize:"none",boxSizing:"border-box"}} height="100px" onChange={(text) => this.setState({dataRestrictionsSpecific:text.target.value})} placeholder="Write your data restrictions here...">{this.state.dataRestrictionsSpecific}</TextArea>
  }

  validate = () => {}

  render() {
    return (
      <ApolloConsumer>
        {() => (
          <Mutation mutation={UPLOAD_FILE_MUTATION}>
            {uploadFile => (
              <CenterContent>
              <Container width="1200px" marginLeft="calc(50% - 630px)">
              <P><Trans>Share suspicious files with the Canadian Cyber Center for Security (CCCS) to help making a safer internet for all Canadians.</Trans></P>
              <P><Trans> The files shared with the CCCS are analyzed to extract indicators of compromise (IoCs) that can be used by other members of the cyber security community to better protect their network. Indeed, it is likely that multiple Canadian organizations or individuals are targeted by the same malicious actor, however, if the information is shared, others can learn from the behaviour of the file you submitted and implement proactive protection measures. Similarly, you benefit from the information others have shared to improve your defenses.</Trans></P>
              <Container width="800px" marginLeft="200px" marginTop="50px" padding="30px" backgroundColor="#EEE" borderRadius="10px">
              <Form
                margin="20px"float="left"
                onSubmit={data => {
                  this.submit(uploadFile)
                }}
                validate={this.validate}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <center>
                    {!this.state.postSubmission && <Field
                      id="file"
                      name="file"
                      component={FileUploadAdapter}
                      onChange={this.onChange}
                      paddingLeft="15px"
                      paddingRight="15px"
                      margin="0 auto"
                    >
                      <Trans>Upload File</Trans>
                    </Field>}

                    {!this.state.postSubmission && <P mt={4}>
                      {this.state.file
                        ? this.state.file.name
                        : <Trans>No files currently selected for upload</Trans>}
                    </P>
                  }
                    </center>
                    <Container display={this.state.file === undefined ? "none" : ""}>
                    <Question name="TLP" question="Are there sharing restrictions on this submission?" options={[
                      {value:"White",text:"TLP: White (the Centre may publish analysis of the malware on the Internet)"},
                      {value:"Green", text:"TLP: Green (the Centre may share the analysis of the malware with anyone at TLP Green)"},
                      {value:"Amber", text:"TLP: Amber (the Centre may share the analysis of the malware with it's partners at TLP Amber)"},
                      {value:"Red", text:"TLP: Red (the Centre will not share the sample, and its analysis report will only be received by you)"}
                    ]}
                    defaultOption={this.state.TLP}
                    selectionChanged={this.handleTLPChange}
                    />
                    {(this.state.TLP === "Green" || this.state.TLP === "Amber") && <Question name="TLPShare"
                    question={"May the Centre share the actual sample with " + (this.state.TLP === "Green" ? "anyone" : "its partners") + " at TLP " + this.state.TLP + "?"}
                    options = {[{value:true, text:"Yes"}, {value:false, text:"No"}]}
                    defaultOption = {this.state.TLPShare}
                    selectionChanged={(value) => this.setState({TLPShare:value})}
                  />}
                    <Question name="third-parties" question="Can we consult and collaborate with third parties on this submission?" options={[
                      {value: true, text: "Yes"}, {value:false, text: "No"}]}
                    defaultOption={this.state.thirdPartiesAllowed}
                    selectionChanged={(value) => this.setState({thirdPartiesAllowed:value})}/>
                    <Question name="internet-access" question="When detonated, can we let the submission reach out to the internet?" options={[
                      {value: true, text: "Yes"}, {value:false, text: "No"}]}
                    defaultOption={this.state.internetAccessAllowed}
                    selectionChanged={(value) => this.setState({internetAccessAllowed:value})}/>
                    <Question name="open-source" question="Can we research the Open Source regarding the submission?" options={[
                      {value: true, text: "Yes"}, {value:false, text: "No"}]}
                    defaultOption={this.state.openSourceAllowed}
                    selectionChanged={(value) => this.setState({openSourceAllowed:value})}/>
                    <Question name="data-retention" question="Are there any data retention restrictions? If yes, please specify" options={[
                      {value: true, text: "Yes"}, {value:false, text: "No"}]}
                    defaultOption={this.state.dataRestrictions}
                    selectionChanged={(value) => this.setState({dataRestrictions:value})}/>
                    <div>
                    {this.drawTextbox()}
                    </div>
                    </Container>
                    <center>
                    {(this.state.file !== undefined) && <Button type="submit"><Trans>Submit!</Trans></Button>}
                    <P mt={4} style={{whiteSpace:'pre-wrap'}} hidden={this.state.resultText === ""}>{this.state.resultText}</P>
                    {this.state.postSubmission && <Button onClick={() => this.setState({postSubmission:false,resultText:""})}><Trans>Upload another file</Trans></Button>}
                    </center>
                  </form>
                )}
              />
              </Container>
              </Container>
              </CenterContent>
            )}
          </Mutation>
        )}
      </ApolloConsumer>
    )
  }
}
