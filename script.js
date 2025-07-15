const ramosPorSemestre = {
  "1° semestre": [
    { nombre: "Matemática general", id: "mate1" },
    { nombre: "Taller de comunicación oral y escrita", id: "comunicacion" },
    { nombre: "Introducción a la medicina veterinaria", id: "introVet" },
    { nombre: "Práctica básica", id: "practicaBasica" },
    { nombre: "Biología celular", id: "biocel" },
    { nombre: "Zoología", id: "zoologia" },
    { nombre: "Medio ambiente y gestión ambiental", id: "medioAmbiente" },
    { nombre: "Microbiología general y veterinaria", id: "micro" },
    { nombre: "Química - Bioquímica", id: "quimica" }
  ],
  "2° semestre": [
    { nombre: "Bioestadística", id: "bioestadistica", prereqs: ["mate1"] },
    { nombre: "Genética", id: "genetica" },
    { nombre: "Inglés 1", id: "ingles1" },
    { nombre: "Anatomía del canino", id: "anatoCanino", prereqs: ["practicaBasica"] },
    { nombre: "Histoembriología", id: "histo", prereqs: ["zoologia"] },
    { nombre: "Fisiología animal", id: "fisioAnimal", prereqs: ["quimica"] },
    { nombre: "Nutrición y alimentación animal", id: "nutricion", prereqs: ["quimica"] }
  ]
  // Puedes seguir llenando hasta 10° semestre...
};

const aprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

function crearMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  Object.entries(ramosPorSemestre).forEach(([semestre, ramos]) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";

    const h2 = document.createElement("h2");
    h2.textContent = semestre;
    semestreDiv.appendChild(h2);

    ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;

      const prerqs = ramo.prereqs || [];
      const cumplePrerqs = prerqs.every(id => aprobados.includes(id));

      if (!cumplePrerqs && prerqs.length > 0) {
        div.classList.add("bloqueado");
      } else if (aprobados.includes(ramo.id)) {
        div.classList.add("aprobado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        if (div.classList.contains("aprobado")) {
          div.classList.remove("aprobado");
          const idx = aprobados.indexOf(ramo.id);
          if (idx !== -1) aprobados.splice(idx, 1);
        } else {
          div.classList.add("aprobado");
          aprobados.push(ramo.id);
        }

        localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
        crearMalla(); // refrescar para actualizar dependencias
      });

      semestreDiv.appendChild(div);
    });

    container.appendChild(semestreDiv);
  });
}

crearMalla();
