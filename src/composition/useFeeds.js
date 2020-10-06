import { ref } from "vue";
import { useStore } from "vuex";

import useAsyncAll from "@/composition/useAsyncAll.js";
import useStorage from "@/composition/useStorage";

import { Feeds } from "@/api/index";

import { MAGAZINES, TIME_STEP } from "@/constants/index";

export default function() {
  const store = useStore();
  const loading = ref(false);

  const fetchFeeds = async () => {
    loading.value = true;

    if (store.getters["feeds/hasFeeds"]) {
      return (loading.value = false);
    }
    const { data: storageData, set: setStorage } = useStorage(
      "feeds",
      TIME_STEP,
      sessionStorage
    );
    if (storageData.value) {
      return setData(storageData.value);
    }

    let resultFeeds = await useAsyncAll(MAGAZINES, Feeds, setData);
    setStorage(resultFeeds.value);

    return;
  };

  const setData = (value) => {
    loading.value = false;
    store.dispatch("feeds/onSetFeeds", value);
  };

  fetchFeeds();

  return { loading };
}
