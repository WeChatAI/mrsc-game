//app.js
var plugin = requirePlugin("myPlugin");
App({
  onLaunch: function () {
    let height = 0
    wx.getSystemInfo({
      success: res => {
        console.log(res);
        let isIOS = res.system.indexOf("iOS") > -1;
        let navHeight = 0;
        if (!isIOS) {
          navHeight = 48;
        } else {
          navHeight = 44;
        }
        height = navHeight + res.statusBarHeight
      }
    });
    plugin.init({
      appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
      // appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja",
      textToSpeech: true,
      guideList: ["玩末日生存游戏"],
      // welcome: '请问需要什么帮助',
      // background: "#eee",
      guideCardHeight: 50,
      operateCardHeight: 120,
      // history: true,
      // historySize: 60,
      navHeight: height,
      success: () => {
        // plugin.send({
        //   query: "你好",
        //   success: res => {
        //     console.log(res);
        //   },
        //   fail: error => {}
        // });
      },
      fail: error => {}
    });
  },
  globalData: {
    userInfo: null
  },
  onHide:function(res) {
    console.log(res + "-----------------")
  }
})