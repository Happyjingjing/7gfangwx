// components/baomingtan/baomingtan.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    isinfotan: Boolean
  },
  // closeinfo: function () {
  //   this.triggerEvent('infotan', {
  //     isinfotan: false
  //   });
  //   this.setData({
  //     ison: false,
  //     username: "",
  //     telval: ""
  //   })
  // },
  /**
   * 组件的初始数据
   */
  data: {
    ison: false,
    telval: "",
    username: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isoncli: function () {
      this.setData({
        ison: !this.data.ison
      })
    },
    xieyi: function () {
      wx.navigateTo({
        url: "../fwxy/fwxy"
      })
    },
    closeinfo: function () {
      this.setData({
        ison: false,
        username: "",
        telval: ""
      })
      this.triggerEvent('infotan', {
        isinfotan: false
      });
    }
  }
})