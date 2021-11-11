export default {
    template: `
        <header>
        <router-link :to="'/'"><h1 class="logo">APPS SUS</h1></router-link>
            <div class="nav">
                <router-link :to="'/email/'"><h4>email</h4></router-link>
                <router-link :to="'/keep/'"><h4>keep</h4></router-link>
            </div>
        </header>
    `
}