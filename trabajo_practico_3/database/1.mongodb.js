use('alumnado');

db.padron.aggregate([
  {
    $match: { provincia: 'Formosa' },
  },
  {
    $group: {
      _id: '$localidad',
      mod_comun: { $sum: '$mod_comun' },
      mod_mat: { $sum: '$mod_especial' },
      mod_adultos: { $sum: '$mod_adulto' },
    },
  },
  {
    $project: {
      _id: 1,
      mod_comun: 1,
      mod_mat: 1,
      mod_adultos: 1,
    },
  },
]);
