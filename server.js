import express from "express"
import mysql from "mysql"

const app = express()
const port = 3010

const db = mysql.createConnection({
	host: 'svc.sel4.cloudtype.app',
  port: 30579,
	user: 'root',
	password: 'mysql1234',
	database: 'bookdb',
})

db.connect()

app.get('/', (req, res) => {
  res.json({result: '스마트앱프로그래밍 백엔드'})
})

app.get('/book', (req, res) => {
    const sql = 'select * from Book'
    
      db.query(sql, (err, rows) => {
          if (err) {
              res.json({result: "errortest"})
              return console.log(err)
          }
          res.json(rows)
      })
  })

app.listen(port, () => {
  console.log(`서버 실행됨 (port ${port})`)
})