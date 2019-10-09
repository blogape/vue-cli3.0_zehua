<template>
  <div class="home">1233</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Utils } from "../../config/utils";
// import { Account, Shop } from "../../api/index";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld
  }
})
export default class Home extends Vue {
  // public userData:[]string = "";

  async getUserData() {
    // let name = "bruce";
    // let password = "123456";
    // console.log(1233);
    // this.userData = await Shop.getShopList();
    // console.log(this.userData);
  }

  mounted() {
    // console.log(process.env.VUE_APP_IMAGEPATH);
    console.log(123333333);

    this.getUserData();
    Utils.getStore("name");
  }
}
</script>


<style lang='less' scoped>
// @import "../../assets/style/mixin.less";
// .home {
//   width: 100px;
//   height: 100px;
//   border: 1px solid red;
//   .bis('"https://static.segmentfault.com/sponsor/20191005.png"');
// }
</style>