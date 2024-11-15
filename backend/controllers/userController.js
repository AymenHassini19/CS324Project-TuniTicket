
const users = [ 
    { name: "mary", id: 1, age: 50 }, 
    { name: "lisa", id: 2, age: 20 }, 
    { name: "josh", id: 3, age: 30 }, ];

const getUsers=(req,res)=>{
    res.status(200).json({users:users})
}

const getUser=(req,res)=>{
    const id=req.params.id
    const user=users.find(elt=>elt.id==id)
    if(user){
        res.status(200).json({user:user})
    }else{
        res.status(404).json({message:"user not found"})
    }
}

const postUser=(req,res)=>{
    const user=req.body
    const newUsers=[...users,user]
    res.status(200).json({message:"user added successully",users:newUsers})
}

const putUser=(req,res)=>{
    const id=req.params.id
    const {name:Newname}=req.body
    const newUsers=users.map(elt=>{
        if (elt.id==id){
            return {...elt,name:Newname}
        } else {
            return elt
        }
    })
    res.status(200).json({message:"user updated successfully",users:newUsers})
}

const deleteUser=(req,res)=>{
    const id=req.params.id
    const newUsers=users.filter(elt=>elt.id!=id)
    res.status(200).json({message:"user deleted successfully",users:newUsers})
} 

module.exports={getUsers,getUser,postUser,deleteUser,putUser}