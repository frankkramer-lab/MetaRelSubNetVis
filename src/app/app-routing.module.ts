import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NetworkComponent } from './layout/network/network.component';
import { NetworkGuard } from './core/guard/network.guard';
import { LinkComponent } from './layout/link/link.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  {
    path: 'link',
    component: LinkComponent,
  },
  {
    path: 'network',
    component: NetworkComponent,
    canActivate: [NetworkGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
