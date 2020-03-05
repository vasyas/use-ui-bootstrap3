import * as React from "react"
import {useRef} from "react"
import {Constraint, Field, FieldTypeName} from "@use-ui/hooks"
import {FormGroup, FormGroupProps} from "./FormGroup"

interface Props extends Partial<Constraint>, FormGroupProps {
  field: Field
  type?: FieldTypeName
  autoFocus?: boolean
  disabled?: boolean
  right?: any
  placeholder?: string
}

export const Input = ({
  field,
  type,
  label,
  autoFocus,
  disabled,
  right,
  placeholder,
  ...other
}: Props) => {
  const ref = useRef<HTMLInputElement>()

  field.setFieldElement({
    constraint: other,
    type,
    focus: () => ref.current.focus(),
    blur: () => ref.current.blur(),
  })

  return (
    <FormGroup label={label} invalidFeedback={field.getError()}>
      <input
        type="text"
        className="form-control"
        value={field.getValue()}
        onChange={e => field.setValue(e.target.value)}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        ref={ref}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
      />
      {right}
    </FormGroup>
  )
}
