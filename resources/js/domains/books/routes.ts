import { RouteRecordRaw } from "vue-router";
import CreatePage from "./pages/CreatePage.vue";
import OverviewPage from "./pages/OverviewPage.vue";
import EditPage from "./pages/EditPage.vue";


export const bookRoutes: RouteRecordRaw[] = [
    { path: '/books', component: OverviewPage, name: 'books.overview' },
    { path: '/create', component: CreatePage, name: 'books.create' },
    { path: '/books/:id/edit', component: EditPage, name: 'books.edit' }
];