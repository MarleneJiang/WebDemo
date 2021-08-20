$('.noah').click(function () {
$(this).parent().parent().find('.noah-input').val($(this).data('noah'))
});
$(".noah-btn").click(function () {
     $(this).siblings(".noah-input").select(); //传递文本
     var flag =document.execCommand("Copy");
if(flag){
    mdui.snackbar({
        message: ' 复制成功！',
        position: 'right-top'
        });
}else{
    mdui.snackbar({
        message: ' 复制失败！请手动复制!',
        position: 'right-top'
        });
}
});
$('.noah-color').click(function () {
   var $input= $(this).parent().parent().parent().find('.noah-input')
   $input.val($input.val()+$(this).data('noah'))
})
