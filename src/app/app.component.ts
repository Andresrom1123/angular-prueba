import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BrandRepository } from './repository/brand'

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
  brands = [];

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
    message: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private brandRepo: BrandRepository
  ) {}

  ngOnInit() {
    this.getBrands();
  }

  // brand methods
  private async getBrands() {
    const data = await this.brandRepo.brands();
    this.brands = data;
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand
  }

  clearBrand() {
    this.selectedBrand = ''
  }

  // alert method
  closeAlert() {
    this.error = false;
  }

  // modal method
  closeModal() {
    this.checkoutForm.reset();
    this.modal = false;
  }


  // form method
  onSubmit(): void {
    if (this.checkoutForm.status === 'VALID') {
      this.error = false;
      this.modal = true;
    } else {
      this.error = true;
    }
  }
}
