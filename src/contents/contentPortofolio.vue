<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import 'swiper/css/grid' 
    import { Navigation, Pagination, Grid } from 'swiper/modules'


</script>


<template>
    <div class="full-row" id="my-portofolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">
                        My Portofolio 
                        <span class="text-primary">{{ portofolios.length }}</span>
                        <a href="" target="_blank">
                            <i class="fas fa-link" style="margin: 10px; font-size: 18px;"></i>
                        </a>
                    </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <swiper
                  :modules="[Navigation, Pagination, Grid]"
                  navigation
                  pagination
                  @load="loading"
                  class="mySwiper "
                  :slides-per-view="3"
                  :space-between="20"
                  :slides-offset-before="40"
                  :slides-offset-after="40"
                  :grid="{rows: 2, fill: 'row'}"
              >
                  <swiper-slide v-for="(portofolio, index) in portofolios" :key="index">
                      <div class="card">
                        <a :href="portofolio.link" target="_blank" class="card-link">
                            <img class="card-img-top fixed-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">{{ portofolio.app }}</h6>
                            </div>
                        </a>
                      </div>
                  </swiper-slide>
              </swiper>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            portofolios : [],
            projects_link: process.env.VUE_APP_PROJECTS_LINK
        }
    },
    mounted() {
        this.fetch()
        console.log(this.projects_link);
        
    },
    methods:{
        handleIframeLoad() {
            this.loading = false;
        },
        async fetch(){
            await Promise.all([
                this.Portofolio()
            ])
        },

        async Portofolio(){
            await fetch(this.$api)
            .then(response => response.json())
            .then(data => {
                this.portofolios = data
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
.mySwiper {
  /* width: fit-content; */
  width: 100%;
  height: fit-content;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.mySwiper .swiper-pagination {
  bottom: -5px; 
  text-align: center;
}

.mySwiper .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: #ccc; 
  opacity: 1;
  border-radius: 50%;
  margin: 0 4px;
  transition: all 0.3s ease;
}

.mySwiper .swiper-pagination-bullet-active {
  background: #007bff;
  width: 16px; 
  height: 16px;
}

.fixed-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-link{
    width: 100% !important;
    object-fit: cover !important;
    text-decoration: none !important;
}

</style>