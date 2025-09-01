<template>
    <div class="copyright bg-dark text-light text-center py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <span>© {{ year }} Jordan Istiqlal Qalbi Adiba.</span>
                </div>
            </div>
        </div>
    </div>
    <a href="#" class="bg-primary text-secondary" id="scroll"><i class="fa fa-angle-up text-white"></i></a>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
    mounted(){

    }
}
</script>