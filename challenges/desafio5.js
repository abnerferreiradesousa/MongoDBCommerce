db.produtos.find({
  $or: [
    { vendidos: { $eq: 85 } }, 
    { curtidas: { $eq: 36 } }] }, 
{ nome: true, vendidos: true, curtidas: true, _id: false });
