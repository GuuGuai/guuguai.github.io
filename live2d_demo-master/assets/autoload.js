<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Live2D 看板娘 v1.4 / Demo 2</title>
</head>
<body style="font-family: 'Microsoft YaHei';">
    <h2><a href="https://www.fghrsh.net/post/123.html" style="color: #38A3DB; text-decoration: none;">Live2D 看板娘 v1.4</a> / Demo 2</h2>
    <h3> - 自动加载 autoload.js <span style="font-size: 12px;color: #666">(一般网站引用推荐)</span></h3>
    <ul>
        <li><a href="demo1-default.html" style="color: #38A3DB; text-decoration: none;" title="常规博客引用推荐">Demo 1 - 常规引用</a></li>
        <li><span title="一般网站引用推荐">Demo 2 (当前面页)</span></li>
        <li><a href="demo3-waifu-tips.html" style="color: #38A3DB; text-decoration: none;" title="博客园等网站引用推荐">Demo 3 - 内置 waifu-tips.json</a></li>
    </ul>
    
    <!-- waifu-tips.js 依赖 JQuery 库 -->
    <script src="assets/jquery.min.js?v=3.3.1"></script>
    
    <!-- 实现拖动效果，需引入 JQuery UI -->
    <script src="assets/jquery-ui.min.js?v=1.12.1"></script>
    
    <!-- 使用 aotuload.js 引入看板娘 -->
    <script src="assets/autoload.js?v=1.4.2"></script>
</body>
</html>

# autoload.js
try {
    $("<link>").attr({href: "assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: 'assets/waifu-tips.min.js?v=1.4.2',dataType:"script", cache: true, async: false});
    $.ajax({url: 'assets/live2d.min.js?v=1.0.5',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
    live2d_settings['modelId'] = 5;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
    /* 在 initModel 前添加 */
    initModel('assets/waifu-tips.json');
} catch(err) { console.log('[Error] JQuery is not defined.') }
    