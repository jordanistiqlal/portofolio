<template>
    <div class="full-row" id="preferred">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">Preferred</h1>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-md-12">
                    <div class="card-group d-flex flex-wrap gap-3">
                        <template v-for="value in preferred"
                                :key="value.Tag">
                            
                            <div class="card tag-card">
                                <div class="row card-body" style="padding-top: 5px; padding-bottom: 5px;padding-left: 0px;padding-right: 0px;">
                                    <div class="col-2 tag-icon">
                                        <i :class="getIconClass(value.Tag)"></i>
                                    </div>
                                    <div class="col-6">
                                        <p>{{ value.Tag }}</p>
                                    </div>
                                    <div class="col-2">
                                        <span class="badge bg-primary">
                                            {{ value.Total }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- not loop -->
                        <div class="card tag-card">
                            <div class="row card-body" style=" padding-top: 5px;  padding-bottom: 5px; padding-left: 0px; padding-right: 0px;">
                                <div class="col-2 tag-icon"><i class="fab fa-github" title="github"></i></div>
                                <div class="col-6"><p>Github</p></div>
                                <div class="col-2"></div>
                            </div>
                        </div>
                        <div class="card tag-card">
                            <div class="row card-body" style=" padding-top: 5px;  padding-bottom: 5px; padding-left: 0px; padding-right: 0px;">
                                <div class="col-2 tag-icon"><i class="fab fa-git-alt" title="github"></i></div>
                                <div class="col-6"><p>Git</p></div>
                                <div class="col-2"></div>
                            </div>
                        </div>
                        <div class="card tag-card">
                            <div class="row card-body" style=" padding-top: 5px;  padding-bottom: 5px; padding-left: 0px; padding-right: 0px;">
                                <div class="col-2 tag-icon"><i class="fab fa-kaggle" title="github"></i></div>
                                <div class="col-6"><p>Kaggle</p></div>
                                <div class="col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tagsjsondata from '../data/tags.json'

export default {
    data() {
        return {
            preferred: []
        }
    },
    mounted(){
        this.fetch()
    },  
    methods:{
        async fetch(){
            await Promise.all([
                this.Preferred()
            ])
        },
        async Preferred(){
            await fetch(this.$api+'/find.tags')
            .then(response => response.json())
            .then(data => {
                this.preferred = data
            }).catch(error => {
                console.log(error);

                this.preferred = tagsjsondata
            })
        },
        getIconClass(tag) {
            const formatted = tag
                .toLowerCase()
                .replace(/\s+/g, '-') 
                .replace(/[0-9]/g, '')
                .replace(/ann|dnn|cnn|lstm|rnn|gan|vae|autoencoder|decisiontree|randomforest|kmeans|fuzzy|svm|liniearregression|gradientboost|naivebayes|markovmodel/g, 'cloud') 
                .replace(/mcdm|similarity|forecasting|moora|arima/g, 'handshake') 

            const supportedIconsBrand = [
                "laravel","react", "vuejs", "docker", "wordpress"
            ]

            const supportedIconssolid = [
                "cloud", "handshake"
            ]

            if (supportedIconsBrand.includes(formatted)) {
                return "fab fa-" + formatted
            }else if (supportedIconssolid.includes(formatted)) {
                return "fas fa-" + formatted
            }else {
                return "fab fa-codepen"
            }
        }
    }
}
</script>

<style scoped>
.tag-card {
    white-space: nowrap;
    border-radius: 10px;
    justify-content: space-between;
    min-width: 160px;
    flex: 0 0 auto;
    width: fit-content;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}
.tag-card:hover {
    transform: translateY(-5px);
}

.tag-icon{
    color: #3498db;
}
</style>