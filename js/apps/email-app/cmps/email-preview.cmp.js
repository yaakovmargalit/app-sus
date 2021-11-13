export default {
    props: ['email'],
    template: `
    <section  >
        <div @click.salf="expand" class="email-preview" :class="isReadBold">
                <div class="star-icon">  <i @click.stop="$emit('emailStarred',email.id)" class="far fa-star" :class="isStarred"></i> </div>
                <div>  <h1 :class="isReadBold">{{email.fromName}}</h1> </div>
                <div>  <h4 :class="isReadBold">{{email.subject}}</h4> </div>
                <div>  <h4 :class="isReadBold">{{dateForDisplay}}</h4> </div>
            <div class="hover-icons">
                <i @click.stop="$emit('emailRead',email.id)" :class="isRead"></i> 
                <i @click.stop="$emit('emailTrashed',email.id)" class="fas fa-trash trash"></i>
            </div>
        </div>
        <div v-if="isExpand" class="expand-preview">
                <div class="header">
                    <h2>{{email.subject}}</h2>
                    <div class="header-icons">
                    <router-link :to="'/email/'+email.id" >
                        <i class="fas fa-expand expand" @click="$emit('emailRead',email.id)"></i>
                    </router-link>
                    <i class="fas fa-reply reply"></i>
                    <router-link :to="'/keep?body='+ email.body">
                        <i class="fas fa-paper-plane paper-plane"></i>
                    </router-link>
                    <i @click="$emit('emailTrashed',email.id)"class="fas fa-trash trash"></i>
                    </div>
                </div>
                <div class="address">
                        <h4>{{email.fromName}}</h4>
                        <p class="from-address">{{email.from}}</p>
                </div>
                <div class="body">
                        <h4>{{email.body}}</h4>
                </div>
        </div>
    </section>
    `,
    data() {
        return {
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            isExpand: false

        }
    },
    methods: {
        expand() {
            this.isExpand = !this.isExpand
        }
    },
    computed: {
        dateForDisplay() {
            var date = new Date(this.email.sentAt)
            return this.monthNames[date.getMonth() - 1] + ' ' + date.getDay()
        },
        isRead() {
            return {
                "fas fa-envelope-open": this.email.isRead,
                "far fa-envelope-open": !this.email.isRead,
            }
        },
        isReadBold() {
            return {
                "bold  ": this.email.isRead,
            }
        },
        isStarred() {
            return {
                "gold fas": this.email.isStarred,
            }
        }
    }
}