import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NetworkComponent } from './layout/network/network.component';
import { NetworkGuard } from './core/guard/network.guard';
import { LinkComponent } from './layout/link/link.component';

const routes: Routes = [
  {
    path: '',
    component: LinkComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'network',
    component: NetworkComponent,
    canActivate: [NetworkGuard],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
