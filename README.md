# 🛒 Sistema de Gestión de Inventario en Línea para Retail (Walmart)

Este proyecto fue desarrollado como parte del curso **Taller de Aplicaciones Web** y tiene como propósito resolver la discrepancia entre el inventario disponible en línea y el stock real en tiendas físicas de Walmart. La solución busca minimizar errores, mejorar la experiencia del cliente y optimizar el sistema de compras omnicanal.

---

## 📌 Problema

El comercio minorista enfrenta grandes desafíos al mantener sincronizado su inventario entre tiendas físicas y la tienda en línea. En el caso de Walmart, la falta de consistencia en el stock ha provocado cancelaciones de pedidos, demoras en entregas y baja satisfacción de clientes.

---

## 🎯 Objetivos del Proyecto

### Frontend

- 👁️ Visualizar disponibilidad de productos en tiempo real.
- 🔔 Recibir notificaciones inteligentes cuando un producto vuelva a estar disponible.
- 🛒 Facilitar el proceso de compra: retiro en tienda o envío a domicilio.

### Backend

- 🌐 Integrar tecnologías **IoT** y **Machine Learning** para actualizar el stock automáticamente.
- 📊 Incluir un módulo predictivo de demanda para mejorar la planificación y evitar sobrestock o desabastecimiento.

---

## 🧰 Tecnologías Utilizadas

### Frontend

- Angular
- RxJS y Observables
- Bootstrap
- JWT (Json Web Token)
- Angular Router
- Consumo de APIs REST

### Backend

- NestJS
- TypeORM + Repository Pattern
- MySQL
- JWT + Guards
- Pipes & Validators
- Arquitectura modular con Providers
- Pruebas automatizadas

---

## 🧩 Funcionalidades

### Cliente

- Buscar productos y ver su disponibilidad por tienda.
- Activar alertas para productos fuera de stock.
- Seleccionar tipo de entrega y confirmar compras.

### Administrador

- Gestión de productos e inventario.
- Visualización de estadísticas predictivas.
- Administración de usuarios y roles.

---

## ⚙️ Instalación y Ejecución

### Clonar el repositorio

```bash
git clone https://github.com/usuario/proyecto-walmart.git
cd proyecto-walmart
