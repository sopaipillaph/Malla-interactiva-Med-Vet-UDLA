
document.addEventListener("DOMContentLoaded", () => {
    const ramos = document.querySelectorAll(".ramo");

    function updateStates() {
        ramos.forEach(ramo => {
            const prereqs = ramo.dataset.prereqs ? ramo.dataset.prereqs.split(",") : [];
            const allApproved = prereqs.every(id => {
                const prereqEl = document.getElementById(id);
                return prereqEl && prereqEl.classList.contains("aprobado");
            });
            if (prereqs.length > 0 && !allApproved) {
                ramo.classList.add("bloqueado");
                ramo.classList.remove("pendiente");
                ramo.classList.remove("aprobado");
            } else if (!ramo.classList.contains("aprobado")) {
                ramo.classList.remove("bloqueado");
                ramo.classList.add("pendiente");
            }
        });
    }

    ramos.forEach(ramo => {
        ramo.addEventListener("click", () => {
            if (ramo.classList.contains("bloqueado")) return;
            ramo.classList.toggle("aprobado");
            ramo.classList.toggle("pendiente");
            updateStates();
        });
    });

    updateStates();
});
