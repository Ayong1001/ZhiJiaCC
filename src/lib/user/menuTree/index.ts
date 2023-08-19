export default [
  {
    id: 2,
    name: '系统总览',
    type: 1,
    url: '/main/analysis',
    icon: 'el-icon-monitor',
    sort: 1,
    children: [
      // {
      //   id: 39,
      //   url: '/main/analysis/overview',
      //   name: '核心技术',
      //   sort: 106,
      //   type: 2,
      //   children: null,
      //   parentId: 38
      // },
      {
        id: 22,
        url: '/main/analysis/dashboard',
        name: '工人统计',
        sort: 107,
        type: 2,
        children: null,
        parentId: 2
      }
    ]
  },
  {
    id: 1,
    name: '系统管理',
    type: 1,
    url: '/main/system',
    icon: 'el-icon-setting',
    sort: 2,
    children: [
      {
        id: 11,
        url: '/main/system/user',
        name: '账号管理',
        sort: 100,
        type: 2,
        children: [
          {
            id: 111,
            url: null,
            name: '创建账号',
            sort: null,
            type: 3,
            parentId: 11,
            permission: 'system:users:create'
          },
          {
            id: 112,
            url: null,
            name: '删除账号',
            sort: null,
            type: 3,
            parentId: 11,
            permission: 'system:users:delete'
          },
          {
            id: 113,
            url: null,
            name: '修改账号',
            sort: null,
            type: 3,
            parentId: 11,
            permission: 'system:users:update'
          },
          {
            id: 114,
            url: null,
            name: '查询账号',
            sort: null,
            type: 3,
            parentId: 11,
            permission: 'system:users:query'
          }
        ],
        parentId: 1
      },
      {
        id: 12,
        url: '/main/system/department',
        name: '部门管理',
        sort: 101,
        type: 2,
        children: [
          {
            id: 121,
            url: null,
            name: '创建部门',
            sort: null,
            type: 3,
            parentId: 12,
            permission: 'system:department:create'
          },
          {
            id: 122,
            url: null,
            name: '删除部门',
            sort: null,
            type: 3,
            parentId: 12,
            permission: 'system:department:delete'
          },
          {
            id: 123,
            url: null,
            name: '修改部门',
            sort: null,
            type: 3,
            parentId: 12,
            permission: 'system:department:update'
          },
          {
            id: 124,
            url: null,
            name: '查询部门',
            sort: null,
            type: 3,
            parentId: 12,
            permission: 'system:department:query'
          }
        ],
        parentId: 1
      }
    ]
  },
  {
    id: 3,
    name: '用户管理',
    type: 1,
    url: '/main/user',
    icon: 'el-icon-discount',
    sort: 2,
    children: [
      {
        id: 31,
        url: '/main/user/list',
        name: '用户管理',
        sort: 100,
        type: 2,
        children: [
          {
            id: 311,
            url: null,
            name: '创建用户',
            sort: null,
            type: 3,
            parentId: 31,
            permission: 'system:users:create'
          },
          {
            id: 312,
            url: null,
            name: '删除用户',
            sort: null,
            type: 3,
            parentId: 31,
            permission: 'system:users:delete'
          },
          {
            id: 313,
            url: null,
            name: '修改用户',
            sort: null,
            type: 3,
            parentId: 31,
            permission: 'system:users:update'
          },
          {
            id: 314,
            url: null,
            name: '查询用户',
            sort: null,
            type: 3,
            parentId: 31,
            permission: 'system:users:query'
          }
        ],
        parentId: 3
      }
      // {
      //   id: 32,
      //   url: '/main/system/department',
      //   name: '用户列表',
      //   sort: 101,
      //   type: 2,
      //   children: [
      //     {
      //       id: 321,
      //       url: null,
      //       name: '创建用户',
      //       sort: null,
      //       type: 3,
      //       parentId: 32,
      //       permission: 'system:department:create'
      //     },
      //     {
      //       id: 322,
      //       url: null,
      //       name: '删除用户',
      //       sort: null,
      //       type: 3,
      //       parentId: 32,
      //       permission: 'system:department:delete'
      //     },
      //     {
      //       id: 323,
      //       url: null,
      //       name: '修改用户',
      //       sort: null,
      //       type: 3,
      //       parentId: 32,
      //       permission: 'system:department:update'
      //     },
      //     {
      //       id: 324,
      //       url: null,
      //       name: '查询用户',
      //       sort: null,
      //       type: 3,
      //       parentId: 32,
      //       permission: 'system:department:query'
      //     }
      //   ],
      //   parentId: 3
      // }
    ]
  },
  {
    id: 4,
    name: '工人管理',
    type: 1,
    url: '/main/woker',
    icon: 'el-icon-user',
    sort: 2,
    children: [
      {
        id: 41,
        url: '/main/woker/list',
        name: '工人管理',
        sort: 100,
        type: 2,
        children: [
          {
            id: 411,
            url: null,
            name: '创建工人',
            sort: null,
            type: 3,
            parentId: 41,
            permission: 'system:users:create'
          },
          {
            id: 412,
            url: null,
            name: '删除工人',
            sort: null,
            type: 3,
            parentId: 41,
            permission: 'system:users:delete'
          },
          {
            id: 413,
            url: null,
            name: '修改工人',
            sort: null,
            type: 3,
            parentId: 41,
            permission: 'system:users:update'
          },
          {
            id: 414,
            url: null,
            name: '查询工人',
            sort: null,
            type: 3,
            parentId: 41,
            permission: 'system:users:query'
          }
        ],
        parentId: 4
      }
    ]
  }
  // {
  //   id: 9,
  //   name: '商品中心',
  //   type: 1,
  //   url: '/main/product',
  //   icon: 'el-icon-goods',
  //   sort: 3,
  //   children: [
  //     {
  //       id: 15,
  //       url: '/main/product/category',
  //       name: '商品类别',
  //       sort: 104,
  //       type: 2,
  //       children: [
  //         {
  //           id: 30,
  //           url: null,
  //           name: '创建类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:create'
  //         },
  //         {
  //           id: 31,
  //           url: null,
  //           name: '删除类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:delete'
  //         },
  //         {
  //           id: 32,
  //           url: null,
  //           name: '修改类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:update'
  //         },
  //         {
  //           id: 33,
  //           url: null,
  //           name: '查询类别',
  //           sort: null,
  //           type: 3,
  //           parentId: 15,
  //           permission: 'system:category:query'
  //         }
  //       ],
  //       parentId: 9
  //     },
  //     {
  //       id: 16,
  //       url: '/main/product/goods',
  //       name: '商品信息',
  //       sort: 105,
  //       type: 2,
  //       children: [
  //         {
  //           id: 34,
  //           url: null,
  //           name: '创建商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:create'
  //         },
  //         {
  //           id: 35,
  //           url: null,
  //           name: '删除商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:delete'
  //         },
  //         {
  //           id: 36,
  //           url: null,
  //           name: '修改商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:update'
  //         },
  //         {
  //           id: 37,
  //           url: null,
  //           name: '查询商品',
  //           sort: null,
  //           type: 3,
  //           parentId: 16,
  //           permission: 'system:goods:query'
  //         }
  //       ],
  //       parentId: 9
  //     }
  //   ]
  // },
  // {
  //   id: 41,
  //   name: '随便聊聊',
  //   type: 1,
  //   url: '/main/story',
  //   icon: 'el-icon-chat-line-round',
  //   sort: 4,
  //   children: [
  //     {
  //       id: 42,
  //       url: '/main/story/chat',
  //       name: '你的故事',
  //       sort: 108,
  //       type: 2,
  //       children: null,
  //       parentId: 41
  //     },
  //     {
  //       id: 43,
  //       url: '/main/story/list',
  //       name: '故事列表',
  //       sort: 109,
  //       type: 2,
  //       children: [],
  //       parentId: 41
  //     }
  //   ]
  // }
]
