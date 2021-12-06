export default {
  global: {
    componenteFormativo: 'Reporte de resultados de medición',
    descripcionCurso:
      'La información que resulta de medir variables ambientales de calidad de suelo, agua y biodiversidad, se registra en formatos previamente definidos, los cuales se constituyen en "registros de la medición". Esta información se procesa y analiza para redactar el informe de resultados de la medición.',
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Registros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informes de medición',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cohen, N. & Gómez R., G. (2019). Metodología de la investigación, ¿para qué? La producción de los datos y los diseños. Capítulo 6. Instrumentos de registro. Teseo.',
      link:
        'https://www.teseopress.com/metodologiadelainvestigacion/chapter/capitulo-6-instrumentos-de-registro/ ',
    },
    {
      referencia:
        'Fuentes, C. (2003). Redacción y presentación de informes. Revistas de Ciencias Administrativas y Financieras de la Seguridad Social, 11(2), 75-85',
      link:
        'http://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1409-12592003000200007&lng=en&tlng=es',
    },
    {
      referencia:
        'Halloy, S., Ibáñez, M. & Yager, K. (2011). Puntos y áreas flexibles (PAF) para inventarios rápidos del estado de biodiversidad. Ecología en Bolivia, 46 (1), 46-56.',
      link:
        'http://www.scielo.org.bo/scielo.php?script=sci_arttext&pid=S1605-25282011000100005&lng=es&tlng=es',
    },
    {
      referencia:
        'Loaiza R. L. (2011). Propuesta de indicadores para la evaluación del desempeño ambiental de la etapa de construcción de un proyecto de desarrollo. Revista de la Facultad de Ingeniería Universidad Central de Venezuela, 26 (1), 81-84',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0798-40652011000100009&lng=es&tlng=es',
    },
  ],
  glosario: [
    {
      termino: 'Diligenciamiento',
      significado:
        'Procesos en el que se rellenan los formatos o planillas con la información, datos o resultados de la medición de variables ambientales en agroecosistemas.',
    },
    {
      termino: 'Formatos para el muestreo',
      significado:
        'Instrumentos de recolección de datos diseñados antes de la medición.',
    },
    {
      termino: 'Informe de medición',
      significado:
        'Reporte escrito con la descripción del proceso de recolección de la información a través del plan de muestreo, los resultados de la medición y conclusiones útiles para la toma de decisiones acerca del plan de manejo del agroecosistema.',
    },
    {
      termino: 'Registros',
      significado:
        'Formato o planilla debidamente diligenciado y se constituye como documento que evidencia un resultado obtenido o una actividad desarrollada, por lo tanto, no está sujeta a cambios.',
    },
    {
      termino: 'Resultados de la medición',
      significado:
        'Información procesada a partir de los registros diligenciados de la medición de las variables ambientales.',
    },
  ],
  complementario: [
    {
      texto:
        'Fuentes, C. (2003). Redacción y presentación de informes. Revistas de Ciencias Administrativas y Financieras de la Seguridad Social, 11 (2), 75-85. ',
      tipo: 'Artículo',
      link:
        'http://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1409-12592003000200007&lng=en&tlng=es',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Angélica María Franco Cañas',
        cargo: 'Experta Temática',
        centro:
          'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico ',
      },
      {
        nombre: 'Ángela María Zapata Guzmán',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Grupo de ejecución de la formación Virtual - Ecosistema de Recursos Educativos Digitales ',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
