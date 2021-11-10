import emailPreview from "./email-preview.cmp.js"
export default {
    props: ['emails'],
    template: `
    <section>
        <ul>
            <li v-for="email in emails">
                <email-preview @emailTrashed="$emit('emailTrashed',$event)" @emailStarred="$emit('emailStarred',$event)" @emailRead="$emit('emailRead',$event)" :email="email"></email-preview>
            </li>
        </ul>
    </section>
    `,
    methods: {

    },
    components: {
        emailPreview
    }
}