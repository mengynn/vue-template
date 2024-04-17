<template>
  <!-- 游戏模块 -->
  <div class="container main">
    <!-- 广告 -->
    <div class="ad" id="miniplay-index-open-container">
      <p>Advertisement</p>
      <div css-ad>
        <div id="miniplay-index-open-banner"></div>
      </div>
    </div>
    <h2 class="classify-key">
      <!-- 动态插入分类名称 -->
      <span>{{ this.categoryName }}</span>
    </h2>
    <!-- 游戏列表 -->
    <ul class="main-gamebox">
      <!-- 动态插入游戏 -->
      <li v-for="game in games" :key="game.id">
        <router-link :to="{ name: 'DetailPage', params: { id: game.id }}">
          <div class="thumb">
            <img class="lazyLoad" :src="game.icon" :data-src="game.icon"/>
          </div>
          <p>{{ game.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['categoryId'],
  data() {
    return {
      categoryName: null,
      games: []
    }
  },
  mounted() {
    this.loadGames(this.categoryId);
  },
  methods: {
    loadGames(categoryId) {
      // 发送请求获取游戏数据
      axios
          .get(`/src/assets/site-data/category/${categoryId}.json`)
          .then(response => {
            if (response.data.code === "000000") {
              this.categoryName = response.data.data.name;
              this.games = response.data.data.games
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    },
  },
  watch: {
    categoryId(newCategoryId) {
      this.loadGames(newCategoryId)
    }
  }
}
</script>

<style>

</style>