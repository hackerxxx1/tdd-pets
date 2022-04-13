
const data = [
    { id: 1, nome: "Capitu", 
        idade: 15, sexo: "F",
        especie: "Calopsita"
    },
    {
      id: 2, nome: "Bentinho",
        idade: 5, sexo: "M",
        especie: "Cachorro"
    }
];

function listar() {
    return data;
}

function listarPorId(id) {
    const pet = data.find(pet => pet.id === id)
    if(!pet) {
        return {
            erro: true,
            mensagem: "Pet não encontrado!"
        };
    }
    return pet;
}

function cadastrar(pet) {
    if(!(pet.hasOwnProperty('nome'))){return ({erro: true,mensagem: "Campo 'nome' é obrigatório!"})}
    else if(!(pet.hasOwnProperty('sexo'))){return ({erro: true,mensagem: "Campo 'sexo' é obrigatório!"})}
    else if(!(pet.hasOwnProperty('idade'))){return ({erro: true,mensagem: "Campo 'idade' é obrigatório!"})}
    else if(!(pet.hasOwnProperty('especie'))){return ({erro: true,mensagem: "Campo 'especie' é obrigatório!"})}
    else if(pet.idade<0){ return {erro: true, mensagem: "Campo 'idade' deve ser maior ou igual a zero!"}}
    else if(pet.sexo !=( 'M'|| 'F')){return{erro: true,mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"}}
    else{pet.id = data.length+1;data.push(pet);return pet;}
}

function editarPorId(id, pet) {
    const index = data.findIndex(pet => pet.id === id);
    if(pet.idade<0){return {erro: true, mensagem: "Campo 'idade' deve ser maior ou igual a zero!"}}else if (pet.sexo !=( 'M'|| 'F')){return{erro: true,mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"}}
    else
    if(index === -1){
        return {erro: true, mensagem: "Pet não encontrado!"}}
        else{pet.id = index;data[index]= pet;return data[index]}
}

function deletarPorId(id) {
    const index = data.findIndex(pet => pet.id === id);
    if(index === -1){return {erro: true, mensagem: "Pet não encontrado!"}}
    else{data.splice(index,1); return {erro: false, mensagem: "Pet deletado com sucesso!"}}
}

module.exports = {
    listar,
    listarPorId,
    cadastrar,
    editarPorId,
    deletarPorId
}