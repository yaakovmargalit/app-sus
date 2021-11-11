export default {
    template: `
        <header>
            <h1 class="logo">APPS SUS</h1>
            <div class="nav">
                <router-link :to="'/email/'"><h4>email</h4></router-link>
                <router-link :to="'/kepp/'"><h4>keep</h4></router-link>
            </div>
        </header>
    `
}