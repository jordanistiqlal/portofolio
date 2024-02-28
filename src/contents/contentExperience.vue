<template>
    <div class="full-row" id="experience">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">Experience & Education</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12" >
                    <div class="container">
                        <h4 style="display: flex; align-items: flex-start;">Experience Work</h4>
                        <br>
                        <div class="row">
                            <template v-for="(v,i) in experience" :key="i">
                                <div class="col-sm-3">
                                    <div class="card mb-1">
                                    <div class="card-body">
                                        <h5 class="card-secondary" style="font-size: 12pt;">{{v.company}}</h5>
                                        <br>
                                        <div class="row" style="font-size: 9pt;">
                                            <template v-for="(j,k) in v.position" :key="k">
                                                <template v-for="(l,m) in j" :key="m">
                                                    <div class="col-md-7">
                                                        <!-- :href="v.link"  -->
                                                        <strong><a 
                                                            style="float: left;" target="_blank"
                                                        >{{ m }}</a></strong>
                                                    </div>
                                                    <div class="col-md-5" style="font-size: 8pt;">
                                                        <small style="float: left;" class="text-secondary mt-0" target="_blank">{{ l }}</small>
                                                    </div>
                                                </template>
                                            </template>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <hr>

                        <h4 style="display: flex; align-items: flex-start;" class="mt-4">Education</h4>
                        <br>
                        <div class="row">
                            <template v-for="(v,i) in education" :key="i">
                                <div class="col-sm-3">
                                    <div class="card mt-1">
                                    <div class="card-body">
                                        <h5 class="card-secondary" style="font-size: 10pt;">{{v.school}}</h5>
                                        <br>
                                        <div class="row" style="font-size: 9pt;">
                                            <div class="col-md-7">
                                                <strong><a style="float: left;" target="_blank">{{ v.prodi }}</a></strong>
                                            </div>
                                            <div class="col-md-5">
                                                <small style="float: left;" class="text-secondary mt-0" target="_blank">{{ v.date }}</small>
                                            </div>
                                            <div class="col-md-12">
                                                <small style="float: left;" class="text-secondary mt-0" target="_blank">{{ v.grade }}</small>
                                            </div>
                                            <div class="col-md-12">
                                                <small style="float: left;" class="text-secondary mt-0" target="_blank">{{ v.degree }}</small>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </template>
                        </div>
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
            experience : [],
            education : []
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        async fetch(){
            await Promise.all([
                this.Experience(),
                this.Education()
            ])
        },
        async Experience() {
            await fetch(this.$api+'/experience')
            .then(response => response.json())
            .then(data => {
                this.experience = data
            }).catch(error => {
                console.log(error);
            })
        },
        async Education() {
            await fetch(this.$api+'/education')
            .then(response => response.json())
            .then(data => {
                this.education = data
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
<style>
.card{
    border-radius: 10px;
}
</style>