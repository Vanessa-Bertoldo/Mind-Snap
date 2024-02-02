import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './component/thought/create-thought/create-thought.component';
import { ListThoughtComponent } from './component/thought/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './component/thought/delete-thought/delete-thought.component';
//Esse arquivo define a renderização dos componentes de acordo com as suas rotas
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
  },
  {
    path: 'pensamento/excluirPensamento/:id',
    component: DeleteThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
