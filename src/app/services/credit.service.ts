import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Credit {
  id: number;
  dateDemande: string;
  statut: string;
  montant: number;

}

@Injectable({ providedIn: 'root' })
export class CreditService {
  private apiUrl = 'http://localhost:8081/credits';

  constructor(private http: HttpClient) {}

  getCredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.apiUrl);
  }

  deleteCredit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
