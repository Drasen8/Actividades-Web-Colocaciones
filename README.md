# 🎯 Blog de Colocaciones ELE - Nivel B1

Blog didáctico estático para estudiantes de Español como Lengua Extranjera (ELE) nivel B1, centrado en el aprendizaje de colocaciones léxicas.

## 📋 Descripción

Esta es una aplicación web estática (HTML + CSS + JavaScript) sin backend que contiene 4 actividades interactivas autocorregibles sobre colocaciones en español:

1. **Corrección de colocaciones incorrectas** (10 min)
2. **Clasificación temática con drag & drop** (10 min)
3. **Completar frases con opciones múltiples** (10 min)
4. **Producción escrita - Diario personal** (30 min)

## ✨ Características

- ✅ **Sin backend**: Funciona completamente en el navegador
- ✅ **Autocorrección automática**: Todas las actividades se corrigen solas
- ✅ **Respuestas predeterminadas**: Las soluciones están integradas en el código
- ✅ **Guardado automático**: El diario se guarda en localStorage
- ✅ **Drag & Drop**: Actividad 2 con arrastrar y soltar
- ✅ **Contador de palabras y colocaciones**: En la actividad del diario
- ✅ **Diseño responsive**: Se adapta a móviles y tablets
- ✅ **Animaciones suaves**: Interfaz moderna y atractiva

## 🚀 Instalación y uso

### Opción 1: Abrir directamente en el navegador (más fácil)

1. Navega a la carpeta del proyecto en el Explorador de Windows
2. Haz doble clic en el archivo `index.html`
3. Se abrirá automáticamente en tu navegador predeterminado

### Opción 2: Usar servidor local de Python (recomendado)

Si tienes Python instalado:

```powershell
# Navega a la carpeta del proyecto
cd "c:\Users\Marc\Desktop\treball"

# Inicia el servidor (Python 3)
python -m http.server 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 3: Usar extensión de VS Code

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 📁 Estructura del proyecto

```
treball/
│
├── index.html          # Página principal con todas las actividades
├── css/
│   └── styles.css      # Estilos completos del blog
├── js/
│   └── app.js          # Lógica de las 4 actividades autocorregibles
└── README.md           # Este archivo
```

## 🎮 Cómo usar las actividades

### 📝 Actividad 1: Corrección de colocaciones
- Lee cada frase con una colocación incorrecta
- Usa el banco de palabras para encontrar la correcta
- Escribe la palabra correcta en el campo de texto
- Haz clic en "Verificar" para comprobar tu respuesta
- El sistema te dirá si es correcta o incorrecta

### 🗂️ Actividad 2: Clasificación temática
- Arrastra cada colocación a su categoría correspondiente:
  - 😊 Sentimientos o sensaciones
  - 🏥 Salud y cuerpo
  - 🍽️ Alimentación
- Haz clic en "Verificar clasificación" para comprobar
- Las correctas se marcan en verde, las incorrectas en rojo

### ✅ Actividad 3: Completar frases
- Lee cada frase incompleta
- Selecciona la opción correcta entre las 3 disponibles
- Haz clic en "Verificar respuestas" al final
- El sistema muestra cuáles son correctas y cuáles no

### 📖 Actividad 4: Escribe tu diario
- Redacta un texto de 100-150 palabras
- Debes usar al menos 5 colocaciones aprendidas
- El contador te muestra:
  - Número de palabras escritas
  - Número de colocaciones detectadas
- Puedes hacer clic en las sugerencias para insertar colocaciones
- Haz clic en "Enviar diario" para validar tu texto
- Tu diario se guarda automáticamente en el navegador

## 🔧 Respuestas predeterminadas

Todas las respuestas correctas están programadas en `js/app.js`:

**Actividad 1:** calmar, toca, altamente, hierro, copiosa, cielo, mantenerse, helado

**Actividad 3:** hizo, tomó, hace, se prendió, dio, cometí, me den, llevar

**Actividad 2:** Sistema de categorización automático por atributos `data-category`

**Actividad 4:** Detección automática de 30+ colocaciones en el texto del usuario

## 💾 Almacenamiento

El diario de la Actividad 4 se guarda automáticamente en **localStorage** del navegador. Esto significa:
- ✅ Persiste entre sesiones
- ✅ No necesita servidor
- ✅ Se guarda automáticamente
- ⚠️ Solo funciona en el mismo navegador y dispositivo

## 🌐 Compatibilidad

- ✅ Chrome / Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- 📱 Responsive para móviles y tablets

## 🎨 Personalización

Puedes modificar fácilmente:

- **Colores**: Edita las variables en `css/styles.css`
- **Respuestas**: Modifica los arrays en `js/app.js`
- **Contenido**: Edita el HTML en `index.html`

## 🐛 Solución de problemas

### Las actividades no funcionan
- Asegúrate de que `js/app.js` está en la carpeta correcta
- Abre la consola del navegador (F12) para ver errores

### El drag & drop no funciona
- Usa un navegador moderno (Chrome, Edge, Firefox)
- Algunos navegadores móviles tienen soporte limitado

### El diario no se guarda
- Verifica que localStorage esté habilitado en tu navegador
- Modo incógnito/privado puede deshabilitar localStorage

## 📚 Contenidos didácticos

- **Nivel**: B1 (Marco Común Europeo)
- **Destinatarios**: Adultos estudiantes de ELE
- **Tiempo estimado**: 60 minutos total
- **Destrezas**: Comprensión lectora y expresión escrita
- **Tema**: Colocaciones léxicas frecuentes en español

## 📧 Notas adicionales

Este proyecto es completamente estático y no requiere:
- ❌ Servidor web
- ❌ Base de datos
- ❌ PHP / Laravel
- ❌ Node.js
- ❌ Instalación de dependencias

Solo necesitas un navegador web moderno para usarlo.

---

**¡Disfruta aprendiendo colocaciones en español!** 🇪🇸
