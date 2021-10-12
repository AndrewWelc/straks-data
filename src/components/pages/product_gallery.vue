<template>
    <div>
       <div class="row">
           <div class="col-sm-6">
               <div>
                   <h4>All products</h4>
               </div>
           </div>
           <div class="col-sm-6">
               <div class="view-icons">
                   <div class="row">
                       <div class="col-8 col-sm-7 col-xl-7 ml-auto">
                           <input type="text" v-model="search" class="form-control ml-2" placeholder="Search here">
                       </div>
                       <div class="col-4 col-sm-3 col-xl-2">
                           <i class="ti-layout-grid3-alt m-2" @click="gridType"></i>
                           <i class="ti-layout-list-thumb m-2" @click="listType"></i>
                       </div>
                   </div>
               </div>
           </div>
       </div>
        <div class="products mt-3">
            <div v-for="(element,index) in filteredproduct" :key="index" class="product_box d-inline-block m-2 card" :class="{'fullwidth':isActive==1}">
                <div :class="{'row':isActive==1}">
                <div class="product_image" :class="{'col-sm-3':isActive==1}">
                    <span class="bg-danger text-white pl-2 pr-2 sale-tag">{{element.sale}}</span>
                    <img :src="element.src" alt="product image" class="img-fluid">
                </div>
                <div class="card-body" :class="{'col-sm-9':isActive==1}">
                    <div :class="{'row':isActive==1}">
                    <div class="product_description" :class="{'col-sm-9':isActive==1}">
                        <h3 class="mb-0">{{element.name}}</h3>
                        <p>{{element.description}}</p>
                    </div>
                    <div class="product_details" :class="{'col-sm-3':isActive==1}">
                        <h4 class="mt-2">{{element.price}}</h4>
                        <p class="text-secondary mb-0" >M.R.P: <del> {{element.mrp}}</del></p>
                        <p class="mb-0" :class="{'d-none':isActive==1}">{{element.name}}</p>
                        <p ><span class="fa fa-star star_icon text-warning"></span>
                            <span class="fa fa-star star_icon text-warning"></span>
                            <span class="fa fa-star star_icon text-warning"></span>
                            <span class="fa fa-star star_icon text-warning"></span>
                            <span class="fa fa-star-half-o star_icon text-warning"></span></p>
                        <button class="btn btn-primary">
                            Add to cart
                        </button>
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
        name:'product_gallery',
        data(){
            return{
                search:'',
                isActive:'',
                list:[{
                    src:require('img/ecommerce/product.png'),
                    price: "$800",
                    mrp:"$1000",
                    name:"US-Polo T-shirt",
                    sale: "20%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product2.png'),
                    price: "$450.45",
                    mrp: "$585",
                    name:"US-Polo Red Shirt",
                    sale:"23%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product3.png'),
                    price: "$280",
                    mrp: "$350",
                    name:"Gift box",
                    sale:"20%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product4.png'),
                    price: "$1000",
                    mrp: "1500",
                    name:"Apple Macbook pro",
                    sale:"33%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product5.png'),
                    price: "$1000",
                    mrp: "1500",
                    name:"Vintage classic camera",
                    sale:"33%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product7.png'),
                    price: "$280",
                    mrp: "$350",
                    name:"Gray T-Shirt",
                    sale:"20%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product8.png'),
                    price: "$450.45",
                    mrp: "$585",
                    name:"Stereo headset",
                    sale:"23%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product6.png'),
                    price: "$800",
                    mrp:"$1000",
                    name:"Mobile phone",
                    sale: "20%",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                }]
            }
        },
        methods:{
            listType:function(){
                this.isActive=1
            },
            gridType:function(){
                this.isActive=0
            }
        },
        computed:
            {
                filteredproduct:function()
                {
                    var self=this;
                    return this.list.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
                }
            }
    }
</script>
<style>
    .view-icons{
        font-size: medium;
    }
    .product_box{
        width:23.7%
    }
    .sale-tag{
        margin-top: 10px;
        position: absolute;
    }
    .product_description{
        display: none;
    }
    .sale-tag:after{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: 30px;
        right: auto;
        top: 0px;
        bottom: auto;
        border: 10px solid;
        border-color: #ff6666  transparent transparent transparent;
    }
    .sale-tag:before{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: 30px;
        right: auto;
        top: -1px;
        bottom: auto;
        border: 10px solid;
        border-color:  transparent transparent  #ff6666 transparent;
    }
    .fullwidth{
        width: 100%;
    }
    .fullwidth .product_description{
        display: block;
    }
    @media(min-width: 768px) and (max-width:1024px){
        .product_box{
            width:31.5%;
        }
        .fullwidth {
            width:100%;
        }
    }
    @media(min-width:320px) and (max-width:425px) {
        .product_box{
            width: 96%;
        }
        .fullwidth .card-body{
            padding: 2.5rem;
        }
    }
    @media(min-width: 426px) and (max-width:767px){
        .product_box{
            width:46.5%;
        }
    }

    .boxed .product_box{
        width:23.5%
    }
    @media(min-width:768px) and (min-width:768px){
        .boxed .product_box{
            width:30%
        }
    }
    @media(max-width:425px){
        .boxed .product_box{
            width:100%
        }
    }
</style>