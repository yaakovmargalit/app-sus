export default {
    props: ['emptyEmail'],
    template: `
    <section class="email-compose">
        <button class="colse" @click="$emit('close')">X</button>
        <h1>New Email</h1>
        <form @submit="$emit('send',newEmail)" >
         <div>  From: <input v-model="newEmail.from" type="text" ></div>
          <div> To:  <input v-model="newEmail.to" type="text" ></div>
         <div>  Subject: <input v-model="newEmail.subject" type="text" ></div>
         <div class="mail-body">  <textarea v-model="newEmail.body" ></textarea> </div>
        <button tyap="submit">Sned</button>
        </form>
    </section>
    `,
    data() {
        return {
            newEmail: this.emptyEmail
        }
    }
}