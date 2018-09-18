$(function () {
    setTimeout('$("#h1").slideDown(1000);', 100);           
    setTimeout('$(".hm_text01").fadeIn(1000);', 1100);
    setTimeout('$(".hm_btn").fadeIn(1000);', 2100);

    $("#b11").click(function () {
        var phone=document.getElementById("phone").value;
        var studentnumber=document.getElementById("studentnumber").value;
        var query = new AV.Query('forms');
        query.equalTo('studentnumber',studentnumber);
        query.count().then(function (count) {
            if (count > 0) {
                alert("该学号已经完成报到了哦，请不要重复报到！");
            }
            else {
                setTimeout('$("#index").fadeOut(100);', 100);
                setTimeout('$("#answer").fadeIn(1000);', 100);               
            }
        }, function (error) {
        });
    });

    a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = a10 = a11 = a12 = 0;

    $("#b1").click(function () {              
        var rl1 = $('#q1 input:radio[name="rd1"]:checked').val();
        if (rl1 == null) {
            $("#msg1").fadeIn(400);
        }
        else {
            if (rl1 == "true") {
                a1 = 1;
                setTimeout('$("#r1").slideDown()', 200);
            }
            else {
                setTimeout('$("#w1").slideDown()', 200);
            }
            setTimeout('$("#q1").fadeOut(100);', 1500);
            setTimeout('$("#q2").fadeIn(1000);', 2000);
        }
    });

    $("#b2").click(function () {
        var rl2 = $('#q2 input:radio[name="rd2"]:checked').val();
        if (rl2 == null) {
            $("#msg2").fadeIn(500);
        }
        else {
            if (rl2 == "true") {
                a2 = 1;
                setTimeout('$("#r2").slideDown()', 500);
            }
            else {
                setTimeout('$("#w2").slideDown()', 500);
            }
            setTimeout('$("#q2").fadeOut(100);', 2000);
            setTimeout('$("#q3").fadeIn(1000);', 2500);
        }
    });

    $("#b3").click(function () {
        var rl3 = $('#q3 input:radio[name="rd3"]:checked').val();
        if (rl3 == null) {
            $("#msg3").fadeIn(500);
        }
        else {
            if (rl3 == "true") {
                a3 = 1;
                setTimeout('$("#r3").slideDown()', 500);
            }
            else {
                setTimeout('$("#w3").slideDown()', 500);
            }
            setTimeout('$("#q3").fadeOut(100);', 2000);
            setTimeout('$("#q4").fadeIn(1000);', 2500);
        }
    });

    $("#b4").click(function () {
        var rl4 = $('#q4 input:radio[name="rd4"]:checked').val();
        if (rl4 == null) {
            $("#msg4").fadeIn(500);
        }
        else {
            if (rl4 == "true") {
                a4 = 1;
                setTimeout('$("#r4").slideDown()', 500);
            }
            else {
                setTimeout('$("#w4").slideDown()', 500);
            }
            setTimeout('$("#q4").fadeOut(100);', 2000);
            setTimeout('$("#q5").fadeIn(1000);', 2500);
        }
    });

    $("#b5").click(function () {
        var rl5 = $('#q5 input:radio[name="rd5"]:checked').val();
        if (rl5 == null) {
            $("#msg5").fadeIn(500);
        }
        else {
            if (rl5 == "true") {
                a5 = 1;
                setTimeout('$("#r5").slideDown()', 500);
            }
            else {
                setTimeout('$("#w5").slideDown()', 500);
            }
            setTimeout('$("#q5").fadeOut(100);', 2000);
            setTimeout('$("#q6").fadeIn(1000);', 2500);
        }
    });

    $("#b6").click(function () {
        var rl6 = $('#q6 input:radio[name="rd6"]:checked').val();
        if (rl6 == null) {
            $("#msg6").fadeIn(500);
        }
        else {
            if (rl6 == "true") {
                a6 = 1;
                setTimeout('$("#r6").slideDown()', 500);
            }
            else {
                setTimeout('$("#w6").slideDown()', 500);
            }
            setTimeout('$("#q6").fadeOut(100);', 2000);
            setTimeout('$("#q7").fadeIn(1000);', 2500);
        }
    });

    $("#b7").click(function () {
        var rl7 = $('#q7 input:radio[name="rd7"]:checked').val();
        if (rl7 == null) {
            $("#msg7").fadeIn(500);
        }
        else {
            if (rl7 == "true") {
                a7 = 1;
                setTimeout('$("#r7").slideDown()', 500);
            }
            else {
                setTimeout('$("#w7").slideDown()', 500);
            }
            setTimeout('$("#q7").fadeOut(100);', 2000);
            setTimeout('$("#q8").fadeIn(1000);', 2500);
        }
    });

    $("#b8").click(function () {
        var rl8 = $('#q8 input:radio[name="rd8"]:checked').val();
        if (rl8 == null) {
            $("#msg8").fadeIn(500);
        }
        else {
            if (rl8 == "true") {
                a8 = 1;
                setTimeout('$("#r8").slideDown()', 500);
            }
            else {
                setTimeout('$("#w8").slideDown()', 500);
            }
            setTimeout('$("#q8").fadeOut(100);', 2000);
            setTimeout('$("#q9").fadeIn(1000);', 2500);
        }
    });

    $("#b9").click(function () {
        var rl9 = $('#q9 input:radio[name="rd9"]:checked').val();
        if (rl9 == null) {
            $("#msg9").fadeIn(500);
        }
        else {
            if (rl9 == "true") {
                a9 = 1;
                setTimeout('$("#r9").slideDown()', 500);
            }
            else {
                setTimeout('$("#w9").slideDown()', 500);
            }
            setTimeout('$("#q9").fadeOut(100);', 2000);
            setTimeout('$("#q10").fadeIn(1000);', 2500);
        }
    });

    $("#b10").click(function () {
        var cbl10 = $('#q10 input:checkbox[name="cb10"][checked]');
        if (cbl10.length == 0) {
            $("#msg10").fadeIn(500);
        }
        else {
            var checkList = new Array();
            var rightList = new Array("cb10_1", "cb10_2", "cb10_3", "cb10_4");
            var rightFlag = false;
            if (cbl10.length == rightList.length) {
                cbl10.each(function () {
                    checkList.push($(this).attr("id"));
                });
            }
            if (checkList.sort().toString() == rightList.sort().toString()) {
                rightFlag = true;
            }
            if (rightFlag) {
                a10 = 1;
                setTimeout('$("#r10").slideDown()', 500);
            }
            else {
                setTimeout('$("#w10").slideDown()', 500);
            }
            setTimeout('$("#q10").fadeOut(100);', 2000);
            setTimeout('$("#q11").fadeIn(1000);', 2500);
        }
    });

    $("#b13").click(function () {
        var cbl11 = $('#q11 input:checkbox[name="cb11"][checked]');
        if (cbl11.length == 0) {
            $("#msg11").fadeIn(500);
        }
        else {
            var checkList = new Array();
            var rightList = new Array("cb11_1", "cb11_2", "cb11_3", "cb11_4");
            var rightFlag = false;
            if (cbl11.length == rightList.length) {
                cbl11.each(function () {
                    checkList.push($(this).attr("id"));
                });
            }
            if (checkList.sort().toString() == rightList.sort().toString()) {
                rightFlag = true;
            }
            if (rightFlag) {
                a11 = 1;
                setTimeout('$("#r11").slideDown()', 500);
            }
            else {
                setTimeout('$("#w11").slideDown()', 500);
            }
            setTimeout('$("#q11").fadeOut(100);', 2000);
            setTimeout('$("#q12").fadeIn(1000);', 2500);
        }
    });

    $("#b12").click(function () {
        var cbl12 = $('#q12 input:checkbox[name="cb12"][checked]');
        if (cbl12.length == 0) {
            $("#msg12").fadeIn(500);
        }
        else {
            var checkList = new Array();
            var rightList = new Array("cb12_1", "cb12_2", "cb12_3", "cb12_4", "cb12_5");
            var rightFlag = false;
            if (cbl12.length == rightList.length) {
                cbl12.each(function () {
                    checkList.push($(this).attr("id"));
                });
            }
            if (checkList.sort().toString() == rightList.sort().toString()) {
                rightFlag = true;
            }
            if (rightFlag) {
                a12 = 1;
                setTimeout('$("#r12").slideDown()', 500);
            }
            else {
                setTimeout('$("#w12").slideDown()', 500);
            }
            setTimeout('$("#q12").fadeOut(100);', 2000);
            setTimeout('$("#answer").fadeOut(100);', 2000);
            setTimeout('$("#score").fadeIn(1000);', 2500);
        }

        sc = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12;

        if (sc == 0) {
            $('#fs').addClass("f0");
        } else if (sc == 1) {
            $('#fs').addClass("f1");
        } else if (sc == 2) {
            $('#fs').addClass("f2");
        } else if (sc == 3) {
            $('#fs').addClass("f3");
        } else if (sc == 4) {
            $('#fs').addClass("f4");
        } else if (sc == 5) {
            $('#fs').addClass("f5");
        } else if (sc == 6) {
            $('#fs').addClass("f6");
        } else if (sc == 7) {
            $('#fs').addClass("f7");
        } else if (sc == 8) {
            $('#fs').addClass("f8");
        } else if (sc == 9) {
            $('#fs').addClass("f9");
        } else if (sc == 10) {
            $('#fs').addClass("f10");
        } else if (sc == 11) {
            $('#fs').addClass("f11");
        } else if (sc == 12) {
            $('#fs').addClass("f12");
        }

        var phone=document.getElementById("phone").value;
        var studentnumber=document.getElementById("studentnumber").value;
        var Forms = AV.Object.extend("forms");
        var formObject = new Forms();
        formObject.save({
            score:sc,
            check:1,
            phone:phone,
            studentnumber:studentnumber,
        }, {
            success: function(object) {
                alert("success！");
            }
        });    
        var query = new AV.Query('forms');
        query.equalTo('check', 1);
        query.count().then(function (count) {
            var StatA = document.getElementById("paiming")
            StatA.innerHTML = count;
        }, function (error) {
        });
    });
});
