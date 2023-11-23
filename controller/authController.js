const bcrypt = require("bcrypt");
const { users } = require("../model");

exports.renderRegisterForm = (req, res) => {
  res.render("register");
};

exports.registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  await users.create({
    email,
    username,
    password: bcrypt.hashSync(password, 10),
  });
  res.send("User registered successfully");
};

exports.renderLoginForm = (req, res) => {
  res.render("login");
};

exports.loginUser = async (req, res) => {
  // access email and password
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("please provide email and password");
  }

  // check if email exists or not
  const user = await users.findAll({
    where: {
      email: email,
    },
  });
  if (user.length == 0) {
    res.send("Invalid email or password");
  } else {
    // check password matches or not
    const isPasswordMatched = bcrypt.compareSync(password, user[0].password);
    if (!isPasswordMatched) {
      res.send("logged in successfullt");
    } else {
      res.send("Invalid password");
    }
  }
};
