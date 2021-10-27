# multiple-blocks-template

This template will scaffold a plugin that is set up for registering multiple blocks in a single plugin create using the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) tool. 

## Usage
Run the following in the terminal of your choice:

`npx @wordpress/create-block example-plugin --template @ryanwelcher/multiple-blocks-template`

The name of the plugin ( example-plugin in the example above) is used as both the name of the plugin and the name of the block being created. This is due to the current `@wordpress/create-block` tool expecting a single block per plugin.


## Structure

Once the command has completed, the following structure will be created.

```
- assets - this contains an internal template for subsequent blocks
- build
- includes
--> block-editor
---> blocks
----> {example-block}
-----> block.json
-----> edit.js
-----> editor.scss
-----> index.js
-----> save.js
-----> style.scss
.editorconfig
.eslintrc
.gitignore
{example-block}.php
package.json
package-lock.json
webpack.config.js
```

### Adding another block requires the following steps:

1. From the root of the plugin, cc into the includes/block-editor/blocks directory
2. Run the following command: `npx @wordpress/create-block --template ../../../assets
3. Add a new entry point in `webpack.config.js` that points to the new block.
4. Update the `$blocks` array in the main plugin php file to include the new block.
5. Update the editorScripts, editorStyles, and styles items in the newly added block.