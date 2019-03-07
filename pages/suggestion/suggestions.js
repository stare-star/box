// pages/suggestion/suggestions.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    infoMess: '',
    uuid:'',
    contact: '',
    content: '',
    zuzhi:'传媒中心',
    value:[0],
    array: ['传媒中心', '学生会', '科协','团委' ],
  },

bindChange:function(e){
  const val =e.detail.value
  this.setData({
    zuzhi:this.data.array[val[0]]
  })
},
  contactInput: function(e) {
    this.setData({
      contact: e.detail.value

    })
  },

  contentInput:function(e){
    this.setData({
      content: e.detail.value
    })
  },

  commitBtnClick: function() {
    console.log('点击')
    if (this.data.content.length == 0) {
      this.setData({
        infoMess: "温馨提示：反馈内容不能为空"
      })
    } else {
      console.log("提交"),
      this.setData({
        infoMess:''
      })
      wx.request({
          url: 'https://wx.starfishs.cn/wxcm/Service/Commit',
          method:'post',
          data: {
            contact: this.data.contact,
            content: this.data.content,
            towho:this.data.zuzhi
          },
          header: {
            "content-type": 'application/x-www-form-urlencoded'
          },
          success: function(res) {
            console.log(res.data)

            
              app.res_uuid=res.data.uuid,
              app.res_time=res.data.time
            
            
            wx.navigateTo({
              url:'success'
              
            })
          }
        }
      )
  }
},
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {

},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})