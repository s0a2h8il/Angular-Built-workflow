import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Intro } from './pages/intro/intro';
import { Basics } from './pages/basics/basics';
import { Structure } from './pages/structure/structure';
import { AngularExample } from './pages/angular-example/angular-example';
import { Scheduled } from './pages/scheduled/scheduled';
import { Secrets } from './pages/secrets/secrets';
import { UseCases } from './pages/use-cases/use-cases';
import { Faq } from './pages/faq/faq';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'intro', component: Intro },
    { path: 'basics', component: Basics },
    { path: 'structure', component: Structure },
    { path: 'angular-example', component: AngularExample },
    { path: 'scheduled', component: Scheduled },
    { path: 'secrets', component: Secrets },
    { path: 'use-cases', component: UseCases },
    { path: 'faq', component: Faq },
    { path: '**', redirectTo: '' }
];
