import { Router } from "express"
import database from "../database"

const router = Router()

router.get("/", async (req, res) => {
  console.log("READ ITENS")
  const db = await database()
  const result = await db.all('SELECT * FROM todo')
  res.json(result)
})

router.get("/:id", async (req, res) => {
  console.log("READ ITEM")
  const db = await database()
  const result = await db.all('SELECT * FROM todo WHERE id=?', [req.params.id])
  res.json(result)
})

router.post("/", async (req, res) => {
  console.log("CREATED NEW ITEM")
  const db = await database()
  const result = await db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto])
  res.json({ id: result.lastID })
})

router.put("/:id", async (req, res) => {
  console.log("DATA ALTERED")
  const db = await database()
  const result = await db.run('update todo set texto = ?, done = ? where id = ?', [req.body.texto], [req.body.done], [req.params.id])
})

router.patch("/:id", (req, res) => {
  res.send("# Alterar dados específicos de uma tarefa")
})

router.delete("/:id", (req, res) => { 
  res.send("# Excluir uma tarefa")
})

export default router