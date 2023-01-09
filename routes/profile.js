import { Router } from 'express';
import db from "../models/index.js";
const router = Router();

router.get('/*', async (req, res, next) => {
  const collection = db.mongoose.model('user');
  console.log("collection",collection);
  const profile = await collection.findOne({});
  console.log("profile",profile);
  res.render('profile_template', {
    profile: profile,
  });
});

export const profile = router;
