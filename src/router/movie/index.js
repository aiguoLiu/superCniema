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
        }
    ]
}