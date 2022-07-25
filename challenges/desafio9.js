db.produtos.find(
  { calorias: { $lt: 500 } },
  { nome: true, _id: false },
);