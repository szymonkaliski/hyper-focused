# hyper-focused

Small [hyper](http://hyper.is/) plugin that adds `focused` class on `.hyper_main` div based on window focus.

This makes it possible to, for example, have different border color for active terminal:

```js
module.exports = {
  config: {
    css: `
      .hyper_main {
        border-width: 2px;
      }

      .hyper_main.focused {
        border-color: red !important;
      }
    `
  },

  plugins: ["hyper-focused"]
}
```
