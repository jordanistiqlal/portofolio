<template>
    <div class="full-row" id="my-prefered">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">Linguistics and Technology are my preferred</h1>
                </div>
            </div>
        <div class="row">
            <div class="content-split col-md-6">
                <div class="container">
                    <div class="row">
                        <template v-for="(v,i) in language" :key="i">
                            <div class="col-sm-6">
                                <div class="card mb-1">
                                <div class="card-body">
                                    <h5 class="card-title">{{ v.item }}</h5>
                                    
                                    <div class="row" style="font-size: 9pt;">

                                        <template v-for="(j,k) in v.link" :key="k">
                                            <div class="col-md-10">
                                                <a :href="j" style="float: left !important;" target="_blank">{{ truncateText(v.institution[k], 15) }}</a>
                                            </div>
                                            
                                            <div class="col-md-2" style="display: flex; align-items: flex-end;">
                                                <strong>{{ v.grade[k] }}</strong>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div style="float: left; !important">
                    <i class="fab fa-html5" title="html"></i>
                    <i class="fab fa-css3-alt"  title="css"></i>
                    <i class="fab fa-github fa-2x m-2" title="github"></i>
                    <i class="fab fa-docker fa-2x m-2" title="docker"></i>
                    <i class="fab fa-bitbucket fa-2x m-2" title="bitbucket"></i>
                    <i class="fab fa-php fa-2x m-2" title="php"></i>
                    <i class="fab fa-laravel fa-2x m-2" title="laravel"></i>
                    <i class="fab fa-node-js fa-2x m-2" title="node"></i>
                    <i class="fab fa-vuejs fa-2x m-2" title="Vue js"></i>
                    <i class="fab fa-python fa-2x m-2" title="python"></i>
                    <i class="fab fa-git fa-2x m-2" title="git"></i>
                    <i class="fas fa-database fa-2x m-2" title="Mysql"></i>
                    <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/26/000000/external-kotlin-a-cross-platform-statically-typed-general-purpose-programming-language-with-type-inference-logo-regular-tal-revivo.png" class="icon-pro mb-3 m-1" title="kotlin"/>
                    <img src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/26/000000/external-redis-an-in-memory-data-structure-project-implementing-a-distributed-logo-light-tal-revivo.png" class="icon-pro mb-3 m-1" title="redis"/>
                    <i class="fab fa-wordpress fa-2x m-2" title="wordpress"></i>
                    <i class="fab fa-react fa-2x m-2" title="react"></i>
                    <img src="https://img.icons8.com/color/26/000000/nestjs.png" alt="nestjs" title="nestjs" class="icon-pro mb-3 m-1"/>
                    
                </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
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
            })
        }
    }
}
</script>
<style>
/* .full-row{
    margin-top: 150px;
} */
.icon-pro{
    max-width: 28px;
    max-height: 28px;
}
</style>