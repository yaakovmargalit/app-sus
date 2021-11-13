export default {
    template: `
    <section class="main-nav">
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
    `
}


