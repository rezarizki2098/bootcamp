const mongoose = require("mongoose");
const { Schema } = mongoose;

// connect to database
mongoose.connect("mongodb://localhost:27017/relationshipDemo"),
    {
        useNewUrlParser: true,
        useCreateUrlParser: true,
        useUnifiedTopology: true,
    };

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});
// end connect to database

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        _id: { _id: false },
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweet = async () => {
// const user1 = new User({ username: "user1", age: 23 });
//     const user1 = await User.findOne({ username: "user1" });
//     const tweet2 = new Tweet({ text: "Heloo everyone my name is Rizki", likes: 3 });
//     tweet2.user = user1;
//     console.log(tweet2);
//     await tweet2.save();
// };

// makeTweet();

const find = async () => {
    const tweet = await Tweet.findOne({}).populate("user", "username"); // ? metode untuk menampilkan satu data saja, sebagai contoh disini saya ingin menambahkan 'username' di model 'user'
    console.log(tweet);
};

find();
