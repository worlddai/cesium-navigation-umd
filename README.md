# cesium-navigation-umd
这是一个基于cesium-navigation-es6 迁移的仓库。但是原作者仅提供`es6` 模式下的引用，需要`npm` 安装。我使用`rollup`重新编译了原作者的release。去掉了`dev`依赖。`dist`中内容为编译产物。可以直接引用。


demo在[这里](http://61.155.169.52:8080/CesiumNavigationUmd/demo/index.html)（受到带宽限制，加载可能略慢）

如果不能看，可以看[原作者的](https://richard1015.github.io/cesium/)

感谢原作者的源码。

[原作者github主页](https://github.com/richard1015/cesium-navigation-es6)

<img src="https://img-blog.csdnimg.cn/2020010717400915.png" width=800 height=400>


<img src="https://img-blog.csdnimg.cn/20200107174027621.png" width=800 height=400>

## 修改说明

- CesiumNavigation.js

去掉了 dev模式下`registerKnockoutBindings`的依赖。

- 所有依赖cesium.js的import

在src目录添加cesium文件夹。内部默认导出`window.Cesium`,所以打包生产的`CesiumNavigation.umd.js` 依赖Cesium环境，需要在html中手动引入

## 使用说明

- 如果你的Cesium没有挂载在window下，那么修改`src/cesium/Cesium.js`，改为你对应的引用，然后运行`npm run build`

- 在html文件中引用Cesium和Cesium必要样式表

- 在html文件中引用`CesiumNavigation.umd.js`和`cesium-navigation.css`
- 初始化viewer 调用` CesiumNavigation.umd(viewer, options)`

```javascript

var viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: false,
    baseLayerPicker: false,
    timeline: false,
    infoBox: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    animation: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false
});


var options = {};

// 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
options.defaultResetView = Cesium.Rectangle.fromDegrees(80, 22, 130, 50);
// 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
options.enableCompass = true;
// 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
options.enableZoomControls = true;
// 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
options.enableDistanceLegend = true;
// 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
options.enableCompassOuterRing = true;



CesiumNavigation.umd(viewer, options);

```


## 编译说明

```bash
npm run build 
```

## 其他

本人博客，欢迎来这里提问或者讨论问题。

https://blog.csdn.net/qq_29722281






