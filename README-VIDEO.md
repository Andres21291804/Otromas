# 🎥 Guía para Cambiar el Video de Fondo

## 📁 Estructura de Archivos de Video

Coloca tus videos en la carpeta `public/` de tu proyecto:

```
public/
├── video-fondo.mp4          ← Video principal
├── party-video.mp4          ← Video alternativo 1
├── celebration-video.mp4    ← Video alternativo 2
├── neon-lights.mp4         ← Video alternativo 3
├── video-poster.jpg        ← Imagen de carga
├── musica-fondo.mp3        ← Audio de fondo (opcional)
└── musica-fondo.ogg        ← Audio alternativo
```

## 🔄 Cómo Cambiar el Video

### Método 1: Cambiar en el código
En `src/App.tsx`, busca esta línea (aproximadamente línea 20):

```javascript
const videoSrc = "/video-fondo.mp4"; // Cambia aquí tu video
```

Cambia el nombre del archivo por el que quieras usar:

```javascript
const videoSrc = "/party-video.mp4";
// o
const videoSrc = "/celebration-video.mp4";
// o
const videoSrc = "/neon-lights.mp4";
```

### Método 2: Reemplazar el archivo
Simplemente reemplaza el archivo `public/video-fondo.mp4` con tu nuevo video, manteniendo el mismo nombre.

## 📋 Formatos de Video Recomendados

### ✅ Formatos Compatibles:
- **MP4** (H.264) - Recomendado
- **WebM** (VP8/VP9) - Alternativo
- **OGV** (Theora) - Respaldo

### 📐 Especificaciones Recomendadas:
- **Resolución**: 1920x1080 (Full HD) o superior
- **Duración**: 10-30 segundos (para loop perfecto)
- **Tamaño**: Máximo 10MB para web
- **FPS**: 30fps
- **Bitrate**: 2-5 Mbps

## 🎨 Tipos de Videos Recomendados

### 🎉 Para Fiestas:
- Luces de neón parpadeando
- Efectos de partículas
- Gradientes animados
- Humo colorido
- Rayos láser

### 🌟 Para Celebraciones:
- Confeti cayendo
- Fuegos artificiales
- Burbujas flotando
- Brillos dorados
- Efectos de luz suave

### 🔥 Para Eventos Juveniles:
- Efectos de fuego
- Ondas de sonido
- Patrones geométricos
- Colores vibrantes
- Movimientos dinámicos

## 🛠️ Herramientas para Crear/Editar Videos

### Gratuitas:
- **DaVinci Resolve** - Profesional y gratuito
- **OpenShot** - Fácil de usar
- **Shotcut** - Código abierto
- **Canva** - Online, con plantillas

### De Pago:
- **Adobe After Effects** - Efectos profesionales
- **Adobe Premiere Pro** - Edición avanzada
- **Final Cut Pro** - Para Mac

## 🌐 Recursos de Videos Gratuitos

### Sitios Web:
- **Pexels Videos** - pexels.com/videos
- **Pixabay Videos** - pixabay.com/videos
- **Unsplash Videos** - unsplash.com
- **Coverr** - coverr.co
- **Videvo** - videvo.net

### Búsquedas Recomendadas:
- "party lights background"
- "neon animation loop"
- "celebration confetti"
- "abstract colorful motion"
- "disco ball lights"

## ⚡ Optimización de Performance

### Para Web:
1. **Comprime el video** antes de subirlo
2. **Usa herramientas como**:
   - HandBrake (gratuito)
   - FFmpeg (línea de comandos)
   - CloudConvert (online)

### Comando FFmpeg para optimizar:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 128k output.mp4
```

## 🎵 Audio de Fondo (Opcional)

Si quieres agregar música:

1. Coloca tu archivo de audio en `public/`
2. Formatos recomendados: MP3, OGG
3. El audio está configurado pero comentado por defecto
4. Para activarlo, descomenta las líneas del audio en el código

## 🚀 Despliegue

Después de cambiar el video:

1. **Desarrollo local**:
   ```bash
   npm run dev
   ```

2. **Para GitHub Pages**:
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Solución de Problemas

### El video no se reproduce:
- Verifica que el archivo esté en `public/`
- Confirma el formato (MP4 recomendado)
- Revisa la consola del navegador para errores

### El video es muy pesado:
- Comprime el archivo
- Reduce la resolución si es necesario
- Considera usar un poster/imagen de carga

### No se ve en móviles:
- Asegúrate de tener `playsInline` en el video
- Algunos móviles requieren interacción del usuario

## 💡 Consejos Adicionales

1. **Haz loops perfectos** - El video se repetirá infinitamente
2. **Prueba en diferentes dispositivos** - Móvil, tablet, desktop
3. **Considera la velocidad de internet** - Videos más ligeros cargan más rápido
4. **Mantén respaldos** - Guarda copias de tus videos favoritos

¡Listo! Ahora puedes cambiar el video de fondo fácilmente. 🎉