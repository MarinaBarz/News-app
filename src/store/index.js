import { createStore } from "vuex";
import feeds from "./modules/feeds";
import wishlist from "./modules/wishlist";
import plugins from "./plugins";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    feeds,
    wishlist,
  },
  strict: debug,
  plugins: plugins,
});
