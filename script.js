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
    { nombre: "Inglés 2", id: "ingles2", prereqs: ["ingles1"] },
    { nombre: "Anatomía del canino", id: "anatoCanino", prereqs: ["practicaBasica"] },
    { nombre: "Histoembriología", id: "histo", prereqs: ["zoologia"] },
    { nombre: "Fisiología animal", id: "fisioAnimal", prereqs: ["quimica"] },
    { nombre: "Nutrición y alimentación animal", id: "nutricion", prereqs: ["quimica"] }
  ],
  "3° semestre": [
    { nombre: "Anatomía comparada", id: "anatoComp", prereqs: ["anatoCanino"] },
    { nombre: "Semiología", id: "semiologia" },
    { nombre: "Producción porcina", id: "porcinos" },
    { nombre: "Etología y bienestar animal", id: "etologia", prereqs: ["zoologia"] },
    { nombre: "Medio ambiente y gestión ambiental", id: "medioAmbiente2" },
    { nombre: "Zoología", id: "zoologia2" },
    { nombre: "Biología celular o Histoembriología", id: "bioHisto" }
  ],
  "4° semestre": [
    { nombre: "Administración y emprendimiento veterinario", id: "adminVet" },
    { nombre: "Formulación y evaluación de proyectos agropecuarios", id: "evalProyectos" },
    { nombre: "Fisiología animal", id: "fisioAnimal2" },
    { nombre: "Reproducción e inseminación artificial", id: "repro", prereqs: ["fisioAnimal"] },
    { nombre: "Fisiopatología", id: "fisioPat", prereqs: ["histo", "fisioAnimal"] },
    { nombre: "Farmacología y toxicología", id: "farmaco" },
    { nombre: "Enfermedades parasitarias", id: "parasitos", prereqs: ["zoologia"] },
    { nombre: "Control de calidad de los alimentos", id: "calidad", prereqs: ["micro"] },
    { nombre: "Inmunología", id: "inmuno", prereqs: ["biocel", "micro"] },
    { nombre: "Tecnología de los alimentos", id: "tecAlimentos", prereqs: ["micro"] },
    { nombre: "Producción ovinos y caprinos", id: "ovinos", prereqs: ["genetica"] }
  ],
  "5° semestre": [
    { nombre: "Patología de sistemas", id: "patoSist", prereqs: ["fisioPat"] },
    { nombre: "Enfermedades infecciosas", id: "infec", prereqs: ["inmuno", "micro"] },
    { nombre: "Producción avícola", id: "avicola", prereqs: ["nutricion", "etologia"] },
    { nombre: "Producción acuícola", id: "acuicola", prereqs: ["nutricion"] },
    { nombre: "Semiología", id: "semiologia2" },
    { nombre: "Reproducción e inseminación artificial", id: "repro2", prereqs: ["fisioAnimal"] },
    { nombre: "Etología y bienestar animal", id: "etologia2" },
    { nombre: "Nutrición y alimentación animal", id: "nutricion2" }
  ],
  "6° semestre": [
    { nombre: "Ginecología y obstetricia", id: "gineco", prereqs: ["repro2"] },
    { nombre: "Producción bovinos carne y leche", id: "bovinos", prereqs: ["avicola"] },
    { nombre: "Salud pública", id: "saludPublica" },
    { nombre: "Farmacología y toxicología", id: "farmaco2", prereqs: ["fisioAnimal"] },
    { nombre: "Epidemiología veterinaria", id: "epidemiologia", prereqs: ["inmuno"] },
    { nombre: "Diagnóstico por imágenes", id: "imagenes", prereqs: ["patoSist"] },
    { nombre: "Laboratorio clínico", id: "labClinico", prereqs: ["patoSist"] },
    { nombre: "Práctica intermedia", id: "practicaInt", prereqs: ["farmaco", "infec"] }
  ],
  "7° semestre": [
    { nombre: "Laboratorio clínico", id: "labClinico2", prereqs: ["patoSist"] },
    { nombre: "Producción ovinos y caprinos", id: "ovinos2" },
    { nombre: "Producción porcina", id: "porcinos2" },
    { nombre: "Epidemiología veterinaria", id: "epidemiologia2" },
    { nombre: "Semiología", id: "semiologia3", prereqs: ["farmaco2", "fisioPat", "anatoComp"] },
    { nombre: "Medicina animales mayores", id: "medMayores", prereqs: ["labClinico2", "semiologia3"] },
    { nombre: "Medicina de caninos", id: "medCaninos", prereqs: ["labClinico2", "semiologia3"] },
    { nombre: "Medicina de felinos", id: "medFelinos", prereqs: ["labClinico2", "semiologia3"] },
    { nombre: "Medicina de animales exóticos", id: "medExoticos", prereqs: ["labClinico2", "semiologia3"] },
    { nombre: "Cirugía general", id: "cirugia", prereqs: ["semiologia3"] },
    { nombre: "Práctica final", id: "practicaFinal", prereqs: ["practicaInt"] }
  ],
  "8° semestre": [
    { nombre: "Medicina animales mayores", id: "medMayores2", prereqs: ["labClinico", "semiologia"] },
    { nombre: "Medicina de caninos", id: "medCaninos2", prereqs: ["labClinico", "semiologia"] },
    { nombre: "Medicina de felinos", id: "medFelinos2", prereqs: ["labClinico", "semiologia"] },
    { nombre: "Medicina de animales exóticos", id: "medExoticos2", prereqs: ["labClinico", "semiologia"] },
    { nombre: "Cirugía general", id: "cirugia2", prereqs: ["semiologia"] },
    { nombre: "Patología quirúrgica", id: "patoQuirurgica", prereqs: ["cirugia2"] }
  ],
  "9° semestre": [
    { nombre: "Formulación y evaluación de proyectos agropecuarios", id: "evalProyectos2" },
    { nombre: "Administración y emprendimiento veterinario", id: "adminVet2" },
    { nombre: "Patología quirúrgica", id: "patoQuirurgica2", prereqs: ["cirugia"] },
    { nombre: "Diagnóstico por imágenes", id: "imagenes2" },
    { nombre: "Clínica de animales mayores", id: "clinicaMayores", prereqs: ["medMayores2", "imagenes2"] },
    { nombre: "Clínica de animales menores", id: "clinicaMenores", prereqs: ["medCaninos2", "imagenes2"] },
    { nombre: "Producción acuícola", id: "acuicola2" },
    { nombre: "Ginecología y obstetricia", id: "gineco2" },
    { nombre: "Metodología de investigación", id: "metodologia" },
    { nombre: "Trabajo de titulación", id: "titulacion", prereqs: ["metodologia"] }
  ],
  "10° semestre": [
    { nombre: "Farmacología aplicada", id: "farmacoAplicada", prereqs: ["medCaninos", "medMayores"] },
    { nombre: "Salud pública", id: "saludPublica2", prereqs: ["calidad", "epidemiologia2"] },
    { nombre: "Trabajo de titulación", id: "titulacion2", prereqs: ["metodologia"] },
    { nombre: "Clínica de animales mayores", id: "clinicaMayores2", prereqs: ["medMayores", "imagenes2"] },
    { nombre: "Clínica de animales menores", id: "clinicaMenores2", prereqs: ["medCaninos", "imagenes2"] }
  ]
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

      const prereqs = ramo.prereqs || [];
      const cumplePrerqs = prereqs.every(id => aprobados.includes(id));

      if (!cumplePrerqs && prereqs.length > 0) {
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
        crearMalla(); // Refrescar para aplicar cambios visuales
      });

      semestreDiv.appendChild(div);
    });

    container.appendChild(semestreDiv);
  });
}

crearMalla();
