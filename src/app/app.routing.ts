/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';
import { EnlistComponent } from './admin/enlist/enlist.component';
import { UpdateComponent } from './admin/update/update.component';
export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/create', component: CreateComponent },
    { path: 'admin/enlist', component: EnlistComponent },
    { path: 'admin/update', component: UpdateComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
