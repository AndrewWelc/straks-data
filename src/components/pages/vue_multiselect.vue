<template>
    <div class="mini_height">
        <div class="row">
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Basic">
                    <multiselect v-model="value" :options="options" ></multiselect>
                </card>
            </div>
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Options Object">
                    <multiselect v-model="object_value" :options="object_options" track-by="name" label="name"></multiselect>
                </card>
            </div>
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Multi Select">
                    <multiselect v-model="multi_value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :hide-selected="true" placeholder="Pick some"></multiselect>
                </card>
            </div>
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Tagging">
                    <multiselect v-model="tag_value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="object_options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import card from "./card/card.vue"
import Multiselect from 'vue-multiselect';
Vue.component(Multiselect);
export default {
    name: "vue_multiselect",
    components: {
        Multiselect,card
    },
    data() {
        return {
            value: null,
            multi_value: null,
            object_value: null,
            options: ['default', 'Select2', 'Selectize', 'MultiSelect'],
            tag_value: [{
                name: 'Javascript',
                code: 'js'
            }],
            object_options: [{
                name: 'Vue.js',
                code: 'vu'
            }, {
                name: 'Javascript',
                code: 'js'
            }, {
                name: 'Monterail',
                code: 'pl'
            }, {
                name: 'Open Source',
                code: 'os'
            }]
        }
    },
    mounted: function() {

    },
    destroyed: function() {

    },
    methods: {
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.object_options.push(tag)
            this.tag_value.push(tag)
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>