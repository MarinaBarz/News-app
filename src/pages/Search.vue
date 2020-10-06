<template>
  <div class="container py-4">
    <button type="button" class="btn btn-light btn-sm" @click="goBack">
      Назад
    </button>
    <div class="py-3">По запросу найдено {{ searchResult.length }}</div>
    <div class="row py-2">
      <div
        v-for="item in searchResult"
        :key="item.id"
        class="col col-lg-9 col-12"
      >
        <div class="card flex-lg-row border-bottom mb-3 rounded-0 py-4">
          <imageBg
            v-if="item.enclosure?.url"
            :imageSrc="item.enclosure.url"
            :width="180"
            :height="130"
          />
          <div class="card-body p-0 ml-lg-3">
            <p
              class="card-title font-weight-bold h6 mb-3"
              v-html="item.title"
            ></p>
            <p
              class="text-muted font-weight-normal"
              v-if="item.content"
              v-html="item.content"
            ></p>
            <div class="d-flex align-items-center">
              <div v-if="item.icon" class="avatar rounded-circle mr-3 bg-dark">
                <span class="icon sm">
                  <img :src="require(`@/assets/img/${item.icon}.svg`)" />
                </span>
              </div>
              <div class>
                <p class="font-weight-bold mb-0">{{ item.magazine }}</p>
                <p class="mb-0 text-muted small">{{ item.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import { computed } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import useFeeds from "@/composition/useFeeds";
import useFeedFormatter from "@/composition/useFeedFormatter";
import highlightText from "@/utils/highlightText";
import imageBg from "@/components/imageBg";

export default {
  props: ["search"],
  components: { imageBg },
  setup(props) {
    const store = useStore();
    const { loading } = useFeeds();
    const feeds = computed(() => store.getters["feeds/feeds"]);

    const searchQuery = computed(() => props.search);

    const foramttedFeeds = computed(() => {
      return feeds.value.map((item) => {
        const { date, content } = useFeedFormatter(item);
        return { ...item, date, content };
      });
    });

    const options = {
      includeScore: true,
      threshold: 0.4,
      includeMatches: true,
      minMatchCharLength: 3,
      keys: ["title", "content"],
    };

    const fuse = new Fuse(foramttedFeeds.value, options);

    const searchResult = computed(() => {
      let result = fuse.search(searchQuery.value);
      return result
        .map(({ item, matches }) => {
          const highlightedItem = { ...item };
          matches.forEach(({ indices, key }) => {
            highlightedItem[key] = highlightText(item[key], indices);
          });
          return highlightedItem;
        })
        .slice(0, 12);
    });

    const goBack = () => {
      router.back();
    };

    return { goBack, searchResult, loading };
  },
};
</script>

<style lang="scss">
.highlight {
  background: #f9f6e8;
  border-radius: 3px;
}
</style>
