const ramos = {
  "1° semestre": [
    { nombre: "Matemática general" },
    { nombre: "Taller de comunicación oral y escrita" },
    { nombre: "Introducción a la medicina veterinaria" },
    { nombre: "Biología celular" },
    { nombre: "Química" }
  ],
  "2° semestre": [
    { nombre: "Bioestadística", prerequisitos: ["Matemática general"] },
    { nombre: "Inglés 1" },
    { nombre: "Anatomía del canino" },
    { nombre: "Histoembriología" },
    { nombre: "Bioquímica", prerequisitos: ["Química"] }
  ],
  "3° semestre": [
    { nombre: "Inglés 2", prerequisitos: ["Inglés 1"] },
    { nombre: "Anatomía comparada", prerequisitos: ["Anatomía del canino"] },
    { nombre: "Zoología", prerequisitos: ["Biología celular", "Histoembriología"] },
    { nombre: "Medio ambiente y gestión ambiental", prerequisitos: ["Biología celular"] },
    { nombre: "Práctica básica", prerequisitos: ["Introducción a la medicina veterinaria", "Anatomía del canino"] }
  ],
  "4° semestre": [
    { nombre: "Administración y emprendimiento veterinario" },
    { nombre: "Fisiología animal", prerequisitos: ["Bioquímica", "Anatomía del canino"] },
    { nombre: "Enfermedades parasitarias", prerequisitos: ["Zoología"] },
    { nombre: "Microbiología general y veterinaria", prerequisitos: ["Biología celular"] },
    { nombre: "Genética", prerequisitos: ["Bioestadística"] }
  ]
  // Puedes continuar agregando los semestres restantes aquí
};

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  for (const [semestre, asignaturas] of Object.entries(ramos)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    divSemestre.innerHTML = `<h2>${semestre}</h2>`;

    asignaturas.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;

      const bloqueado = ramo.prerequisitos?.some(pr => !aprobados.has(pr));
      if (bloqueado) {
        divRamo.classList.add("bloqueado");
      }

      divRamo.addEventListener("click", () => {
        if (divRamo.classList.contains("bloqueado")) return;

        if (!divRamo.classList.contains("aprobado")) {
          divRamo.classList.add("aprobado");
          aprobados.add(ramo.nombre);
        } else if (!divRamo.classList.contains("confirmado")) {
          divRamo.classList.remove("aprobado");
          divRamo.classList.add("confirmado");
        } else {
          divRamo.classList.remove("confirmado");
          aprobados.delete(ramo.nombre);
        }

        crearMalla(); // Recargar para actualizar bloqueos
      });

      divSemestre.appendChild(divRamo);
    });

    container.appendChild(divSemestre);
  }
}

crearMalla();

