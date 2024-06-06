// import PusherServer from "pusher";
// import PusherClient from "pusher-js";

// export const pusherServer = new PusherServer({
//     appId: '1797907',
//     key:'db9e9cd7a132c8a17973',
//     secret: '8f28824b399c3f4c22e8',
//     cluster: 'ap2',
//     useTLS: true,
// })

// export const pusherClient = new PusherClient(
//     process.env.key,
//     {
//         cluster: "ap2",
//     }
// );


import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID,
    key:process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "ap2",
    useTLS: true,
})

export const pusherClient = new PusherClient(
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    {
        cluster: "ap2",
    }
);