import * as React from "react"
import {FormGroup, FormGroupProps} from "./FormGroup"
import {getChildrenText} from "./utils"

interface Props extends FormGroupProps {
  children: any
  id?: string
  className?: string
}

export const Static = ({id, className, label, invalidFeedback, children}: Props) => (
  <FormGroup label={label} invalidFeedback={invalidFeedback}>
    <input
      id={id}
      type="text"
      className={className || "form-control"}
      value={getChildrenText(children)}
      disabled
    />
  </FormGroup>
)
