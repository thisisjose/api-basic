exports.handler = async (event, context) => {
  const data = [
    { id: 1, nombre: "Damian Lescas", materia: "PWA", calificacion: 95 },
    { id: 2, nombre: "Arturo Zamorano", materia: "PWA", calificacion: 88 },
    { id: 3, nombre: "Luis Vega", materia: "PWA", calificacion: 90 }
  ];

  return {
    statusCode: 200,
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" // ← Esto permite que tu PWA haga fetch
    },
    body: JSON.stringify(data)
  };
};