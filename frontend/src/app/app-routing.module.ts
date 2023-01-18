import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsPageComponent } from './pages/greetings-page/greetings-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: 'greeting', component: GreetingsPageComponent },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
