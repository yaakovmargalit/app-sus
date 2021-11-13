export default {
    template: `
    <div class="email-filter">
        <img class="google-logo" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_rtl_r2.png" alt="">
        <form >
            <input class="search-txt" placeholder="Search..." @input="$emit('doFilter',filter)" v-model="filter.searchTxt" type="text">
            <div>
                <input id="read"   @input="$emit('doFilter',filter)" v-model="filter.read"  type="checkbox">
                <label :class="readStyle" class="search-check" for="read">Read</label>
                
                    <input id="star"  @input="$emit('doFilter',filter)" v-model="filter.stared"  type="checkbox">
                <label :class="starStyle" class="search-check"  for="star">Starred</label>
                
            </div>
        </form>
    </div>
    `,
    data() {
        return {
            filter: {
                searchTxt: null,
                read: false,
                stared: false
            }
        }
    },
    computed: {
        readStyle() {
            return {
                selected: this.filter.read,
                unselected: !this.filter.read
            }
        },
        starStyle() {
            return {
                selected: this.filter.stared,
                unselected: !this.filter.stared
            }
        }
    }
}