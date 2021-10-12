<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <card title="<i class='fa fa-fw ti-dropbox'></i> Dropify">
                    <div class="p-30">
                        <div class="row">
                            <div class="col-md-6">
                                <h5>Dropify Basic</h5>
                                <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                            </div>
                            <div class="col-md-6">
                                <h5>AllowedFileExtensions ( PNG)</h5>
                                <vue-dropzone ref="myVueDropzone" id="dropzone4" :options="dropzoneFiletype" ></vue-dropzone>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h5>Max File Size</h5>
                                <vue-dropzone ref="myVueDropzone" id="dropzone2" :options="dropzoneMaxSize"></vue-dropzone>
                            </div>
                            <div class="col-md-6">
                                <h5>Max Number of Files</h5>
                                <vue-dropzone ref="myVueDropzone" id="dropzone3" :options="dropzoneMaxFiles" ></vue-dropzone>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
export default {
    name: "dropify",
    components: {
        card,
        vueDropzone: vue2Dropzone
    },
    data: function () {
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 100,
                thumbnailHeight:100,
                headers: {"My-Awesome-Header": "header value"}
            },
            dropzoneMaxSize: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 100,
                thumbnailHeight:100,
                maxFilesize:0.1,
                headers: {"My-Awesome-Header": "header value"}
            },
            dropzoneMaxFiles:{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 100,
                thumbnailHeight:100,
                maxFiles:2,
                acceptedFiles:'.png',
                headers: {"My-Awesome-Header": "header value"}
            },
            dropzoneFiletype:{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 100,
                thumbnailHeight:100,
                acceptedFiles:'.png',
                headers: {"My-Awesome-Header": "header value"}
            },
        }
    },
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/custom_css/dropify.css"></style>
