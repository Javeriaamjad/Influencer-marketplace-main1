const mongoose = require('mongoose');

const CreatorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "creator" },
    phone: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    bannerImage: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    description: { type: String, default: "" },
    Bio: { type: String, default: "" },
    media: { type: Array, default: [] },
    price: { type: Number, default: 0 },
    title: { type: String, default: "" },
    chats: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
        default: [],
    },
    category: { type: Array, default: [] },
    platforms: { type: Array, default: [] },
    videos: { type: Array, default: [] },
    achievements: { type: Array, default: [] },
    packages: { type: Array, default: [] },
    rating: { type: Number, default: 0 },
    reviews: { type: Array, default: [] },
    
     // Modified the default value to be a number
    sample: { type: Array, default: [] },
}, { timestamps: true });

module.exports = mongoose.models.Creator || mongoose.model('Creator', CreatorSchema);
