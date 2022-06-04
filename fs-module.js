const {readFileSync , writeFileSync}=require('fs');

const first = readFileSync('./newfolder/first.txt','utf8');
const second = readFileSync('./newfolder/second.txt','utf8');

writeFileSync(
    './newfolder/result-sync.txt',
    `here is the result : ${first},${second}`,
    {flag:'a'}
)
