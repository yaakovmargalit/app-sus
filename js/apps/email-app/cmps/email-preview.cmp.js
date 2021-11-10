export default {
    props: ['email'],
    template: `
    <section class="email-preview">
        <h1>{{email.fromName}}</h1>
        <h3>{{email.subject}}</h3>
        <h4>{{dateForDisplay}}</h4>
        <i class="fas fa-camera"></i>
    </section>
    `,
    data() {
        return {
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
        }
    },
    computed: {
        dateForDisplay() {
            var date = new Date(this.email.sentAt)
            return this.monthNames[date.getMonth() - 1] + ' ' + date.getDay()
        }
    }
}