import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalHistory } from '../models/medical-history.model';

@Injectable({ providedIn: 'root' })
export class MedicalHistoryService {
    private api = 'http://localhost:8080/api/medical-history';
    constructor(private http: HttpClient) {}

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.api);
    }       
    getById(id: number): Observable<any> {
        return this.http.get<any>(`${this.api}/${id}`);
    } 
    getByPatient(patientId: number) {
    return this.http.get<MedicalHistory[]>(`${this.api}/patient/${patientId}`);
     }      
    create(medicalHistory: any): Observable<any> {
        return this.http.post<any>(this.api, medicalHistory);
    }       
    update(id: number, medicalHistory: any): Observable<any> {
        return this.http.put<any>(`${this.api}/${id}`, medicalHistory);
    }       
}