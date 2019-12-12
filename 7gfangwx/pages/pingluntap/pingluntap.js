// pages/pingluntap/pingluntap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    niming: false
  },
  nimingtap: function () {
    this.setData({
      niming: !this.data.niming
    })
  },

  updataimg: function () {
    wx.chooseImage({
      count: 3,
      sizeType: 'original',
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        // var tempFilePaths = res.tempFilePaths;
        console.log(res);
        // wx.uploadFile({
        //   url: getApp().globalData.clientUrl + '/uploadAvatarUrl', //里面填写你的上传图片服务器API接口的路径 
        //   filePath: tempFilePaths[0], //要上传文件资源的路径 String类型 
        //   name: 'avatar', //按个人情况修改，文件对应的 key,开发者在服务器端通过这个 key 可以获取到文件二进制内容，(后台接口规定的关于图片的请求参数)
        //   header: {
        //     "Content-Type": "multipart/form-data" //记得设置
        //   },
        //   formData: {
        //     //和服务器约定的token, 一般也可以放在header中
        //     'session_token': wx.getStorageSync('session_token')
        //   },
        //   success: function (res) {
        //     //当调用uploadFile成功之后，再次调用后台修改的操作，这样才真正做了修改头像
        //     if (res.statusCode = 200) {
        //       // var data = res.data
        //       // var statusCode = res.statusCode
        //       // console.log("返回值1" + data);
        //       // console.log("返回值2" + statusCode)
        //       //这里调用后台的修改操作， tempFilePaths[0],是上面uploadFile上传成功，然后赋值到修改这里。
        //       wx.request({
        //         url: getApp().globalData.clientUrl + '/update?avatar=' + tempFilePaths[0], //真正修改操作,填写你们修改的API
        //         header: {
        //           'content-type': 'application/json',
        //         },
        //         method: 'POST',
        //         success: function (res) {
        //           if (res.data.code == 200) {
        //             wx.showToast({
        //               title: '修改成功',
        //               icon: 'success',
        //               duration: 2500
        //             })

        //             //wx.uploadFile自已有一个this，我们刚才上面定义的var _this = this 把this带进来
        //             _this.setData({
        //               "user.avatar": tempFilePaths[0]
        //             });
        //           }
        //         },
        //       })
        //     }
        //   }

        // })
      },

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