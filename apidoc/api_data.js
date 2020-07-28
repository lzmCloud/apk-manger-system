define({ "api": [
  {
    "type": "post",
    "url": "/uploadApk",
    "title": "",
    "group": "apk包上传",
    "description": "<p>apk包上传</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>设置 multipart/form-data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {  \n  code: 200 ,\n  msg: 'ok',\n  res: {\n   url: url, // 文件路径\n   size: size // 文件大小\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "router/uploadApk.js",
    "groupTitle": "apk包上传",
    "name": "PostUploadapk"
  },
  {
    "type": "post",
    "url": "/uploadPgyer",
    "title": "",
    "group": "上传蒲公英",
    "description": "<p>上传蒲公英(同意按钮)</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orderId",
            "description": "<p>预约单号</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {  \n  code: 200 ,\n  msg: 'ok',\n  res: {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "router/uploadPgyer.js",
    "groupTitle": "上传蒲公英",
    "name": "PostUploadpgyer"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "登录",
    "description": "<p>登陆接口</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户名 eg: '560666'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "psw",
            "description": "<p>密码 两重MD5 eg: '123456'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {  \n  code: 200 ,\n  msg: 'ok',\n  res: {\n     \"token\": \"abcdefghijk\",\n     \"userId\": 1111111,\n     \"userName\": \"张三\"\n     \"account\" : \"账号\",\n      \"manager\" :  0, // 管理权限 0 普通会员 1 管理员 2 超级管理员\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "router/login.js",
    "groupTitle": "登录",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/bindingApk",
    "title": "",
    "group": "绑定apk包",
    "description": "<p>绑定apk包</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>文件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>预约版本</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platformType",
            "description": "<p>平台  0: '格力+', 1: 'GREE+'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "* {  \n    code: 200 ,\n    msg: 'ok',\n    res: {\n     uploadTime: 绑定时间,\n     overTime： 绑定时间+ 3天,\n     orderStatus: 3,\n     url: 文件路径\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "router/bindingApk.js",
    "groupTitle": "绑定apk包",
    "name": "PostBindingapk"
  },
  {
    "type": "get",
    "url": "/getApkList",
    "title": "",
    "group": "获取预约列表",
    "description": "<p>获取预约列表</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页限制</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{  \n   code: 200 ,\n   msg: 'ok',\n   res: {\n     total: 总数,\n     total_pages: 总页数,\n     data: [{\n          userId:10086,\n          userName: 'admin',\n          version:\"100.10.112\",\n          describe: '我是描述'\n          createTime:2020-07-23T11:27:34.483+00:00,\n          fixTime: 2020-07-23T11:27:34.483+00:00, // 修改时间\n          overTime: 2020-07-27T14:28:13.487+00:00,\n          uploadTime: \"2020-07-23T11:27:34.483+00:00\" // 文件上传时间\n          finishTime:null,\n          checkTime： \"2020-07-23T11:27:34.483+00:00\" // 审批时间\n          finishTime: \"2020-07-23T11:27:34.483+00:00\", // 完成时间\n          orderStatus:2,  //   0: '未使用', 1: '预约使用中', 2: '待审核', 3: '待修改',  4: '已完成'\n          platformType:0,  //  0: '格力+',  1: 'Gree+'\n          url:\"uploads\\2020-7-24\\Greeplus_In_4.0.0.20_202007248.apk\",\n          checkerId:null, // 审批人\n          orderId:15 //订单id\n     }],\n     page: 页码,\n     limit: 每页限制\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "router/getApkList.js",
    "groupTitle": "获取预约列表",
    "name": "GetGetapklist"
  },
  {
    "type": "post",
    "url": "/orderVersion",
    "title": "",
    "group": "预约版本",
    "description": "<p>预约版本</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>预约的版本</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platformType",
            "description": "<p>平台  0: '格力+', 1: 'GREE+'</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {  \n  code: 200 ,\n  msg: 'ok',\n  res: {\n       userId: 10000,\n       createTime: 1595818787325, // 生成时间\n       overTime: 1595821787325, // 超期时间\n       finishTime: null,  // \n       orderStatus: 1, // 状态 \n       platformType： 0, // 平台\n       version: version,\n       url: null,\n       checkerId: null,\n       orderId: 1\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "router/orderVersion.js",
    "groupTitle": "预约版本",
    "name": "PostOrderversion"
  }
] });
