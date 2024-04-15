import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';

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
  @Output() public outputListItems = new EventEmitter<any>()
  public focusAndAddItem(value: string){
    if(value){
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      this.outputListItems.emit({
        
      })

      
      console.log(value);
    }
  }

}
