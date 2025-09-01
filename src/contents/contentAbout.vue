<template>
    <div class="full-row" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">About Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="content-split col-md-6">
                    <p className="paragraph text-secondary mb-5">
                       {{ about }}
                    </p>
                </div>

                <div class="col-md-6"> 
                    <div class="row">
                        <div class="col-md-4">
                            <div class="post-image">
                                <!-- <img src="@/assets/images/sq-17.png" style="border-radius: 20px;" height="80" width="80" alt="corporate template"> -->
                            </div>
                        </div>
                        <div class="col-md-8">

                            <div class="row g-3 align-items-center">
                                <div class="col-2">
                                    <label class="col-form-label">Fullname</label>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-9">
                                    <p>Jordan Istiqlal Qalbi Adiba</p>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-2">
                                    <label class="col-form-label">Age</label>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-9">
                                    <p>{{ age }}</p>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-2">
                                    <label class="col-form-label">Email</label>
                                </div>
                                <div class="col-1">
                                    <p>:</p>
                                </div>
                                <div class="col-9">
                                    <a :href="email"><i class="fas fa-mail-bulk" title="email"></i></a>
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
export default {
    data() {
        return {
            year : new Date().getFullYear(),
            age : 0,
            about : '',
            email : '',
        }
    },
    mounted(){
        this.fetch()
        this.age = this.year - 2000
    },
    methods: {
        async fetch(){
            await Promise.all([
                this.About(),
            ])
        },
        async About(){
            await fetch(this.$api+'/about')
            .then(response => response.json())
            .then(data => {
                this.about = data[0].about
                this.email = 'mailto:' + data[0].email
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
.col-form-label{
    float: left;
}
.col-9 p{
    float: left;
}
.col-9 a{
    float: left;
}
</style>