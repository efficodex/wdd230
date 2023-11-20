// Función para obtener la fecha actual en formato yyyy-mm-dd
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Función para calcular la diferencia de días entre dos fechas
  function getDaysDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  }

  // Función principal para mostrar el mensaje en la barra lateral
  function showMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = getCurrentDate();

    if (!lastVisit) {
      // Primera visita del usuario
      localStorage.setItem('lastVisit', currentDate);
      document.getElementById('message').textContent = "¡Bienvenido! Háganos saber si tiene alguna pregunta.";
    } else {
      const daysDifference = getDaysDifference(currentDate, lastVisit);

      if (daysDifference < 1) {
        // Menos de un día desde la última visita
        document.getElementById('message').textContent = "¡Volveremos tan pronto! ¡Impresionante!";
      } else {
        // Más de un día desde la última visita
        const pluralS = daysDifference === 1 ? "" : "s";
        document.getElementById('message').textContent = `La última vez que visitó fue hace ${daysDifference} día${pluralS}.`;
      }

      // Actualizar la fecha de la última visita
      localStorage.setItem('lastVisit', currentDate);
    }
  }

  // Llamar a la función al cargar la página
  showMessage();