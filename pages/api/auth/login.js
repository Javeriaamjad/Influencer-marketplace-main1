/* import User from "@/model/User";
import connectDB from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
                let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                if (req.body.email === user.email && req.body.password === decryptedPassword) {
                    let token = jwt.sign({ name: user.name, email: user.email ,role:user.role}, process.env.JWT_SECRET, { expiresIn: '28d' });
                    res.status(200).json({ success: true, token: token, message: 'Login Successful' ,role:user.role,email:user.email});
                }
                else {
                    res.status(200).json({ success: false, error: 'Invalid credentials' });
                }
            }
            else {
                res.status(400).json({ success: false, error: 'Invalid credentials' });
            }
        } else {
            res.status(200).json({ message: "Hello bhai padhai karlo" });
        }
    }
    else {
        res.status(200).json({ message: "Abeyy Padhai likhai karo IAS~YAS Bano" });
    }
}

export default connectDB(login); */
// pages/api/login.js
import connectDB from '../../../middleware/mongoose';
import Brand from '../../../model/Brand';
import Creator from '../../../model/Creator';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
    const { email, password } = req.body;
    
      // Check if the email exists in either brand or creator collection
      const brand = await Brand.findOne({ email });
      const creator = await Creator.findOne({ email });

      if (!brand && !creator) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }

      // Determine the user type
      const user = brand || creator;

      // Decrypt password and compare
      const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

      if (decryptedPassword !== password) {
        return res.status(401).json({ success: false, error: 'Invalid password' });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '30d' });

      console.log("login",token);
    

      // Respond with success message and token
      return res.status(200).json({ success: true, message: 'Login successful', token , user });
    } catch (error) {
      // Handle any errors
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  } else {
    // Method not allowed
    return res.status(500).end();
  }
};

export default connectDB(handler);
