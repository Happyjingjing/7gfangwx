// pages/activityinfo/activityinfo.js
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
      "set_address": "6号线潞城站B口",
      "title": "燕郊1V1免费专车接送，随时看房",
      "banner": "http://langfang.7gfang.com/upload/admin/20191024/9fe8a439370738f55e758cb153ebdae6.jpg",
      "start_time": "1970.01.01",
      "end_time": "01.01",
      "mobile": "400-166-7676",
      "already_sign_up": 0,
      "activity_time": "2019年12月04日 09:00",
      "loupaninfo": [{
          "price": 15500,
          "l_id": 5,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191013/344feb06b15ebc5ed32176d227a408b6.jpg",
          "title": "嘉都·阳光公馆"
        },
        {
          "price": 17500,
          "l_id": 14,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191011/5cf85d61c84a5a877776475adfcadbfd.jpg",
          "title": "首尔甜城方立方"
        },
        {
          "price": 17500,
          "l_id": 16,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191011/2fcb46554197bacbecb2fbb82562bf9c.png",
          "title": "盛恒时代"
        },
        {
          "price": 18000,
          "l_id": 21,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191011/b194cbd0776a16eb4c9fd30967fdbf0f.jpg",
          "title": "汇福樾澜湾·西派国际"
        },
        {
          "price": 15000,
          "l_id": 22,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191011/27c624e4b6704d3b5db84e2b1249659c.jpg",
          "title": "三湘印象森林海尚城"
        },
        {
          "price": 16000,
          "l_id": 26,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191012/9751b3a3b7f0640fa860cf714d91ecb6.png",
          "title": "京东CBD"
        },
        {
          "price": 17000,
          "l_id": 29,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191012/6222b95ff4618a985b6980e65612f732.jpg",
          "title": "紫竹湾商业广场"
        },
        {
          "price": 20000,
          "l_id": 47,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191016/9b36bce6ebc3ebb776151ec1d46b66d8.jpg",
          "title": "天洋城4代"
        }
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