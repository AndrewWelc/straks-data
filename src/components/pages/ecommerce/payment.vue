<template>
    <div>
        <div class="card mt-5">
            <div class="card-header">
                <h5 class="mb-0">Payment</h5>
            </div>
            <div class="card-body">
                <div class="check_pin mt-3 mb-3">
                    <label for="cod" class="mb-1">Check COD</label><input type="text" id="cod" class="form-control" v-model="cod" placeholder="Enter pin code">
                </div>
                <p><span class="fa fa-check" :class="{textSuccess: cod.length==6}"></span>
                    Cash on delivery available</p>
                <button class="btn btn-primary btn-block font-weight-bold"> <span class="fa fa-cart-arrow-down"></span> Add to cart</button>
                <button class="btn btn-info btn-block font-weight-bold mt-3 text-white">Buy now</button>
                <hr>
                <form @submit.prevent="">
                    <b-form-checkbox>
                        Notify me When price drops
                    </b-form-checkbox>
                    <button class="btn btn-warning btn-block text-white mb-5">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'payment',
        data(){
            return{
                cod:''
            }
        }
    }
</script>
<style scoped>
    .textSuccess{
        color: #66cc99;
    }
</style>