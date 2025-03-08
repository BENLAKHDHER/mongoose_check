import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./model/user.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URI).then(console.log("DB connected"));
// async function start() {
//     const person = await User.create({
//         name: "seif",
//         age: 30,
//         favoriteFoods: ["pizza"],
//     });
// }
// start();
// async function start() {
//     const people = [
//         { name: "safa", age: 20, favoriteFoods: ["makrouna", "kosksi", "mlokhia"] },
//         { name: "zak", age: 25, favoriteFoods: ["salade", "kosksi", "mlokhia"] },
//         { name: "anis", age: 18, favoriteFoods: ["makrouna", "kosksi", "lablebi"] },
//         { name: "noamen", age: 13, favoriteFoods: ["kosksi", "mlokhia"] },
//     ];
//     await User.create(people);
// }
// start();
// async function start() {
//     const user = await User.find({ name: "zak" })
//     console.log(user);
// }
// start()
// async function start() {
//     const user = await User.findOne({ favoriteFoods: "pizza" })
//     console.log(user);
// }
// start()
// async function start() {
//     const user = await User.findById("67c0c237b96dfe9bcb5dd98c")
//     console.log(user)
// }
// start()
// async function start() {
//     const user = await User.findByIdAndUpdate("67c0c237b96dfe9bcb5dd98b", {
//         $push: { favoriteFoods: "hamburrger" },
//     })
// }
// start()
// async function start() {
//     const user = await User.findOneAndUpdate({ name: "noamen" }, {
//         age: 20
//     })
// }
// start()
// async function start() {
//     const user = await User.findByIdAndDelete("67c0c237b96dfe9bcb5dd98b")
// }
// start()
// async function start() {
//     const user = await User.deleteMany({ favoriteFoods: "kosksi" })
// }
//start()
async function start() {
    const users = await User.find({ favoriteFoods: "kosksi" })
        .sort("name")
        .select("-age")
        .limit(2)
    console.log(users)
}
start()


app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
});
