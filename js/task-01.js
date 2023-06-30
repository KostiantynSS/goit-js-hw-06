const listCategories = document.querySelectorAll(".item");
function categoryCounter() {
    return listCategories.length;
}
console.log("Number of categories:", categoryCounter());
listCategories.forEach((category) => {
    console.log(
        "Category:",
        category.firstElementChild.textContent,
        "",
        "Elements:",
        category.lastElementChild.children.length
    );
});
