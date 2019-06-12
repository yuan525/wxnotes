const app = getApp()
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//防止用户多次点击跳转页面
function buttonClicked(self) {
  self.setData({
    buttonClicked: true
  })
  setTimeout(function () {
    self.setData({
      buttonClicked: false
    })
  }, 500)
}
//封装调用接口
var host ="https://demo.micvs.com/mj-mini/wechat";

/**
 * POST请求，
 * URL：接口
 * 
 * postData：参数，json类型
 * doSuccess：成功的回调函数
 * doFail：失败的回调函数
 */
function request(url, postData, doSuccess, doFail,bol) {
  if (!bol) {
  wx.showLoading({ title: '加载中',mask: true });
  }
  wx.request({
    //项目的真正接口，通过字符串拼接方式实现
    url: host + url,
    header: {
      "Content-Type": "application/x-www-form-urlencoded" ,
      'Cache-Control': 'max-age=60', //60秒
    },
    data: postData,
    method: "POST",
    success: function (res) {
        wx.hideLoading()//关闭加载中
      //参数值为res.data,直接将返回的数据传入
      doSuccess(res);
    },
    fail: function (e) {
      wx.hideLoading()//关闭加载中
      doFail(e);
    },
  })
}
//GET请求
function getData(url, postData, doSuccess, doFail,bol) {
  if (!bol) {
  wx.showLoading({ title: '加载中',  mask: true });
  }
  wx.request({
    url: host + url,
    header: {
      "Content-Type": "application/x-www-form-urlencoded" ,
      'Cache-Control': 'max-age=60', //60秒
    },
    method: 'GET',
    data: postData,
    success: function (res) { 
        wx.hideLoading()//关闭加载中

          doSuccess(res);


    },
    fail: function (err) {
      wx.hideLoading()//关闭加载中
      doFail(err);
    },
  })
}




module.exports = {
  formatTime: formatTime,
  buttonClicked: buttonClicked,
  request: request,
  getData: getData
}
