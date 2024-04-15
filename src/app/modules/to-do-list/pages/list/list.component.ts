import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public addItem = signal(true);

  #setListItems = signal<IListItems[]>(this.#parseItems());
  public getListItems = this.#setListItems.asReadonly();

  #parseItems(){
    return JSON.parse(localStorage.getItem('@mylist') || '[]');
  }

  public getInputAndAddItem(value: IListItems){
    localStorage.setItem('@mylist', JSON.stringify([...this.#setListItems(), value]));

    return this.#setListItems.set(this.#parseItems());
  }

  public deleteAllItems(){
    localStorage.removeItem('@mylist');
    return this.#setListItems.set(this.#parseItems());
  }

}
