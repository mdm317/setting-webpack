//?????
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        console.log('This is an example plugin!');
        console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);

        // Manipulate the build using the plugin API provided by webpack
        callback();
      }
    )
    
  }
}

module.exports = MyPlugin;



