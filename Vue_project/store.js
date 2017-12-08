const store = new Vuex.Store({
    state: {
        tab_is_selected: false
    },
    mutations: {
        change_tab_is_selected: (state) => {
            state.tab_is_selected = true;//!state.tab_is_selected;
        },
        to_start_screen: (state) => {
            state.tab_is_selected = false;//!state.tab_is_selected;
        }
    }
});