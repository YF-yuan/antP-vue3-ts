// 前端路由表
const routerList = {
    // 基础页面
    '403' : () => import('@/views/exception/403.vue'),
    '404': () => import('@/views/exception/404.vue'),
    '500': () => import( '@/views/exception/500.vue'),
    
    // 你需要动态引入的页面组件

    // form
    
}

// 找不到页面时展示404页面
const notFoundPath = {
    path: '*',
    redirect: '/404',
    hidden: true,
  }
  // 根级菜单配置
  const rootRouter = {
    key: '',
    name: 'index',
    path: '',
    redirect: '/dashboard', // 默认显示路由
    meta: {
      title: '首页'
    },
    children: []
  
  }
  
  