// 基础路由

/* Layout */
import Layout from '@/layout'
export default [
  // {
  //     path: '/redirect',
  //     component: Layout,
  //     hidden: true,
  //     children: [
  //     {
  //         path: '/redirect/:path*',
  //         component: () => import('@/element-views/redirect/index')
  //     }
  //     ]
  // },
//   {
//       path: '/',
//       hidden: true,
//       component: () => import('@/views/index/index'),
//   },
//   {
//     path: '/home',
//     hidden: true,
//     login: true,
//     meta: {
//       noNeedLogin: true
//     },
//     component: () => import('@/views/index/index')
//   },
//   {
//     path: '/login',
//     meta: {
//       noNeedLogin: true
//     },
//     component: () => import('@/element-views/login/index'),
//     hidden: true
//   },
//   {
//     path: '/auth-redirect',
//     component: () => import('@/element-views/login/auth-redirect'),
//     hidden: true
//   },
//   {
//     path: '/404',
//     component: () => import('@/element-views/error-page/404'),
//     hidden: true
//   },
//   {
//     path: '/401',
//     component: () => import('@/element-views/error-page/401'),
//     hidden: true
//   },
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/element-views/dashboard/index'),
//         name: 'Dashboard',
//         meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
//       }
//     ]
//   },
//   {
//     path: '/documentation',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/element-views/documentation/index'),
//         name: 'Documentation',
//         meta: { title: 'Documentation', icon: 'documentation', affix: true }
//       }
//     ]
//   }
  //   {
  //       path: '/guide',
  //       component: Layout,
  //       redirect: '/guide/index',
  //       children: [
  //       {
  //           path: 'index',
  //           component: () => import('@/element-views/guide/index'),
  //           name: 'Guide',
  //           meta: { title: 'Guide', icon: 'guide', noCache: true }
  //       }
  //       ]
  //   },
  //   {
  //       path: '/profile',
  //       component: Layout,
  //       redirect: '/profile/index',
  //       hidden: true,
  //       children: [
  //           {
  //               path: 'index',
  //               component: () => import('@/element-views/profile/index'),
  //               name: 'Profile',
  //               meta: { title: 'Profile', icon: 'user', noCache: true }
  //           }
  //       ]
  //   },
  // {
  //     path: '/table',
  //     component: Layout,
  //     redirect: '/table/complex-table',
  //     name: 'Table',
  //     meta: {
  //         title: 'Table',
  //         icon: 'table'
  //     },
  //     children: [
  //         {
  //             path: 'dynamic-table',
  //             component: () => import('@/element-views/table/dynamic-table/index'),
  //             name: 'DynamicTable',
  //             meta: { title: 'Dynamic Table' }
  //         },
  //         {
  //             path: 'drag-table',
  //             component: () => import('@/element-views/table/drag-table'),
  //             name: 'DragTable',
  //             meta: { title: 'Drag Table' }
  //         },
  //         {
  //             path: 'inline-edit-table',
  //             component: () => import('@/element-views/table/inline-edit-table'),
  //             name: 'InlineEditTable',
  //             meta: { title: 'Inline Edit' }
  //         },
  //         {
  //             path: 'complex-table',
  //             component: () => import('@/element-views/table/complex-table'),
  //             name: 'ComplexTable',
  //             meta: { title: 'Complex Table' }
  //         }
  //     ]
  // },
  // {
  //     path: '/nested',
  //     component: Layout,
  //     redirect: '/nested/menu1/menu1-1',
  //     name: 'Nested',
  //     meta: {
  //       title: 'Nested Routes',
  //       icon: 'nested'
  //     },
  //     children: [
  //       {
  //         path: 'menu1',
  //         component: () => import('@/element-views/nested/menu1/index'), // Parent router-view
  //         name: 'Menu1',
  //         meta: { title: 'Menu 1' },
  //         redirect: '/nested/menu1/menu1-1',
  //         children: [
  //           {
  //             path: 'menu1-1',
  //             component: () => import('@/element-views/nested/menu1/menu1-1'),
  //             name: 'Menu1-1',
  //             meta: { title: 'Menu 1-1' }
  //           },
  //           {
  //             path: 'menu1-2',
  //             component: () => import('@/element-views/nested/menu1/menu1-2'),
  //             name: 'Menu1-2',
  //             redirect: '/nested/menu1/menu1-2/menu1-2-1',
  //             meta: { title: 'Menu 1-2' },
  //             children: [
  //               {
  //                 path: 'menu1-2-1',
  //                 component: () => import('@/element-views/nested/menu1/menu1-2/menu1-2-1'),
  //                 name: 'Menu1-2-1',
  //                 meta: { title: 'Menu 1-2-1' }
  //               },
  //               {
  //                 path: 'menu1-2-2',
  //                 component: () => import('@/element-views/nested/menu1/menu1-2/menu1-2-2'),
  //                 name: 'Menu1-2-2',
  //                 meta: { title: 'Menu 1-2-2' }
  //               }
  //             ]
  //           },
  //           {
  //             path: 'menu1-3',
  //             component: () => import('@/element-views/nested/menu1/menu1-3'),
  //             name: 'Menu1-3',
  //             meta: { title: 'Menu 1-3' }
  //           }
  //         ]
  //       },
  //       {
  //         path: 'menu2',
  //         name: 'Menu2',
  //         component: () => import('@/element-views/nested/menu2/index'),
  //         meta: { title: 'Menu 2' }
  //       }
  //     ]
  //   },
  // {
  //     path: '/components',
  //     component: Layout,
  //     redirect: 'noRedirect',
  //     name: 'ComponentDemo',
  //     meta: {
  //       title: 'Components',
  //       icon: 'component'
  //     },
  //     children: [
  //       {
  //         path: 'tinymce',
  //         component: () => import('@/element-views/components-demo/tinymce'),
  //         name: 'TinymceDemo',
  //         meta: { title: 'Tinymce' }
  //       },
  //       {
  //         path: 'markdown',
  //         component: () => import('@/element-views/components-demo/markdown'),
  //         name: 'MarkdownDemo',
  //         meta: { title: 'Markdown' }
  //       },
  //       {
  //         path: 'json-editor',
  //         component: () => import('@/element-views/components-demo/json-editor'),
  //         name: 'JsonEditorDemo',
  //         meta: { title: 'JSON Editor' }
  //       },
  //       {
  //         path: 'split-pane',
  //         component: () => import('@/element-views/components-demo/split-pane'),
  //         name: 'SplitpaneDemo',
  //         meta: { title: 'SplitPane' }
  //       },
  //       {
  //         path: 'avatar-upload',
  //         component: () => import('@/element-views/components-demo/avatar-upload'),
  //         name: 'AvatarUploadDemo',
  //         meta: { title: 'Upload' }
  //       },
  //       {
  //         path: 'dropzone',
  //         component: () => import('@/element-views/components-demo/dropzone'),
  //         name: 'DropzoneDemo',
  //         meta: { title: 'Dropzone' }
  //       },
  //       {
  //         path: 'sticky',
  //         component: () => import('@/element-views/components-demo/sticky'),
  //         name: 'StickyDemo',
  //         meta: { title: 'Sticky' }
  //       },
  //       {
  //         path: 'count-to',
  //         component: () => import('@/element-views/components-demo/count-to'),
  //         name: 'CountToDemo',
  //         meta: { title: 'Count To' }
  //       },
  //       {
  //         path: 'mixin',
  //         component: () => import('@/element-views/components-demo/mixin'),
  //         name: 'ComponentMixinDemo',
  //         meta: { title: 'Component Mixin' }
  //       },
  //       {
  //         path: 'back-to-top',
  //         component: () => import('@/element-views/components-demo/back-to-top'),
  //         name: 'BackToTopDemo',
  //         meta: { title: 'Back To Top' }
  //       },
  //       {
  //         path: 'drag-dialog',
  //         component: () => import('@/element-views/components-demo/drag-dialog'),
  //         name: 'DragDialogDemo',
  //         meta: { title: 'Drag Dialog' }
  //       },
  //       {
  //         path: 'drag-select',
  //         component: () => import('@/element-views/components-demo/drag-select'),
  //         name: 'DragSelectDemo',
  //         meta: { title: 'Drag Select' }
  //       },
  //       {
  //         path: 'dnd-list',
  //         component: () => import('@/element-views/components-demo/dnd-list'),
  //         name: 'DndListDemo',
  //         meta: { title: 'Dnd List' }
  //       },
  //       {
  //         path: 'drag-kanban',
  //         component: () => import('@/element-views/components-demo/drag-kanban'),
  //         name: 'DragKanbanDemo',
  //         meta: { title: 'Drag Kanban' }
  //       }
  //     ]
  //   },
  //   {
  //     path: '/charts',
  //     component: Layout,
  //     redirect: 'noRedirect',
  //     name: 'Charts',
  //     meta: {
  //       title: 'Charts',
  //       icon: 'chart'
  //     },
  //     children: [
  //       {
  //         path: 'keyboard',
  //         component: () => import('@/element-views/charts/keyboard'),
  //         name: 'KeyboardChart',
  //         meta: { title: 'Keyboard Chart', noCache: true }
  //       },
  //       {
  //         path: 'line',
  //         component: () => import('@/element-views/charts/line'),
  //         name: 'LineChart',
  //         meta: { title: 'Line Chart', noCache: true }
  //       },
  //       {
  //         path: 'mix-chart',
  //         component: () => import('@/element-views/charts/mix-chart'),
  //         name: 'MixChart',
  //         meta: { title: 'Mix Chart', noCache: true }
  //       }
  //     ]
  //   },
  //   {
  //     path: '/permission',
  //     component: Layout,
  //     redirect: '/permission/page',
  //     alwaysShow: true, // will always show the root menu
  //     name: 'Permission',
  //     meta: {
  //       title: 'Permission',
  //       icon: 'lock',
  //       roles: ['admin', 'editor'] // you can set roles in root nav
  //     },
  //     children: [
  //       {
  //         path: 'page',
  //         component: () => import('@/element-views/permission/page'),
  //         name: 'PagePermission',
  //         meta: {
  //           title: 'Page Permission',
  //           roles: ['admin'] // or you can only set roles in sub nav
  //         }
  //       },
  //       {
  //         path: 'directive',
  //         component: () => import('@/element-views/permission/directive'),
  //         name: 'DirectivePermission',
  //         meta: {
  //           title: 'Directive Permission'
  //           // if do not set roles, means: this page does not require permission
  //         }
  //       },
  //       {
  //         path: 'role',
  //         component: () => import('@/element-views/permission/role'),
  //         name: 'RolePermission',
  //         meta: {
  //           title: 'Role Permission',
  //           roles: ['admin']
  //         }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/icon',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'index',
  //         component: () => import('@/element-views/icons/index'),
  //         name: 'Icons',
  //         meta: { title: 'Icons', icon: 'icon', noCache: true }
  //       }
  //     ]
  //   },
  //   {
  //     path: '/example',
  //     component: Layout,
  //     redirect: '/example/list',
  //     name: 'Example',
  //     meta: {
  //       title: 'Example',
  //       icon: 'example'
  //     },
  //     children: [
  //       {
  //         path: 'create',
  //         component: () => import('@/element-views/example/create'),
  //         name: 'CreateArticle',
  //         meta: { title: 'Create Article', icon: 'edit' }
  //       },
  //       {
  //         path: 'edit/:id(\\d+)',
  //         component: () => import('@/element-views/example/edit'),
  //         name: 'EditArticle',
  //         meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
  //         hidden: true
  //       },
  //       {
  //         path: 'list',
  //         component: () => import('@/element-views/example/list'),
  //         name: 'ArticleList',
  //         meta: { title: 'Article List', icon: 'list' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/tab',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'index',
  //         component: () => import('@/element-views/tab/index'),
  //         name: 'Tab',
  //         meta: { title: 'Tab', icon: 'tab' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/error',
  //     component: Layout,
  //     redirect: 'noRedirect',
  //     name: 'ErrorPages',
  //     meta: {
  //       title: 'Error Pages',
  //       icon: '404'
  //     },
  //     children: [
  //       {
  //         path: '401',
  //         component: () => import('@/element-views/error-page/401'),
  //         name: 'Page401',
  //         meta: { title: '401', noCache: true }
  //       },
  //       {
  //         path: '404',
  //         component: () => import('@/element-views/error-page/404'),
  //         name: 'Page404',
  //         meta: { title: '404', noCache: true }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/error-log',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'log',
  //         component: () => import('@/element-views/error-log/index'),
  //         name: 'ErrorLog',
  //         meta: { title: 'Error Log', icon: 'bug' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/excel',
  //     component: Layout,
  //     redirect: '/excel/export-excel',
  //     name: 'Excel',
  //     meta: {
  //       title: 'Excel',
  //       icon: 'excel'
  //     },
  //     children: [
  //       {
  //         path: 'export-excel',
  //         component: () => import('@/element-views/excel/export-excel'),
  //         name: 'ExportExcel',
  //         meta: { title: 'Export Excel' }
  //       },
  //       {
  //         path: 'export-selected-excel',
  //         component: () => import('@/element-views/excel/select-excel'),
  //         name: 'SelectExcel',
  //         meta: { title: 'Export Selected' }
  //       },
  //       {
  //         path: 'export-merge-header',
  //         component: () => import('@/element-views/excel/merge-header'),
  //         name: 'MergeHeader',
  //         meta: { title: 'Merge Header' }
  //       },
  //       {
  //         path: 'upload-excel',
  //         component: () => import('@/element-views/excel/upload-excel'),
  //         name: 'UploadExcel',
  //         meta: { title: 'Upload Excel' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/zip',
  //     component: Layout,
  //     redirect: '/zip/download',
  //     alwaysShow: true,
  //     name: 'Zip',
  //     meta: { title: 'Zip', icon: 'zip' },
  //     children: [
  //       {
  //         path: 'download',
  //         component: () => import('@/element-views/zip/index'),
  //         name: 'ExportZip',
  //         meta: { title: 'Export Zip' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/pdf',
  //     component: Layout,
  //     redirect: '/pdf/index',
  //     children: [
  //       {
  //         path: 'index',
  //         component: () => import('@/element-views/pdf/index'),
  //         name: 'PDF',
  //         meta: { title: 'PDF', icon: 'pdf' }
  //       }
  //     ]
  //   },
  //   {
  //     path: '/pdf/download',
  //     component: () => import('@/element-views/pdf/download'),
  //     hidden: true
  //   },

  //   {
  //     path: '/theme',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'index',
  //         component: () => import('@/element-views/theme/index'),
  //         name: 'Theme',
  //         meta: { title: 'Theme', icon: 'theme' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/clipboard',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'index',
  //         component: () => import('@/element-views/clipboard/index'),
  //         name: 'ClipboardDemo',
  //         meta: { title: 'Clipboard', icon: 'clipboard' }
  //       }
  //     ]
  //   },

  //   {
  //     path: 'external-link',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'https://github.com/PanJiaChen/vue-element-admin',
  //         meta: { title: 'External Link', icon: 'link' }
  //       }
  //     ]
  //   },
]
