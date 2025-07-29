const cursos = [
  // Ciclo 1
  { id: "1", nombre: "Desarrollo Humano", ciclo: 1, prerequisitos: [] },
  { id: "2", nombre: "Teorías Y Corrientes De La Educación", ciclo: 1, prerequisitos: [] },
  { id: "3", nombre: "Individuo Y Medio Ambiente", ciclo: 1, prerequisitos: [] },
  { id: "4", nombre: "Inglés I", ciclo: 1, prerequisitos: [] },
  { id: "5", nombre: "Comprensión Y Redacción De Textos I", ciclo: 1, prerequisitos: [] },
  { id: "6", nombre: "Introducción A La Vida Universitaria", ciclo: 1, prerequisitos: [] },

  // Ciclo 2
  { id: "7", nombre: "Tecnologías Para El Aprendizaje", ciclo: 2, prerequisitos: [] },
  { id: "8", nombre: "Salud Y Bienestar Infantil", ciclo: 2, prerequisitos: [] },
  { id: "9", nombre: "Filosofía De La Educación", ciclo: 2, prerequisitos: ["2"] },
  { id: "10", nombre: "Fundamentos De Pedagogía", ciclo: 2, prerequisitos: ["2"] },
  { id: "11", nombre: "Inglés II", ciclo: 2, prerequisitos: ["4"] },
  { id: "12", nombre: "Comprensión Y Redacción De Textos II", ciclo: 2, prerequisitos: ["5"] },

  // Ciclo 3
  { id: "13", nombre: "Neurociencia Aplicada Al Aprendizaje", ciclo: 3, prerequisitos: ["1"] },
  { id: "14", nombre: "Atención Oportuna", ciclo: 3, prerequisitos: ["1", "8"] },
  { id: "15", nombre: "Didáctica General", ciclo: 3, prerequisitos: ["10"] },
  { id: "16", nombre: "Psicología Del Desarrollo Infantil", ciclo: 3, prerequisitos: ["1"] },
  { id: "17", nombre: "Liderazgo Para El Cambio Educativo", ciclo: 3, prerequisitos: [] },
  { id: "18", nombre: "Inglés III", ciclo: 3, prerequisitos: ["11"] },
  { id: "19", nombre: "Problemas Y Desafíos En El Perú Actual", ciclo: 3, prerequisitos: ["3", "12"] },

  // Ciclo 4
  { id: "20", nombre: "Didáctica De La Educación Infantil I: Aprender A Través Del Juego", ciclo: 4, prerequisitos: ["15"] },
  { id: "21", nombre: "Desarrollo De La Expresión Artística", ciclo: 4, prerequisitos: ["16"] },
  { id: "22", nombre: "Psicología Del Aprendizaje", ciclo: 4, prerequisitos: ["13", "16"] },
  { id: "23", nombre: "Planificación Curricular Y Diversificación", ciclo: 4, prerequisitos: ["15"] },
  { id: "24", nombre: "Inglés IV", ciclo: 4, prerequisitos: ["18"] },
  { id: "25", nombre: "Práctica Educativa I: Psicomotricidad Para Educación Inicial", ciclo: 4, prerequisitos: ["15", "16"] },

  // Ciclo 5
  { id: "26", nombre: "Políticas Y Gestión Educativa", ciclo: 5, prerequisitos: ["17"] },
  { id: "27", nombre: "Didáctica De La Educación Infantil II: Aprendizaje Basado En Proyectos Y Problemas", ciclo: 5, prerequisitos: ["20", "23"] },
  { id: "28", nombre: "Enseñanza De Una Segunda Lengua", ciclo: 5, prerequisitos: ["20", "22"] },
  { id: "29", nombre: "Planificando Y Evaluando El Desarrollo De Competencias En Inicial", ciclo: 5, prerequisitos: ["22", "23"] },
  { id: "30", nombre: "Investigación Académica", ciclo: 5, prerequisitos: ["3", "12"] },
  { id: "31", nombre: "Ciudadanía Y Reflexión Ética", ciclo: 5, prerequisitos: ["3", "12"] },
  { id: "32", nombre: "Elementary Business English", ciclo: 5, prerequisitos: ["24"] },

  // Ciclo 6
  { id: "33", nombre: "Habilidades Previas Para La Lectoescritura", ciclo: 6, prerequisitos: ["27"] },
  { id: "34", nombre: "Desarrollo Social Y Ciudadanía Del Niño", ciclo: 6, prerequisitos: ["29"] },
  { id: "35", nombre: "Problemas De Aprendizaje Y De Conducta", ciclo: 6, prerequisitos: ["13"] },
  { id: "36", nombre: "Indagación Del Entorno Natural Del Niño", ciclo: 6, prerequisitos: ["29"] },
  { id: "37", nombre: "Pensamiento Crítico Y Creatividad (0-5 Años)", ciclo: 6, prerequisitos: ["22", "29"] },
  { id: "38", nombre: "Pensamiento Matemático Y Su Didáctica", ciclo: 6, prerequisitos: ["29"] },

  // Ciclo 7
  { id: "39", nombre: "Didáctica De La Competencia De Lectoescritura", ciclo: 7, prerequisitos: ["33"] },
  { id: "40", nombre: "Diseño De Proyectos Educativos Innovadores", ciclo: 7, prerequisitos: ["26", "37"] },
  { id: "41", nombre: "Tecnología Y Comunicación En La Educación", ciclo: 7, prerequisitos: ["7", "23"] },
  { id: "42", nombre: "Métodos Cualitativos Para La Educación", ciclo: 7, prerequisitos: ["30"] },
  { id: "43", nombre: "Interacciones 1 A 1 (Nivel Inicial)", ciclo: 7, prerequisitos: ["29", "35"] },
  { id: "44", nombre: "Práctica Educativa II: Educación En Contextos No Formales Para Educación Inicial", ciclo: 7, prerequisitos: ["13", "25"] },

  // Ciclo 8
  { id: "45", nombre: "Ética Profesional En Educación", ciclo: 8, prerequisitos: ["31"] },
  { id: "46", nombre: "Promover Vínculos Sanos: 0 A 05 Años", ciclo: 8, prerequisitos: ["17", "43"] },
  { id: "47", nombre: "Métodos Cuantitativos Para La Educación", ciclo: 8, prerequisitos: ["42"] },
  { id: "48", nombre: "Implementación Y Evaluación De Proyectos Educativos Innovadores", ciclo: 8, prerequisitos: ["40"] },
  { id: "49", nombre: "Métodos De Facilitación Y Mediación De Grupos (Inicial)", ciclo: 8, prerequisitos: ["27"] },
  { id: "50", nombre: "Práctica Educativa III: Desarrollo De Habilidades Diferentes Para Educación Inicial", ciclo: 8, prerequisitos: ["23", "44"] },

  // Ciclo 9
  { id: "51", nombre: "Formación Para La Empleabilidad", ciclo: 9, prerequisitos: ["30"] },
  { id: "52", nombre: "Formación Para La Investigación En Educación", ciclo: 9, prerequisitos: ["47", "50"] },
  { id: "53", nombre: "Práctica Pre-Profesional I: Educación Inicial", ciclo: 9, prerequisitos: ["50"] },

  // Ciclo 10
  { id: "54", nombre: "Trabajo Con La Familia Y Comunidad", ciclo: 10, prerequisitos: ["26"] },
  { id: "55", nombre: "Taller De Investigación En Educación", ciclo: 10, prerequisitos: ["52"] },
  { id: "56", nombre: "Tutoría Y Acompañamiento A Estudiantes", ciclo: 10, prerequisitos: ["46"] },
  { id: "57", nombre: "Práctica Pre-Profesional II: Educación Inicial", ciclo: 10, prerequisitos: ["53"] },
];

const completados = new Set();
const contenedor = document.getElementById("malla");

function renderMalla() {
  contenedor.innerHTML = '';

  const ciclosAgrupados = {};
  cursos.forEach(curso => {
    if (!ciclosAgrupados[curso.ciclo]) {
      ciclosAgrupados[curso.ciclo] = [];
    }
    ciclosAgrupados[curso.ciclo].push(curso);
  });

  const fila = document.createElement("div");
  fila.classList.add("fila-ciclos");

  Object.keys(ciclosAgrupados).sort((a, b) => a - b).forEach(ciclo => {
    const columna = document.createElement("div");
    columna.classList.add("columna-ciclo");

    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${ciclo}`;
    titulo.classList.add("titulo-ciclo");
    columna.appendChild(titulo);

    ciclosAgrupados[ciclo].forEach(curso => {
      const desbloqueado = curso.prerequisitos.every(id => completados.has(id));
      const div = document.createElement("div");
      div.classList.add("curso");
      if (desbloqueado) div.classList.add("activo");
      if (completados.has(curso.id)) div.classList.add("completado");
      div.textContent = curso.nombre;
      div.addEventListener("click", () => {
        if (!completados.has(curso.id)) {
          completados.add(curso.id);
          renderMalla();
        }
      });
      columna.appendChild(div);
    });

    fila.appendChild(columna);
  });

  contenedor.appendChild(fila);
}

renderMalla();
