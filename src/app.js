import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

app.use(express.json())

function idSelecao(id){
    return selecoes.filter(selecao => selecao.id == id)
}

function indexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

//Rotas
app.get('/selecoes', SelecaoController.index)
app.get("/selecoes/:id", SelecaoController.show)
app.post('/selecoes', SelecaoController.store)
app.put('/selecoes/:id',SelecaoController.update)
app.delete('/selecoes/:id', SelecaoController.delete)

export default app







