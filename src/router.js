import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import home from "./pages/Home";
import search from "./pages/Search";
import wishlist from "./pages/Wishlist";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: home,
      meta: { title: "Новости" },
    },
    {
      path: "/search",
      component: search,
      meta: { title: "Поиск" },
      props: (route) => ({ search: route.query.q }),
    },

    {
      path: "/wishlist",
      meta: { title: "Закладки" },
      component: wishlist,
    },
  ],
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title ? to.meta.title : "News app";
  });
});

export default router;
