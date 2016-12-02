;(function () {
    var noop = function () { }
    function confirmDialog(config) {
        var tip = config.tip || '';

        if(dialog === void 0 || tip === '') {
            return false;
        }

        var dtd = $.Deferred();
        dialog({
            title: '提示',
            content: tip,
            width: 200,
            height: 60,
            skin: 'ui-dialog-confirm',
            ok: function () {
                dtd.resolve();
            },
            cancel: noop
        }).showModal();
        
        return dtd;
    }

    function clearDialog (d) {
        for(var i = 0; i < d.length; ++i) {
            d[i].close();
        }
    }

    var allTipDialog = [];
    function tipDialog(config) {
        var dom = config.dom;
        var tip = config.tip || '';

        if(dialog === void 0 || tip === '') {
            return false;
        }

        clearDialog(allTipDialog);
        var dtd = $.Deferred();
        var d = dialog({
            title: '提示',
            content: tip,
            width: 200,
            height: 60,
            skin: 'ui-dialog-confirm',
            ok: function () {
                dtd.resolve();
            },
            cancel: noop
        }).show(dom);

        allTipDialog.push(d);

        return dtd;
    }

    function tipTextDialog(config) {
        var dom = config.dom;
        var tip = config.tip || '';

        if(dialog === void 0 || tip === '') {
            return false;
        }

        var d = dialog({
            content: tip,
            quickClose: true
        }).show(dom);

        var timer = null;
        timer = setTimeout(function() {
            clearTimeout(timer);
            d.close();
        }, 2000);
    }

    function textAreaDialog() {
        if(dialog === void 0) {
            return false;
        }

        var dtd = $.Deferred();
        dialog({
            width: 360,
            height: 200,
            title: '添加备注',
            content: '<textarea class="note" placeholder="请填入备注"></textarea>',
            skin: 'ui-dialog-textarea',
            ok: function () {
                var $d = $('.ui-dialog');
                var note = $.trim($d.find('.note').val());

                if(note === '') {
                    return false;
                }

                this.close(note);
            },
            cancel: noop
        })
        .showModal()
        .addEventListener('close', function () {
            var note = this.returnValue;
            // 请求保存
            dtd.resolve(note);
        });

        return dtd;
    }

    window.GUtil = {
        confirm: confirmDialog,
        textarea: textAreaDialog,
        tip: tipDialog,
        tipText: tipTextDialog
    };
} ());