// pages/map/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainInfo: {
      longitude: 117.269564,
      latitude : 34.799068,
      boyPhone: '13260365035',
      girlPhone: '18660346853',
      boy: '宋阳',
      girl: '刘鑫'
    },
    markers: [
      {
        id: 1,
        // 酒店经纬度
        longitude: 117.269564,
        latitude : 34.799068,
        iconPath: "../../images/church.png",
        width: 50,
        height: 50
      }
    ],
    showLocation: true
  },
  markertap(e) {
    let _this = this;
    wx.openLocation({
      latitude: _this.data.mainInfo.latitude,
      longitude: _this.data.mainInfo.longitude,
      scale: 18,
      // 酒店名字和位置
      name: '宴江南(银座店)',
      address: '枣庄市薛城区黄河中路177号'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取配置信息
    // const mainInfo = await app.globalData.db.collection('invitation').limit(20).get()

    this.setData(this.data)
    
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
    app.shareHandle();
  },
  callhe: function (event) {
    wx.makePhoneCall({
      phoneNumber: this.data.mainInfo.boyPhone
    })
  },
  callshe: function (event) {
    wx.makePhoneCall({
      phoneNumber: this.data.mainInfo.girlPhone
    })
  }
})