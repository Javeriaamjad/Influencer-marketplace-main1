import connectDB from '@/middleware/mongoose';
import Creator from '@/model/Creator';


export default connectDB(async (req, res) => {
  if (req.method === 'POST') {
    const { email, platforms   } = req.body;
    console.log(email)

    try {
      let user = await Creator.findOne({ email });
      console.log("user",user)
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    
      user.platforms = platforms 
      await user.save();

      return res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
});

