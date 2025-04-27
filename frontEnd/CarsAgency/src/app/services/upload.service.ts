import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private uploadUrl = 'http://localhost:8080/api/upload'; // Backend upload API

  constructor(private http: HttpClient) {}

  uploadImage(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.uploadUrl, formData, { responseType: 'text' });
  }
}