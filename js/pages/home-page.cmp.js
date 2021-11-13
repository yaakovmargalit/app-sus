export default {
    template: `
    <section class="home-page">
        <div class="body">
            <h2>APPSUS</h2>
            <a href="#appsus-pages" class="hero-cta-btn">Get started</a>
        </div>
        <div id="appsus-pages" class="gallery-header">Appsus pages</div>
        <section class="gallery-apps">
        <router-link to="/email" @click.native="$emit('clicked')" exact class="nav-link">
        <span class="note-icon-container"><i class="note-icon fas fa-envelope"></i></span>
        <span>email</span>
        <!-- <img src="img/icons/mail-app.png"> -->
        </router-link>
        <router-link to="/keep" @click.native="$emit('clicked')" class="nav-link">
        <span class="note-icon-container"><i class="note-icon fas fa-lightbulb"></i></span>
        <span>keep</span>
        </router-link>
        </section>
    </section>
    <!-- <section></section> -->
    `
}