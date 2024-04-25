import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { WierszeComponent } from './Components/wiersze/wiersze.component';
import { WierszeDetailsComponent } from './Components/wiersze/wiersze-details/wiersze-details.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'wiersze', component: WierszeComponent },

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
