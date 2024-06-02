import Creator from "@/model/Creator";
import connectDB from "@/middleware/mongoose";

const updateVideoContent = async(req,res)=>{
    if (req.method === "POST"){
        try{
            const{ email, Videos} =  req.body;
            const creator = await Creator.findOne({email});

            if(!creator){
                return res.status(404).json({success : false , message :"Creator not found"})
            }

            creator.Videos = Videos;
            await creator.save();

            return res.status(200).json({success:true , message:"Profile updated"})
        }
        catch(error){
            return res.status(500).json({ success : false , error: "Internal server error"});

        }
    }else{
        return res.status(405).json({success: false , message: "Method not allowed"});

    }
    }
export default connectDB(updateVideoContent)