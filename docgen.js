const fs = require("fs")

const docgen = require("react-docgen-typescript")
const {markdownRender} = require("react-docgen-typescript-markdown-render")

const options = {
  savePropValueAsString: true,
}

const docs = docgen.parse("./src/ActionResult.tsx", options)

console.dir(docs, {depth: 100})

const result = markdownRender(docs)

fs.writeFileSync("api-docs/docs.md", result)
