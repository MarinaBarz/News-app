export function selectCategory(feeds, category) {
  return feeds.filter((feed) => feed.magazine == category);
}

const state = {
  feeds: [],
  filter: "all",
};

const getters = {
  feeds: (state) => state.feeds,
  hasFeeds: (state) => state.feeds && state.feeds.length,
  category: (state) => [
    ...new Set(state.feeds.map(({ magazine }) => magazine)),
  ],
  filter: (state) => state.filter,
  filteredFeeds: (state) =>
    state.filter == "all"
      ? [...state.feeds]
      : selectCategory([...state.feeds], state.filter),
};

const actions = {
  onSetFeeds: ({ commit }, feeds) => {
    commit("setFeeds", feeds);
  },
  onChangeFilter: ({ commit }, feeds) => {
    commit("changeFilter", feeds);
  },
};

const mutations = {
  setFeeds: (state, value) => {
    state.feeds = value;
  },
  changeFilter: (state, value) => {
    state.filter = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
