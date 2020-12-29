import * as React from "react"
import {CSSProperties, useEffect, useRef, useState} from "react"
import {Field, FieldElement, getFieldType} from "@use-ui/hooks"
import {FormGroupProps} from "../FormGroup"
import cx from "classnames"
import {FieldType} from "@use-ui/hooks/dist/fieldTypes"
import {enValidateMessages, message} from "@use-ui/hooks/dist/validate"

interface Props<V> extends FormGroupProps {
  value: V
  save(value: V): Promise<void>
  component: (props: FieldComponentProps) => React.ReactElement
  label?: any
  cancel?: boolean
  style?: CSSProperties
  disabled?: boolean
  loading?: boolean
}

interface FieldComponentProps {
  field: Field
  right?: any
  label?: any
  disabled?: boolean
}

// TODO move non-presentation to @use-ui/hooks
export function InlineEdit<V>(p: Props<V>) {
  const props: Props<V> = {
    style: {},
    ...p,
  }

  const fieldElement = useRef<FieldElement>()

  const [edited, setEdited] = useState("")

  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
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
          <a className="save" href="#" onClick={e => e.preventDefault()} tabIndex={-1}>
            <i className="fa fa-check save" />
          </a>

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

    return (
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

  const FieldComponent = props.component

  const field: Field = {
    setFieldElement: fe => {
      return (fieldElement.current = fe)
    },
    getValue: () => edited,
    setValue: s => {
      setEdited(s)
      if (error) updateValidationError()
    },
    onBlur: tryToSave,
    onFocus: startEditing,
    getError: () => error,
  }

  return (
    <div className="inline-edit" style={props.style} onKeyDown={onKeyDown}>
      <FieldComponent
        field={field}
        label={props.label}
        right={
          progress ? (
            <Spinner />
          ) : (
            <div className={cx("inline-edit-controls", {disabled: props.disabled})}>
              {renderControls()}
            </div>
          )
        }
        disabled={progress || props.disabled}
      />
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
