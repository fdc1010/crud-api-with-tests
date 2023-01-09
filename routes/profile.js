import { Router } from 'express';
import db from "../models/index.js";
const router = Router();

router.get('/*', async (req, res, next) => {
  const collection = db.mongoose.models['user'];
  console.log("collection",collection);
  const profile = await collection.find().populate(["vote","comment"]);
  console.log("profile",profile);
  res.render('profile_template', {
    profile: profile,
  });
});

export const profile = router;
