// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_id: "",
    nowurl: "",
    vid: null,
    videoList: [{
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 20,
        "user_nickname": "喜欢房",
        "published_time": "11-02 16:22",
        "title": "阳光公馆平层62平样板间",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20191017/8575fd8c8abdfca6804b9705d3df49ec.png",
        "post_hits": 12
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 17,
        "user_nickname": "喜欢房",
        "published_time": "11-02 16:17",
        "title": "嘉都阳光公馆87平样板间",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20191022/0b524217072d63e19d53492f4d241cb5.jpg",
        "post_hits": 10
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 13,
        "user_nickname": "喜欢房",
        "published_time": "11-02 16:06",
        "title": "阳光公馆48平LOFT样板间",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20191022/6afaed43e523bc208bdce607595ff006.jpg",
        "post_hits": 4
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 12,
        "user_nickname": "喜欢房",
        "published_time": "10-25 15:28",
        "title": "三湘印象·森林海尚城样板间视频",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20191025/21efecd4b6033aa7bf229e7868a9735e.jpg",
        "post_hits": 12
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 9,
        "user_nickname": "喜欢房",
        "published_time": "10-22 10:24",
        "title": "嘉都上东公馆LOFT样板间全景",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20191022/57e8896c1d377d6795fac65919d2dd7f.jpg",
        "post_hits": 9
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 5,
        "user_nickname": "喜欢房",
        "published_time": "10-21 16:30",
        "title": "测试视频",
        "thumbnail": "http://langfang.7gfang.com/upload/",
        "post_hits": 2
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 4,
        "user_nickname": "喜欢房",
        "published_time": "10-04 15:58",
        "title": "阿斯达",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20190905/841edda24cfd027b9c7c200653825788.jpg",
        "post_hits": 2
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 3,
        "user_nickname": "喜欢房",
        "published_time": "09-30 16:31",
        "title": "新华联YOYO新天地测试第三个视频",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20190902/6d540b2986e0aafac37a527a628061a8.jpg",
        "post_hits": 3
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 2,
        "user_nickname": "喜欢房",
        "published_time": "09-30 16:27",
        "title": ":新华联YOYO新天地测试第二个视频",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20190905/841edda24cfd027b9c7c200653825788.jpg",
        "post_hits": 2
      },
      {
        "avatar": "admin/20190521/841edda24cfd027b9c7c200653825788.jpg",
        "v_id": 1,
        "user_nickname": "喜欢房",
        "published_time": "09-30 16:33",
        "title": "新华联YOYO新天地第一个",
        "thumbnail": "http://langfang.7gfang.com/upload/admin/20190902/6d540b2986e0aafac37a527a628061a8.jpg",
        "post_hits": 1
      }
    ],
    videoTop: {},

    datacounts: 0,
    scroll: true,
    pagenum: 1,
    totalnum: 0,
    nomore: 0

  },
  videoinfo: function (e) {
    let vid = e.currentTarget.dataset.vid;
    wx.navigateTo({
      url: "../videoinfo/videoinfo?vid=" + vid
    })
  },
  getVideoListData() {
    // const params = {
    //   area_id: this.area_id
    // };
    // getVideoList(params).then(res => {
    //   if (this.pagenum == 1) {
    //     this.videoList = res.data;
    //     this.videoTop = this.videoList.splice(0, 1)[0];
    //   } else {
    //     this.videoList = [...this.videoList, ...res.data];
    //     this.scroll = true;
    //   }
    //   ++this.pagenum;
    //   // console.log(this.videoTop, this.videoList);
    // });
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