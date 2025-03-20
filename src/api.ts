const conta = {
  email:'lsouza.dev@gmail.com',
  password:'senha123',
  name:'Luiz Fabiano de Souza'
}

export const api = new Promise((resolve) =>{
  setTimeout(() => {
    resolve(conta)
  }, 2000)
})
