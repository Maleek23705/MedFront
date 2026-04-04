import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.scss'
})
export class EditInvoiceComponent implements OnInit {
  invoiceForm!: FormGroup;
  submitted = false;
  invoiceId!: string;
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.paramMap.get('id') || '';
    this.initForm();
    this.loadInvoiceData();
  }

  initForm() {
    this.invoiceForm = this.fb.group({
      invoiceNumber: [{ value: '', disabled: true }], // Read-only
      patientCIN: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      patientName: ['', Validators.required],
      invoiceDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      items: this.fb.array([]) // Will be populated by loadInvoiceData
    });
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  createItem(description = '', qty = 1, price = 0): FormGroup {
    return this.fb.group({
      description: [description, Validators.required],
      quantity: [qty, [Validators.required, Validators.min(1)]],
      unitPrice: [price, [Validators.required, Validators.min(0)]]
    });
  }

  loadInvoiceData() {
    // Simulating fetching data from your .NET API
    setTimeout(() => {
      const mockInvoice = {
        invoiceNumber: 'INV-8842',
        patientCIN: '01234567',
        patientName: 'Malek',
        invoiceDate: '2026-03-25',
        dueDate: '2026-04-05',
        paymentMethod: 'Cash',
        items: [
          { description: 'General Consultation', quantity: 1, unitPrice: 50.000 },
          { description: 'Blood Test', quantity: 1, unitPrice: 25.500 }
        ]
      };

      this.invoiceForm.patchValue(mockInvoice);
      
      // Populate FormArray items
      mockInvoice.items.forEach(item => {
        this.items.push(this.createItem(item.description, item.quantity, item.unitPrice));
      });

      this.isLoading = false;
    }, 800);
  }

  addItem() { this.items.push(this.createItem()); }

  removeItem(index: number) {
    if (this.items.length > 1) this.items.removeAt(index);
  }

  calculateSubtotal(): number {
    return this.items.controls.reduce((sum, item) => {
      return sum + (item.get('quantity')?.value * item.get('unitPrice')?.value);
    }, 0);
  }

  onSubmit() {
    this.submitted = true;
    if (this.invoiceForm.invalid) return;
    console.log('Updating Invoice:', this.invoiceId, this.invoiceForm.getRawValue());
    alert('Invoice Updated Successfully!');
    this.router.navigate(['/Invoices/view-all']);
  }

  onDiscard() {
    if (confirm('Discard changes and return to list?')) {
      this.router.navigate(['/Invoices/view-all']);
    }
  }
}