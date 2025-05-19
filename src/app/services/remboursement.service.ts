import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Remboursement {
  id: number;
  date: string;
  montant: number;
  type: string;
  // Ajoute d'autres champs si besoin
}

@Injectable({ providedIn: 'root' })
export class RemboursementService {
  private apiUrl = 'http://localhost:8081/remboursements';

  constructor(private http: HttpClient) {}

  getRemboursements(): Observable<Remboursement[]> {
    return this.http.get<Remboursement[]>(this.apiUrl);
  }

  deleteRemboursement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
