var display = document.getElementById('display')

var minutos = document.getElementById('minutos')
var doisPontos = ":"
var segundos = 0

var comecar = document.getElementById('comecar')
var parar = document.getElementById('parar')

var minutoAtual;
var segundoAtual;

var interval


for(var i = 0; i<=30; i++){
    minutos.innerHTML+='<option value='+i+'>'+i+'</option>';
}



comecar.addEventListener('click',function(){
    minutoAtual = minutos.value
    segundoAtual = segundos
    display.childNodes[1].innerHTML = minutoAtual+doisPontos+segundoAtual;

    interval = setInterval(function(){

        segundoAtual--;
        
        if(segundoAtual == -1){
            segundoAtual = 0;
        }

        if(segundoAtual <= 0){

            if(minutoAtual>0){
                minutoAtual--
                segundoAtual=59
            }else{
                document.getElementById('sound').play();
                clearInterval(interval)
            }
        }

        display.childNodes[1].innerHTML = minutoAtual+doisPontos+segundoAtual;
    }, 1000)
})


parar.addEventListener('click',function(){
    clearInterval(interval)
    document.getElementById('sound').pause();
    display.childNodes[1].innerHTML = "0"+doisPontos+"0";
})