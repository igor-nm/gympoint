import * as Yup from "yup";
import jwt from "jsonwebtoken";

import User from "../models/User";
import auth_config from "../../config/auth";

class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response
                .status(400)
                .json({ error: "Check json structure!" });
        }

        const { email, password } = request.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return response.status(401).json({ error: "User not found!" });
        }

        if (!(await user.checkPassword(password))) {
            return response
                .status(401)
                .json({ error: "Password doesn't match" });
        }

        const { id, name } = user;

        const token = jwt.sign({ id }, auth_config.secrect, {
            expiresIn: auth_config.expiresIn,
        });

        return response.json({ user: { id, name, email }, token });
    }
}

export default new SessionController();
