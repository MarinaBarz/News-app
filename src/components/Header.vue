<template>
  <div class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.38 131.38">
          <path
            d="M131.38 65.69a65.69 65.69 0 01-65.69 65.69H0l19.25-19.24a65.68 65.68 0 1192.89-92.89 65.47 65.47 0 0119.24 46.44z"
          />
          <path
            fill="#fff"
            d="M81.38 65.69a17.22 17.22 0 00-11.31-30.21h-26v60.43h26a17.23 17.23 0 0011.31-30.22z"
          />
        </svg>
      </router-link>
      <div class="input-group mr-auto w-50">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 117-7 7 7 0 01-7 7z"
              />
            </svg>
          </span>
        </div>
        <SearchInput />
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <router-link to="/wishlist" class="icon sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16 2H8a3 3 0 00-3 3v16a1 1 0 00.5.87 1 1 0 001 0l5.5-3.18 5.5 3.18a1 1 0 00.5.13 1 1 0 00.5-.13A1 1 0 0019 21V5a3 3 0 00-3-3zm1 17.27l-4.5-2.6a1 1 0 00-1 0L7 19.27V5a1 1 0 011-1h8a1 1 0 011 1z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
export default {
  components: { SearchInput },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
