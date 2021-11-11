import { emailService } from "../../../../js/apps/email-app/services/email-service.js"
import emailFilter from "../../../../js/apps/email-app/cmps/email-filter.cmp.js"
import emailCompose from "../../../../js/apps/email-app/cmps/email-compose.cmp.js"
import asideApp from "../../../../js/apps/email-app/cmps/aside-app.cmp.js"
export default {
    template: `
    <section>
        <email-filter/>
        <div v-if="currEmail" class="main-details">
                <div class="header">
                    <h2>{{currEmail.subject}}</h2>
                    <div class="header-icons">                    
                         <i class="fas fa-reply reply"></i>
                         <i class="fas fa-paper-plane paper-plane"></i>
                         <i @click="$emit('emailTrashed',email.id)"class="fas fa-trash trash"></i>
                    </div>
                </div>
                <router-link :to="'/email/'">Bake</router-link>
                <div class="address">
                        <h4>{{currEmail.fromName}}</h4>
                        <p class="from-address">{{currEmail.from}}</p>
                </div>
                <div class="body">
                        <h4>{{currEmail.body}}</h4>
                </div>
        </div>
        <div class="main-details">
            

        </div>
    </section>
    `,
    data() {
        return {
            currEmail: null
        }
    },
    created() {
        emailService.getById(this.$route.params.emailId)
            .then(email => {
                this.currEmail = email
            })
    },
    components: {
        emailFilter,
        emailCompose,
        asideApp
    }
}