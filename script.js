const projects = [
  { title: "Clean catch collective", category: "green", label: "Green ideas", description: "A community-led system for turning discarded fishing nets into useful products." },
  { title: "Harbour to home", category: "maritime", label: "Maritime", description: "A smarter, shared delivery service connecting small coastal producers to local buyers." },
  { title: "Blue skills studio", category: "enterprise", label: "Enterprise", description: "Short, hands-on workshops that help young makers test and sell their first idea." },
  { title: "Mangrove guardians", category: "green", label: "Green ideas", description: "Youth teams mapping and restoring mangroves while creating new income streams." },
  { title: "Tidewise logistics", category: "maritime", label: "Maritime", description: "Simple route planning that helps boats save fuel, time and money on every trip." },
  { title: "Coastal makers fund", category: "enterprise", label: "Enterprise", description: "A peer-supported micro-fund for ambitious local projects with a positive impact." }
];

const projectList = document.querySelector("#project-list");
const filterButtons = document.querySelectorAll(".filter-button");

function displayProjects(filter = "all") {
  projectList.innerHTML = "";
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  for (let index = 0; index < visibleProjects.length; index += 1) {
    const project = visibleProjects[index];
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `<span class="project-tag">${project.label}</span><h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(card);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    displayProjects(button.dataset.filter);
  });
});

const form = document.querySelector("#registration-form");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const interest = document.querySelector("#interest").value;

  if (!name || !email || !interest) {
    formMessage.textContent = "Please complete all three fields to register.";
    formMessage.className = "form-message error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.className = "form-message error";
    return;
  }

  formMessage.textContent = `Thanks, ${name.split(" ")[0]}! Your interest has been registered.`;
  formMessage.className = "form-message success";
  form.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});

displayProjects();