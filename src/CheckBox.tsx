import * as React from "react"
import {useRef} from "react"
import {Constraint, Field} from "@use-ui/hooks"
import {FormGroup, FormGroupProps} from "./FormGroup"

interface Props extends Partial<Constraint>, FormGroupProps {
  field: Field
  autoFocus?: boolean
  disabled?: boolean
  right?: any
  id?: string
  className?: string
}

export const CheckBox = ({
  id,
  className,
  field,
  label,
  autoFocus,
  disabled,
  right,
  ...other
}: Props) => {
  const ref = useRef<HTMLInputElement>()

  field.setFieldElement({
    constraint: other,
    type: "boolean",
    focus: () => ref.current.focus(),
    blur: () => ref.current.blur(),
  })

  return (
    <FormGroup label={label} invalidFeedback={field.getError()}>
      <input
        type="checkbox"
        className={className || "form-control"}
        onChange={(e) => field.setValue("" + e.target.checked)}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        ref={ref}
        autoFocus={autoFocus}
        disabled={disabled}
        checked={field.getValue() == "true"}
        id={id}
      />
      {right}
    </FormGroup>
  )
}
