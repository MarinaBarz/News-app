<template>
  <div v-if="loading" class="row">
    <div v-for="i in 6" :key="i" class="col col-lg-4 col-12 mb-4">
      <FeedsSkeleton />
    </div>
  </div>
  <div v-else class="row">
    <div v-for="item in feeds" :key="item.id" class="col col-lg-4 col-12 mb-4">
      <component
        :is="item.enclosure?.url ? 'FeedImg': 'FeedText' "
        :item="item"
        @click="$emit('change', item)"
      ></component>
    </div>
  </div>
</template>

<script>
import FeedText from "@/components/feeds/FeedText";
import FeedImg from "@/components/feeds/FeedImg";
import FeedsSkeleton from "@/components/feeds/FeedsSkeleton";

export default {
  props: ["loading", "feeds"],
  components: {
    FeedText,
    FeedImg,
    FeedsSkeleton,
  },
  setup() {
    return {};
  },
};
</script>

