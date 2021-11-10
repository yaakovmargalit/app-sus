import emailApp from './apps/email/email-app.cmp.js';
import keepApp from './apps/keep/keep-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';


const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email/:emailId',
        component: bookDetails
    },
    {
        path: '/keep/:keepId',
        component: bookDetails
    },
];

export const router = new VueRouter({ routes });