<!--
 * @Description: 全局颜色
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:29:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-08 13:59:45
 -->

## 全局颜色

Biims-Ui 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

:::demo

```html
<template>
  <div>
    <div class="b-color">
      <div class="title">主色体系-科研蓝（Sci-Blue）</div>
      <div class="item-box">
        <div
          class="item"
          v-for="(item, index) in SciBlueArr"
          :key="index"
          :style="{
            background: item,
          }"
        >
          <span class="name">Name: Sci-Blue-{{ index + 1 }}</span>
          <span class="value">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="b-color">
      <div class="title">主色体系-科研绿（Sci-Green）</div>
      <div class="item-box">
        <div
          class="item"
          v-for="(item, index) in SciGreenArr"
          :key="index"
          :style="{
            background: item,
          }"
        >
          <span class="name">Name: Sci-Green-{{ index + 1 }}</span>
          <span class="value">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="b-color">
      <div class="title">辅色体系-智慧橙（Bri-Yellow）</div>
      <div class="item-box">
        <div
          class="item"
          v-for="(item, index) in BriYellowArr"
          :key="index"
          :style="{
            background: item,
          }"
        >
          <span class="name">Name: Bri-Yellow-{{ index + 1 }}</span>
          <span class="value">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="b-color">
      <div class="title">辅色体系-智慧红（Bri-Red）</div>
      <div class="item-box">
        <div
          class="item"
          v-for="(item, index) in BriRedArr"
          :key="index"
          :style="{
            background: item,
          }"
        >
          <span class="name">Name: Bri-Red-{{ index + 1 }}</span>
          <span class="value">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="b-color">
      <div class="title">警告提示色</div>
      <div class="item-box">
        <div
          class="item"
          v-for="(item, index) in tipsArr"
          :key="index"
          :style="{
            background: item.color,
            color: '#000',
          }"
        >
          <span class="name">{{ item.name }}</span>
          <span class="value">{{ item.color }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        SciBlueArr: [
          "#D4EDFF",
          "#A3CFFF",
          "#65A8FE",
          "#3E8AFB",
          "#005BFA",
          "#0048D9",
          "#0034B3",
          "#002490",
          "#001977",
        ],
        SciGreenArr: [
          "#CCFFDD",
          "#99F9BC",
          "#64EFA0",
          "#3EE094",
          "#0ACC7E",
          "#09AF7C",
          "#019377",
          "#01766A",
          "#006161",
        ],
        BriYellowArr: [
          "#FFF7CD",
          "#FFEC9A",
          "#FFDF69",
          "#FFD243",
          "#FFBD02",
          "#DB9C02",
          "#B77E04",
          "#936100",
          "#7A4D00",
        ],
        BriRedArr: [
          "#FFDBD6",
          "#FEC2B3",
          "#FEB18C",
          "#FE9270",
          "#FE6041",
          "#DB3F30",
          "#B72220",
          "#93141D",
          "#790B1D",
        ],
        tipsArr: [
          {
            name: "Name: Error-Normal",
            color: "#FFDBD6",
          },
          {
            name: "Name: Error-Status",
            color: "#DB3F30",
          },
          {
            name: "Name: Warning-Normal",
            color: "#FFF7C8",
          },
          {
            name: "Name: Warning-Status",
            color: "#E69A00",
          },
          {
            name: "Name: Sucess-Normal",
            color: "#BEFFDA",
          },
          {
            name: "Name: Sucess-Status",
            color: "#00B378",
          },
        ],
      };
    },
  };
</script>
```
