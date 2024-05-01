// pages/api/user.js

import jwt from 'jsonwebtoken';
import { getUserById } from '../../../utils/db'; // Function to fetch user data from database

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];
    // Print out the JWT secret used for verification
    console.log("JWT secret:", process.env.JWT_SECRET);

    console.log("bhar me jao token", token);
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    // Verify token
    try {
        const verifiedToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmE5ZDYxNDNjNGZjMGM4ZDQ1YTFjMiIsImVtYWlsIjoic2hhaHphaWJAZ21haWwuY29tIiwiaWF0IjoxNzE0NTgxOTUyLCJleHAiOjE3MTcxNzM5NTJ9.mIk-58cWuruDKpk5zHuJoJ1VdiwGOT1YPe9X14dMaiQ", process.env.JWT_SECRET);
        console.log("Verified token:", verifiedToken); // Log the verified token
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
        return res.status(401).json({ message: 'Invalid token' });
    }


  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
