import { RouteRecordRaw } from "vue-router";
import OverviewPage from "./pages/OverviewPage.vue";
import CreatePage from "./pages/CreatePage.vue";
import EditPage from "./pages/EditPage.vue";



export const authorRoutes: RouteRecordRaw[] = [
    {path: '/authors', component: OverviewPage, name: 'authors.overview' },
    {path: '/create', component: CreatePage, name: 'authors.create'},
    { path: '/authors/:id/edit', component: EditPage, name: 'authors.edit' }
]