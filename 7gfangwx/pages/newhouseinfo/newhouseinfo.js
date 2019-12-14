// pages/newhouseinfo/newhouseinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infobj: {
      "info": {
        "explain": "",
        "developers": "香河宏大地产",
        "sale_address": "廊坊大厂回族自治县大香线与北辰西街交汇处",
        "longitude": "116.982066",
        "latitude": "39.900479",
        "address": "大香线与北辰西街交汇处",
        "deliver_date": "待定",
        "start_date": "2017-04-15",
        "price_explain": "",
        "sales_status": 3,
        "category_liked_id": "13",
        "category_property_id": "2",
        "category_area_id": "7",
        "metro_id": "",
        "click": 1,
        "create_time": "2019-11-02",
        "comment_num": 0,
        "intention_num": 0,
        "keyword": "",
        "mobile": "400-166-7676",
        "excerpt": "",
        "id": 96,
        "title": "华安丽景",
        "price": 15000,
        "img_path": "http://langfang.7gfang.com/upload/admin/20191102/287af192592010a9c8f56613c91bc05b.jpg"
      },
      "liked": [{
        "title": "品质住宅"
      }],
      "news": [{
          "id": 276,
          "l_id": 14,
          "published_time": "2019-11-04",
          "post_hits": 0,
          "post_title": "喜讯！甜城·39街区交房啦！",
          "post_excerpt": ""
        },
        {
          "id": 173,
          "l_id": 14,
          "published_time": "2019-10-21",
          "post_hits": 7,
          "post_title": "甜城方立方即将清盘 | 方寸距离,自由到底",
          "post_excerpt": ""
        },
        {
          "id": 146,
          "l_id": 14,
          "published_time": "2019-10-18",
          "post_hits": 8,
          "post_title": "首尔甜城·方立方小户型有啥优势？",
          "post_excerpt": ""
        }
      ],
      "apartments": [{
          "id": 374,
          "title": "D2户型",
          "l_id": 96,
          "apartment_shi": 2,
          "apartment_ting": 2,
          "apartment_wei": 1,
          "house_area": "90",
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/458dd62867b8b6aaa7de5891790b69aa.jpg"
        },
        {
          "id": 375,
          "title": "D3户型",
          "l_id": 96,
          "apartment_shi": 2,
          "apartment_ting": 2,
          "apartment_wei": 1,
          "house_area": "86.3",
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/458dd62867b8b6aaa7de5891790b69aa.jpg"
        },
        {
          "id": 376,
          "title": "D4户型",
          "l_id": 96,
          "apartment_shi": 1,
          "apartment_ting": 1,
          "apartment_wei": 1,
          "house_area": "40",
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/628e71cdaedea197419fe4c09e08521a.jpg"
        },
        {
          "id": 377,
          "title": "H2户型",
          "l_id": 96,
          "apartment_shi": 2,
          "apartment_ting": 2,
          "apartment_wei": 1,
          "house_area": "85",
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/458dd62867b8b6aaa7de5891790b69aa.jpg"
        },
        {
          "id": 378,
          "title": "H4户型",
          "l_id": 96,
          "apartment_shi": 2,
          "apartment_ting": 2,
          "apartment_wei": 1,
          "house_area": "85",
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/458dd62867b8b6aaa7de5891790b69aa.jpg"
        }
      ],
      "loupan_album": [{
          "id": 1165,
          "l_id": 96,
          "category": 1,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/526a2c06d49fc4a277ee70b205a85871.jpg",
          "loupan_album_val": "效果图"
        },
        {
          "id": 1166,
          "l_id": 96,
          "category": 1,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/287af192592010a9c8f56613c91bc05b.jpg",
          "loupan_album_val": "效果图"
        },
        {
          "id": 1167,
          "l_id": 96,
          "category": 1,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/257b72f00ea4530b4d5fb8981bf23e6e.jpg",
          "loupan_album_val": "效果图"
        },
        {
          "id": 1168,
          "l_id": 96,
          "category": 6,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191102/d5704fbffc954f8a504bc861fd798262.jpg",
          "loupan_album_val": "规划图"
        },
        {
          "id": 1210,
          "l_id": 96,
          "category": 1,
          "img_path": "http://langfang.7gfang.com/upload/admin/20191103/44bf46e0e1692d651cbf0b3c96ff6550.jpg",
          "loupan_album_val": "效果图"
        }
      ],
      "top_apartment": [{
        "id": 374,
        "l_id": 96,
        "apartment_shi": 2,
        "apartment_ting": 2,
        "apartment_wei": 1,
        "house_area": "90"
      }],
      "commentList": [{
          "content": "我觉得OK",
          "create_time": "2019-12-03 14:01",
          "full_name": "135****2536",
          "fullname": "132****6502"
        },
        {
          "content": "挺不错",
          "create_time": "2019-11-25 16:53",
          "full_name": "134****7636",
          "fullname": "133****6804"
        }
      ]
    },
    likeList: [],
    info: {},
    tophuxing: [],
    huxing: [],
    news: [],
    xiangce: [],
    pinglun: [],

    isxiangceshow: false,
    xiangceidx: 0,
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
    ],
    area_id: "",
    nowurl: "",
    nowplace: "",
    category_area_id: "",
    price_id: "",
    is_top: "",
    searchword: "",
    property_id: "",
    apartment_shi: [],

    title: '',
    isinfotan: false,
    url: "",

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
    shapanimg: "http://langfang.6gfang.com/upload/admin/20191104/b28733217ba421c72939f445b3de8a2f.jpg"

  },

  picxiangce: function () {
    wx.navigateTo({
      url: "../xiangce/xiangce"
    })
  },
  huxinginfo: function () {
    wx.navigateTo({
      url: "../xiangce/xiangce"
    })
  },
  pinglun: function () {
    wx.navigateTo({
      url: "../pinglun/pinglun"
    })
  },
  pingluntap: function () {
    wx.navigateTo({
      url: "../pingluntap/pingluntap"
    })
  },
  lpdongtai: function () {
    wx.navigateTo({
      url: "../lpdongtai/lpdongtai"
    })
  },
  newhousemoreinfo: function (e) {
    let lid = e.currentTarget.dataset.lid;
    wx.navigateTo({
      url: "../newhousemoreinfo/newhousemoreinfo?lid=" + lid
    })
  },
  shapan: function (e) {
    let lid = e.currentTarget.dataset.lid;
    wx.navigateTo({
      url: "../shapan/shapan?lid=" + lid
    })
  },
  tiptan: function (e) {
    let tantxt = e.currentTarget.dataset.txt;
    this.setData({
      title: tantxt,
      isinfotan: !this.data.isinfotan
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
    this.setData({
      likeList: this.data.infobj.liked,
      info: this.data.infobj.info,
      tophuxing: this.data.infobj.top_apartment,
      huxing: this.data.infobj.apartments,
      news: this.data.infobj.news,
      xiangce: this.data.infobj.loupan_album,
      pinglun: this.data.infobj.commentList,
      xiangceList: this.data.infobj.loupan_album

    })
    // console.log(this.data.huxing);

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