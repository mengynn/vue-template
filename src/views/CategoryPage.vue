<template>
  <Head/>
  <Category :categoryId="categoryId"/>
  <Foot/>
</template>

<script>
import Head from "@/components/template-1-idcrazypark/Head.vue";
import Category from "@/components/template-1-idcrazypark/Category.vue";
import Foot from "@/components/template-1-idcrazypark/Foot.vue";

export default {
  name: 'CategoryPage',
  props: ['categoryId'],
  components: {Head, Category, Foot},
  watch: {
    categoryId(newCategoryId) {
    }
  }
}
</script>

<style>

</style>