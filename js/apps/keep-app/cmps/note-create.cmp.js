


export default {
    template: `
    <section class="note-created-bar">
        <div class="note-create-container">
            <input class="create-input" type="text" v-model="contentVal" @keyup.enter="createNote">
            <div class="note-btns">
                
            </div>
        </div>
    </section>
    `,
}