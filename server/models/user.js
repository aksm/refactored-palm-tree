import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    picture: String,
    name: {
        first: String,
        last: String
    },
    type: String,
    genre: String,
    bio: String
});

export default mongoose.model('User', userSchema);
