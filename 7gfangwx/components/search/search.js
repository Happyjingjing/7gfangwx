// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchword: String,
    isseplace: Boolean,
    nowplace: {
      type: String,
      default: "北京"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  onload: function () {
    console.log(this.data.isseplace);
  },
  methods: {
    citysel: function () {
      wx.navigateTo({
        url: "../../pages/citysel/citysel"
      })
    }
  },

})