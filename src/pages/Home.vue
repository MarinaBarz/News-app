<template>
  <div>
    <div class="container my-4"></div>
    <div class="container my-4 pb-4">
      <div class="d-flex overflow-auto mb-4">
        <button
          @click="changeFilter('all')"
          :class="{'btn-light': filter === 'all'}"
          class="btn mr-2"
        >Все издания</button>
        <button
          v-for="(item, key) in category"
          :key="key"
          @click="changeFilter(item)"
          :class="{'btn-light': filter === item}"
          class="btn mr-2"
        >{{ item }}</button>
      </div>
      <FeedsGrid :feeds="feeds" :loading="loading" @change="setActiveId" />
    </div>
  </div>
  <Modal :value="showModal" @close="showModal = false">
    <FeedModal :item="activeFeed" />
  </Modal>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import Modal from "@/components/Modal";
import FeedsGrid from "@/components/FeedsGrid";
import FeedModal from "@/components/feeds/FeedModal";
import useLoadMore from "@/composition/useLoadMore";
import useFeeds from "@/composition/useFeeds";

export default {
  name: "App",
  components: {
    Modal,
    FeedModal,
    FeedsGrid,
  },
  setup() {
    const perPage = ref(9);
    const activeFeed = ref(null);
    const showModal = ref(false);

    const store = useStore();

    const filter = computed(() => store.getters["feeds/filter"]);
    const category = computed(() => store.getters["feeds/category"]);
    const filteredFeeds = computed(() => store.getters["feeds/filteredFeeds"]);

    const { loading } = useFeeds();

    const feeds = computed(() => {
      if (filteredFeeds.value.length == 0) return [];
      return filteredFeeds.value
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
        .slice(0, perPage.value);
    });

    const changeFilter = (value) => {
      store.dispatch("feeds/onChangeFilter", value);
      perPage.value = 9;
    };

    const setActiveId = (item) => {
      activeFeed.value = item;
      showModal.value = true;
    };

    const loadMoreFeeds = () => {
      perPage.value += 9;
    };
    useLoadMore(window, loadMoreFeeds);

    return {
      feeds,
      loading,
      category,
      activeFeed,
      setActiveId,
      showModal,
      filteredFeeds,
      changeFilter,
      filter,
    };
  },
};
</script>

<style lang="scss"></style>
