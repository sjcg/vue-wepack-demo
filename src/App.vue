<template>
  <div class="example">
    {{ msg }}
  </div>
</template>

<script>
import imgs from "./img/sss.jpg";
import getData from "./utils/getData";

export default {
  data() {
    return {
      msg: "Hello Webpack",
      imgUrl: imgs,
    };
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.example {
  color: red;
}
</style>