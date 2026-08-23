    const nav = document.querySelector(".nav");
    const cursor = document.querySelector(".cursor");

    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
    });

    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.style.width = "28px";
        cursor.style.height = "28px";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.width = "13px";
        cursor.style.height = "13px";
      });
    });

    const revealItems = document.querySelectorAll(".reveal, .project");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: .12 });

    revealItems.forEach(item => observer.observe(item));

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("open");
      });
    });

    document.querySelector(".menu-btn").addEventListener("click", () => {
      const links = document.querySelector(".nav-links");
      links.style.display = links.style.display === "flex" ? "none" : "flex";
      if (links.style.display === "flex") {
        links.style.position = "absolute";
        links.style.top = "60px";
        links.style.right = "15px";
        links.style.flexDirection = "column";
        links.style.padding = "18px";
        links.style.background = "var(--paper)";
        links.style.border = "1px solid var(--line)";
        links.style.borderRadius = "18px";
      }
    });

    document.getElementById("year").textContent = new Date().getFullYear();
