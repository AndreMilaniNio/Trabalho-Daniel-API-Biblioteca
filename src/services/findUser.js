// PARA ACHAR USUÁRIOS
async function FindUser(model){
   return await model.find()
}

export { FindUser }