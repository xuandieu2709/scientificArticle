$(document).ready(function () {
});
$(document).on('click','span[id*=showpass]',function(){
    var id = $(this).attr('id');
    // if(id === "" || id === null)
    // {
        
    // }
    var clas = $("span#"+id+" > i").attr('class');
    if(clas === 'fa fa-eye')
    {
        $('input#'+id).attr('type','text');
        $("span#"+id+" > i").removeClass('fa-eye').addClass('fa-eye-slash');
    }else{
        $('input#'+id).attr('type','password');
        $("span#"+id+" > i").removeClass('fa-eye-slash').addClass('fa-eye');
    }
    
});