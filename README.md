<p align="center"><img src="icon-512.png" width="140" alt="Verbos"></p>

# Verbos

Español avanzado para quien ya vivió en el Perú: **indicativo o subjuntivo** y **pretérito o imperfecto**, con frases reales de *Don Quijote*, *Orgullo y prejuicio* y la vida diaria, y los dos libros completos para leer y escuchar. Inspirada en el Cusco, sus tejidos andinos y sus llamas.

Funciona en el navegador, se instala en el teléfono y funciona sin internet.

## Qué hace

- **Inicio**: tu dosis diaria de repasos y tarjetas nuevas. Elige temas, textos y la velocidad de la voz. «Seguir leyendo» te devuelve a tu página.
- **Ejercicio**: una frase con un hueco y una pista («dormir · ¿indicativo o subjuntivo? · tú», o «llegar · ¿pretérito o imperfecto? · …»).
  - Si escribes la forma correcta en el otro modo o el otro tiempo, la app te avisa y te deja intentarlo otra vez.
  - *Tuviera* y *tuviese* valen lo mismo: las dos se aceptan.
  - Sin acento también vale, pero la app te recuerda cómo se escribe.
  - 🔊 lee la frase. Después de responder: la frase completa, su fuente, la traducción al inglés (en las frases del día a día) y las conjugaciones.
- **Libros**: *Don Quijote* (127 capítulos) y *Orgullo y prejuicio* (61) completos. Toca cualquier palabra para traducirla, 🔊 lee un párrafo y ▶ lee el capítulo en voz alta. La app recuerda dónde te quedaste.
- **Reglas**: 18 temas con ejemplos citados literalmente: deseo, emoción y duda; *cuando*, *aunque*, *para que*; cláusulas con *si* y *como si*; concordancia de tiempos; *-ra* o *-se*; futuro de probabilidad; el relato en pasado; el *ustedes* y el leísmo del Perú; cómo leer la ortografía antigua.
- **Verbos**: 385 verbos conjugados, con buscador.
- **Resumen**: repetición espaciada (cajas de 0, 1, 3, 7, 16 y 35 días), racha y errores recientes.
- **Nube** (opcional): sincroniza el progreso y la página de lectura con Supabase.

| | |
|---|---|
| Tarjetas | 2 080 |
| Indicativo o subjuntivo | 1 220 |
| Pretérito o imperfecto | 860 |
| Frases del día a día (Tatoeba) | 600 |
| *Don Quijote* | 740 |
| *Orgullo y prejuicio* | 740 |

## Voz y uso sin internet

La voz es la del propio teléfono, así que funciona sin conexión. La app prefiere una voz peruana (es-PE) y, si no hay, una latinoamericana. En el iPhone se pueden descargar más voces en **Ajustes → Accesibilidad → Contenido leído → Voces → Español**.

La primera vez que abres la app con internet, todo queda guardado en el teléfono: tarjetas, diccionario y los dos libros.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La app |
| `data.js` | Tarjetas, verbos y reglas |
| `lex.js` | Diccionario para tocar palabras |
| `libro-quijote.js`, `libro-orgullo.js` | Los textos completos |
| `sw.js`, `manifest.webmanifest`, `icon-*.png`, `llama.svg` | Instalación y uso sin internet |
| `schema.sql` | Tabla para la sincronización |

## Publicar

Son archivos estáticos: súbelos a un repositorio de GitHub y activa **Settings → Pages**. En el iPhone: **Compartir → Añadir a pantalla de inicio**.

Al publicar una versión nueva, sube el número de `V` en `sw.js` (`esp-v2` → `esp-v3`).

## Sincronización

Opcional. En Supabase → SQL editor, ejecuta `schema.sql`. Solo toca la tabla `public.esp_snapshots` y se puede volver a ejecutar sin problema. Cada persona ve solo su propio progreso.

## Fuentes y licencias

- *Don Quijote de la Mancha*, Miguel de Cervantes: dominio público, Proyecto Gutenberg n.º 2000.
- *Orgullo y prejuicio*, Jane Austen, traducción de José Jordán de Urríes y Azara (Calpe, 1924): dominio público, [Wikisource](https://es.wikisource.org/wiki/Orgullo_y_prejuicio).
- Frases del día a día y sus traducciones: [Tatoeba](https://tatoeba.org), CC BY 2.0 FR.
- Conjugaciones y significados: [Fred Jehle’s Spanish verb database](https://github.com/ghidinelli/fred-jehle-spanish-verbs), **CC BY-NC-SA 3.0** (uso no comercial).
- Traducciones al tocar una palabra: Wiktionary en inglés, CC BY-SA, vía [doozan/spanish_data](https://github.com/doozan/spanish_data).

Las frases y los libros se citan literalmente; solo los guiones de diálogo se cambiaron por rayas y se unieron las palabras cortadas al final de página. Las explicaciones breves de las reglas se escribieron para esta app. La llama y los tejidos son dibujos originales.

Por la licencia de Jehle, `data.js` es solo para uso no comercial y se comparte con la misma licencia.
