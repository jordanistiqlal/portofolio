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
                        I am a graduate of S1 Informatics Engineering with an experience in the field of web developer for more than 1 year. A person who is very creative and innovative in finding a solution to a problem so that i can get a good solution. Have good verbal and verbal communication skills. I'm interested in the development of an app, especially in website development, I'm more focused on website development that can simplify a performance so as to simplify a task at work. This makes it easier and faster for workers to complete their work.
                    </p>
                </div>

                <div class="col-md-6"> 
                    <div class="row">
                        <div class="col-md-4">
                            <div class="post-image">
                                <img src="@/assets/images/sq-17.png" style="border-radius: 20px;" height="80" width="80" alt="corporate template">
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
                                    <a href="Mailto:jordanistiqlal18@gmail.com"><i class="fas fa-mail-bulk" title="email"></i></a>
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
        }
    },
    mounted(){
        this.age = this.year - 2000
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