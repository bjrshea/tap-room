import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSell = new EventEmitter();


  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  sellAPint(pint) {
    this.clickSell.emit(pint);
  }
}
