/** @jsx jsx */
import { Component } from 'react'
import { jsx } from '@emotion/core'
import { Form, Field } from 'react-final-form'
import styled from '@emotion/styled'
import { P } from './components/paragraph'
import {Text} from './components/text'
import { Button } from './components/button'
import { FileUpload } from './components/file-upload'
import { finalFormAdapter } from './utils/finalFormAdapter'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { UPLOAD_FILE_MUTATION } from './utils/queriesAndMutations'
import { Trans } from '@lingui/macro'
import {RadioButton} from './components/radiobutton'
import {Container} from './components/container'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export class Question extends Component {

    constructor(props) {
      super(props)
      this.state = {
        selectedOption: this.props.defaultOption,
        displayText: ""
        }
      this.setState({selectedOption:props.defaultOption})  
      this.makeOptions = this.makeOptions.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (value, text) => {
        this.setState({
            displayText:text,
            selectedOption:value
        })
        this.props.selectionChanged(value)
    }

    makeOptions = () => {
        var retJSX = []
        console.log(this.props)
        console.log(this.props.question);
        for (var option of this.props.options){
            const val = option.value
            const text = option.text
            if (this.state.displayText === "" && this.state.selectedOption === val){
                this.setState({
                    displayText: text,
                    selectedOption: val
                })
            }
            retJSX.push(<RadioButton name={this.props.name} checked={this.state.selectedOption === val} id={this.props.name + "-" + val} label={text} value={val} onClick={() => this.handleClick(val, text)}/>)
        }
        return retJSX;
    }

    /**
     * This should receive a prop called options, containing a list of objects in the following format:
     * text = the text on the question
     * value = the value of the option,
     * 
     * Other props:
     * defaultOption: The value of the default option to send
     * selectionChanged: A callback that is called with the value of the option selected
     * question: The text of the question to ask
     * name = a unique name for the question
     */
     render = () => (
        <div>

            <Trans id={this.props.question} render={<P mt={2} fontSize={24}/>}>{this.props.question}</Trans>
            <Accordion allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{width:"auto"}}>
                    <Trans render={<Text fontSize={16} display=""/>} id={this.state.displayText}/>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                {this.makeOptions()}
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            
        </div>
     )
}