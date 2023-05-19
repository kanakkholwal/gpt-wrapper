import handler from 'lib/handler';
import Post from "models/post";
import User from "models/user";
import dbConnect from "lib/dbConnect";
import { hasTokenMiddleware } from 'middleware/checkUser';
import nextConnect from 'next-connect';
import { checkUser } from 'lib/checkUser';

export default nextConnect(handler)
  .use(hasTokenMiddleware)
  .post(async (req, res) => {
    try {
      await dbConnect();

      const { postId ,userId} = req.query;
          
      const existingUser = await User.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found!' });
      }
    
      const result = await checkUser(req, existingUser);
      if (!result.verified) {
        return res.status(404).json({ verified: result.verified, message: result.message });
      }
    
      const existingPost = await Post.findById(postId).select('+content');
      if (!existingPost) {
        return res.status(404).json({ message: 'Post not found!' });
      }

      return res.status(200).json({ message: 'Post Fetched Successfully!', post: existingPost });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err.message || "Something went wrong",
      });
    }
  })
  .put(async (req, res) => {
    try {
      await dbConnect();

      const { postId ,userId} = req.query;
      const { post } = req.body;
          
      const existingUser = await User.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found!' });
      }
    
      const result = await checkUser(req, existingUser);
      if (!result.verified) {
        return res.status(404).json({ verified: result.verified, message: result.message });
      }
    
      const existingPost = await Post.findById(postId);
      if (!existingPost) {
        return res.status(404).json({ message: 'Post not found!' });
      }

      const existingPostWithSlug = await Post.findOne({ slug: post.slug });
      if (existingPostWithSlug) {
        return res.status(409).json({ message: 'Post with this slug already exists!' });
      }

      const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        {
          $set: {
            title: post.title,
            slug: post.slug,
            description: post.description,
            content: post.content,
            labels: post.labels.map((item) => item.trim()),
            image: post.image,
            state: post.state,
            author: {
              name: existingUser.name,
              profileURL: existingUser.profileURL,
              user: existingUser.id
            },
            comments: post.comments,
            publishedAt: post.state === 'published' ? Date.now() : null
          }
        },
        { new: true }
      ).select("+content");

      if (!updatedPost) {
        return res.status(500).json({ message: 'Unable to update the post!' });
      }

      return res.status(200).json({ message: 'Post Updated Successfully!', post: updatedPost });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err.message || "Something went wrong",
      });
    }
  });