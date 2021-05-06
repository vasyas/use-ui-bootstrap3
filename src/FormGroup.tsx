import * as React from "react"
import {CSSProperties} from "react"

export interface FormGroupProps {
  /** @param  Label for the form group */
  label?: any
  /** Feedback (usually, validation error) */
  invalidFeedback?: any
  /** Additional style that should be passed to the top div */
  style?: CSSProperties
}

/**
 * An input row, optionally containing a label and having error feedback text.
 *
 * Input is specified in children.
 */
export const FormGroup: React.FunctionComponent<FormGroupProps> = ({
  label = null,
  invalidFeedback = null,
  style = undefined,
  children,
}) => {
  if (label == null) {
    return <>{children}</>
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
