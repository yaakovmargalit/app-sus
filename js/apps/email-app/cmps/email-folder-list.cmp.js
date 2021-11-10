export default {
    template: `
    <section class="email-folder-list">
        <button class="folder-btn" @click="$emit('filter','inbox')"><i class="fas fa-inbox"></i> Inbox</button>
        <button class="folder-btn" @click="$emit('filter','starred')"><i class="fas fa-star "></i> Starred</button>
        <button class="folder-btn" @click="$emit('filter','sent')"><i class="fas fa-share-square "></i> Sent</button>
        <button class="folder-btn" @click="$emit('filter','drafts')"><i class="fab fa-firstdraft "></i> Drafts</button>
        <button class="folder-btn" @click="$emit('filter','trash')"><i class="fas fa-trash "></i> Trash</button>
    </section>
    `
}