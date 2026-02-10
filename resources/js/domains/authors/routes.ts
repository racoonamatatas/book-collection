import { RouteRecordRaw } from "vue-router";
import OverviewPage from "./pages/OverviewPage.vue";
import CreatePage from "./pages/CreatePage.vue";



export const authorRoutes: RouteRecordRaw[] = [
    {path: '/authors', component: OverviewPage, name: 'authors.overview' },
    {path: '/create', component: CreatePage, name: 'authors.create'}
]