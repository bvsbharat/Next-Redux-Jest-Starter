import dbConnect from "../../../../dbConnect";
import { Users } from "../../../../models";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const users = await Users.find({});
                return res.status(200).json({ success: true, data: users });
            } catch (err) {
                return res
                    .status(400)
                    .json({ success: false, message: err.message });
            }
        case "POST":
            try {
                const users = new Users(req.body);
                await users.save();

                return res.status(201).json({ success: true, data: users });
            } catch (err) {
                return res
                    .status(400)
                    .json({ success: false, message: err.message });
            }
        default:
            res.status(400).json({ success: false });
            break;
    }

    res.status(200).json(data);
};
