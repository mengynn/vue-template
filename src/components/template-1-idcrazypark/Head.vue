<template>
  <!-- 头部 -->
  <header>
    <div class="container">
      <a class="head-icon head-banner" @click="showClassifyBanner">
        <i class="iconfont icon-nav"></i>
      </a>
      <a class="head-logo" href="index.html">
        <img src="@/assets/template-1-idcrazypark/img/logo.png" alt=""/>
      </a>
      <a class="head-icon head-history" @click="goToHistoryPage">
        <i class="iconfont icon-history"></i>
      </a>
    </div>
  </header>

  <!-- 分类二级导航栏 -->
  <div class="classify-banner" :class="{ 'act': isClassifyBannerVisible }" @click="hideClassifyBanner">
    <div class="classify-banner-box">
      <a class="classify-banner-homes" href="index.html">
        <i class="iconfont icon-home"></i>
        Home
      </a>
      <ul class="classify-specific">
        <li v-for="category in categoryInfo" :key="category.id">
          <router-link :to="{ name: 'CategoryPage', params: { categoryId: category.id }}">{{category.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Head',
  data() {
    return {
      isClassifyBannerVisible: false,
      categoryInfo: []
    };
  },
  mounted() {
    this.loadCategoryInfo();
  },
  methods: {
    // 显示二级导航栏
    showClassifyBanner() {
      this.isClassifyBannerVisible = true;
    },
    // 隐藏二级导航栏
    hideClassifyBanner(event) {
      if (event.target === event.currentTarget) {
        this.isClassifyBannerVisible = false;
      }
    },
    // 加载分类数据
    loadCategoryInfo() {
      axios
          .get("/src/assets/site-data/index.json")
          .then(response => {
            if (response.data.code === "000000") {
              let categoryInfo = response.data.data.blocks.find(result => result.title === "category");
              this.categoryInfo = categoryInfo.categorys;
            }
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    },
    goToHistoryPage() {
      this.$router.push({ name: 'HistoryPage' });
    }
  },
  watch: {
    // 监听路由变化，隐藏分类导航栏
    $route(to, from) {
      console.log(to.path)
      if (to.path !== '/category') {
        this.isClassifyBannerVisible = false;
      }
    }
  },
};
</script>

<style>
@import url('@/assets/template-1-idcrazypark/font/iconfont.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}

html,
body {
  width: 100%;
  height: 100%;
  background: #fff;
  -webkit-text-size-adjust: 100%;
}

body {
  position: relative;
}

ul,
ol {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  text-transform: capitalize;
}

button {
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.main {
  min-height: calc(100% - 210px);
}

.container {
  max-width: 1366px;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
}

input,
textarea {
  font-size: 16px;
}

input[type="submit"] {
  -webkit-appearance: none;
}

div,
i {
  -webkit-tap-highlight-color: transparent;
}

/* 头部start */
header {
  width: 100%;
  background: #1fffc9;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
}

header .container .head-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

header .container .head-icon .iconfont {
  font-size: 16px;
  color: #fff;
}

header .container .head-logo {
  height: 34px;
}

header .container .head-logo > img {
  height: 100%;
}

/* 头部end */

/* 分类二级导航栏start */
.classify-banner {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.classify-banner .classify-banner-box {
  width: 150px;
  height: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  overflow-y: scroll;
}

.classify-banner .classify-banner-box > .classify-banner-homes {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1fffc9;
  border-radius: 17px;
  border: 2px solid #002042;
  padding: 6px;
  color: #002042;
}

.classify-banner .classify-banner-box > .classify-banner-homes .iconfont {
  margin-right: 4px;
  color: #002042;
  font-size: 19px;
}

.classify-banner .classify-banner-box .classify-specific > li {
  width: 100%;
  margin-top: 30px;
}

.classify-banner .classify-banner-box .classify-specific > li > a {
  display: inline-block;
  width: 100%;
  color: #002042;
  text-align: center;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.classify-banner.act {
  display: block;
}

/* 分类二级导航栏end */
</style>