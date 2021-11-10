import emailFolderList from "./email-folder-list.cmp.js"

export default {
    template: `
      <section class="aside-app">
           <button class="compose-btn" @click="$emit('new-email')"> <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"/>Compose</button>
           <email-folder-list @filter="$emit('filter',$event)"/>
      </section>
`,
    components: {
        emailFolderList
    }
}