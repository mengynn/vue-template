<template>
  <!-- 游戏模块 -->
  <div class="container main" v-if="game">
    <!-- 广告 -->
    <div class="ad" id="miniplay-index-open-container">
      <p>Advertisement</p>
      <div css-ad>
        <div id="miniplay-index-open-banner"></div>
      </div>
    </div>
    <!-- 游戏信息 -->
    <div class="detail-gamebox">
      <div class="thumb">
        <img :src="game.icon" />
      </div>
      <dl>
        <dt>{{game.name}}</dt>
        <dd class="detail-category">
          <a>{{game.category}}</a>
        </dd>
        <!-- 评分todo -->
        <dd>
          <div class="layui-inline"></div>
        </dd>
      </dl>
    </div>

    <!-- play -->
    <a class="detail-play">
      <i class="iconfont icon-game"></i>
      <span @click="playGame(game)">Play Now</span>
    </a>
    <!-- 游戏类型 -->
    <h3>Tags</h3>
    <div class="detail-tags">
      <a v-for="(tag, index) in game.tags" :key="index" href="javascript:void(0);">{{tag}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['gameId'],
  data() {
    return {
      game: null
    }
  },
  mounted() {
    this.game = JSON.parse(localStorage.getItem(`game-${this.gameId}`))
  },
  methods: {
    playGame(game) {
      let gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];
      if (!gameHistory.includes(game)) {
        gameHistory.push(game);

        localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
      }
    }
  }
}
</script>

<style>

</style>