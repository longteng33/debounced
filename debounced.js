
// 防抖函数三个形参
// fn：回调函数
// time：延迟时间
// triggleNow:是否首次延迟执行，true为首次不延迟执行
// triggleNow:true
// triggleNow:false
function debounced(fn, time, triggleNow) {
    // 使用闭包；t用来记录计时器，res用于存回调函数fn执行后的返回值
    var t = null, res;

    var debounced = function () {
        // 函数防抖后(如var FA=debounced(fa,1000,true),此FA就是fa经过了防抖处理后得到的函数(暂且称它为debounced函数))
        // FA中this，并不是fa中的this，所以使用_self记录FA的this
        var _self = this;
        var args = arguments;
        if (t) {
            clearTimeout(t);
        }
        if (triggleNow) {
            // triggleNow==true时，t等于开一个计时器，让t在n秒之后清除
            
            // 在n秒之内，时间还没到，就再次触发了debounced函数的时候，就会重新开一个计时器，在等n秒才能执行回调fn
            // 只要n秒之内点了按钮，前面就白等了，一切重来，重新等n秒
            var exec = !t;
            t = setTimeout(function () {
                t = null;
            }, time);
            // exec为true，t为null时，此时才执行回调函数fn
            // 第一次进来时，t=null，所以第一次点击可以执行一次
            // n秒之内第二次点击，此时，计时器还没到时间，t不等于null，不能执行fn
            if (exec) {
                res = fn.apply(_self, args);
            }

        } else {
            // triggleNow==false时，t等于开一个计时器，在n秒之后执行fn
            // 第一次进来时，要在n秒之后才执行fn
            // n秒之内第二次进来，t重开计时器，重来，在n秒之后才执行
            t = setTimeout(function () {
                res = fn.apply(_self, args)
            }, time)
        }
        return res
    }
    
    return debounced;
}



