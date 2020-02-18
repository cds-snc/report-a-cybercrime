import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { CheckboxAdapter } from '../components/checkbox'
import { RadioAdapter } from '../components/radio'
import { Stack, Box, Alert, AlertIcon} from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { TextArea } from '../components/text-area'


const validate = () => {
  return {}
}

export const HowDidItStartForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const howdiditstart = {
    howDidTheyReachYou: [],
    application: '',
    others: '',
    whenDidItStart: '',
    howManyTimes: '',
    ...data.formData.howdiditstart,
  }
  //TODO: Move this form data to some sort of a schema file instead?
  var questionsList = [
    {
      name: 'email',
      channel: 'howDidTheyReachYou.email',
      label: 'howDidTheyReachYouLabel.question1',
      hint: 'howDidTheyReachYouLabel.hint1',
    },
    {
      name: 'phone',
      channel: 'howDidTheyReachYou.phone',
      label: 'howDidTheyReachYouLabel.question2',
      hint: 'howDidTheyReachYouLabel.hint2',
    },
    {
      name: 'online',
      channel: 'howDidTheyReachYou.online',
      label: 'howDidTheyReachYouLabel.question3',
      hint: 'howDidTheyReachYouLabel.hint3',
    },
    {
      name: 'application',
      channel: 'howDidTheyReachYou.app',
      label: 'howDidTheyReachYouLabel.question4',
      hint: 'howDidTheyReachYouLabel.hint4',
    },
    {
      name: 'others',
      channel: 'howDidTheyReachYou.others',
      label: 'howDidTheyReachYouLabel.question5',
      hint: 'howDidTheyReachYouLabel.hint5',
    },
  ]

  const timeline = {
    whenDidItStart: [],
    ...data.formData.timeline,
  }

  const whenDidItStart = [
    'whenDidItStart.today',
    'whenDidItStart.pastWeek',
    'whenDidItStart.pastMonth',
    'whenDidItStart.pastYear',
    'whenDidItStart.moreThanOneYear',
  ]

  const recurrenceCheck = {
    howManyTimes: [],
    ...data.formData.timeline,
  }

  const howManyTimes = ['howManyTimes.once', 'howManyTimes.severalTimes']

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="howDidTheyReachYouLabel.question1" />
          <Trans id="howDidTheyReachYouLabel.question2" />
          <Trans id="howDidTheyReachYouLabel.question3" />
          <Trans id="howDidTheyReachYouLabel.question4" />
          <Trans id="howDidTheyReachYouLabel.question5" />
          <Trans id="howDidTheyReachYouLabel.hint1" />
          <Trans id="howDidTheyReachYouLabel.hint2" />
          <Trans id="howDidTheyReachYouLabel.hint3" />
          <Trans id="howDidTheyReachYouLabel.hint4" />
          <Trans id="howDidTheyReachYouLabel.hint5" />
          <Trans id="howDidTheyReachYou.email" />
          <Trans id="howDidTheyReachYou.phone" />
          <Trans id="howDidTheyReachYou.online" />
          <Trans id="howDidTheyReachYou.app" />
          <Trans id="howDidTheyReachYou.others" />
          <Trans id="whenDidItStart.today" />
          <Trans id="whenDidItStart.pastWeek" />
          <Trans id="whenDidItStart.pastMonth" />
          <Trans id="whenDidItStart.pastYear" />
          <Trans id="whenDidItStart.moreThanOneYear" />
          <Trans id="howManyTimes.once" />
          <Trans id="howManyTimes.severalTimes" />
        </div>
      ) : null}

      <Form
        initialValues={howdiditstart}
        onSubmit={data => props.onSubmit(data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <FormArrayControl
              name="howDidTheyReachYou"
              label={<Trans id="howDidTheyReachYou.question" />}
              helperText={<Trans id="howDidTheyReachYou.reminder" />}
            >
              {/** All questions have conditional fields. It makes sense to use the map function */}
              {questionsList.map(question => {
                return (
                  <React.Fragment key={question.channel}>
                    <CheckboxAdapter
                      name="howDidTheyReachYou"
                      value={question.channel}
                      isChecked={howdiditstart.howDidTheyReachYou.includes(
                        question.channel,
                      )}
                      conditionalField={
                        <Field
                          name={question.name}
                          label={<Trans id={question.label} />}
                          helperText={<Trans id={question.hint} />}
                          component={TextArea}
                        />
                      }
                    >
                      {i18n._(question.channel)}
                    </CheckboxAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>

            <FormArrayControl
              name="whenDidItStart"
              label={<Trans id="whenDidItStart.label" />}
            >
              {whenDidItStart.map(key => {
                return (
                  <React.Fragment key={key}>
                    <RadioAdapter
                      name="whenDidItStart"
                      value={key}
                      isChecked={timeline.whenDidItStart.includes(key)}
                    >
                      {i18n._(key)}
                    </RadioAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>

            <FormArrayControl
              name="howManyTimes"
              label={<Trans id="howManyTimes.label" />}
            >
              {howManyTimes.map(key => {
                return (
                  <Box key={key}>
                    <RadioAdapter
                      name="howManyTimes"
                      value={key}
                      isChecked={recurrenceCheck.howManyTimes.includes(key)}
                    >
                      {i18n._(key)}
                    </RadioAdapter>
                  </Box>
                )
              })}
            </FormArrayControl>
            <Alert status="success" backgroundColor="blue.100">
              <AlertIcon name="info-outline" color="blue.800" />
              <Trans id="howDidItStartPage.tip" />
            </Alert>
            <NextAndCancelButtons
              next={<Trans id="howDidItStartPage.nextPage" />}
              button={<Trans id="howDidItStartPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
