import handler from 'lib/handler';
import {getUser} from 'lib/checkUser';
import Page from "models/page";
import Post from "models/post";
import dbConnect from "lib/dbConnect";

import nextConnect from 'next-connect';


export default nextConnect(handler)
    .post(async (req, res, next) => {
        try {
            await dbConnect();
            const { slug, title, type,postId, increase } = req.body;
            if (!slug || !type) {
                return res.status(400).json({ error: "Missing slug or type" });
            }
            const session = await getUser(req);
            if(postId)
            {
                const post = await Post.findById(postId);
                if (!post) {
                    return res.status(400).json({ error: "Post not found" });
                }
                console.log(post.analytics.toString());
                const page = await Page.findById(post.analytics.toString());
                if (!page) {
                    return res.status(400).json({ error: "Page not found" });
                }

                page.slug = slug;
                page.title = title;
                page.type = 'article';

                // Loop through the increase array and update views and shares
                increase.forEach((action) => {
                    page.analytics.push({
                        sessionId: session?.jti || null,
                        userId: session?.user ? session?.user.id : null,
                        action,
                    });
                });

                await page.save();
                return res.status(200).json({ message: "View updated successfully for the article" });

            }

            let page = await Page.findOne({ slug, type });
            if (!page) {
                page = new Page({ slug, title, type });
            }
            // Loop through the increase array and update views and shares
            increase.forEach((action) => {
                page.analytics.push({
                    sessionId: session?.jti || null,
                    userId: session?.user ? session?.user.id : null,
                    action,
                });
            });

            await page.save();

            return res.status(200).json({ message: "View updated successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal server error", message: error.message });
        }
    }
    )

