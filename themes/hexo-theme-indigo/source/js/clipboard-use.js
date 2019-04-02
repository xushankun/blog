/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
    var initCopyCode = function(){
        var copyHtml = '';
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml += '复制代码';
        copyHtml += '</button>';
        $(".highlight .code pre").before(copyHtml);
        var clipboard = new ClipboardJS('.btn-copy', {
            target: function(trigger) {
                return trigger.nextElementSibling;
            }
        });
        clipboard.on('success', function(e) {
            Toast('复制成功',1000)
        });
         clipboard.on('error', function(e) {
             Toast('复制失败',1000)
          });
    }
    initCopyCode();
}(window, document);
