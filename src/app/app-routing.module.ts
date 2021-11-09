import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingGuard } from './guards/routing.guard';
import { VisualizationConfigGeneratorComponent } from './components/visualization-config-generator/visualization-config-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'data/:data',
    component: VisualizationConfigGeneratorComponent,
    canActivate: [RoutingGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
