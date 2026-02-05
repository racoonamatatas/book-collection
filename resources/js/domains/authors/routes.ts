import { RouteRecordRaw } from "vue-router";
import OverviewPage from "./pages/OverviewPage.vue";



export const authorRoutes: RouteRecordRaw[] = [
    {path: '/authors', component: OverviewPage, name: 'authors.overview' },
]