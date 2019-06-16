let campos = document.querySelectorAll('#form-user-create [name]');
let dados = {};

function adicionarLinhaDeUsuario(){
    let tr = document.createElement('tr');
    
    tr.innerHTML = `
    <tr>
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dados.name}</td>
        <td>${dados.email}</td>
        <td>${dados.admin}</td>
        <td>${dados.birth}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>
    `
    document.getElementById('table-user').appendChild(tr);
}

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
    this.adicionarLinhaDeUsuario();
    console.log(dados);
});