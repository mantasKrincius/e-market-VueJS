import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import ProfilePage from "../views/ProfilePage";
import ProductDetails from "../components/AddinionalComponents/ProductDetails";
import CartPage from "../views/CartPage";
import CreatePostPage from "../views/CreatePostPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage
    },
    {
        path: '/createPost',
        name: 'Create Post',
        component: CreatePostPage
    },
    {
        path: '/products/:id',
        name: 'Details of product',
        component: ProductDetails
    },
    {
        path: '/user/cart',
        name: 'User cart',
        component: CartPage
    },
]

const router = new VueRouter({
    routes
})

export default router
