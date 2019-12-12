// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_id: "",
    nowurl: "",
    groupList: [{
        "id": 8,
        "l_id": 29,
        "gtitle": "紫竹湾商业广场，团购就有优惠哟！",
        "image_path": "http://langfang.7gfang.com/upload/admin/20191012/acf5d3b479b1a513b8edf4e338c4285b.jpeg",
        "group_people_num": 0,
        "start_time": "2019-10-19",
        "end_time": "2020-01-18"
      },
      {
        "id": 4,
        "l_id": 14,
        "gtitle": " 燕郊首尔甜城收官之作—方立方项目参加团购优惠活动信息",
        "image_path": "http://langfang.7gfang.com/upload/admin/20191011/55986917aca48ed709f8263eef759ac9.jpg",
        "group_people_num": 200,
        "start_time": "2019-10-17",
        "end_time": "2020-01-12"
      },
      {
        "id": 9,
        "l_id": 26,
        "gtitle": "燕郊现代服务产业园聚优惠团购活动开始啦！",
        "image_path": "http://langfang.7gfang.com/upload/admin/20191012/4bb7e328ab48d4eca47897ec571135db.jpg",
        "group_people_num": 0,
        "start_time": "2019-10-19",
        "end_time": "2020-01-12"
      }
    ],

    g_id: "",
    l_id: ""
  },
  grouplist: function () {
    // const params = {
    //   area_id: this.area_id
    // };
    // getGroupList(params).then(res => {
    //   this.groupList = res.data;
    //   // console.log(res.data);
    // });
  },
  groupinfo: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: "../groupinfo/groupinfo?id=" + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.grouplist();
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