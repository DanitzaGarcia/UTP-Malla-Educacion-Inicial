const cursos = [
  // Estructura: { id, nombre, ciclo, prerequisitos }

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
  { id: "20", nombre: "Didáctica de la educación infantil I", ciclo: 4, prerequisitos: ["15"] },
  { id: "21", nombre: "Desarrollo de la expresión artística", ciclo: 4, prerequisitos: ["16"] },
  { id: "22", nombre: "Psicología del aprendizaje", ciclo: 4, prerequisitos: ["13", "16"] },
  { id: "23", nombre: "Planificación curricular y diversificación", ciclo: 4, prerequisitos: ["15"] },
  { id: "24", nombre: "Inglés IV", ciclo: 4, prerequisitos: ["18"] },
  { id: "25", nombre: "Práctica educativa I: Psicomotricidad", ciclo: 4, prerequisitos: ["15", "16"] },

  // 5to ciclo
  { id: "26", nombre: "Políticas y gestión educativa", ciclo: 5, prerequisitos: ["17"] },
  { id: "27", nombre: "Didáctica de la educación infantil II", ciclo: 5, prerequisitos: ["20", "23"] },
  { id: "28", nombre: "Enseñanza de una segunda lengua", ciclo: 5, prerequisitos: ["20", "22"] },
  { id: "29", nombre: "Planificando y evaluando competencias", ciclo: 5, prerequisitos: ["22", "23"] },
  { id: "30", nombre: "Investigación académica", ciclo: 5, prerequisitos: ["3", "12"] },
  { id: "31", nombre: "Ciudadanía y reflexión ética", ciclo: 5, prerequisitos: ["3", "12"] },
  { id: "32", nombre: "Elementary business English", ciclo: 5, prerequisitos: ["24"] },

  // Puedes continuar los ciclos 6-10 de la misma forma si deseas completar todo.
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
    div.textContent = `${curso.nombre}`;
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

