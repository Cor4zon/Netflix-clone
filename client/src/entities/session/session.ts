
type User = {
    email: 'string',
    JWT: 'string',
};

const createSessionEntity = () => {
    const sessionData = {};
    const setSession = (userInfo: null | User) => {
        if (userInfo) {
            localStorage.setItem("JWT", userInfo.JWT);
        } else {
            localStorage.setItem("JWT", "");
        }
    }

    const reset = () => {
        setSession(null);
    }


    return {
        sessionData,
        setSession,
        reset,
    }
}

export const sessionEntity = createSessionEntity();