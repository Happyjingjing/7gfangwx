// pages/newhouse/newhouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    istopfix: false,
    isFixed: false, // bar浮动
    offsetTop: 0, // 触发bar浮动的阈值

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

    nodata: false,
    isseplace: true,

    quyudownshow: false,
    jiagedownshow: false,
    huxingdownshow: false,
    quyushow: true,
    onidx: 0,

    seltype: ["区域", "类型"],
    quyuList: [{
        "name": "大厂",
        "id": 7
      },
      {
        "name": "燕郊",
        "id": 6
      },
      {
        "name": "香河",
        "id": 9
      },
      {
        "name": "三河",
        "id": 44
      },
      {
        "name": "安次",
        "id": 45
      },
      {
        "name": "广阳",
        "id": 46
      },
      {
        "name": "固安",
        "id": 47
      },
      {
        "name": "霸州",
        "id": 48
      },
      {
        "name": "永清",
        "id": 49
      },
      {
        "name": "文安",
        "id": 91
      },
      {
        "name": "大城",
        "id": 92
      }
    ],
    typeList: [{
        "title": "公寓",
        "id": 1
      },
      {
        "title": "普通住宅",
        "id": 2
      },
      {
        "title": "仓库",
        "id": 3
      },
      {
        "title": "商业",
        "id": 6
      },
      {
        "title": "四合院",
        "id": 7
      },
      {
        "title": "别墅",
        "id": 8
      },
      {
        "title": "商住",
        "id": 9
      },
      {
        "title": "写字楼",
        "id": 10
      },
      {
        "title": "其他",
        "id": 11
      }
    ],
    priceList: [{
        "p_id": 1,
        "price": "0-10000"
      },
      {
        "p_id": 2,
        "price": "10000-15000"
      },
      {
        "p_id": 3,
        "price": "15000-20000"
      },
      {
        "p_id": 4,
        "price": "20000-30000"
      },
      {
        "p_id": 5,
        "price": "30000-100000"
      }
    ],
    huxingList: [{
        h_id: 0,
        jushi: "全部"
      },
      {
        h_id: 1,
        jushi: "一居"
      },
      {
        h_id: 2,
        jushi: "二居"
      },
      {
        h_id: 3,
        jushi: "三居"
      },
      {
        h_id: 4,
        jushi: "四居"
      },
      {
        h_id: 5,
        jushi: "五居以上"
      }
    ],
    qulion: 0,
    tylion: 0,
    prilion: 0,
    huxlion: [1, 0, 0, 0, 0, 0],

  },
  reset() {
    this.setData({
      istopfix: false,
      quyudownshow: false,
      jiagedownshow: false,
      huxingdownshow: false
    })
    // this.startScroll();
    // let lpUrl = this.$route.path;
    // let domain_pos = lpUrl.lastIndexOf("/");
    // let end = lpUrl.indexOf("."); //第一次出现
    // let params = lpUrl.substr(domain_pos + 1, end - domain_pos - 1); //list
    // if (params != "list") {
    //   this.$router.push({
    //     name: "newhouse"
    //   });
    // } else {
    //   this.$router.go(0);
    // }
  },
  define() {
    this.setData({
      istopfix: false,
      pagenum: 1,
      scroll: true,
      quyudownshow: false,
      jiagedownshow: false,
      huxingdownshow: false
    })
    // this.startScroll(); // 页面滚动开启；
    // if (this.lpmain != "") {
    //   // 判断是否选择了选项
    //   this.$router.push({
    //     name: "newhousesel",
    //     params: {
    //       lpsel: this.lpmain
    //     }
    //   }); // 跳转到动态路由
    // } else {
    //   this.$router.push({
    //     name: "newhouse"
    //   }); // 跳转到静态路由
    // }
  },
  // 区域btn
  qucli(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      onidx: index
    })
    if (index == 0) {
      this.setData({
        quyushow: true
      })
    } else if (index == 1) {
      this.setData({
        quyushow: false
      })
      this.getcategoryPropertyData();
    }
  },
  quyubtn(event) {
    let quyuid = event.currentTarget.dataset.itemid;
    // let area = "area";
    // if (quyuid == "01") {
    //   this.category_area_id = "";
    // } else {
    //   this.category_area_id = quyuid;
    // }
    // this.quyuid = quyuid;
    // this.quyulion();
    // this.getUrlCondition(area, this.category_area_id);
  },
  quyulion() {
    // this.quyuList.map((item, index) => {
    //   if (item.id == this.quyuid) {
    //     // console.log(item, index);
    //     this.qulion = index;
    //   }
    // });
  },
  typebtn(event) {
    let typeid = event.currentTarget.dataset.itemid;
    // let property = "property";
    // if (typeid == "00") {
    //   this.property_id = "";
    // } else {
    //   this.property_id = typeid;
    // }
    // this.typeid = typeid;
    // this.typelion();
    // this.getUrlCondition(property, this.property_id);
  },
  typelion() {
    // this.typeList.map((item, index) => {
    //   if (item.id == this.typeid) {
    //     // console.log(item, index);
    //     this.tylion = index;
    //   }
    // });
  },
  pricebtn(event) {
    let priceid = event.currentTarget.dataset.itemid;
    // let price = "price";
    // if (priceid == "00") {
    //   this.price_id = "";
    // } else {
    //   this.price_id = priceid;
    // }
    // this.priceid = priceid;
    // this.pricelion();
    // this.getUrlCondition(price, this.price_id);
  },
  pricelion() {
    // this.priceList.map((item, index) => {
    //   if (item.p_id == this.priceid) {
    //     this.prilion = index;
    //   }
    // });
  },
  huxingbtn(event) {
    let huxingid = event.currentTarget.dataset.itemid;
    // let huxing = "huxing";
    // if (huxingid == "0") {
    //   this.apartment_shi = [];
    //   console.log(this.apartment_shi);
    // } else {
    //   let keyshi = this.apartment_shi.indexOf(String(huxingid));
    //   if (keyshi != -1) {
    //     //找到了
    //     this.apartment_shi.splice(keyshi, 1); //删除重复的；
    //   } else {
    //     this.apartment_shi.push(String(huxingid)); //无重复添加；
    //   }
    // }
    // this.huxingid = huxingid;
    // this.getUrlCondition(huxing, this.huxingid);
    // this.huxinglion();
  },
  huxinglion() {
    // if (this.apartment_shi == "") {
    //   this.huxlion = [1, 0, 0, 0, 0, 0];
    // } else {
    //   this.huxlion = [0, 0, 0, 0, 0, 0];
    //   this.huxingList.map((item, index) => {
    //     this.apartment_shi.map((it, idx) => {
    //       if (item.h_id == it) {
    //         this.huxlion[index] = 1; // [1, 0, 0, 0, 0, 0]
    //       }
    //     });
    //   });
    // }
  },
  navtopfix(navtype) {
    // console.log(navtype);
    if (navtype == true) {
      this.setData({
        istopfix: true
      })
      // this.stopScroll();
    } else {
      this.setData({
        istopfix: false
      })
      // this.startScroll();
    }
  },
  getSonAreaListData() {
    // console.log(2);
    this.setData({
      jiagedownshow: false,
      huxingdownshow: false,
      quyudownshow: !this.data.quyudownshow
    })
    this.navtopfix(this.data.quyudownshow);
    // const params = {
    //   area_id: this.area_id
    // };
    // getSonAreaList(params).then(res => {
    //   this.quyuList = res.data;
    //   this.quyuList.unshift({
    //     name: "全部",
    //     id: "01"
    //   });
    //   this.quyulion();
    //   // this.seltype = ["区域", "类型"];
    // });
  },
  getcategoryPropertyData() {
    // categoryProperty().then(res => {
    //   this.typeList = res.data;
    //   this.typeList.unshift({
    //     title: "全部",
    //     id: "00"
    //   });
    //   this.typelion();
    //   // this.seltype = ["区域", "类型"];
    // });
  },
  getPriceListData() {
    this.setData({
      quyudownshow: false,
      huxingdownshow: false,
      jiagedownshow: !this.data.jiagedownshow
    })
    this.navtopfix(this.data.jiagedownshow);
    // getPriceList().then(res => {
    //   this.priceList = res.data;
    //   this.priceList.unshift({
    //     price: "不限",
    //     p_id: "00"
    //   });
    //   this.pricelion();
    // });
  },
  getapartmentListData() {
    this.setData({
      quyudownshow: false,
      jiagedownshow: false,
      huxingdownshow: !this.data.huxingdownshow
    })
    this.navtopfix(this.data.huxingdownshow);
  },
  fixblank() {
    // console.log(1);
    this.setData({
      quyudownshow: false,
      jiagedownshow: false,
      huxingdownshow: false,
      istopfix: false
    })

    // this.startScroll();
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