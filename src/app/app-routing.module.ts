import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {LoginComponent} from './components/login/login.component';
import {StartHackathonComponent} from "./components/hackathon/start-hackathon/start-hackathon.component";
import {AccountComponent} from "./components/hackathon/account/account.component";
import {RedirectComponent} from "./layouts/redirect/redirect.component";
import {HistoryComponent} from "./components/hackathon/history/history.component";
import {RegisterComponent} from "./components/hackathon/register/register.component";
import {ListProfessionalsComponent} from "./components/hackathon/list-professionals/list-professionals.component";
import {DashboardComponent} from "./components/hackathon/dashboard/dashboard.component";
import {NextConsultsComponent} from "./components/hackathon/next-consults/next-consults.component";
import {FeedbacksComponent} from "./components/hackathon/feedbacks/feedbacks.component";
import {MyPetsComponent} from "./components/hackathon/my-pets/my-pets.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: RedirectComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {
                path: '', component: AdminLayoutComponent,
                children: [
                    {path: 'start', component: StartHackathonComponent},
                    {path: 'account', component: AccountComponent},
                    {path: 'history', component: HistoryComponent},
                    {path: 'pets', component: MyPetsComponent},
                    {path: 'dashboard', component: DashboardComponent},
                    {path: 'next-consults', component: NextConsultsComponent},
                    {path: 'feedbacks', component: FeedbacksComponent},
                    {path: 'list-professionals', component: ListProfessionalsComponent},
                ],
            },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
