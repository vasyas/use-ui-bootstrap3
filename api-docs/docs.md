
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

To use this component, you need to wrap your component tree in a ```ResultContext``` from @use-ui/hooks.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**error** | `String` | `undefined` | :x: | Error message to show, otherwise result from result context would be used

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
**autoFocus** | `Unknown` |  | :x: | 
**className** | `String` |  | :x: | 
**disabled** | `Unknown` |  | :x: | 
**field** | `Unknown` |  | :white_check_mark: | 
**id** | `String` |  | :x: | 
**inputType** | `String` | `text` | :x: | 
**integer** | `Unknown` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**nonNegative** | `Unknown` |  | :x: | 
**number** | `Unknown` |  | :x: | 
**placeholder** | `String` |  | :x: | 
**required** | `Unknown` |  | :x: | 
**right** | `*` |  | :x: | 
**style** | `Unknown` |  | :x: | Additional style that should be passed to the top div
**type** | `Unknown` |  | :x: | 

&nbsp;
&nbsp;
## Select

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` |  | :x: | 
**clear** | `Unknown` |  | :x: | 
**disabled** | `Unknown` |  | :x: | 
**field** | `Unknown` |  | :white_check_mark: | 
**id** | `String` |  | :x: | 
**indicatorSeparator** | `Unknown` |  | :x: | 
**integer** | `Unknown` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**map** | `Unknown` | `(i) => i as any` | :x: | 
**multi** | `Unknown` |  | :x: | 
**nonNegative** | `Unknown` |  | :x: | 
**number** | `Unknown` |  | :x: | 
**onSelect** | `Unknown` | `() => {}` | :x: | 
**options** | `Unknown` |  | :x: | 
**params** | `Unknown` |  | :x: | 
**placeholder** | `*` |  | :x: | 
**required** | `Unknown` |  | :x: | 
**right** | `*` |  | :x: | 
**style** | `Unknown` |  | :x: | Additional style that should be passed to the top div
**topic** | `Unknown` |  | :x: | 

&nbsp;
&nbsp;
## Static

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` |  | :x: | 
**id** | `String` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**style** | `Unknown` |  | :x: | Additional style that should be passed to the top div

&nbsp;
&nbsp;
## CheckBox

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoFocus** | `Unknown` |  | :x: | 
**className** | `String` |  | :x: | 
**disabled** | `Unknown` |  | :x: | 
**field** | `Unknown` |  | :white_check_mark: | 
**id** | `String` |  | :x: | 
**integer** | `Unknown` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**nonNegative** | `Unknown` |  | :x: | 
**number** | `Unknown` |  | :x: | 
**required** | `Unknown` |  | :x: | 
**right** | `*` |  | :x: | 
**style** | `Unknown` |  | :x: | Additional style that should be passed to the top div

&nbsp;
&nbsp;
## TextArea

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoFocus** | `Unknown` |  | :x: | 
**className** | `String` |  | :x: | 
**cols** | `Number` |  | :x: | 
**disabled** | `Unknown` |  | :x: | 
**field** | `Unknown` |  | :white_check_mark: | 
**id** | `String` |  | :x: | 
**integer** | `Unknown` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**nonNegative** | `Unknown` |  | :x: | 
**number** | `Unknown` |  | :x: | 
**placeholder** | `String` |  | :x: | 
**required** | `Unknown` |  | :x: | 
**right** | `*` |  | :x: | 
**rows** | `Number` |  | :x: | 
**style** | `Unknown` |  | :x: | Additional style that should be passed to the top div
**type** | `Unknown` |  | :x: | 

&nbsp;
&nbsp;
## FormGroup

An input row, optionally containing a label and having error feedback text.

Input is specified in children.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**invalidFeedback** | `*` | `null` | :x: | Feedback (usually, validation error)
**label** | `*` | `null` | :x: | @param Label for the form group
**style** | `Unknown` | `undefined` | :x: | Additional style that should be passed to the top div

&nbsp;
&nbsp;
## InlineEdit

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**cancel** | `Unknown` |  | :x: | 
**component** | `Unknown` |  | :white_check_mark: | 
**disabled** | `Unknown` |  | :x: | 
**invalidFeedback** | `*` |  | :x: | Feedback (usually, validation error)
**label** | `*` |  | :x: | @param Label for the form group
**loading** | `Unknown` |  | :x: | 
**render** | `Unknown` |  | :white_check_mark: | 
**save** | `Unknown` |  | :white_check_mark: | 
**saveOnChange** | `Unknown` |  | :x: | 
**style** | `Unknown` |  | :x: | Additional style that should be passed to the top div
**value** | `Unknown` |  | :white_check_mark: | 

&nbsp;
&nbsp;
