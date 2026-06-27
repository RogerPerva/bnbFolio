// Guía completa de arranque Airbnb — versión LEGIBLE (documento de consulta).
// Es el contenido a fondo de mentor.md, para que el cliente lo lea durante o
// después de la sesión. La página /mentor es la presentación; esta es la lectura.
// Bloques soportados por Guia.jsx: { p } | { h3 } | { list } | { ol } | { note }

export const guia = {
  eyebrow: 'Guía digital de arranque',
  title: 'Guía completa Airbnb',
  intro:
    'El objetivo de esta guía es que entiendas cómo funciona la plataforma: conceptos básicos, los cobros, el ciclo de vida de una reserva, las herramientas y cómo configurar bien tu anuncio. Empezamos desde cero y avanzamos hasta los criterios que solo se aprenden operando, para que no pierdas meses —y dinero— aprendiéndolos por prueba y error.',

  sections: [
    {
      id: 'g1',
      num: '01',
      title: '¿Cómo funciona Airbnb?',
      label: 'Cómo funciona',
      blocks: [
        { p: 'Airbnb es una plataforma donde publicas tu casa, departamento, mini casa, loft, cabaña, habitación, etc. A esto se le llama “alojamiento” o “anuncio”.' },
        { h3: 'Comisiones de la plataforma' },
        { p: 'Airbnb cobra una tarifa de servicio por usar la plataforma. En México conviven dos esquemas y es importante saber en cuál estás, porque cambia mucho lo que recibes:' },
        {
          list: [
            'Esquema compartido (split-fee): el anfitrión paga ~4% y el huésped paga otra tarifa (entre ~14% y ~16.5%) que se suma al precio que ve al reservar. Es el más común para anfitriones particulares.',
            'Esquema solo-anfitrión (host-only): toda la comisión la paga el anfitrión, un ~16% descontado directo de tu pago, y el huésped no ve tarifa de servicio extra.',
          ],
        },
        { note: 'Cifras de referencia, no asesoría fiscal. Estas tasas subieron +1% a partir del 23 de junio de 2026 (antes 3% / 15.5%). La tarifa de servicio que muestra Airbnb ya incluye el IVA correspondiente.' },
        { h3: 'Impuestos (no son comisión de Airbnb)' },
        {
          list: [
            'Con RFC, Airbnb te retiene ~4% de ISR + 8% de IVA por reserva. Sin RFC, la retención sube fuerte (ISR hasta ~20%, IVA 16%), así que registrarlo conviene.',
            'Impuesto Sobre Hospedaje (ISH): en Veracruz es ~2%, y Airbnb ya lo cobra y lo paga al estado automáticamente.',
          ],
        },
        { note: 'Conocer estas retenciones te permite calcular tu ingreso real. Para tu declaración conviene apoyarte en un contador.' },
        { h3: 'Pagos y servicio' },
        {
          list: [
            'Airbnb paga por transferencia bancaria, normalmente ~24 h después de la llegada del huésped (check-in).',
            'Airbnb premia con más visibilidad a los anuncios que cuidan la experiencia: si tú vendes bien y dejas huéspedes contentos, la plataforma gana.',
          ],
        },
        { p: 'Para empezar en Airbnb básicamente necesitas 2 cosas: una cuenta verificada y un alojamiento que ofrecer.' },
      ],
    },
    {
      id: 'g2',
      num: '02',
      title: 'Cómo manejar tu cuenta y tu calendario',
      label: 'Cuenta y calendario',
      blocks: [
        { h3: 'La cuenta' },
        { p: 'Lo primero es crear y verificar tu cuenta. La verificación (identidad, datos de contacto y datos bancarios para recibir pagos) es lo que te habilita a recibir reservas y cobrar.' },
        { h3: 'El ciclo de vida de una reserva' },
        {
          ol: [
            'Solicitud o reserva — el huésped reserva (automático) o te pide aprobación (manual).',
            'Confirmación — queda agendada en tu calendario y se bloquean esas fechas.',
            'Antes de la llegada — coordinas el check-in y envías instrucciones.',
            'Estancia — el huésped está en el alojamiento; aquí entran los mensajes e incidencias.',
            'Check-out — el huésped sale; se revisa y se prepara para el siguiente.',
            'Pago y reseñas — Airbnb te paga (~1 día después del check-in) y ambos se evalúan.',
          ],
        },
        { h3: 'Cancelaciones' },
        { p: 'Si cancela el huésped, lo que se le reembolsa depende de la política de cancelación que elijas. Para estancias cortas, las principales son:' },
        {
          list: [
            'Flexible: reembolso total si cancela hasta 24 h antes del check-in.',
            'Moderada: reembolso total hasta 5 días antes. Buen equilibrio para arrancar.',
            'Firme: reembolso total solo si cancela 30 días antes (50% entre 7 y 30 días).',
            'Limitada: reembolso total hasta 14 días antes (50% entre 7 y 14 días).',
          ],
        },
        { p: 'Todas incluyen un periodo de gracia de 24 h tras reservar (siempre que la reserva se haya hecho con al menos 7 días de anticipación al check-in).' },
        { p: 'Si cancelas tú (anfitrión): tiene penalizaciones — multa, bloqueo de esas fechas, baja en tu posicionamiento y riesgo de perder el estatus de Superanfitrión. Por eso solo conviene confirmar lo que de verdad puedes cumplir.' },
        { h3: 'Mensajes' },
        { p: 'La mensajería es donde ocurre casi toda la relación con el huésped. Aquí se configuran los mensajes automatizados (bienvenida, instrucciones de entrada, durante la estancia y de salida).' },
        { h3: 'El calendario' },
        { p: 'Una vez creado el anuncio, desde el calendario administras todos los costos y descuentos:' },
        {
          list: [
            'Precio por noche y precios dinámicos.',
            'Precio por persona extra.',
            'Costo de limpieza.',
            'Costo por aceptar mascotas y otros costos extra.',
            'Descuentos por estancia (semanal/mensual), por fechas y promociones.',
          ],
        },
      ],
    },
    {
      id: 'g3',
      num: '03',
      title: 'Los pilares de un anuncio exitoso',
      label: 'Anuncio exitoso',
      blocks: [
        { h3: '1. Anuncio' },
        {
          list: [
            'La imagen que da tu anuncio: favorito entre huéspedes, Superanfitrión, banners de promociones y ofertas.',
            'Precio competitivo y dinámico.',
            'Descripciones claras, fotos claras, buenas reseñas.',
            'Alojamiento de calidad: no hace falta lo mejor del mundo, sino que aporte valor real a la estancia.',
            'Amenidades que suman valor.',
            'El nombre del anuncio: un título que invite y resalte lo mejor del lugar, no algo genérico como “cuarto en renta”. Es lo primero que lee el huésped.',
          ],
        },
        { h3: '2. Comunicación' },
        {
          list: [
            'Un anfitrión con iniciativa, que trata al huésped como si lo recibiera en su casa, genera una experiencia distinta, y eso se paga bien.',
            'Mensajes de bienvenida, durante la estancia y a la salida, con instrucciones claras.',
            'Responde rápido y completo. El tiempo de respuesta es parte de la experiencia: muchas veces una consulta bien y pronto respondida es la que se convierte en reserva.',
            'Buena comunicación con tu equipo: limpieza, vigilante, coanfitriones e incluso vecinos.',
          ],
        },
        { h3: '3. Descripciones claras' },
        {
          list: [
            'Tener las reglas bien cimentadas es parte de la base de un anuncio exitoso.',
            'Guías bien redactadas, que de verdad den la bienvenida al huésped.',
            'Describir bien las amenidades: refleja con claridad lo que sí hay, porque todo suma (o resta).',
          ],
        },
        { h3: '4. Estrategias de ocupación' },
        { p: 'Estar en constante creación y revisión de estrategias para aumentar la ocupación en temporadas bajas o altas: actualizar el anuncio y sus precios para ser más llamativo ante futuros huéspedes.' },
        { h3: 'Lo esencial de las fotos' },
        {
          list: [
            'Luz natural: fotografía de día, con cortinas abiertas. La luz natural vende.',
            'Orden y limpieza total antes de disparar: cama bien tendida, superficies despejadas.',
            'Foto de portada fuerte: es la que decide el clic.',
            'Muestra lo real: prometer de más es de los errores que peor pegan en reseñas.',
            'Cubre todo el espacio: habitación, baño privado, áreas comunes y estacionamiento.',
          ],
        },
        { h3: 'Cómo funcionan las reseñas' },
        {
          list: [
            'Al final de cada estancia, huésped y anfitrión se evalúan mutuamente (ventana de ~14 días).',
            'Las primeras reseñas son las más importantes: un anuncio nuevo sin reseñas da desconfianza, así que cuida al máximo las primeras estancias.',
            'Buenas reseñas → más visibilidad → más reservas. Es un círculo que se construye con servicio y comunicación, no con trucos.',
          ],
        },
      ],
    },
    {
      id: 'g4',
      num: '04',
      title: 'Los errores más comunes al arrancar',
      label: 'Errores comunes',
      blocks: [
        {
          list: [
            'No conocer tu propio alojamiento. Ten claros los puntos fuertes y débiles: si se va la luz, ¿a quién llamo? ¿Qué pasa si se acaba el agua o el huésped no puede entrar? Anticipa los escenarios de falla. Muchos se previenen con tecnología: un sensor de nivel en el tinaco te avisa antes de quedarte sin agua.',
            'Mentir o exagerar en el anuncio. Sé claro con lo que sí se tiene y nunca prometas lo que no hay.',
            'No llevar un checklist / inventario. Muchos anfitriones empiezan a perder cosas sin darse cuenta porque no saben qué tenían.',
            'Dejar todo “para más tarde”. Lanzan el anuncio y ya nunca lo corrigen. Ten todo claro y estructurado antes de publicar.',
            'Inflar la capacidad. Piensa la capacidad desde el descanso (cama cómoda, espacio para equipaje, ventilación, toallas y almohadas suficientes), no por meter un sofá cama. Mejor menos personas cómodas que más incómodas.',
            'No aprovechar el plus de anuncio nuevo. Airbnb da visibilidad extra al inicio; subir fotos y descripciones flojas desperdicia esa ventana.',
          ],
        },
        { note: 'Sobre la promoción de anuncio nuevo: al publicar, Airbnb recomienda activar el 20% de descuento para anuncio nuevo para destacar frente a la competencia. Es recomendable activarla, cuidando la relación costo-beneficio para que siga siendo redituable.' },
      ],
    },
    {
      id: 'g5',
      num: '05',
      title: 'Lo indispensable antes de publicar',
      label: 'Antes de publicar',
      blocks: [
        { p: 'Antes de recibir al primer huésped, esto conviene tenerlo listo:' },
        {
          list: [
            'Entrada autónoma e instrucciones claras (de llegada, del alojamiento y de salida).',
            'Alojamiento en buenas condiciones y conocer bien sus posibles fallas.',
            'Cuarto de utilidades / almacenamiento: un lugar fijo con repuestos de blancos, toallas, amenidades, insumos de limpieza y herramienta básica.',
            'Mensajes automatizados y guías personalizadas.',
            'Internet de buena calidad.',
            'Ventiladores o clima si hace calor.',
            'Capacidad real por habitación (cuántas personas duermen cómodas), con el tipo de cama claro.',
            'Camas de buena calidad: colchones, almohadas, blancos y protector de colchón. Frazadas adicionales.',
            'Elementos de seguridad: detector de humo, detector de monóxido de carbono, extintor y botiquín.',
            'Ubicación configurada como aproximada, no exacta, por seguridad.',
            'Luces con sensor de movimiento en accesos y pasillos.',
            'Sensor de nivel de agua en el tinaco para anticipar quedarte sin agua.',
            'Extremo cuidado en la limpieza y aroma a limpio.',
            'Amenidades de bienvenida: agua, café, algún dulce. Toallas de cuerpo y de mano.',
            'Paraguas a disposición. Recepción de maletas si es posible. Llaves extra.',
            'Cámara de seguridad solo en exteriores (entrada, estacionamiento), declarada en el anuncio.',
            'Copas, tazas y vasos; platos y vasos de plástico para niños.',
            'Estacionamiento si es posible. Decoración cálida. Ropa de cama extra (2–3 por cama).',
          ],
        },
        { note: 'No recomendar cámaras interiores. Airbnb prohíbe cualquier cámara en interiores, aun en áreas comunes; instalar una oculta puede costarte la cuenta.' },
        { p: 'La idea de tener todo esto es cubrir por adelantado las necesidades que un huésped pudiera tener: si lo requiere, ya lo tiene y no genera molestia. Eso crea una estancia memorable y hace que quiera regresar.' },
      ],
    },
    {
      id: 'g6',
      num: '06',
      title: 'Cómo pensar tu tarifa y tu ocupación',
      label: 'Tarifa y ocupación',
      blocks: [
        { p: 'Primero ten claros los costos que entran en juego, porque todo suma o todo resta: limpieza, luz, internet, lavandería, insumos, streaming/membresías y mantenimiento.' },
        { h3: 'Dos datos para decidir' },
        {
          ol: [
            '¿Cuánto esperas recibir al mes? (con tus gastos fijos, metiendo un promedio de luz). Con esto defines lo que quieres.',
            '¿Cuánto te dice el mercado que vas a recibir al mes? Con esto: confirmas que sí lo puedes recibir, o ajustas otra parte para lograrlo igual.',
          ],
        },
        { h3: 'Ir contra el mercado: la ocupación' },
        { p: 'El mercado no siempre tiene la razón: muchos alojamientos contra los que compites no tienen tu misma visión ni tipo de alojamiento. Puedes ser mejor: más amenidades, mejor vista, mejores fotos, actualizarte. Todo eso aumenta las visualizaciones y, a su vez, las probabilidades de ser reservado.' },
        { note: 'Cifras fiscales de referencia, no asesoría: comisión compartida (anfitrión ~4% + huésped ~14–16.5%), solo-anfitrión (~16%), retención SAT con RFC (~4% ISR + 8% IVA), ISH Veracruz ~2%. Vigente a junio 2026; confírmalo con tu contador.' },
      ],
    },
    {
      id: 'g7',
      num: '07',
      title: 'Reglas de la casa y selección de huéspedes',
      label: 'Reglas y huéspedes',
      blocks: [
        { h3: 'Reglas de la casa' },
        { p: 'Las reglas pueden ser tan abiertas como decidas, pero entre más específicas y claras, mucho mejor. Airbnb incluye AirCover, una protección contra daños del huésped (hasta 3 millones de USD). Para que aplique: reclamar dentro de los 14 días posteriores al check-out, intentar primero el reembolso directo con el huésped y aportar evidencia real (fotos, recibos; nada alterado ni generado con IA). Las reglas bien redactadas ayudan en incidencias como fiestas, mascotas o huéspedes no autorizados.' },
        { h3: 'Selección de huéspedes' },
        { p: 'Puedes aceptar huéspedes con o sin reseñas, sin foto de perfil o perfiles nuevos. Recomendación: lee siempre las reseñas para evitar problemas. Existe la reserva automática o la aprobación manual. Al arrancar, conviene aprobar manualmente: te da tiempo de conocer al huésped, prepararte y agarrar el ritmo. La reserva automática conviene más adelante, ya con experiencia.' },
      ],
    },
    {
      id: 'g8',
      num: '08',
      title: 'Qué esperar en tus primeros 30 días',
      label: 'Primeros 30 días',
      blocks: [
        { p: 'Aunque las habitaciones ya se hayan probado antes, siempre surgen cosas. Las dudas más comunes:' },
        {
          list: [
            'No hay agua caliente.',
            '¿Cómo puedo entrar?',
            'No encuentro tu alojamiento.',
            'El internet no llega o se fue.',
            '¿Cómo pongo Netflix en la tele?',
            'Hay un ruido extraño. / Perdí la llave.',
            'Preguntas sobre la seguridad en la zona.',
            'Recomendaciones de dónde ir a comer.',
          ],
        },
        { p: 'Tener estas respuestas preparadas de antemano (en tus guías y mensajes automatizados) te quita la mayoría de los dolores de cabeza del arranque.' },
        { p: 'Además recibirás consultas antes de reservar (estacionamiento, llegada tarde, baño privado, internet, seguridad). No las veas como molestia: son retroalimentación del mercado. Si varios preguntan lo mismo, el anuncio no lo está explicando bien y conviene ajustar la descripción, las fotos o las reglas.' },
        { h3: 'La operación del día a día' },
        {
          list: [
            'Horarios: lo más común es check-in 3:00 pm y check-out 12:00 pm. Si la zona tiene mucho polvo, no dejes las camas tendidas hasta que llegue el próximo huésped: ropa de cama fresca y aroma limpio.',
            'Revisa de cerca al inicio: ir las primeras veces a ver cómo dejan el alojamiento te da una idea real del tipo de huésped.',
            'Personal de limpieza de calidad y confianza, con enfoque al detalle, que pueda detectar si falta o se rompió algo y avisarte de inmediato.',
          ],
        },
      ],
    },
    {
      id: 'g9',
      num: '09',
      title: 'Renta por habitaciones (tu modelo)',
      label: 'Por habitaciones',
      blocks: [
        { p: 'Tu proyecto no es una propiedad completa, sino habitaciones privadas con áreas comunes. Eso cambia algunas decisiones respecto al modelo tradicional:' },
        {
          list: [
            'Privado vs. compartido: cada habitación con baño privado es tu mayor ventaja; véndela como espacio privado y deja claro qué áreas son comunes.',
            'Convivencia entre desconocidos: varios huéspedes que no se conocen bajo el mismo techo. Las reglas (ruido, horarios, áreas comunes, limpieza) cobran más importancia.',
            'Seguridad entre huéspedes: cerraduras por habitación, cuidado con objetos de valor y cámaras solo en exteriores declaradas. Airbnb prohíbe cámaras en interiores.',
            'Capacidad propia por habitación: cada una define su tipo de cama y capacidad real; publica primero las más fuertes.',
            'Escalar de 2 a 6 con orden: empezar con 2 te permite estandarizar tu operación con poco riesgo y luego replicarla. Documenta lo que funciona.',
          ],
        },
        { h3: 'El área común / snack bar' },
        {
          list: [
            'Sí aporta valor, sobre todo en renta por habitaciones: un espacio agradable mejora la experiencia, las fotos y las reseñas.',
            'El riesgo es operativo: consumo, reposición y limpieza añaden trabajo.',
          ],
        },
        { note: 'Recomendación: empezar simple (área cómoda, café, agua, snack básico de cortesía) y solo crecer hacia algo más formal si la demanda lo pide. Empieza por el valor, no por la complejidad.' },
      ],
    },
    {
      id: 'g10',
      num: '10',
      title: 'Ruta de pasos y acompañamiento',
      label: 'Ruta y acompañamiento',
      blocks: [
        { h3: 'Ruta sugerida para crear tu anuncio' },
        {
          ol: [
            'Verificar la cuenta de Airbnb (identidad + datos bancarios).',
            'Conocer y preparar tus 2 primeras habitaciones: inventario, fallas posibles, entrada autónoma.',
            'Completar el checklist de arranque en esas 2 habitaciones.',
            'Tomar buenas fotos y redactar descripciones, reglas y guías claras.',
            'Definir tarifa y ocupación con base en los costos y el mercado local.',
            'Configurar el calendario: precios, limpieza, descuentos y promoción de anuncio nuevo.',
            'Configurar los mensajes automatizados (bienvenida, entrada, estancia, salida).',
            'Publicar y activar (con criterio) la promoción de anuncio nuevo.',
            'Operar y afinar los primeros 30 días; documentar lo que funciona.',
            'Replicar la operación para abrir gradualmente las 4 habitaciones restantes.',
          ],
        },
        { h3: 'Acompañamiento' },
        { p: 'Soporte posterior (1 mes) para resolver las dudas que surjan conforme arrancas.' },
      ],
    },
  ],
};
