<template>
  <input
    :value="searchQuery"
    @keyup="changeQuery"
    type="text"
    placeholder="Искать новости или события.."
    class="form-control"
  />
</template>

<script>
import router from "@/router";
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const route = useRouter();
    console.log(route);

    const { currentRoute } = router;

    const searchQuery = computed({
      get: () => route.query?.q || null,
      set: (val) => route.replace({ query: { q: val } }),
    });

    const changeQuery = (ev) => {
      searchQuery.value = ev.target.value;
      if (currentRoute.value.path !== "/search" && ev.target.value.length) {
        router.push({ path: "/search", query: { q: ev.target.value } });
      }
    };

    return { searchQuery, changeQuery };
  },
};
</script>

<style lang="scss" scoped></style>
