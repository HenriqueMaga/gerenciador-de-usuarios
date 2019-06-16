let campos = document.querySelectorAll('#form-user-create [name]');
let dados = {};

document.getElementById('form-user-create').addEventListener('submit', e=>{
    e.preventDefault();
    campos.forEach((campo, index)=>{
        if(campo.name == 'gender'){
            if(campo.checked){
                dados[campo.name] = campo.value;
            }
        }
        else{
            dados[campo.name] = campo.value;
        }
    });
    console.log(dados);
});