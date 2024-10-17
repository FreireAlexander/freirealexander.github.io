window.onload = function(){
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    document.getElementById("copyright-year").textContent = currentYear;
}