// // pages/api/user.js

// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     const token = req.headers.authorization?.split(' ')[1];
//     // Print out the JWT secret used for verification
//     console.log("JWT secret:", process.env.JWT_SECRET);

   
//     if (!token) {
//         return res.status(401).json({ message: 'Token is required' });
//     }

//     // Verify token
//     try {
//         const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("Verified token:", verifiedToken); // Log the verified token
//         const userId = verifiedToken.id;
//         const userRole = verifiedToken.role;
//         console.log(userRole)
//         console.log("email", userId);

//       // Fetch user data from database
      
      
//       res.send({
//         msg: "success",
    
//       })

//         // Further processing...
//     } catch (verifyError) {
//         console.error("Error verifying token:", verifyError); // Log any verification errors
//         return res.status(401).json({ message: 'Invalid token' });
//     }


//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token is required' });
    }

    try {
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userRole = verifiedToken.role;

      // Send the user role in the response
      res.status(200).json({ role: userRole });
    } catch (verifyError) {
      console.error("Error verifying token:", verifyError);
      return res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

