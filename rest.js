// Función para simular la preparación y entrega de un platillo
function prepararPlatillo(platillo, tiempoPreparacion) {
  return new Promise((resolve) => {
    console.log(`Comenzando a preparar: ${platillo}`);
    
    // Simulamos el tiempo de preparación con setTimeout
    setTimeout(() => {
      console.log(` ${platillo} listo!`);
      resolve(`${platillo} entregado`);
    }, tiempoPreparacion);
  });
}

// Función principal que maneja el proceso completo de la orden
function procesarOrden() {
  console.log(" Orden recibida - Iniciando proceso de preparación...");
  
  // Secuencia estricta: bebida -> pizza -> postre
  prepararPlatillo(" Bebida", 2000)
    .then((resultado) => {
      console.log(resultado);
      return prepararPlatillo(" Pizza", 4000);
    })
    .then((resultado) => {
      console.log(resultado);
      return prepararPlatillo("Postre", 3000);
    })
    .then((resultado) => {
      console.log(resultado);
      console.log(" ¡Orden completa entregada! Disfrute su comida.");
    })
    .catch((error) => {
      console.error(" Error en la preparación:", error);
    });
}

// Iniciar el proceso
procesarOrden();