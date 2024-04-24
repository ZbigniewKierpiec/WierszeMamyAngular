import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { WierszeComponent } from './Components/wiersze/wiersze.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'wiersze', component: WierszeComponent },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
