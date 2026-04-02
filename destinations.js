document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");
    const noResult = document.getElementById("noResult");

    // ===== SEARCH FUNCTION =====
    window.searchDestination = function () {
        const input = searchInput.value.toLowerCase().trim();
        let found = false;

        cards.forEach(card => {
            const name = card.getAttribute("data-name");

            if (name.includes(input) && input !== "") {
                card.style.display = "block";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        noResult.style.display = (!found && input !== "") ? "block" : "none";
    };

    // ===== SHOW NONE WHEN EMPTY =====
    searchInput.addEventListener("input", function () {
        if (this.value.trim() === "") {
            cards.forEach(card => {
                card.style.display = "none";
            });
            noResult.style.display = "none";
        }
    });

    // ===== ENTER KEY SUPPORT =====
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchDestination();
        }
    });

});

// ===== VIEW ON MAP =====
function openMap(place) {
    const url = "https://www.google.com/maps/search/" + encodeURIComponent(place);
    window.open(url, "_blank");
}

// ===== SAVE TOGGLE =====
function saveDestination(button) {
    if (button.innerText.includes("Save")) {
        button.innerText = "⭐ Saved";
        button.style.background = "#2e8b57";
    } else {
        button.innerText = "⭐ Save";
        button.style.background = "#8b4513";
    }
}

// ===== GO HOME =====
function goHome() {
    window.location.href = "trav.html";
}
