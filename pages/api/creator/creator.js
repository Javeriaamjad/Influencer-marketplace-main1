// pages/api/user.js

import jwt from 'jsonwebtoken';
import { getUserById } from '../../../utils/db'; // Function to fetch user data from database

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization
    console.log(token)
    // Print out the JWT secret used for verification
    console.log("JWT secret:", process.env.JWT_SECRET);

    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    try {
      
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified token:", verifiedToken); 

        if (!verifiedToken) throw new Error({
          message : " Invalid Token"
        })
        const userId = verifiedToken.id;
        console.log("email", userId);

      // Fetch user data from database
      const user = await getUserById(userId);
      
      res.send({
        msg: "success",
        user
      })

        // Further processing...
    } catch (verifyError) {
        console.error("Error verifying token:", verifyError); // Log any verification errors
        return res.status(401).json({ message: verifyError.message });
    }


  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
