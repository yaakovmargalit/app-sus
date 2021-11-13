import { emailService } from "./../services/email-service.js"
import emailFilter from "./../cmps/email-filter.cmp.js"
import emailCompose from "./../cmps/email-compose.cmp.js"
import asideApp from "./../cmps/aside-app.cmp.js"
export default {
    template: `
    <section>
        <email-filter/>
        <div v-if="currEmail" class="main-details">
                <div class="header">
                    <h2>{{currEmail.subject}}</h2>
                    <div class="header-icons">                    
                         <i class="fas fa-reply reply"></i>
                         <router-link :to="'/keep?body='+ currEmail.body">
                        <i class="fas fa-paper-plane paper-plane"></i>
                    </router-link>
                         <router-link :to="'/email?body='+ currEmail.body">
                        <i class="fas fa-external-link-square-alt"></i>
                          </router-link>
                         <!-- <i class="fas fa-external-link-square-alt">
                             <router-link :to="'/email?body='+ currEmail.body"></router-link>
                         </i> -->
                    </div>
                </div>
                <div class="address">
                    <h4>{{currEmail.fromName}}</h4>
                    <p class="from-address">{{currEmail.from}}</p>
                </div>
                <div class="body">
                    <h4>{{currEmail.body}}</h4>
                </div>
                <router-link class="back" :to="'/email/'">Back</router-link>
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