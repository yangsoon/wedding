App({
  onLaunch (options) {
    // 初始化数据库
    wx.cloud.init({
      env: 'liuxin-9g2szahi4d8bf88f'
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
