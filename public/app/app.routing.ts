import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/main/home.component';
import { NotesComponent } from './components/main/notes/notes.component';
import { AddNoteComponent } from './components/main/notes/add-note.component';
import { AboutComponent } from './components/main/about.component';
import { NoContentComponent } from './components/error-pages/no-content.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';

import {IsLoggedUserGuard} from "./route-guards/is-logged.guard";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'notes',
        component: NotesComponent
    },
    {
        path: 'add-note',
        component: AddNoteComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'profile',
        component: ProfileComponent//,
        // canActivate: [IsLoggedUserGuard],
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: NoContentComponent
    }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);