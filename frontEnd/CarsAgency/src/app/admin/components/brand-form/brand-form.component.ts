import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css'],
  standalone: false,
})
export class BrandFormComponent implements OnInit {
  brandForm!: FormGroup;
  selectedImageUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImageUrl = reader.result;
        this.brandForm.patchValue({ image: this.selectedImageUrl });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.brandForm.valid) {
      console.log('Brand submitted:', this.brandForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }
}
