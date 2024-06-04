
import connectDB from '@/middleware/mongoose';
import Creator from '@/model/Creator';


export default connectDB(async(req, res) => {
  


  if (req.method === 'POST') {
         const { email,packages} = req.body;
         
    
         try {
           let user = await Creator.findOne({ email });
           console.log("user",user)
           if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.packages = packages
        await user.save();

      
      res.status(200).json({ message: 'Package data saved successfully' });
    } catch (error) {
      
      console.error('Error saving package data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    
    res.status(405).json({ message: 'Method Not Allowed' });
  }
});



