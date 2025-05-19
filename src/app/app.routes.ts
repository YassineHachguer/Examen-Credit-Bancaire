import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreditListComponent} from "./credit-list/credit-list.component";
import {RemboursementListComponent} from "./remboursement-list/remboursement-list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'credits', component: CreditListComponent },
  { path: 'remboursements', component: RemboursementListComponent },

];
