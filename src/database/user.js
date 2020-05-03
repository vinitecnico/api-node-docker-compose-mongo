import mongoose from './connection';

const schema = {
  name: { type: mongoose.SchemaTypes.String, required: true },
  email: { type: mongoose.SchemaTypes.String, required: true },
};

const collectionName = 'users';
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName, userSchema);
export default User;
