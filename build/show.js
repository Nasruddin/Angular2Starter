System.register("show", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "show";
  var Component,
      View,
      NgFor,
      NgIf,
      Angular2Show;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
      NgFor = $__m.NgFor;
      NgIf = $__m.NgIf;
    }],
    execute: function() {
      Angular2Show = function() {
        function Angular2Show() {
          this.myName = 'Nasir Khan';
          this.names = ["Nasir1", "Nasir2", "Nasir3", "Nasir4", "Nasir5"];
          console.info("Started...");
        }
        return ($traceurRuntime.createClass)(Angular2Show, {
          addNewName: function(name) {
            this.names.push(name);
          },
          doneTyping: function($event) {
            if ($event.which === 13) {
              this.addNewName($event.target.value);
              $event.target.value = null;
            }
          },
          removeName: function(name, strOfNames) {
            console.log("iam inside the remove");
            var index = strOfNames.indexOf(name);
            if (index > -1) {
              strOfNames.splice(index, 1);
            }
          }
        }, {});
      }();
      $__export("Angular2Show", Angular2Show);
      Object.defineProperty(Angular2Show, "annotations", {get: function() {
          return [new Component({selector: 'show'}), new View({
            directives: [NgFor, NgIf],
            templateUrl: 'show.html'
          })];
        }});
      Object.defineProperty(Angular2Show.prototype.addNewName, "parameters", {get: function() {
          return [[$traceurRuntime.type.string]];
        }});
      Object.defineProperty(Angular2Show.prototype.removeName, "parameters", {get: function() {
          return [[$traceurRuntime.type.string], [Array]];
        }});
    }
  };
});
