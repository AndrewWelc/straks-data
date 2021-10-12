<template>
    <div>
        <div class="row mt-4">
            <div class="col-12 mt-4">
                <b-tabs class="product_desc_tabs">
                    <b-tab title="Product Description" active>
                        <p class="mt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </p>
                    </b-tab>
                    <b-tab title="Additional Informatoin" >
                        <div class="row mt-3">
                            <div class="col-6 col-sm-4">
                                <h6 class="font-weight-bold">Material:</h6>
                            </div>
                            <div class="col-6 col-sm-8">
                                Cutton
                            </div>
                            <div class="col-6 col-sm-4">
                                <h6 class="font-weight-bold">Sleve type:</h6>
                            </div>
                            <div class="col-6 col-sm-8">
                                Half Sleeve
                            </div>
                            <div class="col-6 col-sm-4">
                                <h6 class="font-weight-bold">Neck type:</h6>
                            </div>
                            <div class="col-6 col-sm-8">
                                Polo
                            </div>
                            <div class="col-6 col-sm-4">
                                <h6 class="font-weight-bold">Fit type:</h6>
                            </div>
                            <div class="col-6 col-sm-8">
                                Regular type
                            </div>
                            <div class="col-6 col-sm-4">
                                <h6 class="font-weight-bold">Color:</h6>
                            </div>
                            <div class="col-6 col-sm-8">
                                Black , Brown , white
                            </div>
                            <div class="col-6 col-sm-4">
                                <h6 class="font-weight-bold">Sleve type:</h6>
                            </div>
                            <div class="col-6 col-sm-8">
                                Half Sleeve
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Customer Reviews" >
                        <br>
                        <div class="row">
                            <div class="col-6 col-sm-2 col-xl-1 mb-3">
                                <img src="~img/authors/avatar.jpg" alt="cust1" class="img-fluid rounded-circle">
                            </div>
                            <div class="col-sm-10 col-xl-11">
                                <h5 class="font-weight-bold">Charis Perter</h5>
                                <span class="text-secondary ">20<sup>th</sup> Jan 2018</span>
                                <div class="mt-2 mb-2">
                                    Rating:<span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star-half-o star_icon text-warning"></span>
                                </div>
                                <p >
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 col-sm-2 col-xl-1 mb-3">
                                <img src="~img/authors/avatar1.jpg" alt="cust2" class="img-fluid rounded-circle">
                            </div>
                            <div class="col-sm-10 col-xl-11">
                                <h5 class="font-weight-bold">Lucis flowers</h5>
                                <span class="text-secondary ">23<sup>th</sup> Jan 2018</span>
                                <div class="mt-2 mb-2">
                                    Rating:<span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                    <span class="fa fa-star star_icon text-warning"></span>
                                </div>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
                <hr>
            </div>
            <div class="col-12 mb-5">
                <h4 class="font-weight-bold text-primary">Product Rating</h4>
                <div class="row">
                    <div class="col-sm-2">
                        <div class="d-inline-block text-center pt-3">
                            <h2>4.8 <span class="fa fa-star"></span></h2>
                            <span>2018 ratings</span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class=" ml-3">
                            5 <span class="fa fa-star" ></span>
                            <div class="progress mb-1">
                                <div class="progress-bar d-inline-block" role="progressbar" style="width: 89%;" ></div>
                            </div>
                        </div>
                        <div class=" ml-3">
                            4 <span class="fa fa-star" ></span>
                            <div class="progress mb-1">
                                <div class="progress-bar d-inline-block" role="progressbar" style="width: 5%;" ></div>
                            </div>
                        </div>
                        <div class=" ml-3">
                            3 <span class="fa fa-star" ></span>
                            <div class="progress mb-1">
                                <div class="progress-bar d-inline-block" role="progressbar" style="width: 2%;" ></div>
                            </div>
                        </div>
                        <button class="btn btn-secondary mt-3 ml-3">Rate us here</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'product_descriptoin'
    }
</script>
<style>
   @media(min-width:1440px){
       .product_desc_tabs .nav-link    {
           padding: 0.6rem 1rem;
       }
   }
</style>