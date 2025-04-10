
# 🐾 Cats Breeds

Aplicación desarrollada con **Angular standalone** + **Ionic**.

Esta aplicación permite explorar diferentes razas de gatos, mostrando información detallada como características, puntuaciones y descripciones específicas. Puedes buscar por nombre de raza, ver una lista general, y acceder a un modal con detalles ampliados de cada gato seleccionado.

## 🚀 Tecnologías

- **Angular 19** (standalone APIs)  
- **Ionic Framework** (UI móvil nativa)
- **SCSS** (estilos modulares)  
- **Jasmine + Karma** (pruebas unitarias)  
- **ESLint** (análisis estático y buenas prácticas)  
- **TypeScript** (~5.6.3)  
- **Capacitor** (despliegue móvil nativo)  
- **Capacitor CLI** (gestión de plataformas)

## 📦 Estructura del proyecto

```bash
src/
└── app/
    ├── core/
    │   ├── models/
    │   │   └── cat.model.ts
    │   ├── repositories/
    │   │   └── cats.repository.ts
    │   └── use-cases/
    │       ├── get-cats.use-case.ts
    │       └── get-cats.use-case.spec.ts
    │
    ├── data/
    │   ├── services/
    │   │   ├── cats.service.ts
    │   │   └── cats.service.spec.ts
    │   └── interceptors/
    │       └── cats.interceptor.ts
    │
    └── presentation/
        ├── components/
        │   └── cat-score/
        │       ├── cat-score.component.html
        │       ├── cat-score.component.scss
        │       ├── cat-score.component.spec.ts
        │       └── cat-score.component.ts
        │
        ├── constants/
        │   └── cat-details.constants.ts
        │
        ├── mocks/
        │   └── cat.mock.ts
        │
        └── pages/
            ├── home/
            │   ├── home.page.html
            │   ├── home.page.scss
            │   ├── home.page.spec.ts
            │   └── home.page.ts
            │
            └── modals/
                └── breed-details/
                    ├── breed-details.page.html
                    ├── breed-details.page.scss
                    ├── breed-details.page.ts
                    ├── breed-details.page.spec.ts
                    ├── show-cat-details.modal.ts
                    └── show-cat-details.modal.spec.ts
```

## 🧰 Requisitos Previos

Asegúrate de tener instalados los siguientes programas y herramientas con versiones compatibles:

- **Node.js** (>=16.x recomendado para compatibilidad con Angular 19)  
- **Ionic CLI** (>=6.x)  
- **Angular CLI** (>=19.x)  
- **Capacitor CLI** (>=7.x)  
- **Cordova CLI** (opcional, solo si planeas usar plugins de Cordova)  
- **Java SDK 11+** y **Android Studio** (para compilar en Android)  
- **Xcode 14+** (solo en macOS, para compilar en iOS)

> Puedes verificar las versiones con:

```bash
node -v
npm -v
ionic -v
ng version
npx cap --version
```

## ⚙️ Instalación

```bash
# Clona el repositorio
git https://github.com/ydpard43/catbreeds.git
cd cats-app

# Instala las dependencias
npm install

# Ejecuta en modo desarrollo en el navegador
ionic serve
```

## 📲 Despliegue en Android e iOS

> Asegúrate de tener instalado Capacitor CLI, Android Studio y Xcode (macOS).

```bash
# 1. Construye la app web
npm run build

# 2. Sincroniza con Capacitor
npx cap sync

# 3. Abre en Android Studio
npx cap open android

# 4. Abre en Xcode (solo en macOS)
npx cap open ios
```

## 🧪 Pruebas

```bash
# Ejecutar pruebas unitarias
npm run test
```

## 🧪 Ejemplo

Puedes descargar la aplicación Android directamente desde la carpeta `example/android` en el proyecto. Sigue estos pasos:

1. Dirígete a la carpeta `example/android` dentro de tu proyecto.
2. Descarga el archivo **APK** de la aplicación desde el siguiente enlace:

```
# Ruta del archivo APK
example/android/Cat breeds.apk
```

3. Instala el archivo APK en tu dispositivo Android:
   - Si tienes habilitada la **instalación de aplicaciones desde fuentes desconocidas** en tu dispositivo, simplemente haz clic en el archivo APK y selecciona **Instalar**.
   - Si no has habilitado esta opción, ve a **Ajustes > Seguridad > Fuentes desconocidas** y actívala para permitir la instalación.
