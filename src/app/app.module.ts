import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { NativeScriptMaterialBottomNavigationBarModule } 
  from '@nativescript-community/ui-material-bottomnavigationbar/angular';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BottomNavigationBarComponent } from './components/bottom-navigation-bar.component'
import { FirstTabComponent } from './components/first-tab/first-tab.component'
import { SecondTabComponent } from './components/second-tab/second-tab.component'
import { ThirdTabComponent } from './components/third-tab/third-tab.component'


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule, 
    NativeScriptMaterialBottomNavigationBarModule, 
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    BottomNavigationBarComponent,
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
