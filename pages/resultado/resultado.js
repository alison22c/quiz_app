import { verificarTema,TrocarTema } from "../../helpers/tema-helper.js"



const botaoTema=document.querySelector(".tema button ")
const body =document.querySelector("body")


botaoTema.addEventListener("click",()=> {
    TrocarTema(body,botaoTema)
})

verificarTema(body,botaoTema)


