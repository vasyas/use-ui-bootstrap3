const fs = require("fs")
const docgen = require("react-docgen-typescript")
const ReactDocGenMarkdownRenderer = require("react-docgen-markdown-renderer")
const {markdownRender} = require("react-docgen-typescript-markdown-render")

const options = {
  savePropValueAsString: true,
}

const docs = docgen
  .parse("./src/index.ts", options)
  .filter((d) => d.displayName[0].toUpperCase() == d.displayName[0])

const renderer = new ReactDocGenMarkdownRenderer(/* constructor options object */)

let result = `
Component API

## Components
`

for (const component of docs) {
  result += `- [\\<${component.displayName}/\\>](docs.md#${component.displayName.toLowerCase()})\n`
}

result += "\n"

for (const component of docs) {
  // const componentDoc = renderer.render("./src", component, [])
  const componentDoc = markdownRender([component])
  result += componentDoc
  result += "&nbsp;\n&nbsp;\n"
}

fs.writeFileSync("api-docs/docs.md", result)
