<template>
  <div class="spec-preview">
    <img :src="skuImagejpg.imgUrl" />
    <div class="event" ref="eve" @mousemove="handler"></div>
    <div class="big">
      <img :src="skuImagejpg.imgUrl" ref="big" />
    </div>
    <!-- 遮罩层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["skuImageList"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    skuImagejpg() {
      return this.skuImageList[this.currentIndex] || {};
    },
  },
  mounted() {
    this.$bus.$on("getIndex", (index) => {
      this.currentIndex = index;
    });
  },
  methods: {
    handler(e) {
      let mask = this.$refs.mask;
      let eve = this.$refs.eve;
      let big = this.$refs.big;

      let left = e.offsetX - mask.offsetWidth / 2;
      let top = e.offsetY - mask.offsetHeight / 2;
      // let top = e.clientY-mask.offsetTop-mask.offsetWidth/2;
      // 约束范围,括号里如果只有一行代码时可以省略括号
      if (left <= 0) left = 0;
      // 大盒子宽度减去小盒子宽度就是小盒子的最大可移动范围
      if (left >= eve.offsetWidth - mask.offsetWidth) {
        left = eve.offsetWidth - mask.offsetWidth;
      }
      if (top <= 0) top = 0;
      if (top >= eve.offsetHeight - mask.offsetHeight) {
        top = eve.offsetHeight - mask.offsetHeight;
      }
      // 设置mask位置
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      big.style.left = -2 * left + "px";
      big.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
