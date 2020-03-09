import * as React from "react"
import {useEffect, useRef, useState} from "react"
import AsyncSelect from "react-select/async"
import {components} from "react-select"
import {highlight} from "./utils"
import {FormGroup, FormGroupProps} from "./FormGroup"
import {Constraint, Field} from "@use-ui/hooks"
import {RemoteTopic} from "@push-rpc/core"

interface Option {
  value: string
  label: string
}

interface Props<D, P> extends Partial<Constraint>, FormGroupProps {
  field: Field

  topic?: RemoteTopic<D[], P>
  params?: P
  map?: (D) => Option

  options?: Option[] | object
  right?: any

  placeholder?: any
  clear?: boolean
  indicatorSeparator?: boolean
  multi?: boolean
}

export function Select<D, P>({
  label,
  field,

  topic,
  params,
  map = i => i as any,

  options,
  right,

  placeholder,
  clear,
  indicatorSeparator,
  multi,

  ...other
}: Props<D, P>) {
  if (!options && !topic) {
    throw new Error("Either options or topic is required for Select")
  }

  const optionsArray = getOptionsArray(options, map)

  const ref = useRef<HTMLInputElement>()
  const [loading, setLoading] = useState<boolean>(false)
  const [cachedOptions, setCachedOptions] = useState<Option[]>([])
  const [selected, setSelected] = useState<Option[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  async function loadOptions(search) {
    let options = optionsArray

    if (!options) {
      setLoading(true)

      try {
        const items = await topic.get({...params, search})
        options = items.map(map)
      } finally {
        setLoading(false)
      }
    }

    setCachedOptions(options)
    return options
  }

  // set selected option
  useEffect(() => {
    const value = field.getValue()
    const selectedValues = value ? (multi ? value.split(",") : [value]) : []

    const selected = cachedOptions.filter(o => selectedValues.indexOf(o.value) >= 0)

    setSelected(selected)
  }, [cachedOptions, field.getValue()])

  function onChange(val) {
    if (Array.isArray(val) && !val.length) {
      // https://github.com/JedWatson/react-select/issues/2682
      val = ""
    }

    if (!val) {
      field.setValue("")
    } else {
      if (!Array.isArray(val)) {
        val = [val]
      }

      field.setValue(val.map(v => v.value).join(","))
    }
  }

  field.setFieldElement({
    type: multi ? "stringList" : "string",
    constraint: other,
    focus: () => ref.current && ref.current.focus(),
    blur: () => ref.current.blur && ref.current.blur(),
  })

  return (
    <FormGroup label={label} invalidFeedback={field.getError()}>
      <AsyncSelect
        className="select"
        key={JSON.stringify(params) + "-" + JSON.stringify(options)}
        ref={ref}
        styles={{
          ...styles,
          indicatorSeparator: !indicatorSeparator
            ? () => ({
                display: "none",
              })
            : undefined,
        }}
        menuPortalTarget={document.getElementById("popupTarget")}
        menuShouldBlockScroll={true}
        classNamePrefix="select"
        menuPlacement="auto"
        defaultOptions
        components={{
          Option: props => <HighlightingOption {...props} inputValue={inputValue} />,
        }}
        isLoading={loading}
        value={selected}
        loadOptions={loadOptions}
        onInputChange={val => setInputValue(val)}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        onChange={onChange}
        placeholder={placeholder}
        isClearable={clear != null || !other.required}
        isMulti={multi}
      />
      {right}
    </FormGroup>
  )
}

const styles = {
  control: ({isDisabled, isFocused}) => ({}),
  valueContainer: () => ({
    display: "flex",
    flex: 1,
    overflow: "hidden",
  }),
  input: () => ({}),
}

const HighlightingOption = props => {
  const {label, inputValue, value, ...other} = props

  return (
    <components.Option label={label} {...other}>
      {highlight(label, inputValue)}
    </components.Option>
  )
}

function getOptionsArray(options, map): Option[] {
  if (!options) return options

  // const {allOption, allOptionLabel} = props

  if (!Array.isArray(options)) {
    options = Object.keys(options || {}).map(value => ({
      value,
      label: options[value],
    }))
  }

  options = (options as any[]).map(o =>
    typeof o == "string"
      ? {
          value: o,
          label: o,
        }
      : o
  )

  options = options.map(map)

  /*
  if (allOption) {
    options = [
      {
        value: "",
        label: allOptionLabel,
      },
      ...options,
    ]
  }
   */

  return options
}
