// Pegando minhas variáveis ambientes
const CONSTANTS = Object.freeze ({
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
});

// Exportando lista
export { CONSTANTS };
