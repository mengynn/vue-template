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
    <!-- 游戏列表 -->
    <ul class="main-gamebox">
      <!-- 动态插入游戏 -->
      <li v-for="game in games" :key="game.id" @click="saveGameInfo(game)">
        <router-link :to="{ name: 'DetailPage', params: { gameId: game.id, game: game }}">
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
  name: 'Game',
  data() {
    return {
      games: []
    };
  },
  mounted() {
    this.loadGames();
  },
  methods: {
    loadGames() {
      // 发送请求获取游戏数据
      axios
          .get("/src/assets/site-data/index.json")
          .then(response => {
            if (response.data.code === "000000") {
              let allGame = response.data.data.blocks.find(result => result.title === "all");
              this.games = allGame.games;
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    },
    saveGameInfo(game) {
      localStorage.setItem(`game-${game.id}`, JSON.stringify(game));
    }
  }
};

</script>

<style>
/* 游戏模块start */
/* 广告 */
.ad {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.ad > p {
  font-size: 12px;
  color: #999;
  text-align: center;
}

#miniplay-index-open-container {
  position: relative;
  /* max-width: calc(100% - 40px); */
  max-width: 100%;
  height: 30px;
  margin: 10px auto 0;
  overflow: hidden;
}

#miniplay-index-open-container > div[css-ad] {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

#miniplay-index-open-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  overflow: hidden;
}

/* 游戏列表 */
.container .main-gamebox {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.container .main-gamebox > li {
  margin-top: 10px;
  margin-right: 10px;
  width: calc((100% - 20px) / 3);
}

.container .main-gamebox > li > a {
  width: 100%;
}

.container .main-gamebox > li > a .thumb {
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  border: 3px solid #fff;
  overflow: hidden;
  position: relative;
}

.container .main-gamebox > li > a .thumb > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.container .main-gamebox > li > a > p {
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 12px;
  text-align: center;
}

.container .main-gamebox > li:nth-child(3n) {
  margin-right: 0;
}

@media (orientation: landscape) {
  .container .main-gamebox > li {
    width: calc((100% - 50px) / 6);
  }

  .container .main-gamebox > li:nth-child(3n) {
    margin-right: 10px;
  }

  .container .main-gamebox > li:nth-child(6n) {
    margin-right: 0;
  }
}

@media screen and (min-width: 767px) {
  .container .main-gamebox > li {
    width: calc((100% - 50px) / 6);
  }

  .container .main-gamebox > li:nth-child(3n) {
    margin-right: 10px;
  }

  .container .main-gamebox > li:nth-child(6n) {
    margin-right: 0;
  }
}

/* 分类页面start */
.container > h2 {
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
}

.container .classify-key {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .classify-key > span {
  font-size: 20px;
  margin: 0 12px;
}

.container .classify-key::before {
  content: "";
  width: calc(50% - 12px);
  max-width: 160px;
  height: 4px;
  background: #fff11f;
  border-radius: 4px;
  border: 2px solid #000;
}

.container .classify-key::after {
  content: "";
  width: calc(50% - 12px);
  max-width: 160px;
  height: 4px;
  background: #fff11f;
  border-radius: 4px;
  border: 2px solid #000;
}

/* 分类页面end */

/* 详情页面start */
.container .detail-gamebox {
  display: flex;
  align-items: center;
  margin: 16px 0;
}

.container .detail-gamebox .thumb {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
}

.container .detail-gamebox .thumb > img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.container .detail-gamebox > dl {
  width: calc(100% - 90px);
}

.container .detail-gamebox > dl > dt {
  font-size: 18px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #002042;
}

.container .detail-gamebox > dl > dd {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.container .detail-gamebox > dl > dd > a {
  margin-right: 6px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 12px;
  padding: 3px 8px;
  margin-top: 8px;
}

.container .detail-gamebox > dl .detail-category {
  height: 35px;
  overflow: hidden;
}

.container .detail-gamebox > dl > dd .layui-icon {
  font-size: 12px;
}

.container .detail-gamebox > dl > dd .layui-rate {
  padding: 0;
  padding-bottom: 4px;
}

.container .detail-gamebox > dl > dd > span {
  font-size: 12px;
  color: #666;
}

.container .detail-play {
  width: 100%;
  margin: 20px 0;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff11f;
  border-radius: 30px;
  border: 2px solid #002042;
}

.container .detail-play .iconfont {
  font-size: 20px;
  color: #002042;
  margin-right: 6px;
}

.container .detail-play > span {
  color: #002042;
  font-size: 16px;
}

.container .detail-tags {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}

.container .detail-tags > a {
  display: inline-block;
  color: #666;
  line-height: 16px;
  font-family: Fregular;
  padding: 6px 10px;
  margin: 10px 10px 0 0;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

/* 历史记录页面start */
.container > h3 {
  font-size: 16px;
  color: #002042;
  margin-top: 20px;
}

.container .library-cont .library-no-collect {
  display: none;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
}

.container .library-cont .library-no-collect > img {
  width: 150px;
  height: 150px;
}

.container .library-cont .library-no-collect > p {
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
}

.container .library-cont .library-no-collect > a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background: #fff11f;
  border-radius: 30px;
  margin-top: 30px;
  border: 2px solid #002042;
}

.container .library-cont .library-no-collect > a .iconfont {
  color: #002042;
  font-size: 19px;
  margin-right: 6px;
}

.container .library-cont .library-no-collect > a > span {
  color: #002042;
  font-size: 16px;
}

.container .library-cont .library-no-collect.act {
  display: flex;
}

.container .library-cont .library-col > li {
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  margin-top: 10px;
}

.container .library-cont .library-col > li > a {
  display: flex;
  align-items: center;
}

.container .library-cont .library-col > li > a .thumb {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
}

.container .library-cont .library-col > li > a .thumb > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.container .library-cont .library-col > li > a > dl {
  width: calc(100% - 170px);
}

.container .library-cont .library-col > li > a > dl > dt {
  color: #fff;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.container .library-cont .library-col > li > a > dl > dd {
  display: flex;
  flex-wrap: wrap;
  height: 38px;
  overflow: hidden;
}

.container .library-cont .library-col > li > a > dl > dd > p {
  margin-top: 10px;
  display: inline-block;
  padding: 3px 10px;
  margin-right: 6px;
  background: transparent;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: Fregular;
  color: rgba(255, 255, 255, 0.6);
}

.container .library-cont .library-col > li > a > p {
  width: 60px;
  height: 40px;
  margin-left: 20px;
  background: #417623;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  border: 2px solid #eaff3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .library-cont .library-col > li > a > p .iconfont {
  font-size: 18px;
  color: #fff;
}

/* 历史记录页面end */

.layui-flow-more {
  display: none;
}

.company {
  margin-top: 16px;
  min-height: calc(100% - 170px);
}

.company p {
  font-size: .9em;
  margin-bottom: 8px;
  line-height: 1.6em;
  color: #002042;
  font-weight: 500;
}

.company ul, .company li {
  list-style: square inside;
}
</style>