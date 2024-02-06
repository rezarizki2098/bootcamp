const mongoose = require("mongoose");

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

// one to few
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            _id: { _id: false },
            city: String,
            state: String,
            country: String,
            street: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "John",
        last: "Doe",
    });
    u.address.push({
        city: "New York",
        state: "NY",
        country: "USA",
        street: "123 Main St",
    });
    const res = await u.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.address.push({
        city: "Medan",
        state: "SN",
        country: "SGN",
        street: "12 Main St",
    });
    const res = await user.save();
    console.log(res);
};

// addAddress("65ba3539048c6d1271b89d2a");
// end one to few
