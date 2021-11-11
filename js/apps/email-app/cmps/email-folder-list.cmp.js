export default {
    template: `<section>

   
    <button class="burger-btn"  @click="toggleBar">☰</button>
    <section  class="email-folder-list" :class="isOpem">
        <button autofocus class="folder-btn " @click="$emit('filter','inbox'), toggleBar()">
            <div>
                <i class="fas fa-inbox"></i>
                <span>Inbox</span>
            </div>
             <span class="count">6</span>
        </button>
        <button class="folder-btn " @click="$emit('filter','starred'), toggleBar()">
            <div>
            <i class="fas fa-star "></i>
                <span>Starred</span>
            </div>
             <span class="count"></span>
        </button>
        <button class="folder-btn " @click="$emit('filter','sent'), toggleBar()">
            <div>
            <i class="fas fa-share-square "></i>
                <span>Sent</span>
            </div>
             <span class="count"></span>
        </button>
        <button class="folder-btn " @click="$emit('filter','drafts'), toggleBar()">
            <div>
            <i class="fab fa-firstdraft "></i>
                <span>Drafts</span>
            </div>
             <span class="count"></span>
        </button>
        <button class="folder-btn " @click="$emit('filter','trash'), toggleBar()">
            <div>
            <i class="fas fa-trash "></i>
                <span>Trash</span>
            </div>
             <span class="count"></span>
        </button>
        <!-- <button class="folder-btn" @click="$emit('filter','starred')"><i class="fas fa-star "></i> Starred</button>
        <button class="folder-btn" @click="$emit('filter','sent')"><i class="fas fa-share-square "></i> Sent</button>
        <button class="folder-btn" @click="$emit('filter','drafts')"><i class="fab fa-firstdraft "></i> Drafts</button>
        <button class="folder-btn" @click="$emit('filter','trash')"><i class="fas fa-trash "></i> Trash</button> -->
    </section>
    </section>
    `,
    data() {
        return {
            openMenue: false
        }
    },
    methods: {
        toggleBar() {
            this.openMenue = !this.openMenue
        }
    },
    computed: {
        isOpem() {
            return {
                open: this.openMenue
            }
        }
    }
}