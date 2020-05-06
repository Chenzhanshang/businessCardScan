// page/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    title:'',
    comp:'',
    addr:'',
    email:'',
    phone:'',
    tel:'',
    qq:'',
    wx:'',
    fax:'',
    postcode:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let data = JSON.parse(options.data)
    console.log(data)
    if (data.name != '' && data.name != undefined){
      that.setData({
        name: data.name[0],
      })
    }
    if (data.title != '' && data.title != undefined) {
      that.setData({
        title: data.title[0],
      })
    }
    if (data.comp != '' && data.comp != undefined) {
      that.setData({
        comp: data.comp[0],
      })
    }
    if (data.addr != '' && data.addr != undefined) {
      that.setData({
        addr: data.addr[0],
      })
    }
    if (data.email != '' && data.email != undefined) {
      that.setData({
        email: data.email[0],
      })
    }
    if (data.phone != '' && data.phone != undefined) {
      that.setData({
        phone: data.phone[0],
      })
    }
    if (data.tel != '' && data.tel != undefined) {
      that.setData({
        tel: data.tel[0],
      })
    }
    if (data.QQ != '' && data.QQ != undefined) {
      that.setData({
        qq: data.QQ[0],
      })
    }
    if (data.WX != '' && data.WX != undefined) {
      that.setData({
        wx: data.WX[0],
      })
    }
    if (data.fax != '' && data.fax != undefined) {
      that.setData({
        fax: data.fax[0],
      })
    }
    if (data.postcode != '' && data.postcode != undefined){
      that.setData({
        postcode: data.postcode[0],
      })
    }
    
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