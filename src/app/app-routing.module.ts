import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NetworkComponent } from './layout/network/network.component';

const routes: Routes = [
  { path: '',
    component: NetworkComponent,
  },
  {
    path: 'cx/:uuid',
    component: NetworkComponent,
    canActivate: []
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
