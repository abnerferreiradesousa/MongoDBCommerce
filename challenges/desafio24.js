db.produtos.updateMany(
  {},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
);
// Ascending -> 1
// Descending -> -1
db.produtos.find({ }, { nome: true, valoresNutricionais: true, _id: false });