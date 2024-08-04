// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 100
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minLength: 6
//     }
// }, {timestamps: true});

// // Pre-save hook to hash the password
// UserSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

// // Method to compare password
// UserSchema.methods.comparePassword = function(candidatePassword) {
//     return bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);
