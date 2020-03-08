# debounced
https://longteng33.github.io/debounced/<br>
防抖函数封装<br>
1，举例：点击一次按钮，触发一次事件，不停地点击，n秒内只触发一次，而不会不停地触发<br>
2,函数防抖的意义：<br>
对于在事件触发n秒之后再执行的回调，延迟执行<br>
如果在这n秒之内再触发事件，重新开始计时<br>
3，使用：var FA=debounced(fa,1000,true)，此FA就是fa经过了防抖处理后得到的函数(暂且称它为debounced函数)<br>
防抖函数三个形参<br>
fn：回调函数<br>
time：延迟时间<br>
triggleNow:是否首次延迟执行，true为首次不延迟执行<br>
当不停地点击时<br>
triggleNow:true  只有第一次有用<br>
triggleNow:false  只有最后一次有用<br>

