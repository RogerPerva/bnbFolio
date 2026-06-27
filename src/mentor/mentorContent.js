// Mentoría Estratégica Airbnb — GUÍA digital de arranque (orientación + acompañamiento).
// Tono: orientación, no ejecución. La mentoría guía y acompaña; la ejecución la
// realiza el propietario (o se contrata aparte). Evitar "vamos a configurar/crear/
// publicar/dejar listo". Usar "revisaremos / veremos / dejaremos una ruta sugerida".
// Fuente factual: mentor.md. Editar aquí.

export const mentor = {
  owner: {
    name: 'Rogelio Pervaz',
    tagline:
      'Coanfitrión Airbnb · Optimización de anuncios · Soluciones digitales para alojamientos.',
  },

  // Índice de la sesión (alimenta el riel de progreso lateral).
  nav: [
    { id: 's1', num: '01', label: 'Portada' },
    { id: 's2', num: '02', label: 'Qué revisaremos' },
    { id: 's3', num: '03', label: 'Tu modelo' },
    { id: 's4', num: '04', label: 'Riesgos' },
    { id: 's5', num: '05', label: 'Antes de publicar' },
    { id: 's6', num: '06', label: 'Comunicación' },
    { id: 's7', num: '07', label: 'Tarifa' },
    { id: 's8', num: '08', label: 'Primeros 30 días' },
    { id: 's9', num: '09', label: 'Snack bar' },
    { id: 's10', num: '10', label: 'Ruta sugerida' },
  ],

  hero: {
    eyebrow: 'Guía de sesión · Mentoría 1:1',
    title: 'Mentoría Estratégica Airbnb',
    subtitle:
      'Una guía digital para entender qué debes preparar, qué errores evitar y qué pasos seguir antes de publicar tus primeras habitaciones.',
    chips: ['2 habitaciones iniciales', 'Checklist de arranque', 'Primeros 30 días', 'Ruta para escalar'],
  },

  // Slice 2 — Lo que vamos a revisar hoy (orientación, no ejecución)
  decisions: {
    num: '02',
    kicker: 'La diferencia entre curso y mentoría',
    title: 'Lo que vamos a revisar hoy',
    subtitle: 'No es teoría para leer de corrido: es orientación para que tú decidas mejor.',
    items: [
      'Qué criterios usar para elegir las primeras habitaciones',
      'Qué debe estar listo antes del primer huésped',
      'Qué errores conviene evitar desde el inicio',
      'Cómo responder consultas con mayor claridad',
      'Cómo pensar tarifa y ocupación sin fijarla a ciegas',
      'Qué señales observar antes de escalar a más habitaciones',
    ],
  },

  // Slice 3 — Tu modelo no es Airbnb genérico
  model: {
    num: '03',
    kicker: 'Punto de partida',
    title: 'Tu modelo no es Airbnb genérico',
    subtitle:
      'Son habitaciones privadas con áreas comunes: este modelo requiere revisar privacidad, convivencia, reglas, seguridad y operación antes de escalar.',
    attributes: [
      'Habitaciones privadas',
      'Baño privado',
      'Áreas comunes',
      'Convivencia entre huéspedes',
      'Seguridad y privacidad',
    ],
    flow: ['2 habitaciones', 'Validar operación', 'Corregir', 'Documentar', 'Escalar a 6'],
    decision: {
      decision: 'Con qué criterios elegir tus 2 primeras habitaciones.',
      why: 'Empezar con 2 te permite estandarizar la operación con poco riesgo.',
      risk: 'Abrir las 6 a la vez y multiplicar errores sin haber probado nada.',
      action: 'Revisar cuáles 2 habitaciones conviene preparar primero.',
    },
    detalle: {
      summary: 'Ver qué conviene revisar en renta por habitaciones',
      items: [
        'Privado vs. compartido: cada habitación con baño privado es tu mayor ventaja; conviene dejar claro qué áreas son comunes.',
        'Convivencia entre desconocidos: las reglas (ruido, horarios, áreas comunes) pesan más.',
        'Seguridad entre huéspedes: cerraduras por habitación y cámaras solo en exteriores declaradas.',
        'Capacidad propia por habitación: conviene publicar primero las más fuertes y dejar las demás para una segunda etapa.',
        'Escalar de 2 a 6 con orden: documentar lo que funciona ayuda a que abrir las siguientes 4 sea replicar, no empezar de cero.',
      ],
    },
  },

  // Slice 4 — El riesgo de arrancar sin estructura
  risks: {
    num: '04',
    kicker: 'Advertencia estratégica',
    title: 'Lo que hunde un arranque',
    subtitle: 'Cada uno puede costar reseñas, dinero o ambos. Conviene prevenirlos antes de publicar.',
    items: [
      {
        error: 'No conocer tu propio alojamiento',
        consequence: 'Puede dejarte sin saber a quién llamar si falla el agua, la luz o el acceso.',
        prevention: 'Conviene anticipar fallas y tener contactos a la mano (un sensor de tinaco avisa antes de quedarte sin agua).',
      },
      {
        error: 'Inflar la capacidad',
        consequence: 'Una mala noche en sofá cama puede volverse una mala reseña.',
        prevention: 'Es recomendable definir capacidad por quien duerme cómodo, no por quien “cabe”.',
      },
      {
        error: 'No preparar inventario',
        consequence: 'Puedes empezar a perder cosas sin darte cuenta.',
        prevention: 'Conviene llevar un checklist/inventario desde el primer día.',
      },
      {
        error: 'No definir reglas de áreas comunes',
        consequence: 'Puede generar fricción entre huéspedes que no se conocen.',
        prevention: 'Es recomendable dejar reglas claras de ruido, horarios, visitas y uso de áreas comunes.',
      },
      {
        error: 'No preparar respuestas a consultas frecuentes',
        consequence: 'Consultas sin responder pueden traducirse en reservas perdidas.',
        prevention: 'Conviene tener guías y mensajes preparados antes de publicar.',
      },
      {
        error: 'Publicar con fotos o descripciones incompletas',
        consequence: 'Puede desperdiciar el impulso extra del anuncio nuevo.',
        prevention: 'Es recomendable preparar fotos con luz natural y una descripción clara desde el inicio.',
      },
      {
        error: 'No cubrir seguridad básica',
        consequence: 'Implica riesgo real y desconfianza del huésped.',
        prevention: 'Debe revisarse antes de publicar: detector de humo, extintor, botiquín e iluminación en accesos.',
      },
    ],
    detail: [
      'Anticipa los escenarios de falla y ten a la mano a quién llamar para cada uno (sin agua, sin luz, sin acceso).',
      'Lleva inventario desde el día uno: lo que no se mide, se pierde.',
      'Aprovecha la visibilidad extra del anuncio nuevo con fotos y descripción fuertes; considera el 20% de descuento de anuncio nuevo cuidando el costo-beneficio.',
    ],
    action: 'Identificamos los 3 riesgos que más te aplican hoy.',
  },

  // Slice 5 — Antes de publicar (checklist de revisión, interactivo)
  prePublish: {
    num: '05',
    kicker: 'Preparación',
    title: 'Checklist de revisión antes de publicar',
    subtitle: 'Abre cada categoría y marca lo que ya tienes. Tu avance se guarda en este navegador.',
    cameraWarning:
      'Cámaras solo en exteriores y accesos permitidos (entrada, estacionamiento) y declaradas. Airbnb prohíbe cualquier cámara en interiores, incluso en áreas comunes.',
    detail: [
      'La meta es cubrir por adelantado lo que un huésped pudiera necesitar: si ya lo tiene, no hay molestia ni para él ni para ti.',
      'Ten un cuarto de utilidades con repuestos (blancos, toallas, amenidades, insumos de limpieza) para reponer rápido.',
      'La seguridad (humo, monóxido, extintor, botiquín) se consigue fácil y los huéspedes la valoran: márcala en el anuncio.',
    ],
    note: 'Este checklist funciona como referencia de preparación. La compra, instalación o configuración de elementos queda a cargo del propietario, salvo que se contrate un servicio adicional.',
    checklistKey: 'mentor-prepublish-v2',
    groups: [
      {
        category: 'Descanso y camas',
        items: [
          'Capacidad real por habitación (quien duerme cómodo)',
          'Tipo de cama claro (individual, matrimonial, queen, king)',
          'Cama cómoda (colchón, almohadas, blancos)',
          'Protector de colchón',
          'Ropa de cama extra (2–3 por cama)',
        ],
      },
      {
        category: 'Limpieza',
        items: ['Limpieza impecable', 'Aroma a limpio', 'Toallas de cuerpo y de mano suficientes'],
      },
      {
        category: 'Seguridad',
        items: [
          'Botiquín de primeros auxilios',
          'Extintor',
          'Detector de humo',
          'Detector de monóxido de carbono (si aplica)',
          'Ubicación configurada como aproximada (no exacta)',
          'Cámara solo en exteriores, declarada en el anuncio',
        ],
      },
      {
        category: 'Acceso',
        items: [
          'Entrada autónoma o método claro de acceso',
          'Llaves extra o plan alterno',
          'Iluminación en accesos (sensor de movimiento)',
          'Espacio para equipaje',
        ],
      },
      {
        category: 'Comunicación',
        items: [
          'Instrucciones claras (llegada, estancia, salida)',
          'Mensajes automatizados preparados',
          'Respuestas a consultas frecuentes preparadas',
        ],
      },
      {
        category: 'Amenidades',
        items: [
          'Internet estable',
          'Ventilación o clima si hace calor',
          'Agua, café y algún snack de bienvenida',
          'Decoración cálida',
        ],
      },
      {
        category: 'Área de trabajo',
        items: ['Área de trabajo solo si realmente es cómoda'],
      },
      {
        category: 'Estacionamiento',
        items: [
          'Estacionamiento señalado (si es posible)',
          'Sensor de nivel de agua en el tinaco (anticipar fallas)',
          'Recepción de maletas en el alojamiento, si es posible',
        ],
      },
    ],
  },

  // Slice 6 — Comunicación que ayuda a convertir
  communication: {
    num: '06',
    kicker: 'Conversión',
    title: 'Comunicación que ayuda a convertir',
    subtitle:
      'Una respuesta clara y rápida aumenta la confianza del huésped y puede mejorar la probabilidad de reserva.',
    keys: [
      'Responder rápido',
      'Responder claro',
      'Resolver la duda concreta',
      'Reforzar puntos fuertes',
      'Cerrar con confianza',
      'Aprender de lo repetido',
    ],
    example: {
      question: '¿Tiene estacionamiento y puedo llegar tarde?',
      bad: 'Sí.',
      good: 'Sí, contamos con estacionamiento y podemos coordinar tu llegada tarde sin problema. Antes de tu llegada te enviaré instrucciones claras para entrar y ubicar el alojamiento.',
    },
    detail: [
      'Mensajes de bienvenida, durante la estancia y de salida, con instrucciones claras.',
      'Las primeras reseñas son las más importantes: cuida al máximo las primeras estancias.',
      'Fotos con luz natural, orden total y una portada fuerte; muestra lo real para no fallar en reseñas.',
      'Buena comunicación también con tu equipo: limpieza, vigilante, coanfitriones y vecinos.',
    ],
    action: 'Si varios preguntan lo mismo, conviene ajustar el anuncio: el mercado te está dando la pista.',
  },

  // Slice 7 — Tarifa y ocupación
  pricing: {
    num: '07',
    kicker: 'Números',
    title: 'La tarifa no se fija a ojo',
    subtitle: 'Veremos criterios para pensar tu tarifa real, no copiar el precio del vecino.',
    formula: 'Ingreso real = tarifa × noches ocupadas − costos − comisiones/impuestos',
    cards: [
      { title: 'Lo que quiero ganar', text: 'Tu meta mensual, ya con gastos fijos y un promedio de luz.' },
      { title: 'Lo que cuesta operar', text: 'Limpieza, luz, internet, lavandería, insumos, mantenimiento.' },
      { title: 'Lo que el mercado permite', text: 'Lo que cobran anuncios comparables en tu zona.' },
      { title: 'Lo que puedo mejorar', text: 'Amenidades, fotos y anuncio: más visualizaciones justifican mejor tarifa.' },
    ],
    note: 'En esta mentoría revisamos criterios para pensar la tarifa. Para fijar precios con precisión se recomienda comparar mercado local, costos reales, temporadas y desempeño inicial.',
    fiscal: {
      summary: 'Ver comisiones, retenciones e impuestos (nota de revisión)',
      rows: [
        { label: 'Comisión compartida', value: 'Anfitrión ~4% + huésped ~14–16.5% sobre el precio.' },
        { label: 'Comisión solo-anfitrión', value: 'Toda la comisión la paga el anfitrión, ~16% de tu pago.' },
        { label: 'Retención SAT (con RFC)', value: '~4% ISR + 8% IVA por reserva. Sin RFC sube fuerte.' },
        { label: 'Impuesto de hospedaje (Veracruz)', value: '~2%, Airbnb lo cobra y paga al estado.' },
      ],
      note: 'Vigente a junio 2026. Cifras de referencia, no asesoría fiscal: las tasas y reglas cambian, confírmalas con tu contador antes de declarar.',
    },
    detail: [
      'Costos a considerar: limpieza, luz, internet, lavandería, insumos, streaming y mantenimiento.',
      'Define lo que quieres ganar al mes (con gastos fijos) y contrástalo con lo que el mercado permite.',
      'Si el mercado paga menos, mejora amenidades, fotos y anuncio: más visualizaciones, más probabilidad de reserva.',
    ],
    action: 'Pensar una tarifa inicial entre “lo que quiero” y “lo que el mercado permite”.',
  },

  // Slice 8 — Primeros 30 días
  days30: {
    num: '08',
    kicker: 'Operación',
    title: 'Las primeras 4 semanas',
    subtitle: 'Ruta sugerida para observar y ajustar durante el primer mes.',
    timeline: [
      { week: 'Semana 1', text: 'Publicar y validar.' },
      { week: 'Semana 2', text: 'Responder consultas y ajustar.' },
      { week: 'Semana 3', text: 'Mejorar fotos, reglas, mensajes y precio.' },
      { week: 'Semana 4', text: 'Decidir si mantener, corregir o escalar.' },
    ],
    keyIdea:
      'Los primeros 30 días no solo son para recibir reservas; son para entender qué pregunta el mercado, qué conviene afinar en la operación y qué debe mejorarse antes de abrir más habitaciones.',
    detail: [
      'Dudas típicas: agua caliente, cómo entrar, ubicación, internet, cómo poner Netflix, ruidos, llaves, seguridad de la zona, dónde comer. Tenlas listas en tus guías.',
      'Horarios comunes: check-in 3:00 pm, check-out 12:00 pm.',
      'Revisa de cerca cómo dejan el lugar las primeras veces: te dice qué tipo de huésped recibes.',
      'Personal de limpieza de confianza y con detalle, que avise de inmediato si falta o se rompió algo.',
    ],
  },

  // Slice 9 — Snack bar / área común
  snackBar: {
    num: '09',
    kicker: 'Decisión, no decoración',
    title: '¿Snack bar o área común?',
    subtitle: 'Puede diferenciarte o volverse una carga operativa. Conviene decidirlo con criterio.',
    value: [
      'Mejora la experiencia',
      'Se ve bien en fotos',
      'Es fácil de mantener',
      'Da sensación de hospitalidad',
    ],
    complicates: [
      'Requiere mucha reposición',
      'Genera limpieza extra',
      'No hay control de consumo',
      'Crea ruido o convivencia incómoda',
    ],
    recommendation:
      'Recomendación: empezar simple (café, agua, snack básico y área limpia). La decisión final depende de presupuesto, limpieza, reposición y control operativo.',
    detail: [
      'En renta por habitaciones, un área agradable es justo lo que diferencia tu lugar de un cuarto pelón.',
      'El riesgo no es el concepto sino la operación: consumo, reposición y limpieza añaden trabajo.',
      'Crece hacia un snack bar más formal solo si ves que la demanda lo pide.',
    ],
  },

  // Slice 10 — Ruta sugerida de arranque
  roadmap: {
    num: '10',
    kicker: 'Cierre de sesión',
    title: 'Ruta sugerida de arranque',
    subtitle: 'Una guía de trabajo para después de la mentoría, paso a paso.',
    steps: [
      'Verificar cuenta',
      'Elegir habitaciones iniciales',
      'Revisar checklist',
      'Preparar fotos',
      'Redactar anuncio',
      'Definir reglas',
      'Preparar mensajes',
      'Publicar',
      'Observar los primeros 30 días',
      'Documentar aprendizajes',
      'Escalar con orden',
    ],
  },

  closing: {
    text: 'Esta guía no reemplaza la mentoría; la acompaña.',
    support: 'El acompañamiento posterior cubre las dudas que surjan conforme arrancas (1 a 2 meses).',
  },
};
