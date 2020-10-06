import { ref } from "vue";
import { timeDifference } from "@/utils/timeUtils";

export default function(key, timeStep = false, storage = localStorage) {
  const data = ref(null);
  try {
    const rawValue = storage.getItem(key);
    if (rawValue) {
      let { date, body } = JSON.parse(rawValue);
      if (timeStep && timeDifference(date) < timeStep) {
        data.value = body;
      } else if (!timeStep) {
        data.value = body;
      }
    }
  } catch (e) {
    console.warn(e);
  }

  const set = (value) => {
    const date = Date.now();
    storage.setItem(key, JSON.stringify({ date, body: value }));
  };

  //   const watchHandler = () => {
  //     try {
  //       if (data.value == null) {
  //         storage.removeItem(key);
  //       } else {
  //         storage.setItem(key, JSON.stringify(data.value));
  //       }
  //     } catch (e) {
  //       console.warn(e);
  //     }
  //   };

  //   watch(data, () => watchHandler, { deep: true });

  return { data, set };
}
