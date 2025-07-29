const cursos = [
  // 1er ciclo
  { id: "1", nombre: "Desarrollo Humano", ciclo: 1, prerequisitos: [] },
  { id: "2", nombre: "Teorías Y Corrientes De La Educación", ciclo: 1, prerequisitos: [] },
  { id: "3", nombre: "Individuo Y Medio Ambiente", ciclo: 1, prerequisitos: [] },
  { id: "4", nombre: "Inglés I", ciclo: 1, prerequisitos: [] },
  { id: "5", nombre: "Comprensión Y Redacción De Textos I", ciclo: 1, prerequisitos: [] },
  { id: "6", nombre: "Introducción A La Vida Universitaria", ciclo: 1, prerequisitos: [] },

  // 2do ciclo
  { id: "7", nombre: "Tecnologías Para El Aprendizaje", ciclo: 2, prerequisitos: [] },
  { id: "8", nombre: "Salud Y Bienestar Infantil", ciclo: 2, prerequisitos: [] },
  { id: "9", nombre: "Filosofía De La Educación", ciclo: 2, prerequisitos: ["2"] },
  { id: "10", nombre: "Fundamentos De Pedagogía", ciclo: 2, prerequisitos: ["2"] },
  { id: "11", nombre: "Inglés II", ciclo: 2, prerequisitos: ["4"] },
  { id: "12", nombre: "Comprensión Y Redacción De Textos II", ciclo: 2, prerequisitos: ["5"] },

  // 3er ciclo
  { id: "13", nombre: "Neurociencia Aplicada Al Aprendizaje", ciclo: 3, prerequisitos: ["1"] },
  { id: "14", nombre: "Atención Oportuna", ciclo: 3, prerequisitos: ["1", "8"] },
  { id: "15", nombre: "Didáctica General", ciclo: 3, prerequisitos: ["10"] },
  { id: "16", nombre: "Psicología Del Desarrollo Infantil", ciclo: 3, prerequisitos: ["1", "13"] },
  { id: "17", nombre: "Liderazgo Para El Cambio Educativo", ciclo: 3, prerequisitos: [] },
  { id: "18", nombre: "Inglés III", ciclo: 3, prerequisitos: ["11"] },
  { id: "19", nombre: "Problemas Y Desafíos En El Perú Actual", ciclo: 3, prerequisitos: ["3", "12"] },

  // 4to ciclo
  { id: "20", nombre: "Didáctica de la Educación Infantil I", ciclo: 4, prerequisitos: ["15"] },
  { id: "21", nombre: "Desarrollo de la Expresión Artística", ciclo: 4, prerequisitos: ["16"] },
  { id: "22", nombre: "Psicología del Aprendizaje", ciclo: 4, prerequisitos: ["13", "16"] },
  { id: "23", nombre: "Planificación Curricular y Diversificación", ciclo: 4, prerequisitos: ["15"] },
  { id: "24", nombre: "Inglés IV", ciclo: 4, prerequisitos: ["18"] },
  { id: "25", nombre: "Práctica Educativa I: Psicomotricidad", ciclo: 4, prerequisitos: ["15", "16"] },

  // 5to ciclo
  { id: "26", nombre: "Políticas y Gestión Educativa", ciclo: 5, prerequisitos: ["17"] },
  { id: "27", nombre: "Didáctica de la Educación Infantil II", ciclo: 5, prerequisitos: ["20", "23"] },
  { id: "28", nombre: "Enseñanza de una Segunda Lengua", ciclo: 5, prerequisitos: ["20", "22"] },
  { id: "29", nombre: "Planificando y Evaluando el Desarrollo de Competencias en Inicial", ciclo: 5, prerequisitos: ["22", "23"] },
  { id: "30", nombre: "Investigación Académica", ciclo: 5, prerequisitos: ["3", "12"] },
  { id: "31", nombre: "Ciudadanía y Reflexión Ética", ciclo: 5, prerequisitos: ["3", "12"] },
  { id: "32", nombre: "Elementary Business English", ciclo: 5, prerequisitos: ["24"] },

  // 6to ciclo
  { id: "33", nombre: "Habilidades Previas para la Lectoescritura", ciclo: 6, prerequisitos: ["27"] },
  { id: "34", nombre: "Desarrollo Social y Ciudadanía del Niño", ciclo: 6, prerequisitos: ["29"] },
  { id: "35", nombre: "Problemas de Aprendizaje y de Conducta", ciclo: 6, prerequisitos: ["13"] },
  { id: "36", nombre: "Indagación del Entorno Natural del Niño", ciclo: 6, prerequisitos: ["29"] },
  { id: "37", nombre: "Pensamiento Crítico y Creatividad (0-5 años)", ciclo: 6, prerequisitos: ["22", "29"] },
  { id: "38", nombre: "Pensamiento Matemático y su Didáctica", ciclo: 6, prerequisitos: ["29"] },

  // 7mo ciclo
  { id: "39", nombre: "Didáctica de la Competencia de Lectoescritura", ciclo: 7, prerequisitos: ["29", "33"] },
  { id: "40", nombre: "Diseño de Proyectos Educativos Innovadores", ciclo: 7, prerequisitos: ["26", "37"] },
  { id: "41", nombre: "Tecnología y Comunicación en la Educación", ciclo: 7, prerequisitos: ["7", "23"] },
  { id: "42", nombre: "Métodos Cualitativos para la Educación", ciclo: 7, prerequisitos: ["30"] },
  { id: "43", nombre: "Interacciones 1 a 1 (Nivel Inicial)", ciclo: 7, prerequisitos: ["29", "33", "35"] },
  { id: "44", nombre: "Práctica Educativa II: Educación en Contextos No Formales", ciclo: 7, prerequisitos: ["13", "25"] },

  // 8vo ciclo
  { id: "45", nombre: "Ética Profesional en Educación", ciclo: 8, prerequisitos: ["31"] },
  { id: "46", nombre: "Promover Vínculos Sanos (0-5 años)", ciclo: 8, prerequisitos: ["17", "43"] },
  { id: "47", nombre: "Métodos Cuantitativos para la Educación", ciclo: 8, prerequisitos: ["42"] },
  { id: "48", nombre: "Implementación y Evaluación de Proyectos Educativos", ciclo: 8, prerequisitos: ["40"] },
  { id: "49", nombre: "Métodos de Facilitación y Mediación de Grupos", ciclo: 8, prerequisitos: ["27"] },
  { id: "50", nombre: "Práctica Educativa III: Desarrollo de Habilidades Diferentes", ciclo: 8, prerequisitos: ["23", "44"] },

  // 9no ciclo
  { id: "51", nombre: "Formación para la Empleabilidad", ciclo: 9, prerequisitos: ["30", "47"] },
  { id: "52", nombre: "Formación para la Investigación en Educación", ciclo: 9, prerequisitos: ["47", "50"] },
  { id: "53", nombre: "Práctica Pre-Profesional I: Educación Inicial", ciclo: 9, prerequisitos: ["50"] },

  // 10mo ciclo
  { id: "54", nombre: "Trabajo con la Familia y Comunidad", ciclo: 10, prerequisitos: ["26"] },
  { id: "55", nombre: "Taller de Investigación en Educación", ciclo: 10, prerequisitos: ["52"] },
  { id: "56", nombre: "Tutoría y Acompañamiento a Estudiantes", ciclo: 10, prerequisitos: ["46"] },
  { id: "57", nombre: "Práctica Pre-Profesional II: Educación Inicial", ciclo: 10, prerequisitos: ["53"] },
];

const completados = new Set();
const contenedor = document.getElementById("malla");

function renderMalla() {
  contenedor.innerHTML = '';
  cursos.forEach(curso => {
    const desbloqueado = curso.prerequisitos.every(id => completados.has(id));
    const div = document.createElement("div");
    div.classList.add("curso");
    if (desbloqueado) div.classList.add("activo");
    if (completados.has(curso.id)) div.classList.add("completado");
    div.textContent = `${curso.ciclo}°: ${curso.nombre}`;
    div.addEventListener("click", () => {
      if (!completados.has(curso.id)) {
        completados.add(curso.id);
        renderMalla();
      }
    });
    contenedor.appendChild(div);
  });
}

renderMalla();
