System.register("angular-2-starter", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "angular-2-starter";
  var Component,
      View,
      Angular2Starter;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
    }],
    execute: function() {
      Angular2Starter = function() {
        function Angular2Starter() {
          console.info('Angular2Starter Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Angular2Starter, {}, {});
      }();
      $__export("Angular2Starter", Angular2Starter);
      Object.defineProperty(Angular2Starter, "annotations", {get: function() {
          return [new Component({selector: 'angular-2-starter'}), new View({templateUrl: 'angular-2-starter.html'})];
        }});
    }
  };
});
