/** @jsx jsx **/
import React from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Stack } from '@chakra-ui/core'
import { Text } from '../text'
import { Ol } from '../ordered-list'
import { Li } from '../list-item'
import { A } from '../link'
import { useForm } from 'react-final-form'
import { Alert } from '../Messages'
import { focusTarget } from '../../utils/focusTarget'
import { useEffect } from 'react'

export const ErrorSummary = (props) => {
  const { errors } = useForm().getState()

  useForm().pauseValidation()

  useEffect(() => {
    const summary = document
      .getElementById('error-summary')
      .getBoundingClientRect()

    window.scrollTo(0, summary.y - 16)
  })
  let errorLength = Object.keys(errors).length

  return (
    <Alert id="error-summary" status="error" aria-atomic>
      <Stack>
        <Text fontSize="md" fontWeight="bold">
          {props.children}
        </Text>

        <Ol {...(errorLength <= 1 && { listStyleType: 'none', ml: 0 })}>
          {Object.keys(errors).map((key) => {
            // Omit all errors set to true from showing in ErrorSummary
            console.log(key)
            console.log(errors)
            return errors[key] !== true ? (
              <Li key={key} fontSize="md">
                <A
                  fontSize="md"
                  fontWeight="bold"
                  color="blue.900"
                  href={`#${key}`}
                  onClick={(event) => {
                    let target = event.target

                    if (focusTarget(target)) {
                      event.preventDefault()
                    }
                  }}
                >
                  {Array.isArray(errors[key]) ? (
                    errors[key].map((msg) => (
                      <React.Fragment>
                        <Trans key={msg} id={msg} />{' '}
                      </React.Fragment>
                    ))
                  ) : (
                    <Trans id={errors[key]} />
                  )}
                </A>
              </Li>
            ) : null
          })}
        </Ol>
      </Stack>
    </Alert>
  )
}
ErrorSummary.defaultProps = {
  children: <Trans id="default.hasValidationErrors" />,
}

ErrorSummary.propTypes = {
  children: PropTypes.any,
}
