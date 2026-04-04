import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Added for navigation

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent implements OnInit {
  invoiceForm!: FormGroup;
  submitted = false;
  today = new Date();

  constructor(
    private fb: FormBuilder,
    public router: Router // Added public router to avoid access errors
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.invoiceForm = this.fb.group({
      invoiceNumber: ['INV-' + Math.floor(1000 + Math.random() * 9000), Validators.required],
      patientCIN: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      patientName: ['', Validators.required],
      invoiceDate: [this.today.toISOString().substring(0, 10), Validators.required],
      dueDate: ['', Validators.required],
      paymentMethod: ['Cash', Validators.required],
      items: this.fb.array([this.createItem()])
    });
  }

  // Helper for dynamic rows
  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    if (this.items.length > 1) {
      this.items.removeAt(index);
    }
  }

  // Financial Calculations
  calculateSubtotal(): number {
    return this.items.controls.reduce((sum, item) => {
      const qty = item.get('quantity')?.value || 0;
      const price = item.get('unitPrice')?.value || 0;
      return sum + (qty * price);
    }, 0);
  }

  calculateVAT(): number {
    return this.calculateSubtotal() * 0.07; // 7% Medical VAT
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + this.calculateVAT();
  }

  onSubmit() {
    this.submitted = true;
    if (this.invoiceForm.invalid) {
      console.log('Form Invalid');
      return;
    }
    
    // Logic for your .NET Backend would go here
    console.log('Invoice Data:', this.invoiceForm.getRawValue());
    alert('Invoice Generated Successfully!');
    this.router.navigate(['/Invoices/view-all']); // Redirect after success
  }

  onDiscard() {
    const confirmDiscard = confirm('Are you sure you want to discard this invoice? All entered data will be lost.');
    
    if (confirmDiscard) {
      // 1. Clear the FormArray
      while (this.items.length !== 0) {
        this.items.removeAt(0);
      }
      
      // 2. Reset basic fields
      this.invoiceForm.reset();
      this.submitted = false;
      
      // 3. Re-patch default values
      this.invoiceForm.patchValue({
        invoiceNumber: 'INV-' + Math.floor(1000 + Math.random() * 9000),
        invoiceDate: new Date().toISOString().substring(0, 10),
        paymentMethod: 'Cash'
      });

      // 4. Add one empty item row back
      this.addItem();

      // Alternatively, navigate away:
      // this.router.navigate(['/Invoices/view-all']);
    }
  }
}