use('alumnado');

db.padron.aggregate([
  {
    $match: { provincia: 'Formosa', mod_comun: 1 },
  },
  {
    $group: {
      _id: '$localidad',
      comun_jardin_maternal: { $sum: '$comun_jardin_maternal' },
      comun_jardin_infnates: { $sum: '$comun_jardin_infnates' },
      comun_primario: { $sum: '$comun_primario' },
      comun_secundario: { $sum: '$comun_secundario' },
      comun_secundario_INET: { $sum: '$comun_secundario_INET' },
      comun_SNU: { $sum: '$comun_SNU' },
      comun_SNU_INET: { $sum: '$comun_SNU_INET' },
    },
  },
  {
    $project: {
      _id: 1,
      comun_jardin_maternal: 1,
      comun_jardin_infnates: 1,
      comun_primario: 1,
      comun_secundario: 1,
      comun_secundario_INET: 1,
      comun_SNU: 1,
      comun_SNU_INET: 1,
    },
  },
]);
