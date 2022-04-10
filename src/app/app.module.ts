import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainInfoComponent } from './main-info/main-info.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { InfoRightComponent } from './info-right/info-right.component';
import { ListComponent } from './list/list.component';
import { ModelCopyComponent } from './model-copy/model-copy.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    MainInfoComponent,
    NavComponent,
    TitleComponent,
    InfoRightComponent,
    ListComponent,
    ModelCopyComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModalModule,
    RouterModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
