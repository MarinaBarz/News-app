const state = {
  all: [],
};

const getters = {
  all: (state) => state.all,
};

const actions = {
  toggleItem({ state, commit }, feed) {
    const hasItem = state.all.find((item) => item.link === feed.link);
    if (!hasItem) {
      commit("addToWishlist", feed);
    } else {
      commit("removeFromWishlist", feed);
    }
  },
};

const mutations = {
  setWishlist(state, value) {
    state.all = value;
  },
  addToWishlist(state, item) {
    state.all.push(item);
  },
  removeFromWishlist(state, { link }) {
    const newState = state.all.filter((item) => item.link !== link);
    state.all = newState;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
