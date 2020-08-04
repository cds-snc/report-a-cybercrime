import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const CheckBox = ({ field, form, ...props }) => {
  return (
    <Row
      className="checkbox-row"
      onClick={(e) => {
        console.log(e.target)
      }}
    >
      <Form.Check inline={true} custom>
        <Form.Check.Input
          {...field}
          value={props.value}
          type="checkbox"
          checked={props.checked}
          id={props.id}
        />
        <Form.Check.Label for={props.id}>{props.label}</Form.Check.Label>
      </Form.Check>
      {props.checked && props.children}
    </Row>
    /* 
      <div class="custom-control form-control-lg custom-checkbox">  
        <input {...field} type="checkbox" class="custom-control-input" id="customCheck1" value={props.value} checked={props.checked}/>  
        <label class="custom-control-label" for="customCheck1">{props.label}</label>  
        {props.checked && props.children}
      </div>      
      
      

     */
  )
}
