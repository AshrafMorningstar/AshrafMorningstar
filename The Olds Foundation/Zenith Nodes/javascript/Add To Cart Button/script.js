addToCartButton = document.querySelectorAll(".add-to-cart-button");
document
    .querySelectorAll(".add-to-cart-button")
    .forEach(function (addToCartButton) {
        addToCartButton.addEventListener("click", function () {
            addToCartButton.classList.add("added");
            setTimeout(function () {
                addToCartButton.classList.remove("added");
            }, 2000);
        });
    });

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar