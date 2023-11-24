import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { KeyValue } from 'src/shared/model/KeyValue';


@Component({
    selector: 'app-input',
    template: `
  <div>
    <input inputAttributeDirective [attr]="inputAttribute" [(ngModel)]="inputValue" (keyup)="onValidateInput()" (blur)="onValidateInput()">
    <span *ngIf="isError" >{{errMssg}}</span>
  </div>
  `,
    styleUrls: ['./input.component.css']
})
export class InputComponent {

    @Output()
    inputEventEmmiter = new EventEmitter<{ value: string, valid: boolean }>();

    @Input()
    inputAttribute: KeyValue[] = []

    @Input()
    errMssg: string = '';

    @Input()
    validateInput!: ((value: any) => boolean);

    @Input()
    inputValue :string="";
    isError: boolean = false;

    onValidateInput() {
        this.isError = !this.validateInput(this.inputValue)
        this.inputEventEmmiter.emit({ value: this.inputValue, valid: !this.isError })
    }
}
