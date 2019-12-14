//index.js
//引入api.js里需要用的的请求
import {
  getBanner,
  addAdvertisements
} from "../../utils/requst/api.js";

//获取应用实例
const app = getApp()

Page({

  //简单请求   特殊请求在这里的写法是一样的
  //简单请求
  getList: function () {
    let parmas = {
      // controller: 'ssss',
      // act: 'getlist',
      area_id: 0
      //这里是后台请求需要用到的参数
    }
    getBanner(parmas).then(function (res) {
      console.log(res)
      //这里写你网络请求的正常逻辑
    })


  },

  // 特殊请求
  frim: function () {
    let parmas = {
      launchDate: "12:00~14:00",
      timeSlot: "2019-08-31~2019-08-31",
      userId: "388",
      videLength: "15",
    };

    addAdvertisements(parmas).then(function (res) {
      console.log(res)
    })
  },

  data: {
    nowplace: "北京",
    nowurl: getApp().globalData.position.url,
    searchword: "",
    isseplace: false,
    newsList: [{
        "user_nickname": "喜欢房",
        "published_time": "10-21 16:36",
        "n_id": 177,
        "post_title": "大爱城二期园林斥资百万升级，筑造绿色生态人居",
        "img_path": [
          "http://langfang.7gfang.com/upload/admin/20191017/6cc6182a5305866cdd82d8c3a7d91293.jpg",
          "http://langfang.7gfang.com/upload/admin/20191017/6cc6182a5305866cdd82d8c3a7d91293.jpg"
        ],
        "img_num": 1
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
        "n_id": 163,
        "post_title": "好消息|燕郊盛恒时代即将在下周六（10月26日）盛大开盘！",
        "img_path": [],
        "img_num": 0
      }
    ],
    newsTop: {},
    nomore: 0,
    tuijlpList: [{
        "name": "燕郊",
        "title": "中兴和园",
        "is_top": 1,
        "price": 20000,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191012/8998be3c1cb86d703dde6e110b55936a.png",
        "category_area_id": "6",
        "sales_status": "现房",
        "l_id": 30,
        "category_like_val": [{
            "title": "宜居生态"
          },
          {
            "title": "低密居所"
          }
        ]
      },
      {
        "name": "燕郊",
        "title": "潮白生态城",
        "is_top": 0,
        "price": 16000,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191012/5ceb987167364108529034d6be7bc8b0.png",
        "category_area_id": "6",
        "sales_status": "现房",
        "l_id": 28,
        "category_like_val": [{
            "title": "小户型投资"
          },
          {
            "title": "宜居生态"
          }
        ]
      }
    ]
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  newhouse: function () {
    wx.navigateTo({
      url: '../newhouse/newhouse'
    })
  },
  news: function () {
    wx.navigateTo({
      url: '../news/news'
    })
  },
  group: function () {
    wx.navigateTo({
      url: '../group/group'
    })
  },
  activitys: function () {
    wx.navigateTo({
      url: '../activitys/activitys'
    })
  },
  video: function () {
    wx.navigateTo({
      url: '../video/video'
    })
  },

  getUserLocation: function () {
    wx.getSetting({
      success: (res) => {
        // console.log(JSON.stringify(res))
        // console.log(res.authSetting['scope.userLocation']);
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '喜欢房需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          this.getLocation();
        } else {
          //调用wx.getLocation的API
          this.getLocation();
        }
      }
    })
  },
  getLocation: function () {
    // 微信获得经纬度
    // var _this = this;
    wx.getLocation({
      type: 'gcj02', //gcj02 // wgs84
      success: (res) => {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.request({
          // url: 'http://api.map.baidu.com/geocoder/v2/?ak=rOo9NssC3FcUv9BsbHyumdv0sQYsiMnb&location=' + res.latitude + ',' + res.longitude + '&output=json',
          url: 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=sHZTomd7grslfP7sPKB8tRgT49FK9TEu&output=json&coordtype=gcj02&location=' + res.latitude + ',' + res.longitude,
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: (ops) => {
            // console.log(ops)
            // console.log('定位城市：', ops.data.result.addressComponent.city);
            this.setData({
              nowplace: ops.data.result.addressComponent.city
            })
          },
          fail: (resq) => {
            wx.showModal({
              title: '信息提示',
              content: '请求失败',
              showCancel: false,
              confirmColor: '#f37938'
            });
          },
          complete: function () {}
        })
      }
    })
  },
  onShow: function () {
    this.getUserLocation();
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },

  // 下拉刷新
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    // wx.showNavigationBarLoading();
    // var that = this;
    // wx.request({
    //   url: 'https://xxx/?page=0',
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/text'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       moment: res.data.data
    //     });
    //     console.log(that.data.moment);
    //     // 隐藏导航栏加载框
    //     wx.hideNavigationBarLoading();
    //     // 停止下拉动作
    //     wx.stopPullDownRefresh();
    //   }
    // })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // var that = this;
    // // 显示加载图标
    // wx.showLoading({
    //   title: '玩命加载中',
    // })
    // // 页数+1
    // page = page + 1;
    // wx.request({
    //   url: 'https://xxx/?page=' + page,
    //   method: "GET",
    //   // 请求头部
    //   header: {
    //     'content-type': 'application/text'
    //   },
    //   success: function (res) {
    //     // 回调函数
    //     var moment_list = that.data.moment;
    //     const oldData = that.data.moment;
    //     that.setData({
    //       moment: oldData.concat(res.data.data)
    //     })
    //     // 隐藏加载框
    //     wx.hideLoading();
    //   }
    // })

  },
  onLoad: function () {
    console.log(this.data.nowurl);
    getApp().globalData.position = {
      id: 3,
      url: "langfang"
    }
    this.setData({
      nowurl: getApp().globalData.position.url
    })
    console.log(this.data.nowurl);

    this.setData({
      newsTop: this.data.newsList.splice(0, 1)[0]
    })
    this.setData({
      newsList: this.data.newsList
    })
    // console.log(this.data.newsList);
    // console.log(this.data.newsList);
    // wx.request({
    //   url: 'http://api.7gfang.com/api/getbanners', //这里填写你的接口路径
    //   header: { //这里写你借口返回的数据是什么类型，这里就体现了微信小程序的强大，直接给你解析数据，再也不用去寻找各种方法去解析json，xml等数据了
    //     'Content-Type': 'application/json'
    //   },
    //   data: { //这里写你要请求的参数
    //     x: '',
    //     y: ''
    //   },

    //   success: function (res) {
    //     //这里就是请求成功后，进行一些函数操作
    //     console.log(res.data)
    //   }
    // })


    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})