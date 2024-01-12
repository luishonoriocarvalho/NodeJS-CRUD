// Importando o express
import express from 'express'

const app = express()

// Expresse identificar json
app.use(express.json())

// mock
const selecoes = [       
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'}
]

function idSelecao(id){
    return selecoes.filter(selecao => selecao.id == id)
}

function indexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

// Criando uma rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes', (req, res) =>{
    res.status(200).send(selecoes)
})

// Id é um parâmetro da requisição
app.get("/selecoes/:id", (req, res) =>{
    let index = req.params.id
    res.json(idSelecao(index))
    
})

app.post('/selecoes', (req, res)=> {
    selecoes.push(req.body)
    res.status(201).send(`Seleção cadastrada com sucesso!`)
})

app.delete('/selecoes/:id', (req, res) => {
    let index = indexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com o id ${req.params.id} apagada com sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = indexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})


export default app







