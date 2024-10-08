![alt text](https://raw.githubusercontent.com/microlinkhq/react-json-view/master/doc/rjv-icon-alt.png)

[![npm](https://img.shields.io/npm/v/%40microlink%2Freact-json-view.svg)](https://www.npmjs.com/package/@microlink/react-json-view) [![npm](https://img.shields.io/npm/l/%40microlink%2Freact-json-view.svg
)](https://github.com/microlinkhq/react-json-view/blob/master/LICENSE) [![Build Status](https://github.com/microlinkhq/react-json-view/workflows/test/badge.svg)](https://github.com/microlinkhq/react-json-view/actions/workflows/main.yml?query=branch%3Amaster)

# react-json-view
RJV is a React component for displaying and editing javascript **arrays** and **JSON objects**.

This component provides a responsive interface for displaying arrays or JSON in a web browser.  NPM offers a distribution of the source that's transpiled to ES5; so you can include this component with *any web-based javascript application*.

[Check out the Interactive Demo](https://react-json-view.microlink.io/)


### Implementation Example
```js
// import the react-json-view component
import ReactJson from '@microlink/react-json-view'

// use the component in your app!
<ReactJson src={my_json_object} />
```

### Output Examples
#### Default Theme
![alt text](https://raw.githubusercontent.com/microlinkhq/react-json-view/master/doc/output-example-15.png "Output Example 1")
#### Hopscotch Theme, with Triangle Icons:
![alt text](https://raw.githubusercontent.com/microlinkhq/react-json-view/master/doc/output-example-14.png "Output Example 2")

### Installation Instructions
Install this component with [NPM](https://www.npmjs.com/package/@microlink/react-json-view).
```shell
npm install --save @microlink/react-json-view
```
Or add to your package.json config file:
```json
"dependencies": {
    "@microlink/react-json-view": "latest"
}
```

### Props
Name|Type|Default|Description
|:---|:---|:---|:---
`src`|`JSON Object`|None|This property contains your input JSON
`name`|`string`|`JSX.Element` or `false`|"root"|Contains the name of your root node.  Use `null` or `false` for no name.
`theme`|`string`|"rjv-default"|RJV supports base-16 themes.  Check out the list of supported themes [in the demo](https://react-json-view.microlink.io/). A custom "rjv-default" theme applies by default.
`style`|`object`|`{}`|Style attributes for react-json-view container.  Explicit style attributes will override attributes provided by a theme.
`iconStyle`|`string`|"circle"| Style of expand/collapse icons.  Accepted values are "circle", triangle" or "square".
`indentWidth`|`integer`|4|Set the indent-width for nested objects
`collapsed`|`boolean` or `integer`|`false`|When set to `true`, all nodes will be collapsed by default.  Use an integer value to collapse at a particular depth.
`collapseStringsAfterLength`|`integer`|`false`|When an integer value is assigned, strings will be cut off at that length. Collapsed strings are followed by an ellipsis. String content can be expanded and collapsed by clicking on the string value.
`shouldCollapse`|`(field)=>{}`|`false`|Callback function to provide control over what objects and arrays should be collapsed by default.  An object is passed to the callback containing `name`, `src`, `type` ("array" or "object") and `namespace`.
`groupArraysAfterLength`|`integer`|`100`|When an integer value is assigned, arrays will be displayed in groups by count of the value. Groups are displayed with bracket notation and can be expanded and collapsed by clicking on the brackets.
`enableClipboard`|`boolean` or `(copy)=>{}`|`true`|When prop is not `false`, the user can copy objects and arrays to clipboard by clicking on the clipboard icon.  Copy callbacks are supported.
`displayObjectSize`|`boolean`|`true`|When set to `true`, objects and arrays are labeled with size
`displayDataTypes`|`boolean`|`true`|When set to `true`, data type labels prefix values
`onEdit`|`(edit)=>{}`|`false`|When a callback function is passed in, `edit` functionality is enabled.  The callback is invoked before edits are completed. Returning `false` from `onEdit` will prevent the change from being made. [see: onEdit docs](#onedit-onadd-and-ondelete-interaction)
`onAdd`|`(add)=>{}`|`false`|When a callback function is passed in, `add` functionality is enabled.  The callback is invoked before additions are completed. Returning `false` from `onAdd` will prevent the change from being made. [see: onAdd docs](#onedit-onadd-and-ondelete-interaction)
`defaultValue`|`string \|number \|boolean \|array \|object`|`null`|Sets the default value to be used when adding an item to json
`onDelete`|`(delete)=>{}`|`false`|When a callback function is passed in, `delete` functionality is enabled.  The callback is invoked before deletions are completed. Returning `false` from `onDelete` will prevent the change from being made. [see: onDelete docs](#onedit-onadd-and-ondelete-interaction)
`onSelect`|`(select)=>{}`|`false`|When a function is passed in, clicking a value triggers the `onSelect` method to be called.
`sortKeys`|`boolean`|`false`|set to true to sort object keys
`quotesOnKeys`|`boolean`|`true`|set to false to remove quotes from keys (eg. `"name":` vs. `name:`)
`validationMessage`|`string`|"Validation Error"|Custom message for validation failures to `onEdit`, `onAdd`, or `onDelete` callbacks
`displayArrayKey`|`boolean`|`true`|When set to `true`, the index of the elements prefix values

### Features
* `onEdit`, `onAdd` and `onDelete` props allow users to edit the `src` variable
* Object, array, string and function values can be collapsed and expanded
* Object and array nodes display length
* Object and array nodes support a "Copy to Clipboard" feature
* String values can be truncated after a specified length
* Arrays can be subgrouped after a specified length
* Base-16 Theme Support
* When `onEdit` is enabled:
   * `Ctrl/Cmd+Click` Edit Mode
   * `Ctrl/Cmd+Enter` Submit

### Customizing Style
#### Stock Themes
RJV now supports base-16 themes!

You can specify a `theme` name or object when you instantiate your rjv component.
```jsx
<ReactJson src={my_important_json} theme="monokai" />
```
Check out the list of supported themes [in the component demo](https://react-json-view.microlink.io/).

#### Monokai theme example
![alt text](https://raw.githubusercontent.com/microlinkhq/react-json-view/master/doc/output-example-monokai-2.png "Base-16 Theme Example")

#### Solarized theme example
![alt text](https://raw.githubusercontent.com/microlinkhq/react-json-view/master/doc/output-example-solarized-2.png "Base-16 Theme Example")

#### Use Your Own Theme
You can supply your own base-16 theme object.

To better understand custom themes, take a look at [my example implementation](https://github.com/microlinkhq/react-json-view/blob/7c154b9a7d83ea89dce2c171ebdf4d163ff49233/dev-server/src/index.js#L135) and the [base-16 theme styling guidelines](https://github.com/chriskempson/base16/blob/master/styling.md).

### onEdit, onAdd and onDelete Interaction
Pass callback methods to `onEdit`, `onAdd` and `onDelete` props.  Your method will be invoked when a user attempts to update your `src` object.

The following object will be passed to your method:
```js
{
    updated_src: src, //new src value
    name: name, //new var name
    namespace: namespace, //list, namespace indicating var location
    new_value: new_value, //new variable value
    existing_value: existing_value, //existing variable value
}
```

Returning `false` from a callback method will prevent the src from being affected.