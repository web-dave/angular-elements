import {
  Component,
  OnChanges,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "moin-moin",
  template: `
    <p>
      moin {{name}}!
    </p>
    <button (click)="hi()">^5</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class MoinComponent implements OnChanges {
  @Input()
  name: string;
  @Output()
  highFife = new EventEmitter<string>();
  constructor() {}

  ngOnChanges(obj) {
    console.warn("ngOnChanges", obj);
  }

  hi() {
    this.highFife.emit(`Hi! I'm ${this.name}!`);
  }
}
