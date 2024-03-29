import * as React from "react"
import {CSSProperties, useEffect, useRef, useState} from "react"
import {Field, FieldElement, getFieldType} from "@use-ui/hooks"
import {FormGroupProps} from "../FormGroup"
import cx from "classnames"
import {FieldType} from "@use-ui/hooks/dist/fieldTypes"
import {enValidateMessages, message} from "@use-ui/hooks/dist/validate"
import {equalExcept} from "../utils"

type Props<V> = FormGroupProps &
  RenderProp & {
    value: V
    save(value: V): Promise<unknown>
    label?: any
    cancel?: boolean
    style?: CSSProperties
    disabled?: boolean
    loading?: boolean
    saveOnChange?: boolean // onBlur otherwise
  }

type RenderProp =
  | {component: React.FC<FieldComponentProps>}
  | {render: (props: FieldComponentProps) => React.ReactNode}

interface FieldComponentProps {
  field: Field
  right?: any
  label?: any
  disabled?: boolean
}

export const InlineEdit = React.memo(InlineEditRaw, (prev, next) => {
  return equalExcept(prev, next, "save", "component" as any, "render" as any)
}) as typeof InlineEditRaw

export function InlineEditRaw<V>(p: Props<V>) {
  const props: Props<V> = {
    style: {},
    ...p,
  }

  const fieldElement = useRef<FieldElement>()

  const [edited, setEdited] = useState("")

  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState(null)

  const progress = saving || props.loading

  const type: FieldType<V> =
    fieldElement.current && getFieldType(fieldElement.current.type || "string")

  function startEditing(e?) {
    e && e.preventDefault()
    setEditing(true)
  }

  async function save(e?) {
    e && e.preventDefault()
    setSaving(true)

    try {
      await props.save(type.valueToData(edited))
      stopEditing()
      setSaved(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  function cancel(e?) {
    e && e.preventDefault()
    setEdited(type.dataToValue(props.value))
    stopEditing()
  }

  function stopEditing() {
    setError(null)
    setEditing(false)
  }

  function tryToSave() {
    if (progress || !editing) return
    if (!updateValidationError()) {
      save()
    }
  }

  function onKeyDown(e) {
    if (e.key == "Enter") {
      e.preventDefault()
      tryToSave()
    }
    if (e.key == "Escape") return void cancel(e)
  }

  useEffect(() => {
    if (fieldElement.current) {
      const type = getFieldType(fieldElement.current.type || "string") // "render" type could be old here, recreate it
      setEdited(type.dataToValue(props.value))
    }
  }, [props.value])

  useEffect(() => {
    if (!editing) {
      fieldElement.current.blur()
    } else {
      fieldElement.current.focus()
    }
  }, [editing])

  function renderControls() {
    if (editing) {
      return (
        <>
          {error ? (
            <a className="error-saving" href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
              <i className="fa fa-warning" />
            </a>
          ) : (
            <a className="save" href="#" onClick={(e) => e.preventDefault()} tabIndex={-1}>
              <i className="fa fa-check" />
            </a>
          )}

          {props.cancel && (
            <>
              <div className="delim" />

              <a
                className="cancel"
                href="#"
                onMouseDown={props.disabled ? null : cancel}
                tabIndex={-1}
              >
                <i className="fa fa-times cancel" />
              </a>
            </>
          )}
        </>
      )
    }

    return saved ? (
      <a className="saved" href="#" onClick={props.disabled ? null : startEditing} tabIndex={-1}>
        <i className="fa fa-thumbs-o-up" />
      </a>
    ) : (
      <a
        className="start-edit"
        href="#"
        onClick={props.disabled ? null : startEditing}
        tabIndex={-1}
      >
        <i className="fa fa-pencil" />
      </a>
    )
  }

  function updateValidationError() {
    const error = message(fieldElement.current.constraint, edited, enValidateMessages)
    setError(error)
    return !!error
  }

  const field: Field = {
    setFieldElement: (fe) => {
      return (fieldElement.current = fe)
    },
    getValue: () => edited,
    setValue: (s) => {
      setEdited(s)
      if (error) updateValidationError()
    },
    onBlur: p.saveOnChange ? undefined : tryToSave,
    onFocus: startEditing,
    getError: () => error,
  }

  useEffect(() => {
    if (editing && p.saveOnChange) tryToSave()
  }, [edited])

  const fieldProps: FieldComponentProps = {
    field,
    label: props.label,
    right: progress ? (
      <Spinner />
    ) : (
      <div className={cx("inline-edit-controls", {disabled: props.disabled})}>
        {renderControls()}
      </div>
    ),
    disabled: progress || props.disabled,
  }

  return (
    <div className="inline-edit" style={props.style} onKeyDown={onKeyDown}>
      {"component" in props
        ? React.createElement(props.component, fieldProps)
        : props.render(fieldProps)}
    </div>
  )
}

const Spinner = () => (
  <div className="inline-edit-spinner">
    <div className="lds-spinner" style={{width: "100%", height: "100%"}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)
