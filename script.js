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
  { id: "13", nombre: "Psicología Evolutiva", ciclo: 3, prerequisitos: ["1"] },
  { id: "14", nombre: "Realidad Nacional", ciclo: 3, prerequisitos: ["3"] },
  { id: "15", nombre: "Currículo", ciclo: 3, prerequisitos: ["10"] },
  { id: "16", nombre: "Educación Inclusiva", ciclo: 3, prerequisitos: ["10"] },
  { id: "17", nombre: "Inglés III", ciclo: 3, prerequisitos: ["11"] },
  { id: "18", nombre: "Lectura Y Producción De Textos Académicos", ciclo: 3, prerequisitos: ["12"] },

  // Ciclo 4
  { id: "19", nombre: "Psicología Del Aprendizaje", ciclo: 4, prerequisitos: ["13"] },
  { id: "20", nombre: "Sociedad Y Educación", ciclo: 4, prerequisitos: ["14"] },
  { id: "21", nombre: "Didáctica General", ciclo: 4, prerequisitos: ["15"] },
  { id: "22", nombre: "Evaluación Del Aprendizaje", ciclo: 4, prerequisitos: ["15"] },
  { id: "23", nombre: "Inglés IV", ciclo: 4, prerequisitos: ["17"] },
  { id: "24", nombre: "Metodología De La Investigación", ciclo: 4, prerequisitos: ["18"] },

  // Ciclo 5
  { id: "25", nombre: "Psicología Del Desarrollo", ciclo: 5, prerequisitos: ["19"] },
  { id: "26", nombre: "Política Educativa", ciclo: 5, prerequisitos: ["20"] },
  { id: "27", nombre: "Didáctica De La Educación Inicial", ciclo: 5, prerequisitos: ["21"] },
  { id: "28", nombre: "Taller De Expresión Gráfico Plástica", ciclo: 5, prerequisitos: [] },
  { id: "29", nombre: "Electivo I", ciclo: 5, prerequisitos: [] },
  { id: "30", nombre: "Seminario De Investigación I", ciclo: 5, prerequisitos: ["24"] },

  // Ciclo 6
  { id: "31", nombre: "Neurociencia Y Educación", ciclo: 6, prerequisitos: ["25"] },
  { id: "32", nombre: "Gestión Educativa", ciclo: 6, prerequisitos: ["26"] },
  { id: "33", nombre: "Diseño Y Elaboración De Material Educativo", ciclo: 6, prerequisitos: ["27"] },
  { id: "34", nombre: "Taller De Juegos", ciclo: 6, prerequisitos: [] },
  { id: "35", nombre: "Electivo II", ciclo: 6, prerequisitos: [] },
  { id: "36", nombre: "Seminario De Investigación II", ciclo: 6, prerequisitos: ["30"] },

  // Ciclo 7
  { id: "37", nombre: "Desarrollo Del Pensamiento Infantil", ciclo: 7, prerequisitos: ["31"] },
  { id: "38", nombre: "Gestión De La Convivencia Escolar", ciclo: 7, prerequisitos: ["32"] },
  { id: "39", nombre: "Práctica Pre Profesional I", ciclo: 7, prerequisitos: ["33"] },
  { id: "40", nombre: "Electivo III", ciclo: 7, prerequisitos: [] },
  { id: "41", nombre: "Seminario De Investigación III", ciclo: 7, prerequisitos: ["36"] },

  // Ciclo 8
  { id: "42", nombre: "Didáctica De La Matemática", ciclo: 8, prerequisitos: [] },
  { id: "43", nombre: "Didáctica De Ciencia Y Ambiente", ciclo: 8, prerequisitos: [] },
  { id: "44", nombre: "Práctica Pre Profesional II", ciclo: 8, prerequisitos: ["39"] },
  { id: "45", nombre: "Electivo IV", ciclo: 8, prerequisitos: [] },
  { id: "46", nombre: "Seminario De Investigación IV", ciclo: 8, prerequisitos: ["41"] },

  // Ciclo 9
  { id: "47", nombre: "Didáctica De Personal Social", ciclo: 9, prerequisitos: [] },
  { id: "48", nombre: "Didáctica De Comunicación", ciclo: 9, prerequisitos: [] },
  { id: "49", nombre: "Práctica Pre Profesional III", ciclo: 9, prerequisitos: ["44"] },
  { id: "50", nombre: "Electivo V", ciclo: 9, prerequisitos: [] },
  { id: "51", nombre: "Trabajo De Investigación I", ciclo: 9, prerequisitos: ["46"] },

  // Ciclo 10
  { id: "52", nombre: "Didáctica Del Arte Y La Psicomotricidad", ciclo: 10, prerequisitos: [] },
  { id: "53", nombre: "Didáctica De Inglés", ciclo: 10, prerequisitos: [] },
  { id: "54", nombre: "Práctica Pre Profesional IV", ciclo: 10, prerequisitos: ["49"] },
  { id: "55", nombre: "Electivo VI", ciclo: 10, prerequisitos: [] },
  { id: "56", nombre: "Trabajo De Investigación II", ciclo: 10, prerequisitos: ["51"] },
  { id: "57", nombre: "Sistematización De La Práctica", ciclo: 10, prerequisitos: ["54"] },
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

    const titulo = document.createElement("h2");
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
        if (!completados.has(curso.id) && desbloqueado) {
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
