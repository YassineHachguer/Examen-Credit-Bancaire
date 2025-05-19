import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditService, Credit } from '../services/credit.service';

@Component({
  selector: 'app-credit-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss']
})
export class CreditListComponent implements OnInit {
  credits: Credit[] = [];
  loading = true;

  constructor(private creditService: CreditService) {}

  ngOnInit() {
    this.fetchCredits();
  }

  fetchCredits() {
    this.loading = true;
    this.creditService.getCredits().subscribe({
      next: (data) => {
        this.credits = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  deleteCredit(id: number) {
    if (confirm('Supprimer ce crédit ?')) {
      this.creditService.deleteCredit(id).subscribe(() => {
        this.credits = this.credits.filter(c => c.id !== id);
      });
    }
  }
}
