@use-ui/bootstrap3

# @use-ui/bootstrap3

## Table of contents

### Interfaces

- [FormGroupProps](interfaces/formgroupprops.md)

### Component Variables

- [FormGroup](README.md#formgroup)

### Functions

- [ActionResult](README.md#actionresult)
- [CheckBox](README.md#checkbox)
- [InlineEdit](README.md#inlineedit)
- [Input](README.md#input)
- [Select](README.md#select)
- [Static](README.md#static)
- [TextArea](README.md#textarea)
- [highlight](README.md#highlight)
- [setFormGroupClassNames](README.md#setformgroupclassnames)

## Component Variables

### FormGroup

• `Const` **FormGroup**: *React.FunctionComponent*<[*FormGroupProps*](interfaces/formgroupprops.md)\>

An input row, optionally containing a label and having error feedback text.

Input is specified in children.

Defined in: [FormGroup.tsx:20](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/FormGroup.tsx#L20)

## Functions

### ActionResult

▸ `Const`**ActionResult**(`__namedParameters`: *Object*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Object* |

**Returns:** *Element*

Defined in: [ActionResult.tsx:5](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/ActionResult.tsx#L5)

___

### CheckBox

▸ `Const`**CheckBox**(`__namedParameters`: *Props*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props* |

**Returns:** *Element*

Defined in: [CheckBox.tsx:15](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/CheckBox.tsx#L15)

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

Defined in: [inlineEdit/InlineEdit.tsx:33](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/inlineEdit/InlineEdit.tsx#L33)

___

### Input

▸ `Const`**Input**(`__namedParameters`: *Props*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props* |

**Returns:** *Element*

Defined in: [Input.tsx:18](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/Input.tsx#L18)

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

Defined in: [Select.tsx:43](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/Select.tsx#L43)

___

### Static

▸ `Const`**Static**(`__namedParameters`: Props): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | Props |

**Returns:** *Element*

Defined in: [Static.tsx:11](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/Static.tsx#L11)

___

### TextArea

▸ `Const`**TextArea**(`__namedParameters`: *Props*): *Element*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | *Props* |

**Returns:** *Element*

Defined in: [TextArea.tsx:19](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/TextArea.tsx#L19)

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

Defined in: [utils.tsx:3](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/utils.tsx#L3)

___

### setFormGroupClassNames

▸ **setFormGroupClassNames**(`p`: *Partial*<*typeof* classNames\>): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `p` | *Partial*<*typeof* classNames\> |

**Returns:** *void*

Defined in: [FormGroup.tsx:46](https://github.com/vasyas/use-ui-bootstrap3/blob/295d451/src/FormGroup.tsx#L46)
