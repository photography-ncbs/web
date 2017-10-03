import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { MdFormFieldModule, MdInputModule } from '@angular/material';
import { CreateComponent } from './admin/create/create.component';
import { EnlistComponent } from './admin/enlist/enlist.component';
import { UpdateComponent } from './admin/update/update.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        GalleryComponent,
        AdminComponent,
        CreateComponent,
        EnlistComponent,
        UpdateComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        MdDatepickerModule, MdNativeDateModule, MdFormFieldModule, MdInputModule,
        ROUTING,
        AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId), // imports firebase/app needed for everything
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
