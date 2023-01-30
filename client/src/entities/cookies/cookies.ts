const cookiesModel = () => {
    const IS_COOKIES_ACCEPTED = "COOKIES_ACCEPTED";

    const isAccepted = () => {
        !!localStorage.getItem(IS_COOKIES_ACCEPTED);
    }

    const accept = () => {
        localStorage.setItem(IS_COOKIES_ACCEPTED, "true");
    }
    
    const reset = () => {
        localStorage.removeItem(IS_COOKIES_ACCEPTED)
    }
    return {
        accept,
        isAccepted,
        reset,
    }
}

export const cookiesEntity = cookiesModel();