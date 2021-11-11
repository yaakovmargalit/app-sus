export default {
    template: `
    <section class="email-folder-list">
        <button class="folder-btn activ" @click="$emit('filter','inbox')">
            <div>
                <i class="fas fa-inbox"></i>
                <span>Inbox</span>
            </div>
             <span class="count">6</span>
        </button>
        <button class="folder-btn " @click="$emit('filter','starred')">
            <div>
            <i class="fas fa-star "></i>
                <span>Starred</span>
            </div>
             <span class="count"></span>
        </button>
        <button class="folder-btn " @click="$emit('filter','sent')">
            <div>
            <i class="fas fa-share-square "></i>
                <span>Sent</span>
            </div>
             <span class="count"></span>
        </button>
        <button class="folder-btn " @click="$emit('filter','drafts')">
            <div>
            <i class="fab fa-firstdraft "></i>
                <span>Drafts</span>
            </div>
             <span class="count"></span>
        </button>
        <button class="folder-btn " @click="$emit('filter','trash')">
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
    `
}