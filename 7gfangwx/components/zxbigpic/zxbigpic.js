// components/zxbigpic/zxbigpic.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsTop: Object,
    imgArr: Array,
    title: String,
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