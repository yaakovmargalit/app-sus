// import userMsg from './cmps/user-msg.cmp.js'
import keepApp from './apps/keep-app/pages/keep-app.js';
import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js'
import { router } from './routes.js';
const options = {
    el: '#app',
    router,
    template: `
        <section>
            <user-msg/>
            <app-header></app-header>
            <router-view />
        </section>
    `,
    components: {
        keepApp,
        appHeader,
        userMsg
    }
};

new Vue(options);