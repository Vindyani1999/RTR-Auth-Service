// import Admin from '../models/Admin';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const registerUser = async (userData: any) => {
//   const hashedPassword = await bcrypt.hash(userData.password, 10);
//   const user = new User({ ...userData, password: hashedPassword });
//   await user.save();
//   return user;
// };

// const loginUser = async (credentials: any) => {
//   const user = await User.findOne({ email: credentials.email });
//   if (!user) throw new Error('User not found');

//   const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid credentials');

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   return token;
// };

// export default { registerUser, loginUser };
