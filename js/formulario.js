function Limpar(){ 
    let campos = document.querySelector("input").value
    console.log(campos)
    if ( campos !== ""){
        campos.value =""
        alert("Campos limpos com sucesso!!!")
    }
}