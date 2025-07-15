
document.addEventListener("DOMContentLoaded", function () {
    const ramos = document.querySelectorAll(".ramo");

    function actualizarEstado() {
        ramos.forEach(ramo => {
            const prereqs = ramo.dataset.prerrequisitos.split(",").filter(p => p);
            const aprobados = JSON.parse(localStorage.getItem("aprobados") || "[]");

            const todosAprobados = prereqs.every(p => aprobados.includes(p));
            if (!todosAprobados && prereqs.length > 0 && !aprobados.includes(ramo.id)) {
                ramo.classList.add("bloqueado");
                ramo.classList.remove("pendiente", "aprobado");
            } else if (aprobados.includes(ramo.id)) {
                ramo.classList.add("aprobado");
                ramo.classList.remove("pendiente", "bloqueado");
            } else {
                ramo.classList.add("pendiente");
                ramo.classList.remove("aprobado", "bloqueado");
            }
        });
    }

    ramos.forEach(ramo => {
        ramo.addEventListener("click", function () {
            const aprobados = JSON.parse(localStorage.getItem("aprobados") || "[]");

            if (ramo.classList.contains("bloqueado")) return;

            if (ramo.classList.contains("aprobado")) {
                const index = aprobados.indexOf(ramo.id);
                if (index > -1) aprobados.splice(index, 1);
            } else {
                aprobados.push(ramo.id);
            }

            localStorage.setItem("aprobados", JSON.stringify(aprobados));
            actualizarEstado();
        });
    });

    actualizarEstado();
});
