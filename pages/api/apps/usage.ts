import dbConnect from "lib/dbConnect";
import handler from 'lib/handler';
import { isAdminMiddleware } from 'middleware/checkUser';
import nextConnect from 'next-connect';

import { checkUser } from 'lib/checkUser';
import App, { Usage } from "models/app";
import User from "models/user";

export default nextConnect(handler)
    .use(isAdminMiddleware)
    .post(async (req, res) => {
        try {
            await dbConnect();
            const { userId, appId } = req.body;
            const existingUser = await User.findById(userId);
            if (!existingUser) {
                return res.status(404).json({ message: 'User not found!' });
            }

            const result = await checkUser(req, existingUser);
            if (!result.verified) {
                return res.status(403).json({ verified: result.verified, message: result.message });
            }
            // check if user is admin of not 
            if (result.isAdmin !== true) {
                return res.status(403).json({ message: 'You are not authorized to create app!' });
            }

            // user is verified
            const existingApp = await App.findOne({ appId: appId });
            if (!existingApp) {
                return res.status(403).json({ message: `App doesn't  exist!` });
            }
            const usages = await Usage.find({appId:appId});
            const output = {
                appId: existingApp.appId,
                usage: usages
            }

            // return application
            return res.status(200).json({ message: "Usage fetched successfully", result: output, success: true });


        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: error.message ?? "Internal Server Error" });
        }
    })