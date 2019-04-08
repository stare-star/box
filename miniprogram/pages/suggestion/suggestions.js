// pages/suggestion/suggestions.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    infoMess: '',
    uuid: '',
    contact: '',
    content: '',
    zuzhi: app.zuzhi,
    value: [0],
  },
  onAdd: function () {
    const db = wx.cloud.database()
    db.collection('suggestions').add({
      data: {
        contact: this.data.contact,
        content: this.data.content,
        towho: this.data.zuzhi
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          contact: this.data.contact,
          content: this.data.content,
          towho: this.data.zuzhi
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  contactInput: function(e) {
    this.setData({
      contact: e.detail.value

    })
  },

  contentInput: function(e) {
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
          infoMess: ''
        }),
        this.onAdd()
      wx.request({
        url: 'https://wx.starfishs.cn/wxcm/Service/Commit',
        method: 'post',
        data: {
          contact: this.data.contact,
          content: this.data.content,
          towho: this.data.zuzhi
        },
        header: {
          "content-type": 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res.data),
         


          app.res_uuid = res.data.uuid,
            app.res_time = res.data.time
          wx.navigateTo({
            url: 'success'
          })
                
        }


      })

     

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
    this.setData({
      zuzhi: getApp().zuzhi,
    })
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

  },

  


})