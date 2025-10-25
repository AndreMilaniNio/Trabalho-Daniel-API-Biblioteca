// Função para criar qualquer Model
export async function CreateAnyModel(model, body) {
  try {
    const isCreated = await model.create(body);
    return isCreated;
  } catch (error) {
    // Lança erro ao meu endpoint (o que resolve o problema dele validar meu erro como 201)
    throw error;
  }
}
