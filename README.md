Collection of React components to build forms using [@use-ui/hooks](https://github.com/vasyas/use-ui-hooks).

Consist of form inputs and several additional components.

### Form inputs
- [CheckBox](api-docs/docs.md#checkbox) - Check box
- [Input](api-docs/docs.md#input) - Text input
- [Select](api-docs/docs.md#select) - Select with autocomplete, fetch options from server, multiple selected options
- [Static](api-docs/docs.md#static) - Disabled text input
- [TextArea](api-docs/docs.md#textarea) - Text multi line input

Each of the form input components uses [FormGroup](api-docs/docs.md#formgroup) for its rendering, and 
accepts `FormGroup` props.

### Additional components

- [InlineEdit](api-docs/docs.md#inlineedit) - Supports inline-editing of values. Can use one of the form inputs for entry.
- [ActionResult](api-docs/docs.md#actionresult) - Render error or success message. 

## Typical cases

### Default value for Select when loading data from server

# FAQ

### Why there's on onChange handlers on field elements.

OnChange origins in imperative world with inputs and event listeners.
Instead of using onChange on field elements, use useEffect on form data or values.


### Default value of \<Select\> isn't set

Make sure values of your options have string type. Number and other types won't work:

```
<Select
  value={currentGroupId}
  topic={services.groups}
  map={group => ({value: "" + group.id, label: group.name})}
/>
```

# API Reference

[/api-docs/docs.md](/api-docs/docs.md)