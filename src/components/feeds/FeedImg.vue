<template>
  <div class="card">
    <imageBg :imageSrc="item.enclosure.url" :height="220" />
    <div class="card-body px-0">
      <p class="card-title font-weight-bold">{{ item.title }}</p>
      <div class="d-flex align-items-center">
        <div class="avatar rounded-circle mr-3 bg-dark">
          <span class="icon sm">
            <img :src="require(`@/assets/img/${item.icon}.svg`)" />
          </span>
        </div>
        <div class>
          <p class="font-weight-bold mb-0">{{ item.magazine }}</p>
          <p class="mb-0 text-muted small">{{ date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import timeFromNow from "@/utils/timeFromNow";
import imageBg from "@/components/imageBg";
// import FeedImage from "@/components/FeedImage";

export default {
  props: ["item"],
  components: { imageBg },
  setup(props) {
    const date = timeFromNow(props.item.pubDate);

    return { date };
  },
};
</script>
