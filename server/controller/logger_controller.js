import fs from 'fs';

export function logger(req,res,next){
    return (req,res,next)=>{
        // your changes here;
        console.log("hi");
        // const dataToAppend = `${Date.now()} : ${req.ip}`;
        const dataToAppend = "test";
        fs.appendFile('log.txt',dataToAppend, (data,err)=>{
            next();    // won't block process
        });
    }
}