import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import('../layout/index.vue');
const Home = () => import('../pages/Home/index.vue');
const UserCenter = () => import('../pages/UserCenter/index.vue');
const ProductList = () => import('../pages/ProductList/index.vue');
const ProductDetail = () => import('../pages/ProductDetail/index.vue');
const UserLogin = () => import('../pages/UserLogin/index.vue');
const UserReg = () => import('../pages/UserReg/index.vue');
const UserForgetPassword = () => import('../pages/UserForgetPassword/index.vue');
const Cart = () => import('../pages/Cart/index.vue');
const Checkout = () => import('../pages/Checkout/index.vue');
const UnpaidList = () => import('../pages/UnpaidList/index.vue');
const Success = () => import('../pages/Success/index.vue');
const UserWishlist = () => import('../pages/UserWishlist/index.vue');
const UserAddress = () => import('../pages/UserAddress/index.vue');


const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home,
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'center',
        component: UserCenter,
      },
      {
        path: 'login',
        component: UserLogin
      },
      {
        path: 'reg',
        component: UserReg
      },
      {
        path: 'forgetpassword',
        component: UserForgetPassword
      },
      {
        path: 'wishlist',
        component: UserWishlist
      },
      {
        path: 'address',
        component: UserAddress
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    children: [
      {
        path: 'list',
        component: ProductList,
      },
      {
        path: 'detail/:id',
        component: ProductDetail
      }
    ]
  },
  {
    path: '/pay',
    component: Layout,
    children: [
      {
        path: 'cart',
        component: Cart,
      },
      {
        path: 'checkout',
        component: Checkout
      },
      {
        path: 'unpaidlist',
        component: UnpaidList
      },
      {
        path: 'success',
        component: Success
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes, // short for `routes: routes`
})

export default router;