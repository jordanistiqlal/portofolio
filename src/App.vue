<script setup>
  import HeaderVue from './components/HeaderVue.vue';
  import FooterVue from './components/FooterVue.vue';

  import contentHead from './contents/contentHead.vue';
  // import contentAbout from './contents/contentAbout.vue';
  // import contentExperience from './contents/contentExperience.vue';
  import contentLanguange from './contents/contentLanguange.vue';
  import contentPreferred from './contents/contentPreferred.vue';
  import contentPortofolio from './contents/contentPortofolio.vue';
  import contentTimeline from './contents/contentTimeline.vue';
</script>
<template>
  <HeaderVue />

  
  <contentHead />
  <!-- <contentAbout /> -->
   <contentTimeline />
  <!-- <contentExperience /> -->
  <contentLanguange />
  <contentPreferred />
  <contentPortofolio />

  <FooterVue />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.img-fluid{
    border-radius: 20px;
}
a .fab{
    color: #6c757d;
}

h1 h2 h3 h4 .text-secondary{
  color: #6c757d !important;
}
.text-uppercase{
  float: left;
}
.content-split{
  border-right: 1px rgb(142, 136, 136) dashed !important;
}

.post-image img{
  height: 100% !important;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .content-split{
    border-right: 0px !important;
    border-bottom: 1px rgb(142, 136, 136) dashed !important;
  }
  .content-head .full-row{
      padding-top: 0px !important;
      margin-top: 0px !important;
  }
}

@media screen and (max-width: 991.98px){
  .full-row {
    padding: 0px 0 !important;
  }
  .post-image img{
    height: 100% !important;
    width: 50% !important;
  }
}
.paragraph{
    text-align: justify;
}
</style>
