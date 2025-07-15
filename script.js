const ramosPorSemestre = {
  1: [
    { id: "matematica", nombre: "Matemática general", req: [] },
    { id: "comunicacion", nombre: "Taller de comunicación oral y escrita", req: [] },
    { id: "intro_vet", nombre: "Introducción a la medicina veterinaria", req: [] },
    { id: "biocelular", nombre: "Biología celular", req: [] },
    { id: "quimica", nombre: "Química", req: [] }
  ],
  2: [
    { id: "bioestadistica", nombre: "Bioestadística", req: ["matematica"] },
    { id: "ingles1", nombre: "Inglés 1", req: [] },
    { id: "anat_canino", nombre: "Anatomía del canino", req: [] },
    { id: "histo", nombre: "Histoembriología", req: [] },
    { id: "bioquimica", nombre: "Bioquímica", req: ["quimica"] }
  ],
  3: [
    { id: "ingles2", nombre: "Inglés 2", req: ["ingles1"] },
    { id: "anat_comparada", nombre: "Anatomía comparada", req: ["anat_canino"] },
    { id: "zoologia", nombre: "Zoología", req: [] },
    { id: "medioambiente", nombre: "Medio ambiente y gestión ambiental", req: ["biocelular"] },
    { id: "practica_basica", nombre: "Práctica básica", req: ["intro_vet", "anat_canino"] }
  ],
  4: [
    { id: "admin_vet", nombre: "Administración y emprendimiento veterinario", req: [] },
    { id: "fisiologia", nombre: "Fisiología animal", req: ["bioquimica", "anat_canino"] },
    { id: "parasitarias", nombre: "Enfermedades parasitarias", req: ["zoologia"] },
    { id: "microbiologia", nombre: "Microbiología general y veterinaria", req: ["biocelular"] },
    { id: "genetica", nombre: "Genética", req: ["bioestadistica"] }
  ],
  5: [
    { id: "reproduccion", nombre: "Reproducción e inseminación artificial", req: ["fisiologia"] },
    { id: "fisiopato", nombre: "Fisiopatología", req: ["histo", "fisiologia"] },
    { id: "inmunologia", nombre: "Inmunología", req: ["microbiologia"] },
    { id: "nutricion", nombre: "Nutrición y alimentación animal", req: ["bioquimica"] },
    { id: "tecnologia_alimentos", nombre: "Tecnología de los alimentos", req: ["microbiologia"] },
    { id: "etologia", nombre: "Etología y bienestar animal", req: ["zoologia"] },
  ],
  6: [
    { id: "farmacologia", nombre: "Farmacología y toxicología", req: ["etologia", "fisiologia"] },
    { id: "infecciosas", nombre: "Enfermedades infecciosas", req: ["inmunologia"] },
    { id: "patologia", nombre: "Patología de sistemas", req: ["fisiopato"] },
    { id: "ginecologia", nombre: "Ginecología y obstetricia", req: ["reproduccion"] },
    { id: "control_calidad", nombre: "Control de calidad de los alimentos", req: ["parasitarias", "tecnologia_alimentos"] },
    { id: "avicola", nombre: "Producción avícola", req: ["nutricion"] }
  ],
  7: [
    { id: "lab_clinico", nombre: "Laboratorio clínico", req: ["patologia"] },
    { id: "ovinos", nombre: "Producción ovinos y caprinos", req: ["genetica"] },
    { id: "porcina", nombre: "Producción porcina", req: ["reproduccion", "medioambiente"] },
    { id: "epidemiologia", nombre: "Epidemiología veterinaria", req: ["infecciosas"] },
    { id: "semiologia", nombre: "Semiología", req: ["farmacologia", "fisiopato", "anat_comparada"] },
    { id: "practica_intermedia", nombre: "Práctica intermedia", req: ["farmacologia", "infecciosas"] }
  ],
  8: [
    { id: "med_mayores", nombre: "Medicina animales mayores", req: ["lab_clinico", "semiologia"] },
    { id: "med_caninos", nombre: "Medicina de caninos", req: ["lab_clinico", "semiologia"] },
    { id: "med_felinos", nombre: "Medicina de felinos", req: ["lab_clinico", "semiologia"] },
    { id: "med_exoticos", nombre: "Medicina de animales exóticos", req: ["lab_clinico", "semiologia"] },
    { id: "cirugia", nombre: "Cirugía general", req: ["semiologia"] }
  ],
  9: [
    { id: "formulacion", nombre: "Formulación y evaluación de proyectos agropecuarios", req: ["admin_vet"] },
    { id: "pat_quirurgica", nombre: "Patología quirúrgica", req: ["cirugia"] },
    { id: "diagnostico_img", nombre: "Diagnóstico por imágenes", req: ["patologia"] },
    { id: "acuicola", nombre: "Producción acuícola", req: ["nutricion"] },
    { id: "bovinos", nombre: "Producción bovinos carne y leche", req: ["ginecologia"] },
    { id: "metodologia", nombre: "Metodología de investigación", req: ["epidemiologia"] },
    { id: "practica_final", nombre: "Práctica final", req: ["practica_intermedia"] }
  ],
  10: [
    { id: "farmaco_aplicada", nombre: "Farmacología aplicada", req: ["med_caninos", "med_mayores"] },
    { id: "salud_publica", nombre: "Salud pública", req: ["control_calidad", "epidemiologia"] },
    { id: "titulacion", nombre: "Trabajo de titulación", req: ["metodologia"] },
    { id: "clinica_mayores", nombre: "Clínica de animales mayores", req: ["med_mayores", "diagnostico_img"] },
    { id: "clinica_menores", nombre: "Clínica de animales menores", req: ["med_caninos", "diagnostico_img"] }
  ]
};

const aprobados = new Set();

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo locked";
  div.id = ramo.id;
  div.textContent = ramo.nombre;
  div.onclick = () => aprobarRamo(ramo.id);
  return div;
}

function aprobarRamo(id) {
  const ramo = Object.values(ramosPorSemestre).flat().find(r => r.id === id);
  const div = document.getElementById(id);
  if (div.classList.contains("locked") || div.classList.contains("approved")) return;
  div.classList.add("approved");
  aprobados.add(id);
  actualizarEstado();
}

function actualizarEstado() {
  Object.values(ramosPorSemestre).flat().forEach(ramo => {
    const div = document.getElementById(ramo.id);
    if (aprobados.has(ramo.id)) return;
    if (!ramo.req || ramo.req.every(pr => aprobados.has(pr))) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }
  });
}

function init() {
  const contenedor = document.getElementById("malla");

  Object.entries(ramosPorSemestre).forEach(([semestre, ramos]) => {
    const bloque = document.createElement("div");
    bloque.className = "bloque-semestre";

    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${semestre}`;
    bloque.appendChild(h2);

    const fila = document.createElement("div");
    fila.className = "semestre";

    ramos.forEach(ramo => fila.appendChild(crearRamo(ramo)));
    bloque.appendChild(fila);

    contenedor.appendChild(bloque);
  });

  actualizarEstado();
}

window.onload = init;
