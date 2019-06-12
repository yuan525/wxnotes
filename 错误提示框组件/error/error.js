// component/error/error.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    errstr: {
      type: String,
      value: "出错啦~"
    },
     bol: {
       type: Boolean,
      value: false
    },
    phone:{
      type: String,
      value: ""
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
     //刷新当前页面
    clickbtn(){   
      getCurrentPages()[getCurrentPages().length - 1].onLoad()
    },
    //登录失效
    jump(){
      wx.reLaunch({//关闭所有页面，跳到重新登录页面
        url: '../../pages/repeatLogin/repeatLogin?phone=' + this.data.phone
      })
    }
  }
})
