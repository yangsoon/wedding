App({
  onLaunch (options) {
    // 初始化数据库
    wx.cloud.init({
      env: 'cloud1-7gqq99np59df2630'
    })
    const db = wx.cloud.database()
    this.globalData.db = db
  },
  onShow (options) {},
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: {
    db: null
  }
})