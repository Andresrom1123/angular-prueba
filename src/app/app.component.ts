import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBrand = '';
  error = false;
  modal = false;
  searchTerm = '';
  sort = 'name-a';

  brands = ['audi', 'toyota', 'mazda', 'audi', 'toyota', 'mazda']

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
    message: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  selectBrand(brand: string) {
    this.selectedBrand = brand
  }

  clearBrand() {
    this.selectedBrand = ''
  }

  closeAlert() {
    this.error = false;
  }

  closeModal() {
    this.checkoutForm.reset();
    this.modal = false;
  }

  onSubmit(): void {
    if (this.checkoutForm.status === 'VALID') {
      this.error === false;
      this.modal = true;
      console.warn('Your has been submitted', this.checkoutForm.value);
    } else {
      this.error = true;
    }
  }
}
