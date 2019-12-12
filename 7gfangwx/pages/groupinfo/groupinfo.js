// pages/groupinfo/groupinfo.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    // groupinfo: {},
    lid: "",

    isinfotan: false,
    url: "",
    groupinfo: {
      "keyword": "",
      "excerpt": "",
      "price_explain": "",
      "price": 17000,
      "id": 8,
      "l_id": 29,
      "sale_address": "燕郊燕顺路与神威北路交叉口路北",
      "renovation_status": "1",
      "property_right": "1",
      "property_price": "3.30",
      "property_company": "紫竹湾物业服务公司",
      "start_date": "2018-05-01",
      "deliver_date": "即买即入住",
      "category_property_id": "1",
      "category_liked_id": "1,2",
      "content": "<p style=\"white-space: normal; text-indent: 2em;\">紫竹湾商业广场现在市场价格是17500元/平米，团购价格17000元/平米，欲购从速，现在报名就有好礼相送。</p><p style=\"white-space: normal; text-indent: 2em;\">售楼处热线：<strong><span style=\"color: rgb(255, 0, 0);\">400-166-7676</span></strong>，期待您的来电。</p><p><br/></p>",
      "click": 85,
      "title": "紫竹湾商业广场，团购就有优惠哟！",
      "image_path": "http://langfang.7gfang.com/upload/admin/20191012/acf5d3b479b1a513b8edf4e338c4285b.jpeg",
      "group_price": "",
      "sell_house_num": 0,
      "group_people_num": 0,
      "address": "燕顺路东侧创意谷街南侧",
      "market_value": "17500",
      "end_time": "2020-01-18",
      "mobile": "400-166-7676",
      "start_time": "2019-10-19",
      "category_liked_val": [{
          "title": "打折优惠"
        },
        {
          "title": "小户型投资"
        }
      ],
      "category_property_val": [{
        "title": "公寓"
      }],
      "renovation_status_val": [
        "毛坯"
      ],
      "property_right_val": [
        "40年"
      ]
    },
    title: "团购报名"

  },
  lijibm: function () {
    this.setData({
      isinfotan: true
    })
  },
  infotan: function (e) {
    this.setData({
      isinfotan: e.detail.isinfotan
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    WxParse.wxParse('content', 'html', this.data.groupinfo.content, this, 0);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})