import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {Angular2Starter} from 'angular-2-starter';
import {Angular2Show} from 'show'

@Component({
  selector: 'main'
})

@View({
  directives: [Angular2Show],
  template: `
    <show></show>
  `
})

class Main {

}

bootstrap(Main);
