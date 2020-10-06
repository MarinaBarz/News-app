import { createLogger } from "vuex";
import useStorage from "@/composition/useStorage";

const { set } = useStorage("wishlist");

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { wishlist }) => {
    if (mutation.type.startsWith("wishlist")) {
      set([...wishlist.all]);
    }
  });
};

export default process.env.NODE_ENV !== "production"
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin];
