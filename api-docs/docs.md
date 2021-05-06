
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

## ActionResult

Display block with success result or error message.

To use this component, you need to wrap your component tree in a
[ResultContext from @use-ui/hooks](https://github.com/vasyas/use-ui-hooks/blob/master/api-docs/README.md#resultcontext).

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**error** | `string` | `undefined` | :x: | Error message to show, otherwise result from result context would be used

&nbsp;
&nbsp;
## Input

Render html input in a FormGroup.

Example:
```
const form = useForm({ email: null })
<Input
  label="Email"
  field={form.email}
  required
/>
```

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoFocus** | `boolean` |  | :x: | 
**className** | `string` |  | :x: | 
**disabled** | `boolean` |  | :x: | 
**field** | `Field` |  | :white_check_mark: | Reference to [@use-ui/hooks form field](https://github.com/vasyas/use-ui-hooks/blob/master/api-docs/README.md#useform)
**id** | `string` |  | :x: | 
**inputType** | `string` | `text` | :x: | 
**integer** | `boolean` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**nonNegative** | `boolean` |  | :x: | 
**number** | `boolean` |  | :x: | 
**placeholder** | `string` |  | :x: | 
**required** | `boolean` |  | :x: | 
**right** | `*` |  | :x: | 
**style** | `CSSProperties` |  | :x: | Additional style that should be passed to the top div
**type** | `string | number` |  | :x: | 

&nbsp;
&nbsp;
## Select

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `string` |  | :x: | 
**clear** | `boolean` |  | :x: | 
**disabled** | `boolean` |  | :x: | 
**field** | `Field` |  | :white_check_mark: | 
**id** | `string` |  | :x: | 
**indicatorSeparator** | `boolean` |  | :x: | 
**integer** | `boolean` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**map** | `(d: TopicData) => MappedOption` | `(i) => i as any` | :x: | 
**multi** | `boolean` |  | :x: | 
**nonNegative** | `boolean` |  | :x: | 
**number** | `boolean` |  | :x: | 
**onSelect** | `(oo: MappedOption[]) => void` | `() => {}` | :x: | 
**options** | `Record<string, string> | MappedOption[]` |  | :x: | 
**params** | `TopicParams` |  | :x: | 
**placeholder** | `*` |  | :x: | 
**required** | `boolean` |  | :x: | 
**right** | `*` |  | :x: | 
**style** | `CSSProperties` |  | :x: | Additional style that should be passed to the top div
**topic** | `RemoteTopic<TopicData[], TopicParams>` |  | :x: | 

&nbsp;
&nbsp;
## Static

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `string` |  | :x: | 
**id** | `string` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**style** | `CSSProperties` |  | :x: | Additional style that should be passed to the top div

&nbsp;
&nbsp;
## CheckBox

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoFocus** | `boolean` |  | :x: | 
**className** | `string` |  | :x: | 
**disabled** | `boolean` |  | :x: | 
**field** | `Field` |  | :white_check_mark: | 
**id** | `string` |  | :x: | 
**integer** | `boolean` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**nonNegative** | `boolean` |  | :x: | 
**number** | `boolean` |  | :x: | 
**required** | `boolean` |  | :x: | 
**right** | `*` |  | :x: | 
**style** | `CSSProperties` |  | :x: | Additional style that should be passed to the top div

&nbsp;
&nbsp;
## TextArea

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoFocus** | `boolean` |  | :x: | 
**className** | `string` |  | :x: | 
**cols** | `Number` |  | :x: | 
**disabled** | `boolean` |  | :x: | 
**field** | `Field` |  | :white_check_mark: | 
**id** | `string` |  | :x: | 
**integer** | `boolean` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**nonNegative** | `boolean` |  | :x: | 
**number** | `boolean` |  | :x: | 
**placeholder** | `string` |  | :x: | 
**required** | `boolean` |  | :x: | 
**right** | `*` |  | :x: | 
**rows** | `Number` |  | :x: | 
**style** | `CSSProperties` |  | :x: | Additional style that should be passed to the top div
**type** | `string | number` |  | :x: | 

&nbsp;
&nbsp;
## FormGroup

An input row, optionally containing a label and having error feedback text.

Input is specified in children.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**invalidFeedback** | `*` | `null` | :x: | Feedback (usually, validation error)
**label** | `*` | `null` | :x: | @param Label for the form group
**style** | `CSSProperties` | `undefined` | :x: | Additional style that should be passed to the top div

&nbsp;
&nbsp;
## InlineEdit

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**cancel** | `boolean` |  | :x: | 
**component** | `FC<FieldComponentProps>` |  | :white_check_mark: | 
**disabled** | `boolean` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**loading** | `boolean` |  | :x: | 
**render** | `(props: FieldComponentProps) => ReactNode` |  | :white_check_mark: | 
**save** | `(value: V) => Promise<void>` |  | :white_check_mark: | 
**saveOnChange** | `boolean` |  | :x: | 
**style** | `CSSProperties` |  | :x: | Additional style that should be passed to the top div
**value** | `V` |  | :white_check_mark: | 

&nbsp;
&nbsp;
