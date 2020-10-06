import { ref } from "vue";

export default async function(array, fn, cb) {
  const resultAll = ref([]);
  const promises = array.map(fn);

  for (const promise of promises) {
    const data = await promise;
    resultAll.value.push(...data);
    let accumulator = [...resultAll.value];
    cb(accumulator);
  }

  return resultAll;
}
