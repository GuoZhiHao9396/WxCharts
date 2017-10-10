//index.js  
//获取应用实例测试 
var app = getApp()
var wxCharts = require('dist/wxcharts.js')
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  onReady: function () {
    // 屏幕适配
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }

    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [15, 20, 45, 37, 4, 80]
      }, {
        name: '成交量2',
        data: [70, 40, 65, 100, 34, 18]
      }],
      yAxis: {
        title: '成交金额 (万元)',
        titleFontColor: '#7cb5ec',
        format: function (val) {
          return val + '万';
        }
      },
      width: windowWidth,
      height: windowWidth/2,
    });

    new wxCharts({
      canvasId: 'columnCanvas1',
      type: 'column',
      categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
      series: [{
        name: '蓝莲花',
        data: [15, 20, 45, 37, 4, 80]
      }, {
        name: '茉莉花',
        data: [70, 40, 65, 100, 34, 18]
      }, {
        name: '康乃馨',
        data: [40, 20, 35, 90, 24, 10]
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      width: windowWidth,
      height: windowWidth/2,
    });

    new wxCharts({
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '红玫瑰',
        data: 10,
      }, {
        name: '白兰花',
        data: 20,
      }, {
        name: '丁香',
        data: 20,
      }, {
        name: '紫罗兰',
        data: 10,
      }, {
        name: '康乃馨',
        data: 5,
      }, {
        name: '薰衣草',
        data: 15,
      }
      , {
        name: '其他',
        data: 20,
      }],
      width: windowWidth,
      height: windowWidth,
      dataLabel: true
    });

    new wxCharts({
      canvasId: 'ringCanvas',
      type: 'ring',
      series: [{
        name: '成交量1',
        data: 15,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }, {
        name: '成交量4',
        data: 63,
      },{
        name: '成交量5',
        data: 45,
      },{
        name: '成交量6',
        data: 60,
      },{
        name: '成交量7',
        data: 15,
      },{
        name: '成交量8',
        data: 80,
      },{
        name: '成交量9',
        data: 32,
      },{
        name: '成交量10',
        data: 10,
      }],
      width: windowWidth,
      height: windowWidth/2,
      dataLabel: true
    });

    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['1','2', '3', '4', '5', '6', '7','8','9', '10', '11', '12'],
      series: [{
        name: '客单价1',
        data: [0.10,0.15, 0.2, 0.45, 0.37, 0.4, 0.8,0.60, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '客单价2',
        data: [0.25,0.30, 0.37, 0.65, 0.78, 0.69, 0.94,0.60, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '客单价 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth - 15,// 屏幕超出15px
      height: windowWidth/2
    });


  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})


