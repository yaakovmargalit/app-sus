import noteCreate from "../cmps/note-create.cmp.js"
import { noteService } from "../services/note-service.js"

export default {
    template: `
    <section class="keep-app">
        <h2>hello</h2>
        <note-create></note-create>
    </section>
    `,
    data() {
        return {
            notes: null,
            selectedNote: null,
            filterBy: null,
        }
    },
    created(){
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
            })
    },
    components:{
        noteCreate
    },
}