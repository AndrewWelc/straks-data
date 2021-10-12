<template>
<div>
    <!--main content-->
    <div class="row">
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header bg-primary">
                    <h3 class="card-title text-white">
                        Card Primary
                    </h3>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header  bg-success">
                    <h3 class="card-title text-white">
                        Card Success
                    </h3>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header bg-warning">
                    <h3 class="card-title text-white">
                        Card Warning
                    </h3>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header bg-danger">
                    <h3 class="card-title text-white">
                        Card Danger
                    </h3>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header bg-info text-white">
                    <h3 class="card-title">Card Info</h3>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Card Default
                    </h3>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='ti-layers'></i> Tabbed card">
                <b-tabs>
                    <b-tab title="Tab 1" active>
                        <br>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            When an unknown printer took a galley of type and scrambled it to make a
                            type specimenbook.
                        </p>
                        <p>It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and software like Aldus PageMaker.
                        </p>
                    </b-tab>
                    <b-tab title="Tab 2" >
                        <br>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            When an unknown printer took a galley of type and scrambled it to make a
                            type specimenbook.
                        </p>
                        <p>It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and software like Aldus PageMaker.
                        </p>
                    </b-tab>
                </b-tabs>
            </card>
        </div>
        <div class="col-md-6">
            <card title="<i class='ti-menu'></i> Progress Bars">
                <div class="box-body">
                    <p>Default</p>
                    <b-progress :value="25" :max="100" class="mb-3"></b-progress>
                    <p>Striped</p>
                    <b-progress :value="50" variant="success" :striped="true" class="mb-2"></b-progress>
                    <p>Active</p>
                    <b-progress :value="75" variant="danger" :animated="true" class="mb-3"></b-progress>

                </div>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='ti-alert'></i> Alerts">
                <div class="alert alert-success">
                    <p class="mt-1 mb-1">
                        Well done! You are reading a default Alert message.
                    </p>
                </div>
                <div class="alert alert-danger">
                    <strong>Oh! You can</strong>
                    <a href="#" class="alert-link">
                        Redirect to me
                    </a> clicking the link on the Alert.
                </div>
                <b-alert show dismissible variant="primary">
                    <strong>Heads up!</strong> You are looking at a Dismissable Alert.
                </b-alert>
                <b-alert show dismissible variant="warning">
                    Hey! You are looking at Dismissable Alert with animation.
                </b-alert>
            </card>
        </div>

        <div class="col-md-6">
            <card title=" <i class='ti-notepad'></i> Notes">
                <div class="alert-message alert-message-success">
                    <h4>
                        Alert Message Success
                    </h4>
                    <p class="fnt_size">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s.
                        <strong>
                            strong message
                        </strong> .
                    </p>
                </div>
                <div class="alert-message alert-message-default">
                    <h4>
                        Alert Message Default
                    </h4>
                    <p class="fnt_size">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s.
                        <strong>
                            strong message
                        </strong> .
                    </p>
                </div>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='ti-settings'></i> Typography Heading">
                <div class="box-body text-center">
                    <h1>
                        h1. Bootstrap heading
                    </h1>
                    <h2>
                        h2. Bootstrap heading
                    </h2>
                    <h3>
                        h3. Bootstrap heading
                    </h3>
                    <h4>
                        h4. Bootstrap heading
                    </h4>
                    <h5>
                        h5. Bootstrap heading
                    </h5>
                    <h6>
                        h6. Bootstrap heading
                    </h6>
                </div>
            </card>
        </div>
        <div class="col-md-6">
            <card title=" <i class='ti-menu'></i> Horizontal Description">
                <div class="box-body">
                    <dl class="row">
                        <dt class="col-4 text-right">
                            Description lists
                        </dt>
                        <dd class="col-8">
                            A description list is perfect for defining terms.
                        </dd>
                        <dt class="col-4 text-right">Question</dt>
                        <dd class="col-8">
                            Vestibulum id ligula porta felis euismod semper eget lacinia odio.
                        </dd>
                        <dt class="col-4 text-right">
                            Progress bar
                        </dt>
                        <dd class="col-8">
                            Etiam porta sem malesuada magna mollis euismod.
                        </dd>
                        <dt class="col-4 text-right">Answer</dt>
                        <dd class="col-8">
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo
                            sit amet risus.
                        </dd>
                        <dt class="col-4 text-right">
                            Description lists
                        </dt>
                        <dd class="col-8">
                            A description list is perfect for defining terms.
                        </dd>
                        <dt class="col-4 text-right">Question</dt>
                        <dd class="col-8">
                            Vestibulum id ligula porta felis euismod semper.
                        </dd>
                        <dt class="col-4 text-right">Answer</dt>
                        <dd class="col-8">
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, justo
                            sit amet risus.
                        </dd>
                    </dl>
                </div>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <card title="<i class='ti-view-list-alt'></i> Unstyled List">
                <div class="box-body">
                    <ul class="list-unstyled">
                        <li>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            Consectetur adipiscing elit
                        </li>
                        <li>
                            Integer molestie lorem at massa
                        </li>
                        <li>
                            Facilisis in pretium nisl aliquet
                        </li>
                        <li>
                            Nulla volutpat aliquam velit
                            <ul>
                                <li>
                                    Phasellus iaculis neque
                                </li>
                                <li>
                                    Purus sodales ultricies
                                </li>
                                <li>
                                    Vestibulum laoreet porttitor sem
                                </li>
                                <li>
                                    Ac tristique libero volutpat at
                                </li>
                            </ul>
                        </li>
                        <li>
                            Faucibus porta lacus fringilla vel
                        </li>
                        <li>
                            Aenean sit amet erat nunc
                        </li>
                        <li>
                            Eget porttitor lorem
                        </li>
                    </ul>
                </div>
            </card>
        </div>
        <div class="col-md-4">
            <card title="<i class='ti-list'></i> Unordered List">
                <div class="box-body">
                    <ul class="styled-ul">
                        <li>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            Consectetur adipiscing elit
                        </li>
                        <li>
                            Integer molestie lorem at massa
                        </li>
                        <li>
                            Facilisis in pretium nisl aliquet
                        </li>
                        <li>
                            Nulla volutpat aliquam velit
                            <ul>
                                <li>
                                    Phasellus iaculis neque
                                </li>
                                <li>
                                    Purus sodales ultricies
                                </li>
                                <li>
                                    Vestibulum laoreet porttitor sem
                                </li>
                                <li>
                                    Ac tristique libero volutpat at
                                </li>
                            </ul>
                        </li>
                        <li>
                            Faucibus porta lacus fringilla vel
                        </li>
                        <li>
                            Aenean sit amet erat nunc
                        </li>
                        <li>
                            Eget porttitor lorem
                        </li>
                    </ul>
                </div>
            </card>
        </div>
        <div class="col-md-4">
            <card title=" <i class='ti-list-ol'></i> Ordered Lists">
                <div class="box-body">
                    <ol>
                        <li>
                            Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            Consectetur adipiscing elit
                        </li>
                        <li>
                            Integer molestie lorem at massa
                        </li>
                        <li>
                            Facilisis in pretium nisl aliquet
                        </li>
                        <li>
                            Nulla volutpat aliquam velit
                            <ol>
                                <li>
                                    Phasellus iaculis neque
                                </li>
                                <li>
                                    Purus sodales ultricies
                                </li>
                                <li>
                                    Vestibulum laoreet porttitor sem
                                </li>
                                <li>
                                    Ac tristique libero volutpat at
                                </li>
                            </ol>
                        </li>
                        <li>
                            Faucibus porta lacus fringilla vel
                        </li>
                        <li>
                            Aenean sit amet erat nunc
                        </li>
                        <li>
                            Eget porttitor lorem
                        </li>
                    </ol>
                </div>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='ti-angle-double-right'></i> Breadcrumbs">
                <div class="bs-example">
                    <b-breadcrumb :items="items"/>
                    <ul class="breadcrumb breadcrumb1 brdr_mrg">
                        <li class="next1">
                            <a href="#">Dashboard</a>
                        </li>
                        <li class="next1">
                            <a href="#">Charts</a>
                        </li>
                        <li>
                            Flot Charts
                        </li>
                    </ul>
                    <ul class="breadcrumb breadcrumb2 brdr_mrg" style="margin-bottom: 20px;">
                        <li class="next2">
                            <a href="#">Dashboard</a>
                        </li>
                        <li class="next2">
                            <a href="#">Tables</a>
                        </li>
                        <li>
                            Data Tables
                        </li>
                    </ul>
                    <ul class="breadcrumb breadcrumb3 brdr_mrg" style="margin-bottom: 15px;">
                        <li class="next">
                            <a href="#">Dashboard</a>
                        </li>
                        <li class="next1">
                            <a href="#">Forms</a>
                        </li>
                        <li>
                            Form Elements
                        </li>
                    </ul>
                </div>
            </card>
        </div>
    </div>
    <!--main content ends-->
</div>
</template>
<script>
    import card from "./card/card.vue"
export default {
    name: "general_components",
    components:{
        card
    },
    data () {
        return {
            items: [{
                text: 'Dashboard',
                href: '#'
            }, {
                text: 'UI Features',
                href: '#'
            }, {
                text: 'General Components',
                active: true
            }]
        }
    },
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/alertmessage.css" scoped></style>
