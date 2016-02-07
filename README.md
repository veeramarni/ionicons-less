#ionicons  with Less

## How to install

`meteor add veeramarni:ionicons-less`

Create a .less file anywhere in your project to be served to the client and add `@import "/packages/ionicons-less/lib/less/ionicons.less";`

## Customized Usage

You can copy the ionicons.less file into your project and overwrite the variables like this:
```
// Application Overrides (config)
// ---------------------------------------
// (Here you can override any variables defined in the default set above)

@brand-primary: #FF69B4; // needs a fabulous color ;)

```
Then you need to rename it into bootstrap.less and you can start using your custom build.
