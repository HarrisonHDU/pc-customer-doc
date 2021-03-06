define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "后台权限",
    "name": "AdminRole",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>系统管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>用户管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>产品管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>订单管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "5",
            "description": "<p>运营配置</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "6",
            "description": "<p>数据统计</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "7",
            "description": "<p>渠道管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "8",
            "description": "<p>投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "9",
            "description": "<p>兼职投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "10",
            "description": "<p>费用管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "11",
            "description": "<p>产品部</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "12",
            "description": "<p>推荐管理</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120002",
            "description": "<p>产品状态无法改变</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120003",
            "description": "<p>无法删除存在订单的产品</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130008",
            "description": "<p>分成金额不能大于剩余待打款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130009",
            "description": "<p>订单存续份额不足</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140015",
            "description": "<p>无法删除非在职人员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "150001",
            "description": "<p>无法删除存在订单的客户</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "190001",
            "description": "<p>付费名额不足</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "日志类型",
    "name": "LogType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "101",
            "description": "<p>页面访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "201",
            "description": "<p>登陆</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "202",
            "description": "<p>注册</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "301",
            "description": "<p>关注产品</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "302",
            "description": "<p>浏览产品</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "303",
            "description": "<p>查看附件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品费中的各类角色",
    "name": "ProductExpenseRole",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>理财师推荐人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>推荐人介绍人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>投顾介绍人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "5",
            "description": "<p>投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "6",
            "description": "<p>兼职投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "7",
            "description": "<p>产品部</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "8",
            "description": "<p>公司</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品费用类型",
    "name": "ProductExpensesType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>代理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>包销</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>裸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品费用结算类型",
    "name": "ProductSettlementType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>销售</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>发行</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>开发</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "8",
            "description": "<p>包销</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "16",
            "description": "<p>管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "32",
            "description": "<p>业绩</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "用户角色",
    "name": "Role",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "20",
            "description": "<p>创始人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "21",
            "description": "<p>管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "22",
            "description": "<p>产品管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "23",
            "description": "<p>理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "24",
            "description": "<p>合伙人</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "用户标签",
    "name": "Tag",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>内部用户</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>外部用户</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>推荐人</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/api/file/:fid",
    "title": "访问文件",
    "name": "AccessFile",
    "group": "File",
    "version": "1.0.0",
    "filename": "pcustomer/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/bonus",
    "title": "订单分红记录",
    "name": "OrderBonus",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"remark\": \"备注\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/list/:order_no/book_profit_graph",
    "title": "订单账面收益图",
    "name": "OrderBookProfits",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-01\",\n    \"book_profit\": {\n        \"order\": 300,   # 订单\n        \"bank\": 300,    # 银行\n        \"csi300\": 229   # 沪深300\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/book_profit_graph_million",
    "title": "订单账面收益图（百万）",
    "name": "OrderBookProfitsMillion",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org_id",
            "description": "<p>机构ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-01\",\n    \"book_profit\": {\n        \"order\": 300,   # 订单/元\n        \"bank\": 300,    # 银行/元\n        \"csi300\": 229   # 沪深300/元\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/cash_flow",
    "title": "订单现金流",
    "name": "OrderCashFlow",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "customer_no",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org",
            "defaultValue": "0",
            "description": "<p>是否查看整个机构,1:是,0:否</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: (如果返回None表示没有)",
          "content": "[{\n    \"date\": \"2017-06-01\",\n    \"distribution\": 199,    # 分配金额 / 元\n    \"redemption\": 199,  # 赎回 / 元\n    \"open\": 199,    # 定期开放 / 元\n    \"total\": 999,\n    \"detail\": [{\n        \"date\": \"2017-06-01\",\n        \"distribution\": 199,    # 分配金额 / 元\n        \"redemption\": 199,  # 赎回 / 元\n        \"open\": 199,    # 定期开放 / 元\n        \"total\": 999,\n    }]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/cash_flow/list",
    "title": "订单现金流列表",
    "name": "OrderCashFlowList",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "customer_no",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org",
            "defaultValue": "0",
            "description": "<p>是否查看整个机构,1:是,0:否</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "range",
            "description": "<p>时间段</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: (如果返回None表示没有)",
          "content": "[{\n    \"date\": \"2017-06-01\",\n    \"money\": 300, # 金额\n    \"source\": 1,      # 来源,1:分配,2:赎回,3:开放\n    \"currency\": 1,\n    \"order_no\": \"32132132121332132\",\n    \"product\": {\n        \"id\": 1,\n        \"name\": \"产品名\"\n    },\n    \"customer\": {\n        \"name\": \"客户名\",\n        \"no\": \"321321j3lj21kjl\"\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/distributions",
    "title": "订单分配记录",
    "name": "OrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额 / 元\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"finished\": true,   # 已分配\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/redeem",
    "title": "订单赎回记录",
    "name": "OrderRedeem",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额/元\n    \"redeem_value\": 1.4,    # 赎回时净值（浮动）\n    \"fee\": 13.31,   # 手续费\n    \"redemption_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n    \"remark\": \"备注\",\n    \"status\": 1,    # 状态1:等待，2：成功, 3:失败\n    \"market_value_change\": 1.33,    #市值变化\n    \"actual_profit\": 999,   # 实际收益\n    \"absolute_profit\": 999, # 绝对收益\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/{订单号}/raises",
    "title": "获取订单的风险记录",
    "name": "OrderRisks",
    "group": "Order",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-16T16:00:00\",  // 风险日期\n    \"type\": 1,      // 1:遭遇风险，2：解除风险\n    \"profit_effect\": true,        // 是否影响收益\n    \"principal_remain\": 80,       // 本金剩余%\n    \"remark\": \"备注\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/share_change",
    "title": "订单份额变更记录",
    "name": "OrderShareChange",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"update_time\": \"2017-01-01T17:00:00\",\n    \"remark\": \"备注\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {},\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"has_next\": false,\n        \"has_prev\": false,\n        \"items\": [],\n        \"page\": 1,\n        \"total\": 100\n    },\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pcustomer/apidoc.py",
    "groupTitle": "Structure"
  }
] });
