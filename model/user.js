import mongoose from "mongoose"

const personSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],


})
export default mongoose.model("User", personSchema)