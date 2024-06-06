// // import Creator from "@model/Creator"
// import { connectToDB } from "@mongodb";
// import Creator from "../../../models/Creator";

// export const GET = async (req, res) => {
//   try {
//     await connectToDB()

//     const allUsers = await User.find()

//     return new Response(JSON.stringify(allUsers), { status: 200 })
//   } catch (err) {
//     console.log(err)
//     return new Response("Failed to get all users", { status: 500 })
//   }
// }

// import { connectToDB } from '/utils/db';  // Corrected the path to the db utility
// import Creator from 'model/Creator';    // Ensure the Creator model is imported

// export const GET = async (req, res) => {
//   try {
//     await connectToDB();

//     const allUsers = await Creator.find();  // Use the Creator model to find all users

//     return new Response(JSON.stringify(allUsers), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new Response("Failed to get all users", { status: 500 });
//   }
// };

// export default GET;


import { connectToDB } from '/utils/db';  // Corrected the path to the db utility
import Creator from 'model/Creator';    // Ensure the Creator model is imported

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDB();
    console.log('Connected to database');

    const allUsers = await Creator.find();  // Use the Creator model to find all users
    console.log('Users fetched successfully:', allUsers);

    return res.status(200).json(allUsers);
  } catch (err) {
    console.error('Error fetching users:', err);  // Log the error details
    return res.status(500).json({ message: 'Failed to get all users' });
  }
};

export default handler;
