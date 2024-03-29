import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/modules/home/home.module').then((m) => m.HomeModule),
    outlet: 'homeTab',
  },
  {
    path: 'browse',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/modules/browse/browse.module').then((m) => m.BrowseModule),
    outlet: 'browseTab',
  },
  {
    path: 'search',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/modules/search/search.module').then((m) => m.SearchModule),
    outlet: 'searchTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
