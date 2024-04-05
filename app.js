const express = require('express')
const path = require('path');

const BMIFolder = path.resolve(__dirname, './FSD/BMI')
const calculatorApp = path.resolve(BMIFolder, 'index.html')

const app = express()

app.use(express.static(BMIFolder))

app.get('/', (req, res) => {
  res.status(200).sendFile(calculatorApp)
})

app.all('*',(req, res) => {
  res.status(404).send(`<h1>not found</h1>`)
})

app.listen(5000, () => {
  console.log("server is on port 5000!");
})