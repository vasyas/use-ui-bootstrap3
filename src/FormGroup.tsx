import * as React from "react"
import {CSSProperties} from "react"

export interface FormGroupProps {
  label?: any
  invalidFeedback?: any
  style?: CSSProperties
}

export const FormGroup = ({
  label = null,
  invalidFeedback = null,
  style = undefined,
  children,
}: FormGroupProps & {children: any}) => {
  if (label == null) {
    return children
  }

  return (
    <div className="form-group" style={style}>
      {label && <label className={classNames.label}>{label}</label>}
      <div className={classNames.field}>
        {children}
        {invalidFeedback && <div className="invalid-feedback form-text">{invalidFeedback}</div>}
      </div>
    </div>
  )
}

const classNames = {
  label: "col-md-3",
  field: "col-md-9",
}

export function setFormGroupClassNames(p: Partial<typeof classNames>) {
  Object.assign(classNames, p)
}
