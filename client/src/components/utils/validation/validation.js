export const isEmpty = (value) => {
    if (!value) return true;
    return false;
};

export const isMatch = (a, b) => {
    if (a === b) return true;
    return false;
};

export const isLength = (a, length) => {
    if (a.length < length) return true;
    return false;
};
