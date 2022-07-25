db.produtos.updateOne(
  { $or: [
    { nome: "Cheddar McMelt" },
  ] },
  { $pop: { ingredientes: 1 } },
);

db.produtos.find({}, { nome: true, ingredientes: true, _id: false });