import {ComponentMetadata as Component, ViewMetadata as View, NgFor, NgIf} from 'angular2/angular2';

@Component({
  selector: 'show'
})

@View({
  directives: [NgFor, NgIf],
  templateUrl: 'show.html'
})

export class Angular2Show {

  myName:string;
  names:Array<String>;

  constructor() {
    this.myName = 'Nasir Khan';
    this.names = ["Nasir1", "Nasir2", "Nasir3", "Nasir4", "Nasir5"];

    console.info("Started...");
  }

  addNewName(name:string) {
    this.names.push(name);
  }

  doneTyping($event) {
    if ($event.which === 13) {
      this.addNewName($event.target.value);
      $event.target.value = null;
    }
  }

  removeName(name: string, strOfNames: Array) {
    console.log("iam inside the remove");
    var index = strOfNames.indexOf(name);

    if(index > -1) {
      strOfNames.splice(index, 1);
    }
  }
}




