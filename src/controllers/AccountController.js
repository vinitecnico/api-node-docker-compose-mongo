import User from '../database/user';

export default {
  list: async (req, res) => {
    try {
      const data = await User.find({});
      res.json({ message: 'Accounts found', data });
    } catch (e) {
      console.error(e);
      res.json({ message: 'Somethings wrong', error: e });
    }
  },
  create: async (req, res) => {
    try {
      const response = await User.create({ name: 'test', email: 'teste@test.com' });
      res.json({ message: 'Account Created', response });
    } catch (e) {
      console.error(e);
      res.json({ message: 'Somethings wrong', error: e });
    }
  },
};
