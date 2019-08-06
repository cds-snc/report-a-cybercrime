/** @jsx jsx **/
import { Component, Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'
import { H3 } from '../header'
import { Button } from '../button'

export class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { label } = this.props
    const { isOpen } = this.state

    return (
      <Fragment>
        <Button
          backgroundColor="white"
          color="black"
          css={css`
            aria-expanded=${isOpen ? 'true' : 'false'}
            aria-controls=${'panel-' + label}
          `}
          id={'button-' + label}
          marginBottom="10px"
          onClick={this.onClick}
          style={{ cursor: 'pointer' }}
        >
          {!isOpen && <span>+</span>}
          {isOpen && <span>-</span>}
          {' ' + label}
        </Button>
        <div
          css={css`
            aria-labelledby=${'button-' + label}
          `}
          role="region"
          id={'panel-' + label}
        >
          {isOpen && this.props.children}
        </div>
      </Fragment>
    )
  }
}

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
}
