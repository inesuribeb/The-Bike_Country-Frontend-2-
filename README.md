# Frontend para The Bike Country 🚴‍♀️

Este proyecto representa el cliente web de una empresa de turismo premium especializada en ciclismo en Euskadi. La interfaz permite a los usuarios explorar paquetes turísticos, registrarse, realizar reservas y gestionar su experiencia de manera intuitiva y atractiva.

## 🔧 **Características del Proyecto**

-   **Consumidor de API JSON**:  
    Este frontend se conecta con la API del backend de _The Bike Country_ para manejar datos en tiempo real sobre clientes, paquetes turísticos, reservas y más.

-   **Diseño centrado en el usuario**:

    -   Interfaz atractiva y funcional que sigue principios de diseño responsive, adaptándose a dispositivos móviles, tablets y desktop.
    -   Flujo intuitivo para registro, autenticación y gestión de reservas.

-   **Tecnologías utilizadas**:
    -   **React.js**: Framework principal para la construcción de la interfaz.
    -   **Axios**: Cliente HTTP para la interacción con la API.
    -   **React Router**: Navegación entre páginas.
    -   **CSS Modules / Styled Components**: Gestión modular del estilo.
    -   **Vite**: Herramienta para el desarrollo rápido del proyecto.

## ⬇️ **Instalación y Uso**

1. Clonar este repositorio:

    ```bash
    git clone git@github.com:inesuribeb/The-Bike-Country-Frontend.git

    ```

2. Clonar el repositorio del backend:  
   https://github.com/inesuribeb/The-Bike-Country_Back

3. Instalar dependencias:

    ```bash
    npm install

    ```

4. Configurar variables de entorno (crear un archivo .env en la raíz del proyecto):

    ```bash
    VITE_API_URL=http://localhost:3002

    ```

5. Iniciar la aplicación:

    ```bash
    npm run dev

    ```

6. Abrir el navegador en:
    ```bash
    http://localhost:5173
    ```

# 🚀 Características Principales

## **Páginas y Funcionalidades**

### **Inicio**

-   Página principal con una introducción a la marca y sus servicios.

### **Paquetes Turísticos**

-   Vista general de todos los paquetes disponibles.
-   Detalle de cada paquete con información ampliada y opción para reservar.

### **Autenticación**

-   Registro y login de clientes.
-   Gestión de tokens JWT para mantener sesiones seguras.

### **Reservas**

-   Visualización de reservas activas y su estado.
-   Opciones para cancelar o modificar reservas.

### **Panel de Administración** _(para trabajadores)_

-   Gestión de clientes, paquetes y reservas.
-   Acceso restringido con autenticación de trabajadores.

### **Contacto**

-   Formulario para consultas y solicitudes de información.

## 🌐 **Navegación Principal**

-   **Header**: Navegación principal con enlaces a Inicio, Paquetes, Reservas y Contacto.
-   **Footer**: Información adicional sobre la empresa, redes sociales y enlaces rápidos.

---

## 🔜 **Próximos Pasos**

-   Mejorar la accesibilidad y usabilidad.
-   Integrar un sistema de notificaciones en tiempo real.
-   Implementar pagos en línea para reservas.
-   Añadir pruebas unitarias e integración de herramientas como Cypress.

---

## 🤝 **Contribuciones**

¡Toda colaboración es bienvenida!  
Si tienes ideas para mejorar este proyecto, abre un **issue** o envía un **pull request**.

---

## ✨ **Desarrollado con pasión por el ciclismo y la tecnología** 🚴‍♀️✨
