import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./Public/index.html', (error, data) =>{
            if (error) throw error
            res.end(data)
        })
    }
    if(req.url === '/about'){
        fs.readFile('./Public/about.html', (error, data) => {
            if(error) throw error
            res.end(data)
        })
    }
 
    
})
const PORT = 8000;
const HOST = 'localhost';
server.listen(PORT, HOST, () => {
    console.log(`Server Running at http://${HOST}:${PORT}`)
})