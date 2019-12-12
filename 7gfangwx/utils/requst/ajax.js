// Promise封装请求   options是一个对象里面的属性有url, data, method, load
//url 对应请求路径  data对象请求的参数  method对应请求方法  load对应是否显示加载中 1显示 0不显示
function fetch(options) {
  if (options.load == 1) {
    wx.showLoading({
      mask: true,
      title: '加载中'
    })
  }

  return new Promise((resolve, reject) => {
    // 所有的请求加上固定的参数  区分是简单请求还是特殊请求
    //如果options.data是对象 表示是简单请求
    if (Object.prototype.toString.call(options.data) === '[Object Object]') {
      options.data.auth_token = '';
      options.data.uuid = '';
    }
    //如果是json字符串的是特殊请求
    if (Object.prototype.toString.call(options.data) == "[object String]") {
      let obj = JSON.parse(options.data)
      obj.auth_token = '';
      obj.uuid = '';
      options.data = JSON.stringify(obj)
    }
    console.log(options.data)

    wx.request({
      url: options.url,
      data: options.data,
      header: {
        "content-type": "application/json"
      },

      // header: {
      //   "application/x-www-form-urlencoded;charset=utf-8"
      // },

      method: options.method,
      success: function (res) {
        // console.log(res)
        options.load == 1 ? wx.hideLoading() : '';
        //如果没有登录的操作
        if (res.data.code == 'login') {
          console.log('请先登录')
          return;
        }
        if (res.data.code != 1) {
          wx.showToast({
            title: res.errMsg,
            mask: "true",
            icon: 'none',
            duration: 3000
          })
          return;
        }

        resolve(res); //把请求到的数据发到引用请求的地方
      },
      fail: function (err) {
        reject(err)
        options.load == 1 ? wx.hideLoading() : ''
        wx.showToast({
          title: "网络连接超时",
          icon: 'none',
          duration: 3000,
        })
      }
    })
  });
}


module.exports = {
  fetch
}