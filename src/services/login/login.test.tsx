import { login } from "./login";
import { api } from "../../api";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "lsouza.dev@gmail.com";

  it("Deve exibir um alert com boas vindas caso o email seja válido", async() => {
    await login(mockEmail, "senha");
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}!`);
  });

  it("Não deve exoibir a mensagem de boas vindas sem o email", async () => {
    await login(mockEmail, "senha");
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
  });

  it('Deve exibir um erro caso o email seja inválido', async () =>{
    await login('email@gmail.com','123')
    expect(mockAlert).toHaveBeenCalledWith('Email inválido')
  })
});
