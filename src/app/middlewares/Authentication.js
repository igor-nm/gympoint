import jwt from "jsonwebtoken";
import { promisify } from "util";

import auth_config from "../../config/auth";

export default async (request, response, next) => {
    const auth = request.headers.authorization;

    if (!auth) {
        return response.status(401).json({ error: "Token not provided" });
    }

    const [, token] = auth.split(" ");

    try {
        const decoded = await promisify(jwt.verify)(token, auth_config.secrect);
        request.user_id = decoded.id;

        return next();
    } catch (exception) {
        return response.status(401).json({ error: "Invalid token" });
    }
};
