import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsPageComponent } from '@components/pages/trips-page/trips-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trips',
    pathMatch: 'full'
  },
  { path: 'trips', component: TripsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
