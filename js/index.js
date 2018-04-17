//首页鼠标滑过消息弹窗
$(function() {
    // 生成任务小旗子时候确定其坐标
    var positionArr = [
        { x: 100, y: 10 },
        { x: 800, y: 250 },
        { x: 400, y: 280 },
        { x: 900, y: 50 },
        { x: 1000, y: 100 },
        { x: 680, y: 330 },
        { x: 150, y: 70 },
        { x: 30, y: 150 },
        { x: 100, y: 200 },
        { x: 550, y: 300 },
        { x: 760, y: 90 },
        { x: 170, y: 300 },
        { x: 480, y: 340 },
        { x: 700, y: 200 },
        { x: 900, y: 200 },
        { x: 280, y: 320 },
        { x: 270, y: 160 },
        { x: 310, y: -40 },
        { x: 550, y: 200 },
        { x: 370, y: 200 }
    ];
    // 生成测试数据;
    function mockData() {
        var tasks = [
            { id: 1, num: 1, count: 10 },
            { id: 1, num: 2, count: 10 },
            { id: 1, num: 3, count: 10 },
            { id: 1, num: 4, count: 10 },
            { id: 1, num: 5, count: 10 },
            { id: 1, num: 6, count: 10 },
            { id: 1, num: 7, count: 10 },
            { id: 1, num: 8, count: 10 },
            { id: 1, num: 9, count: 10 },
            { id: 1, num: 10, count: 10 },
            { id: 1, num: 11, count: 10 },
            { id: 1, num: 12, count: 10 },
            { id: 1, num: 13, count: 10 },
            { id: 1, num: 14, count: 10 },
            { id: 1, num: 15, count: 10 },
            { id: 1, num: 16, count: 10 },
            { id: 1, num: 17, count: 10 },
            { id: 1, num: 18, count: 10 },
            { id: 1, num: 19, count: 10 },
            { id: 1, num: 20, count: 10 }
        ]
        tasks.forEach(function(task, index) {
            genPosition(task, index);
            createTask(task.x, task.y, task.num, task.count);
        });
    }
    mockData();

    /**
     * 创建任务小旗子
     * @param x 小旗子的x坐标
     * @param y 小旗子的y坐标
     * @param num 触达人数
     * @param count 执行次数
     */
    function createTask(x, y, num, count) {
        var str = '';
        str += '<div class="task-board" style="left: ' + x + 'px; top: ' + y + 'px;">';
        str += '<div class="taskbg">';
        str += '<div class="task-line">';
        str += '<div class="point"></div>'
        str += '<div class="task-name">生日任务';
        str += '<div class="task-detail">';
        str += '<ul class="detail-ct">';
        str += '<li>触达人数：' + num + '</li><li>执行次数：' + count + '</li>';
        str += '</ul>';
        str += '</div>';
        str += ' </div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        $('.remind-pane').append(str);
    }

    // 鼠标悬停时显示和隐藏小旗子
    $(".task-name").hover(function() {
        $(this).find(".task-detail").show();
    }, function() {
        $(this).find(".task-detail").hide();
    });
    // 从定义好的坐标中遍历，获取位置
    function genPosition(task, index) {
        task.x = positionArr[index].x;
        task.y = positionArr[index].y;
    }

    
    //nav选项卡
    $('.right-nav li').click(function() {
        //获得当前被点击的元素索引值
        var Index = $(this).index();
        //给菜单添加选择样式
        $(this).addClass('active').siblings().removeClass('active');
        //显示对应的div
        $('.right-nav-content').eq(Index).show().siblings('.right-nav-content').hide();

    });
    //关闭选项卡
    $(".close").click(function() {

        $(this).parent().hide();
    });
    //删除评论
    $(".del").click(function() {

        $(this).parent().parent().hide();
    });
//切换choice样式
$(".choice").click(function(){

           if( $(this).hasClass("choice") ){
              $(this).addClass('choiced');
                $(this).removeClass('choice'); 
           }else{
               $(this).removeClass('choiced'); 
               $(this).addClass('choice'); 
           }

});
//切换check样式
$(".check").click(function(){

           if( $(this).hasClass("check") ){
              $(this).addClass('checked');
                $(this).removeClass('check'); 
           }else{
               $(this).removeClass('checked'); 
               $(this).addClass('check'); 
           }

});
   //开关按钮
    $(document).ready(function(e) {
            $('input').lc_switch();
            // triggered each time a field changes status
            $('body').delegate('.lcs_check', 'lcs-statuschange', function() {
                var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
                console.log('field changed status: ' + status);
            });

            // triggered each time a field is checked
            $('body').delegate('.lcs_check', 'lcs-on', function() {
                console.log('field is checked');
            });


            // triggered each time a is unchecked
            $('body').delegate('.lcs_check', 'lcs-off', function() {
                console.log('field is unchecked');
            });
        });

});