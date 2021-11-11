import { emailService } from "../services/email-service.js"
import emailList from "../cmps/email-list.cmp.js"
import asideApp from "../cmps/aside-app.cmp.js"
import emailCompose from "../cmps/email-compose.cmp.js"
import emailFilter from "../cmps/email-filter.cmp.js"
import { eventBus } from "../../../services/event-bus-service.js"
export default {
    template: `
    <section class="email-app">
        <email-filter @doFilter="doFilter"/>
        <div class="main">
            <aside-app class="aside" @new-email="setNewEmail" @filter="setFilter"/>
            <email-list @emailTrashed="emailTrashed" @emailStarred="emailStarred" @emailRead="emailRead" v-if="emails" class="list" :emails="emailsToShow"></email-list>
        </div>
        <email-compose @send="sendEmail" :emptyEmail="newEmail" @close="newEmail=null" v-if="newEmail"class="new-email"/>
    </section>
    `,
    data() {
        return {
            emails: null,
            newEmail: null,
            // filterBy: 'inbox',
            criteria: {
                status: 'inbox',
                txt: 'puki', // no need to support complex text search 
                isRead: false, // (optional property, if missing: show all) 
                isStared: false, // (optional property, if missing: show all) 
                lables: [] // has any of the labels
            }
        }
    },
    created() {
        this.loadEmails()
    },
    methods: {
        setFilter(val) {
            this.criteria.status = val
            this.loadEmails()
        },
        doFilter(filter) {
            this.criteria.isRead = filter.read
            this.criteria.isStared = filter.stared
        },
        loadEmails() {
            emailService.query()
                .then(emails => {
                    // emails = emails.filter(email => email.status === this.criteria.status)
                    this.emails = emails
                })
        },
        setNewEmail() {
            this.newEmail = emailService.getEmptyEmail()
        },
        sendEmail(email) {
            emailService.add(email)
                .then(() => {
                    this.loadEmails()
                }).then(() => {
                    const msg = {
                        txt: 'sent succesfully',
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
            this.newEmail = null
        },
        emailRead(id) {
            var email = this.emails.find(email => email.id === id)
            email.isRead = !email.isRead
            emailService.save(email)
                .then(() => {
                    this.loadEmails()
                })
        },
        emailStarred(id) {
            var email = this.emails.find(email => email.id === id)
            email.isStarred = !email.isStarred
            emailService.save(email)
                .then(() => {
                    this.loadEmails()
                })
        },
        emailTrashed(id) {
            var email = this.emails.find(email => email.id === id)
            if (email.status !== 'trash') email.status = 'trash'
            else email.status = 'inbox'
            emailService.save(email)
                .then(() => {
                    this.loadEmails()
                })
        }
    },
    computed: {
        emailsToShow() {
            var res = []
            return this.emails.filter(email => {
                // if (email.status === this.criteria.status) res.push(email)
                // if(this.criteria.isStared&&!email.isStared)

                return email.status === this.criteria.status
                    // email.isStarred === this.criteria.isStared &&
                    // email.isRead === this.criteria.isRead

            })
        }
    },
    // watch: {
    //     'this.criteria.status': {
    //         hendler() {
    //             emailService.query(this.criteria)
    //                 .then(emails => this.emails = emails)
    //         },
    //         // immediate: true
    //     }
    // },
    components: {
        emailList,
        asideApp,
        emailCompose,
        emailFilter
    }
}