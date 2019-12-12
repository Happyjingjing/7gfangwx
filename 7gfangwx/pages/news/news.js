// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_id: "",
    nowurl: "",
    newsTop: {
      "user_nickname": "喜欢房",
      "published_time": "10-21 16:36",
      "n_id": 17,
      "post_title": "大爱城二期园林斥资百万升级，筑造绿色生态人居",
      "img_path": [
        "http://langfang.7gfang.com/upload/admin/20191017/6cc6182a5305866cdd82d8c3a7d91293.jpg",
        "http://langfang.7gfang.com/upload/admin/20191017/6cc6182a5305866cdd82d8c3a7d91293.jpg"
      ],
      "img_num": 1
    },
    newsList: [{
        "user_nickname": "喜欢房",
        "published_time": "10-21 16:36",
        "n_id": 177,
        "post_title": "大爱城二期园林斥资百万升级，筑造绿色生态人居",
        "img_path": [
          "http://langfang.7gfang.com/upload/admin/20191017/6cc6182a5305866cdd82d8c3a7d91293.jpg",
          "http://langfang.7gfang.com/upload/admin/20191017/6cc6182a5305866cdd82d8c3a7d91293.jpg"
        ],
        "img_num": 2
      },
      {
        "user_nickname": "喜欢房",
        "published_time": "10-21 15:36",
        "n_id": 173,
        "post_title": "甜城方立方即将清盘 | 方寸距离,自由到底",
        "img_path": [
          "http://langfang.7gfang.com/upload/admin/20191017/0458e30b3257f0c9a90cd8fb60e2a3e1.jpg",
          "http://langfang.7gfang.com/upload/admin/20191017/0458e30b3257f0c9a90cd8fb60e2a3e1.jpg",
          "http://langfang.7gfang.com/upload/admin/20191017/0458e30b3257f0c9a90cd8fb60e2a3e1.jpg"
        ],
        "img_num": 3
      },
      {
        "user_nickname": "喜欢房",
        "published_time": "10-20 10:28",
        "n_id": 163,
        "post_title": "好消息|燕郊盛恒时代即将在下周六（10月26日）盛大开盘！",
        "img_path": [
          "http://langfang.7gfang.com/upload/admin/20191011/2fcb46554197bacbecb2fbb82562bf9c.png"
        ],
        "img_num": 1
      },
      {
        "user_nickname": "喜欢房",
        "published_time": "10-20 10:28",
        "n_id": 165,
        "post_title": "好消息|燕郊盛恒时代即将在下周六（10月26日）盛大开盘！",
        "img_path": [],
        "img_num": 0
      }
    ],
    datacounts: 0,
    scroll: true,
    pagenum: 1,
    totalnum: 0,
    nomore: 0
  },
  getSpecialData() {
    // const params = {
    //   area_id: this.area_id,
    //   page: this.pagenum
    // };
    // getNewsList(params).then(res => {
    //   if (this.pagenum == 1) {
    //     this.datacounts = res.count;
    //     this.newsTop = res.data.topnew;
    //     this.newsList = res.data.list;
    //     this.totalnum = parseInt(this.datacounts / 10);
    //   } else {
    //     this.newsList = [...this.newsList, ...res.data.list];
    //     this.scroll = true;
    //   }
    //   ++this.pagenum;
    //   // console.log(this.pagenum);
    // });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSpecialData();
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