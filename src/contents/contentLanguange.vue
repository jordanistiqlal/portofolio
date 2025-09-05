<template>
    <div class="full-row" id="languange">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">Linguistics</h1>
                </div>

                <div class="col-lg-12">

                    <div class="row" v-for="(v,i) in language" :key="i" style="border-bottom: 2px solid #e5e5e5; margin-bottom: 10px;">
                        <div class="col-md-5 text-start">
                            <h4>{{ v.item }}</h4>
                        </div>
                        <div class="col-md-7 text-start">
                            <div v-for="(j,k) in v.link" :key="k">
                                <div class="language-items">
                                    <h6>{{ v.institution[k] }}</h6>
                                    <p><strong>{{ v.grade[k] }}</strong></p>
                                </div>
                                <div class="language-items">
                                    <p>{{ v.date[k] }}</p>
                                    <span>
                                        <a :href="j" target="_blank">
                                            <i class="far fa-file" style="color: #0e96f6;"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import languagejsondata from '../data/language.json'

export default {
    data() {
        return {
            language: []
        }
    },
    mounted(){
        this.fetch()
    },  
    methods:{
        async fetch(){
            await Promise.all([
                this.Language()
            ])
        },
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + "...";
            }
            return text;
        },
        async Language(){
            await fetch(this.$api+'/language')
            .then(response => response.json())
            .then(data => {
                this.language = data
            }).catch(error => {
                console.log(error);
                this.language = languagejsondata
            })
        }
    }
}
</script>

<style scoped>
.language-items{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>