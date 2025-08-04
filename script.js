const courses = [
  {
    title: "HTML Basics",
    description: "Learn the foundation of HTML structure and syntax.",
    link: "https://www.youtube.com/watch?v=pQN-pnXPaVg", // HTML Crash Course
  },
  {
    title: "CSS Fundamentals",
    description: "Style web pages using CSS for design and layout.",
    link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc", // CSS Tutorial
  },
  {
    title: "JavaScript Essentials",
    description: "Add interactivity and logic to your websites.",
    link: "https://www.youtube.com/watch?v=PkZNo7MFNFg", // JS Full Course
  },
  {
    title: "Java Programming",
    description:
      "Master Java fundamentals, OOP concepts, and real-world applications.",
    link: "https://www.youtube.com/watch?v=grEKMHGYyns", // Java for Beginners
  },
  {
    title: "Data Structures & Algorithms (DSA)",
    description:
      "Strengthen your problem-solving skills with in-depth DSA concepts.",
    link: "https://www.youtube.com/watch?v=8hly31xKli0", // DSA in Java
  },
  {
    title: "Placement Interview Preparation",
    description:
      "Prepare for technical and HR interviews with mock tests and guidance.",
    link: "https://www.youtube.com/watch?v=I_xLMmNeLDY", // Placement Prep Guide
  },
];


function populateCourses() {
  const list = document.querySelector(".course-list");
  list.innerHTML = "";
  courses.forEach((course) => {
    const item = document.createElement("div");
    item.className = "course-item";
    item.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <a href="${course.link}">Learn More</a>
    `;
    list.appendChild(item);
  });
}

function handleScrollAnimation() {
  const fadeElements = document.querySelectorAll(".fade-in");
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateCourses();
  handleScrollAnimation();
  window.addEventListener("scroll", handleScrollAnimation);
});
