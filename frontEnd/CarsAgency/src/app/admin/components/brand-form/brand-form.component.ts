import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../../services/upload.service';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../models/brand';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css'],
  standalone: false,
})
export class BrandFormComponent implements OnInit {
  brandForm!: FormGroup;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      name: ['', Validators.required],
      image: ['']
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // For image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(this.selectedFile!);
  }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onSubmit() {
    if (this.brandForm.valid && this.selectedFile) {
      // First upload the image
      this.uploadService.uploadImage(this.selectedFile).subscribe({
        next: (imageUrl) => {
          console.log('Image uploaded:', imageUrl);

          // Update the form with the image URL
          this.brandForm.patchValue({ image: imageUrl });

          // Now send the brand to the backend
          const brand: Brand = this.brandForm.value;
          console.log('Submitting brand:', brand);
          this.brandService.addBrand(brand).subscribe({
            next: (res) => {
              console.log('Brand added successfully:', res);
              // You can reset the form here if needed
              this.brandForm.reset();
              this.previewUrl = null;
              this.selectedFile = null;
            },
            error: (err) => {
              console.error('Error saving brand:', err);
            }
          });
        },
        error: (err) => {
          console.error('Upload failed:', err);
        }
      });
    } else {
      console.log('Form is invalid or no image selected.');
    }
  }
}
