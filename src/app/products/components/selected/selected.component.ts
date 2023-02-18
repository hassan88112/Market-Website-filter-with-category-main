import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent {
 @Input() data:  any [] =[];
 @Input() title: string =" ";
 @Output() selectedValue =new EventEmitter();

  detectChanges(event: any) {
    this.selectedValue.emit(event);

  }
}
