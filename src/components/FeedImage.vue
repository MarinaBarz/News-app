<template>
  <template v-if="!error">
    <div
      v-if="loading"
      :style="{width: `${width}px`}"
      style="height: 200px"
      class="card-img-top rounded-lg skeleton"
    ></div>
    <img v-else :src="image" class="card-img-top rounded-lg w-auto" :class="classes" />
  </template>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["imageSrc", "classes", "width"],
  setup(props) {
    const image = ref(null);
    const loading = ref(false);
    const color = ref(null);
    const error = ref(false);
    // const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";
    // const CORS_PROXY = "https://api.codetabs.com/v1/proxy?quest=";
    // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    // const CORS_PROXY = "https://api.allorigins.win/raw?url=";
    // console.log(props.imageSrc);
    const proxiesList = [
      // "https://api.codetabs.com/v1/proxy?quest=",
      "https://cors-anywhere.herokuapp.com/",
      "https://api.allorigins.win/raw?url=",
    ];
    const CORS_PROXY =
      proxiesList[Math.floor(Math.random() * proxiesList.length)];
    // const CORS_PROXY = createProxy();

    const toDataURL = (src) => {
      loading.value = true;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      const createImage = () => {
        const canvas = document.createElement("CANVAS");
        const ctx = canvas.getContext("2d");
        canvas.width = props.width || 350;
        canvas.height = canvas.width * (img.height / img.width);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        image.value = canvas.toDataURL();
        loading.value = false;
        // const bite = parseInt(image.value.replace(/=/g, "").length * 0.75);
        // console.log(bite / 1024);
      };
      img.onload = () => createImage();
      img.onerror = (err) => {
        error.value = true;
        console.log(err, src, props.imageSrc);
      };
    };
    console.log(CORS_PROXY);

    toDataURL(CORS_PROXY + props.imageSrc);

    return {
      image,
      color,
      loading,
      error,
    };
  },
};
</script>
