import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingGuard } from './guards/routing.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':data', component: HomeComponent, canActivate: [RoutingGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
