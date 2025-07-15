document.addEventListener("DOMContentLoaded", () => {
  const courses = document.querySelectorAll(".course");

  function updateCourseStates() {
    courses.forEach(course => {
      const prereqs = course.dataset.prerequisites.split(",").filter(p => p);
      const name = course.dataset.name;
      const approved = JSON.parse(localStorage.getItem("approvedCourses") || "[]");

      if (approved.includes(name)) {
        course.classList.remove("pending", "locked");
        course.classList.add("approved");
      } else if (prereqs.length > 0 && !prereqs.every(p => approved.includes(p))) {
        course.classList.remove("pending", "approved");
        course.classList.add("locked");
      } else {
        course.classList.remove("approved", "locked");
        course.classList.add("pending");
      }
    });
  }

  courses.forEach(course => {
    course.addEventListener("click", () => {
      if (course.classList.contains("locked")) return;

      const name = course.dataset.name;
      let approved = JSON.parse(localStorage.getItem("approvedCourses") || "[]");

      if (approved.includes(name)) {
        approved = approved.filter(c => c !== name);
      } else {
        approved.push(name);
      }

      localStorage.setItem("approvedCourses", JSON.stringify(approved));
      updateCourseStates();
    });
  });

  updateCourseStates();
});
