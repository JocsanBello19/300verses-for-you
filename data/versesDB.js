// src/data/versesDB.js

// 1. Definimos los lotes (aquí dentro pegas tus arreglos)

const versesDB = [
  {
    text: 'Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa.',
    ref: 'Isaías 41:10',
    cat: 'promesa',
    reflection:
      'Cuando sientas que el mundo pesa demasiado, recuerda que no lo sostienes sola. Sus manos, que crearon el universo, son las mismas que hoy te abrazan y te sostienen con ternura.',
  },
  {
    text: 'Por sobre todas las cosas cuida tu corazón, porque de él mana la vida.',
    ref: 'Proverbios 4:23',
    cat: 'mandamiento',
    reflection:
      'Tu corazón es un tesoro sagrado, el jardín donde Dios siembra Sus sueños para ti. Protegerlo no es cerrarlo, sino entregárselo a Él para que solo florezca lo que te edifica.',
  },
  {
    text: 'El Señor tu Dios está en medio de ti, guerrero victorioso; se gozará en ti con alegría, en su amor guardará silencio, se regocijará por ti con cantos de júbilo.',
    ref: 'Sofonías 3:17',
    cat: 'verdad',
    reflection:
      'Imagina por un momento al Creador del cielo sonriendo al verte. Su amor por ti es tan profundo que a veces te envuelve en paz silenciosa, y otras, canta de alegría por tu vida.',
  },
  {
    text: 'Examíname, oh Dios, y sondea mi corazón; ponme a prueba y sondea mis pensamientos. Fíjate si voy por mal camino, y guíame por el camino eterno.',
    ref: 'Salmo 139:23-24',
    cat: 'oración',
    reflection:
      'Qué descanso hay en rendirnos ante Aquel que nos conoce mejor que nosotras mismas. Esta es una oración de valentía: abrirle las puertas del alma para que Su luz ordene nuestro interior.',
  },
  {
    text: "Pero Rut respondió: '¡No me pidas que te deje y me separe de ti! Iré a donde tú vayas, y viviré donde tú vivas. Tu pueblo será mi pueblo, y tu Dios será mi Dios'.",
    ref: 'Rut 1:16',
    cat: 'ejemplo',
    reflection:
      'La lealtad de Rut nos recuerda que el amor genuino es una decisión valiente. En los momentos de incertidumbre, una fe inquebrantable nos impulsa a caminar con gracia hacia el propósito de Dios.',
  },
  {
    text: 'Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.',
    ref: 'Jeremías 29:11',
    cat: 'promesa',
    reflection:
      'Incluso cuando el panorama parece incierto, el Autor de tu historia ya ha escrito un desenlace lleno de luz. Tu futuro está seguro en las manos de quien nunca improvisa.',
  },
  {
    text: 'Pues estoy convencido de que ni la muerte ni la vida, ni los ángeles ni los demonios... ni ninguna otra cosa creada nos podrá separar del amor de Dios que es en Cristo Jesús nuestro Señor.',
    ref: 'Romanos 8:38-39',
    cat: 'verdad',
    reflection:
      'No hay error que puedas cometer, ni distancia que puedas recorrer, que agote el amor que Él te tiene. Eres Suya, hoy y por la eternidad, y esa es tu mayor victoria.',
  },
  {
    text: 'Un mandamiento nuevo les doy: Que se amen los unos a los otros. Así como yo los he amado, también ustedes deben amarse los unos a los otros.',
    ref: 'Juan 13:34',
    cat: 'mandamiento',
    reflection:
      'Amar como Él nos amó es el mayor desafío y el regalo más hermoso que podemos dar. Es un amor que perdona, que abraza la imperfección y que ilumina la vida de quienes nos rodean.',
  },
  {
    text: 'No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios y denle gracias.',
    ref: 'Filipenses 4:6',
    cat: 'oración',
    reflection:
      'La ansiedad se desvanece cuando convertimos nuestras preocupaciones en conversaciones con el Padre. Respira profundo, entrégale hoy tus cargas y deja que Su paz inunde tu mente.',
  },
  {
    text: "María respondió: 'Aquí tienes a la sierva del Señor. Que él haga conmigo como me has dicho'.",
    ref: 'Lucas 1:38',
    cat: 'ejemplo',
    reflection:
      "Rendirse a la voluntad de Dios requiere una fe inmensa. La disposición de María nos enseña que un simple 'sí' a Dios puede desencadenar milagros que bendecirán a generaciones enteras.",
  },
  {
    text: 'El Señor es mi pastor, nada me falta; en verdes pastos me hace descansar. Junto a tranquilas aguas me conduce.',
    ref: 'Salmo 23:1-2',
    cat: 'promesa',
    reflection:
      'Cuando el ruido del día te abrume, cierra los ojos y busca ese lugar de descanso en Su presencia. Él es el pastor que conoce exactamente qué necesita tu alma para restaurarse.',
  },
  {
    text: 'Reconócelo en todos tus caminos, y él allanará tus sendas.',
    ref: 'Proverbios 3:6',
    cat: 'mandamiento',
    reflection:
      'Invitar a Dios a tus decisiones diarias no te quita libertad, te regala claridad. Caminar de Su mano transforma hasta el sendero más empinado en una ruta de propósito.',
  },
  {
    text: 'Él sana a los quebrantados de corazón, y venda sus heridas.',
    ref: 'Salmo 147:3',
    cat: 'promesa',
    reflection:
      'No hay tristeza que Su amor no pueda alcanzar ni herida que Sus manos no puedan vendar. Él es el Médico Divino que restaura con paciencia cada pieza de nuestro corazón.',
  },
  {
    text: 'Porque por gracia ustedes han sido salvados mediante la fe; esto no procede de ustedes, sino que es el regalo de Dios.',
    ref: 'Efesios 2:8',
    cat: 'verdad',
    reflection:
      'El amor de Dios no se gana, se recibe. Disfruta de la libertad que te da saber que eres amada y aceptada no por lo que haces, sino por el hermoso sacrificio de Su gracia.',
  },
  {
    text: 'Ten compasión de mí, oh Dios, conforme a tu gran amor; conforme a tu inmensa bondad, borra mis transgresiones.',
    ref: 'Salmo 51:1',
    cat: 'oración',
    reflection:
      'El arrepentimiento genuino es el abrazo que nos devuelve a casa. Esta oración de David nos recuerda que el corazón de Dios siempre está dispuesto a darnos un nuevo comienzo.',
  },
  {
    text: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.',
    ref: 'Romanos 8:28',
    cat: 'promesa',
    reflection:
      'Incluso en los días grises, el Señor está tejiendo los hilos de tu vida para crear una obra maestra. Confía en el proceso, porque Sus manos saben transformar el dolor en bendición.',
  },
  {
    text: 'Vístanse de amor, que es el vínculo perfecto.',
    ref: 'Colosenses 3:14',
    cat: 'mandamiento',
    reflection:
      'Antes de salir al mundo cada mañana, decide ponerte la mejor prenda: el amor. Es la actitud que embellece el alma, sana relaciones y refleja el corazón mismo de Jesús.',
  },
  {
    text: 'Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.',
    ref: 'Salmo 46:1',
    cat: 'verdad',
    reflection:
      'Cuando sientas que las fuerzas te abandonan, recuerda que no tienes que ser fuerte todo el tiempo. Tienes un refugio seguro donde puedes descansar y ser renovada por Su poder.',
  },
  {
    text: 'Crea en mí, oh Dios, un corazón limpio, y renueva la firmeza de mi espíritu.',
    ref: 'Salmo 51:10',
    cat: 'oración',
    reflection:
      'Más que cambiar nuestras circunstancias, Dios anhela transformar nuestro interior. Pedir un corazón renovado es el primer paso para ver la vida a través de Sus ojos llenos de luz.',
  },
  {
    text: "Entonces José dijo a sus hermanos: 'Ustedes pensaron hacerme mal, pero Dios lo cambió en bien para que sucediera como vemos hoy, y se salvara la vida de mucha gente'.",
    ref: 'Génesis 50:20',
    cat: 'ejemplo',
    reflection:
      'La historia de José es un testimonio deslumbrante de redención y perdón. Nos enseña que la gracia divina puede transformar cualquier traición o dolor en un puente para bendecir a otros.',
  },
  {
    text: 'El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor.',
    ref: '1 Corintios 13:4-5',
    cat: 'verdad',
    reflection:
      'Este es el estándar del amor verdadero, el mismo con el que Dios te ama a diario. Deja que esta verdad llene tu corazón de paciencia y dulzura para compartirla con el mundo.',
  },
  {
    text: 'Confía en el Señor de todo corazón, y no en tu propia inteligencia.',
    ref: 'Proverbios 3:5',
    cat: 'mandamiento',
    reflection:
      'Nuestra mente limitada a veces nos llena de temores, pero Su sabiduría es infinita. Soltar el control y confiar en Él es un acto de valentía que trae una paz inexplicable.',
  },
  {
    text: 'Jehová es tu guardador; Jehová es tu sombra a tu mano derecha. El sol no te fatigará de día, ni la luna de noche.',
    ref: 'Salmo 121:5-6',
    cat: 'promesa',
    reflection:
      'Estás bajo Su cuidado constante. Como una sombra fresca en un día de calor agotador, Su presencia te envuelve, te protege y te da aliento en cada paso de tu caminar.',
  },
  {
    text: 'Padre nuestro que estás en los cielos, santificado sea tu nombre. Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra.',
    ref: 'Mateo 6:9-10',
    cat: 'oración',
    reflection:
      'El modelo perfecto de rendición. Al orar así, estamos alineando nuestros latidos con los del cielo, deseando profundamente que los sueños de Dios se hagan realidad en nuestra vida.',
  },
  {
    text: 'Por la fe, Rahab la prostituta no murió junto con los desobedientes, pues había recibido en paz a los espías.',
    ref: 'Hebreos 11:31',
    cat: 'ejemplo',
    reflection:
      'El pasado nunca define el futuro cuando Dios interviene. La fe audaz de Rahab la insertó directamente en el linaje del Salvador, demostrando que Su gracia hace nuevas todas las cosas.',
  },
  {
    text: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.',
    ref: 'Josué 1:9',
    cat: 'mandamiento',
    reflection:
      'La valentía que Dios te pide no es la ausencia de miedo, sino la certeza de Su compañía. Avanza con firmeza, sabiendo que Él ya está en ese mañana que te preocupa.',
  },
  {
    text: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.',
    ref: 'Mateo 11:28',
    cat: 'promesa',
    reflection:
      'Una de las invitaciones más tiernas de Jesús. Cuando el cansancio emocional o físico intente doblegarte, corre a Sus brazos; allí encontrarás un descanso que el mundo no puede dar.',
  },
  {
    text: 'Él es la imagen del Dios invisible, el primogénito de toda creación.',
    ref: 'Colosenses 1:15',
    cat: 'verdad',
    reflection:
      'Mirar a Jesús es mirar el corazón mismo de Dios. Toda la majestad, el amor y la pureza del Padre celestial se hicieron tangibles en Él para que pudiéramos encontrar el camino de regreso a casa.',
  },
  {
    text: 'Señor, escucha mi oración, atiende a mi clamor; no cierres tus oídos a mi llanto.',
    ref: 'Salmo 39:12',
    cat: 'oración',
    reflection:
      'A Dios no le asustan tus lágrimas; de hecho, las recoge todas. Esta súplica honesta nos enseña que podemos acercarnos a Él en nuestra mayor vulnerabilidad, sabiendo que seremos consoladas.',
  },
  {
    text: "Ester respondió: '...iré a ver al rey, aunque sea contra la ley. Y, si perezco, que perezca'.",
    ref: 'Ester 4:16',
    cat: 'ejemplo',
    reflection:
      'Ester entendió que su posición tenía un propósito eterno. Su valentía nos inspira a usar los lugares y momentos donde Dios nos ha puesto para ser instrumentos de Su amor y salvación.',
  },
  {
    text: 'El gran amor del Señor nunca se acaba, y su compasión jamás se agota. Cada mañana se renuevan sus bondades; ¡muy grande es su fidelidad!',
    ref: 'Lamentaciones 3:22-23',
    cat: 'promesa',
    reflection:
      'No importa cuán difícil haya sido tu ayer; hoy el Padre ha preparado una misericordia completamente nueva y hecha a tu medida. Respira profundo, Su amor te sostiene en este nuevo amanecer.',
  },
  {
    text: 'En el amor no hay temor, sino que el amor perfecto echa fuera el temor.',
    ref: '1 Juan 4:18',
    cat: 'verdad',
    reflection:
      "El miedo intenta paralizarnos susurrando mentiras, pero el amor de Dios es una voz fuerte y segura que nos dice: 'Estás a salvo'. Descansa en Su amor, porque donde Él reina, el temor no tiene lugar.",
  },
  {
    text: 'Más bien, sean bondadosos y compasivos unos con otros, y perdónense mutuamente, así como Dios los perdonó a ustedes en Cristo.',
    ref: 'Efesios 4:32',
    cat: 'mandamiento',
    reflection:
      'El perdón no es olvidar el dolor, es elegir soltar las cadenas que nos atan a él. Sé tierna contigo misma y con los demás, recordando cuánta gracia derrama el cielo sobre ti cada día.',
  },
  {
    text: 'Que sean gratos a tus ojos los dichos de mi boca y la meditación de mi corazón, oh Señor, roca mía y redentor mío.',
    ref: 'Salmo 19:14',
    cat: 'oración',
    reflection:
      'Nuestras palabras y pensamientos son el jardín donde semramos nuestra vida. Esta hermosa oración nos invita a pedirle al Jardinero Eterno que cultive en nosotras todo lo que es puro, dulce y lleno de luz.',
  },
  {
    text: 'Ésta tenía una hermana que se llamaba María, la cual se sentó a los pies del Señor a escuchar lo que él decía.',
    ref: 'Lucas 10:39',
    cat: 'ejemplo',
    reflection:
      'En un mundo que nos exige correr y producir sin descanso, María escogió la mejor parte: detenerse. No hay lugar más seguro ni productivo para tu alma que sentarte a escuchar la voz de Jesús.',
  },
  {
    text: 'Estoy convencido de esto: el que comenzó tan buena obra en ustedes la irá perfeccionando hasta el día de Cristo Jesús.',
    ref: 'Filipenses 1:6',
    cat: 'promesa',
    reflection:
      'Dios es el Artista Supremo y tú eres Su lienzo. Si sientes que aún estás en proceso, sonríe; Él no deja obras a medias. Cada trazo de tu vida, incluso los difíciles, está bajo Sus manos expertas.',
  },
  {
    text: 'El Señor es mi roca, mi amparo, mi libertador; es mi Dios, el peñasco en que me refugio. Es mi escudo, el poder que me salva, ¡mi más alto escondite!',
    ref: 'Salmo 18:2',
    cat: 'verdad',
    reflection:
      'Cuando las tormentas de la vida intenten hacerte tambalear, recuerda tu identidad: estás escondida en la Roca Eterna. Eres intocable en el refugio de Su gracia.',
  },
  {
    text: 'Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús.',
    ref: '1 Tesalonicenses 5:16-18',
    cat: 'mandamiento',
    reflection:
      'La alegría que Dios pide no es fingir que todo está perfecto, sino saber que Él tiene el control de todo. Agradecer en medio de la prueba es el acto de fe más hermoso que puedes ofrecerle.',
  },
  {
    text: 'Una sola cosa le pido al Señor, y es lo único que persigo: habitar en la casa del Señor todos los días de mi vida.',
    ref: 'Salmo 27:4',
    cat: 'oración',
    reflection:
      'Si reducimos nuestra vida a lo esencial, solo queda un anhelo: estar cerca de Él. Haz de esta oración el compás que dirija tus decisiones hoy; búscalo a Él antes que a sus bendiciones.',
  },
  {
    text: "Ana le respondió: 'No, señor mío; soy una mujer angustiada de espíritu. No he bebido vino ni bebida embriagante, sino que he derramado mi alma delante del Señor'.",
    ref: '1 Samuel 1:15',
    cat: 'ejemplo',
    reflection:
      'Ana nos enseña la belleza de la vulnerabilidad ante Dios. Cuando el dolor no te deje articular palabras perfectas, solo derrama tu alma. Él entiende el idioma de las lágrimas y los suspiros.',
  },
  {
    text: 'Cuando cruces las aguas, yo estaré contigo; cuando cruces los ríos, no te cubrirán sus aguas; cuando camines por el fuego, no te quemarás ni te abrasarán las llamas.',
    ref: 'Isaías 43:2',
    cat: 'promesa',
    reflection:
      'Dios no promete que no pasaremos por tormentas, pero nos asegura algo infinitamente mejor: jamás las atravesaremos solas. Él es tu compañero inquebrantable en cada temporada.',
  },
  {
    text: "Pero él me dijo: 'Te basta con mi gracia, pues mi poder se perfecciona en la debilidad'. Por lo tanto, gustosamente haré más bien alarde de mis debilidades, para que permanezca sobre mí el poder de Cristo.",
    ref: '2 Corintios 12:9',
    cat: 'verdad',
    reflection:
      'Tu vulnerabilidad no es un defecto que Dios deba soportar, es el escenario donde Su poder brilla con más fuerza. Permítete ser débil hoy, para que Su fuerza te sostenga por completo.',
  },
  {
    text: 'Hagan brillar su luz delante de todos, para que ellos puedan ver las buenas obras de ustedes y alaben al Padre que está en el cielo.',
    ref: 'Mateo 5:16',
    cat: 'mandamiento',
    reflection:
      'Tienes una chispa divina en tu interior. No la ocultes por miedo o inseguridad. Una simple sonrisa, una palabra de aliento o un abrazo tuyo pueden ser el amanecer en el día oscuro de alguien más.',
  },
  {
    text: 'Enséñame, Señor, tu camino, para que camine yo en tu verdad. Dale firmeza a mi corazón, para que siempre reverencie tu nombre.',
    ref: 'Salmo 86:11',
    cat: 'oración',
    reflection:
      'Es tan fácil distraernos en un mundo lleno de voces urgentes. Esta oración es un ancla que centra nuestro corazón, pidiéndole al Señor que sea Él quien marque el ritmo y el destino de nuestros pasos.',
  },
  {
    text: 'Entonces la mujer, sabiendo lo que le había sucedido, se acercó temblando de miedo y, arrojándose a sus pies, le confesó toda la verdad.',
    ref: 'Marcos 5:33',
    cat: 'ejemplo',
    reflection:
      'La mujer del flujo de sangre se acercó a Jesús con temor e inseguridad, pero recibió sanidad y dignidad. No importa cuán rota te sientas al acercarte a Él, siempre encontrarás restauración.',
  },
  {
    text: 'La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No se angustien ni se acobarden.',
    ref: 'Juan 14:27',
    cat: 'promesa',
    reflection:
      'La paz de Jesús no es la ausencia de problemas, es la certeza profunda de Su presencia en medio de ellos. Recibe hoy ese regalo inmerecido que aquieta la mente y abraza el alma.',
  },
  {
    text: 'Pero ustedes son linaje escogido, real sacerdocio, nación santa, pueblo que pertenece a Dios, para que proclamen las obras maravillosas de aquel que los llamó de las tinieblas a su luz admirable.',
    ref: '1 Pedro 2:9',
    cat: 'verdad',
    reflection:
      'Mírate hoy en el espejo y recuerda a quién le perteneces. Eres parte de la realeza del cielo, escogida, amada y diseñada con el propósito eterno de reflejar Su luz asombrosa.',
  },
  {
    text: 'Dedíquense a la oración: perseveren en ella con agradecimiento.',
    ref: 'Colosenses 4:2',
    cat: 'mandamiento',
    reflection:
      'La oración constante mantiene el corazón suave y los ojos abiertos a los milagros cotidianos. Conversa con tu Padre durante el día, como lo harías con tu mejor y más íntimo amigo.',
  },
  {
    text: 'Le pido que, por medio del Espíritu y con el poder que procede de sus gloriosas riquezas, los fortalezca a ustedes en lo íntimo de su ser, para que por fe Cristo habite en sus corazones.',
    ref: 'Efesios 3:16-17',
    cat: 'oración',
    reflection:
      'Esta es una súplica sublime por tu fortaleza interior. El verdadero poder no radica en tener el control externo de las cosas, sino en dejar que el amor inagotable de Cristo eche raíces profundas en ti.',
  },
  {
    text: "El joven Samuel ministraba al Señor en presencia de Elí... Entonces el Señor se paró allí y lo llamó como las otras veces: '¡Samuel, Samuel!' Y Samuel respondió: 'Habla, que tu siervo escucha'.",
    ref: '1 Samuel 3:10',
    cat: 'ejemplo',
    reflection:
      "Samuel nos muestra que el principio de la sabiduría espiritual es la disposición a escuchar. Haz una pausa en tu día, aquieta tu corazón y dile a Dios: 'Aquí estoy, háblame, te escucho'.",
  },
  {
    text: "El Señor dice: 'Yo te instruiré, yo te mostraré el camino que debes seguir; yo te daré consejos y velaré por ti'.",
    ref: 'Salmo 32:8',
    cat: 'promesa',
    reflection:
      'No tienes que tener todas las respuestas para tu futuro. El Dueño del universo ha prometido ser tu mentor personal, guiando tus pasos con paciencia y sin quitar Sus ojos amorosos de ti.',
  },
  {
    text: 'Así que acerquémonos confiadamente al trono de la gracia para recibir misericordia y hallar la gracia que nos ayude en el momento que más la necesitemos.',
    ref: 'Hebreos 4:16',
    cat: 'verdad',
    reflection:
      'No hay antesalas, ni filas, ni protocolos fríos para llegar a Él. Tienes acceso directo y confiado al lugar más alto del universo, donde te espera un Padre con los brazos abiertos, rebosantes de gracia.',
  },
  {
    text: 'Pon en manos del Señor todas tus obras, y tus proyectos se cumplirán.',
    ref: 'Proverbios 16:3',
    cat: 'mandamiento',
    reflection:
      'La clave del éxito verdadero no es el esfuerzo desmedido, sino la rendición. Entrega tus anhelos, tus proyectos y tus temores en Sus manos; Él sabrá encaminarlos hacia la eternidad.',
  },
  {
    text: 'Tu palabra es una lámpara a mis pies; es una luz en mi sendero.',
    ref: 'Salmo 119:105',
    cat: 'oración',
    reflection:
      'Cuando el futuro se vea borroso y no sepas cuál es el siguiente paso, no intentes iluminar todo el camino. Pídele al Señor que Su palabra ilumine solo tu próximo paso, y confía.',
  },
  {
    text: 'A eso de la medianoche, Pablo y Silas se pusieron a orar y a cantar himnos a Dios, y los otros presos los escuchaban.',
    ref: 'Hechos 16:25',
    cat: 'ejemplo',
    reflection:
      'La adoración es un arma poderosa que rompe cadenas. Pablo y Silas nos enseñan que la fe genuina puede cantar de gozo incluso en las noches más oscuras de nuestra vida.',
  },
  {
    text: 'Si a alguno de ustedes le falta sabiduría, pídasela a Dios, y él se la dará, pues Dios da a todos generosamente sin menospreciar a nadie.',
    ref: 'Santiago 1:5',
    cat: 'promesa',
    reflection:
      'El Señor nunca se cansa de nuestras dudas ni nos juzga por no saber qué hacer. Cuando te sientas confundida, acércate con confianza; Él tiene un suministro inagotable de sabiduría para regalarte.',
  },
  {
    text: 'Y conocerán la verdad, y la verdad los hará libres.',
    ref: 'Juan 8:32',
    cat: 'verdad',
    reflection:
      'La libertad espiritual no se encuentra en evadir la realidad, sino en abrazar a Quien es la Verdad absoluta. Jesús no solo te muestra el camino, Él es quien rompe los candados de tu alma.',
  },
  {
    text: 'No se amolden al mundo actual, sino sean transformados mediante la renovación de su mente. Así podrán comprobar cuál es la voluntad de Dios, buena, agradable y perfecta.',
    ref: 'Romanos 12:2',
    cat: 'mandamiento',
    reflection:
      'El mundo grita que debes encajar, pero el cielo susurra que naciste para sobresalir. Protege tu mente de lo efímero y nútrela con lo eterno, descubriendo cada día lo hermoso de Su voluntad.',
  },
  {
    text: 'Por la mañana hazme saber de tu gran amor, porque en ti he puesto mi confianza. Señálame el camino que debo seguir, porque a ti elevo mi alma.',
    ref: 'Salmo 143:8',
    cat: 'oración',
    reflection:
      'No hay mejor forma de abrir los ojos cada día que anhelando ser recordadas del amor incondicional del Padre. Que esta sea la banda sonora de tus mañanas: confianza, rendición y amor.',
  },
  {
    text: "Yendo un poco más allá, se postró sobre su rostro y oró: 'Padre mío, si es posible, no me hagas beber este trago amargo. Pero no sea lo que yo quiero, sino lo que quieres tú'.",
    ref: 'Mateo 26:39',
    cat: 'ejemplo',
    reflection:
      "En Su hora de mayor agonía humana, Jesús eligió confiar en el plan del Padre. Su rendición nos da el coraje para decir hoy: 'Aunque duela, confío en que Tu voluntad es mejor que la mía'.",
  },
  {
    text: 'Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.',
    ref: 'Isaías 26:3',
    cat: 'promesa',
    reflection:
      'La paz perfecta no es la ausencia de caos exterior, sino la quietud interior que nace al fijar nuestra mirada en Él. Cuando tu mente se ancle en Su amor, ninguna tormenta podrá moverte.',
  },
  {
    text: 'Nosotros amamos a Dios porque él nos amó primero.',
    ref: '1 Juan 4:19',
    cat: 'verdad',
    reflection:
      'No tuviste que ganarte Su corazón ni hacer méritos para atraer Su mirada. Su amor por ti es la chispa original que enciende tu capacidad de amar con libertad y pureza.',
  },
  {
    text: 'Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo.',
    ref: 'Colosenses 3:23',
    cat: 'mandamiento',
    reflection:
      'Cada tarea cotidiana, por pequeña que parezca, se convierte en un acto de adoración cuando la haces con amor. Tu trabajo, tus estudios y tu servicio son ofrendas hermosas ante Sus ojos.',
  },
  {
    text: 'Abre mis ojos, para que contemple las maravillas de tu enseñanza.',
    ref: 'Salmo 119:18',
    cat: 'oración',
    reflection:
      'A veces caminamos rodeadas de milagros que no logramos ver por la prisa. Esta oración es una invitación a despertar el asombro y pedirle al Padre que nos muestre la magia de Su voluntad en lo ordinario.',
  },
  {
    text: '¡Dichosa tú que has creído, porque lo que el Señor te ha dicho se cumplirá!',
    ref: 'Lucas 1:45',
    cat: 'ejemplo',
    reflection:
      'Las palabras de Elisabet a María nos recuerdan que hay una bendición especial reservada para quienes eligen confiar. Tu fe atrevida es el terreno fértil donde Dios hace germinar Sus promesas.',
  },
  {
    text: 'Y les aseguro que estaré con ustedes siempre, hasta el fin del mundo.',
    ref: 'Mateo 28:20',
    cat: 'promesa',
    reflection:
      'Lee esto despacio: siempre. No solo en tus días de victoria, sino también en tus noches de duda. No hay un solo segundo de tu existencia en el que Su presencia te haya abandonado.',
  },
  {
    text: 'Pues Dios no nos ha dado un espíritu de timidez, sino de poder, de amor y de dominio propio.',
    ref: '2 Timoteo 1:7',
    cat: 'verdad',
    reflection:
      'La inseguridad no forma parte de tu diseño original. Estás equipada desde el cielo con una fuerza mansa, un amor valiente y una mente clara para enfrentar cualquier desafío.',
  },
  {
    text: 'Alégrense en la esperanza, muestren paciencia en el sufrimiento, perseveren en la oración.',
    ref: 'Romanos 12:12',
    cat: 'mandamiento',
    reflection:
      'Tres pasos para un alma inquebrantable: sonríe por lo que viene, respira profundo en medio del dolor y nunca, nunca dejes de hablar con tu Padre celestial.',
  },
  {
    text: '¡Te alabo porque soy una creación admirable! ¡Tus obras son maravillosas, y esto lo sé muy bien!',
    ref: 'Salmo 139:14',
    cat: 'oración',
    reflection:
      'Mírate con la misma ternura con la que Dios te diseñó. Esta declaración rompe cualquier complejo y te recuerda que eres una obra maestra, pensada y amada hasta el último detalle.',
  },
  {
    text: 'Por la fe Abraham, cuando fue llamado para ir a un lugar que más tarde recibiría como herencia, obedeció y salió sin saber a dónde iba.',
    ref: 'Hebreos 11:8',
    cat: 'ejemplo',
    reflection:
      'Caminar sin tener todas las respuestas asusta, pero la fe verdadera confía más en la Brújula (Dios) que en el mapa. Da ese paso de obediencia; Él ya está en tu destino cuidando de ti.',
  },
  {
    text: 'Pero los que confían en el Señor renovarán sus fuerzas; volarán como las águilas: correrán y no se fatigarán, caminarán y no se cansarán.',
    ref: 'Isaías 40:31',
    cat: 'promesa',
    reflection:
      'El cansancio es humano, pero la renovación es divina. Cuando sientas que no puedes dar un paso más, ríndete en Sus brazos. Él te dará alas frescas para volar por encima de la tormenta.',
  },
  {
    text: 'Mas a cuantos lo recibieron, a los que creen en su nombre, les dio el derecho de ser hijos de Dios.',
    ref: 'Juan 1:12',
    cat: 'verdad',
    reflection:
      'Tu identidad más profunda y verdadera no te la da tu profesión, ni tu estado civil, ni tus logros. Eres una Hija amada del Rey del Universo, y ese título nadie te lo puede arrebatar.',
  },
  {
    text: 'La respuesta amable calma el enojo, pero la agresiva echa leña al fuego.',
    ref: 'Proverbios 15:1',
    cat: 'mandamiento',
    reflection:
      'Tienes el poder de cambiar atmósferas con tus palabras. Elegir la ternura y la mansedumbre frente al conflicto no es debilidad, es el mayor rasgo de madurez emocional y espiritual.',
  },
  {
    text: 'Oh Dios, tú eres mi Dios; yo te busco intensamente. Mi alma tiene sed de ti; todo mi ser te anhela, cual tierra seca, extenuada y sedienta.',
    ref: 'Salmo 63:1',
    cat: 'oración',
    reflection:
      'A veces el alma se siente deshidratada por las exigencias de la vida. Esta oración es un clamor honesto por el Agua Viva que solo Él puede ofrecer, la única que sacia eternamente.',
  },
  {
    text: "Jesús dijo: 'Les aseguro que esta viuda pobre ha echado en el tesoro más que todos los demás. Estos dieron de lo que les sobraba; pero ella, de su pobreza, echó todo lo que tenía para vivir'.",
    ref: 'Marcos 12:43-44',
    cat: 'ejemplo',
    reflection:
      'Dios no mide el valor de lo que entregamos por su tamaño, sino por el sacrificio que representa. Tu entrega total, aunque parezca pequeña a los ojos del mundo, conmueve el corazón del Maestro.',
  },
  {
    text: 'Así que mi Dios les proveerá de todo lo que necesiten, conforme a las gloriosas riquezas que tiene en Cristo Jesús.',
    ref: 'Filipenses 4:19',
    cat: 'promesa',
    reflection:
      'Preocuparse por el mañana es natural, pero confiar en Su provisión es sobrenatural. Tu sustento no depende de la economía del mundo, sino de la infinita generosidad de tu Padre.',
  },
  {
    text: 'Depositen en él toda ansiedad, porque él cuida de ustedes.',
    ref: '1 Pedro 5:7',
    cat: 'mandamiento',
    reflection:
      'Suelta las maletas pesadas que no te corresponde cargar. El Señor te invita a un intercambio hermoso: entrégale tus ansiedades y llévate a cambio Su cuidado tierno y absoluto.',
  },
  {
    text: 'He sido crucificado con Cristo, y ya no vivo yo, sino que Cristo vive en mí. Lo que ahora vivo en el cuerpo, lo vivo por la fe en el Hijo de Dios, quien me amó y dio su vida por mí.',
    ref: 'Gálatas 2:20',
    cat: 'verdad',
    reflection:
      'Tu vida entera está escondida en Jesús. Todo lo que enfrentas hoy, no lo enfrentas sola; lo enfrentas con la fuerza, la gracia y el amor infinito del Hijo de Dios latiendo dentro de ti.',
  },
  {
    text: 'Aunque la higuera no florezca, ni haya frutos en las vides... con todo, yo me alegraré en Jehová, y me gozaré en el Dios de mi salvación.',
    ref: 'Habacuc 3:17-18',
    cat: 'oración',
    reflection:
      'Esta es la cumbre de la adoración: alabar a Dios no por lo que nos da, sino por quién es Él. Aprender a cantar en el invierno de la vida garantiza que floreceremos con más fuerza en primavera.',
  },
  {
    text: 'Había en Jope una discípula llamada Tabita (que traducido es Dorcas). Esta abundaba en buenas obras y en limosnas que hacía.',
    ref: 'Hechos 9:36',
    cat: 'ejemplo',
    reflection:
      'El legado de Tabita no fueron grandes discursos, sino manos que servían con amor. Nunca subestimes el impacto eterno que tienen tus pequeños actos de bondad en la vida de los demás.',
  },
  {
    text: 'El Señor está cerca de los quebrantados de corazón, y salva a los de espíritu abatido.',
    ref: 'Salmo 34:18',
    cat: 'promesa',
    reflection:
      'Cuando el dolor rompe nuestro corazón en pedazos, Dios no se aleja asustado; Él se acerca para recoger cada fragmento con infinita dulzura. Su proximidad es tu mayor consuelo.',
  },
  {
    text: 'Por lo tanto, si alguno está en Cristo, es una nueva creación. ¡Lo viejo ha pasado, ha llegado ya lo nuevo!',
    ref: '2 Corintios 5:17',
    cat: 'verdad',
    reflection:
      'Tu pasado no dicta tu futuro, ni tus errores definen tu valor. En Cristo, tienes un lienzo en blanco cada mañana; eres una nueva mujer, llena de luz, propósito y gracia.',
  },
  {
    text: 'Por eso, anímense y edifíquense unos a otros, tal como lo vienen haciendo.',
    ref: '1 Tesalonicenses 5:11',
    cat: 'mandamiento',
    reflection:
      'En un mundo que critica con facilidad, elige ser una constructora de almas. Tus palabras de aliento pueden ser exactamente el abrazo emocional que alguien necesita para no rendirse hoy.',
  },
  {
    text: 'Diré yo a Jehová: Esperanza mía, y castillo mío; Mi Dios, en quien confiaré.',
    ref: 'Salmo 91:2',
    cat: 'oración',
    reflection:
      'Hay un poder inmenso en declarar en voz alta quién es Dios para ti. Haz de esta oración tu armadura diaria: Él es tu refugio, tu fortaleza y el lugar donde siempre estarás a salvo.',
  },
  {
    text: 'Si se nos arroja al horno en llamas, el Dios al que servimos puede librarnos... Pero, aun si no lo hiciera, sepa usted, oh rey, que no rendiremos culto a sus dioses.',
    ref: 'Daniel 3:17-18',
    cat: 'ejemplo',
    reflection:
      "Sadrac, Mesac y Abed-nego tenían una fe que no dependía de los resultados. Confiar en que Dios puede salvarte es hermoso, pero amarlo 'aun si no lo hace' es una fe invencible.",
  },
  {
    text: 'Mis ovejas escuchan mi voz; yo las conozco y ellas me siguen. Yo les doy vida eterna, y nunca perecerán, ni nadie podrá arrebatarlas de mi mano.',
    ref: 'Juan 10:27-28',
    cat: 'promesa',
    reflection:
      'Descansa en esta seguridad absoluta: el Buen Pastor te conoce por tu nombre, guía tus pasos y te sostiene tan fuerte que nada en este universo podrá arrancarte de Su amor.',
  },
  {
    text: 'Yo soy la vid y ustedes son las ramas. El que permanece en mí, como yo en él, dará mucho fruto; separados de mí no pueden ustedes hacer nada.',
    ref: 'Juan 15:5',
    cat: 'verdad',
    reflection:
      'No tienes que esforzarte hasta el agotamiento para producir frutos en tu vida. Solo tienes que permanecer unida a Él, amándolo y dejándote amar; el fruto hermoso nacerá por sí solo.',
  },
  {
    text: 'Siempre humildes y amables, pacientes, tolerantes unos con otros en amor.',
    ref: 'Efesios 4:2',
    cat: 'mandamiento',
    reflection:
      'La verdadera belleza de una mujer de Dios se refleja en cómo trata a los demás. Vístete hoy de paciencia y gracia, siendo un oasis de amabilidad en medio de la agitación diaria.',
  },
  {
    text: 'Tú eres mi escondite y mi escudo; en tu palabra he puesto mi esperanza.',
    ref: 'Salmo 119:114',
    cat: 'oración',
    reflection:
      'Cuando el mundo exterior se vuelva ruidoso y abrumador, corre a tu escondite secreto. En la quietud de Su presencia y en la firmeza de Sus promesas, encontrarás siempre tu centro.',
  },
  {
    text: "Booz le respondió a Rut: '¡Que el Señor te recompense por lo que has hecho! Que el Señor, Dios de Israel, bajo cuyas alas has venido a refugiarte, te lo pague con creces'.",
    ref: 'Rut 2:12',
    cat: 'ejemplo',
    reflection:
      'Abandonar lo conocido para buscar refugio bajo las alas de Dios siempre trae recompensa. Como Rut, tu valentía y fe al abrazar los planes del Señor desencadenarán bendiciones que ni imaginas.',
  },
  {
    text: 'Alaba, alma mía, al Señor, y no olvides ninguno de sus beneficios. Él perdona todos tus pecados y sana todas tus dolencias.',
    ref: 'Salmo 103:2-3',
    cat: 'verdad',
    reflection:
      'Nuestra memoria suele aferrarse al dolor, pero esta verdad nos invita a recordar intencionalmente la bondad de Dios. Él es tu sanador constante y el restaurador de todo lo que se ha roto en ti.',
  },
  {
    text: 'Se reviste de fuerza y dignidad, y afronta segura el porvenir.',
    ref: 'Proverbios 31:25',
    cat: 'verdad',
    reflection:
      'Tu verdadero valor no depende de tus circunstancias, sino de la gracia con la que Dios te ha vestido. Puedes sonreírle al futuro porque sabes que el Creador ya está allí preparándote el camino.',
  },
  {
    text: 'Que el Dios de la esperanza los llene de toda alegría y paz a ustedes que creen en él, para que rebosen de esperanza por el poder del Espíritu Santo.',
    ref: 'Romanos 15:13',
    cat: 'oración',
    reflection:
      'Esta es una bendición preciosa para declarar sobre tu propia vida. Pídele al Padre que Su esperanza te inunde de tal manera que derrames paz y alegría sobre todos los que te rodean.',
  },
  {
    text: 'Ésta es la confianza que tenemos al acercarnos a Dios: que, si pedimos conforme a su voluntad, él nos oye.',
    ref: '1 Juan 5:14',
    cat: 'promesa',
    reflection:
      'Tus oraciones nunca rebotan en el techo; llegan directamente al corazón de Dios. Cuando alineas tus deseos con Su amor, tienes la certeza absoluta de que Él está escuchando y actuando.',
  },
  {
    text: "Jesús le dijo: '¡María!'. Ella se volvió y exclamó en arameo: '¡Raboni!' (que significa: Maestro).",
    ref: 'Juan 20:16',
    cat: 'ejemplo',
    reflection:
      'María Magdalena estaba cegada por las lágrimas hasta que escuchó su nombre pronunciado por Jesús. Él también conoce tu nombre y te llama hoy para cambiar tu tristeza en el milagro de Su presencia.',
  },
  {
    text: 'El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará ni te abandonará. No temas ni te desanimes.',
    ref: 'Deuteronomio 31:8',
    cat: 'promesa',
    reflection:
      'No vas sola a tus batallas diarias. El Rey del universo va abriendo el camino delante de ti. Si el miedo intenta paralizarte, recuerda quién es el que lidera tus pasos.',
  },
  {
    text: 'Deléitate en el Señor, y él te concederá los deseos de tu corazón.',
    ref: 'Salmo 37:4',
    cat: 'mandamiento',
    reflection:
      'Disfrutar de la presencia de Dios es el secreto para una vida plena. Cuando Él se convierte en tu mayor tesoro, Él mismo se encarga de sembrar y cumplir los sueños más hermosos en tu corazón.',
  },
  {
    text: 'Más bien, busquen primeramente el reino de Dios y su justicia, y todas estas cosas les serán añadidas.',
    ref: 'Mateo 6:33',
    cat: 'mandamiento',
    reflection:
      'En un mundo que nos empuja a la ansiedad por el mañana, Jesús nos da la brújula perfecta: pon a Dios primero. Lo demás, desde tu sustento hasta tu paz, es una añadidura de Su amor.',
  },
  {
    text: 'Ahora bien, la fe es la garantía de lo que se espera, la certeza de lo que no se ve.',
    ref: 'Hebreos 11:1',
    cat: 'verdad',
    reflection:
      'La fe no es ignorar la realidad, es anclarse a una Verdad superior. Es tener la tranquila seguridad de que, aunque tus ojos humanos no lo vean todavía, las promesas de Dios ya son un hecho.',
  },
  {
    text: '¡Cuán preciosos, oh Dios, me son tus pensamientos! ¡Cuán inmensa es la suma de ellos! Si me propusiera contarlos, sumarían más que los granos de arena.',
    ref: 'Salmo 139:17-18',
    cat: 'oración',
    reflection:
      'Detente un segundo a pensar en esto: Dios no deja de pensar en ti con amor infinito. Esta hermosa oración nos lleva a adorar la inmensidad de Su cuidado personal por cada detalle de nuestra vida.',
  },
  {
    text: 'Acérquense a Dios, y él se acercará a ustedes.',
    ref: 'Santiago 4:8',
    cat: 'promesa',
    reflection:
      'Dios siempre está a una simple oración de distancia. Da hoy un pequeño paso hacia Él en tu corazón, y verás cómo Él da mil pasos hacia ti para envolverte en Su gracia.',
  },
  {
    text: 'La senda de los justos se asemeja a los primeros albores de la aurora: su esplendor va en aumento hasta que el día alcanza su plenitud.',
    ref: 'Proverbios 4:18',
    cat: 'promesa',
    reflection:
      'Tu camino en Dios no es estático; está diseñado para ir de gloria en gloria. Incluso en los días grises, la luz de Su propósito en ti sigue creciendo hasta brillar en todo su esplendor.',
  },
  {
    text: 'Pónganse toda la armadura de Dios para que puedan hacer frente a las artimañas del diablo.',
    ref: 'Efesios 6:11',
    cat: 'mandamiento',
    reflection:
      'Eres una guerrera espiritual, pero tu fuerza no está en tu propio intelecto, sino en las herramientas del cielo. Vístete de verdad, justicia y paz cada mañana para caminar invencible.',
  },
  {
    text: 'Fijemos la mirada en Jesús, el iniciador y perfeccionador de nuestra fe, quien, por el gozo que le esperaba, soportó la cruz.',
    ref: 'Hebreos 12:2',
    cat: 'mandamiento',
    reflection:
      'Las distracciones del mundo pueden robarte la paz, pero cuando fijas tus ojos en Jesús, todo recupera su perspectiva. Él es tu meta, tu ejemplo y el que perfeccionará la obra en ti.',
  },
  {
    text: 'Ustedes quédense quietos, que el Señor presentará batalla por ustedes.',
    ref: 'Éxodo 14:14',
    cat: 'promesa',
    reflection:
      'Hay momentos donde nuestra única tarea es rendirnos y descansar. Deja de pelear con tus propias fuerzas; el Señor está asumiendo tu defensa con el poder que separó el mar.',
  },
  {
    text: 'Con sus plumas te cubrirá y con sus alas te dará refugio. Sus promesas fieles son tu armadura y tu protección.',
    ref: 'Salmo 91:4',
    cat: 'promesa',
    reflection:
      'Qué imagen tan tierna y poderosa: como un ave abriga a sus polluelos, así te protege Dios. No hay lugar más cálido y seguro que estar escondida bajo la sombra de Sus alas.',
  },
  {
    text: "David le dijo a Abigaíl: '¡Bendito sea el Señor, Dios de Israel, que te ha enviado hoy a mi encuentro! ¡Bendito sea tu buen juicio...!'",
    ref: '1 Samuel 25:32-33',
    cat: 'ejemplo',
    reflection:
      'Abigaíl usó su sabiduría e inteligencia para detener una tragedia. Su ejemplo nos inspira a ser mujeres de paz y buen juicio, instrumentos que Dios usa para traer orden donde hay caos.',
  },
  {
    text: '¿Por qué voy a inquietarme? ¿Por qué me voy a angustiar? En Dios pondré mi esperanza, y todavía lo alabaré. ¡Él es mi Salvador y mi Dios!',
    ref: 'Salmo 42:11',
    cat: 'oración',
    reflection:
      'A veces necesitamos hablarle a nuestra propia alma y ordenarle que espere en Dios. Esta es una oración de victoria sobre la tristeza: un recordatorio de que Él siempre será tu salvavidas.',
  },
  {
    text: 'Por tanto, no nos desanimamos. Al contrario, aunque por fuera nos vamos desgastando, por dentro nos vamos renovando día a día.',
    ref: '2 Corintios 4:16',
    cat: 'verdad',
    reflection:
      'El cansancio físico o las pruebas temporales no pueden detener lo eterno. Tu espíritu está siendo fortalecido, pulido y embellecido por Dios con cada amanecer. Eres cada vez más fuerte.',
  },
  {
    text: 'Y la paz de Dios, que sobrepasa todo entendimiento, cuidará sus corazones y sus pensamientos en Cristo Jesús.',
    ref: 'Filipenses 4:7',
    cat: 'promesa',
    reflection:
      'Es una paz que no tiene lógica para el mundo. Cuando la preocupación intente invadir tu mente, esta promesa actúa como una barrera impenetrable que custodia tus emociones.',
  },
  {
    text: 'En cambio, el fruto del Espíritu es amor, alegría, paz, paciencia, amabilidad, bondad, fidelidad, humildad y dominio propio.',
    ref: 'Gálatas 5:22-23',
    cat: 'verdad',
    reflection:
      'Esta es la verdadera belleza que brota cuando el Espíritu de Dios llena tu vida. No tienes que forzar estas cualidades; solo mantente cerca de Él, y florecerán en ti naturalmente.',
  },
  {
    text: 'Que gobierne en sus corazones la paz de Cristo, a la cual fueron llamados en un solo cuerpo. Y sean agradecidos.',
    ref: 'Colosenses 3:15',
    cat: 'mandamiento',
    reflection:
      'Permitir que la paz sea el árbitro de tus decisiones te libra de la confusión. Suma a eso una actitud de profunda gratitud, y habrás descubierto el secreto de la verdadera felicidad.',
  },
  {
    text: 'María tomó una libra de perfume de nardo puro, de mucho valor, y ungió los pies de Jesús y los secó con sus cabellos.',
    ref: 'Juan 12:3',
    cat: 'ejemplo',
    reflection:
      'María no midió costos ni opiniones; derramó lo más valioso que tenía a los pies de su Salvador. Que nuestra adoración rompa también todo protocolo y sea siempre un perfume grato para Él.',
  },
  {
    text: 'En mi corazón atesoro tus dichos para no pecar contra ti.',
    ref: 'Salmo 119:11',
    cat: 'oración',
    reflection:
      'La Palabra de Dios no es solo tinta en papel, es el escudo de tu mente. Guarda Sus promesas en tu corazón como joyas preciosas; ellas te sostendrán firme cuando venga la tentación.',
  },
  {
    text: '...para darles una corona de belleza en lugar de cenizas, aceite de alegría en lugar de luto, traje de fiesta en lugar de espíritu de desaliento.',
    ref: 'Isaías 61:3',
    cat: 'promesa',
    reflection:
      'Dios es el Maestro de los grandes intercambios. Él toma los restos de nuestro dolor y luto, y con inmensa dulzura nos viste de gracia, propósito y una alegría indescriptible.',
  },
  {
    text: 'Que la belleza de ustedes no sea la externa... sino que debe ser la belleza interior, la que no se desvanece, la belleza de un espíritu apacible y sereno.',
    ref: '1 Pedro 3:3-4',
    cat: 'verdad',
    reflection:
      'El mundo valora lo superficial y pasajero, pero Dios se deleita en la pureza de tu alma. Un corazón lleno de paz y gracia tiene una belleza eterna que captura Su atención.',
  },
  {
    text: '¡Fíjense qué gran amor nos ha dado el Padre, que se nos llame hijos de Dios! ¡Y lo somos!',
    ref: '1 Juan 3:1',
    cat: 'verdad',
    reflection:
      'A veces lo olvidamos por el ruido diario, pero esta es tu realidad inquebrantable: eres hija amada del Altísimo. Camina hoy con la dignidad y la seguridad de pertenecerle a Él.',
  },
  {
    text: '¡Ya se te ha declarado lo que es bueno! Ya se te ha dicho lo que de ti espera el Señor: Practicar la justicia, amar la misericordia, y humillarte ante tu Dios.',
    ref: 'Miqueas 6:8',
    cat: 'mandamiento',
    reflection:
      'La voluntad de Dios no es un acertijo imposible de resolver. Su deseo es sencillo y hermoso: que actúes con integridad, ames ser compasiva y camines siempre tomada de Su mano.',
  },
  {
    text: "Pero el Señor le dijo a Samuel: 'No te fijes en su apariencia ni en su estatura... El Señor no ve las cosas de la manera en que tú las ves. El hombre se fija en las apariencias, pero el Señor se fija en el corazón'.",
    ref: '1 Samuel 16:7',
    cat: 'verdad',
    reflection:
      'Qué descanso saber que a Dios no lo impresionan los logros externos ni las apariencias. Él te ama por la ternura, la sinceridad y la fe que laten en lo más profundo de tu corazón.',
  },
  {
    text: 'Mi corazón se alegra en el Señor; en él radica mi poder... Nadie es santo como el Señor; no hay Dios fuera de ti. ¡No hay Roca como nuestro Dios!',
    ref: '1 Samuel 2:1-2',
    cat: 'oración',
    reflection:
      'Esta oración de Ana, después de años de tristeza, nos muestra que Dios siempre tiene la última palabra. Levanta tu rostro hoy y alaba a Aquel que es la base sólida donde construyes tu vida.',
  },
  {
    text: 'Busqué al Señor, y él me respondió; me libró de todos mis temores.',
    ref: 'Salmo 34:4',
    cat: 'promesa',
    reflection:
      'Cuando el miedo llame a la puerta de tu mente, respóndele con una oración. Dios no solo te escucha, sino que tiene el poder de disolver cualquier sombra que intente robarte la paz.',
  },
  {
    text: 'Todo lo puedo en Cristo que me fortalece.',
    ref: 'Filipenses 4:13',
    cat: 'verdad',
    reflection:
      'No se trata de que nunca te vas a cansar, sino de que tu fuente de energía no proviene de tus propias capacidades. En Jesús, tienes una reserva inagotable de fuerza para enfrentar cualquier temporada.',
  },
  {
    text: 'Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros.',
    ref: 'Romanos 5:8',
    cat: 'verdad',
    reflection:
      'Su amor por ti no está condicionado a tu perfección. Él no esperó a que tuvieras todo resuelto para amarte; te amó primero, te amó más y te amó hasta dar su vida por ti.',
  },
  {
    text: 'Queridos hermanos, amémonos los unos a los otros, porque el amor viene de Dios, y todo el que ama ha nacido de él y lo conoce.',
    ref: '1 Juan 4:7',
    cat: 'mandamiento',
    reflection:
      'El amor genuino es la huella digital de Dios en tu vida. Cuando decides amar, perdonar y tener empatía, le estás mostrando al mundo un pequeño destello de cómo es el rostro del Padre.',
  },
  {
    text: 'Este es mi consuelo en medio del dolor: que tu promesa me da vida.',
    ref: 'Salmo 119:50',
    cat: 'oración',
    reflection:
      'En los días donde las lágrimas nublan la vista, aferrarse a una promesa de Dios es como encontrar un salvavidas. Su Palabra tiene el poder de soplar vida y aliento nuevo sobre tu corazón herido.',
  },
  {
    text: "Jesús le dijo a la mujer: 'Tu fe te ha salvado; vete en paz'.",
    ref: 'Lucas 7:50',
    cat: 'ejemplo',
    reflection:
      'Aquella mujer derramó sus lágrimas y su perfume sin importar el qué dirán. Su valentía nos enseña que acercarnos a Jesús con un corazón arrepentido siempre resulta en el regalo más dulce: la paz.',
  },
  {
    text: 'Me darás a conocer la senda de la vida; me llenarás de alegría en tu presencia, y de dicha eterna a tu derecha.',
    ref: 'Salmo 16:11',
    cat: 'oración',
    reflection:
      'No busques la alegría en cosas pasajeras; el gozo verdadero y duradero tiene un código de acceso único: Su presencia. Haz de esta oración el anhelo más profundo de tus días.',
  },
  {
    text: 'Pero el Señor es fiel, y él los fortalecerá y los protegerá del maligno.',
    ref: '2 Tesalonicenses 3:3',
    cat: 'promesa',
    reflection:
      'Tu seguridad no depende de qué tan fuerte seas para defenderte, sino de la fidelidad del Dios que te guarda. Tienes un escudo protector divino a tu alrededor que nunca falla.',
  },
  {
    text: 'Porque somos hechura de Dios, creados en Cristo Jesús para buenas obras, las cuales Dios dispuso de antemano a fin de que las pongamos en práctica.',
    ref: 'Efesios 2:10',
    cat: 'verdad',
    reflection:
      'Eres un poema escrito por el dedo de Dios. Tienes un propósito diseñado exclusivamente para ti desde antes de que nacieras; camina hoy sabiendo que el mundo necesita la luz que portas.',
  },
  {
    text: 'El Señor es mi fuerza y mi escudo; mi corazón en él confía; de él recibo ayuda. Mi corazón salta de alegría, y con cánticos le daré gracias.',
    ref: 'Salmo 28:7',
    cat: 'oración',
    reflection:
      'La confianza en Dios es la melodía que hace que el corazón vuelva a saltar de alegría. Entrégale tus defensas; Él es el escudo más seguro y la fuerza que te levanta cada mañana.',
  },
  {
    text: 'Toda buena dádiva y todo don perfecto descienden de lo alto, donde está el Padre que creó las lumbreras celestes, y que no cambia como los astros ni se mueve como las sombras.',
    ref: 'Santiago 1:17',
    cat: 'verdad',
    reflection:
      'Todo lo hermoso, noble y puro que tienes en la vida es un beso en la frente de parte de tu Padre celestial. Él es constante, inmutable y siempre tiene regalos perfectos para sus hijas.',
  },
  {
    text: 'Este es el día en que el Señor actuó; regocijémonos y alegrémonos en él.',
    ref: 'Salmo 118:24',
    cat: 'oración',
    reflection:
      'Hoy no es un día cualquiera; es un milagro que Dios preparó para ti. Decide desde la primera hora del día vestirte de gozo y encontrar motivos para celebrar el regalo de estar viva.',
  },
  {
    text: 'Engañosa es la gracia y vana la belleza, pero la mujer que teme al Señor es digna de alabanza.',
    ref: 'Proverbios 31:30',
    cat: 'verdad',
    reflection:
      'La verdadera belleza de una mujer no se marchita con el tiempo, porque florece desde su reverencia y amor a Dios. Tu valor más admirable es esa fe íntima que ilumina tu mirada.',
  },
  {
    text: "Pero ahora, así dice el Señor, el que te creó... 'No temas, porque yo te he redimido; te he llamado por tu nombre; tú eres mío'.",
    ref: 'Isaías 43:1',
    cat: 'promesa',
    reflection:
      'Dios no te ve como a una más en la multitud. Él conoce la pronunciación exacta de tu nombre, conoce tu historia y la ha redimido con amor eterno. Le perteneces al Rey.',
  },
  {
    text: '¿Qué diremos frente a esto? Si Dios está de nuestra parte, ¿quién puede estar en contra nuestra?',
    ref: 'Romanos 8:31',
    cat: 'verdad',
    reflection:
      'Cuando sientas que el mundo entero está en tu contra, detente y mira al cielo. El Creador del universo está de tu lado, luchando por ti. Con Él a tu favor, ya tienes la victoria asegurada.',
  },
  {
    text: 'Encomienda al Señor tus afanes, y él te sostendrá; no permitirá que el justo caiga y quede abatido para siempre.',
    ref: 'Salmo 55:22',
    cat: 'promesa',
    reflection:
      'Hay cargas emocionales que simplemente no fueron diseñadas para tus hombros. Suéltalas en las manos de Jesús; Él te sostendrá para que no caigas y sanará lo que te tiene abatida.',
  },
  {
    text: 'Humíllense, pues, bajo la poderosa mano de Dios, para que él los exalte a su debido tiempo.',
    ref: '1 Pedro 5:6',
    cat: 'mandamiento',
    reflection:
      'La humildad no es pensar menos de ti, es pensar menos *en* ti y más en Su grandeza. Ríndete con dulzura a Sus tiempos, porque cuando Él decide levantarte, nadie puede detenerlo.',
  },
  {
    text: 'En paz me acuesto y me duermo, porque solo tú, Señor, me haces vivir confiado.',
    ref: 'Salmo 4:8',
    cat: 'oración',
    reflection:
      'El descanso nocturno es un acto de fe. Esta oración es para que cierres los ojos sabiendo que, mientras tú duermes, tu Dios sigue despierto velando cada uno de tus sueños.',
  },
  {
    text: 'Torre inexpugnable es el nombre del Señor; a ella corren los justos y se ponen a salvo.',
    ref: 'Proverbios 18:10',
    cat: 'verdad',
    reflection:
      'El nombre de Jesús no es solo una palabra, es un refugio fortificado. Cuando te sientas vulnerable, corre hacia Él con tus pensamientos y emociones; allí estarás siempre a salvo.',
  },
  {
    text: 'Hagan todo con amor.',
    ref: '1 Corintios 16:14',
    cat: 'mandamiento',
    reflection:
      'Tres palabras que pueden cambiar tu vida entera. Desde responder un mensaje hasta servir en lo secreto, permite que el amor sea el sello de garantía en todo lo que tus manos toquen hoy.',
  },
  {
    text: 'No se angustien. Confíen en Dios, y confíen también en mí.',
    ref: 'Juan 14:1',
    cat: 'mandamiento',
    reflection:
      'Antes de ir a la cruz, el mayor deseo de Jesús para los suyos era que no tuvieran el corazón turbado. Esa petición sigue vigente hoy para ti: suelta la angustia y confía en tu Salvador.',
  },
  {
    text: "El ángel dijo a las mujeres: 'No tengan miedo; sé que ustedes buscan a Jesús, el que fue crucificado. No está aquí, pues ha resucitado...'",
    ref: 'Mateo 28:5-6',
    cat: 'ejemplo',
    reflection:
      'Fueron mujeres las primeras en recibir la noticia que cambió la historia. Su devoción y valentía al buscar a Jesús en medio de la tristeza nos inspira a ser portadoras de luz y esperanza.',
  },
  {
    text: 'Priscila y Aquila lo escucharon, lo tomaron aparte y le expusieron con mayor exactitud el camino de Dios.',
    ref: 'Hechos 18:26',
    cat: 'ejemplo',
    reflection:
      'Priscila es un hermoso ejemplo de sabiduría, hospitalidad y enseñanza en la iglesia primitiva. Dios ha puesto inteligencia y gracia en ti para guiar a otros con mansedumbre hacia Su verdad.',
  },
  {
    text: 'Por lo tanto, como escogidos de Dios, santos y amados, revístanse de afecto entrañable y de bondad, humildad, amabilidad y paciencia.',
    ref: 'Colosenses 3:12',
    cat: 'mandamiento',
    reflection:
      'Cada mañana eliges qué ropa ponerte, pero la prenda más importante es la actitud de tu corazón. Vístete hoy de la misma compasión y dulzura con la que Dios te abraza cada día.',
  },
  {
    text: 'Alzo mis ojos a los montes; ¿de dónde viene mi socorro? Mi socorro viene del Señor, creador del cielo y de la tierra.',
    ref: 'Salmo 121:1-2',
    cat: 'oración',
    reflection:
      'Cuando los problemas parezcan montañas inalcanzables, no mires al obstáculo, mira más arriba. Tu ayuda viene directamente de Aquel que con Su voz diseñó los cielos que hoy te cubren.',
  },
  {
    text: "El Señor se manifestó a mí hace ya mucho tiempo, diciendo: 'Con amor eterno te he amado; por tanto, te prolongué mi misericordia'.",
    ref: 'Jeremías 31:3',
    cat: 'promesa',
    reflection:
      'Su amor no tiene fecha de caducidad. No se desgasta con tus errores ni disminuye con el tiempo. Has sido amada desde la eternidad, y Su misericordia te acompañará por siempre.',
  },
  {
    text: 'Pidan, y se les dará; busquen, y encontrarán; llamen, y se les abrirá.',
    ref: 'Mateo 7:7',
    cat: 'mandamiento',
    reflection:
      'Dios no se cansa de tu insistencia. Este es un llamado a ser audaz en tu fe: pide con esperanza, busca con paciencia y llama con la certeza de que tu Padre está del otro lado de la puerta.',
  },
  {
    text: 'En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia.',
    ref: 'Proverbios 17:17',
    cat: 'verdad',
    reflection:
      'La amistad verdadera es un regalo diseñado en el cielo. Sé ese refugio tierno para las personas que amas, y recuerda que Jesús es el mejor amigo que nunca te soltará la mano en la tormenta.',
  },
  {
    text: 'Aunque cambien de lugar las montañas y se tambaleen las colinas, no cambiará mi fiel amor por ti ni vacilará mi pacto de paz.',
    ref: 'Isaías 54:10',
    cat: 'promesa',
    reflection:
      'Todo a tu alrededor puede cambiar, la gente puede fallar y las circunstancias variar, pero hay una roca inamovible en tu vida: el amor leal y el pacto de paz que Dios ha hecho contigo.',
  },
  {
    text: 'Sea el consuelo de tu amor mi alegría, conforme a la promesa que le hiciste a este siervo tuyo.',
    ref: 'Salmo 119:76',
    cat: 'oración',
    reflection:
      'Cuando la vida se vuelva árida, pídele a Dios que Su amor constante sea la fuente de tu alegría. Esta tierna oración es un recordatorio de que en Su consuelo encontramos la fuerza para sonreír de nuevo.',
  },
  {
    text: 'En este mundo afrontarán aflicciones, pero ¡anímense! Yo he vencido al mundo.',
    ref: 'Juan 16:33',
    cat: 'promesa',
    reflection:
      'Jesús nunca te prometió que el camino sería fácil, pero sí que ya aseguró tu victoria. Cuando las tormentas de la vida soplen fuerte, puedes respirar en paz: el Vencedor del mundo camina hoy a tu lado.',
  },
  {
    text: 'Traten a los demás tal y como quieren que ellos los traten a ustedes.',
    ref: 'Lucas 6:31',
    cat: 'mandamiento',
    reflection:
      'La regla de oro es, en realidad, un hermoso espejo del cielo. Cuando eliges sembrar empatía, dulzura y respeto en la vida de los demás, estás decorando tu entorno con el mismo perfume de amor que Jesús tiene por ti.',
  },
  {
    text: 'Toda tú eres hermosa, amiga mía; no hay en ti defecto alguno.',
    ref: 'Cantares 4:7',
    cat: 'verdad',
    reflection:
      'Ante los ojos de tu Creador, no hay imperfección que disminuya tu valor. Él te diseñó con un cuidado infinito, y cuando te mira, ve una obra de arte perfecta, preciosa y digna de ser amada.',
  },
  {
    text: 'Muéstrame, oh Señor, tus caminos; enséñame tus sendas. Guíame en tu verdad y enséñame, porque tú eres el Dios de mi salvación; en ti espero todo el día.',
    ref: 'Salmo 25:4-5',
    cat: 'oración',
    reflection:
      'Dejar que Dios guíe tus pasos es el acto de descanso más hermoso. Dile hoy al Padre que Su sabiduría sea tu brújula, y espera con la serena confianza de que Sus sendas siempre conducen a la paz.',
  },
  {
    text: 'Una de ellas, llamada Lidia, que adoraba a Dios... El Señor le abrió el corazón para que prestara atención a lo que Pablo decía.',
    ref: 'Hechos 16:14',
    cat: 'ejemplo',
    reflection:
      'La disposición de Lidia nos enseña que una mente atenta y un corazón abierto son el suelo donde Dios planta Sus mayores propósitos. Permite que Su Espíritu susurre a tu alma hoy y abra nuevas puertas en tu caminar.',
  },
  {
    text: 'Encomienda al Señor tu camino; confía en él, y él actuará.',
    ref: 'Salmo 37:5',
    cat: 'promesa',
    reflection:
      'Rendir el mapa de tu vida ante el altar no es perder el rumbo, es dejar que el mejor Guía del universo tome el volante. Suelta el afán de controlar cada detalle y descansa viendo cómo Él lo resuelve todo.',
  },
  {
    text: 'Señor, tú me examinas, tú me conoces. Sabes cuándo me siento y cuándo me levanto; aun a la distancia me lees el pensamiento.',
    ref: 'Salmo 139:1-3',
    cat: 'verdad',
    reflection:
      'Qué descanso tan dulce hay en saber que eres completamente comprendida. No tienes que fingir ni ponerte máscaras ante Dios; Él te conoce en la intimidad y te ama exactamente tal como eres.',
  },
  {
    text: 'Queridos hijos, no amemos de palabra ni de labios para afuera, sino con hechos y de verdad.',
    ref: '1 Juan 3:18',
    cat: 'mandamiento',
    reflection:
      'El amor verdadero no se mide por lo que decimos, sino por las huellas de bondad que dejamos al andar. Que hoy tus acciones hablen con el volumen de la compasión y la ternura práctica.',
  },
  {
    text: '¡Cuán hermosas son tus moradas, Señor Todopoderoso! Anhela mi alma, y aun desfallece, por los atrios del Señor; mi corazón y mi carne cantan con gozo al Dios vivo.',
    ref: 'Salmo 84:1-2',
    cat: 'oración',
    reflection:
      'Cuando el alma se cansa del ruido mundano, anhela su verdadero hogar: la presencia de Dios. Haz de tu día un santuario donde puedas cantarle al Dios vivo, encontrando allí tu descanso eterno.',
  },
  {
    text: 'María, por su parte, guardaba todas estas cosas en su corazón y meditaba acerca de ellas.',
    ref: 'Lucas 2:19',
    cat: 'ejemplo',
    reflection:
      'Hay promesas y tesoros espirituales que no se deben apresurar ni compartir a la ligera. El hermoso ejemplo de María nos invita a cultivar un santuario en el interior, donde meditemos con gratitud los milagros de Dios.',
  },
  {
    text: 'Fíjense en las aves del cielo: no siembran ni cosechan... y, sin embargo, el Padre celestial las alimenta. ¿No valen ustedes mucho más que ellas?',
    ref: 'Mateo 6:26',
    cat: 'promesa',
    reflection:
      'Si Dios se detiene a vestir los campos y alimentar a los gorriones, ¿cómo podría olvidarse de ti? Confía en Su cuidado diario; eres infinitamente más valiosa para Él que toda la creación.',
  },
  {
    text: 'Por lo tanto, ya no hay ninguna condenación para los que están unidos a Cristo Jesús.',
    ref: 'Romanos 8:1',
    cat: 'verdad',
    reflection:
      'Los susurros de culpa no provienen del cielo. Jesús ya pagó por cada uno de tus errores para regalarte una vida de libertad sin reproches. Levanta la frente, estás limpia y libre ante Sus ojos.',
  },
  {
    text: 'No nos cansemos de hacer el bien, porque a su debido tiempo cosecharemos si no nos damos por vencidos.',
    ref: 'Gálatas 6:9',
    cat: 'mandamiento',
    reflection:
      'Sembrar amor, paciencia y bondad a veces puede cansar cuando no vemos frutos inmediatos. Sin embargo, persevera con dulzura; ninguna semilla plantada con fe se pierde jamás ante el Padre celestial.',
  },
  {
    text: 'Por la mañana, Señor, escuchas mi voz; por la mañana te presento mis ruegos, y quedo a la espera.',
    ref: 'Salmo 5:3',
    cat: 'oración',
    reflection:
      'Comenzar el día entregándole tus mañanas al Creador ordena todo tu ser. Esta hermosa oración nos invita a hablar con el Padre a primera hora y luego esperar con una dulce expectativa Su respuesta.',
  },
  {
    text: '—El cordero para el holocausto lo proveerá Dios, hijo mío —respondió Abraham. Y siguieron caminando juntos.',
    ref: 'Génesis 22:8',
    cat: 'ejemplo',
    reflection:
      'La fe de Abraham se sostenía en un carácter que ya conocía: el de un Dios proveedor. En tus momentos de incertidumbre, camina segura de que Aquel que te llamó ya ha preparado la provisión en el camino.',
  },
  {
    text: 'Los que conocen tu nombre confían en ti, porque tú, Señor, jamás abandonas a los que te buscan.',
    ref: 'Salmo 9:10',
    cat: 'promesa',
    reflection:
      'Conocer Su nombre es conocer Su fidelidad inquebrantable. Descansa en esta hermosa promesa: cuando lo buscas de corazón, Sus brazos siempre se extienden para sostenerte y recordarte que nunca estás sola.',
  },
  {
    text: 'Tu protección me envuelve por completo; me cubres con tu mano.',
    ref: 'Salmo 139:5',
    cat: 'verdad',
    reflection:
      'Por dondequiera que vayas hoy, estás custodiada. Su presencia te cubre las espaldas, te cuida el frente y Su mano protectora descansa tiernamente sobre tu cabeza como señal de favor constante.',
  },
  {
    text: 'Hay más dicha en dar que en recibir.',
    ref: 'Hechos 20:35',
    cat: 'mandamiento',
    reflection:
      'La generosidad ensancha el alma y la conecta con los latidos del Padre. Cuando compartes tu tiempo, tus palabras dulces o tus recursos, experimentas el gozo más puro que puede habitar en un corazón humano.',
  },
  {
    text: 'Afirma mis pasos conforme a tu promesa; no permitas que me domine ninguna maldad.',
    ref: 'Salmo 119:133',
    cat: 'oración',
    reflection:
      'Qué oración tan sabia para tu andar diario. Pedirle al Señor que afiance tu caminar bajo Sus promesas es el secreto para no tropezar ante las corrientes del mundo, manteniéndote pura y serena.',
  },
  {
    text: "David le contestó: 'Tú vienes contra mí con espada, lanza y jabalina, pero yo voy contra ti en el nombre del Señor de los Ejércitos...'.",
    ref: '1 Samuel 17:45',
    cat: 'ejemplo',
    reflection:
      'La victoria de David no dependió de su fuerza física, sino de su confianza ciega en la soberanía de Dios. Cuando te enfrentes a gigantes de duda o temor, recuerda que tu batalla se gana en Su Nombre.',
  },
  {
    text: 'El Señor afirma los pasos del hombre que le agrada; aun cuando caiga, no quedará postrado, porque el Señor lo sostiene de la mano.',
    ref: 'Salmo 37:23-24',
    cat: 'promesa',
    reflection:
      'Los tropiezos forman parte de nuestra naturaleza humana, pero tu caída nunca será tu final. El Señor tiene aferrada tu mano con firmeza y ternura; si caes, Él te levantará y te animará a seguir.',
  },
  {
    text: 'Tu palabra, Señor, es eterna; ¡está firme en los cielos! Tu fidelidad permanece para siempre; estableciste la tierra, y ella se mantiene firme.',
    ref: 'Salmo 119:89-90',
    cat: 'verdad',
    reflection:
      'En un mundo donde todo parece efímero y cambiante, la Palabra de tu Padre y Su fidelidad son las únicas constantes. Puedes construir tu vida sobre este cimiento indestructible sin temor a que falle.',
  },
  {
    text: 'Queridos hermanos, ya que Dios nos ha amado así, también nosotros debemos amarnos unos a otros.',
    ref: '1 Juan 4:11',
    cat: 'mandamiento',
    reflection:
      'El amor de Dios no es una reserva privada para guardar en el pecho; es un río diseñado para desbordarse. Permite que Su asombrosa gracia fluya de ti hoy, sanando y perfumando la vida de quienes te rodean.',
  },
  {
    text: 'Aparta mis ojos de cosas vanas; dame vida conforme a tu palabra.',
    ref: 'Salmo 119:37',
    cat: 'oración',
    reflection:
      'Es tan fácil distraer el alma con las ilusiones y comparaciones del día a día. Esta sincera oración nos invita a limpiar nuestra mirada para enfocarnos únicamente en lo que alimenta la vida y edifica el espíritu.',
  },
  {
    text: '...y era viuda de ochenta y cuatro años; y no se apartaba del templo, sirviendo de noche y de día con ayunos y oraciones.',
    ref: 'Lucas 2:37',
    cat: 'ejemplo',
    reflection:
      'La constancia espiritual de la profetisa Ana nos enseña que una vida dedicada a la devoción íntima nunca es en vano. Su espera fiel fue recompensada con el regalo más hermoso de su vida: ver al Salvador.',
  },
  {
    text: 'El Señor cuidará tu salir y tu entrar, desde ahora y para siempre.',
    ref: 'Salmo 121:8',
    cat: 'promesa',
    reflection:
      'Tanto al salir de casa por la mañana como al volver al final de la jornada, la cobertura del Padre te acompaña de forma invisible y permanente. Estás divinamente protegida en cada transición de tu vida.',
  },
  {
    text: 'Tus ojos vieron mi cuerpo en gestación: todo estaba ya escrito en tu libro; todos mis días se estaban diseñando, aunque no existía uno solo de ellos.',
    ref: 'Salmo 139:16',
    cat: 'verdad',
    reflection:
      'Dios no improvisó cuando te trajo al mundo. Cada página de tu vida, cada talento y cada día ya habían sido diseñados con profunda alegría por Sus manos creativas. Eres un propósito viviente.',
  },
  {
    text: 'El amor debe ser sincero. Aborrezcan el mal; aférrense al bien.',
    ref: 'Romanos 12:9',
    cat: 'mandamiento',
    reflection:
      'El amor de Dios en nosotras nos llama a la autenticidad. No se trata de cumplir con formalidades sociales, sino de cultivar un afecto puro y transparente que elija siempre construir y proteger el bien.',
  },
  {
    text: 'Devuélveme la alegría de tu salvación y concédeme un espíritu dispuesto a obedecerte.',
    ref: 'Salmo 51:12',
    cat: 'oración',
    reflection:
      'Cuando el peso de la rutina intente apagar tu entusiasmo espiritual, esta oración te devuelve a la fuente del primer amor. Pídele al Padre que encienda de nuevo tu gozo y tu deseo de complacerlo.',
  },
  {
    text: 'Pero yo y mi casa serviremos al Señor.',
    ref: 'Josué 24:15',
    cat: 'ejemplo',
    reflection:
      'La firme declaración de Josué nos muestra el poder de una determinación clara. Elegir servir a Dios con valentía frente a las corrientes del mundo es el mejor legado de fe y amor que puedes dejar.',
  },
  {
    text: 'Guarda silencio ante el Señor, y espera en él con paciencia; no te irrites ante el éxito de otros.',
    ref: 'Salmo 37:7',
    cat: 'promesa',
    reflection:
      'El silencio de la espera no es abandono; es el espacio sagrado donde Dios está ordenando los vientos a tu favor. Descansa tus ansiedades hoy en Su tiempo perfecto.',
  },
  {
    text: 'El corazón del hombre traza su rumbo, pero el Señor dirige sus pasos.',
    ref: 'Proverbios 16:9',
    cat: 'verdad',
    reflection:
      'Qué alivio es saber que no tienes que descifrar todo el camino por ti misma. Deja que Dios guíe tus pies, porque Sus destinos siempre superan nuestros mejores sueños.',
  },
  {
    text: 'Mi alma encuentra descanso únicamente en Dios; de él viene mi salvación.',
    ref: 'Salmo 62:1',
    cat: 'oración',
    reflection:
      'En un mundo que te pide correr y resolver, tu alma halla su verdadero hogar en la quietud con el Padre. No hay fatiga que Su sola presencia no pueda disipar por completo.',
  },
  {
    text: 'Por la fe Dios concedió poder a Sara para tener hijos, a pesar de ser estéril y de su avanzada edad, porque juzgó fiel a quien le había hecho la promesa.',
    ref: 'Hebreos 11:11',
    cat: 'ejemplo',
    reflection:
      'Sara nos enseña que el reloj de Dios nunca llega tarde, incluso cuando todo parece humanamente imposible. Tu fe en Su fidelidad abrirá caminos donde antes solo había desierto.',
  },
  {
    text: '...su favor dura toda la vida. Tal vez por la noche dure el llanto, pero a la mañana vendrá la alegría.',
    ref: 'Salmo 30:5',
    cat: 'promesa',
    reflection:
      'Las noches de dolor siempre tienen un límite de tiempo. Confía en que el sol de Su amor volverá a salir, transformando cada lágrima en rocío fresco para un nuevo y feliz comienzo.',
  },
  {
    text: 'Por tanto, imiten a Dios, como hijos muy amados, y lleven una vida de amor, así como Cristo nos amó y se entregó por nosotros.',
    ref: 'Efesios 5:1-2',
    cat: 'mandamiento',
    reflection:
      'Eres la hija muy amada de un Dios que es amor puro. Que tu caminar diario sea una carta de ternura y perdón escrita para que todos puedan leer el corazón de tu Padre.',
  },
  {
    text: 'Bueno es el Señor; es un refugio en el día de la angustia, y protector de los que en él confían.',
    ref: 'Nahúm 1:7',
    cat: 'verdad',
    reflection:
      'En los días grises, no tienes que fingir fortaleza. Tienes un refugio seguro y tierno en los brazos del Señor, quien conoce la fragilidad de tu corazón y la abraza con amor.',
  },
  {
    text: 'El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es el baluarte de mi vida; ¿de quién tendré temor?',
    ref: 'Salmo 27:1',
    cat: 'oración',
    reflection:
      'La oscuridad de la incertidumbre se desvanece cuando la luz de Su presencia inunda tu día. Camina con la cabeza en alto; el Guardián de tu vida es invencible.',
  },
  {
    text: 'Pero, no pudiendo ocultarlo más tiempo, tomó una cesta de papiro... puso en ella al niño y la colocó entre los juncos, a la orilla del río.',
    ref: 'Éxodo 2:3',
    cat: 'ejemplo',
    reflection:
      'La fe de Jocabed brilla al soltar a su hijo en las manos del Creador. Aprender a entregar lo que más amamos en el altar de Dios es la garantía de que Él lo cuidará mejor que nosotros.',
  },
  {
    text: 'El Señor te guiará siempre; te saciará en tierras resecas, y fortalecerá tus huesos. Serás como un jardín bien regado, como un manantial cuyas aguas no se agotan.',
    ref: 'Isaías 58:11',
    cat: 'promesa',
    reflection:
      'Aun en las temporadas donde el alma se siente árida, la gracia de Dios te mantendrá floreciendo. Eres Su jardín amado, y Él mismo se asegura de regar tu corazón cada día.',
  },
  {
    text: 'Preocupémonos los unos por los otros, a fin de estimularnos al amor y a las buenas obras.',
    ref: 'Hebreos 10:24',
    cat: 'mandamiento',
    reflection:
      'Fuimos creadas para caminar en comunidad. Dedica hoy un momento para enviar ese mensaje de aliento o regalar una sonrisa; tu empatía puede ser el bálsamo que otra alma necesita.',
  },
  {
    text: '¿No saben que ustedes son templo de Dios y que el Espíritu de Dios habita en ustedes?',
    ref: '1 Corintios 3:16',
    cat: 'verdad',
    reflection:
      'Llevas dentro de ti la presencia viva del Creador. Trata hoy a tu cuerpo y a tu mente con la delicadeza y el honor que merece el santuario más sagrado sobre la tierra.',
  },
  {
    text: 'Que suba mi oración delante de ti como el incienso, y la ofrenda de mis manos como el sacrificio de la tarde.',
    ref: 'Salmo 141:2',
    cat: 'oración',
    reflection:
      'Cada uno de tus susurros íntimos con Dios es un aroma dulce que sube directo a Su trono. Nunca subestimes el poder de tus oraciones sencillas; conmueven el corazón del cielo.',
  },
  {
    text: 'Ella fue e hizo tal como Elías le había dicho. Y tanto ella como él y su familia tuvieron comida durante muchos días.',
    ref: '1 Reyes 17:15',
    cat: 'ejemplo',
    reflection:
      'A veces Dios nos pide entregar lo último que nos queda para mostrarnos que Su provisión es inagotable. Tu obediencia en lo poco desatará milagros inimaginables en tu vida.',
  },
  {
    text: 'Porque tan alta como la distancia del cielo a la tierra es su misericordia para con los que le temen; tan lejos como está el oriente del occidente, alejó de nosotros nuestras rebeliones.',
    ref: 'Salmo 103:11-12',
    cat: 'promesa',
    reflection:
      'La distancia de Su perdón supera cualquier error que hayas cometido. No cargues más con culpas del pasado; hoy eres libre, limpia y amada con una gracia que no tiene fin.',
  },
  {
    text: 'El corazón en paz da vida al cuerpo, pero la envidia corroe los huesos.',
    ref: 'Proverbios 14:30',
    cat: 'mandamiento',
    reflection:
      'Tu bienestar físico comienza con la quietud de tu interior. Elige hoy proteger tu paz mental por encima de cualquier apuro, permitiendo que la serenidad de Cristo sea tu medicina.',
  },
  {
    text: 'Hermanos míos, considérense muy dichosos cuando tengan que enfrentarse con diversas pruebas, pues ya saben que la prueba de su fe produce constancia.',
    ref: 'Santiago 1:2-3',
    cat: 'verdad',
    reflection:
      'Las pruebas no vienen a destruirte, sino a revelar el diamante de fe que Dios ha puesto en ti. Cada proceso difícil te está preparando para brillar con una madurez asombrosa.',
  },
  {
    text: 'Con todo mi corazón te he buscado; no dejes que me desvíe de tus mandamientos.',
    ref: 'Salmo 119:10',
    cat: 'oración',
    reflection:
      'El deseo de agradar a Dios es el compás más hermoso de tu alma. No temas perder el rumbo; cuando buscas al Padre con sinceridad, Su Espíritu sostiene tus pasos.',
  },
  {
    text: "Su madre dijo a los sirvientes: 'Hagan lo que él les diga'.",
    ref: 'Juan 2:5',
    cat: 'ejemplo',
    reflection:
      'La sabiduría de María radica en su total confianza en el poder de Jesús. Cuando no sepas qué hacer, ríndete a Sus pies y simplemente haz lo que Su tierna voz te guíe a hacer.',
  },
  {
    text: 'Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.',
    ref: 'Jeremías 33:3',
    cat: 'promesa',
    reflection:
      'Dios anhela revelarte los secretos de Su amor y los hermosos planes que tiene para ti. Abre tu corazón en oración y prepárate para sorprenderte con Su dulce respuesta.',
  },
  {
    text: 'Sobre todo, ámense los unos a los otros profundamente, porque el amor cubre multitud de pecados.',
    ref: '1 Pedro 4:8',
    cat: 'mandamiento',
    reflection:
      'El amor profundo tiene el poder de restaurar lo que está roto y cubrir las imperfecciones con gracia. Elige hoy amar sin reservas, reflejando el corazón reconciliador de Jesús.',
  },
  {
    text: 'Porque ustedes han muerto, y su vida está oculta con Cristo en Dios.',
    ref: 'Colosenses 3:3',
    cat: 'verdad',
    reflection:
      'Tu verdadera identidad y destino están resguardados en el lugar más seguro del universo: dentro del corazón de Cristo. Nada ni nadie puede arrebatar la vida que Él diseñó para ti.',
  },
  {
    text: 'Pero yo confío en tu gran amor; mi corazón se alegra en tu salvación. Cantaré al Señor por el bien que me ha hecho.',
    ref: 'Salmo 13:5',
    cat: 'oración',
    reflection:
      'Incluso cuando las respuestas tardan en llegar, el amor fiel de Dios sigue siendo un motivo para cantar. Sonríe hoy sabiendo que tu historia terminará en una hermosa victoria.',
  },
  {
    text: '—¡Mujer, qué grande es tu fe! —contestó Jesús—. Que se cumpla tu deseo. Y desde aquel mismo instante queda sana tu hija.',
    ref: 'Mateo 15:28',
    cat: 'ejemplo',
    reflection:
      'La perseverancia humilde de esta madre conmovió el corazón de Jesús. No te canses de interceder por los que amas; tu fe constante tiene el poder de mover la mano protectora de Dios.',
  },
  {
    text: 'El Dios eterno es tu refugio, y sus brazos eternos te sostienen...',
    ref: 'Deuteronomio 33:27',
    cat: 'promesa',
    reflection:
      'Cuando sientas que te falta el suelo, recuerda que debajo de ti están los brazos eternos del Padre. No hay abismo tan profundo donde Su amor no pueda sostenerte y levantarte.',
  },
  {
    text: '—No te digo que hasta siete veces, sino hasta setenta veces siete —le contestó Jesús.',
    ref: 'Mateo 18:22',
    cat: 'mandamiento',
    reflection:
      'El perdón incondicional es el regalo más liberador que puedes darte a ti misma y a los demás. Suelta las ofensas del pasado y camina ligera bajo la infinita gracia del cielo.',
  },
  {
    text: 'No me escogieron ustedes a mí, sino que yo los escogí a ustedes y los destiné para que vayan y den fruto, un fruto que permanezca...',
    ref: 'Juan 15:16',
    cat: 'verdad',
    reflection:
      'Fuiste elegida intencionalmente por el Maestro de la vida para dar un fruto precioso y duradero. Tu existencia tiene un valor sagrado y un propósito que nadie más puede cumplir.',
  },
  {
    text: 'Mi corazón está firme, oh Dios; cantaré y entonaré salmos con toda mi alma.',
    ref: 'Salmo 108:1',
    cat: 'oración',
    reflection:
      'Mantener una actitud de adoración en medio de los cambios de la vida te da una estabilidad inquebrantable. Que tu alma hoy decida cantar a la fidelidad eterna de Dios.',
  },
  {
    text: 'Por la fe salió de Egipto sin temer la ira del rey, porque se mantuvo firme como si estuviera viendo al Invisible.',
    ref: 'Hebreos 11:27',
    cat: 'ejemplo',
    reflection:
      'El secreto de la firmeza espiritual es mirar más allá de lo visible. Aunque tus ojos físicos no lo vean hoy, tu alma sabe que el Dios Invisible está sosteniendo cada uno de tus pasos.',
  },
  {
    text: 'Él les enjugará toda lágrima de los ojos. Ya no habrá muerte, ni llanto, ni lamento, ni dolor, porque las primeras cosas han pasado.',
    ref: 'Apocalipsis 21:4',
    cat: 'promesa',
    reflection:
      'Esta es la promesa final y más dulce de nuestra fe: un día todo el dolor cesará y cada lágrima será borrada por Su mano tierna. Que esta esperanza eterna llene tu corazón de paz hoy.',
  },
  {
    text: 'Por lo tanto, hermanos, tomando en cuenta la misericordia de Dios, les ruego que cada uno de ustedes, en adoración espiritual, ofrezca su cuerpo como sacrificio vivo, santo y agradable a Dios.',
    ref: 'Romanos 12:1',
    cat: 'mandamiento',
    reflection:
      'Tu adoración diaria no se limita a una canción; es la forma en que vives, amas y sirves. Ofrecer tu día a Dios es el regalo más sincero que puedes poner hoy en Su altar.',
  },
  {
    text: 'Confía en el Señor y haz el bien; habita en la tierra y cultiva la fidelidad.',
    ref: 'Salmo 37:3',
    cat: 'mandamiento',
    reflection:
      'No esperes a que todo sea perfecto para hacer lo correcto. Sembrar bondad en el lugar donde Dios te ha plantado es la forma más hermosa de cultivar un mañana lleno de paz.',
  },
  {
    text: 'Alaba, alma mía, al Señor; alabe todo mi ser su santo nombre.',
    ref: 'Salmo 103:1',
    cat: 'oración',
    reflection:
      'A veces la mente se cansa, pero el espíritu sabe que adorar sana. Háblale con cariño a tu propia alma y recuérdale que el Señor merece toda nuestra alabanza hoy.',
  },
  {
    text: 'Él fortalece al cansado y acrecienta las fuerzas del débil.',
    ref: 'Isaías 40:29',
    cat: 'promesa',
    reflection:
      'Qué alivio es saber que a Dios no le asusta tu debilidad. Él no te exige ser fuerte todo el tiempo; al contrario, se especializa en abrazar tu cansancio para llenarte de Su energía divina.',
  },
  {
    text: 'Para los hombres es imposible —aclaró Jesús, mirándolos fijamente—, mas para Dios todo es posible.',
    ref: 'Mateo 19:26',
    cat: 'verdad',
    reflection:
      'Cuando te encuentres frente a una puerta cerrada o un problema sin salida, recuerda la mirada de Jesús. Sus ojos te dicen hoy que tu límite humano es el comienzo de Su milagro sobrenatural.',
  },
  {
    text: "Pero el ángel le dijo: 'No temas, María, porque has hallado gracia delante de Dios'.",
    ref: 'Lucas 1:30',
    cat: 'promesa',
    reflection:
      'Encontrar gracia ante el Creador disuelve cualquier temor. Al igual que María, estás bajo el favor inmerecido del cielo; Su plan para ti es de paz y no de angustia.',
  },
  {
    text: 'Recita siempre el libro de la ley y medita en él de día y de noche, para que cumplas con cuidado todo lo que en él está escrito. Así prosperarás y tendrás éxito.',
    ref: 'Josué 1:8',
    cat: 'mandamiento',
    reflection:
      'La Palabra de Dios es el plano de construcción para una vida bendecida. Meditar en ella constantemente mantiene tus pensamientos alineados con la verdad y tus pies en un camino seguro.',
  },
  {
    text: 'Este niño oraba, y el Señor me concedió lo que le pedí.',
    ref: '1 Samuel 1:27',
    cat: 'ejemplo',
    reflection:
      'La gratitud de Ana al sostener en brazos la respuesta a sus lágrimas nos inspira a ser perseverantes. Tus oraciones no caen al vacío; a su tiempo, cantarás victoria.',
  },
  {
    text: '¿Cómo puede el joven llevar una vida limpia? Viviendo conforme a tu palabra.',
    ref: 'Salmo 119:9',
    cat: 'verdad',
    reflection:
      'En medio de un mundo ruidoso lleno de opiniones, la Biblia es tu cable a tierra. Vivir conforme a Sus consejos protege tu paz interior y mantiene tu camino impecable.',
  },
  {
    text: 'Puse mi esperanza en el Señor, y él se inclinó para escuchar mi clamor.',
    ref: 'Salmo 40:1',
    cat: 'oración',
    reflection:
      'Esperar en Dios requiere paciencia, pero es una espera activa. El Creador del universo se inclina con ternura para escuchar cada uno de tus suspiros más íntimos.',
  },
  {
    text: 'De hecho, considero que en nada se comparan los sufrimientos actuales con la gloria que habrá de revelarse en nosotros.',
    ref: 'Romanos 8:18',
    cat: 'verdad',
    reflection:
      'El dolor de hoy es temporal, pero el propósito eterno que Dios está forjando en ti es para siempre. No te desanimes; lo que viene es infinitamente más hermoso de lo que imaginas.',
  },
  {
    text: 'Pues Dios es el que produce en ustedes tanto el querer como el hacer, para que se cumpla su buena voluntad.',
    ref: 'Filipenses 2:13',
    cat: 'verdad',
    reflection:
      'Incluso tu deseo de buscar a Dios es un regalo que Él puso en ti. No cargues con la presión de ser perfecta; es Su gracia trabajando en tu interior para guiarte suavemente.',
  },
  {
    text: 'Panal de miel son las palabras amables: endulzan la vida y dan salud al cuerpo.',
    ref: 'Proverbios 16:24',
    cat: 'verdad',
    reflection:
      'Tus palabras tienen el poder de sanar o herir. Elige hoy hablar con dulzura, pues una frase tierna puede ser la medicina que el alma cansada de alguien más necesita desesperadamente.',
  },
  {
    text: 'Quédense quietos, reconozcan que yo soy Dios. Yo seré exaltado entre las naciones...',
    ref: 'Salmo 46:10',
    cat: 'mandamiento',
    reflection:
      'El afán de resolver todo con nuestras fuerzas nos agota. Detén el correr diario por un instante, respira profundo y permite que la certeza de Su soberanía traiga quietud a tu mente.',
  },
  {
    text: 'Por eso, confiésense unos a otros sus pecados, y oren unos por otros de manera que sean sanados. La oración del justo es poderosa y eficaz.',
    ref: 'Santiago 5:16',
    cat: 'oración',
    reflection:
      'Hay un poder sanador increíble cuando oramos las unas por las otras. No camines sola; comparte tu carga con alguien de confianza y experimenta la fuerza del clamor sincero.',
  },
  {
    text: 'Haré de ti una nación grande, y te bendeciré; haré famoso tu nombre, y serás una bendición.',
    ref: 'Génesis 12:2',
    cat: 'promesa',
    reflection:
      'La bendición que Dios te da no es solo para ti; está diseñada para desbordarse. Permite que tu vida sea hoy un canal de amor y gracia a través del cual otros puedan conocer al Padre.',
  },
  {
    text: 'Yo estoy contigo. Te protegeré por dondequiera que vayas... No te abandonaré hasta cumplir con todo lo que te he prometido.',
    ref: 'Génesis 28:15',
    cat: 'promesa',
    reflection:
      'Qué declaración de fidelidad tan absoluta. Los planes de tu Creador contigo están firmados con Su propio carácter; no hay rincón del mundo donde Su mano protectora te suelte.',
  },
  {
    text: 'Mi presencia irá contigo, y te daré descanso —respondió el Señor.',
    ref: 'Éxodo 33:14',
    cat: 'promesa',
    reflection:
      'No camines con la pesadez de la soledad. El Señor te promete que Su presencia constante es tu mayor compañía, y que en ella hallarás un oasis de descanso para toda fatiga.',
  },
  {
    text: 'Aun si voy por valles tenebrosos, no temeré peligro alguno, porque tú estás a mi lado; tu vara y tu bastón me dan aliento.',
    ref: 'Salmo 23:4',
    cat: 'oración',
    reflection:
      'Incluso en los momentos donde todo parece oscuro y confuso, no estás desprotegida. Tu pastor camina a tu lado, guiándote y defendiéndote con un amor inquebrantable.',
  },
  {
    text: 'Sostenme conforme a tu promesa, y viviré; no dejes que se frustre mi esperanza.',
    ref: 'Salmo 119:116',
    cat: 'oración',
    reflection:
      'Esta es una oración de dependencia total. Cuando las fuerzas flaqueen, aférrate a Sus promesas y dile al Padre que tu esperanza está puesta únicamente en Su fiel palabra.',
  },
  {
    text: 'Ahora bien, el Señor es el Espíritu; y donde está el Espíritu del Señor, allí hay libertad.',
    ref: '2 Corintios 3:17',
    cat: 'verdad',
    reflection:
      'En la presencia de Dios no hay espacio para la condenación ni la pesadez. Eres libre de las expectativas del mundo y libre para florecer como la mujer que Él diseñó.',
  },
  {
    text: 'Y yo le pediré al Padre, y él les dará otro Consolador para que los acompañe siempre: el Espíritu de verdad.',
    ref: 'Juan 14:16',
    cat: 'promesa',
    reflection:
      'Nunca estás verdaderamente sola ni desamparada. El Espíritu Santo es tu consolador personal, un amigo fiel que habita en ti para guiarte, consolarte y recordarte cuánto te ama el Padre.',
  },
  {
    text: 'Ámense los unos a los otros con amor fraternal, respetándose y honrándose mutuamente.',
    ref: 'Romanos 12:10',
    cat: 'mandamiento',
    reflection:
      'El amor en la familia de la fe se nota en los detalles de honra y cuidado. Que hoy tu prioridad sea elevar a los que te rodean, valorando sus vidas como el tesoro divino que son.',
  },
  {
    text: 'Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa.',
    ref: 'Hechos 16:31',
    cat: 'promesa',
    reflection:
      'Tu fe no solo te bendice a ti; tiene un impacto directo y hermoso en las personas que más amas. Confía en que el Señor está tejiendo hilos de salvación para toda tu casa.',
  },
  {
    text: "Entonces María dijo: 'Mi alma glorifica al Señor, y mi espíritu se regocija en Dios mi Salvador'.",
    ref: 'Lucas 1:46-47',
    cat: 'oración',
    reflection:
      'Cantar en medio de la incertidumbre es una marca de profunda madurez espiritual. Que tu corazón hoy se eleve por encima de las dudas para adorar a Aquel que ya tiene el control de tu historia.',
  },
  {
    text: "Manténganse libres del amor al dinero, y conténtense con lo que tienen, porque Dios ha dicho: 'Nunca te dejaré; jamás te abandonaré'.",
    ref: 'Hebreos 13:5',
    cat: 'promesa',
    reflection:
      'La verdadera riqueza no se mide en posesiones, sino en la seguridad inamovible de la compañía de Dios. Tienes todo lo que necesitas porque el Creador de todo jamás se apartará de tu lado.',
  },
  {
    text: 'Mis queridos hermanos, tengan presente esto: Todos deben estar listos para escuchar, y ser lentos para hablar y para enojarse.',
    ref: 'Santiago 1:19',
    cat: 'mandamiento',
    reflection:
      'La sabiduría se viste de silencio y atención. Cultivar un espíritu apacible te libra de muchos dolores de cabeza y te permite ser un puente de paz en medio del conflicto diario.',
  },
  {
    text: 'No dejaban de reunirse en el templo ni un solo día. De casa en casa partían el pan y compartían la comida con alegría y sencillez de corazón.',
    ref: 'Hechos 2:46',
    cat: 'ejemplo',
    reflection:
      'La iglesia primitiva nos muestra la belleza de la sencillez y el amor comunitario. Busca hoy compartir tu mesa, tu tiempo y tu alegría sincera con quienes te rodean; allí también habita Dios.',
  },
  {
    text: 'El que habita al abrigo del Altísimo se acoge a la sombra del Omnipotente.',
    ref: 'Salmo 91:1',
    cat: 'verdad',
    reflection:
      'No hay tormenta que pueda dañarte cuando tu dirección permanente es la presencia del Señor. Mantente cerca de Él en tus pensamientos y hallarás un refugio fresco frente a cualquier calor del día.',
  },
  {
    text: 'Pero ¿quién soy yo, y quién es mi pueblo, para que podamos presentarte estas ofrendas voluntarias? Todo procede de ti, y te damos solo lo que de tu mano hemos recibido.',
    ref: '1 Crónicas 29:14',
    cat: 'ejemplo',
    reflection:
      'El rey David entendía que todo lo que poseemos es un préstamo generoso de Dios. Vivir con manos abiertas y un corazón humilde nos libera del orgullo y nos llena de una gratitud maravillosa.',
  },
  {
    text: 'El ángel del Señor acampa en torno a los que le temen, y a su lado está para librarlos.',
    ref: 'Salmo 34:7',
    cat: 'promesa',
    reflection:
      'No estás desprotegida ni por un instante. Dios ha asignado una escolta celestial invisible a tu alrededor que custodia tus pasos de día y de noche. Duerme tranquila; tu vida está a salvo en Sus manos.',
  },
  {
    text: 'Antes de formarte en el vientre, ya te conocía; antes de que nacieras, ya te había consagrado...',
    ref: 'Jeremías 1:5',
    cat: 'verdad',
    reflection:
      'Tu existencia no es el resultado de un accidente del destino, sino un pensamiento de amor divino. Fuiste planeada, consagrada y amada por el Creador desde antes de que el mundo existiera.',
  },
  {
    text: 'Pon la mirada en lo que tienes delante; fija los ojos en lo que está a tu alcance.',
    ref: 'Proverbios 4:25',
    cat: 'mandamiento',
    reflection:
      'El pasado ya no tiene poder sobre ti y el futuro está en manos de tu Padre. Elige hoy concentrar tu energía y tu amor en el presente, dando pasos firmes con la mirada fija en las promesas de Jesús.',
  },
  {
    text: 'Espera en el Señor; esfuérzate y cobra ánimo; ¡sí, espera en el Señor!',
    ref: 'Salmo 27:14',
    cat: 'oración',
    reflection:
      'Esta es una tierna autoinstrucción para el alma cuando la incertidumbre aprieta. Esperar en Dios no es perder el tiempo; es permitir que Él renueve tus fuerzas mientras te prepara para lo mejor.',
  },
  {
    text: "Llamaron entonces a Rebeca y le preguntaron: '¿Quieres irte con este hombre?' 'Sí —respondió ella'.",
    ref: 'Génesis 24:58',
    cat: 'ejemplo',
    reflection:
      'La pronta disposición de Rebeca nos muestra la belleza de abrazar lo desconocido cuando Dios es quien guía. No temas a los nuevos comienzos; Su gracia siempre va un paso delante de ti abriendo caminos.',
  },
  {
    text: 'Los ricos se quedan en la miseria y pasan hambre, pero a los que buscan al Señor nada les falta.',
    ref: 'Salmo 34:10',
    cat: 'promesa',
    reflection:
      'Tu sustento no depende de la economía de este mundo, sino de la inagotable fidelidad del cielo. Descansa tu mente hoy, sabiendo que a las hijas del Rey nunca les faltará lo que necesitan.',
  },
  {
    text: 'Porque tanto amó Dios al mundo que dio a su Hijo unigénito, para que todo el que cree en él no se pierda, sino que tenga vida eterna.',
    ref: 'Juan 3:16',
    cat: 'verdad',
    reflection:
      'Este es el poema de amor más sublime de la historia. Valías tanto para el Padre que no escatimó lo más preciado de Su corazón con tal de rescatarte y asegurarte una eternidad de comunión con Él.',
  },
  {
    text: 'Así que sométanse a Dios. Resistan al diablo, y él huirá de ustedes.',
    ref: 'Santiago 4:7',
    cat: 'mandamiento',
    reflection:
      "La verdadera autoridad espiritual comienza con la rendición diaria al amor del Padre. Cuando estás bajo Su cobertura protectora y dices 'no' al desánimo o al temor, la oscuridad simplemente tiene que retroceder.",
  },
  {
    text: 'El sacrificio que te agrada es un espíritu quebrantado; tú, oh Dios, no desprecias al corazón quebrantado y arrepentido.',
    ref: 'Salmo 51:17',
    cat: 'oración',
    reflection:
      'Ante Dios no necesitas presentarte con posturas de perfección ni armaduras rígidas. Él se deleita y cuida con infinita ternura el corazón que se muestra vulnerable, sincero y dispuesto a dejarse restaurar.',
  },
  {
    text: 'Traigo a la memoria tu fe sincera, la cual animó primero a tu abuela Loida y a tu madre Eunice, y ahora, estoy seguro, te anima a ti.',
    ref: '2 Timoteo 1:5',
    cat: 'ejemplo',
    reflection:
      'La fe que hoy hace brillar tus ojos es parte de un legado maravilloso de mujeres que confiaron en Dios. Honra esa herencia espiritual y sé hoy un faro de luz para quienes vendrán después de ti.',
  },
  {
    text: "Jesús le dijo: 'Yo soy la resurrección y la vida. El que cree en mí vivirá, aunque muera'.",
    ref: 'Juan 11:25',
    cat: 'promesa',
    reflection:
      'En Jesús, las pérdidas nunca son definitivas y el dolor tiene fecha de caducidad. Su sola presencia tiene el poder de devolverle la vida a tus sueños más apagados, trayendo primavera sobre tu invierno.',
  },
  {
    text: 'Mucha paz tienen los que aman tu ley; no hay tropiezo para ellos.',
    ref: 'Salmo 119:165',
    cat: 'verdad',
    reflection:
      'Amar los consejos de tu Padre es un escudo contra la confusión. Cuando caminas de acuerdo a Su Palabra, disfrutas de una paz tan profunda que las ofensas exteriores no logran hacerte tropezar.',
  },
  {
    text: 'Y él nos ha dado este mandamiento: el que ama a Dios, ame también a su hermano.',
    ref: '1 Juan 4:21',
    cat: 'mandamiento',
    reflection:
      'El amor a Dios no es algo abstracto; se hace visible en la dulzura, paciencia y gracia que mostramos hacia los demás. Permite que hoy Su amor fluya a través de tus gestos cotidianos.',
  },
  {
    text: 'De angustia se me deshace el alma; susténtame conforme a tu palabra.',
    ref: 'Salmo 119:28',
    cat: 'oración',
    reflection:
      'Está bien admitir que te sientes cansada o que las fuerzas te flaquean. Esta oración es un puente de confianza: dejas tu fragilidad a Sus pies y recibes el tierno soporte que solo Sus promesas pueden dar.',
  },
  {
    text: 'Así que Jacob trabajó siete años para obtener a Raquel, pero le parecieron unos pocos días porque la amaba mucho.',
    ref: 'Génesis 29:20',
    cat: 'ejemplo',
    reflection:
      'El amor verdadero no se agota con el tiempo ni mide el costo del esfuerzo; encuentra su gozo en la constancia. Que tu dedicación y entrega a los sueños de Dios estén impulsadas por este mismo amor puro.',
  },
  {
    text: 'Joven fui, y ya he envejecido, y no he visto al justo desamparado, ni a su descendencia mendigando pan.',
    ref: 'Salmo 37:25',
    cat: 'promesa',
    reflection:
      'Este es el testimonio inquebrantable de la fidelidad de Dios a través de las generaciones. Él nunca deja a los suyos en el olvido. Tu futuro y el de los que amas están firmemente resguardados.',
  },
  {
    text: 'Dichoso el que resiste la prueba, porque, al salir aprobado, recibirá la corona de la vida que Dios ha prometido a quienes lo aman.',
    ref: 'Santiago 1:12',
    cat: 'verdad',
    reflection:
      'La temporada difícil que estás atravesando no vino a destruirte, sino a pulir tu carácter. Saldrás de este proceso más fuerte, con una madurez deslumbrante y lista para reinar en la vida.',
  },
  {
    text: 'Por lo tanto, mis queridos hermanos, manténganse firmes e inconmovibles, progresando siempre en la obra del Señor...',
    ref: '1 Corintios 15:58',
    cat: 'mandamiento',
    reflection:
      'Tu esfuerzo por hacer el bien y sembrar amor nunca será en vano. Aunque a veces sientas que nadie lo nota, el Padre celestial guarda con tierno detalle cada una de tus pequeñas acciones de fe.',
  },
  {
    text: 'Enséñanos a contar bien nuestros días, para que nuestro corazón adquiera sabiduría.',
    ref: 'Salmo 90:12',
    cat: 'oración',
    reflection:
      'El tiempo es un regalo sagrado que no merece ser desgastado en afanes vacíos o rencores. Pídele hoy al Señor la sabiduría para vivir con propósito, aprovechando cada día para amar y bendecir.',
  },
  {
    text: "'Está bien, iré contigo —dijo Débora—, pero por el camino que vas no te llevarás la gloria, porque el Señor entregará a Sísara en manos de una mujer'.",
    ref: 'Jueces 4:9',
    cat: 'ejemplo',
    reflection:
      'La firmeza y el liderazgo de Débora nos recuerdan que Dios equipa a las mujeres con un discernimiento agudo y una valentía extraordinaria. Camina hoy con la dignidad del rol que Él te ha confiado.',
  },
  {
    text: 'Porque él ordenará que sus ángeles te cuiden en todos tus caminos.',
    ref: 'Salmo 91:11',
    cat: 'promesa',
    reflection:
      'No caminas desamparada ni a la deriva por este mundo. Hay un decreto divino de protección sobre tu vida; un ejército celestial tiene la orden de custodiarte hasta que cumplas tu hermoso propósito.',
  },
  {
    text: 'El Señor es mi porción —dice mi alma—; por eso en él esperaré.',
    ref: 'Lamentaciones 3:24',
    cat: 'verdad',
    reflection:
      'Aunque todo a tu alrededor sea incierto, si tienes a Dios lo tienes todo. Él es la herencia inagotable y la riqueza eterna de tu alma. Esperar en un Padre así es la decisión más dulce.',
  },
  {
    text: '...no se valgan de esa libertad para dar rienda suelta a sus pasiones. Más bien, sírvanse unos a otros con amor.',
    ref: 'Gálatas 5:13',
    cat: 'mandamiento',
    reflection:
      'La libertad que Cristo te regaló no es una invitación al egoísmo, sino el privilegio de poder servir a los demás desde un corazón sano. Haz de la amabilidad y el servicio tu huella personal hoy.',
  },
  {
    text: 'A ti, Señor, elevo mi alma.',
    ref: 'Salmo 25:1',
    cat: 'oración',
    reflection:
      'Cuando el ruido del mundo intente abrumarte, eleva tus pensamientos hacia el cielo. Esta sencilla oración es un puente que te desconecta del caos para sintonizarte con la paz infinita del Padre.',
  },
  {
    text: "También les conté cómo la bondadosa mano de mi Dios había estado sobre mí... Al oír esto, exclamaron: '¡Manos a la obra!'",
    ref: 'Nehemías 2:18',
    cat: 'ejemplo',
    reflection:
      'La fe genuina se traduce en acción decidida. Deja que el recuerdo de cómo la mano bondadosa de Dios te ha sostenido en el pasado sea el motor que te impulse hoy a construir y bendecir con alegría.',
  },
  {
    text: 'Tú eres mi refugio; tú me protegerás de la angustia y me rodearás con cánticos de liberación.',
    ref: 'Salmo 32:7',
    cat: 'promesa',
    reflection:
      'Dios no solo te esconde en medio de la tormenta, sino que llena tu atmósfera de hermosas melodías de victoria. Incluso cuando la situación sea compleja, Él pondrá un cántico nuevo en tu boca.',
  },
  {
    text: 'Porque todos los que son guiados por el Espíritu de Dios son hijos de Dios.',
    ref: 'Romanos 8:14',
    cat: 'verdad',
    reflection:
      'No tienes que adivinar el camino sola ni actuar bajo la pesadez de la incertidumbre. El Espíritu Santo camina a tu lado, susurrándote al corazón con suavidad cuál es el siguiente paso de amor que debes dar.',
  },
  {
    text: 'No seas vengativo con tu prójimo, ni le guardes rencor. Ama a tu prójimo como a ti mismo. Yo soy el Señor.',
    ref: 'Levítico 19:18',
    cat: 'mandamiento',
    reflection:
      'Guardar rencor es como retener carbón encendido con la intención de lanzarlo a otro; solo te quema a ti. Elige hoy el camino liberador del perdón; cuida tu alma manteniendo tu corazón limpio.',
  },
  {
    text: 'Señor, es mucha mi aflicción; dame vida conforme a tu palabra.',
    ref: 'Salmo 119:107',
    cat: 'oración',
    reflection:
      'En los días donde la fatiga emocional intente apagar tu entusiasmo, acércate al Padre con total honestidad. Su Palabra es el soplo de aire fresco que tu espíritu necesita para volver a latir con fuerza.',
  },
  {
    text: "Y las mujeres decían a Noemí: '¡Alabado sea el Señor, que no te ha dejado hoy sin un redentor! ¡Que su nombre llegue a ser célebre...!'",
    ref: 'Rut 4:14',
    cat: 'ejemplo',
    reflection:
      'La historia de Noemí comenzó en amargura y desolación, pero de la mano de Dios terminó en una restauración desbordante. Tu situación actual no es el final de tu historia; Dios ya prepara risas para tu mañana.',
  },
  {
    text: 'El Señor tu Dios está en medio de ti; ¡él es un guerrero que salva! Se deleitará en ti con gozo, te renovará con su amor, se alegrará por ti con cantos.',
    ref: 'Sofonías 3:17',
    cat: 'promesa',
    reflection:
      'Siente el tierno abrazo del Padre hoy. No solo te cuida, sino que celebra tu existencia con cantos de alegría y renueva tu corazón cansado con Su amor. Eres Su deleite más precioso.',
  },
  {
    text: 'Vengan a mí todos ustedes que están cansados y agobiados, y yo les daré descanso.',
    ref: 'Mateo 11:28',
    cat: 'promesa',
    reflection:
      'Cuando la carga del día o el afán de resolverlo todo pesen en tus hombros, recuerda que tienes un refugio seguro. Jesús no te pide que seas fuerte hoy; solo te invita a descansar en Sus brazos.',
  },
  {
    text: 'Todo lo puedo en Cristo que me fortalece.',
    ref: 'Filipenses 4:13',
    cat: 'verdad',
    reflection:
      'Tu suficiencia no proviene de tus propios recursos, sino del poder ilimitado de Aquel que camina a tu lado. No hay obstáculo que Su gracia divina no pueda ayudarte a superar.',
  },
  {
    text: 'Dios es nuestro amparo y nuestra fortaleza, nuestra ayuda segura en momentos de angustia.',
    ref: 'Salmo 46:1',
    cat: 'verdad',
    reflection:
      'Cuando el suelo parezca temblar bajo tus pies, puedes aferrarte a una roca firme. Tu Padre no solo te defiende, sino que se convierte en tu refugio más íntimo y tierno en medio del dolor.',
  },
  {
    text: 'La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No se angustien ni se acobarden.',
    ref: 'Juan 14:27',
    cat: 'promesa',
    reflection:
      'La paz de Jesús no depende de que todo esté en orden a tu alrededor; es una calma profunda que custodia tu corazón desde adentro. Recibe hoy ese regalo que disuelve toda angustia.',
  },
  {
    text: 'No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios y denle gracias. Y la paz de Dios, que sobrepasa todo entendimiento, cuidará sus corazones y sus pensamientos en Cristo Jesús.',
    ref: 'Filipenses 4:6-7',
    cat: 'mandamiento',
    reflection:
      'Cambia la preocupación por la conversación con tu Creador. Al depositar cada detalle en Sus manos con un corazón agradecido, Su paz se convertirá en un tierno guardián de tus pensamientos.',
  },
  {
    text: '¡Te alabo porque soy una creación admirable! ¡Tus obras son maravillosas, y esto lo sé muy bien!',
    ref: 'Salmo 139:14',
    cat: 'oración',
    reflection:
      'Qué hermoso es mirarte al espejo y ver la obra maestra de Dios. Haz de tus días una constante oración de gratitud por el amor y la delicadeza con que el Padre diseñó cada detalle de tu ser.',
  },
  {
    text: 'Ya te lo he ordenado: ¡Sé fuerte y valiente! No temas ni te acobardes, porque el Señor tu Dios estará contigo dondequiera que vayas.',
    ref: 'Josué 1:9',
    cat: 'mandamiento',
    reflection:
      'La valentía que Dios te pide no proviene de la ausencia de miedo, sino de la certeza de Su compañía. Avanza hoy con paso firme; el Creador del universo cuida cada rincón de tu camino.',
  },
  {
    text: 'Ahora bien, sabemos que Dios dispone todas las cosas para el bien de quienes lo aman, los cuales han sido llamados de acuerdo con su propósito.',
    ref: 'Romanos 8:28',
    cat: 'verdad',
    reflection:
      'Incluso las piezas sueltas y los días difíciles están siendo entretejidos por la mano maestra de Dios para tu bendición. Confía en el hermoso tapiz que Él está diseñando con tu vida.',
  },
  {
    text: 'El Señor peleará por ustedes; solo quédense tranquilos.',
    ref: 'Éxodo 14:14',
    cat: 'promesa',
    reflection:
      'Hay batallas que no te corresponde pelear a ti. Suelta las armas de la ansiedad y el control; tu tierno Defensor se encarga de abrir camino y asegurar tu victoria en el silencio.',
  },
  {
    text: 'Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa.',
    ref: 'Isaías 41:10',
    cat: 'promesa',
    reflection:
      'Siente el firme agarre de Su mano derecha sobre la tuya. Cuando sientas que las fuerzas te abandonan, recuerda esta dulce promesa de asistencia y fuerza incondicional.',
  },
  {
    text: 'El Señor es mi pastor; nada me falta.',
    ref: 'Salmo 23:1',
    cat: 'verdad',
    reflection:
      'Tener a Jesús como Pastor significa que tu provisión, consuelo y guía están plenamente garantizados. Aunque no lo veas todo resuelto hoy, puedes descansar: en Él ya lo tienes todo.',
  },
  {
    text: 'Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas.',
    ref: 'Proverbios 3:5-6',
    cat: 'mandamiento',
    reflection:
      'Rendir nuestros razonamientos ante Dios es el principio de la paz. Permite que Él tome el control de tus planes hoy; Su infinita sabiduría abrirá los caminos más rectos para tu vida.',
  },
  {
    text: 'Depositen en él toda su ansiedad, porque él cuida de ustedes.',
    ref: '1 Pedro 5:7',
    cat: 'mandamiento',
    reflection:
      'No fuiste diseñada para cargar con el peso del mañana. Entrega hoy al Padre tus dudas, miedos y preocupaciones en un acto de amorosa confianza; Su mirada tierna cuida de cada detalle.',
  },
  {
    text: 'A los montes levanto mis ojos; ¿de dónde viene mi ayuda? Mi ayuda proviene del Señor, creador del cielo y de la tierra.',
    ref: 'Salmo 121:1-2',
    cat: 'oración',
    reflection:
      'Cuando las circunstancias a tu alrededor se sientan gigantes como montañas, levanta la mirada un poco más alto. Tu socorro no proviene de este mundo, sino del Dios que lo creó todo con amor.',
  },
  {
    text: "Pero Rut respondió: '¡No me ruegues que te deje y me aparte de ti! A dondequiera que tú vayas, iré yo... Tu pueblo será mi pueblo, y tu Dios será mi Dios'.",
    ref: 'Rut 1:16',
    cat: 'ejemplo',
    reflection:
      'La lealtad inquebrantable de Rut es una de las muestras de fe más bellas de las Escrituras. Elegir amar y comprometerse con otros, incluso en la escasez, es abrirle la puerta al plan redentor de Dios.',
  },
  {
    text: '—Aquí tienes a la sierva del Señor —contestó María—. Que se haga conmigo conforme a tu palabra. Y el ángel la dejó.',
    ref: 'Lucas 1:38',
    cat: 'ejemplo',
    reflection:
      "La sumisión voluntaria y dulce de María al propósito divino cambió la historia de la humanidad. Dile hoy al Padre: 'Hágase tu voluntad', confiando en que Sus planes para ti siempre superan tus expectativas.",
  },
  {
    text: '—No, mi señor —respondió Ana—... Soy solo una mujer atribulada que está desahogando su corazón delante del Señor.',
    ref: '1 Samuel 1:15',
    cat: 'ejemplo',
    reflection:
      'Ana nos enseña que derramar el alma con honestidad y lágrimas delante de Dios no es falta de fe, sino la búsqueda del único refugio verdadero. El Padre siempre escucha los latidos de un corazón transparente.',
  },
  {
    text: 'Más bien, busquen primeramente el reino de Dios y su justicia, y todas estas cosas les serán añadidas.',
    ref: 'Mateo 6:33',
    cat: 'mandamiento',
    reflection:
      'Cuando tus prioridades se alinean con el corazón de Dios, el afán diario pierde su poder. Dedica tus primeros pensamientos a amar y servir, sabiendo que el Padre se encargará de bendecir tus necesidades.',
  },
  {
    text: "Pero él me dijo: 'Te basta con mi gracia, pues mi poder se perfecciona en la debilidad'. Por lo tanto, gustosamente me gloriaré más bien en mis debilidades...",
    ref: '2 Corintios 12:9',
    cat: 'verdad',
    reflection:
      'Tus debilidades no son un obstáculo para Dios, sino el lienzo perfecto para mostrar Su gloria. Descansa hoy en la suficiencia de Su tierna gracia; Su poder te sostendrá firme.',
  },
  {
    text: 'Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza.',
    ref: 'Jeremías 29:11',
    cat: 'promesa',
    reflection:
      'Tu mañana no está a la deriva de las circunstancias. El Señor mismo ha diseñado un futuro lleno de esperanza, bienestar y paz para ti. Camina segura bajo Su tierno cuidado.',
  },
  {
    text: 'Sean gratas las palabras de mi boca y la meditación de mi corazón en tu presencia, oh Señor, roca mía y redentor mío.',
    ref: 'Salmo 19:14',
    cat: 'oración',
    reflection:
      'Que tu diálogo interno y tus palabras hacia los demás sean hoy un reflejo de la gracia del Padre. Haz de esta hermosa plegaria tu brújula para mantener un corazón limpio y dulce.',
  },
  {
    text: 'En el amor no hay temor, sino que el amor perfecto echa fuera el temor, porque el temor lleva en sí castigo.',
    ref: '1 Juan 4:18',
    cat: 'verdad',
    reflection:
      'El amor incondicional del Padre te libra de la necesidad de ser perfecta para ser aceptada. Deja que Su tierno y perfecto afecto disuelva hoy todos tus miedos y ansiedades.',
  },
  {
    text: 'Que el Dios de la esperanza los llene de toda alegría y paz a ustedes que creen, para que rebosen de esperanza por el poder del Espíritu Santo.',
    ref: 'Romanos 15:13',
    cat: 'oración',
    reflection:
      'Esta es una bendición de pura vida para tu espíritu. Pídele al Consolador divino que inunde tu corazón de gozo y paz hoy, permitiendo que tu esperanza se desborde sobre quienes te rodean.',
  },
  {
    text: 'Hagan brillar su luz delante de todos, para que ellos vean sus buenas obras y glorifiquen a su Padre que está en los cielos.',
    ref: 'Mateo 5:16',
    cat: 'mandamiento',
    reflection:
      'No escondas la belleza de la fe que habita en ti. Un gesto amable, una palabra de aliento o una sonrisa sincera pueden ser la luz que ilumine el día gris de alguien más.',
  },
  {
    text: 'Porque somos hechura de Dios, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.',
    ref: 'Efesios 2:10',
    cat: 'verdad',
    reflection:
      'Eres el poema escrito a mano por el Creador. Tu vida tiene un diseño único y un conjunto de buenas obras que ya han sido preparadas con tierno amor para que las vivas hoy.',
  },
  {
    text: "Como el Señor le había hablado, Agar le puso por nombre 'El Dios que me ve', pues se dijo: '¿De verdad he visto aquí al que me ve?'",
    ref: 'Génesis 16:13',
    cat: 'ejemplo',
    reflection:
      'Incluso en el desierto de la soledad y la incomprensión, no pasas desapercibida. La experiencia de Agar nos recuerda que tenemos un Padre tierno cuyos ojos están fijos en nosotros con profundo amor.',
  },
  {
    text: 'Ama al Señor tu Dios con todo tu corazón, con toda tu alma, con toda tu mente y con todas tus fuerzas.',
    ref: 'Marcos 12:30',
    cat: 'mandamiento',
    reflection:
      'El amor a Dios no es a medias; es una entrega total de todo nuestro ser. Cuando decides amar al Padre con cada área de tu vida, experimentas una plenitud y una libertad inigualables.',
  },
  {
    text: "Pero ahora, así dice el Señor, el que te creó... 'No temas, porque yo te he redimido; te he llamado por tu nombre, tú eres mía'.",
    ref: 'Isaías 43:1',
    cat: 'promesa',
    reflection:
      "Tienes un sentido de pertenencia sagrado y eterno. Tu Creador conoce tu nombre, te ha rescatado y te dice hoy con ternura infinita al oído: 'No temas, tú me perteneces'.",
  },
  {
    text: 'Este mandamiento nuevo les doy: que se amen los unos a los otros. Así como yo los he amado, también ustedes deben amarse los unos a los otros.',
    ref: 'Juan 13:34',
    cat: 'mandamiento',
    reflection:
      'La medida de nuestro amor hacia los demás debe ser el amor sacrificial, paciente y tierno de Jesús por nosotros. Que tu jornada de hoy sea un reflejo vivo de esa hermosa gracia.',
  },
];

// 3. Exportamos la base de datos unificada
export default versesDB;
