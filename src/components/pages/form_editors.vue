<template>
<div>
    <div>
        <trumbowyg v-model="content" :config="config" class="form-control"></trumbowyg>
    </div>
</div>
</template>
<script>
import trumbowyg from 'vue-trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.css';
export default {
    name: "form_editors",
    data () {
        return {
            content: '',
            config: {

            }
        }
    },
    components: {
        trumbowyg
    },
    destroyed: function() {

    }
}
</script>
<style>
    @media(max-width:320px){
        .trumbowyg-dropdown{
            left:50px !important;
        }
    }
</style>
