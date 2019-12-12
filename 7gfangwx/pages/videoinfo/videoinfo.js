// pages/videoinfo/videoinfo.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '', //导航栏 中间的标题
      backgroundcolor: ''
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,

    play: true,
    playindex: 0,
    videoList: [{
        "back": "red",
        "videourl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4"
      }, {
        "back": "yellow",
        "videourl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4"
      },
      {
        "back": "blue",
        "videourl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4"
      }
    ]
  },
  swiperchange: function (e) {
    //暂停正在播放的视频
    let videoContextPrev = wx.createVideoContext(this.data.playindex + '', this);
    videoContextPrev.pause();
    this.setData({
      play: true
    })

    //播放当前视频
    this.setData({
      playindex: e.detail.current
    })
    let videoContext = wx.createVideoContext(this.data.playindex + '', this);
    setTimeout(function () {
      videoContext.play();
    }, 500)
    this.setData({
      play: false
    })
    // console.log(1);
  },
  videotap: function (e) {

    if (this.data.play) {
      var videoContext = wx.createVideoContext(this.data.playindex + '', this) //这里对应的视频id
      videoContext.play();
      this.setData({
        play: false
      })
    } else {
      var videoContext = wx.createVideoContext(this.data.playindex + '', this) //这里对应的视频id
      videoContext.pause();
      this.setData({
        play: true
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.height);
    this.setData({
      playindex: options.vid
    })
    // console.log(2);
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