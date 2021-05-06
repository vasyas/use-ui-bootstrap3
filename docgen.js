const fs = require("fs")
const os = require("os")
const docgen = require("react-docgen-typescript")
const ReactDocGenMarkdownRenderer = require("react-docgen-markdown-renderer")
const {template, type} = require("react-docgen-renderer-template")

function generateDocs() {
  const options = {
    savePropValueAsString: true,
  }

  const docs = docgen
    .parse("./src/index.ts", options)
    .filter((d) => d.displayName[0].toUpperCase() == d.displayName[0])

  return docs
}

function renderMarkdown(docs) {
  let result = `
Component API

## Components
`

  for (const component of docs) {
    result += `- [\\<${
      component.displayName
    }/\\>](docs.md#${component.displayName.toLowerCase()})\n`
  }

  result += "\n"

  const renderer = createRenderer()

  for (const component of docs) {
    const componentDoc = renderer.render("./src", component, [])
    result += componentDoc
    result += "&nbsp;\n&nbsp;\n"
  }
  return result
}

function createRenderer() {
  const generatePropsTable = (props, getType) => {
    const entries = Object.entries(props)
    if (entries.length === 0) return "This component does not have any props."

    let propsTableHeader = `prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
`
    return (
      propsTableHeader +
      entries
        .map(
          ([propName, propValue]) =>
            `**${propName}** | \`${getType(propValue.type)}\` | ${
              propValue.defaultValue ? `\`${propValue.defaultValue}\`` : ""
            } | ${propValue.required ? ":white_check_mark:" : ":x:"} | ${
              propValue.description ? propValue.description : ""
            }`
        )
        .join(os.EOL)
    )
  }

  const templateCreator = template({
    unknown: type`${({context}) => context.type.name}`,
    func: "Function",
    array: "Array",
    object: "Object",
    string: "string",
    number: "Number",
    boolean: "boolean",
    node: "ReactNode",
    element: "ReactElement",
    symbol: "Symbol",
    any: "*",
    custom: type`${({context}) =>
      context.type.raw.includes("function(") ? "(custom validator)" : context.type.raw}`,
    shape: "Shape",
    arrayOf: type`Array[]<${({context, getType}) =>
      context.type.value.raw ? context.type.value.raw : getType(context.type.value)}>`,
    objectOf: type`Object[#]<${({context, getType}) =>
      context.type.value.raw ? context.type.value.raw : getType(context.type.value)}>`,
    instanceOf: type`${({context}) => context.type.value}`,
    enum: type`Enum(${({context, getType}) =>
      context.type.computed
        ? context.type.value
        : context.type.value.map((value) => getType(value)).join(", ")})`,
    union: type`Union<${({context, getType}) =>
      context.type.computed
        ? context.type.value
        : context.type.value
            .map((value) => (value.raw ? value.raw : getType(value)))
            .join("\\|")}>`,
  })

  const templateObject = templateCreator`## ${({context}) => context.componentName}${({
    context,
  }) => {
    let headerValue = ""
    if (context.srcLinkUrl) {
      headerValue = `${os.EOL}From [\`${context.srcLink}\`](${context.srcLinkUrl})`
    }
    if (context.description) {
      headerValue += os.EOL + os.EOL + context.description
    }
    headerValue += os.EOL
    return headerValue
  }}
${({context, getType}) => generatePropsTable(context.props, getType)}
${({context}) =>
  context.isMissingComposes
    ? `*Some or all of the composed components are missing from the list below because a documentation couldn't be generated for them.
See the source code of the component for more information.*`
    : ""}${({context, getType}) =>
    context.composes.length > 0
      ? `
${context.componentName} gets more \`propTypes\` from these composed components
${context.composes
  .map(
    (component) =>
      `#### ${component.componentName}
${generatePropsTable(component.props, getType)}`
  )
  .join(os.EOL + os.EOL)}`
      : ""}
`

  return new ReactDocGenMarkdownRenderer({template: templateObject})
}

const docs = generateDocs()
const markdown = renderMarkdown(docs)
fs.writeFileSync("api-docs/docs.md", markdown)
