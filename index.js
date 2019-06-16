let campos = document.querySelectorAll('#form-user-create [name]');

campos.forEach((campo,index)=>{
    if(campo.name == 'gender'){
        if(campo.checked){
            console.log(campo.name, campo.value);
        }
    }
    else{
        console.log(campo.name, campo.value);
    }
});