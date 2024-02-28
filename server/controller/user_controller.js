export function user_get()
{
    return (req,res)=>{
        res.send({status :" get from Servers"});
    };
}

export function user_post()
{
    return (req,res)=>{
        res.send({status :" post from Servers"});
    };
}

export function user_patch()
{
    return (req,res)=>{
        res.send({status :" patch from Servers"});
    };
}