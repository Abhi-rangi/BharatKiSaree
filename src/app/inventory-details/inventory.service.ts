// src/app/inventory.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getInventoryDetails(): Observable<any> {
        const url = `${this.apiUrl}/inventory`;
        return this.http.get(url);
    }

}
