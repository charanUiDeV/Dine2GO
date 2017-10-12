import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {RestaurantsSortComponent} from './restaurants-sort/restaurants-sort.component';
import{Hc} from './home-component/home-component.component'


export const routes:Routes = [
     {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:Hc,
    
    },
    {
        path:'restaurants',
        component:RestaurantsSortComponent
    }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
