// export default class TestPlugin extends Phaser.Plugins.BasePlugin {
//   replaceI(text) {
//     return text.replace("i", "1");
//   }
// }

//   return TestPlugin;
// }.call(this));

(function () {
  var root = this;
  console.log("co vo day ko");
  class TestPlugin extends Phaser.Plugins.BasePlugin {
    replaceI(text) {
      return text.replace("i", "1");
    }
  }

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = TestPlugin;
    }
    exports.TestPlugin = TestPlugin;
  } else if (typeof define !== "undefined" && define.amd) {
    define(
      "TestPlugin",
      (function () {
        return (root.TestPlugin = TestPlugin);
      })()
    );
  } else {
    root.TestPlugin = TestPlugin;
  }

  return TestPlugin;
}.call(this));
