<template>
  <div class="container py-4">
    <button type="button" class="btn btn-light btn-sm" @click="goBack">Назад</button>
    <div class="py-5" v-if="!wishlist.length">
      <p class="h6">Нет сохраненых новостей</p>
    </div>
    <div v-else class="row py-2">
      <div v-for="item in wishlist" :key="item.id" class="col col-lg-9 col-12">
        <div class="card flex-lg-row border-bottom mb-3 rounded-0">
          <div class="mr-lg-3 align-self-center">
            <FeedImage :imageSrc="item.enclosure.url" :width="180" />
          </div>
          <div class="card-body px-0">
            <p class="card-title font-weight-bold h6 mb-3" v-html="item.title"></p>
            <p class="text-muted font-weight-normal" v-if="item.content" v-html="item.content"></p>
            <div class="d-flex align-items-center">
              <div v-if="item.icon" class="avatar rounded-circle mr-3 bg-dark">
                <span class="icon sm">
                  <img :src="require(`@/assets/img/${item.icon}.svg`)" />
                </span>
              </div>
              <div class>
                <p class="font-weight-bold mb-0">{{ item.magazine }}</p>
                <p class="mb-0 text-muted small">{{item.date}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import useStorage from "@/composition/useStorage";

import FeedImage from "@/components/FeedImage";

export default {
  components: { FeedImage },
  setup() {
    const store = useStore();

    const { data: storageData } = useStorage("wishlist");
    console.log(storageData.value);
    if (storageData.value) {
      store.commit("wishlist/setWishlist", storageData.value);
    }
    const wishlist = computed(() => store.getters["wishlist/all"]);

    watch(wishlist, (val) => {
      console.log(val);
    });

    const goBack = () => {
      router.back();
    };

    return { goBack, wishlist };
  },
};
</script>

