import React, { Component, Fragment } from 'react'
import { Text } from '../text'

export class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const label = this.props.children.props.label
    const { isOpen } = this.state

    return (
      <Fragment>
        <Text
          marginBottom="10px"
          onClick={this.onClick}
          style={{ cursor: 'pointer' }}
        >
          {!isOpen && <span>+</span>}
          {isOpen && <span>-</span>}

          {' ' + label}
        </Text>
        {isOpen && this.props.children}
      </Fragment>
    )
  }
}
