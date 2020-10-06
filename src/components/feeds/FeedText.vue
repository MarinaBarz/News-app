<template>
  <div class="card h-100" :class="[item.description ? 'border': 'bg-light']">
    <div class="card-body h-100">
      <p class="card-title font-weight-bold h5">{{ item.title }}</p>
      <p class="text-muted" v-if="content" v-text="content"></p>
      <div class="d-flex align-items-center">
        <div v-if="item.icon" class="avatar rounded-circle mr-3 bg-dark">
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
import useFeedFormatter from "@/composition/useFeedFormatter";

export default {
  props: ["item"],
  setup(props) {
    const { date, content } = useFeedFormatter(props.item);

    return { date, content };
  },
};
</script>

<style lang="scss"></style>
