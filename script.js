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
    { nombre: "Fisiopatología", prerequisitos: ["Histoembriología", "Fisiología animal"] },
    { nombre: "Inmunología", prerequisitos: ["Microbiología general y veterinaria"] },
    { nombre: "Nutrición y alimentación animal", prerequisitos: ["Bioquímica"] },
    { nombre: "Tecnología de los alimentos", prerequisitos: ["Microbiología general y veterinaria"] },
    { nombre: "Etología y bienestar animal", prerequisitos: ["Zoología"] },
    { nombre: "Ginecología y obstetricia", prerequisitos: ["Reproducción e inseminación artificial"] },
    { nombre: "Control de calidad de los alimentos", prerequisitos: ["Enfermedades parasitarias", "Tecnología de los alimentos"] },
    { nombre: "Producción avícola", prerequisitos: ["Nutrición y alimentación animal"] }
  ],
  "6° semestre": [
    { nombre: "Farmacología y toxicología", prerequisitos: ["Fisiología animal"] },
    { nombre: "Enfermedades infecciosas", prerequisitos: ["Inmunología"] },
    { nombre: "Patología de sistemas", prerequisitos: ["Fisiopatología"] }
  ],
  "7° semestre": [
    { nombre: "Laboratorio clínico", prerequisitos: ["Patología de sistemas"] },
    { nombre: "Producción ovinos y caprinos", prerequisitos: ["Genética"] },
    { nombre: "Producción porcina", prerequisitos: ["Reproducción e inseminación artificial", "Medio ambiente y gestión ambiental"] },
    { nombre: "Epidemiología veterinaria", prerequisitos: ["Enfermedades infecciosas"] },
    { nombre: "Semiología", prerequisitos: ["Farmacología y toxicología", "Fisiopatología", "Anatomía comparada"] },
    { nombre: "Práctica intermedia", prerequisitos: ["Farmacología y toxicología", "Enfermedades infecciosas"] }
  ],
  "8° semestre": [
    { nombre: "Medicina animales mayores", prerequisitos: ["Laboratorio clínico", "Semiología"] },
    { nombre: "Medicina de caninos", prerequisitos: ["Laboratorio clínico", "Semiología"] },
    { nombre: "Medicina de felinos", prerequisitos: ["Laboratorio clínico", "Semiología"] },
    { nombre: "Medicina de animales exóticos", prerequisitos: ["Laboratorio clínico", "Semiología"] },
    { nombre: "Cirugía general", prerequisitos: ["Semiología"] }
  ],
  "9° semestre": [
    { nombre: "Formulación y evaluación de proyectos agropecuarios", prerequisitos: ["Administración y emprendimiento veterinario"] },
    { nombre: "Patología quirúrgica", prerequisitos: ["Cirugía general"] },
    { nombre: "Diagnóstico por imágenes", prerequisitos: ["Patología de sistemas"] },
    { nombre: "Producción acuícola", prerequisitos: ["Nutrición y alimentación animal"] },
    { nombre: "Producción bovinos carne y leche", prerequisitos: ["Ginecología y obstetricia"] },
    { nombre: "Metodología de investigación", prerequisitos: ["Epidemiología veterinaria"] },
    { nombre: "Práctica final", prerequisitos: ["Práctica intermedia"] }
  ],
  "10° semestre": [
    { nombre: "Farmacología aplicada", prerequisitos: ["Medicina de caninos", "Medicina animales mayores"] },
    { nombre: "Salud pública", prerequisitos: ["Control de calidad de los alimentos", "Epidemiología veterinaria"] },
    { nombre: "Trabajo de titulación", prerequisitos: ["Metodología de investigación"] },
    { nombre: "Clínica de animales mayores", prerequisitos: ["Medicina animales mayores", "Diagnóstico por imágenes"] },
    { nombre: "Clínica de animales menores", prerequisitos: ["Medicina de caninos", "Diagnóstico por imágenes"] }
  ]
};
