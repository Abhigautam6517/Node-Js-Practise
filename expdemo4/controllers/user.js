const user_operations = require("../db/repository/user_operations");

module.exports = {
    async register(request, response) {
            const userObject = request.body; // JSON Data 
            console.log(userObject);
            const result = await user_operations.add(userObject);
            console.log(result);
            if(result._id){
                response.status(200).json({message:'Register SuccessFully'});
            }
            else{
                response.status(500).json({message:'Problem in User Register'});
            }
            

    }
}