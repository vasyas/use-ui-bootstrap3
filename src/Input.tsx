import * as React from "react"
import {useRef} from "react"
import {Constraint, Field, FieldTypeName} from "@use-ui/hooks"
import {FormGroup, FormGroupProps} from "./FormGroup"

/**
 * Render html input in a FormGroup.
 *
 * Example:
 * ```
 * const form = useForm({ email: null })
 * <Input
 *   label="Email"
 *   field={form.email}
 *   required
 * />
 * ```
 */
export const Input = ({
  field,
  type,
  label,
  autoFocus,
  disabled,
  right,
  placeholder,
  inputType = "text",
  id,
  className,
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
        type={inputType}
        className={className || "form-control"}
        value={field.getValue()}
        onChange={(e) => field.setValue(e.target.value)}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        ref={ref}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        id={id}
      />
      {right}
    </FormGroup>
  )
}

interface Props extends Partial<Constraint>, FormGroupProps {
  /** Reference to [@use-ui/hooks form field](https://github.com/vasyas/use-ui-hooks/blob/master/api-docs/README.md#useform) */
  field: Field
  type?: FieldTypeName
  autoFocus?: boolean
  disabled?: boolean
  right?: any
  placeholder?: string
  inputType?: string
  id?: string
  className?: string
}
