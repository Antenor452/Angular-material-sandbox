import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  productForm!: FormGroup;
  categories: string[] = ['Electronics', 'Fruits', 'Vegetables', 'Automobiles'];
  freshnessOptions: string[] = ['Brand New', 'Second Hand', 'Refurbished'];

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      freshness: ['', [Validators.required]],
      price: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log(this.productForm.value);
  }
}
