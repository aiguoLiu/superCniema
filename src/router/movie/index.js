export default {
    path: '/movie',
    component : () => import('@/views/Movie'),
    children: [
        {
            path: '/movie',
            redirect: '/movie/now'
        },
        {
            path: 'now',
            component: () => import('@/views/Movie/child/now.vue')
        },
        {
            path: 'wait',
            component: () => import('@/views/Movie/child/wait.vue')
        },
        {
            // 动态路由
            path: 'detail/:movieId',
            // 命名视图(router的高级用法)
            components: {
                // 让原来的路由不会不加载，因为一个组件有两个视图
                default: () => import('@/views/Movie/child/wait.vue'),
                detail: () => import('@/components/Detail/detail.vue')
            },
            props: {
                detail: true
            }
        }
    ]
}