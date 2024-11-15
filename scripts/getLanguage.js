export async function getLanguage() {
    const activePage = window.location.pathname;
    const splitActivePage = activePage.slice(0,-1).split('/');
    const lastSegment = splitActivePage[splitActivePage.length-1];
    const result = ["es", "it"].includes(lastSegment) ? lastSegment : "";
    return result;
}