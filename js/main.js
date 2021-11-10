// import userMsg from './cmps/user-msg.cmp.js'
import keepApp from './apps/keep-app/pages/keep-app.js';
import { router } from './routes.js';
const options = {
    el: '#app',
    router,
    template: `
        <section>
            <router-view />
        </section>
    `,
    components: {
        keepApp
    }
};

new Vue(options);