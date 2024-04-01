const userModel = require('../models/Users')

module.exports = {
    Query:{
        async user(_,{ID}){
            return await userModel.findById(ID)
        },
        async getUsers(_,{mobile}){
            return await userModel.find({mobile:mobile})
        }
    },
    Mutation:{
         createUser:async(parent,{userInput:{name,mobile}},context,info)=>{
            // console.log(name,mobile);
            if(!name || !mobile){
                return "Provide Mobile and Name"
            }
            
            const createUser = new userModel({
                name:name,
                mobile:mobile
            })
            // console.log(name,mobile);
           const res = await createUser.save();
           return {id:res.id,
            ...res._doc
        }
        },
        async deleteUser(_,{ID}){
            const deleteUser = (await userModel.deleteOne({_id:ID})).deletedCount;
            return deleteUser;
        },
        async editUser(_,{ID,editUserInput:{name}}){
            const editUser =  (await userModel.updateOne({_id:ID},{name:name})).modifiedCount;
            return editUser;
        }
    }
}