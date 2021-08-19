$(document).ready(function() {
    var input=document.querySelector('#show');
    var items=Array.from(document.querySelectorAll('.btn'));
    items.forEach(function(btn){
        btn.addEventListener('click',function(){
            if(input.innerHTML=='0'){
                input.innerHTML='';
            }
            if(btn.innerHTML=='AC'){
                input.innerHTML='0';
            }
            else if(btn.innerHTML=='C'){
                var arrtemp = Array.from(input.innerHTML);
                arrtemp.splice(arrtemp.length-1,1);
                if(arrtemp.length!=0){
                    input.innerHTML=arrtemp.join('');
                }
                else input.innerHTML='0';
            }
            else if(btn.innerHTML=='='){
                input.innerHTML = eval(input.innerHTML);
            }
            else input.innerHTML+=btn.innerHTML;
        })
    })
});