import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  const mockEmail = "lsouza.dev@gmail.com";

  it("Deve exibir um alert com boas vindas", () => {
    login(mockEmail, "senha");
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}!`);
  });

  it("Não deve exoibir a mensagem de boas vindas sem o email", () => {
    login(mockEmail, "senha");
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
  });
});
