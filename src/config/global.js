export default {
  global: {
    componenteFormativo: 'Aplicación de normas de estilo en Microsoft Word',
    descripcionCurso:
      'Este componente formativo desarrolla habilidades para crear y estructurar documentos digitales en Microsoft Word, integrando tablas, figuras, referencias bibliográficas, tablas de contenido, plantillas y herramientas de revisión. Al finalizar, el aprendiz podrá elaborar documentos técnicos y académicos con organización clara, navegación eficiente y control de versiones colaborativo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tablas y figuras en Microsoft Word',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Inserción de tablas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Formato y diseño de tablas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Inserción de figuras o imágenes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Creación de títulos y fuentes de figuras y tablas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Referencias y bibliografía en Microsoft Word',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Agregar y administrar fuentes bibliográficas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Inserción de citas en el texto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Generación automática de bibliografía',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estilos de citación y actualización de fuentes',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tablas de contenido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Generación automática de tabla de contenido',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Niveles y personalización',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Actualización de la tabla de contenido',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Plantillas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Creación de una plantilla',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Uso para estandarización',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de revisión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Control de cambios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Comparación de documentos',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
  complementario: [
    {
      tema: '1. Tablas y figuras',
      referencia:
        'Microsoft Support. (2023). Insertar y dar formato a tablas e imágenes.',
      tipo: 'Tutorial en línea',
      link:
        'https://support.microsoft.com/es-es/office/insertar-y-dar-formato-a-tablas-e-im%C3%A1genes-9e2be863-fcb8-4f20-af24-905121643da8',
    },
    {
      tema: '2. Figuras en Word',
      referencia: 'Microsoft Learn. (2024). Imágenes y diagramas en Word.',
      tipo: 'Artículo técnico',
      link:
        'https://support.microsoft.com/es-es/office/crear-un-diagrama-de-flujo-con-smartart-30f87402-ba3d-48c8-8e9f-a66bcee7e5aa',
    },
    {
      tema: '3. Referencias y bibliografía',
      referencia:
        'Microsoft Support. (2023). Agregar citas y una bibliografía en Word.',
      tipo: 'Tutorial en línea',
      link:
        'https://support.microsoft.com/es-es/office/crear-una-bibliograf%C3%ADa-citas-y-referencias-17686589-4824-4940-9c69-342c289fa2a5',
    },
    {
      tema: '5.	Tabla de contenido',
      referencia:
        'Microsoft Support. (2023). Insertar una tabla de contenido en Word.',
      tipo: 'Tutorial en línea',
      link:
        'https://support.microsoft.com/es-es/office/insertar-una-tabla-de-contenido-882e8564-0edb-435e-84b5-1d8552ccf0c0',
    },
    {
      tema: '6.	Plantillas en Word',
      referencia: 'Microsoft Learn. (2024). Working with templates in Word.',
      tipo: 'Artículo técnico',
      link:
        'https://learn.microsoft.com/es-es/power-platform/admin/using-word-templates-dynamics-365?tabs=new',
    },
    {
      tema: '7.	Herramientas de revisión',
      referencia:
        'Microsoft Support. (2023). Rastrear cambios, comentarios y comparar documentos.',
      tipo: 'Tutorial en línea',
      link:
        'https://support.microsoft.com/es-es/office/realizar-un-seguimiento-de-los-cambios-en-word-197ba630-0f5f-4a8e-9a77-3712475e806a',
    },
  ],
  glosario: [
    {
      termino: 'Comentarios',
      significado:
        'anotaciones o notas que se añaden a un documento para hacer sugerencias, preguntas o correcciones sin alterar el texto original.',
    },
    {
      termino: 'Comparar documentos',
      significado:
        'herramienta que muestra diferencias entre dos versiones de un archivo.',
    },
    {
      termino: 'Control de cambios',
      significado:
        'registro visible de inserciones, eliminaciones y modificaciones realizadas a un documento.',
    },
    {
      termino: 'Estilo de título',
      significado:
        'formato predefinido usado para jerarquizar encabezados (Título 1, Título 2…).',
    },
    {
      termino: 'Figura',
      significado:
        'elemento gráfico (imagen, diagrama, captura) que complementa el texto.',
    },
    {
      termino: 'Fuente bibliográfica',
      significado:
        'recurso de donde se extrae información (libro, artículo, web, etc.).',
    },
    {
      termino: 'Gestor de fuentes',
      significado:
        'herramienta de Word para crear, editar y reutilizar referencias.',
    },
    {
      termino: 'Plantilla',
      significado: 'documento base con estructura y estilos reutilizables.',
    },
    {
      termino: 'Reutilización',
      significado:
        'uso repetido de una plantilla o elemento sin alterar el original.',
    },
    {
      termino: 'Tabla',
      significado: 'estructura de filas y columnas para organizar información.',
    },
    {
      termino: 'Tabla de contenido',
      significado: 'índice automático generado a partir de estilos de título.',
    },
  ],
  referencias: [
    {
      referencia:
        'Microsoft. (2023). Agregar citas y una bibliografía en Word. Microsoft Support.',
      link: 'https://support.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2023). Comparar y combinar documentos. Microsoft Support.',
      link: 'https://support.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2023). Insertar una tabla de contenido en Word. Microsoft Support.',
      link: 'https://support.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2023). Insertar y dar formato a tablas e imágenes. Microsoft Support.',
      link: 'https://support.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2023). Rastrear cambios en Word. Microsoft Support.',
      link: 'https://support.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2023). Rastrear cambios, comentarios y comparar documentos. Microsoft Support.',
      link: 'https://support.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2024). Imágenes y diagramas en Word. Microsoft Learn.',
      link: 'https://learn.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2024). Insert and manage comments in Word. Microsoft Learn.',
      link: 'https://learn.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2024). Working with heading styles in Word. Microsoft Learn.',
      link: 'https://learn.microsoft.com',
    },
    {
      referencia:
        'Microsoft. (2024). Working with templates in Word. Microsoft Learn.',
      link: 'https://learn.microsoft.com',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ligia del Rosario Arregocés Osorio',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
