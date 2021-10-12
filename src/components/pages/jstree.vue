<template>
    <div>
        <div class="row">
            <div class="col-12 col-sm-6">
                <div class="col-12">
                    <card title="Basic tree model">
                        <v-jstree :data="data" :show-checkbox="false" multiple></v-jstree>
                    </card>
                </div>
                <div class="col-12">
                    <card title=" Initial with child">
                        <v-jstree :data="initialdata" :show-checkbox="false" multiple></v-jstree>
                    </card>
                </div>
                <div class="col-12">
                    <card title="Nested child nodes">
                        <v-jstree :data="nestabledata" :show-checkbox="false" multiple></v-jstree>
                    </card>
                </div>
                <div class="col-12">
                    <card title="Initial state with data options">
                        <v-jstree :data="attributedata" :show-checkbox="false" multiple></v-jstree>
                    </card>
                </div>
                <div class="col-12">
                    <card title="Using check box">
                        <v-jstree :data="checkboxdata" :show-checkbox="true" multiple></v-jstree>
                    </card>
                </div>
            </div>
            <div class="col-12 col-sm-6">
                <div class="col-12">
                    <card title="Basic and draggable tree">
                        <v-jstree :data="draggabledata" :draggable="true" :show-checkbox="false" multiple></v-jstree>
                    </card>
                </div>
                <div class="col-12">
                    <card title="Tree with Icons">
                        <v-jstree :data="icondata" :draggable="true" :show-checkbox="false" multiple></v-jstree>
                    </card>
                </div>
                <div class="col-12">
                    <card title="Edit, Create, Delete Nodes">
                        <div class="row">
                            <div class="col-12 col-xl-7">
                                <div class="manipulations">
                                    <div style="width:840px; margin: 0 auto;">
                                        <div class="manupulate_subclass">
                                            <v-jstree :data="editdata" draggable @item-click="itemClick" ></v-jstree>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-5">
                                <h5>Edit Tree Item</h5>
                                <p>click the node for edit</p>
                                <div>
                                    <div class="table-responsive">
                                        <table>
                                            <tr>
                                                <td>
                                                    text
                                                </td>
                                                <td>
                                                    <input v-model="editingItem.text" class="form-control" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    value
                                                </td>
                                                <td>
                                                    <input v-model="editingItem.value" class="form-control" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    icon
                                                </td>
                                                <td>
                                                    <input v-model="editingItem.icon" class="form-control"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    icon
                                                </td>
                                                <td>
                                                    <input v-model="editingItem.icon" class="form-control"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    opened
                                                </td>
                                                <td>
                                                    <input type="checkbox" v-model="editingItem.opened"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    selected
                                                </td>
                                                <td>
                                                    <input type="checkbox" v-model="editingItem.selected" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    disabled
                                                </td>
                                                <td>
                                                    <input type="checkbox" v-model="editingItem.disabled" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <button @click="addChildNode" class="btn btn-primary mt-3">Add child node</button>
                                                    <button @click="removeNode" class="btn btn-primary mt-3">Remove this node</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </card>
                </div>
                <div class="col-12">
                    <card title="Tree with search">
                        <input type="text" @keyup="inputKeyUp" v-model="searchText" class="form-control mb-2" placeholder="Search" />
                        <v-jstree :data="searchdata"  :show-checkbox="false" multiple ref="tree"></v-jstree>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import VJstree from 'vue-jstree'
    export default {
        name: "blank",
        components: {
            VJstree,
            card
        },
        data() {
            return {
                searchText: '',
                editingItem: {},
                editingNode: null,
                data: [
                    {
                        "text": "Root node 1",
                        "children": [
                            {
                                "text": "Child node 1",
                                "selected": true
                            },
                            {
                                "text": "Child node 2",
                            }]
                    },
                ],
                initialdata:[
                    {
                        "text": "Root node 1",
                        "opened":"true",
                        "children": [
                            {
                                "text": "Child node 1",
                            }
                        ]
                    },
                ],
                nestabledata:[
                    {
                        "text": "Root node 1",
                        "opened":"true",
                        "children": [
                            {
                                "text": "Initially Selected",
                                "selected":true,
                            },
                            {
                                "text": "Child node 2",
                            },
                            {
                                "text": "Initially Open",
                                "opened":true,
                                "children":[
                                    {
                                        "text":"Child Node 3.1",
                                    }
                                ]
                            },{
                            "text":"Custom icon class",
                                "icon":"fa"
                            }
                        ],
                    },
                    {
                        "text": "Root node 2",
                        "opened":"true",
                        "children": [
                            {
                                "text": "Child node 1",
                            }
                        ],
                    },
                ],
                attributedata:[
                    {
                        "text":"Root",
                        "opened":"true",
                        "children":[
                            {
                                "text":"Child 1",
                                "disabled":"true"
                            },{
                                "text":"Child 2",
                                "selected":"true"
                            },{
                                "text":"Child 3",
                                "icon":"fa fa-user"
                            }
                        ],
                    }
                ],
                checkboxdata:[
                    {
                        "text": "Root node 1",
                        "opened":"true",
                        "children": [
                            {
                                "text": "Initially Selected",
                                "selected":true,
                            },
                            {
                                "text": "Child node 2",
                            },
                            {
                                "text": "Initially Open",
                                "opened":true,
                                "children":[
                                    {
                                        "text":"Child Node 3.1",
                                    }
                                ]
                            },{
                                "text":"Custom icon class",
                                "icon":"fa"
                            }
                        ],
                    },{
                        "text":"And Wholerow Selection"
                    }
                ],
                draggabledata:[
                    {
                        "text":"Root node 1",
                        "opened":"true",
                        "children":[
                            {
                                "text":"Child node 1",
                                "children":[
                                    {
                                        "text":"Child node 1.1"
                                    },{
                                        "text":"Child node 1.2",
                                        "children":[
                                            {
                                                "text":"Child node 1.2.1"
                                            },{
                                                "text":"Child node 1.2.2"
                                            }
                                        ]
                                    },
                                    {
                                        "text":"Child node 1.3",
                                    }
                                ]
                            },{
                                "text":"Child node 2",
                                "children":[
                                    {
                                        "text":"Child node 2.1",
                                    },{
                                        "text":"Child node 2.2",
                                    }
                                ]
                            },{
                                "text":"Child node 3",
                            },{
                                "text":"Child node 4",
                                "opened":"true",
                                "children":[
                                    {
                                    "text":"Child node 4.1"
                                    },{
                                        "text":"Child node 4.2"
                                    },{
                                        "text":"Child node 4.3"
                                    },{
                                        "text":"Child node 4.4",
                                    }
                                ]
                            }
                        ]
                    }
                ],
                icondata:[
                    {
                        "text":"Root node 1",
                        "icon":"fa fa-file text-primary",
                        "opened":"true",
                        "children":[
                            {
                                "text":"Child node 1",
                                "icon":"fa fa-file text-primary",
                                "children":[
                                    {
                                        "text":"Child node 1.1",
                                        "icon":"fa fa-file text-primary",
                                    },{
                                        "text":"Child node 1.2",
                                        "icon":"fa fa-file text-primary",
                                        "children":[
                                            {
                                                "text":"Child node 1.2.1",
                                                "icon":"fa fa-file text-primary",
                                            },{
                                                "text":"Child node 1.2.2",
                                                "icon":"fa fa-file text-primary",
                                            }
                                        ]
                                    },
                                    {
                                        "text":"Child node 1.3",
                                        "icon":"fa fa-file text-primary",
                                    }
                                ]
                            },{
                                "text":"Child node 2",
                                "icon":"fa fa-file text-primary",
                                "children":[
                                    {
                                        "text":"Child node 2.1",
                                        "icon":"fa fa-file text-primary",
                                    },{
                                        "text":"Child node 2.2",
                                        "icon":"fa fa-file text-primary",
                                    }
                                ]
                            },{
                                "text":"Child node 3",
                                "icon":"fa fa-file text-primary",
                            },{
                                "text":"Child node 4",
                                "icon":"fa fa-file text-primary",
                                "opened":"true",
                                "children":[
                                    {
                                        "text":"Child node 4.1",
                                        "icon":"fa fa-file text-primary",
                                    },{
                                        "text":"Child node 4.2",
                                        "icon":"fa fa-file text-primary",
                                    },{
                                        "text":"Child node 4.3",
                                        "icon":"fa fa-file text-primary",
                                    },{
                                        "text":"Child node 4.4",
                                        "icon":"fa fa-file text-primary",
                                    }
                                ]
                            }
                        ]
                    }
                ],
                editdata:[
                    {
                        "text":"Root node 1",
                        "opened":"true",
                        "children":[
                            {
                                "text":"Child node 1",
                                "children":[
                                    {
                                        "text":"Child node 1.1",
                                    },{
                                        "text":"Child node 1.2",
                                        "children":[
                                            {
                                                "text":"Child node 1.2.1",
                                            },{
                                                "text":"Child node 1.2.2",
                                            }
                                        ]
                                    },
                                    {
                                        "text":"Child node 1.3",
                                    }
                                ]
                            },{
                                "text":"Child node 2",
                                "children":[
                                    {
                                        "text":"Child node 2.1",
                                    },{
                                        "text":"Child node 2.2",
                                    }
                                ]
                            },{
                                "text":"Child node 3",
                            },{
                                "text":"Child node 4",
                                "opened":"true",
                                "children":[
                                    {
                                        "text":"Child node 4.1",
                                    },{
                                        "text":"Child node 4.2",
                                    },{
                                        "text":"Child node 4.3",
                                    },{
                                        "text":"Child node 4.4",
                                    }
                                ]
                            }
                        ]
                    }
                ],
                searchdata:[
                    {
                        "text":"Root node 1",
                        "opened":"true",
                        "children":[
                            {
                                "text":"Child node 1",
                                "children":[
                                    {
                                        "text":"Child node 1.1",
                                    },{
                                        "text":"Child node 1.2",
                                        "children":[
                                            {
                                                "text":"Child node 1.2.1",
                                            },{
                                                "text":"Child node 1.2.2",
                                            }
                                        ]
                                    },
                                    {
                                        "text":"Child node 1.3",
                                    }
                                ]
                            },{
                                "text":"Child node 2",
                                "children":[
                                    {
                                        "text":"Child node 2.1",
                                    },{
                                        "text":"Child node 2.2",
                                    }
                                ]
                            },{
                                "text":"Child node 3",
                            },{
                                "text":"Child node 4",
                                "opened":"true",
                                "children":[
                                    {
                                        "text":"Child node 4.1",
                                    },{
                                        "text":"Child node 4.2",
                                    },{
                                        "text":"Child node 4.3",
                                    },{
                                        "text":"Child node 4.4",
                                    }
                                ]
                            }
                        ]
                    }
                ],
            }
        },
        methods:{
            itemClick (node) {
                this.editingNode = node
                this.editingItem = node.model
                console.log(node.model.text + ' clicked !')
            },
            inputKeyUp: function () {
                var text = this.searchText
                const patt = new RegExp(text);
                this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function (node) {
                    if (text !== '') {
                        const str = node.model.text
                        if (patt.test(str)) {
                            node.$el.querySelector('.tree-anchor').style.color = 'red'
                        } else {
                            node.$el.querySelector('.tree-anchor').style.color = '#000'
                        } // or other operations
                    } else {
                        node.$el.querySelector('.tree-anchor').style.color = '#000'
                    }
                })
            },
            addChildNode: function () {
                if (this.editingItem.id !== undefined) {
                    this.editingItem.addChild({
                        text: "newNode",
                        value: "newNode"
                    })
                }
            },
            removeNode: function () {
                if (this.editingItem.id !== undefined) {
                    var index = this.editingNode.parentItem.indexOf(this.editingItem)
                    this.editingNode.parentItem.splice(index, 1)
                }
            }
        },
        mounted: function () {

        },
        destroyed: function () {

        }
    }
</script>
<style>
    .manipulations{
        overflow-x: scroll;
    }
    .manupulate_subclass{
        width:49%;
        display:inline-block;
        vertical-align: top;
    }
     .manupulate_subclass{
            width:100%;
        }
</style>
