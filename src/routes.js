const routes = [{
    path: '/',
        component: resolve => require(['./default.vue'], resolve),
    children: [{
        path: '',
        component: resolve => require(['./components/pages/index.vue'], resolve),
        meta: {
            title: 'STRAKS Data',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Data Dashboard',
                href: '/',
            }]
        }
    }, {
        path: 'index2',
        component: resolve => require(['./components/pages/index2.vue'], resolve),
        meta: {
            title: 'Dashboard2',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard 2',
                href: '#/index2',
            }]
        }
    },{
        path: 'edashboard',
        component: resolve => require(['./components/pages/edashboard.vue'], resolve),
        meta: {
            title: 'E-Commerce Dashboard',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            },{
                text: 'E-Commerce',
                href: '#',
            },{
                text: 'E-commerce Dashboard',
                href: '#/edashboard',
            }]
        }
    },{
        path: 'product_details',
        component: resolve => require(['./components/pages/product_details.vue'], resolve),
        meta: {
            title: 'Product Details',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            },{
                text: 'E-Commerce',
                href: '#',
            },{
                text: 'Product Details',
                href: '#/product_details',
            }]
        }
    }, {
            path: 'product_gallery',
            component: resolve => require(['./components/pages/product_gallery.vue'], resolve),
            meta: {
                title: 'Product Gallery',
                breadcrumb: [{
                    text: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                },{
                    text: 'E-Commerce',
                    href: '#',
                },{
                    text: 'Product Gallery',
                    href: '#/product_gallery',
                }]
            }
        },{
        path: 'form-elements',
        component: resolve => require(['./components/pages/form-elements.vue'], resolve),
        meta: {
            title: 'Form Elements',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            }, {
                text:'Features',
                href:'#',
            },{
                text: 'Form Elements',
                href: '#/form-elements'
            }]
        }
    }, {
        path: 'form-validations',
        component: resolve => require(['./components/pages/form-validations.vue'], resolve),
        meta: {
            title: 'Form Validations',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#'
            }, {
                text:'Features',
                href:'#',
            }, {
                text: 'Form Validations',
                href: '#/form-validations'
            }]
        }
    }, {
        path: 'jstree',
        component: resolve => require(['./components/pages/jstree.vue'], resolve),
        meta: {
            title: 'JS Tree',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#'
            }, {
                text: 'JS Tree',
                href: '#/jstree'
            }]
        }
    },{
        path: 'form_layouts',
        component: resolve => require(['./components/pages/form-layouts.vue'], resolve),
        meta: {
            title: 'Form Layouts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
               text:'Features',
                href:'#',
            }, {
                text: 'Form Layouts',
                href: '#/form_layouts'
            }]
        }
    }, {
        path: 'complex_forms',
        component: resolve => require(['./components/pages/complex_forms.vue'], resolve),
        meta: {
            title: 'Complex Forms',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Features',
                href:'#',
            }, {
                text: 'Complex Forms',
                href: '#/complex_forms'
            }]
        }
    }, {
        path: 'realtime_form',
        component: resolve => require(['./components/pages/realtime_form.vue'], resolve),
        meta: {
            title: 'Realtime Forms',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Features',
                href:'#',
            }, {
                text: 'Realtime Form',
                href: '#/realtime_form'
            }]
        }
    }, {
        path: 'radio_check',
        component: resolve => require(['./components/pages/radio_checkboxes.vue'], resolve),
        meta: {
            title: 'Radio and Checkboxes',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Features',
                href:'#',
            }, {
                text: 'Radio and Checkbox',
                href: '#/radio_check'
            }]
        }
    }, {
        path: 'form_editors',
        component: resolve => require(['./components/pages/form_editors.vue'], resolve),
        meta: {
            title: 'Form Editors',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Form Editors',
                href: '#/form_editors'
            }]
        }
    }, {
        path: 'form_wizards',
        component: resolve => require(['./components/pages/form_wizards.vue'], resolve),
        meta: {
            title: 'Form Wizards',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Form Wizards',
                href: '#/form_wizards'
            }]
        }
    }, {
        path: 'dropdowns',
        component: resolve => require(['./components/pages/dropdowns.vue'], resolve),
        meta: {
            title: 'Dropdowns',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Dropdowns',
                href: '#/dropdowns'
            }]
        }
    }, {
        path: 'date_pickers',
        component: resolve => require(['./components/pages/date_pickers.vue'], resolve),
        meta: {
            title: 'Date Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Date Picker',
                href: '#/date_picker'
            }]
        }
    }, {
        path: 'advanced_date_pickers',
        component: resolve => require(['./components/pages/advanced_date_pickers.vue'], resolve),
        meta: {
            title: 'Advanced Date Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Advanced Date Pickers',
                href: '#/advanced_data_pickers'
            }]
        }
    }, {
        path: 'vue_multiselect',
        component: resolve => require(['./components/pages/vue_multiselect.vue'], resolve),
        meta: {
            title: 'Vue Multiselect',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components'
            }, {
                text: 'Vue Multiselect',
                href: '#/vue_multiselect'
            }]
        }
    }, {
        path: 'vue_slider',
        component: resolve => require(['./components/pages/vue_slider.vue'], resolve),
        meta: {
            title: 'Vue Slider',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Forms',
                href: '#',
            },{
                text:'Components',
                href:'#',
            }, {
                text: 'Vue Slider',
                href: '#/vue_slider'
            }]
        }
    }, {
        path: 'vscroll',
        component: resolve => require(['./components/pages/vscroll.vue'], resolve),
        meta: {
            title: 'Vscroll',
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/vscroll">Vue Slider</a></li>`
        }
    }, {
        path: 'general_components',
        component: resolve => require(['./components/pages/general_components.vue'], resolve),
        meta: {
            title: 'General Components',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'General Components',
                href: '#/general_components '
            }]
        }
    }, {
        path: 'buttons',
        component: resolve => require(['./components/pages/buttons.vue'], resolve),
        meta: {
            title: 'Buttons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Buttons',
                href: '#/buttons'
            }]
        }
    }, {
        path: 'advanced_modals',
        component: resolve => require(['./components/pages/advanced_modals.vue'], resolve),
        meta: {
            title: 'Advanced Modals',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Advanced Modals',
                href: '#/advanced_modals'
            }]
        }
    }, {
        path: 'tabs_accordions',
        component: resolve => require(['./components/pages/tabs_accordions.vue'], resolve),
        meta: {
            title: 'Tabs Accordions',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Tabs and Accordions',
                href: '#/tabs_accordions'
            }]
        }
    }, {
        path: 'font_icons',
        component: resolve => require(['./components/pages/font_icons.vue'], resolve),
        meta: {
            title: 'Font Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Font Icons',
                href: '#/font_icons'
            }]
        }
    }, {
        path: 'themify_icons',
        component: resolve => require(['./components/pages/themify_icons.vue'], resolve),
        meta: {
            title: 'Themify Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Themify Icons',
                href: '#/themify_icons'
            }]
        }
    }, {
        path: 'fontawesome_icons',
        component: resolve => require(['./components/pages/fontawesome_icons.vue'], resolve),
        meta: {
            title: 'Fontawesome Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Font Awesome Icons',
                href: '#/fontawesome_icons'
            }]
        }
    }, {
        path: 'simple_line_icons',
        component: resolve => require(['./components/pages/simple_line_icons.vue'], resolve),
        meta: {
            title: 'Simple Line Icons',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Simple Line Icons',
                href: '#/simple_line_icons'
            }]
        }
    }, {
        path: 'timeline',
        component: resolve => require(['./components/pages/timeline.vue'], resolve),
        meta: {
            title: 'Timeline',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Features',
                href: '#',
            }, {
                text: 'Timeline',
                href: '#/timeline'
            }]
        }
    }, {
        path: 'pickers',
        component: resolve => require(['./components/pages/pickers.vue'], resolve),
        meta: {
            title: 'Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Pickers',
                href: '#/pickers'
            }]
        }
    },{
        path: 'color_pickers',
        component: resolve => require(['./components/pages/color_pickers.vue'], resolve),
        meta: {
            title: 'Color Pickers',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Color Pickers',
                href: '#/color_pickers'
            }]
        }
    }, {
        path: 'grid_layout',
        component: resolve => require(['./components/pages/grid_layout.vue'], resolve),
        meta: {
            title: 'Grid Layout',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Grid layout',
                href: '#/grid_layout'
            }]
        }
    }, {
        path: 'tags_input',
        component: resolve => require(['./components/pages/tags_input.vue'], resolve),
        meta: {
            title: 'Tags Input',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Tags Input',
                href: '#/tags_input'
            }]
        }
    }, {
        path: 'nestable_list',
        component: resolve => require(['./components/pages/nestable_list.vue'], resolve),
        meta: {
            title: 'Nestable List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Nested List',
                href: '#/nested_list'
            }]
        }
    }, {
        path: 'sweet_alert',
        component: resolve => require(['./components/pages/sweet_alert.vue'], resolve),
        meta: {
            title: 'Sweet Alert',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Sweet Alert',
                href: '#/sweet_alert'
            }]
        }
    }, {
        path: 'toastr_notifications',
        component: resolve => require(['./components/pages/toastr_notifications.vue'], resolve),
        meta: {
            title: 'Toastr Notifications',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Toastr Notification',
                href: '#/toastr_notifications'
            }]
        }
    }, {
        path: 'draggable_portlets',
        component: resolve => require(['./components/pages/draggable_portlets.vue'], resolve),
        meta: {
            title: 'Draggable Portlets',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Draggable Portlets',
                href: '#/draggable_portlets'
            }]
        }
    }, {
        path: 'transitions',
        component: resolve => require(['./components/pages/transitions.vue'], resolve),
        meta: {
            title: 'Transitions',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Tranisitions',
                href: '#/transitions'
            }]
        }
    },{
        path: 'listjs',
        component: resolve => require(['./components/pages/listjs.vue'], resolve),
        meta: {
            title: 'Listjs',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'UI Components',
                href: '#',
            }, {
                text: 'Listjs',
                href: '#/listjs'
            }]
        }
    },  {
        path: 'widgets',
        component: resolve => require(['./components/pages/widgets.vue'], resolve),
        meta: {
            title: 'Widgets',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Widgets',
                href: '#/widgets1'
            }]
        }
    }, {
        path: 'simple_tables',
        component: resolve => require(['./components/pages/simple_tables.vue'], resolve),
        meta: {
            title: 'Simple Tables',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'DataTables',
                href: '#',
            }, {
                text: 'Simple Tables',
                href: '#/simple_tables'
            }]
        }
        }, {
            path: 'advanced-tables',
            component: resolve => require(['./components/pages/advanced_tables.vue'], resolve),
            meta: {
                title: 'DataTables',
                breadcrumb: [{
                    text: '<i class="ti-home"></i> Dashboard',
                    href: '#/',
                }, {
                    text: 'DataTables',
                    href: '#',
                }, {
                    text: 'Advanced Tables',
                    href: '#/advanced-tables'
                }]
            }
        }, {
        path: 'flot_charts',
        component: resolve => require(['./components/pages/flot_charts.vue'], resolve),
        meta: {
            title: 'Flot Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Flot Charts',
                href: '#/flot_charts'
            }]
        }
    }, {
        path: 'nvd3_charts',
        component: resolve => require(['./components/pages/nvd3_charts.vue'], resolve),
        meta: {
            title: 'NVD3 Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'NVD3 Charts',
                href: '#/nvd3_charts'
            }]
        }
    },{
        path: 'frappe_charts',
        component: resolve => require(['./components/pages/frappe_charts.vue'], resolve),
        meta: {
            title: 'Frappe Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Frappe Charts',
                href: '#/frappe_charts'
            }]
        }
    }, {
        path: 'circle_sliders',
        component: resolve => require(['./components/pages/circle_sliders.vue'], resolve),
        meta: {
            title: 'Circle Sliders',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Circle Sliders',
                href: '#/circle_sliders'
            }]
        }
    }, {
        path: 'chartist',
        component: resolve => require(['./components/pages/chartist.vue'], resolve),
        meta: {
            title: 'Chartist Charts',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Charts',
                href: '#',
            }, {
                text: 'Chartist Charts',
                href: '#/chartist'
            }]
        }
    }, {
        path: 'calendar',
        component: resolve => require(['./components/pages/calendar.vue'], resolve),
        meta: {
            title: 'Calendar',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Calendar',
                href: '#/calendar'
            }]
        }
    }, {
        path: 'masonry_gallery',
        component: resolve => require(['./components/pages/masonry_gallery.vue'], resolve),
        meta: {
            title: 'Masonry Gallery',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Masonry Gallery',
                href: '#/masonry_gallery'
            }]
        }
    }, {
        path: 'dropify',
        component: resolve => require(['./components/pages/dropify.vue'], resolve),
        meta: {
            title: 'Dropify',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Dropify',
                href: '#/dropify'
            }]
        }
    }, {
        path: 'image_hover',
        component: resolve => require(['./components/pages/image_hover.vue'], resolve),
        meta: {
            title: 'Image Hover',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Image Hover',
                href: '#/image_hover'
            }]
        }
    }, {
        path: 'image_filter',
        component: resolve => require(['./components/pages/image_filter.vue'], resolve),
        meta: {
            title: 'Image Filter',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Image Filter',
                href: '#/image_filter'
            }]
        }
    }, {
        path: 'image_magnifier',
        component: resolve => require(['./components/pages/image_magnifier.vue'], resolve),
        meta: {
            title: 'Image Magnifier',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Gallery',
                href: '#',
            }, {
                text: 'Image Magnifier',
                href: '#/image_magnifier'
            }]
        }
    }, {
        path: 'gmaps',
        component: resolve => require(['./components/pages/gmaps.vue'], resolve),
        meta: {
            title: 'Google Maps',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Maps',
                href: '#',
            }, {
                text: 'Google Maps',
                href: '#/gmaps'
            }]
        }
    }, {
        path: 'vector_maps',
        component: resolve => require(['./components/pages/vector_maps.vue'], resolve),
        meta: {
            title: 'Vector Maps',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Maps',
                href: '#',
            }, {
                text: 'Vector Maps',
                href: '#/vector_maps'
            }]
        }
    }, {
        path: 'users_list',
        component: resolve => require(['./components/pages/users_list.vue'], resolve),
        meta: {
            title: 'Users List',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Users List',
                href: '#/users_list'
            }]
        }
    }, {
        path: 'addnew_user',
        component: resolve => require(['./components/pages/addnew_user.vue'], resolve),
        meta: {
            title: 'Add New User',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Add New User',
                href: '#/addnew_user'
            }]
        }
    }, {
        path: 'edit_user',
        component: resolve => require(['./components/pages/edit_user.vue'], resolve),
        meta: {
            title: 'Edit User',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Edit User',
                href: '#/edit_user'
            }]
        }
    }, {
        path: 'user_profile',
        component: resolve => require(['./components/pages/user_profile.vue'], resolve),
        meta: {
            title: 'User Profile',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'User Profile',
                href: '#/user_profile'
            }]
        }
    }, {
        path: 'deleted_users',
        component: resolve => require(['./components/pages/deleted_users.vue'], resolve),
        meta: {
            title: 'Deleted Users',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Users',
                href: '#',
            }, {
                text: 'Deleted Users',
                href: '#/deleted_users'
            }]
        }
    }, {
        path: 'blank',
        component: resolve => require(['./components/pages/blank.vue'], resolve),
        meta: {
            title: 'Blank',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Extra Pages',
                href: '#',
            }, {
                text: 'Blank',
                href: '#/blank'
            }]
        }
    }, {
        path: 'invoice',
        component: resolve => require(['./components/pages/invoice.vue'], resolve),
        meta: {
            title: 'Invoice',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Extra Pages',
                href: '#',
            }, {
                text: 'Invoice',
                href: '#/invoice'
            }]
        }
    }, {
        path: 'pricing',
        component: resolve => require(['./components/pages/pricing.vue'], resolve),
        meta: {
            title: 'Pricing',
            breadcrumb: [{
                text: '<i class="ti-home"></i> Dashboard',
                href: '#/',
            }, {
                text: 'Extra Pages',
                href: '#',
            }, {
                text: 'Pricing Table',
                href: '#/pricing'
            }]
        }
    }, {
        path: 'boxed',
        component: resolve => require(['./components/pages/boxed.vue'], resolve),
        meta: {
            title: 'Boxed',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/boxed'
            }]
        }
    }, {
        path: 'fixed_menu',
        component: resolve => require(['./components/pages/fixed_menu.vue'], resolve),
        meta: {
            title: 'Fixed Menu',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/fixed_menu'
            }]
        }
    }, {
        path: 'movable_header',
        component: resolve => require(['./components/pages/movable_header.vue'], resolve),
        meta: {
            title: 'Movable Header',
            // breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/movable_header">Movable Header</a></li>`
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/movable_header'
            }]
        }
    }, {
        path: 'boxed_movableheader',
        component: resolve => require(['./components/pages/boxed_movableheader.vue'], resolve),
        meta: {
            title: 'Boxed & Movable Header',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/boxed_movableheader'
            }]
        }
    }, {
        path: 'menubar_fold',
        component: resolve => require(['./components/pages/menubar_fold.vue'], resolve),
        meta: {
            title: 'Menubar Fold',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/menubar_fold'
            }]
        }
    }, {
        path: 'mini_sidebar',
        component: resolve => require(['./components/pages/mini_sidebar.vue'], resolve),
        meta: {
            title: 'Mini Sidebar',
            breadcrumb:[{
                text:'<i class="ti-home"></i> Dashboard',
                href:'#/',
            },{
                text:'Layouts',
                href:'#',
            },{
                text:'#/mini_sidebar'
            }]
        }
    }]
}, {
    path: '/500',
    component: resolve => require(['./components/pages/500.vue'], resolve),
    meta: {
        title: '500',
        breadcrumb: ``
    }
}, {
    path: '/login',
    component: resolve => require(['./components/pages/login.vue'], resolve),
    meta: {
        title: 'Login',
        breadcrumb: ``
    }
}, {
    path: '/register',
    component: resolve => require(['./components/pages/register.vue'], resolve),
    meta: {
        title: 'Register',
        breadcrumb: ``
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['./components/pages/lockscreen.vue'], resolve),
    meta: {
        title: 'Lockscreen',
        breadcrumb: ``
    }
}, {
    path: '/forgot_password',
    component: resolve => require(['./components/pages/forgot_password.vue'], resolve),
    meta: {
        title: 'Forgot Password',
        breadcrumb: ``
    }
}, {
    path: '/reset_password',
    component: resolve => require(['./components/pages/reset_pass.vue'], resolve),
    meta: {
        title: 'Reset Password',
        breadcrumb: ``
    }
}, {
    path: '*',
    component: resolve => require(['./components/pages/404.vue'], resolve),
    meta: {
        title: '404',
        breadcrumb: ``
    }
}]

export default routes
