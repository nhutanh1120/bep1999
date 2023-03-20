export function formatNumber(numStr) {
    const number = numStr
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(\d{3})(?=[^$|^-])/g, "$1.")
        .split("")
        .reverse()
        .join("");
    return number;
}
