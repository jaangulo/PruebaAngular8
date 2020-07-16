import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VISTAUNOComponent } from './vista-uno/vista-uno.component';
import { VISTADOSComponent } from './vista-dos/vista-dos.component';
import { VISTATRESComponent } from './vista-tres/vista-tres.component';


const routes: Routes= [
  {path:' ', component: VISTAUNOComponent},
  {path:'vista-uno', component: VISTAUNOComponent},
  {path:'vista-dos', component: VISTADOSComponent},
  {path:'vista-tres', component: VISTATRESComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [VISTAUNOComponent,VISTADOSComponent,VISTATRESComponent]
