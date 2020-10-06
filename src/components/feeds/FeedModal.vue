<template>
  <div class="p-3">
    <div class="d-flex align-items-center py-3">
      <p class="mb-0 text-muted mr-4">{{ date }}</p>
      <div @click="updateWishlist" class="d-flex btn p-1">
        <span class="icon sm mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16 2H8a3 3 0 00-3 3v16a1 1 0 00.5.87 1 1 0 001 0l5.5-3.18 5.5 3.18a1 1 0 00.5.13 1 1 0 00.5-.13A1 1 0 0019 21V5a3 3 0 00-3-3zm1 17.27l-4.5-2.6a1 1 0 00-1 0L7 19.27V5a1 1 0 011-1h8a1 1 0 011 1z"
            />
          </svg>
        </span>
        <p class="mb-0">{{!isWishes ? 'В закладки': 'Удалить из закладок'}}</p>
      </div>
      <a
        :href="item.link"
        target="_blank"
        class="d-flex btn p-1 ml-auto align-items-center"
        rel="noopener noreferrer"
      >
        <div v-if="item.icon" class="avatar rounded-circle bg-dark xs mr-3">
          <span class="icon xs">
            <img :src="require(`@/assets/img/${item.icon}.svg`)" />
          </span>
        </div>
        <p class="mb-0 small">Читать в источнике</p>
        <span class="icon ml-2 xs">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18 10.82a1 1 0 00-1 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h7.18a1 1 0 000-2H5a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3v-7.18a1 1 0 00-1-1zm3.92-8.2a1 1 0 00-.54-.54A1 1 0 0021 2h-6a1 1 0 000 2h3.59L8.29 14.29a1 1 0 000 1.42 1 1 0 001.42 0L20 5.41V9a1 1 0 002 0V3a1 1 0 00-.08-.38z"
            />
          </svg>
        </span>
      </a>
    </div>
    <div class="mb-3">
      <h1 class="align-self-center font-weight-bolder h5 mb-3">{{ item.title }}</h1>
    </div>
    <p class="lead font-weight-normal" v-if="content" v-text="content"></p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import useFeedFormatter from "@/composition/useFeedFormatter";

export default {
  props: ["item"],
  setup(props) {
    const store = useStore();
    const { date, content } = useFeedFormatter(props.item);

    const wishlist = computed(() => store.getters["wishlist/all"]);
    const isWishes = computed(() =>
      wishlist.value.some((item) => item.link == props.item.link)
    );

    const updateWishlist = () => {
      store.dispatch("wishlist/toggleItem", props.item);
    };

    return { date, content, isWishes, updateWishlist };
  },
};
</script>
