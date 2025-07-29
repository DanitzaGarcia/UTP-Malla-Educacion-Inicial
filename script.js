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
  { id: "13", nombre: "Psicología Del Desarrollo", ciclo: 3, prerequisitos: ["1"] },
  { id: "14", nombre: "Fundamentos Del Currículo", ciclo: 3, prerequisitos: ["10"] },
  { id: "15", nombre: "Lectoescritura En Educación Inicial", ciclo: 3, prerequisitos: ["5"] },
  { id: "16", nombre: "Didáctica General", ciclo: 3, prerequisitos: ["10"] },
  { id: "17", nombre: "Matemática Para La Educación Inicial", ciclo: 3, prerequisitos: ["3"] },
  { id: "18", nombre: "Psicomotricidad", ciclo: 3, prerequisitos: ["8"] },

  // Ciclo 4
  { id: "19", nombre: "Psicología Del Aprendizaje", ciclo: 4, prerequisitos: ["13"] },
  { id: "20", nombre: "Evaluación Del Aprendizaje", ciclo: 4, prerequisitos: ["14", "16"] },
  { id: "21", nombre: "Didáctica De La Lectura Y Escritura", ciclo: 4, prerequisitos: ["15"] },
  { id: "22", nombre: "Didáctica De La Matemática", ciclo: 4, prerequisitos: ["17"] },
  { id: "23", nombre: "Educación Musical", ciclo: 4, prerequisitos: [] },
  { id: "24", nombre: "Seguridad Y Gestión De Riesgo", ciclo: 4, prerequisitos: [] },

  // Ciclo 5
  { id: "25", nombre: "Neuroeducación", ciclo: 5, prerequisitos: ["19"] },
  { id: "26", nombre: "Educación Inclusiva", ciclo: 5, prerequisitos: ["16"] },
  { id: "27", nombre: "Didáctica De La Ciencia Y Ambiente", ciclo: 5, prerequisitos: ["14"] },
  { id: "28", nombre: "Juego Y Aprendizaje", ciclo: 5, prerequisitos: ["18"] },
  { id: "29", nombre: "Educación Artística", ciclo: 5, prerequisitos: ["23"] },
  { id: "30", nombre: "Taller De Lectura Y Producción De Textos Académicos", ciclo: 5, prerequisitos: ["12"] },

  // Ciclo 6
  { id: "31", nombre: "Diseño Curricular En Educación Inicial", ciclo: 6, prerequisitos: ["14"] },
  { id: "32", nombre: "Taller De Materiales Educativos", ciclo: 6, prerequisitos: ["28"] },
  { id: "33", nombre: "Didáctica Del Entorno Social", ciclo: 6, prerequisitos: ["14"] },
  { id: "34", nombre: "Educación Y Desarrollo Sostenible", ciclo: 6, prerequisitos: [] },
  { id: "35", nombre: "Ética Profesional", ciclo: 6, prerequisitos: [] },
  { id: "36", nombre: "Formulación Y Evaluación De Proyectos", ciclo: 6, prerequisitos: [] },

  // Ciclo 7
  { id: "37", nombre: "Planificación Y Gestión De Instituciones Educativas", ciclo: 7, prerequisitos: ["31"] },
  { id: "38", nombre: "Gestión Del Aula", ciclo: 7, prerequisitos: ["16"] },
  { id: "39", nombre: "Acompañamiento Al Docente En Formación I", ciclo: 7, prerequisitos: ["30"] },
  { id: "40", nombre: "Taller De Investigación I", ciclo: 7, prerequisitos: [] },
  { id: "41", nombre: "Taller De Tutoría", ciclo: 7, prerequisitos: ["26"] },

  // Ciclo 8
  { id: "42", nombre: "Gestión De La Convivencia Escolar", ciclo: 8, prerequisitos: ["41"] },
  { id: "43", nombre: "Educación Intercultural", ciclo: 8, prerequisitos: [] },
  { id: "44", nombre: "Acompañamiento Al Docente En Formación II", ciclo: 8, prerequisitos: ["39"] },
  { id: "45", nombre: "Taller De Investigación II", ciclo: 8, prerequisitos: ["40"] },
  { id: "46", nombre: "Educación Ambiental", ciclo: 8, prerequisitos: ["34"] },

  // Ciclo 9
  { id: "47", nombre: "Práctica Preprofesional I", ciclo: 9, prerequisitos: ["44"] },
  { id: "48", nombre: "Seminario De Investigación I", ciclo: 9, prerequisitos: ["45"] },

  // Ciclo 10
  { id: "49", nombre: "Práctica Preprofesional II", ciclo: 10, prerequisitos: ["47"] },
  { id: "50", nombre: "Seminario De Investigación II", ciclo: 10, prerequisitos: ["48"] },
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

  Object.keys(ciclosAgrupados).sort((a, b) => a - b).forEach(ciclo => {
    const columna = document.createElement("div");
    columna.classList.add("columna-ciclo");

    const titulo = document.createElement("div");
    titulo.textContent = `Ciclo ${ciclo}`;
    titulo.classList.add("titulo-ciclo");
    columna.appendChild(titulo);

    const grid = document.createElement("div");
    grid.classList.add("grid-ciclo");

    ciclosAgrupados[ciclo].forEach(curso => {
      const desbloqueado = curso.prerequisitos.every(id => completados.has(id));
      const div = document.createElement("div");
      div.classList.add("curso");
      if (desbloqueado) div.classList.add("activo");
      if (completados.has(curso.id)) div.classList.add("completado");
      div.textContent = curso.nombre;
      div.addEventListener("click", () => {
        if (desbloqueado && !completados.has(curso.id)) {
          completados.add(curso.id);
          renderMalla();
        }
      });
      grid.appendChild(div);
    });

    columna.appendChild(grid);
    contenedor.appendChild(columna);
  });
}

renderMalla();
