<template>
    <div class="row user-list">
        <div class="col-lg-12">
            <b-card header="Registered Users" header-tag="h4" class="bg-primary-card">
                <div class="table-responsive">
                    <datatable title="" :rows="tableData" :columns="columndata"></datatable>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import datatable from "../plugins/DataTable/DataTable.vue";
    export default {
        name: "users_list",
        components: {
            datatable
        },
        data() {
            return {
                tableData: [],
                columndata: [{
                    label: 'ID',
                    field: 'id',
                    numeric: true,
                    html: false,
                }, {
                    label: 'Name',
                    field: 'name',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Email',
                    field: 'email',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Age',
                    field: 'age',
                    numeric: true,
                    html: false,
                }, {
                    label: 'Status',
                    field: 'status',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Actions',
                    field: 'action',
                    numeric: false,
                    html: true,
                }]
            }
        },
        mounted() {
            this.tableData = [{
                "id": 16023,
                "name": "Kassaundra Shiffman",
                "email": "LStruble@tempor.com",
                "age": 22,
                "status": "Deactivated"
            }, {
                "id": 16024,
                "name": "Helena Zensen",
                "email": "BTrautman@magna.com",
                "age": 33,
                "status": "Deactivated"
            }, {
                "id": 16025,
                "name": "Gautam Nye",
                "email": "SThomad@turpis.ly",
                "age": 35,
                "status": "Deactivated"
            }, {
                "id": 16026,
                "name": "Wichaya Wagner",
                "email": "NLindsay@odio.org",
                "age": 55,
                "status": "Deactivated"
            }, {
                "id": 16027,
                "name": "Dawn Devereaux",
                "email": "NStair@ipsum.net",
                "age": 51,
                "status": "Deactivated"
            }, {
                "id": 16028,
                "name": "Marcus Wray",
                "email": "SPointelin@amet.com",
                "age": 23,
                "status": "Activated"
            }, {
                "id": 16029,
                "name": "Freddy Meng",
                "email": "SEtheridge@non.ly",
                "age": 32,
                "status": "Deactivated"
            }, {
                "id": 16030,
                "name": "Culveretta Gilberto",
                "email": "SGlynn@tempor.com",
                "age": 58,
                "status": "Activated"
            }, {
                "id": 16031,
                "name": "Rogelio Martin",
                "email": "BVollrath@at.io",
                "age": 50,
                "status": "Activated"
            }, {
                "id": 16032,
                "name": "Suwanto Boyes",
                "email": "THeppelmann@molestie.net",
                "age": 36,
                "status": "Activated"
            }, {
                "id": 16033,
                "name": "Felicia Kiab",
                "email": "JDauk@tincidunt.org",
                "age": 27,
                "status": "Deactivated"
            }, {
                "id": 16034,
                "name": "Dwayne Mawyer",
                "email": "AAlagisan@sed.gov",
                "age": 26,
                "status": "Deactivated"
            }, {
                "id": 16035,
                "name": "Braulio Nixon",
                "email": "SDavid@risus.net",
                "age": 36,
                "status": "Deactivated"
            }, {
                "id": 16036,
                "name": "Kantanzia Bottone",
                "email": "JHesters@porttitor.net",
                "age": 33,
                "status": "Activated"
            }, {
                "id": 16037,
                "name": "Geraldine Arnold",
                "email": "DTabor@amet.gov",
                "age": 45,
                "status": "Activated"
            }, {
                "id": 16038,
                "name": "Chun Pfeifer",
                "email": "BAnglin@molestie.io",
                "age": 44,
                "status": "Deactivated"
            }, {
                "id": 16039,
                "name": "Felix Brinkley",
                "email": "CJalowiecki@ac.ly",
                "age": 28,
                "status": "Activated"
            }, {
                "id": 16040,
                "name": "Kay Espinosa",
                "email": "JStafford@sit.net",
                "age": 22,
                "status": "Activated"
            }, {
                "id": 16041,
                "name": "Clayton Hammant",
                "email": "SParham@rutrum.gov",
                "age": 60,
                "status": "Activated"
            }, {
                "id": 16042,
                "name": "Kendra Schuessler",
                "email": "JGray@porta.ly",
                "age": 33,
                "status": "Deactivated"
            }]

            this.tableData.forEach((item, index) => {
                this.$set(item, "action", "<a class='btn btn-info' href='#/edit_user?" + index + "'>Edit</a>");
            });
        }
    }
</script>
<style>
    .user-list .btn:active{
        color: #fff !important;
    }
</style>