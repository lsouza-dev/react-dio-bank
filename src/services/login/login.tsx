import { api } from "../../api"
import { UserData } from "../../classes/User";

export const login = async (email:string,senha:string) =>{
  const data: any|UserData = await api;

  if(email !== data.email) return alert('Email inválido')
  alert(`Bem vindo, ${email}!`)
}