import { emailService } from "../services/email-service.js"
import emailList from "../cmps/email-list.cmp.js"
import emailFolderList from "../cmps/email-folder-list.cmp.js"

export default {
    template: `
    <section class="email-app">
        <email-folder-list/>
        <email-list :emails="emails"></email-list>
    </section>
    `,
    data() {
        return {
            emails: null
        }
    },
    created() {
        this.loadEmails()
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails)
        }
    },
    components: {
        emailList,
        emailFolderList
    }
}