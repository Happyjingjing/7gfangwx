Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoDetail: '',
    start: 0,
    current: 0,
    startTouch: '',
    startNum: '0',
    //其中的 视频url(videoUrl) 封面url(videoImageUrl) 头像url(headUrl) 的话大家自己填上就行
    videoList: [{
      "callState": "1",
      "projectContent": "老鼠炸飞了(ಡωಡ)hiahiahia",
      "employerId": "4224f6e674e346b4a675df4131253fbc",
      "workCity": "北京市",
      "workProvince": "北京市",
      "videoUrl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4",
      "projectState": "2",
      "workCounty": "朝阳区",
      "quickProjectWorkerTagName": "电工,接线,砌墙,钢结构",
      "headUrl": "",
      "projectId": "6f1121611a17418cb5d3860b551c9e19",
      "createDate": "2019-08-22 19:06:39",
      "reallyName": "大发发",
      "videoImageUrl": ""
    }, {
      "callState": "1",
      "projectContent": "哒哒哒任汝芬",
      "employerId": "4224f6e674e346b4a675df4131253fbc",
      "workCity": "北京市",
      "workProvince": "北京市",
      "videoUrl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4",
      "projectState": "2",
      "workCounty": "朝阳区",
      "quickProjectWorkerTagName": "工装,图纸,塔吊,外墙保温,刮腻子",
      "headUrl": "",
      "projectId": "d3b43f21b84b4a75a3321e478f73161f",
      "createDate": "2019-08-22 10:00:11",
      "reallyName": "大发发",
      "videoImageUrl": ""
    }, {
      "callState": "1",
      "projectContent": "韩剧发给他的的",
      "employerId": "4224f6e674e346b4a675df4131253fbc",
      "workCity": "北京市",
      "workProvince": "北京市",
      "videoUrl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4",
      "projectState": "2",
      "workCounty": "朝阳区",
      "quickProjectWorkerTagName": "铺地板,杂工,管理",
      "headUrl": "",
      "projectId": "d0e07614d880472bb42937b5688a852f",
      "createDate": "2019-08-22 09:59:30",
      "reallyName": "大发发",
      "videoImageUrl": ""
    }, {
      "callState": "1",
      "projectContent": "感天动地凤阳花鼓过",
      "employerId": "4224f6e674e346b4a675df4131253fbc",
      "workCity": "北京市",
      "workProvince": "北京市",
      "videoUrl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4",
      "projectState": "2",
      "workCounty": "朝阳区",
      "quickProjectWorkerTagName": "外架,浇筑,污水处理,打下手,工装",
      "headUrl": "",
      "projectId": "ec16ee6660fe4b1081135897eca2b72a",
      "createDate": "2019-08-22 09:59:02",
      "reallyName": "大发发",
      "videoImageUrl": ""
    }, {
      "callState": "1",
      "projectContent": "大地飞歌几句话",
      "employerId": "4224f6e674e346b4a675df4131253fbc",
      "workCity": "北京市",
      "workProvince": "北京市",
      "videoUrl": "http://langfang.7gfang.com/upload/default/20190814/d02b12a70cebf0b3817b6334fcaafdb7.mp4",
      "projectState": "2",
      "workCounty": "朝阳区",
      "quickProjectWorkerTagName": "管理,家装,工装,装修,维修,图纸,支模,外墙,塔吊,外墙保温",
      "headUrl": "",
      "projectId": "2cee997c843d419da30ca7d2a4aca955",
      "createDate": "2019-08-22 09:58:25",
      "reallyName": "大发发",
      "videoImageUrl": ""
    }], //接口返回的视频列表。
    touch: false,
    touchStartTime: 0, //触摸开始时间
    touchEndTime: 0, // 触摸结束时间
    lastTapTime: 0, // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null,
    switchTo: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var listTem = that.data.videoList;
    for (var i = 0; i < listTem.length; i++) {
      var arr = (listTem[i].quickProjectWorkerTagName).split(',')
      // console.log(arr)
      listTem[i].tagnamesArr = arr;
    }
    that.setData({
      videoList: listTem
    })
    that.dataList();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('videoplayer');
    this.setData({
      updateState: true
    })
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
  dataList: function () { //加载数据
    var that = this;
    wx.request({
      url: '', //把这里换成自己的接口地址
      data: {
        userId: '',
        start: '',
        limit: 5
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
        // console.log(res.data)
        var listTem = that.data.videoList;
        var dataList = res.data;
        //添加新任务列表
        that.setData({
          videoList: listTem.concat(dataList)
        })
        if (res.data.length < 5) {
          that.setData({
            startNum: '0',
            current: 0
          })
        }
      }
    })
  },
  // 下面主要模仿滑动事件
  touchstart: function (e) {
    this.setData({
      touchStartTime: e.timeStamp,
      showGuide: false
    })
    let startTouch = e.changedTouches[0]
    this.setData({
      startTouch: startTouch,
      touch: false
    })
  },
  touchmove: function (e) {
    let Y = e.changedTouches[0].pageY - this.data.startTouch.pageY;
  },
  touchend: function (e) {
    this.setData({
      touchEndTime: e.timeStamp
    })
    this.getDirect(this.data.startTouch, e.changedTouches[0])
  },
  touchcancel: function (e) {
    this.getDirect(this.data.startTouch, e.changedTouches[0])
  },
  // 计算滑动方向
  getDirect: function (start, end) {
    var X = end.pageX - start.pageX,
      Y = end.pageY - start.pageY;
    if (Math.abs(X) > Math.abs(Y) && X > 0) {
      console.log("left 2 right");
    } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
      console.log("right 2 left");
    } else if (Math.abs(Y) > Math.abs(X) && Y > 40) {
      if (this.data.current > 0) {
        this.setData({
          touch: true,
          transitionOver: false
        })
        this.pre()
      } else {
        this.setData({
          current: 0
        })
      }
    } else if (Math.abs(Y) > Math.abs(X) && Y < -40) {
      if (this.data.current < this.data.videoList.length - 2) {
        this.setData({
          touch: true
        })
        this.next()
      } else {
        var startNum = parseInt(this.data.startNum) + 5;
        this.setData({
          startNum: startNum,
        })
        this.dataList();
        this.setData({
          current: this.data.videoList.length - 1
        })
      }
    }
  },
  // 播放上一个
  pre: function () {
    this.setData({
      current: this.data.current - 1,
    })
  },

  // 播放下一个
  next: function () {
    this.setData({
      current: this.data.current + 1,
    })
  },
  //点击暂停/开始
  videoTap: function () {
    //获取video
    this.videoContext = wx.createVideoContext('videoplayer')
    if (this.data.play) {
      //开始播放
      this.videoContext.play() //开始播放
      this.setData({
        play: false
      })
    } else {
      //当play==false 显示图片 暂停
      this.videoContext.pause() //暂停播放
      this.setData({
        play: true
      })
    }
  },
  //播放条时间改表触发
  videoUpdate(e) {
    if (this.data.updateState) { //判断拖拽完成后才触发更新，避免拖拽失效
      let sliderValue = e.detail.currentTime / e.detail.duration * 100;
      this.setData({
        sliderValue: sliderValue,
        duration: e.detail.duration
      })
    }
  },
  sliderChanging(e) {
    this.setData({
      updateState: false //拖拽过程中，不允许更新进度条
    })
  },
  //拖动进度条触发事件
  sliderChange(e) {
    if (this.data.duration) {
      this.videoContext.seek(e.detail.value / 100 * this.data.duration); //完成拖动后，计算对应时间并跳转到指定位置
      this.setData({
        sliderValue: e.detail.value,
        updateState: true //完成拖动后允许更新滚动条
      })
    }
  },
})