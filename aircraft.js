document.addEventListener("DOMContentLoaded", function () {
    addCurrentYearToFooter();
    smoothScrolling();
  });
  
  function addCurrentYearToFooter() {
    const currentYear = new Date().getFullYear();
    const footer = document.createElement("footer");
    const footerText = document.createTextNode(`© ${currentYear} Aircraft Arresting. All rights reserved.`);
  
    footer.appendChild(footerText);
    footer.style.textAlign = "center";
    footer.style.padding = "1rem 0";
    footer.style.backgroundColor = "#333";
    footer.style.color = "#fff";
    footer.style.marginTop = "2rem";
    
    document.body.appendChild(footer);
  }
  
  function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (!targetElement) return;
  
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
  