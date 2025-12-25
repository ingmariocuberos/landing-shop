import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MainLayout } from '@components/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: Home,
                pathMatch: 'full'
            }
        ]
    }
];
