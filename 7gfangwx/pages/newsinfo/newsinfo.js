// pages/newsinfo/newsinfo.js
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    area_id: "",
    nowurl: "",
    nid: null,
    newsinfo: {
      "more": "{\"photos\":[{\"url\":\"admin\\/20191017\\/6cc6182a5305866cdd82d8c3a7d91293.jpg\",\"name\":\"2711241788f86a6e728200.jpg\"}]}",
      "n_id": 177,
      "user_nickname": "喜欢房",
      "published_time": "2019-12-03 10:24",
      "post_title": "大爱城二期园林斥资百万升级，筑造绿色生态人居",
      "post_content": "\n<p style=\"text-indent: 2em;\">园林景观是家的延伸，每一处景色都是生活的一部分。大爱城以业主舒适生活为要旨，贴心为业主匠造多重立体园林。</p>\n<p><br></p>\n<p style=\"text-indent: 2em;\">大爱城二期园林采用多轴景观模式打造，设计双水系及三大中心景观——北部中心景观、中央水景景观及南部中心水景景观。</p>\n<p style=\"text-indent: 2em;\"><strong>—<span style=\"text-indent: 2em;\">双水系设计</span></strong><span style=\"text-indent: 2em;\">，贯穿整个社区，水系和绿植相呼应，动静结合，在沿水系景观中巧妙利用木栈桥，业主可以迎着微风、沿宁静的水边栈道、或绿树成荫的幽静进行休闲、健身等健康活动，每一次呼吸、运动，都如同度假般惬意。</span><br></p>\n<p style=\"text-indent: 2em;\"><strong><span style=\"text-indent: 2em;\">—</span></strong><strong><span style=\"text-indent: 2em;\">北部中心景观</span></strong><span style=\"text-indent: 2em;\">，设有亭廊、小广场、游步道等，专为北部业主考虑，离家更近。</span><br></p>\n<p style=\"text-indent: 2em;\"><strong><span style=\"text-indent: 2em;\">—</span></strong><strong><span style=\"text-indent: 2em;\">中央水景景观及南部中心水景景观</span></strong><span style=\"text-indent: 2em;\">，设有亭廊、野餐区、人行栈桥、湿地、沿河游步道等，丰富休闲设施，让业主生活不止平凡，更多了一些仪式感，每天生活都不一样。</span><br></p>\n<p style=\"text-indent: 2em; text-align: center;\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/e4e1eb361f924b3fe7c6a31790608441.jpg\" title=\"微信图片_20191021163004.jpg\" alt=\"微信图片_20191021163004.jpg\" width=\"726\" height=\"450\" style=\"width: 726px; height: 450px;\"></p>\n<p style=\"text-indent: 2em; text-align: center;\">（大爱城二期鸟瞰图）</p>\n<p><br></p>\n<p style=\"text-indent: 2em;\"><strong>二期北侧为体育主题公园</strong>，以景观包围密林小径，业主可以在幽静空间漫步，静谧的空间更加适合放空自己。</p>\n<p style=\"text-indent: 2em;\">另考虑到业主休闲生活，将园区功能划分老年活动区、成人健身区、灯光篮球场、羽毛球场、网球场、乒乓球场，功能齐全，适合全家庭运动，父母在这里能认识到更多的朋友，年轻人也能在这里尽情挥洒汗水，拂去生活的烦恼。</p>\n<p style=\"text-indent: 2em; text-align: center;\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/a9ff5d376f4706410925f9aafb3c3f74.jpg\" title=\"微信图片_20191021163025.jpg\" alt=\"微信图片_20191021163025.jpg\" width=\"550\" height=\"350\" style=\"width: 550px; height: 350px;\"></p>\n<p style=\"text-indent: 2em; text-align: center;\">（示意图）</p>\n<p><br></p>\n<p style=\"text-indent: 2em;\">大爱城二期大部分已交付，但为提升业主生活品质，在近期斥资百万，对二期园林进行优化升级，在优秀之上更加优秀。大爱城秉持对社会的责任感，致力于为业主提供更好的服务，并以更高的标准为业主构筑生活。</p>\n<p style=\"text-align:center\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/9b4292378e80467f0114fc2560aee84b.jpg\" title=\"微信图片_20191021163029.jpg\" alt=\"微信图片_20191021163029.jpg\" width=\"600\" height=\"350\" style=\"width: 600px; height: 350px;\"></p>\n<p style=\"text-indent: 2em; text-align: center;\">（示意图）</p>\n<p><br></p>\n<p style=\"text-indent: 2em;\">在人们追求更多的利益时，我们选择提升业主居住品质，将原规划的车位调整成园林，增加健身广场、儿童休闲广场等，丰富居民的休闲生活，优化园林的功能实用性。大爱城本持大爱精神为业主服务, 会全力以赴为业主提升生活品质。</p>\n<p><br></p>\n<p style=\"text-indent: 2em; text-align: center;\"><strong>景观升级</strong></p>\n<p style=\"text-indent: 2em; text-align: center;\"><strong>处处都是拍照打卡圣地</strong></p>\n<p style=\"text-indent: 2em;\">本次园林优化升级，将车位空间改造为园林绿化，从社区景观的实用性和观赏性双重角度优化，营造出独具绿色生态特色的现代居住杰作，多重景观层层递进，打破传统居住的压抑感。</p>\n<p style=\"text-indent: 2em; text-align: center;\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/787afcdd6253a77e6d1564046aec5b93.jpg\" title=\"微信图片_20191021163032.jpg\" alt=\"微信图片_20191021163032.jpg\" width=\"726\" height=\"450\" style=\"width: 726px; height: 450px;\"></p>\n<p style=\"text-indent: 2em; text-align: center;\">（效果图）</p>\n<p><br></p>\n<p><br></p>\n<p style=\"text-indent: 2em;\">巧妙组合乔木、灌木、草花等，高低错落的景观植物，疏密有致，丰富了景观的层次感，并结合植物的季节性，精心选取不同季节植物搭配，一年四季生活四周都被绿色植物环绕，处处都是拍照打卡圣地，随手一拍，就如杂志大片一样，高级感十足。</p>\n<p><br></p>\n<p style=\"text-indent: 2em; text-align: center;\"><strong>功能升级</strong></p>\n<p style=\"text-indent: 2em; text-align: center;\"><strong>家里的第二会客室</strong></p>\n<p style=\"text-indent: 2em;\">在楼宇间新增观花小径和小广场，为业主提供交流的场地，如同家里的第二会客室。环境优美，清晨和邻居相约散散步、遛遛狗，或谈论最近发生的时事，开阔眼界；傍晚时分，带上家人，在这里聊聊一天的工作、和生活的烦恼，在繁忙中，留出与家人沟通的时间，让彼此间关系更加融洽。</p>\n<p style=\"text-indent: 2em; text-align: center;\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/3847a20cef84b1711ba8c2a427028ecf.jpg\" title=\"微信图片_20191021163043.jpg\" alt=\"微信图片_20191021163043.jpg\" width=\"726\" height=\"450\" style=\"width: 726px; height: 450px;\"></p>\n<p style=\"text-indent: 2em; text-align: center;\">（效果图）</p>\n<p><br></p>\n<p style=\"text-indent: 2em; text-align: center;\"><strong>空间升级</strong></p>\n<p style=\"text-indent: 2em; text-align: center;\"><strong>家门口的“小公园”</strong></p>\n<p style=\"text-indent: 2em;\">大爱城二期将楼前的车位改造为健身广场、儿童休闲广场以及休闲广场，为业主打造真正的家门口“小公园”。出家门即入公园，小小的改变，能切实的提升业主们每天的生活品质，不用担心公园里人多，没有运动空间等问题，在小公园里，悠享惬意时光。</p>\n<p style=\"text-indent: 2em; text-align: center;\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/9705808c95cb11cd7c8883c8e02aa725.jpg\" title=\"微信图片_20191021163049.jpg\" alt=\"微信图片_20191021163049.jpg\" width=\"726\" height=\"450\" style=\"width: 726px; height: 450px;\"></p>\n<p style=\"text-indent: 2em; text-align: center;\">（效果图）</p>\n<p><br></p>\n<p style=\"text-indent: 2em;\">小公园环境优美，健身广场、休闲广场、儿童广场等也一应俱全，满足不同年龄层的休闲需求。闲暇时，父母约上舞伴、棋友，在这里重温飞扬的舞步，或者与棋友来一场棋赛；孩子们在儿童广场上尽情玩耍，而父母们可以安心的锻炼、或散散步，拥享二人时光。</p>\n<p style=\"text-align:center\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/eb7b0242a363924e701086ae593fccde.jpg\" style=\"width: 726px; height: 450px;\" title=\"微信图片_20191021163053.jpg\" width=\"726\" height=\"450\" alt=\"微信图片_20191021163053.jpg\"></p>\n<p style=\"text-align:center\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/9df8349de4bdd2be1422ef1b12033793.jpg\" style=\"width: 726px; height: 450px;\" title=\"微信图片_20191021163057.jpg\" width=\"726\" height=\"450\" alt=\"微信图片_20191021163057.jpg\"></p>\n<p style=\"text-align: center;\"><img src=\"http://langfang.7gfang.com//upload//default/20191021/a32d0efd4629e211386ff3db0b1ea814.jpg\" style=\"width: 726px; height: 450px;\" title=\"微信图片_20191021163102.jpg\" width=\"726\" height=\"450\" alt=\"微信图片_20191021163102.jpg\"></p>\n",
      "l_id": 4
    },
    newslist: [{
        "n_id": 100,
        "user_nickname": "喜欢房",
        "published_time": "10-14 14:22",
        "post_title": "第一标题的第一咨询",
        "l_id": 4,
        "img_path": [],
        "img_num": 0
      },
      {
        "n_id": 101,
        "user_nickname": "喜欢房",
        "published_time": "10-14 14:22",
        "post_title": "第一楼盘的第二咨询",
        "l_id": 4,
        "img_path": [],
        "img_num": 0
      },
      {
        "n_id": 102,
        "user_nickname": "喜欢房",
        "published_time": "10-14 15:09",
        "post_title": "第一楼按第三咨询",
        "l_id": 4,
        "img_path": [],
        "img_num": 0
      }
    ],
    // commentlist: [{
    //     "content": "回复也还可以",
    //     "create_time": "1970-01-01 08:00",
    //     "full_name": "游客",
    //     "fullname": "135****7152"
    //   },
    //   {
    //     "content": "真的不错啊",
    //     "create_time": "1970-01-01 08:00",
    //     "full_name": "游客",
    //     "fullname": "136****8218"
    //   }
    // ],
    plcontent: "",
    zanon: 0,

    nomore: 1
  },
  getnewinfoData() {
    // const params = {
    //   area_id: this.area_id,
    //   n_id: this.nid
    // };
    // newinfo(params).then(res => {
    //   this.newsinfo = res.data.news_info;
    //   this.newslist = res.data.news_list;
    //   this.commentlist = res.data.comment_list;
    //   // console.log(this.newsinfo, this.newslist, this.commentlist);
    // });
  },
  posttijiao() {
    // console.log(this.plcontent, this.nid);
    const params = {
      type: 1,
      a_id: this.nid,
      content: this.plcontent
    };
    addComment(params).then(res => {
      console.log(res);
    });
    // console.log(this.commentlist);
    this.getnewinfoData();
    this.plcontent = "";
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnewinfoData();
    WxParse.wxParse('post_content', 'html', this.data.newsinfo.post_content, this, 0);
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