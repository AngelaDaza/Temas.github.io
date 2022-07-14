//*------------------------------------------------------------------
const tema = document.querySelector(".tema");
const selecTema = document.querySelector(".conteiner_checkbox");
const checkTema = document.querySelectorAll(".checkbox_tema");
const frutas = document.querySelectorAll(".lista_item");
//*------------------------------------------------------------------


//*------------------------------------------------------------------
temaInicial(); //!--> Iniciando tema de la lista ordenada
//*------------------------------------------------------------------



//*------------------------------------------------------------------

//! --> Declarando las respectivas acciones de la pagina web
tema.addEventListener("mouseover", ()=>{
    selecTema.style.visibility = "visible";
});

selecTema.addEventListener("mouseover", ()=>{
    selecTema.addEventListener("mouseleave", ()=>{
        selecTema.style.visibility = "hidden";
    });
});


checkTema.forEach((value, index)=>{
    checkTema[index].onclick = function(){
        myFuction();
    }
});

function myFuction(){
    if (checkTema[0].checked == true) {
        frutas.forEach((value, index)=>{
            if(index % 2 != 0){
                frutas[index].style.color = "#487346";
            }else{
                frutas[index].style.color = "white";
            }
        });
    } else if(checkTema[1].checked == true){
        frutas.forEach((value, index)=>{
            if(index % 2 == 0){
                frutas[index].style.color = "#487346";
            }else{
                frutas[index].style.color = "white";
            }
        });
    }
};

function temaInicial(){
    frutas.forEach((value, index)=>{
        if(index % 2 != 0){
            frutas[index].style.color = "#487346";
        }else{
            frutas[index].style.color = "white";
        }
    });
}
//*------------------------------------------------------------------






