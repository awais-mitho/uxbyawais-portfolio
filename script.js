
// Typing animation
const roles = ["UI/UX Designer ", "Frontend App Developer "];
let idx = 0, charIdx = 0, isDel = false;
function typeEffect() {
    const typingSpan = document.getElementById("typing");
    if (idx >= roles.length) idx = 0;
    let current = roles[idx];
    if (!isDel) typingSpan.textContent = current.substring(0, charIdx++);
    else typingSpan.textContent = current.substring(0, charIdx--);
    if (!isDel && charIdx === current.length) { isDel = true; setTimeout(typeEffect, 1200); return; }
    if (isDel && charIdx === 0) { isDel = false; idx++; }
    setTimeout(typeEffect, isDel ? 50 : 100);
}
typeEffect();

// Scroll indicator click
document.getElementById("scrollIndicator")?.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute("id"); });
    navLinks.forEach(link => { link.classList.remove("active"); if (link.getAttribute("href").includes(current)) link.classList.add("active"); });
});

// Buttons
document.getElementById("viewWorkBtn").addEventListener("click", () => { document.getElementById("projects").scrollIntoView({ behavior: "smooth" }); });
document.getElementById("downloadCV").addEventListener("click", () => { window.open("cv.pdf", "_blank"); });
document.getElementById("contactBtn").addEventListener("click", () => { const top = document.getElementById("contact").offsetTop - 90; window.scrollTo({ top, behavior: "smooth" }); });
document.getElementById("aboutDownloadCV").addEventListener("click", () => { window.open("cv.pdf", "_blank"); });

// Skills observer
const progressDivs = document.querySelectorAll(".progress div");
const skillObserver = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.getAttribute("data-width"); } }); }, { threshold: 0.5 });
progressDivs.forEach(bar => skillObserver.observe(bar));

// Projects data
const projectsData = [
    {
        category: "uiux", img: "Master Mouse.png",
        title: "MX Master 3S Product Landing Page Design",
        short: "Modern gaming controller UI concept.",
        desc: "This project is a modern landing page concept inspired by the Logitech MX Master 3S. The goal was to design a sleek, high-conversion interface that highlights product features while maintaining a premium dark aesthetic.",
        tech: "Figma, UI Design, Prototyping",
        catName: "UI/UX Design",
        style: "Modern, Gaming, Dark Theme",
        live: "https://www.figma.com/design/YizFQFaYNWvSZKaTZiP2Wt/Mouse-Web-Page?node-id=0-1",
        behance: "https://www.behance.net/gallery/246524677/Logitech-MX-Master-3S-Landing-Page-Design",
        tags: ["Figma", "Photoshop"]
    },
    {
        category: "uiux", img: "Nike.png",
        title: "Nike Air Max 90 Landing Page Design", 
        short: "Sleek dark UI for Nike icon.", 
        desc: "Modern landing page concept inspired by Nike Air Max 90. Visually engaging and conversion-focused using premium dark UI.", 
        tech: "Figma, UI Design, Prototyping", 
        catName: "UI/UX Design", 
        style: "Dark UI, Minimal & Clean", 
        live: "https://www.figma.com/design/YizFQFaYNWvSZKaTZiP2Wt/Mouse-Web-Page", 
        behance: "https://www.behance.net/gallery/246524677/Logitech-MX-Master-3S-Landing-Page-Design", 
        tags: ["Figma", "Photoshop"]
    },
    {
        category: "web", img: "Doctor Web UI.png",
        title: "Medical Landing Page UI Design",
        short: "A clean and modern healthcare landing page focused on clarity and user-friendly design.",
        desc: "A modern healthcare landing page designed with a clean layout, soft visuals, and a strong focus on user experience and readability.", 
        tech: "Figma (UI/UX Design), Google Fonts", 
        catName: "Web Design", 
        style: "Minimal, Medical / Healthcare UI, Soft Color Palette, Professional & Modern", 
        live: "#", behance: "#", tags: ["Figma", "Photoshop", "HTML/CSS"]
    },
    {
        category: "dev",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        title: "React Dashboard", 
        short: "Scalable admin panel.", 
        desc: "Building performant, scalable web applications with clean, maintainable code.", 
        tech: "React, Node.js, TypeScript", 
        catName: "Development", 
        style: "Modern, Interactive", 
        live: "#", behance: "#", tags: ["React", "Node.js"]
    }
];
function renderProjects(filter = "all") {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    const filtered = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);
    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.setAttribute("data-category", p.category);
        card.setAttribute("data-img", p.img);
        card.setAttribute("data-title", p.title);
        card.setAttribute("data-short", p.short);
        card.setAttribute("data-desc", p.desc);
        card.setAttribute("data-tech", p.tech);
        card.setAttribute("data-categoryname", p.catName);
        card.setAttribute("data-style", p.style);
        card.setAttribute("data-live", p.live);
        card.setAttribute("data-behance", p.behance);
        card.innerHTML = `<div class="card-img"><img src="${p.img}" alt="${p.title}"><div class="overlay"></div><button class="arrow">↗</button></div><div class="card-content"><h3>${p.title}</h3><p>${p.short}</p><div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div></div>`;
        card.addEventListener("click", (e) => { if (!e.target.classList.contains("arrow")) openModal(card); });
        grid.appendChild(card);
    });
}
function openModal(card) {
    const modal = document.getElementById("projectModal");
    document.getElementById("modalImg").src = card.getAttribute("data-img");
    document.getElementById("modalTitle").innerText = card.getAttribute("data-title");
    document.getElementById("modalShort").innerText = card.getAttribute("data-short");
    document.getElementById("modalDesc").innerText = card.getAttribute("data-desc");
    document.getElementById("modalTech").innerText = card.getAttribute("data-tech");
    document.getElementById("modalCategory").innerText = card.getAttribute("data-categoryname");
    document.getElementById("modalStyle").innerText = card.getAttribute("data-style");
    document.getElementById("modalLive").href = card.getAttribute("data-live");
    document.getElementById("modalBehance").href = card.getAttribute("data-behance");
    modal.classList.add("show");
}
renderProjects();
const filterSpans = document.querySelectorAll(".project-categories span");
filterSpans.forEach(span => { span.addEventListener("click", () => { document.querySelector(".project-categories .active")?.classList.remove("active"); span.classList.add("active"); renderProjects(span.getAttribute("data-filter")); }); });
document.getElementById("seeAllBtn")?.addEventListener("click", () => { renderProjects("all"); document.querySelector(".project-categories .active")?.classList.remove("active"); document.querySelector(".project-categories span[data-filter='all']")?.classList.add("active"); });
document.getElementById("closeModal")?.addEventListener("click", () => { document.getElementById("projectModal").classList.remove("show"); });
window.addEventListener("click", (e) => { if (e.target === document.getElementById("projectModal")) document.getElementById("projectModal").classList.remove("show"); });

// Contact actions
document.getElementById("emailBox")?.addEventListener("click", () => { window.open("https://mail.google.com/mail/?view=cm&fs=1&to=awaismitho7@gmail.com", "_blank"); });
document.getElementById("locationBox")?.addEventListener("click", () => { window.open("https://www.google.com/maps?q=Hyderabad,Pakistan", "_blank"); });
document.getElementById("instagramBox")?.addEventListener("click", () => { window.open("https://instagram.com/uxbyawais", "_blank"); });
document.getElementById("linkedinIcon")?.addEventListener("click", () => { window.open("https://www.linkedin.com/in/awais-mitho-khokhar-042938313/", "_blank"); });
document.getElementById("behanceIcon")?.addEventListener("click", () => { window.open("https://www.behance.net/awaisrathore", "_blank"); });
document.getElementById("sendBtn")?.addEventListener("click", () => { alert("✅ Your message has been sent successfully!"); document.getElementById("formName").value = ""; document.getElementById("formEmail").value = ""; document.getElementById("formSubject").value = ""; document.getElementById("formMsg").value = ""; });
document.getElementById("footerLinkedIn")?.addEventListener("click", () => { window.open("https://www.linkedin.com/in/awais-mitho-khokhar-042938313/", "_blank"); });
document.getElementById("footerBehance")?.addEventListener("click", () => { window.open("https://www.behance.net/awaisrathore", "_blank"); });
document.getElementById("footerInstagram")?.addEventListener("click", () => { window.open("https://instagram.com/uxbyawais", "_blank"); });
document.getElementById("subBtn")?.addEventListener("click", () => { let email = document.getElementById("newsEmail").value; if (email) alert(`Thanks for subscribing ${email}!`); else alert("Please enter email."); });
