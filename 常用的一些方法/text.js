//1、json对象和json字符串的互相转化
var jsonStr = JSON.stringify(json);//json对象------>json字符串
var json = JSON.parse(jsonStr);//json字符串----->json对象

//小程序接收路径参数会乱码需要用decodeURIComponent转码
let src = decodeURIComponent(options.query.q)

//2、文字图片水平对齐{ <view><image></image>这是图片</view> }
vertical-align: middle;

//3、字体左右间距{a  a   a}
letter-spacing: 3rpx;

//4、去除图片底部空白部分(小程序image标签底部会有一点类似下边距的东西)
vertical-align: bottom；

//5、类型转换
parseInt()——————转换成整数
parseFloat()————转换成整数
Boolean(value)——把给定的值转换成Boolean型；
Number(value)——把给定的值转换成数字（可以是整数或浮点数）；
String(value)——把给定的值转换成字符串
toFixed(2)——————保留小数点后两位，四舍五入，在chorme浏览器中不会完全遵守四舍五入
//保留小数点后两位，不四舍五入
// ——————————————————————————————第一种，先把小数边整数：输出结果为 15.77  
Math.floor(15.7784514000 * 100) / 100     
//——————————————————————————————第二种，当作字符串，使用正则匹配：
Number(15.7784514000.toString().match(/^\d+(?:\.\d{0,2})?/)) 

//6、当前时间戳
var timestamps = (new Date()).valueOf();

//7、刷新当前页面
getCurrentPages()[getCurrentPages().length - 1].onLoad()

//8、正则验证邮箱
var reg = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$');
var emailVar = reg.test(email);     // 得到的值为布尔型

//9、给data中的对象/数组的元素单独赋值fish:[{name:"111",sex:"0"},{name:"222",sex:"0"}]////arr:[1,2,3,4]
    let asd = 'arr[0]'  //数组
    that.setData({
      [asd]:"8"
    })
      
    let asd = 'fish[0].name'  //对象
    that.setData({
      [asd]:"asd"
    })

//10、截取字符串e="20190612"
 gettime(e){
    let y = e.substring(0,4)
    let m = e.substring(4, 6)
    let d = e.substring(6, 8)
    let times=y+"年"+m+"月"+d+"日"
    return times
  },
  
//11、实现提前加载下一个页面的方法
    var pages = getCurrentPages();//当前页面栈
    if (pages.length > 1) {  
      var beforePage = pages[pages.length - 2];//获取上一个页面实例对象
     // var currPage = pages[pages.length - 1]; // 当前页面，若不对当前页面进行操作，可省去
      beforePage.changeData();//触发父页面中的方法
    }
