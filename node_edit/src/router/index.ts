import {createRouter, createWebHistory} from 'vue-router';
import NodeTestMain from "@/components/NodeTest/NodeTestMain.vue";

const routes = [
    {path: '/', redirect: '/NodeTestMain'},
    {path: '/NodeTestMain', component: NodeTestMain},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;