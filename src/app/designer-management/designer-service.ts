// designer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DesignerService {
    private apiUrl = 'http://localhost:3000/designer-info';

    constructor(private http: HttpClient) { }

    getDesigners(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    addDesigner(newDesigner: any): Observable<any> {
        return this.http.post(this.apiUrl, newDesigner);
    }
    getSaree(id: string): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/sareeOfDesigner/' + id);
    }
    addSaree(newSaree: any): Observable<any> {
        return this.http.post('http://localhost:3000/saree', newSaree);
    }
    
    // Implement other methods as needed
}
