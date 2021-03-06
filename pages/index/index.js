//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dotStyle:true,
    content:{},
    swiperList: [{
      id: 0,
      type: 'image',
      url: '/static/swiper_img/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: '/static/swiper_img/big84000.jpg',
    }, {
      id: 2,
      type: 'image',
      url: '/static/swiper_img/big84000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '/static/swiper_img/big84000.jpg'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      let result = app.towxml(`<h1>hello world</h1>`,'html');
      this.setData({
            content:result,
            isLoading: false
        });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
