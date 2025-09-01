<template>
    <div class="content-head full-row" id="#">
        <div class="container">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-xl-7 col-md-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-12"></div>

                        <div class="col-lg-6 col-md-12">
                            <div class="post-image">
                                <img src="@/assets/images/00987876.png" 
                                    style="
                                        border-radius: 15px;
                                        -webkit-filter: drop-shadow(10px 10px 10px #202c54);
                                        filter: drop-shadow(10px 10px 10px #202c54);
                                    " 
                                    alt="corporate template"
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-md-12 mt-5" style="color:black;text-align:left;">

                    <h1 class="text-secondary mb-1" style="font-size: 70px;">Jordan Istiqlal Qalbi Adiba</h1>

                    <h5 class="text-secondary mb-3">Backend Developer | Fullstack Developer</h5>

                    <p class="mb-5" style="text-align: justify; color: grey;"> {{ about }}</p>

                    
                    <a :href="email" class="pe-4"><i class="fas fa-mail-bulk fa-2x" title="Email"></i></a>
                    <a href="https://www.linkedin.com/in/jordan-istiqlal-qalbi-adiba-85465b1b0/" target="_blank" class="pe-4"><i class="fab fa-linkedin-in fa-2x" title="LinkedIn" style="color: #0e96f6;"></i></a>
                    <a href="https://github.com/Jordan-18" target="_blank" class="pe-4"><i class="fab fa-github fa-2x" title="Github" style="color: #0e96f6;"></i></a>
                    <a href="https://twitter.com/IstiqlalJordan" target="_blank" class="pe-4 icon-freeze"><i class="fab fa-twitter fa-2x" title="X/Twitter"></i></a>
                    <a href="https://www.facebook.com/jordan.istiqlalqalbi/" target="_blank" class="pe-4 icon-freeze"><i class="fab fa-facebook fa-2x" title="Facebook"></i></a>
                    <a href="https://www.instagram.com/jordanistiqlal/" target="_blank" class="pe-4 icon-freeze"><i class="fab fa-instagram fa-2x" title="Instagram"></i></a>
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
/* .full-row{
    margin-top: 75.962px;
} */
@media screen and (max-width: 768px) {

}
.icon-freeze{
    pointer-events: none;
    cursor: not-allowed;
}
</style>