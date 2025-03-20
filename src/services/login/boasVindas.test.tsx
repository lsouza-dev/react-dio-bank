import {boasVindas} from './boasVindas'

describe('Boas Vindas',() =>{
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  
  it('Deve exibir uma mensagem de boas vindas com o nome inserido no parâmetro.',() =>{
    boasVindas('Luiz');
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo(a), Luiz")
  })
})