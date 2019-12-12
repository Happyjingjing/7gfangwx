// components/tuijianlp/tuijianlp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tuijlpList: Array,
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
    lpinfo: function (e) {
      let lid = e.currentTarget.dataset.lid;
      console.log(lid);
      wx.navigateTo({
        url: "../newhouseinfo/newhouseinfo?lid=" + lid
      })
    }
  }
})