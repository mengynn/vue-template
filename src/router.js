// src/router/index.js
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Category from '@/views/CategoryPage.vue';
import Detail from './views/DetailPage.vue';
import History from '@/views/HistoryPage.vue';
import Search from '@/views/SearchPage.vue';
import Privacy from '@/views/PrivacyPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category/:categoryId',
        name: 'CategoryPage',
        component: Category,
        props: true
    },
    {
        path: '/detail/:gameId',
        name: 'DetailPage',
        component: Detail,
        props: true // 将路由参数作为组件的props传递
    },
    {
        path: '/history',
        name: 'HistoryPage',
        component: History
    },
    {
        path: '/search',
        name: 'SearchPage',
        component: Search
    },
    {
        path: '/privacy',
        name: 'PrivacyPage',
        component: Privacy
    },
    // 添加重定向
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
