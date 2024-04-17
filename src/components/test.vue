<template>
  <div class="scroll-container" ref="scrollContainer" @scroll="handleScroll">
    <div v-for="item in items" :key="item.id" class="item">{{ item }}</div>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      loading: false
    };
  },
  methods: {
    async loadMoreData() {
      // 模拟异步加载数据
      this.loading = true;
      await this.fetchData(); // 从服务器获取数据的异步操作
      this.loading = false;
    },
    async fetchData() {
      // 这里是实际获取数据的逻辑，比如通过API请求获取数据
      // 示例中使用setTimeout模拟异步操作
      return new Promise(resolve => {
        setTimeout(() => {
          const newData = Array.from({ length: 10 }, (_, i) => `Item ${this.items.length + i + 1}`);
          this.items = [...this.items, ...newData];
          resolve();
        }, 1000); // 模拟1秒延迟
      });
    },
    handleScroll() {
      const scrollContainer = this.$refs.scrollContainer;
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && !this.loading) {
          this.loadMoreData();
        }
      }
    }
  },
  mounted() {
    this.loadMoreData();
  }
};
</script>

<style>
.scroll-container {
  height: 300px;
  overflow-y: auto;
}

.item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.loading {
  text-align: center;
  padding: 10px;
}
</style>
