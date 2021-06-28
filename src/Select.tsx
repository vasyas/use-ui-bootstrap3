import * as React from "react"
import {useEffect, useRef, useState} from "react"
import AsyncSelect from "react-select/async"
import {components} from "react-select"
import {equalExcept, highlight} from "./utils"
import {FormGroup, FormGroupProps} from "./FormGroup"
import {Constraint, Field, FieldTypeName} from "@use-ui/hooks"
import {RemoteTopic} from "@push-rpc/core"

export type Option = {
  value: string
  label: string
}

export type OptionRequest = {
  search: string
  values: string[]
}

interface Props<TopicData, TopicParams, MappedOption extends Option = Option>
  extends Partial<Constraint>,
    FormGroupProps {
  field: Field
  type?: FieldTypeName

  topic?: RemoteTopic<TopicData[], TopicParams>
  params?: TopicParams
  map?: (d: TopicData) => MappedOption

  options?: MappedOption[] | Record<string, string> | TopicData[]

  onSelect?(oo: MappedOption[]): void

  right?: any
  placeholder?: any
  clear?: boolean
  indicatorSeparator?: boolean
  multi?: boolean
  disabled?: boolean
  className?: string
  id?: string
}

export const Select = React.memo(SelectRaw, (prev, next) => {
  return (
    equalExcept(prev, next, "field", "map", "onSelect") &&
    prev.field.getValue() == next.field.getValue() &&
    prev.field.getError() == next.field.getError()
  )
}) as typeof SelectRaw

function SelectRaw<TopicData, TopicParams, MappedOption extends Option = Option>({
  field,
  type,

  topic,
  params,
  map = (i) => i as any,

  options,

  onSelect = () => {},

  style,
  right,
  placeholder,
  clear,
  indicatorSeparator,
  multi,
  disabled,
  className,
  id,

  label,

  ...other
}: Props<TopicData, TopicParams, MappedOption>) {
  if (!options && !topic) {
    throw new Error("Either options or topic is required for Select")
  }

  const optionsArray = getOptionsArray<MappedOption>(options, map)

  const ref = useRef<HTMLInputElement>()
  const [loading, setLoading] = useState<boolean>(false)
  const [cachedOptions, setCachedOptions] = useState<MappedOption[]>([]) // cached options used to lookup option object from passed value
  const [selected, setSelected] = useState<MappedOption[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const [defaultOptions, setDefaultOptions] = useState<boolean | MappedOption[]>()

  const selectedValues = field.getValue()
    ? multi
      ? field.getValue().split(",")
      : [field.getValue()]
    : []

  async function loadOptions(search, values) {
    let options = optionsArray

    if (!options) {
      setLoading(true)

      try {
        const items = await topic.get({...params, search, values})
        options = items.map(map)
      } finally {
        setLoading(false)
      }
    } else {
      options = options.filter(
        (o) =>
          !search || o.label.toLowerCase().indexOf(search.toLowerCase()) >= 0 || o.value == search
      )
    }

    setCachedOptions(options)
    return options
  }

  // set selected option
  useEffect(() => {
    const value = field.getValue()
    const selectedValues = value ? (multi ? value.split(",") : [value]) : []

    const selected = cachedOptions.filter((o) => selectedValues.indexOf(o.value) >= 0)

    setSelected(selected)
    onSelect(selected)
  }, [cachedOptions, field.getValue()])

  const initialRender = useRef(true)

  // on topic param change:
  // 1. reset value
  // 2. re-load options, update defaultOptions & cached
  useEffect(() => {
    if (!initialRender.current) {
      field.setValue("")
      loadOptions(null, selectedValues).then(setDefaultOptions)
    } else {
      setDefaultOptions(true)

      initialRender.current = false
    }
  }, [JSON.stringify(params)])

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

      field.setValue(val.map((v) => v.value).join(","))
    }
  }

  field.setFieldElement({
    type: type || (multi ? "stringList" : "string"),
    constraint: other,
    focus: () => ref.current && ref.current.focus(),
    blur: () => ref.current.blur && ref.current.blur(),
  })

  // key contains defaultOptions b/c we would like to update defaultOptions on topic params change
  return (
    <FormGroup label={label} invalidFeedback={field.getError()} style={style}>
      <AsyncSelect
        className={`select ${className || ""}`.trim()}
        key={JSON.stringify(options) + "-" + JSON.stringify(defaultOptions)}
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
        defaultOptions={defaultOptions}
        components={{
          Option: (props) => <HighlightingOption {...props} inputValue={inputValue} />,
        }}
        isLoading={loading}
        value={selected}
        loadOptions={loadOptions}
        onInputChange={(val) => setInputValue(val)}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        onChange={onChange}
        placeholder={placeholder}
        isClearable={clear != null || !other.required}
        isMulti={multi}
        isDisabled={disabled}
        id={id}
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

const HighlightingOption = (props) => {
  const {label, inputValue, value, ...other} = props

  return (
    <components.Option label={label} {...other}>
      {highlight(label, inputValue)}
    </components.Option>
  )
}

function getOptionsArray<MappedOption extends Option>(options, map): MappedOption[] {
  if (!options) return options

  if (!Array.isArray(options)) {
    options = Object.keys(options || {}).map((value) => ({
      value,
      label: options[value],
    }))
  }

  options = (options as any[]).map((o) =>
    typeof o == "string"
      ? {
          value: o,
          label: o,
        }
      : o
  )

  options = options.map(map)

  return options
}
