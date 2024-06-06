// import { pusherServer } from "@lib/pusher";
import { pusherServer } from "lib/pusher";
import Chat from "@model/Chat";
import Message from "@model/Message";
import User from "@model/User";
import { connectToDB } from "@mongodb";

export const POST = async (req) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { chatId, currentUserId, text, photo } = body;

    // const currentUser= await User.findById(currentUserId)

    const currentUser = await User.findById(currentUserId);

    const newMessage = await Message.create({
      chat: chatId,
      sender: currentUser,
      text,
      photo,
      seenBy: currentUserId,
    });


    console.log(newMessage);

    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: { messages: newMessage._id },
        $set: { lastMessageAt: newMessage.createdAt },
      },
      { new: true }
    )
      .populate({
        path: "messages",
        model: Message,
        populate: { path: "sender seenBy", model: "User" },
      })
      .populate({
        path: "members",
        model: "User",
      })
      .exec();
      
      // trigger a pusher event for a specific chat about the new messages
      await pusherServer.trigger(chatId, "new-message", newMessage)

      const lastMessage = updatedChat.messages[updatedChat.messages.length -1];
      updatedChat.members.forEach(async (member) => {
        try{
          await pusherServer.trigger(member._id.toString(), "update-chat",{
            id: chatId,
            messages: [lastMessage]
          });
        }catch(err){
          console.error("Failed to trigger update-chat event");
        }
      });

    return new Response(JSON.stringify(newMessage), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create new message", { status: 500 });
  }
};
