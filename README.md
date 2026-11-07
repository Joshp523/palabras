<p align="center"><img src="icon-512.png" width="140" alt="Verbos"></p>

# Verbos

Practica los dos grandes dilemas del español: **ser o estar** y **pretérito o imperfecto**, con frases reales de *Don Quijote*, *Orgullo y prejuicio* y la vida diaria. Inspirada en el Cusco, sus tejidos andinos y sus llamas.

Funciona en el navegador, se instala en el teléfono y funciona sin internet.

## Qué hace

- **Inicio**: tu dosis diaria de repasos y tarjetas nuevas (5, 10, 15 o 25 al día). Elige temas y textos.
- **Ejercicio**: una frase con un hueco y una pista («ser / estar · imperfecto · yo o él / ella / usted», o «llegar · ¿pretérito o imperfecto? · …»).
  - Si escribes la forma correcta del otro verbo o del otro tiempo, la app te avisa y te deja intentarlo otra vez.
  - Sin acento también vale, pero la app te recuerda cómo se escribe.
  - Después de responder: la frase completa, su fuente, la traducción al inglés (en las frases del día a día) y las conjugaciones.
- **Toca una palabra** para ver su significado en inglés y su forma base.
- **Reglas**: 15 temas con ejemplos citados literalmente, incluida una nota sobre el *ustedes* peruano y cómo leer la ortografía antigua.
- **Verbos**: 303 verbos conjugados, con buscador.
- **Resumen**: repetición espaciada (cajas de 0, 1, 3, 7, 16 y 35 días), racha y errores recientes.
- **Nube** (opcional): sincroniza el progreso entre dispositivos con Supabase.

| | |
|---|---|
| Tarjetas | 1 306 |
| Frases del día a día (Tatoeba) | 420 |
| *Don Quijote* | 441 |
| *Orgullo y prejuicio* | 445 |

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La app |
| `data.js` | Tarjetas, verbos y reglas |
| `lex.js` | Diccionario para tocar palabras (se carga la primera vez) |
| `sw.js`, `manifest.webmanifest`, `icon-*.png`, `llama.svg` | Instalación y uso sin internet |
| `schema.sql` | Tabla para la sincronización |

## Publicar

Son archivos estáticos: súbelos a un repositorio de GitHub y activa **Settings → Pages**. En el iPhone: **Compartir → Añadir a pantalla de inicio**.

Al publicar una versión nueva, sube el número de `V` en `sw.js` (`esp-v1` → `esp-v2`).

## Sincronización

Opcional. En Supabase → SQL editor, ejecuta `schema.sql`. Solo toca la tabla `public.esp_snapshots` y se puede volver a ejecutar sin problema. Cada persona ve solo su propio progreso.

## Fuentes y licencias

- *Don Quijote de la Mancha*, Miguel de Cervantes: dominio público, Proyecto Gutenberg n.º 2000.
- *Orgullo y prejuicio*, Jane Austen, traducción de José Jordán de Urríes y Azara (Calpe, 1924): dominio público, [Wikisource](https://es.wikisource.org/wiki/Orgullo_y_prejuicio).
- Frases del día a día y sus traducciones: [Tatoeba](https://tatoeba.org), CC BY 2.0 FR.
- Conjugaciones y significados: [Fred Jehle’s Spanish verb database](https://github.com/ghidinelli/fred-jehle-spanish-verbs), **CC BY-NC-SA 3.0** (uso no comercial).
- Traducciones al tocar una palabra: Wiktionary en inglés, CC BY-SA, vía [doozan/spanish_data](https://github.com/doozan/spanish_data).

Las frases se citan literalmente; solo los guiones de diálogo se cambiaron por rayas. Las explicaciones breves de las reglas se escribieron para esta app. La llama y los tejidos son dibujos originales.

Por la licencia de Jehle, `data.js` es solo para uso no comercial y se comparte con la misma licencia.
