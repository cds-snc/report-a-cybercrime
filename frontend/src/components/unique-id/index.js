import { Component } from 'react'
import PropTypes from 'prop-types'

let counter = 0
export class UniqueID extends Component {
  static propTypes = { children: PropTypes.func.isRequired }

  state = {
    id: counter++,
  }

  render() {
    return this.props.children('id-' + this.state.id)
  }
}
