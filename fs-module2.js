const {readFile, writeFile} = require('fs')

readFile('./newfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./newfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./newfolder/result-async.txt',
        `here is the result : ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        }
        )
    })
})