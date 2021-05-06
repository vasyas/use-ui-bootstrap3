
Component API

## Components
- [\<ActionResult/\>](docs.md#actionresult)
- [\<Input/\>](docs.md#input)
- [\<Select/\>](docs.md#select)
- [\<Static/\>](docs.md#static)
- [\<CheckBox/\>](docs.md#checkbox)
- [\<TextArea/\>](docs.md#textarea)
- [\<FormGroup/\>](docs.md#formgroup)
- [\<InlineEdit/\>](docs.md#inlineedit)

### ActionResult

Display block with success result or error message.

To use this component, you need to wrap your component tree in a \`\`\`ResultContext\`\`\` from @use-ui/hooks.

#### Props

| Name  | Type   | Default value | Description                                                               |
| ----- | ------ | ------------- | ------------------------------------------------------------------------- |
| error | string | undefined     | Error message to show, otherwise result from result context would be used |
&nbsp;
&nbsp;
### Input

Render html input in a FormGroup.

Example:
\`\`\`
const form = useForm({ email: null })
&lt;Input
  label="Email"
  field={form.email}
  required
/>
\`\`\`

#### Props

| Name               | Type             | Default value | Description                                           |
| ------------------ | ---------------- | ------------- | ----------------------------------------------------- |
| field _(required)_ | Field            |               |                                                       |
| type               | string \| number |               |                                                       |
| autoFocus          | boolean          |               |                                                       |
| disabled           | boolean          |               |                                                       |
| right              | any              |               |                                                       |
| placeholder        | string           |               |                                                       |
| inputType          | string           | text          |                                                       |
| id                 | string           |               |                                                       |
| className          | string           |               |                                                       |
| required           | boolean          |               |                                                       |
| integer            | boolean          |               |                                                       |
| number             | boolean          |               |                                                       |
| nonNegative        | boolean          |               |                                                       |
| label              | any              |               | @param Label for the form group                       |
| invalidFeedback    | any              |               | Feedback (usually, validation error)                  |
| style              | CSSProperties    |               | Additional style that should be passed to the top div |
&nbsp;
&nbsp;
### Select



#### Props

| Name               | Type                                         | Default value   | Description                                           |
| ------------------ | -------------------------------------------- | --------------- | ----------------------------------------------------- |
| field _(required)_ | Field                                        |                 |                                                       |
| topic              | RemoteTopic&lt;TopicData\[], TopicParams>    |                 |                                                       |
| params             | TopicParams                                  |                 |                                                       |
| map                | (d: TopicData) => MappedOption               | (i) => i as any |                                                       |
| options            | Record&lt;string, string> \| MappedOption\[] |                 |                                                       |
| onSelect           | (oo: MappedOption\[]) => void                | () => {}        |                                                       |
| right              | any                                          |                 |                                                       |
| placeholder        | any                                          |                 |                                                       |
| clear              | boolean                                      |                 |                                                       |
| indicatorSeparator | boolean                                      |                 |                                                       |
| multi              | boolean                                      |                 |                                                       |
| disabled           | boolean                                      |                 |                                                       |
| className          | string                                       |                 |                                                       |
| id                 | string                                       |                 |                                                       |
| required           | boolean                                      |                 |                                                       |
| integer            | boolean                                      |                 |                                                       |
| number             | boolean                                      |                 |                                                       |
| nonNegative        | boolean                                      |                 |                                                       |
| label              | any                                          |                 | @param Label for the form group                       |
| invalidFeedback    | any                                          |                 | Feedback (usually, validation error)                  |
| style              | CSSProperties                                |                 | Additional style that should be passed to the top div |
&nbsp;
&nbsp;
### Static



#### Props

| Name            | Type          | Default value | Description                                           |
| --------------- | ------------- | ------------- | ----------------------------------------------------- |
| id              | string        |               |                                                       |
| className       | string        |               |                                                       |
| label           | any           |               | @param Label for the form group                       |
| invalidFeedback | any           |               | Feedback (usually, validation error)                  |
| style           | CSSProperties |               | Additional style that should be passed to the top div |
&nbsp;
&nbsp;
### CheckBox



#### Props

| Name               | Type          | Default value | Description                                           |
| ------------------ | ------------- | ------------- | ----------------------------------------------------- |
| field _(required)_ | Field         |               |                                                       |
| autoFocus          | boolean       |               |                                                       |
| disabled           | boolean       |               |                                                       |
| right              | any           |               |                                                       |
| id                 | string        |               |                                                       |
| className          | string        |               |                                                       |
| required           | boolean       |               |                                                       |
| integer            | boolean       |               |                                                       |
| number             | boolean       |               |                                                       |
| nonNegative        | boolean       |               |                                                       |
| label              | any           |               | @param Label for the form group                       |
| invalidFeedback    | any           |               | Feedback (usually, validation error)                  |
| style              | CSSProperties |               | Additional style that should be passed to the top div |
&nbsp;
&nbsp;
### TextArea



#### Props

| Name               | Type             | Default value | Description                                           |
| ------------------ | ---------------- | ------------- | ----------------------------------------------------- |
| field _(required)_ | Field            |               |                                                       |
| type               | string \| number |               |                                                       |
| autoFocus          | boolean          |               |                                                       |
| disabled           | boolean          |               |                                                       |
| right              | any              |               |                                                       |
| placeholder        | string           |               |                                                       |
| rows               | number           |               |                                                       |
| cols               | number           |               |                                                       |
| id                 | string           |               |                                                       |
| className          | string           |               |                                                       |
| required           | boolean          |               |                                                       |
| integer            | boolean          |               |                                                       |
| number             | boolean          |               |                                                       |
| nonNegative        | boolean          |               |                                                       |
| label              | any              |               | @param Label for the form group                       |
| invalidFeedback    | any              |               | Feedback (usually, validation error)                  |
| style              | CSSProperties    |               | Additional style that should be passed to the top div |
&nbsp;
&nbsp;
### FormGroup

An input row, optionally containing a label and having error feedback text.

Input is specified in children.

#### Props

| Name            | Type          | Default value | Description                                           |
| --------------- | ------------- | ------------- | ----------------------------------------------------- |
| label           | any           | null          | @param Label for the form group                       |
| invalidFeedback | any           | null          | Feedback (usually, validation error)                  |
| style           | CSSProperties | undefined     | Additional style that should be passed to the top div |
&nbsp;
&nbsp;
### InlineEdit



#### Props

| Name                   | Type                                      | Default value | Description                                           |
| ---------------------- | ----------------------------------------- | ------------- | ----------------------------------------------------- |
| label                  | any                                       |               | @param Label for the form group                       |
| invalidFeedback        | any                                       |               | Feedback (usually, validation error)                  |
| style                  | CSSProperties                             |               | Additional style that should be passed to the top div |
| component _(required)_ | FC&lt;FieldComponentProps>                |               |                                                       |
| value _(required)_     | V                                         |               |                                                       |
| save _(required)_      | (value: V) => Promise&lt;void>            |               |                                                       |
| cancel                 | boolean                                   |               |                                                       |
| disabled               | boolean                                   |               |                                                       |
| loading                | boolean                                   |               |                                                       |
| saveOnChange           | boolean                                   |               |                                                       |
| render _(required)_    | (props: FieldComponentProps) => ReactNode |               |                                                       |
&nbsp;
&nbsp;
