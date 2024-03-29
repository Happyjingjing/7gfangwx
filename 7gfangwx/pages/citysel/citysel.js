// pages/citysel/citysel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_id: "",
    nowurl: "",
    nowplace: "",
    nowcity: "",
    areadata: {},
    hotcityList: [],
    allcityList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/5dc68b9765dec35bd6e85f86/area",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data.data);
        this.setData({
          hotcityList: res.data.data.topAreaList,
          allcityList: res.data.data.areaList
        })
      }
    })
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