import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZW5yaXF1ZSIsInJvbGVzIjpbIkFETUlOIiwiTUFOQUdFUiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAiLCJleHAiOjE3MTQxNjE5NjgsImlhdCI6MTcxNDE1ODM2OH0.Yrb9a-O8AzZ4zcVDGoJaZD55hecj6tq28X1sLMHkxG4'

export class UsuarioService {

    async login(username: string, password: string) {
        return axiosInstance.post('/auth/signin', {
            username,
            password
        })
    }

    async findAll() {
        return axiosInstance.get('/api/usuario/v1',{
            headers: {
                Authorization: `${token}`
            }
        })
    }

    async cadastrar(usuario : Projeto.User) {
        return axiosInstance.post('/api/usuario/v1/', usuario,{
            headers: {
                Authorization: `${token}`
            }
        })
    }
    
    async alterar(usuario : Projeto.User) {
        return axiosInstance.put('/api/usuario/v1/', usuario,{
            headers: {
                Authorization: `${token}`
            }
        })
    }

    async deletar(id : number) {
        return axiosInstance.delete(`/api/usuario/v1/${id}`,{
            headers: {
                Authorization: `${token}`
            }
        })
    }
}