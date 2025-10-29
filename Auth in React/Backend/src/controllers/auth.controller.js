import { AuthModel } from "../models/auth.model.js";
import { createAccessToken, createRefreshToken } from "../utils/tokens.js";

// Login 
export const handleLogin = async (req, res) => {
  try {
    console.log("Req : ", req);
    const { email, password } = req.body;

    if (!(email && password))
      return res.status(400).json({ message: "Credential missing" });

    const user = await AuthModel.findOne({ email });

    if (!user) return res.status(401).json({ message: "Invalid credential" });

    const response = await user.isPasswordCorrect(password);

    if (response === false) return res.status(401).json({ message: "Invalid credential" });
 
    try {
      res.clearCookie("refreshToken", { secure : true, httpOnly : true, sameSite : "strict"})
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }

    const refreshToken = await createRefreshToken(user._id)
    const accessToken = await createAccessToken(user._id)

    res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          // secure: true,
          // sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

    res.status(200).json({
              message: "User Logged In Successfully.",
              accessToken
            });

  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};


// Sing up 
export const handleSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password))
      return res.status(400).json({ message: "Credential missing" });

    const userexists = await AuthModel.findOne({ email });

    if (userexists)
      return res
        .status(409)
        .json({ message: "User already exists. Please Sign In." });

    const userInstance = await AuthModel.create({
      username,
      email,
      password,
    });

    const refreshToken = await createRefreshToken(userInstance._id)
    const accessToken = await createAccessToken(userInstance._id)

    res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          // secure: true,
          // sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

    res.status(201).json({
              message: "User Created Successfully.",
              accessToken: accessToken,
            });

  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

// handle Refresh 
export const handleRefresh = async (req, res) => {

  res.send({
    status : "ok"
  })
}

export const handleLogout = async (req, res) => {
  res.clearCookie("refreshToken", 
    {
      secure : true,
      httpOnly: true,
      sameSite : "strict",
    }
  )

  return res.send({
    work : "done"
  })
}