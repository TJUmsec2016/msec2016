$(document).ready(function() {
    

    $('.collapse_type').on('show.bs.collapse', function () {
        set_pro_dscription_holder_Text(this.id);
    })
    
    progress_bar_process();


    
    MathJax.Hub.Config({
      tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']],
                processEscapes: true
      }
    });

});


function progress_bar_process(){
    $('.progress .progress-bar').progressbar({
        transition_delay: 0,
        refresh_speed: 300,
        update: function(current_percentage, $this) {
            $('#remind_time_span').html("建议训练时间为 2 分钟，你的剩余时间: " + ((100-current_percentage)/100*120).toFixed(1) + "s");
//            $this.parent().css('background-color', 'rgb(' + Math.round(current_percentage / 100 * 255) + ', 0, 0)');
        },
            done: function(){ alert("啊，训练时间到！！") }
    });
}


function updateMathContent(s) {
   var math = MathJax.Hub.getAllJax("problem_Text")[0];
//       MathJax.Hub.Queue(["Text", math, "\\displaystyle{"+s+"}"]);
    MathJax.Hub.Queue(["Text", math, s]);
}

function setMathAnswer(answer){
    $('#answer_holder_Text').val(answer);
}

function getMathAnswer(){
    return $('#answer_holder_Text').val();
}

function set_pro_dscription_holder_Text(pro_description){
    $('#pro_dscription_holder_Text').val(pro_description);
}

function get_pro_dscription_holder_Text(){
    return $('#pro_dscription_holder_Text').val();
}


function changeit(){
    
//    p_type="/1/1/1/100/1000";
    var p_type = get_pro_dscription_holder_Text();
    if(p_type == ""){
        $('#modal-don-not-input-answer').click();
        return;
    }
    
    
    var dp = getProblemsPromise;
    $.when(dp.getProblems(p_type))
    .done(function(data){
        //alert(data);
        console.log("we got at promise,",data)
        for(let p of data){
//            updateMathContent(p.definition+"="+p.answer);
            updateMathContent(p.mathJaxDefinition);
            setMathAnswer(p.answer);
        }
    })
    .fail(function(){
        alert("We fail!");
    })
}


function removeAllSpace(str) {
    return str.replace(/\s+/g, "");
}

function valide_user_answer(){
    var realAns = getMathAnswer();
    var userAns = $('#input_answer_Text').val();
    userAns = removeAllSpace(userAns);
    
    

    console.log("realAns",realAns,"userAns:",userAns);
    if(realAns == "" || userAns == ""){
        console.log("OK");
//        location.href="http://www.baidu.com"
//        location.href = "#modal-container-258228";
        $('#modal-don-not-input-answer').click();
        return;
    }
    
    if(realAns != userAns){
        $('#modal-wrong-answer').click();
        return;
    }
    
    if(realAns == userAns){
        $('#modal-right-answer').click();
        return;
    }
    
    alert("SOMETHING WRONG!!");
    
}


function give_up(){
    var realAns = getMathAnswer();
    $('#answer_holder_Text').html(realAns);
}
