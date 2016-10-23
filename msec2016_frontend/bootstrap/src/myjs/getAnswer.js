'use strict';
//var our_project_base_url = "http://demo.tjuwork.win:9000/api"; //远程服务器
var our_project_base_url = "http://localhost:9900";



$(document).ready(function() {
    

});


function get_user(){
    
    $.getJSON(our_project_base_url+"/user").then(function(data) {
      console.log(data.name)
    });

}

function getWantToCalc(){
    return $('#want_to_calc').val();
}


function clear_get_calc(){
    var description = {'description':'1+2'};            //!!!!!!!!!!!!!!!!不要写作 `"{'description':'1+2'}"`
//    var description = JSON.;
    console.log(JSON.stringify(description));
     $.ajax({
        type:'POST',
        url:our_project_base_url+"/calc",
        dataType:'json',
        contentType: 'application/json',
        data: JSON.stringify(description),
        success: function(problem, status, jqxhr) {
             console.log(jqxhr);
             return problem;
         }
        })
//         .then(function(problem, status, jqxhr) {
//             console.log(jqxhr);
//             return problem;
//         })
    
//        .done(function(problem, status, jqxhr) {
//            console.log(jqxhr);
//            return problem;
//        })
//        .fail(function(){
////            alert("We failed");
//            console.log("We fail to calc the answer");
//        })
}

var getCalcAnswer = {
    get_calc_answer:function (des){
        
        var des_json = {'description': '2*3'};  //SHOULD be `des`
    
        console.log("Ready to request calc",des_json);
        
        return $.ajax({
            type:'POST',
            url:our_project_base_url+"/calc",
            dataType:'json',
            contentType: 'application/json',
            data: JSON.stringify(des_json)
        })
        .done(function(problem, status, jqxhr) {
            console.log(jqxhr);
            return problem;
        })
        .fail(function(){
//            alert("We failed");
            console.log("We fail to calc the answer");
        })
}
}

function put_info(){
    var des = getWantToCalc();
    console.log("des is:",des);
//    if(des == "" || typeof(des) == "undefined" ){
//        alert("输入点东西我才能计算啊！");
////        return;
//    }

    
    
    var gC = getCalcAnswer;
    $.when( gC.get_calc_answer(des) )
    .done(function(data){
//        alert(data);
        console.log("we got at promise,",data)

//        alert(data.definition, data.answer);
        
    })
    .fail(function(){
//        alert("We fail!");
        console.log("We fail to calc the answer");
    })
    
    
//    alert("应该一直会出现啊")
    

}










//var getUserPromise = {
//    
//    user: function(){
//        return $.getJSON(our_project_base_url+"/user").then(function(data) {
//          return data.name;
//        });
//    }
//}


