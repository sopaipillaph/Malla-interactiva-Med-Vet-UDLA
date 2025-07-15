
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
  ],
  "5° semestre": [
    { nombre: "Reproducción e inseminación artificial", prerequisitos: ["Fisiología animal"] },
    { nombre: "Semiología" },
    { nombre: "Fisiopatología", prerequisitos: ["Histoembriología", "Fisiología animal"] },
    { nombre: "Patología de sistemas" },
    { nombre: "Inmunología", prerequisitos: ["Microbiología general y veterinaria"] },
    { nombre: "Enfermedades infecciosas" },
    { nombre: "Nutrición y alimentación animal", prerequisitos: ["Bioquímica"] },
    { nombre: "Tecnología de los alimentos", prerequisitos: ["Microbiología general y veterinaria"] },
    { nombre: "Control de calidad de los alimentos" },
    { nombre: "Etología y bienestar animal", prerequisitos: ["Zoología"] }
  ],
  "6° semestre": [
    { nombre: "Ginecología y obstetricia", prerequisitos: ["Reproducción e inseminación artificial"] },
    { nombre: "Producción bovinos carne y leche" },
    { nombre: "Salud pública" },
    { nombre: "Producción avícola", prerequisitos: ["Nutrición y alimentación animal", "Etología y bienestar animal"] },
    { nombre: "Farmacología y toxicología", prerequisitos: ["Fisiología animal"] },
    { nombre: "Práctica intermedia" },
    { nombre: "Epidemiología veterinaria", prerequisitos: ["Inmunología"] },
    { nombre: "Diagnóstico por imágenes", prerequisitos: ["Patología de sistemas"] },
    { nombre: "Laboratorio clínico", prerequisitos: ["Patología de sistemas"] }
  ],
  "7° semestre": [
    { nombre: "Medicina animales mayores", prerequisitos: ["Laboratorio clínico", "Semiología", "Farmacología y toxicología", "Fisiopatología", "Anatomía comparada"] },
    { nombre: "Medicina de caninos", prerequisitos: ["Laboratorio clínico", "Semiología", "Farmacología y toxicología", "Fisiopatología", "Anatomía comparada"] },
    { nombre: "Medicina de felinos", prerequisitos: ["Laboratorio clínico", "Semiología"] },
    { nombre: "Medicina de animales exóticos", prerequisitos: ["Laboratorio clínico", "Semiología"] },
    { nombre: "Producción ovinos y caprinos", prerequisitos: ["Genética"] },
    { nombre: "Producción porcina", prerequisitos: ["Reproducción e inseminación artificial", "Medio ambiente y gestión ambiental"] },
    { nombre: "Metodología de investigación", prerequisitos: ["Epidemiología veterinaria", "Salud pública"] },
    { nombre: "Cirugía general", prerequisitos: ["Semiología", "Farmacología y toxicología", "Fisiopatología", "Anatomía comparada"] },
    { nombre: "Práctica final", prerequisitos: ["Farmacología y toxicología", "Enfermedades infecciosas"] }
  ],
  "8° semestre": [
    { nombre: "Clínica de animales mayores", prerequisitos: ["Medicina animales mayores", "Diagnóstico por imágenes"] },
    { nombre: "Clínica de animales menores", prerequisitos: ["Medicina de caninos", "Diagnóstico por imágenes"] },
    { nombre: "Farmacología aplicada", prerequisitos: ["Medicina de caninos", "Medicina animales mayores"] },
    { nombre: "Patología quirúrgica", prerequisitos: ["Cirugía general"] }
  ],
  "9° semestre": [
    { nombre: "Formulación y evaluación de proyectos agropecuarios", prerequisitos: ["Administración y emprendimiento veterinario"] },
    { nombre: "Producción acuícola", prerequisitos: ["Nutrición y alimentación animal"] },
    { nombre: "Trabajo de titulación", prerequisitos: ["Metodología de investigación"] }
  ],
  "10° semestre": [
    { nombre: "Clínica de animales mayores", prerequisitos: ["Medicina animales mayores", "Diagnóstico por imágenes"] },
    { nombre: "Clínica de animales menores", prerequisitos: ["Medicina de caninos", "Diagnóstico por imágenes"] },
    { nombre: "Salud pública", prerequisitos: ["Control de calidad de los alimentos", "Epidemiología veterinaria"] }
  ]
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
          divRamo.classList.remove("confirmado");
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
