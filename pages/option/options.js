// pages/change/change.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: [
    {  
      url: 'League_Organization.png',
      name: '团学组织工作'
    }, 
    {
      url: 'scholarship.png',
      name: '奖助学金等评奖评优工作'
      }, 
      {
        url: 'Employment_services.jpg',
        name: '就业服务'
      }, 
      {
        url: 'Mental_health.jpg',
        name: '心理健康教育'
      }, 
      {
        url: 'Community_management.jpg',
        name: '社区管理'
      }, 
    ],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 30,
    nextMargin: 30
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  commitBtnClick: function (e) {


    app.zuzhi = e.currentTarget.dataset.zuzhi;
    console.log(app.zuzhi)

    wx.navigateTo({
      url: '../suggestion/suggestions' 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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