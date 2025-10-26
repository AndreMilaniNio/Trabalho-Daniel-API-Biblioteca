// PARA ACHAR USUÁRIOS
async function FindAnyModel(model){
   try {
      return await model.find()
   } catch (error) {
      throw error
   }
}

export { FindAnyModel }