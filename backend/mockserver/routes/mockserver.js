var fs = require('fs')
var express = require('express');
var jsonfile = require("jsonfile")
const dataFile = './data.json'
const ouputdate = './_data.json'
var router = express.Router();
let data = jsonfile.readFileSync(dataFile)
fs.watchFile(dataFile, (cur, prv) => {
    if (dataFile) {
        // 打印出修改时间
       
        // 根据修改时间判断做下区分，以分辨是否更改
        if (cur.mtime != prv.mtime){
            jsonfile.readFile(dataFile,function(err,res){
                if(err){
                    console.log(err.message)
                }else{
                    data = res
                    console.log("data updated")

                }
            })
        }
    }
})
//console.log(data)
/* GET home page. */
router.use('/get',function(req,res,next){
    let url = req.url;
    console.log("url")
    if(url.indexOf("?")>=0){
        url = url.split("?")[0]
    }
    let s = url.split("/")
    if(s[1] in data){
        res.send(data[s[1]])
    }else{
        res.send([])
    }
    
})
router.use("/add",function(req,res,next){
    let url = req.url;
    console.log("url")
    if(url.indexOf("?")>=0){
        url = url.split("?")[0]
    }
    let s = url.split("/")
    let query = req.query
    console.log(s)
    if(s.length<2){
        res.send("请输入字段名称")
    }else{
        console.log(req.query)
        temp = data
        for(let i = 1;i<s.length;i++){
            if(s[i] in temp){
                temp = temp[s[i]]
                if(i == (s.length-1)){
                    temp.push(req.query)
                }
            }else{
                if(i == (s.length-1)){
                    temp[s[i]] =[]
                    temp[s[i]].push(query)
                }else{
                    temp[s[i]] ={}
                    temp = temp[s[i]]
                }
            }
        }
        jsonfile.writeFileSync()
        res.send(data)
    }
})
router.use("/editor/save",function(req,res,next){
    console.log(req.body)
    res.send("success")
})

module.exports = router;
