document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        course.addEventListener("click", function () {
            if (course.classList.contains("locked")) return;

            course.classList.toggle("approved");
            course.classList.toggle("pending");

            if (course.classList.contains("approved")) {
                course.style.backgroundColor = "purple";
                course.style.textDecoration = "line-through";
            } else {
                course.style.backgroundColor = "pink";
                course.style.textDecoration = "none";
            }

            updatePrerequisites();
        });
    });

    function updatePrerequisites() {
        courses.forEach(course => {
            const prereqs = course.dataset.prereq ? course.dataset.prereq.split(",") : [];
            const allApproved = prereqs.every(id => {
                const prereqCourse = document.getElementById(id.trim());
                return prereqCourse && prereqCourse.classList.contains("approved");
            });

            if (prereqs.length > 0) {
                if (allApproved) {
                    course.classList.remove("locked");
                    course.style.backgroundColor = "pink";
                } else {
                    course.classList.add("locked");
                    course.style.backgroundColor = "gray";
                }
            }
        });
    }

    updatePrerequisites();
});
