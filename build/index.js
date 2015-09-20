System.register("index", ["angular2/angular2", "angular-2-starter", "show"], function($__export) {
  "use strict";
  var __moduleName = "index";
  var Component,
      View,
      bootstrap,
      Angular2Starter,
      Angular2Show,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Angular2Starter = $__m.Angular2Starter;
    }, function($__m) {
      Angular2Show = $__m.Angular2Show;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Angular2Show],
            template: "\n    <show></show>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
