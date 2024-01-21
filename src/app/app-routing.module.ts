import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './component/thought/create-thought/create-thought.component';
import { ListThoughtComponent } from './component/thought/list-thought/list-thought.component';

const routes: Routes = [
  {
      //Se a URL for aberta será redirecionada para a roda de listagem
      path: '',
      redirectTo: 'listagem',
      pathMatch: "full" //considera a URL como um todo
  },
  {
      path: 'adicionar',
      component: CreateThoughtComponent
  },
  {
      path: 'listagem',
      component: ListThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
