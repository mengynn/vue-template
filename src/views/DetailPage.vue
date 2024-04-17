<template>
  <Head/>
  <Detail :gameId="gameId" />
  <Foot/>
</template>

<script>
import Head from "@/components/template-1-idcrazypark/Head.vue";
import Detail from "@/components/template-1-idcrazypark/Detail.vue";
import Foot from "@/components/template-1-idcrazypark/Foot.vue";
export default {
  name: 'DetailPage',
  props: ['gameId'],
  components: {Head, Detail, Foot},
}
</script>
