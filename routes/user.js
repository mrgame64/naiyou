GLOBAL.UserSchema = new Schema({
  uname:            { type: String, required: true, trim: true },
  password:         { type: String, required: true, set: hashPassword },
  email:            { type: String, required: true, trim: true, lowercase: true },
  regDate:          { type: Number, required: true },
  active:           { type: Boolean, required: true },
  
  privileges:       {},
  
  dname:            { type: String, required: true, trim: true },
  desc:             { type: String, required: true, trim: true, length: 140 }
  dpic:             { type: String, required: true }
});

GLOBAL.User = mongoose.model('User', UserSchema);
