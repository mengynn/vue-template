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
    <!-- 历史游戏记录 -->
    <h3>Recently played</h3>
    <div class="library-cont">
      <!-- 无历史数据时显示 -->
      <div class="library-no-collect" :class="{ 'act': !isHistoryVisible }">
        <img src="@/assets/template-1-idcrazypark/img/nodata.png" alt=""/>
        <p>You haven't added any games yet.</p>
        <a href="../index.html">
          <i class="iconfont icon-home"></i>
          <span @click="goToHome">Back Home</span>
        </a>
      </div>
      <!-- 历史记录列表 -->
      <ul class="main-gamebox" id="library-col" :class="{ 'act': isHistoryVisible }">
        <!-- 动态插入 -->
        <li v-for="game in gameHistory" :key="game.id">
          <a :href="game.play_link">
            <div class="thumb">
              <img :src="game.icon" class="lazyLoad">
            </div>
            <p>{{game.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameHistory: JSON.parse(localStorage.getItem("gameHistory")) || [],
      isHistoryVisible: false,
    }
  },
  methods: {
    getGameHistory() {
      if (!(this.gameHistory.length)) {
        console.log('111')
      } else {
        this.gameHistory.forEach((history) => {
        });
      }
    },
    goToHome() {
      this.$router.push({ name: 'Home' });
    }
  },
  mounted() {
    this.getGameHistory()
  }
}
</script>

<style>
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
</style>