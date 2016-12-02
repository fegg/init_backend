;(function () {
    var cfg = {
        table: {
            // hover 的奇偶行效果
            striped: true,
            // 是否缓存
            cache: false,
            // 分页相关的配置
            pagination: true,
            pageSize: 5,
            pageList: [ 5, 10, 15 ],
            // 分页的来源
            sidePagination: 'server',
            // 自带的搜索功能
            search: false,
            mobileResponsive: true,
            filterShowClear: false,
            filterControl: false,
            // 是否启用子视图
            detailView: false,
            onPageChange: function () {
                $('#frameWrapper').getNiceScroll().resize();
            }
        }
    };

    if($.fn.datepicker) {
        // datepicker default format, 全局, 默认修改了 zh-CN 文件
        // $.fn.datepicker.defaults.format = 'yyyy-mm-dd';
        $.fn.datepicker.defaults.language = 'zh-CN';
    }

    window.BS_cfg = cfg;
} ());