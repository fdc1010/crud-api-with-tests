import { Router } from 'express';
import db from "../models/index.js";
const router = Router();

router.get('/*', async (req, res, next) => {
  const collection = db.mongoose.model('user');
  console.log("collection",collection);
  const profile = await collection.aggregate([
      {
          $lookup: { from : "comments", localField: "_id", foreignField: "user", as: "my_comments" }
      },
      {          
          $lookup: { from : "votes", localField: "_id", foreignField: "user", as: "my_votes" }
      },
      {          
          $lookup: { from : "comments", localField: "_id", foreignField: "commented_profile", as: "their_comments" }
      },
      {         
          $lookup: { from : "votes", localField: "_id", foreignField: "voted_profile", as: "their_votes" }
      },
      {
          $sort: { date: -1 }
      }
  ]);
  console.log("profile",profile[0]);
  res.render('profile_template', {
    profile: profile[0],
  });
});

export const profile = router;
