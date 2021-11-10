import emailPreview from "./email-preview.cmp.js"
export default {
    props: ['emails'],
    template: `
    <section>
        <ul>
            <li v-for="email in emails">
                <email-preview :email="email"></email-preview>
            </li>
        </ul>
    </section>
    `,
    components: {
        emailPreview
    }
}