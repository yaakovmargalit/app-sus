import keepApp from './apps/keep-app/pages/keep-app.js';
import emailApp from './apps/email-app/pages/email-app.js'
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import emailDetails from './apps/email-app/pages/email-details.cmp.js';


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
        path: '/email/:emailId',
        component: emailDetails
    },
    {
        path: '/keep',
        component: keepApp
    },
    // {
    //     path: '/keep/:keepId',
    //     component: bookDetails
    // },
];

export const router = new VueRouter({ routes });