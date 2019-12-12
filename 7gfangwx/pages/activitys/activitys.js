// pages/activitys/activitys.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_id: "",
    nowurl: "",
    groupList: [{
        "la_id": 12,
        "already_sign_up": 0,
        "title": "燕郊1V1免费专车接送，随时看房",
        "start_time": 1571846400,
        "end_time": 1575109800,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191024/9fe8a439370738f55e758cb153ebdae6.jpg"
      },
      {
        "la_id": 8,
        "already_sign_up": 0,
        "title": "香河品牌楼盘看房团",
        "start_time": 1572656400,
        "end_time": 1572775200,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191024/3bee38be89f16bc8da553c6da7f14251.jpg"
      },
      {
        "la_id": 7,
        "already_sign_up": 0,
        "title": "大厂102国道沿线看房团",
        "start_time": 1572656400,
        "end_time": 1572775200,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191025/f2838d0250c8ba3ef7f07ab909b77f75.jpg"
      },
      {
        "la_id": 6,
        "already_sign_up": 0,
        "title": "大厂孔雀城品牌楼盘看房团",
        "start_time": 1572138000,
        "end_time": 1572172200,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191024/8d63feb92a13addf1f46da5e2add3b36.jpg"
      },
      {
        "la_id": 5,
        "already_sign_up": 1,
        "title": "燕郊北城看房团特惠线",
        "start_time": 1572138000,
        "end_time": 1572170400,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191025/24a71d65e2f18f0198ce5ea186dfee44.jpg"
      }
    ],

    g_id: "",
    l_id: ""
  },
  activityinfo: function (e) {
    let laid = e.currentTarget.dataset.laid;
    // console.log(laid);
    wx.navigateTo({
      url: "../activityinfo/activityinfo?id=" + laid
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