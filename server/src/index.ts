import express from "express"
import cors from "cors"

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get("/tarefa", (req, res) => res.send("# Buscar all tarefas"))
app.get("/tarefa/:id", (req, res) => res.send("# Buscar one tarefa"))
app.post("/tarefa", (req, res) => {
    console.log("recebido: ", req.body)
    res.json({ teste: "# Inserir"})})
app.put("/tarefa/:id", (req, res) => res.send("# Altera all"))
app.patch("/tarefa/:id", (req, res) => res.send("# Altera one"))
app.delete("/tarefa/:id", (req, res) => res.send("# Excluir one"))

app.get("/", (req, res) => res.send("Hello World!"))
app.listen(PORT, () => console.log(`Running on port ${PORT}`))
