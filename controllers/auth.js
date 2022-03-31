import User from '../models/user'
export const Singup = async (request,response) =>{
    const {email,name,password} = request.body;
    
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            return response.status(400).json({
                message:"User đã tồn tại"
            })
        }
        const user = await new User ({email, name ,password}).save();
        response.json({
            user :{
                _id :user.id,
                name : user.name,
                email : user.email
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const Singin = async (req, res) =>{

}