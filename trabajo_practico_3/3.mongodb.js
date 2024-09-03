use('alumnado');

db.matriculas.aggregate([
  {
    $match: { provincia: 'Formosa', primaria_6: 1 },
  },
  {
    $group: {
      _id: '$primaria_6',
      suma_matriculas_1: { $sum: '$matricula_1' },
      suma_matriculas_2: { $sum: '$matricula_2' },
      suma_matriculas_3: { $sum: '$matricula_3' },
      suma_matriculas_4: { $sum: '$matricula_4' },
      suma_matriculas_5: { $sum: '$matricula_5' },
      suma_matriculas_6: { $sum: '$matricula_6' },
    },
  },
  {
    $project: {
      _id: 1,
      suma_matriculas_1: 1,
      suma_matriculas_2: 1,
      suma_matriculas_3: 1,
      suma_matriculas_4: 1,
      suma_matriculas_5: 1,
      suma_matriculas_6: 1,
    },
  },
]);
