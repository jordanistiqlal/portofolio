<template>
    <div class="full-row" id="my-portofolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-5 text-uppercase">My Portofolio</h1>
                </div>
            </div>
        </div>
        <p v-if="loading">Loading iframe...</p>
        <iframe
            :src="iframeUrl"
            @load="handleIframeLoad"
            title="Embedded Web View"
            width="90%"
            height="600px"
            frameBorder="0"
        />

    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            iframeUrl : 'https://project.keifproject.com'
        }
    },
    methods:{
        handleIframeLoad() {
            this.loading = false;
        }
    }
}
</script>