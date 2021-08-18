$(document).ready(function () {
    $(".S-tron").hide();
    $(".S-CN").hide();
    $(".S-V").hide();
    $(".S-TG").hide();
    

    $(".show-formSTron").click(function () {
        $(".S-tron").show();
        $(".S-CN").hide();
        $(".S-V").hide();
        $(".S-TG").hide();
        $(".CV-tron").hide();
        $(".CV-CN").hide();
        $(".CV-V").hide();
        $(".CV-TG").hide();
        $(".kq-tron").click(function(){
            var r = document.getElementById('numberr').value;
            var d = document.getElementById('numberd').value;
            if(r!='') {
                var S = parseFloat((r*r)*Math.PI);
                document.getElementById("result").innerHTML = "Diện tích hình tròn S = "+S+" khi bán kính r = "+r;
            }
            if(d!='') {
                var S = parseFloat(((d*d)/4)*Math.PI);
                document.getElementById("result").innerHTML = "Diện tích hình tròn S = "+S+" khi đường kính d = "+d;
            }
        })
    });
    $(".show-formSCN").click(function () {
        $(".S-CN").show();
        $(".S-tron").hide();
        $(".S-V").hide();
        $(".S-TG").hide();
        $(".CV-tron").hide();
        $(".CV-CN").hide();
        $(".CV-V").hide();
        $(".CV-TG").hide();
        $(".kq-CN").click(function(){
            var d = document.getElementById('d-CN').value;
            var r = document.getElementById('r-CN').value;
            if(d!='' && r!=''){
                var S = parseFloat(d*r);
                document.getElementById("result").innerHTML = "Diện tích hình chữ nhật S = "+S+" với chiều dài = "+d+" chiều rộng = "+r;
            }
        })
    });
    $(".show-formSV").click(function () {
        $(".S-V").show();
        $(".S-tron").hide();
        $(".S-CN").hide();
        $(".S-TG").hide();
        $(".CV-tron").hide();
        $(".CV-CN").hide();
        $(".CV-V").hide();
        $(".CV-TG").hide();
        $(".kq-V").click(function(){
            var a = document.getElementById('a-V').value;
            if(a!=''){
                var S = parseFloat(a*a);
                document.getElementById("result").innerHTML = "Diện tích hình vuông S = "+S+" với cạnh hình vuông = "+a;
            }
        })
    });
    $(".show-formSTG").click(function () {
        $(".S-TG").show();
        $(".S-tron").hide();
        $(".S-CN").hide();
        $(".S-V").hide();
        $(".CV-tron").hide();
        $(".CV-CN").hide();
        $(".CV-V").hide();
        $(".CV-TG").hide();
        $(".kq-TG").click(function(){
            var a = document.getElementById('a-TG').value;
            var h = document.getElementById('h-TG').value;
            if(a!='' && h!=''){
                var S = parseFloat((a*h)/2);
                document.getElementById("result").innerHTML = "Diện tích hình tam giác S = "+S+" với cạnh đáy = "+a+" chiều cao = "+h;
            }
        })
    });
});
