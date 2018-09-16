/*
$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");   
        $("#courseTable").append("<td>"+(x+1)+"</td>"); 
        $("#courseTable").append("<td>"+(startDate+7*x)+"</td>");   
        $("#courseTable").append("<td>"+topic[x]+"</td>");   
        $("#courseTable").append("</tr>");   
    }
});
*/

$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourunit = minuteUnit *60;
    var dayUnit = hourunit * 24;
    
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");   
        $("#courseTable").append("<td>"+(x+1)+"</td>"); 
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+x*7*dayUnit))).toLocaleDateString().slice(5)+"</td>"); 
        //slice可動態提取字串的部分
        $("#courseTable").append("<td>"+topic[x]+"</td>");   
        $("#courseTable").append("</tr>");   
    }
});