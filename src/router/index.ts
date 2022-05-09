import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/vueuse',
        name: 'VueUse',
        meta: {
            title: '测试VueUse',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/vueUse.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;