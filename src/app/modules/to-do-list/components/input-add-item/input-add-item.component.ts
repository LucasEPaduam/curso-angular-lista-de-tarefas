import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;
  @Output() public outputAddListItem = new EventEmitter<IListItems>()
  public focusAndAddItem(value: string){
    if(value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID ${timestamp}`;

      this.outputAddListItem.emit({
        id,
        checked: false,
        value,
        
      });

      return this.inputText.nativeElement.focus();
    }
  }

}