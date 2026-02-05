import { RouteRecordRaw } from "vue-router";
import CreatePage from "./pages/CreatePage.vue";
import OverviewPage from "./pages/OverviewPage.vue";


export const bookRoutes: RouteRecordRaw[] = [
    { path: '/books', component: OverviewPage, name: 'books.overview' },
    { path: '/create', component: CreatePage, name: 'books.create' }
];