<template>
<div>
    <b-card header="Modals" header-tag="h4" class="bg-primary-card">
        <div class="row">
            <div class="col-lg-12">
                <b-card class="bg-primary-card">
                    <b-btn v-b-modal.modal1 class="mt-3 mb-3">Launch demo modal</b-btn>
                    <b-btn @click="open_modal" class="mt-3 mb-3">Launch modal with ref</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal1" title="Modal" ref="modal1">
                        <h1>modal</h1>
                    </b-modal>
                    <b-modal id="modal21" title="Modal" ref="modal21">
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-12 mt-3">
                <b-card class="bg-info-card">
                    <h4>Stop closing on backdrop click</h4>
                    <b-btn v-b-modal.modal2>Launch demo modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal no-close-on-backdrop id="modal2" title="Modal" ref="modal2" >
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>

            <div class="col-lg-4 mt-3">
                <b-card >
                    <b-btn v-b-modal.modal4>Launch small modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal4" title="Small Modal" size="sm" >
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <b-btn v-b-modal.modal5>Launch Normal modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal5" title="Normal Modal" size="md">
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <b-btn v-b-modal.modal6>Launch Large modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal6" title="Large Modal" size="lg">
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <h4>Background Primary Modal </h4>
                    <b-btn v-b-modal.modal8 >Primary modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal8" title="Priamry Modal"
                             header-bg-variant="primary"
                             header-text-variant="light"
                             footer-bg-variant="primary"
                             footer-text-variant="light"
                             size="md">
                        <h1> Primary modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <h4>Background Info Modal </h4>
                    <b-btn v-b-modal.modal9>Info modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal9" title="Info Modal"
                             header-bg-variant="info"
                             header-text-variant="light"
                             footer-bg-variant="info"
                             footer-text-variant="light">
                        <h1> Info modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <h4>Background Warning Modal </h4>
                    <b-btn v-b-modal.modal10>Warning modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal10" title="Warning Modal"
                             header-bg-variant="warning"
                             header-text-variant="light"
                             footer-bg-variant="warning"
                             footer-text-variant="light">
                        <h1> Warning modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <h4>Background Danger Modal </h4>
                    <b-btn v-b-modal.modal11>Danger Modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal11" title="Danger Modal"
                             header-bg-variant="danger"
                             header-text-variant="light"
                             footer-bg-variant="danger"
                             footer-text-variant="light">
                        <h1>Danger modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <h4>Background Success Modal </h4>
                    <b-btn v-b-modal.modal12>Success Modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal12" title="Success Modal"
                             header-bg-variant="success"
                             header-text-variant="light"
                             footer-bg-variant="success"
                             footer-text-variant="light">
                        <h1> Success modal</h1>
                    </b-modal>
                </b-card>
            </div>
            <div class="col-lg-4 mt-3">
                <b-card >
                    <h4>Background Secondary Modal </h4>
                    <b-btn v-b-modal.modal13>Secondary modal</b-btn>
                    <!-- Modal Component -->
                    <b-modal id="modal13" title="Deafult Modal"
                             header-bg-variant="secondary"
                             header-text-variant="light"
                             footer-bg-variant="secondary"
                             footer-text-variant="light">
                        <h1>modal</h1>
                    </b-modal>
                </b-card>
            </div>
        </div>
    </b-card>
</div>
</template>
<script>
    import Vue from "vue"

    export default {
        name: "modals",
        data() {
            return {
                stop_close: false
            }
        },
        methods: {
            stop(e) {
                if (!this.stop_close) {
                    return e.cancel();
                }
            },
            shown() {
                alert("Modal opened");
            },
            open_modal() {
                console.log(this.$refs);
                this.$refs.modal21.show();
            },
            hidden() {
                alert("Modal Hidden");
            },
            success() {
                alert("OK Clicked");
            },

            cancel() {
                alert("Close Clicked");
            }
        }

    }
</script>
