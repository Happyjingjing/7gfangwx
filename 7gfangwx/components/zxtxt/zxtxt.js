// components/zxtxt/zxtxt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    username: String,
    datetime: String,
    nid: Number,
    nowurl: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    newsinfo() {
      console.log(this.properties.nid)
      wx.navigateTo({
        url: '../newsinfo/newsinfo?id=' + this.properties.nid
      })
    },
  }
})