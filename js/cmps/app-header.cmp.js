// export default {
//     template: `
//         <header>
//         <router-link :to="'/'"><h1 class="logo">APPS SUS</h1></router-link>
//             <div class="nav">
//                 <router-link :to="'/email/'"><h4>email</h4></router-link>
//                 <router-link :to="'/keep/'"><h4>keep</h4></router-link>
//             </div>
//         </header>
//     `
// }


import mainNav from './main-nav.cmp.js'
// import { eventBus } from '../services/eventBus.service.js'

export default {
    template: `
    <section class="main-header">

        <router-link to="/">
            <img class="logo-icon" src="img/logoooo.png" alt="logo"  />
        </router-link>
            <div class="menu-icon-container">
                <img class="menu-icon" id="menuIcon" @click="isMenuOpen = !isMenuOpen"
                src="img/menu.png" alt="menu" />
            </div>
        

            <transition name="fade">
                <main-nav id="menu" v-if="isMenuOpen" @clicked="this.isMenuOpen = false">
                </main-nav>
            </transition>
     
    </section>
    `
    ,
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        documentClick(ev) {
            if (ev.target.id !== 'menu' && ev.target.id !== 'menuIcon') this.isMenuOpen = false
        }
    },
    watch: {
        '$route.path'() {
            this.isMenuOpen = false
        }
    },
    components: {
        mainNav
    },
    created () {
        document.addEventListener('click', this.documentClick) //For closing menu on doc click
      },
}
