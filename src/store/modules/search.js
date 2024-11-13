export default {
  state: {
    isSearchOpen: false,
  },
  getters: {
    isSearchOpen: (state) => {
      return state.isSearchOpen;
    },
  },
  mutations: {
    TOGGLE_SEARCH(state) {
      state.isSearchOpen = !state.isSearchOpen;
    },
    OPEN_SEARCH(state) {
      state.isSearchOpen = true;
    },
    CLOSE_SEARCH(state) {
      state.isSearchOpen = false;
    },
  },
  actions: {
    toggleSearch({ commit }) {
      commit("TOGGLE_SEARCH");
    },
    openSearch({ commit }) {
      commit("OPEN_SEARCH");
    },
    closeSearch({ commit }) {
      commit("CLOSE_SEARCH");
    },
  },
};
