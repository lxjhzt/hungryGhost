// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "images/marker.png",
      id: 0,
      latitude: 33.776016,
      longitude: -84.39473,
      width: 50,
      height: 50
    }]
  },

  markertap(e) {
    wx.showActionSheet({
      itemList: ["FoodEX"],
      success: function (res) {
        console.log(res)
        if (res.tapIndex == 0) {
          wx.openLocation({
            latitude: 33.776016,
            longitude: -84.39473,
            name: "Map",
            scale: 28
          })
        }
      },
      fail: function (res) {
      }
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