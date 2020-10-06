import { toRefs, reactive } from "vue";

export default function(url, options, type) {
  const state = reactive({
    response: [],
    error: null,
    fetching: false,
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url, options);
      if (type == "json") state.response = await res.json();
      else if (type == "blob") state.response = await res.blob();
      else state.response = await res.text();
    } catch (errors) {
      state.error = errors;
    } finally {
      state.fetching = false;
    }
  };
  return { ...toRefs(state), fetchData };
}
