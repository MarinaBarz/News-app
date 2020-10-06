import { onMounted, onUnmounted } from "vue";
import { unwrap } from "@/composition/utils";

export default function(target = window, type, listener, options = false) {
  onMounted(() => {
    target = unwrap(target);
    target.addEventListener(type, listener, options);
  });

  const remove = () =>
    target && target.removeEventListener(type, listener, options);

  onUnmounted(remove);

  return { remove };
}
