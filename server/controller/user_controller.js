 function user_get()
{
    return (req,res)=>{
        res.send({status :" get from Servers"});
    };
}

 function user_post()
{
    return (req,res)=>{
        res.send({status :" post from Servers"});
    };
}

 function user_patch()
{
    return (req,res)=>{
        res.send({status :" patch from Servers"});
    };
}

module.exports = {user_get, user_post, user_patch};