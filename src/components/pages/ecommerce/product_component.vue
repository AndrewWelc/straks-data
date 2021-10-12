<template>
    <div>
        <h6 class="text-secondary mt-5">Cloth's</h6>
        <h3><b>Men's Polo T-shirt</b></h3>
        <span>
            <span class="fa fa-star star_icon text-warning"></span>
            <span class="fa fa-star star_icon text-warning"></span>
            <span class="fa fa-star star_icon text-warning"></span>
            <span class="fa fa-star star_icon text-warning"></span>
            <span class="fa fa-star-half-o star_icon text-warning"></span>
        </span>
        <span class="ml-3"><a href="/#/product_details">Read more reviews</a></span>
        <h5 class="mt-2">Product details</h5>
        <ul class="product_desc">
            <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </li>
            <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </li>
            <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </li>
        </ul>
        <div class="price_size">
            Pirce :
            <del class="price text-success">
                $99.00
            </del>
            <span class="text-primary ml-3 font-weight-bold">$55.00</span>
        </div>
        <div class="row">
            <div class="col-sm-4 col-xl-3" >
                <div class="product_size mt-3">
                    <div><h5>Size </h5></div>
                    <div>
                        <select name="size" id="productSize" class="bg-light form-control">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>xl</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 col-xl-4">
                <div class="product_quantity mt-3">
                    <div><h5>Quantity</h5></div>
                    <div>
                        <select name="quantity" id="productQuantity" class="bg-light form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <div class="offer">
            <p><span class="text-success">Offer 1: </span>Avail 30% chshback on Yes bank credit/ debit card's</p>
            <p><span class="text-success">Offer 2: </span>Avail 20% chshback on purchase of three T-shirts</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:'product_component',
        data(){
            return{

            }
        }

    }
</script>
<style scoped>
    .product_desc li{
        list-style: disc;
    }
    .price_size{
        font-size: 20px;
    }
</style>