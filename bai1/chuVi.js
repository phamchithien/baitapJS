$(document).ready(function () {
    $(".CV-tron").hide();
    $(".CV-CN").hide();
    $(".CV-V").hide();
    $(".CV-TG").hide();
    

    $(".show-formCVTron").click(function () {
        $(".CV-tron").show();
        $(".CV-CN").hide();
        $(".CV-V").hide();
        $(".CV-TG").hide();
        $(".S-tron").hide();
        $(".S-CN").hide();
        $(".S-V").hide();
        $(".S-TG").hide();
        $(".kq-cvtron").click(function(){
            var r = document.getElementById('numberr1').value;
            var d = document.getElementById('numberd1').value;
            console.log(r);
            if(r!='') {
                var CV = parseFloat((r*2)*Math.PI);
                document.getElementById("result").innerHTML = "Chu vi hình tròn S = "+CV+" khi bán kính r = "+r;
            }
            if(d!='') {
                var CV = parseFloat(d*Math.PI);
                document.getElementById("result").innerHTML = "Chu vi hình tròn S = "+CV+" khi đường kính d = "+d;
            }
        })
    });
    $(".show-formCVCN").click(function () {
        $(".CV-CN").show();
        $(".CV-tron").hide();
        $(".CV-V").hide();
        $(".CV-TG").hide();
        $(".S-tron").hide();
        $(".S-CN").hide();
        $(".S-V").hide();
        $(".S-TG").hide();
        $(".kq-cvCN").click(function(){
            var d = parseFloat(document.getElementById('d-CN1').value);
            var r = parseFloat(document.getElementById('r-CN1').value);
            if(d!='' && r!=''){
                var CV = parseFloat((d + r)*2);
                document.getElementById("result").innerHTML = "Chu vi hình chữ nhật CV = "+CV+" với chiều dài = "+d+" chiều rộng = "+r;
            }
        })
    });
    $(".show-formCVV").click(function () {
        $(".CV-V").show();
        $(".CV-tron").hide();
        $(".CV-CN").hide();
        $(".CV-TG").hide();
        $(".S-tron").hide();
        $(".S-CN").hide();
        $(".S-V").hide();
        $(".S-TG").hide();
        $(".kq-cvV").click(function(){
            var a = parseFloat(document.getElementById('a-V1').value);
            if(a!=''){
                var CV = parseFloat(a*2);
                document.getElementById("result").innerHTML = "Chu vi hình vuông CV = "+CV+" với cạnh hình vuông = "+a;
            }
        })
    });
    $(".show-formCVTG").click(function () {
        $(".CV-TG").show();
        $(".CV-tron").hide();
        $(".CV-CN").hide();
        $(".CV-V").hide();
        $(".S-tron").hide();
        $(".S-CN").hide();
        $(".S-V").hide();
        $(".S-TG").hide();
        $(".kq-cvTG").click(function(){
            var a = parseFloat(document.getElementById('a-TG1').value);
            var b = parseFloat(document.getElementById('b-TG1').value);
            var c = parseFloat(document.getElementById('c-TG1').value);
            if(a!='' && b!='' && c!=''){
                var CV = parseFloat(a+b+c);
                document.getElementById("result").innerHTML = "Chu vi hình tam giác CV = "+CV+" với 3 cạnh tam giác = "+a+","+b+","+c;
            }
        })
    });

    
});