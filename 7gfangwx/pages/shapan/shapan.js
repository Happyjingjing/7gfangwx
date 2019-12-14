// pages/shapan/shapan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pointdata: [{
      "id": 10,
      "l_id": 595695,
      "name": "1#",
      "elevator_num": 2,
      "floor_num": 22,
      "households_num": 100,
      "left_x": "160",
      "top_y": "325",
      "floor_type": "高层",
      "la_id": "595720,595721,595722",
      "unit_num": 5,
      "deliver_date": "2018年",
      "start_date": "2017-06-17",
      "x": "160",
      "y": "325"
    }, {
      "id": 11,
      "l_id": 595695,
      "name": "2#",
      "elevator_num": 6,
      "floor_num": 35,
      "households_num": 215,
      "left_x": "174",
      "top_y": "377",
      "floor_type": "高层",
      "la_id": "595722,595723",
      "unit_num": 4,
      "deliver_date": "2018年",
      "start_date": "2017-06-17",
      "x": "174",
      "y": "377"
    }],
    poscenxy: [337, 350],
    shapanimg: "http://langfang.6gfang.com/upload/admin/20191104/b28733217ba421c72939f445b3de8a2f.jpg",

    currentidx: 0,
    winH: '',
    winW: '',
    lpswH: '',
    stageH: '',
    contenttop: '',
    contentleft: ''
  },

  swiperchange: function (e) {
    this.setData({
      currentidx: e.detail.current
    })
  },
  swbullettap: function (e) {
    // console.log(e);
    let idx = e.currentTarget.dataset.index;
    this.setData({
      currentidx: idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res, rect) => {
        this.setData({
          winH: res.windowHeight,
          winW: res.windowWidth
        })
      }
    })

    const query = wx.createSelectorQuery();
    query.select('.lpsw').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((res) => {
      // res[0].top // .lpsw节点的上边界坐标
      // res[1].scrollTop // 显示区域的竖直滚动位置
      this.setData({
        lpswH: res[0].height,
        stageH: this.data.winH - res[0].height,
        contenttop: (this.data.poscenxy[0] - (this.data.winH - res[0].height) / 2),
        contentleft: (this.data.poscenxy[1] - this.data.winW / 2)
      })
      // console.log('打印demo的元素的信息', res);
      // console.log(this.data.contenttop);
      // console.log(this.data.contentleft);
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