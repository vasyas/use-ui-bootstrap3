@use-ui/bootstrap3

# @use-ui/bootstrap3

## Table of contents

### Interfaces

- [FormGroupProps](interfaces/formgroupprops.md)

### Component Variables

- [ActionResult](README.md#actionresult)
- [FormGroup](README.md#formgroup)

### Functions

- [CheckBox](README.md#checkbox)
- [InlineEdit](README.md#inlineedit)
- [Input](README.md#input)
- [Select](README.md#select)
- [Static](README.md#static)
- [TextArea](README.md#textarea)
- [highlight](README.md#highlight)
- [setFormGroupClassNames](README.md#setformgroupclassnames)

## Component Variables

### ActionResult

• `Const` **ActionResult**: *React.FC*<Props\>

Display block with success result or error message.

To use this component, you need to wrap your component tree in a ```ResultContext``` from @use-ui/hooks.

Defined in: [ActionResult.tsx:12](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/ActionResult.tsx#L12)

___

### FormGroup

• `Const` **FormGroup**: *React.FunctionComponent*<[*FormGroupProps*](interfaces/formgroupprops.md)\>

An input row, optionally containing a label and having error feedback text.

Input is specified in children.

Defined in: [FormGroup.tsx:20](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/FormGroup.tsx#L20)

## Functions

### CheckBox

▸ `Const`**CheckBox**(`__namedParameters`: *Props*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props* |

**Returns:** *Element*

Defined in: [CheckBox.tsx:15](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/CheckBox.tsx#L15)

___

### InlineEdit

▸ **InlineEdit**<V\>(`p`: *Props*<V\>): *Element*

#### Type parameters:

| Name |
| :------ |
| `V` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `p` | *Props*<V\> |

**Returns:** *Element*

Defined in: [inlineEdit/InlineEdit.tsx:33](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/inlineEdit/InlineEdit.tsx#L33)

___

### Input

▸ `Const`**Input**(`__namedParameters`: *Props*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props* |

**Returns:** *Element*

Defined in: [Input.tsx:18](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/Input.tsx#L18)

___

### Select

▸ **Select**<TopicData, TopicParams, MappedOption\>(`__namedParameters`: *Props*<TopicData, TopicParams, MappedOption\>): *Element*

#### Type parameters:

| Name | Type | Default |
| :------ | :------ | :------ |
| `TopicData` | - | - |
| `TopicParams` | - | - |
| `MappedOption` | Option | Option |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props*<TopicData, TopicParams, MappedOption\> |

**Returns:** *Element*

Defined in: [Select.tsx:43](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/Select.tsx#L43)

___

### Static

▸ `Const`**Static**(`__namedParameters`: Props): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | Props |

**Returns:** *Element*

Defined in: [Static.tsx:11](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/Static.tsx#L11)

___

### TextArea

▸ `Const`**TextArea**(`__namedParameters`: *Props*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props* |

**Returns:** *Element*

Defined in: [TextArea.tsx:19](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/TextArea.tsx#L19)

___

### highlight

▸ **highlight**(`s`: *string*, `term`: *string*, `exact?`: *boolean*): React.ReactFragment

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | *string* | - |
| `term` | *string* | - |
| `exact` | *boolean* | false |

**Returns:** React.ReactFragment

Defined in: [utils.tsx:3](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/utils.tsx#L3)

___

### setFormGroupClassNames

▸ **setFormGroupClassNames**(`p`: *Partial*<*typeof* classNames\>): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `p` | *Partial*<*typeof* classNames\> |

**Returns:** *void*

Defined in: [FormGroup.tsx:46](https://github.com/vasyas/use-ui-bootstrap3/blob/b91a52b/src/FormGroup.tsx#L46)
