
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
        live: "https://www.figma.com/design/CGO0wT6xX05WLtdoH96XxA/WEB-Page-UX?node-id=0-1&p=f&t=3L8Uv77JHDawQ0ev-0", 
        behance: "https://www.behance.net/gallery/246587503/Medical-Healthcare-Landing-Page-Design", tags: ["Figma", "Photoshop", "HTML/CSS"]
    },
    {
        category: "uiux", img: "Gaming.png",
        title: "DualSense Gaming Controller UI Design",
        short: "A modern gaming product UI focused on bold visuals, clean layout, and a high-conversion eCommerce experience.",
        desc: "A modern healthcare landing page designed with a clean layout, soft visuals, and a strong focus on user experience and readability.",
        tech: "Figma (UI/UX Design), Adobe Photoshop",
        catName: "UI/UX Design",
        style: "Dark UI (Gaming Aesthetic), Bold & Vibrant Color Scheme, Minimal & Clean Layout, High Contrast & Modern Typography",
        live: "https://www.figma.com/design/ZrPm7usXLz48S5WDvuEEwc/Gaming?node-id=1-2&t=7s5LbbO6OQ7Hgufp-0", 
        behance: "https://www.behance.net/gallery/246690381/DualSense-Gaming-Controller-UI-Design", tags: ["Figma", "Photoshop",]
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
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("2vRiXcUPMouelk2Jr"); // Replace with your actual Public Key
})();

// Handle contact form submission
document.getElementById("sendBtn")?.addEventListener("click", async () => {
    // Get form values
    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    const subject = document.getElementById("formSubject").value;
    const message = document.getElementById("formMsg").value;
    
    // Validate form fields
    if (!name || !email || !subject || !message) {
        alert("❌ Please fill in all fields before sending.");
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("❌ Please enter a valid email address.");
        return;
    }
    
    // Show sending status
    const sendBtn = document.getElementById("sendBtn");
    const originalText = sendBtn.textContent;
    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;
    
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "awaismitho7@gmail.com" // Your email
    };
    
    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            "service_p2tnmgm",      // Replace with your Service ID
            "template_kubf3rv",     // Replace with your Template ID
            templateParams
        );
        
        if (response.status === 200) {
            // Success message
            alert(`✅ Thank you ${name}! Your message has been sent successfully. I'll get back to you soon!`);
            
            // Clear form
            document.getElementById("formName").value = "";
            document.getElementById("formEmail").value = "";
            document.getElementById("formSubject").value = "";
            document.getElementById("formMsg").value = "";
        } else {
            alert("❌ Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Please try again later.");
    } finally {
        // Reset button state
        sendBtn.textContent = originalText;
        sendBtn.disabled = false;
    }
});
document.getElementById("footerLinkedIn")?.addEventListener("click", () => { window.open("https://www.linkedin.com/in/awais-mitho-khokhar-042938313/", "_blank"); });
document.getElementById("footerBehance")?.addEventListener("click", () => { window.open("https://www.behance.net/awaisrathore", "_blank"); });
document.getElementById("footerInstagram")?.addEventListener("click", () => { window.open("https://instagram.com/uxbyawais", "_blank"); });
document.getElementById("subBtn")?.addEventListener("click", () => { let email = document.getElementById("newsEmail").value; if (email) alert(`Thanks for subscribing ${email}!`); else alert("Please enter email."); });

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navbarNav = document.querySelector('nav');

if (menuToggle && navbarNav) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarNav.classList.toggle('show');
        const icon = menuToggle.querySelector('i');
        if (navbarNav.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    document.addEventListener('click', (event) => {
        if (navbarNav.classList.contains('show') && 
            !navbarNav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            navbarNav.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}


// ========== SCROLL REVEAL ANIMATIONS ==========

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        rect.top <= windowHeight - 100 &&
        rect.bottom >= 100 &&
        rect.left <= windowWidth &&
        rect.right >= 0
    );
}

// Add reveal classes to elements
function addRevealClasses() {
    // Hero elements (already animated with CSS, just add reveal class for consistency)
    document.querySelectorAll('.hero .left, .hero .right').forEach(el => {
        el.classList.add('reveal');
    });
    
    // About section
    const aboutImg = document.querySelector('.about-img');
    const aboutRight = document.querySelector('.about-right');
    if (aboutImg) aboutImg.classList.add('reveal-scale');
    if (aboutRight) aboutRight.classList.add('reveal-right');
    
    // Section headers
    document.querySelectorAll('.skills-header, .services-header, .contact-header, .about-header').forEach(el => {
        el.classList.add('reveal');
    });
    
    // Stats
    const stats = document.querySelector('.stats');
    if (stats) stats.classList.add('reveal');
    
    // Skill cards
    document.querySelectorAll('.skill-card').forEach(el => {
        el.classList.add('reveal');
    });
    
    // Project cards
    document.querySelectorAll('.service-card').forEach(el => {
        el.classList.add('reveal');
    });
    
    // Contact sections
    const contactLeft = document.querySelector('.contact-left');
    const contactRight = document.querySelector('.contact-right');
    if (contactLeft) contactLeft.classList.add('reveal-left');
    if (contactRight) contactRight.classList.add('reveal-right');
    
    // Footer columns
    document.querySelectorAll('.footer-col').forEach(el => {
        el.classList.add('reveal');
    });
    
    // Project categories
    const categories = document.querySelector('.project-categories');
    if (categories) categories.classList.add('reveal');
}

// Function to reveal elements on scroll
function revealOnScroll() {
    // Reveal section headers
    document.querySelectorAll('.skills-header, .services-header, .contact-header, .about-header, .project-categories, .stats').forEach(el => {
        if (isInViewport(el) && !el.classList.contains('active')) {
            el.classList.add('active');
        }
    });
    
    // Reveal about images
    document.querySelectorAll('.about-img, .about-right').forEach(el => {
        if (isInViewport(el) && !el.classList.contains('active')) {
            el.classList.add('active');
        }
    });
    
    // Reveal skill cards with stagger effect
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        if (isInViewport(card) && !card.classList.contains('revealed')) {
            setTimeout(() => {
                card.classList.add('revealed');
            }, index * 100);
        }
    });
    
    // Reveal project cards with stagger effect
    const projectCards = document.querySelectorAll('.service-card');
    projectCards.forEach((card, index) => {
        if (isInViewport(card) && !card.classList.contains('revealed')) {
            setTimeout(() => {
                card.classList.add('revealed');
            }, index * 100);
        }
    });
    
    // Reveal contact sections
    const contactLeft = document.querySelector('.contact-left');
    const contactRight = document.querySelector('.contact-right');
    if (contactLeft && isInViewport(contactLeft) && !contactLeft.classList.contains('revealed')) {
        contactLeft.classList.add('revealed');
    }
    if (contactRight && isInViewport(contactRight) && !contactRight.classList.contains('revealed')) {
        contactRight.classList.add('revealed');
    }
    
    // Reveal footer columns
    const footerCols = document.querySelectorAll('.footer-col');
    footerCols.forEach((col, index) => {
        if (isInViewport(col) && !col.classList.contains('revealed')) {
            setTimeout(() => {
                col.classList.add('revealed');
            }, index * 100);
        }
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    addRevealClasses();
    
    // Small delay to ensure all elements are loaded
    setTimeout(() => {
        revealOnScroll();
        
        // Also trigger animation for elements already in viewport on load
        const allRevealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        allRevealElements.forEach(el => {
            if (isInViewport(el) && !el.classList.contains('active')) {
                el.classList.add('active');
            }
        });
        
        // Force reveal skill cards in viewport
        document.querySelectorAll('.skill-card').forEach(card => {
            if (isInViewport(card) && !card.classList.contains('revealed')) {
                card.classList.add('revealed');
            }
        });
        
        // Force reveal project cards in viewport
        document.querySelectorAll('.service-card').forEach(card => {
            if (isInViewport(card) && !card.classList.contains('revealed')) {
                card.classList.add('revealed');
            }
        });
    }, 100);
});

// Listen for scroll events with performance optimization
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(() => {
        revealOnScroll();
    });
});

// Also reveal on resize
window.addEventListener('resize', () => {
    revealOnScroll();
});

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    if (hero && scrollPosition < 600) {
        const left = document.querySelector('.hero .left');
        const right = document.querySelector('.hero .right');
        if (left) left.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        if (right) right.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
});

// Add hover animation for skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add smooth number counter for stats (optional)
function animateNumbers() {
    const stats = document.querySelectorAll('.stats h3');
    const hasAnimated = false;
    
    stats.forEach(stat => {
        const text = stat.innerText;
        const number = parseInt(text);
        if (!isNaN(number) && stat.getAttribute('data-animated') !== 'true') {
            if (isInViewport(stat.parentElement)) {
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        stat.innerText = text;
                        clearInterval(timer);
                        stat.setAttribute('data-animated', 'true');
                    } else {
                        stat.innerText = Math.floor(current) + (text.includes('+') ? '+' : '') + (text.includes('%') ? '%' : '');
                    }
                }, 20);
            }
        }
    });
}

// Add this to scroll reveal
window.addEventListener('scroll', () => {
    animateNumbers();
});

// Initial call for number animation
setTimeout(animateNumbers, 500);
