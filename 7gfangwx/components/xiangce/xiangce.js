// components/xiangce/xiangce.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    xiangceList: Array,
    idx: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentidx: 2
  },
  observers: { //观察者：属性监听
    'idx' (idx) {
      this.setData({
        currentidx: idx
      })
      // console.log(this.data.currentidx);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperchange: function (e) {
      this.setData({
        currentidx: e.detail.current
      })
      // console.log(e);
    }
  }
})