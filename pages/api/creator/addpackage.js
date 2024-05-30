
import connectDB from '@/middleware/mongoose';
import Creator from '@/model/Creator';


// export default connectDB(async (req, res) => {
//   if (req.method === 'POST') {
//     const { email, packages   } = req.body;
//     console.log(email,packages)

//     try {
//       let user = await Creator.findOne({ email });
//       console.log("user",user)
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
    
//       user.packages = packages
//       await user.save();

//       return res.json({ success: true, message: 'Profile updated successfully' });
//     } catch (error) {
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
// });
// pages/api/packages.js


export default async function handler(req, res) {
  // Connect to the MongoDB database
  await dbConnect();

  if (req.method === 'POST') {
         const { email,title, description, price, media   } = req.body;
         console.log(email,packages)
    
         try {
           let user = await Creator.findOne({ email });
           console.log("user",user)
           if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

      const newPackage = new Creator({
        title,
        description,
        price,
        media
      });

      // Save the package data to the database
      await newPackage.save();

      // Respond with a success message
      res.status(200).json({ message: 'Package data saved successfully' });
    } catch (error) {
      // Handle errors and respond with an error message
      console.error('Error saving package data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Respond with a method not allowed error
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}



