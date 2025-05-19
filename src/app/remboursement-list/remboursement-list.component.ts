import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemboursementService, Remboursement } from '../services/remboursement.service';

@Component({
  selector: 'app-remboursement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remboursement-list.component.html',
  styleUrls: ['./remboursement-list.component.scss']
})
export class RemboursementListComponent implements OnInit {
  remboursements: Remboursement[] = [];
  loading = true;

  constructor(private remboursementService: RemboursementService) {}

  ngOnInit() {
    this.fetchRemboursements();
  }

  fetchRemboursements() {
    this.loading = true;
    this.remboursementService.getRemboursements().subscribe({
      next: (data) => {
        this.remboursements = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  deleteRemboursement(id: number) {
    if (confirm('Supprimer ce remboursement ?')) {
      this.remboursementService.deleteRemboursement(id).subscribe(() => {
        this.remboursements = this.remboursements.filter(r => r.id !== id);
      });
    }
  }
}
