document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (path === href || (path === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  
    const searchInput = document.getElementById("search-input");
    const searchIcon = document.querySelector(".search-icon");
  
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query.length > 0) {
          alert(`Você buscou por: ${query}`);
        }
      }
    });
  
    searchIcon.addEventListener("click", () => {
      searchInput.focus();
    });
  });
  