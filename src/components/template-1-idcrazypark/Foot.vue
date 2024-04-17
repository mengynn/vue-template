<template>
  <!-- 底部 -->
  <footer>
    <img src="@/assets/template-1-idcrazypark/img/logo.png" alt=""/>
    <nav>
      <a href="./pages/privacy.html">Privacy</a>
    </nav>
    <p>Copyright © 2024 &nbsp; All rights Reserved.</p>
  </footer>
</template>

<script>

</script>

<style>
/* 底部start */
footer {
  //position: fixed;
  //bottom: 0;
  //left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(@/assets/template-1-idcrazypark/img/foot.png);
  padding: 20px 0;
  margin-top: 20px;
}

footer > img {
  height: 34px;
}

footer > nav {
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.6);
}

footer > nav > a {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 10px;
  font-family: Fmedium;
}

footer > p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-family: Fmedium;
}

/* 底部end */
</style>