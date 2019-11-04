
const fs=require('fs');
const socket=require('socket.io');
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.static('public'));
const tailCommandInUnix=(n=10)=>{
    const data= fs.readFileSync(`./txt/test.txt`,'utf-8');
    const dataArr=data.split('\n');
    let output;
    if(n>dataArr.length){
        output=dataArr;
    }else{
        const start=dataArr.length-n;
        const end=dataArr.length;
        output=dataArr.slice(start,end);
    }
    
    return output;
    
    }

if(process.env.NODE_ENV==="production"){
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})
}

const server=app.listen(5000,()=>{
    console.log("Server is runing at port 5000");
});
const io=socket(server);
io.on('connection',(socket)=>{
socket.emit('change',{output:tailCommandInUnix()});
socket.on('getLines',(n)=>{
socket.emit('change',{output:tailCommandInUnix(n)});
})
fs.watchFile('./txt/test.txt',{interval:100},()=>{
    socket.emit('change',{output:tailCommandInUnix()});
})
})



