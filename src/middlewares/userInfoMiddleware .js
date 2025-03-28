import { getUserInfoFromToken } from "../services/decodeToken"

const userInfoMiddleware = store => next => action => {
    const userInfo = getUserInfoFromToken();
    if (userInfo) {
        action.userInfo = userInfo;
    }
    return next(action);
};

export default userInfoMiddleware;