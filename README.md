
<h1 align="center">
  <a href="https://react-json-view.microlink.io/">
  <img src="https://raw.githubusercontent.com/microlinkhq/react-json-view/master/docs/assets/rjv-icon-alt.png" alt="react-json-view" width="200"></a>
  <br>
  react-json-view
  <br>
  <a href="https://www.npmjs.com/package/@microlink/react-json-view"><img src="https://img.shields.io/npm/v/%40microlink%2Freact-json-view.svg" alt="npm version"></a>
  <a href="https://github.com/microlinkhq/react-json-view/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/%40microlink%2Freact-json-view.svg" alt="npm license"></a>
  <a href="https://github.com/microlinkhq/react-json-view/actions/workflows/main.yml?query=branch%3Amaster"><img src="https://github.com/microlinkhq/react-json-view/workflows/test/badge.svg" alt="Build Status"></a>
  <br>
</h1>

**react-json-view** (rjv) is a React component for displaying and editing javascript **arrays** and **JSON objects**.

![](https://raw.githubusercontent.com/microlinkhq/react-json-view/docs/docs/assets/banner.png)

### Highlights

* `onEdit`, `onAdd` and `onDelete` props allow users to edit the `src` variable.
* Object, array, string and function values can be collapsed and expanded.
* Object and array nodes display length.
* Object and array nodes support a "Copy to Clipboard" feature.
* String values can be truncated after a specified length.
* Arrays can be subgrouped after a specified length.
* Base-16 Theme Support.
* When `onEdit` is enabled:
   * `Ctrl/Cmd+Click` Edit Mode
   * `Ctrl/Cmd+Enter` Submit

### Installation

```shell
npm install @microlink/react-json-view --save
```

### Usage

```js
import ReactJsonView from '@microlink/react-json-view'

<ReactJsonView src={{
  string: 'this is a test string',
  integer: 42,
  array: [1, 2, 3, 'test', NaN],
  float: 3.14159,
  undefined: undefined,
  object: {
    'first-child': true,
    'second-child': false,
    'last-child': null
    },
  string_number: '1234',
  date: new Date(),
  bigNumber: new BigNumber('0.0060254656709730629123')
}} />
```

### API

| Name                         | Type                                             | Default                  | Description                                                                                                                                                                                                                                                               |
|:-----------------------------|:-------------------------------------------------|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `src`                        | `JSON Object`                                    | None                     | This property contains your input JSON.                                                                                                                                                                                                                                   |
| `name`                       | `string` or `JSX.Element`                        | `false`                  | "root" - Contains the name of your root node. Use `null` or `false` for no name.                                                                                                                                                                                          |
| `theme`                      | `string`                                         | `'rjv-default'`          | RJV supports base-16 themes. Check out the list of supported themes [in the demo](https://react-json-view.microlink.io/). A custom "rjv-default" theme applies by default.                                                                                                |
| `style`                      | `object`                                         | `{}`                     | Style attributes for react-json-view container. Explicit style attributes will override attributes provided by a theme.                                                                                                                                                   |
| `iconStyle`                  | `string`                                         | `'circle'`               | Style of expand/collapse icons. Accepted values are "circle", "triangle" or "square".                                                                                                                                                                                     |
| `indentWidth`                | `integer`                                        | 4                        | Set the indent-width for nested objects.                                                                                                                                                                                                                                  |
| `collapsed`                  | `boolean` or `integer`                           | `false`                  | When set to `true`, all nodes will be collapsed by default. Use an integer value to collapse at a particular depth.                                                                                                                                                       |
| `collapseStringsAfterLength` | `integer`                                        | `false`                  | When an integer value is assigned, strings will be cut off at that length. Collapsed strings are followed by an ellipsis. String content can be expanded and collapsed by clicking on the string value.                                                                   |
| `shouldCollapse`             | `(field)=>{}`                                    | `false`                  | Callback function to provide control over what objects and arrays should be collapsed by default. An object is passed to the callback containing `name`, `src`, `type` ("array" or "object") and `namespace`.                                                             |
| `groupArraysAfterLength`     | `integer`                                        | 100                      | When an integer value is assigned, arrays will be displayed in groups by count of the value. Groups are displayed with bracket notation and can be expanded and collapsed by clicking on the brackets.                                                                    |
| `enableClipboard`            | `boolean` or `(copy)=>{}`                        | `true`                   | When prop is not `false`, the user can copy objects and arrays to clipboard by clicking on the clipboard icon. Copy callbacks are supported.                                                                                                                              |
| `displayObjectSize`          | `boolean`                                        | `true`                   | When set to `true`, objects and arrays are labeled with size.                                                                                                                                                                                                             |
| `displayDataTypes`           | `boolean`                                        | `true`                   | When set to `true`, data type labels prefix values.                                                                                                                                                                                                                       |
| `displayCompact`             | `boolean`                                        | `false`                  | When set to true, hides display of  `:`, `{`, and `[` symbols for parent objects and arrays that are not the final value in the hierarchy.                                                                                                                                |
| `onEdit`                     | `(edit)=>{}`                                     | `false`                  | When a callback function is passed in, `edit` functionality is enabled. The callback is invoked before edits are completed. Returning `false` from `onEdit` will prevent the change from being made. [see: onEdit docs](#onedit-onadd-and-ondelete-interaction)           |
| `onAdd`                      | `(add)=>{}`                                      | `false`                  | When a callback function is passed in, `add` functionality is enabled. The callback is invoked before additions are completed. Returning `false` from `onAdd` will prevent the change from being made. [see: onAdd docs](#onedit-onadd-and-ondelete-interaction)          |
| `defaultValue`               | `string \| number \| boolean \| array \| object` | `null`                   | Sets the default value to be used when adding an item to JSON.                                                                                                                                                                                                            |
| `onDelete`                   | `(delete)=>{}`                                   | `false`                  | When a callback function is passed in, `delete` functionality is enabled. The callback is invoked before deletions are completed. Returning `false` from `onDelete` will prevent the change from being made. [see: onDelete docs](#onedit-onadd-and-ondelete-interaction) |
| `onSelect`                   | `(select)=>{}`                                   | `false`                  | When a function is passed in, clicking a value triggers the `onSelect` method to be called.                                                                                                                                                                               |
| `sortKeys`                   | `boolean`                                        | `false`                  | Set to `true` to sort object keys.                                                                                                                                                                                                                                        |
| `quotesOnKeys`               | `boolean`                                        | `true`                   | Set to `false` to remove quotes from keys (e.g., `"name":` vs. `name:`).                                                                                                                                                                                                  |
| `validationMessage`          | `string`                                         | "Validation Error"       | Custom message for validation failures to `onEdit`, `onAdd`, or `onDelete` callbacks.                                                                                                                                                                                     |
| `displayArrayKey`            | `boolean`                                        | `true`                   | When set to `true`, the index of the elements prefix values.                                                                                                                                                                                                              |
| `escapeStrings`              | `boolean`                                        | `true`                   | When set to `true`, strings sequences such as \n, \t, \r, \f will be escaped.                                                                                                                                                                                                          |
| `bigNumber`                  | `Class`                                          | `null`                   | A custom class for handling large numbers. The class should have a constructor that accepts a numeric string/value and a `name` property for display purposes. You can use existing libraries like `bignumber.js`, `decimal.js`, `big.js`, or provide your own implementation.                                                                                                               |

#### Callbacks

You can pass callback methods to `onEdit`, `onAdd` and `onDelete` props.

Your method will be invoked when a user attempts to update your `src` object.

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

### Theming

#### Builtin theme

You can specify a `theme` name or object when you instantiate your rjv component.

```jsx
<ReactJsonView src={my_important_json} theme="monokai" />
```

The following themes are builtin with the library:

- `'apathy'`
- `'ashes'`
- `'atelierDune'`
- `'atelierForest'`
- `'atelierHeath'`
- `'atelierLakeside'`
- `'atelierSeaside'`
- `'bespin'`
- `'brewer'`
- `'bright'`
- `'chalk'`
- `'codeschool'`
- `'colors'`
- `'eighties'`
- `'embers'`
- `'flat'`
- `'google'`
- `'grayscale'`
- `'greenscreen'`
- `'harmonic'`
- `'hopscotch'`
- `'isotope'`
- `'marrakesh'`
- `'mocha'`
- `'monokai'`
- `'ocean'`
- `'paraiso'`
- `'pop'`
- `'railscasts'`
- `'shapeshifter'`
- `'solarized'`
- `'summerfruit'`
- `'threezerotwofour'`
- `'tomorrow'`
- `'tube'`
- `'twilight'`

Check [react-json-view.microlink.io](https://react-json-view.microlink.io/) to see how they look like.

#### Custom theme

**rjv** supports any base-16 theme. You can supply your own base-16 theme object.

To better understand custom themes, take a look at [my example implementation](https://github.com/microlinkhq/react-json-view/blob/7c154b9a7d83ea89dce2c171ebdf4d163ff49233/dev-server/src/index.js#L135) and the [base-16 theme styling guidelines](https://github.com/chriskempson/base16/blob/master/styling.md).

## License

**react-json-view** © [microlink.io](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/cards/blob/master/LICENSE.md) License.<br>
Authored by [Mac Gainor](https://github.com/mac-s-g) and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/microlinkhq/cards/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlink.io](https://github.com/microlinkhq) · X [@microlinkhq](https://x.com/microlinkhq)
