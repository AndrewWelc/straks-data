<template>
    <div class="listjs">
        <!--list.js-->
        <card title="<i class='ti-menu'></i> Add, Edit, Remove operations">
            <div id="contacts" class="table-responsive">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th class="sort" data-sort="name">Name</th>
                        <th class="sort" data-sort="age">Age</th>
                        <th class="sort" data-sort="city">City</th>
                        <th colspan="2">
                            <input type="text" class="search form-control" placeholder="Search contact" />
                        </th>
                    </tr>
                    </thead>
                    <tbody class="list">
                    <tr>
                        <td class="id" style="display:none;">1</td>
                        <td class="name">Jonny</td>
                        <td class="age">27</td>
                        <td class="city">Stockholm</td>
                        <td class="edit"><button class="edit-item-btn btn btn-info">Edit</button></td>
                        <td class="remove"><button class="remove-item-btn btn btn-danger">Remove</button></td>
                    </tr>
                    <tr>
                        <td class="id" style="display:none;">2</td>
                        <td class="name">Jonas</td>
                        <td class="age">-132</td>
                        <td class="city">Berlin</td>
                        <td class="edit"><button class="edit-item-btn btn btn-info">Edit</button></td>
                        <td class="remove"><button class="remove-item-btn btn btn-danger">Remove</button></td>
                    </tr>
                    <tr>
                        <td class="id" style="display:none;">3</td>
                        <td class="name">Gustaf</td>
                        <td class="age">-23</td>
                        <td class="city">Sundsvall</td>
                        <td class="edit"><button class="edit-item-btn btn btn-info">Edit</button></td>
                        <td class="remove"><button class="remove-item-btn btn btn-danger">Remove</button></td>
                    </tr>
                    <tr>
                        <td class="id" style="display:none;">4</td>
                        <td class="name">Fredrik</td>
                        <td class="age">26</td>
                        <td class="city">Goteborg</td>
                        <td class="edit"><button class="edit-item-btn btn btn-info">Edit</button></td>
                        <td class="remove"><button class="remove-item-btn btn btn-danger">Remove</button></td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <td class="name">
                        <input type="hidden" id="id-field" />
                        <input type="text" id="name-field" placeholder="Name" class="form-control"/>
                    </td>
                    <td class="age">
                        <input type="text" id="age-field" placeholder="Age" class="form-control"/>
                    </td>
                    <td class="city">
                        <input type="text" id="city-field" placeholder="City" class="form-control"/>
                    </td>
                    <td class="add">
                        <button id="add-btn" class="btn btn-primary">Save</button>
                        <button id="edit-btn" class="btn btn-info">Edit</button>
                    </td>
                </table>

                <p>This is just a simple example showing how to use <code>add()</code>, <code>values()</code> and <code>remove()</code>. The example have bugs (not List.js (I hope ;)) so I do not recommend copy-paste programming.</p>
            </div>
        </card>
        <!--list.js ends-->

        <div class="row">
            <div class="col-sm-12">
                <!--list.js fuzzy search-->
                <card title="<i class='ti-book'></i> Fuzzy search">
                    <div id="test-list">
                        <input type="text" class="fuzzy-search form-control" placeholder="Search any article"/>
                        <div class="list row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-header bg-primary text-white">
                                        <h5>
                                            <span class="name">Clear</span>
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <p>Clear – Bootstrap + VueJS Admin Template is a bootstrap based admin template for professionals who are looking for clear and clean admin template.</p>
                                        <a href="#/listjs" class="float-right text-primary">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-header bg-success text-white">
                                        <h5>
                                            <span class="name">Vuejs-admin</span>
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <p>We present VueJS Laravel Admin Template for ThemeForest Community
                                            Embracing all latest technogies, its built with Vuejs2, Laravel 5.4 and Bootstrap 4.
                                            Whats more! We added almost every component you will ever need when developing a VueJS based admin template….so what are you waiting for? Simply download and starting bootstrapping your next big dashboard.
                                        </p>
                                        <a href="#/listjs" class="float-right text-primary">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-header bg-warning text-white">
                                        <h5>
                                            <span class="name">Josh</span>
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <p>Josh is a user friendly laravel admin template comes woth the GUI CRUD builder. The template is built with HTML and CSS, Bootstrap and Laravel versions. It also comes with the authentication by default. The template has every component required for making backend applocation beautiful. It has many laravel examples which are explained below.
                                        </p>
                                        <a href="#/listjs" class="float-right text-primary">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-header bg-secondary text-white">
                                        <h5>
                                            <span class="name">LCRM</span>
                                        </h5>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            LCRM is a next generation CRM web application packed with lot of features. All new CRM web application developed by Lorvent as Lorvent Customer Relationship Management (LCRM).
                                        </p>
                                        <a href="#/listjs" class="float-right text-primary">Read more...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
                <!--end of fuzzy search-->
            </div>


            <div class="col-sm-6">
                <!-- attribute custom example-->
                <card title="<i class='ti-list'></i> Data attributes + custom">
                    <div id="users">
                        <input class="search form-control d-inline-block" placeholder="Search" />
                        <button class="sort btn btn-primary mt-3" data-sort="name">
                            Sort by name
                        </button>
                        <ul class="list">
                            <li data-id="1" class="mb-3 mt-3">
                                <div class="d-inline-block">
                                    <img class="image rounded-circle" src="../../assets/img/authors/avatar1.jpg" alt="user">
                                </div>
                                <div class="d-inline-block pl-2">
                                    <a href="https://twitter.com/javve" class="link name">Jonny Stromberg</a>
                                    <p class="born timestamp" data-timestamp="12345">1986</p>
                                </div>
                            </li>
                            <li data-id="2" class="mb-3 mt-3">
                                <div class="d-inline-block">
                                    <img class="image rounded-circle" src="../../assets/img/authors/avatar2.jpg" alt="user">
                                </div>
                                <div class="d-inline-block pl-2">
                                    <a href="https://twitter.com/arnklint" class="link name">Jonas Arnklint</a>
                                    <p class="born timestamp" data-timestamp="23456">1985</p>
                                </div>
                            </li>
                            <li data-id="3" class="mb-3 mt-3">
                                <div class="d-inline-block">
                                    <img class="image rounded-circle" src="../../assets/img/authors/avatar3.jpg" alt="user">
                                </div>
                                <div class="d-inline-block pl-2">
                                    <a href="https://twitter.com/martinaelm" class="link name">Martina Elm</a>
                                    <p class="born timestamp" data-timestamp="34567">1986</p>
                                </div>
                            </li>
                            <li data-id="4" class="mb-3 mt-3">
                                <div class="d-inline-block">
                                    <img class="image rounded-circle" src="../../assets/img/authors/avatar4.jpg" alt="user">
                                </div>
                                <div class="d-inline-block pl-2">
                                    <a href="https://twitter.com/GLindqvist" class="link name">Gustaf Lindqvist</a>
                                    <p class="born timestamp" data-timestamp="45678">1983</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </card>
                <!--attribute custom example ends here-->
            </div>
            <div class="col-sm-6">
                <!--list with pagination-->
                <card title="<i class='ti-list'></i> list with Pagination" class="paginationcard">
                    <div id="test-list-two">
                        <input type="text" class="search form-control mb-3" />
                        <ul class="list">
                            <li><p class="name">Guybrush Threepwood</p></li>
                            <li><p class="name">Elaine Marley</p></li>
                            <li><p class="name">LeChuck</p></li>
                            <li><p class="name">Stan</p></li>
                            <li><p class="name">Voodoo Lady</p></li>
                            <li><p class="name">Herman Toothrot</p></li>
                            <li><p class="name">Meathook</p></li>
                            <li><p class="name">Carla</p></li>
                            <li><p class="name">Otis</p></li>
                            <li><p class="name">Rapp Scallion</p></li>
                            <li><p class="name">Rum Rogers Sr.</p></li>
                            <li><p class="name">Men of Low Moral Fiber</p></li>
                            <li><p class="name">Murray</p></li>
                            <li><p class="name">Cannibals</p></li>
                        </ul>
                        <ul class="pagination"></ul>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>

    //    let List=require('list.js');
    import List from 'list.js'
    import card from './card/card.vue'
    export default {
        name:'blank',
        components:{
            card
        },
        mounted:function(){
            "use strict"
            var options = {
                valueNames: [ 'id', 'name', 'age', 'city' ]
            };

// Init list
            var contactList = new List('contacts', options);

            var idField = $('#id-field'),
                nameField = $('#name-field'),
                ageField = $('#age-field'),
                cityField = $('#city-field'),
                addBtn = $('#add-btn'),
                editBtn = $('#edit-btn').hide(),
                removeBtns = $('.remove-item-btn'),
                editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
            refreshCallbacks();

            addBtn.click(function() {
                contactList.add({
                    id: Math.floor(Math.random()*110000),
                    name: nameField.val(),
                    age: ageField.val(),
                    city: cityField.val()
                });
                clearFields();
                refreshCallbacks();
            });

            editBtn.click(function() {
                var item = contactList.get('id', idField.val())[0];
                item.values({
                    id:idField.val(),
                    name: nameField.val(),
                    age: ageField.val(),
                    city: cityField.val()
                });
                clearFields();
                editBtn.hide();
                addBtn.show();
            });

            function refreshCallbacks() {
                // Needed to add new buttons to jQuery-extended object
                removeBtns = $(removeBtns.selector);
                editBtns = $(editBtns.selector);

                removeBtns.click(function() {
                    var itemId = $(this).closest('tr').find('.id').text();
                    contactList.remove('id', itemId);
                });

                editBtns.click(function() {
                    var itemId = $(this).closest('tr').find('.id').text();
                    var itemValues = contactList.get('id', itemId)[0].values();
                    idField.val(itemValues.id);
                    nameField.val(itemValues.name);
                    ageField.val(itemValues.age);
                    cityField.val(itemValues.city);

                    editBtn.show();
                    addBtn.hide();
                });
            }

            function clearFields() {
                nameField.val('');
                ageField.val('');
                cityField.val('');
            }


//============ attribute custom example

            var attributeoptions = {
                valueNames: [
                    'name',
                    'born',
                    { data: ['id'] },
                    { attr: 'src', name: 'image' },
                    { attr: 'href', name: 'link' },
                    { attr: 'data-timestamp', name: 'timestamp' }
                ]
            };
            var userList = new List('users', attributeoptions);
//============ attribute custom example ends here========

//============ fuzzy search start========
            var monkeyList = new List('test-list', {
                valueNames: ['name']
            });

//============ fuzzy search ends ====

//            pagination
            var monkeyList = new List('test-list-two', {
                valueNames: ['name'],
                page: 5,
                pagination: true
            });
//            pagination ends here
        }
    }
</script>

<style>
    .listjs table td, table th {
        padding:5px;
    }
    .listjs .pagination li {
        display:inline-block;
        padding:5px 10px;
        border: 1px solid #eee;
        background-color: #f7f7f7;
    }
    .listjs .list .article{
        width: 24.5%;
        display: inline-block;
    }
    .listjs .paginationcard .list{
        padding-left: 0;
    }
    .listjs .paginationcard .list li{
        background-color: #f7f7f7;
        border: 1px solid #e7e7e7;
        display: flex;
        margin-top: 6px;
        margin-bottom: 6px;
        padding: 0.5rem;
    }
    .listjs .paginationcard .list li .name{
        margin-bottom: 3px;
    }
    .listjs #users .image{
        width: 75px;
        height: 75px;
    }
    .listjs #users .list{
        padding-left: 0;
    }
    .listjs #users .list li{
        border-bottom-left-radius: 33px;
        border-top-left-radius: 33px;
    }
    .listjs #users .list li{
        background-color: #f7f7f7;
    }
    .listjs .edit-item-btn:active,.listjs #edit-btn:active{
        color: #fff !important;
    }
    .listjs #test-list-two .pagination .active{
        background-color: #6699cc;
    }
    .listjs #test-list-two .pagination .active a{
        color: #fff;
    }
</style>

