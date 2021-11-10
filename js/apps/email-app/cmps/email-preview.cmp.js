export default {
    props: ['email'],
    template: `
    <section  >
        <div @click.salf="isExpand=!isExpand" class="email-preview">
                <div>  <i @click="$emit('emailStarred',email.id)" class="far fa-star" :class="isStarred"></i> </div>
                <div>  <h1 :class="isReadBold">{{email.fromName}}</h1> </div>
                <div>  <h4 :class="isReadBold">{{email.subject}}</h4> </div>
                <div>  <h4 :class="isReadBold">{{dateForDisplay}}</h4> </div>
            <div class="hover-icons">
                <i @click="$emit('emailRead',email.id)" :class="isRead"></i> 
                <i @click="$emit('emailTrashed',email.id)" class="fas fa-trash trash"></i>
            </div>
        </div>
        <div v-if="isExpand" class="expand-preview">
                <div class="header">
                    <h2>{{email.subject}}</h2>
                    <div class="header-icons">
                         <i class="fas fa-expand expand"></i>
                         <i class="fas fa-reply reply"></i>
                         <i class="fas fa-paper-plane paper-plane"></i>
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