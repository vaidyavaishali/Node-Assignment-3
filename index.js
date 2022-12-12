const fs = require("fs")
const http = require("http")
// const read = fs.readFileSync('index.html')
//((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(read)
// })
fs.writeFile("index.html", "<h1>Hello World...</h1>\n<p>This is Vaishali Vaidya...</p>", (err)=>{
    console.log(err)
    })
    
const server = http.createServer()
server.on("request", (req, res)=>{
    fs.readFile("index.html", (err, data)=>{
        res.end(data)
    })
})
server.listen(5000, ()=>{
    console.log('Server Running on Port 5000')
})