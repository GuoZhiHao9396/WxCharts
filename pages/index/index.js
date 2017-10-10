//index.js  
//获取应用实例测试 
var app = getApp()
var windowWidth;
var _wxcharts = require('dist/wxcharts.js')
Page({
  data: {
    // tab切换  
    currentTab: 0,
  },
  onLoad: function () {
    //
    this.getDeviceInfo();
    //
    this.graphShow();
  },

  /**
   * 获取设备信息
   */
  getDeviceInfo: function () {
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

    try {
      windowWidth = wx.getSystemInfoSync().windowWidth;
    } catch (e) {
    }
  },
  /**
 * @Explain：初始化静态图表
 */
  graphShow: function () {
    let that = this
    switch (this.data.currentTab) {
      case 0:
        that.barShow()
        break
      case 1:
        that.pieShow()
        break
      case 2:
        that.pieShow2()
        break
      case 3:
        that.areaShow()
        break
    }
  },
  /**
   * 饼状图
   */
  pieShow: function () {
    let pie = {
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
    }
    new _wxcharts(pie)
  },
  /**
   * 空心饼状图
   */
  pieShow2: function () {
    let area = {
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
      }, {
        name: '成交量5',
        data: 45,
      }, {
        name: '成交量6',
        data: 60,
      }, {
        name: '成交量7',
        data: 15,
      }, {
        name: '成交量8',
        data: 80,
      }, {
        name: '成交量9',
        data: 32,
      }, {
        name: '成交量10',
        data: 10,
      }],
      width: windowWidth,
      height: windowWidth,
      dataLabel: true
    }
    new _wxcharts(area)
  },
  /**
   * 柱状图
   */
  barShow: function () {

    let bar = {
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
      height: windowWidth / 2,
    }
    new _wxcharts(bar)
  },
  /**
   * 折线图
   */
  areaShow: function () {
    let area = {
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      series: [{
        name: '客单价1',
        data: [0.10, 0.15, 0.2, 0.45, 0.37, 0.4, 0.8, 0.60, 0.2, 0.45, 0.37, 0.4],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '客单价2',
        data: [0.25, 0.30, 0.37, 0.65, 0.78, 0.69, 0.94, 0.60, 0.37, 0.65, 0.78, 0.69],
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
      height: windowWidth / 2
    }
    new _wxcharts(area)
  },
  /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {
    this.setData({ currentTab: e.detail.current });
    this.graphShow()
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


