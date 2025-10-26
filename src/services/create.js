// FUNÇÃO PARA CRIAR QUALQUER MODEL
async function CreateAnyModel(model, body) {
  try {
    const isCreated = await model.create(body);
    return isCreated;
  } catch (error) {
    // Lança erro ao meu endpoint (o que resolve o problema dele validar meu erro como 201)
    throw error;
  }
}

export { CreateAnyModel }