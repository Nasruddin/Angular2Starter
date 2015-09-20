import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'angular-2-starter'
})

@View({
  templateUrl: 'angular-2-starter.html'
})

export class Angular2Starter {

  constructor() {
    console.info('Angular2Starter Component Mounted Successfully');
  }

}
