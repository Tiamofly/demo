(function($){
     
    //拓展方法
    $.fn.hello.methods.sayHi = function (jq) {
        //var opts = $.data(jq[0], 'hello').options;
        alert("Hi");
    }
     
})(jQuery);