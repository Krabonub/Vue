const store = new Vuex.Store({
    state: {
        tab_is_selected: false
    },
    mutations: {
        change_tab_is_selected: (state) => {
            state.tab_is_selected = true;
        },
        to_start_screen: (state) => {
            state.tab_is_selected = false;
        }
    }
});