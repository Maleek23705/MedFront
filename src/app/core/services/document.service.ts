import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../models/document.model';

@Injectable({ providedIn: 'root' })
export class DocumentService {          
    private api = 'http://localhost:8080/api/documents';
    constructor(private http: HttpClient) {}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.api);
    }
    getById(id: number): Observable<any> {
        return this.http.get<any>(`${this.api}/${id}`);
    }
    getByPatient(patientId: number) {
        return this.http.get<Document[]>(`${this.api}/patient/${patientId}`);
    }
    upload(patientId: number, file: File) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('patientId', patientId.toString());

        return this.http.post(this.api, formData);
    }
}