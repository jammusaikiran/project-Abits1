import express from "express";
import collection from "./mongo.js";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
//import dotenv from "dotenv";
//import tweetRoutes from "./backend/routes/Routes.js";
//import connectDB from "./backend/config/db.js";

//dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

const saltRounds = 10;

//const port = 8000;

//app.use("/api", tweetRoutes);
//connectDB();

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for missing or invalid inputs
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // Check if the user exists in the database
    const user = await collection.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Generate JWT token
      const token = jwt.sign({ email: user.email, _id: user._id }, "yourSecretKey", { expiresIn: '60d' });
      console.log(token)
      // Set the token in a cookie for secure storage
      
      console.log("akjsdf")
      // Return a unified success response
      res.status(200).json({
        status: "success",
        data: {
          _id: user._id,
          email: user.email,
          token: token,
        },
      });
    } else {
      // Return a unified failure response for invalid password
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    // Log the error and return a unified error response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if user exists
  
  const check = await collection.findOne({ email });
  if (check) {
    // res.status(400);
    // return res.json({ error: 'exist' });
    return res.json({exist:"exist"});
  }

  // Hash password
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await collection.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    const token = jwt.sign({ email: user.email, _id: user._id }, "yourSecretKey", { expiresIn: '60d' });

    await collection.updateOne({ email: user.email }, { $set: { token: token } });

    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: token,
    });
  } else {
    res.status(400);
    return res.json({ error: 'wrong details' });
  }
});

app.post("/scoreupdata", async (req, resp) => {
  try {
    const {  name,score,jwtoken } = req.body;
  
    console.log(jwtoken)
    const result=jwt.verify(jwtoken,"yourSecretKey")
    // console.log("hello")
    console.log(result)
    console.log(score)
    // Use await to get the result of the findOne query
    const user = await collection.findOne({ email: result.email });
    console.log(user)
    if (!user) {
      return resp.status(404).send("User not found");
    }

    
    // Update the score property of the user
    user.score = score;

    // Use await to save the updated document
    const updatedUser = await user.save();

    if (updatedUser) {
      resp.send("Successfully stored");
    } else {
      resp.status(500).send("Error");
    }
  } catch (error) {
    console.log(error);
    resp.status(500).send("Internal Server Error");
  }
});



app.listen(8000, () => {
  console.log("port connected");
  //console.log(Server is listening at ${port});
});