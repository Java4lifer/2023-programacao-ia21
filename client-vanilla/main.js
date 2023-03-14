void async function main() {
const req = await fetch("http://127.0.0.1:3000/tarefa")
const res = await req.text()
console.log(res)
}()