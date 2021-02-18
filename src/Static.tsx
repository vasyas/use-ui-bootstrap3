import * as React from "react"
import {FormGroup, FormGroupProps} from "./FormGroup"
import {getChildrenText} from "./utils"

interface Props extends FormGroupProps {
  children: any
  htmlId?: string
}

export const Static = ({htmlId, label, invalidFeedback, children}: Props) => (
  <FormGroup label={label} invalidFeedback={invalidFeedback}>
    <input
      id={htmlId}
      type="text"
      className="form-control"
      value={getChildrenText(children)}
      disabled
    />
  </FormGroup>
)
