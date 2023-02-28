import User from "../models/User.js";

import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";
const JWT_SECRET =
  '3/@5jdiiadsjp[/.<>?:"QAqaEWSDRTGFDVNJUIOP{:|}+_)(*&^%BNM<BVCXZSDFGHJKL';
export const SignupController = async (req, res) => {
  const { email, password } = req.body;

  let userExist = await User.findOne({ email });

  if (userExist) {
    res.send({ message: "user Already exists" });
    return;
  }
  async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
  const securepass = await hashPassword(password);
  try {
    let user = new User({ ...req.body, password: securepass });
    let result = await user.save();
    res.send({ message: "Registration successfull" });
  } catch (err) {
    console.log({ message: "something went wrong please try aain" });
  }
};

// login controller

export const LoginController = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  if (!userExist) {
    return res.send({ error: "User Not Found" });
  }
  try {
    if (await bcrypt.compare(password, userExist.password)) {
      // let token = jwt.sign({}, JWT_SECRET);

      if (res.status(201)) {
        // return res.cookie("jwtoken", token, {
        //   expires: new Date(Date.now() + 25892000000),
        //   httpOnly: true,
        // });

        return res.send({ loginUserData: userExist });
      } else {
        return res.json({ status: "error" });
      }
    }
    return res.send({ status: "error", error: "Invalid password" });
  } catch (e) {
    console.log("some error accoured please try agail letter");
    res.send("some error accoured please try agail letter");
  }
};

// getData

export const getData = async (req, res) => {
  const { email } = req.body;
  const result = await User.find({});
  if (result) {
    return res.send(result);
  }
  return res.send({ error: "user Not found" });
};
