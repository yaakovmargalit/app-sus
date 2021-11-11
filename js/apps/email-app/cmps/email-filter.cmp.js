export default {
    template: `
    <div class="email-filter">
        <img class="google-logo" src="./../../../../img/Gmail-logo.png" alt="">
        <form >
            <input class="search-txt" placeholder="Search..." @input="$emit('doFilter',filter)" v-model="filter.searchTxt" type="text">
            <div>
                <label for="">Read
                    <input class="searchcheck-" @input="$emit('doFilter',filter)" v-model="filter.read"  type="checkbox">
                </label>
                <label  for="">Starred
                    <input class="search-check" @input="$emit('doFilter',filter)" v-model="filter.stared"  type="checkbox">
                </label>
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
    }
}