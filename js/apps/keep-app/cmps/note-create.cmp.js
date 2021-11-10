
import { noteService } from "../services/note-service.js"

export default {
    props: [''],
    template: `
    <section class="note-created">
        <div class="note-create-container">
            <input class="create-input" type="text" v-model="contentVal" @keyup.enter="createNote">
            <div class="note-btns">
                <button class="note-create-btn simple-txt" @click="changeType('noteTxt')">
                    <i class="font-aws-icon far fa-comment"></i>
                </button>
                <button class="note-create-btn todo-list" @click="changeType('noteTodo')">
                    <i class="font-aws-icon fas fa-list"></i>
                </button>
                <button class="note-create-btn img-url" @click="changeType('noteImg')">
                    <i class="font-aws-icon far fa-image"></i>
                </button>
                <button class="note-create-btn video-ur" @click="changeType('noteVideo')">
                    <i class="font-aws-icon fab fa-youtube"></i>
                </button>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            noteData: {
                val: '',
                type: 'noteTxt',
            }
        }
    },
    computed: {
        placeholder() {
            switch (this.noteData.type) {
                case 'noteTxt':
                    return 'Write something...'
                case 'noteImg':
                    return 'Insert img url...'
                case 'noteTodo':
                    return 'Things to do...'
                case 'noteVideo':
                    return 'Insert video url...'
            }
        }
    },

    methods: {
        addNote() {
            noteService.addNote({ ...this.noteData })
            this.noteData.val = '';
        },
        changeType(type) {
            this.noteData.type = type;
        },
        addFromMail(data) {
            this.noteData.val = data;
            this.changeType('noteText');
            this.addNote();
        }

    },
    

}