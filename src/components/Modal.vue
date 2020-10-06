<template>
  <div v-if="currentValue" class="modal-backdrop">
    <div class="modal fade in modal-active show" data-backdrop="static">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" @click="$emit('close')">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
const CLASS_NAME_OPEN = "modal-open";

export default {
  props: ["value"],
  setup(props) {
    const currentValue = ref(false);

    const openModal = () => {
      currentValue.value = true;
      document.body.classList.add(CLASS_NAME_OPEN);
    };
    const closeModal = () => {
      currentValue.value = false;
      document.body.classList.remove(CLASS_NAME_OPEN);
    };

    watchEffect(() => {
      props.value ? openModal() : closeModal();
    });

    return { currentValue };
  },
};
</script>

<style lang="scss">
.modal-active {
  display: block !important;
}
</style>
