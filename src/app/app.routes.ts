import { Routes } from '@angular/router';

import { CrudsComponent } from './cruds/cruds.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
  { path: 'crud', component: CrudsComponent },
  { path: '', component: NavComponent },
];
