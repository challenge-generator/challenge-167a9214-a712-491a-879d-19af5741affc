# Implementación de CRUD con reglas de negocio y respuestas de error consistentes

En el contexto de una aplicación de gestión de productos para una tienda en línea, debes diseñar y construir endpoints REST que permitan crear, leer, actualizar y eliminar productos. Los productos tienen atributos como nombre, precio, stock y categoría. La persistencia se realizará en DynamoDB. El sistema debe validar las entradas y manejar los errores de manera centralizada. Además, se deben incluir pruebas unitarias para asegurar la calidad del código.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Diseño de APIs REST con validación y manejo de errores |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 12 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Definición de endpoints y validación de entrada

**Objetivo:** Definir los endpoints REST y validar las entradas para asegurar la integridad de los datos.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Identifica los endpoints necesarios para crear, leer, actualizar y eliminar productos.
- Define las reglas de validación para cada atributo del producto (nombre, precio, stock, categoría).
- Implementa la validación de entrada en los endpoints.

**Entregable:** Endpoints REST definidos y validación de entrada implementada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los tipos de datos y formatos válidos para cada atributo del producto.
- Piensa en cómo manejar los errores de validación de manera consistente.

</details>

### Fase 2: Manejo centralizado de errores

**Objetivo:** Implementar un manejo centralizado de errores para los endpoints REST.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Diseña una estrategia para manejar los errores de manera centralizada en la aplicación.
- Implementa el manejo de errores en los endpoints REST.
- Asegura que las respuestas de error sean consistentes y útiles para el cliente.

**Entregable:** Manejo centralizado de errores implementado en los endpoints REST.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los diferentes tipos de errores que pueden ocurrir y cómo comunicarlos al cliente.
- Piensa en cómo mantener la consistencia en las respuestas de error.

</details>

### Fase 3: Pruebas unitarias

**Objetivo:** Escribir pruebas unitarias para los endpoints REST y la lógica de negocio.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Identifica los casos de prueba necesarios para los endpoints REST y la lógica de negocio.
- Escribe pruebas unitarias utilizando Jest para asegurar la calidad del código.
- Asegura que las pruebas cubran los casos de éxito y los casos de error.

**Entregable:** Pruebas unitarias escritas y ejecutadas para los endpoints REST y la lógica de negocio.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los diferentes escenarios de prueba, incluyendo casos de éxito y casos de error.
- Piensa en cómo asegurar que las pruebas sean efectivas y cubran todos los casos necesarios.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints REST y cómo se utilizan en una aplicación de gestión de productos?
- **paraQueSirve**: ¿Para qué sirve la validación de entrada en los endpoints REST?
- **comoSeUsa**: ¿Cómo se implementa el manejo centralizado de errores en una aplicación con NestJS y TypeScript?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al implementar endpoints REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de pruebas unitarias para los endpoints REST y la lógica de negocio?

## Criterios de Evaluacion

- Definición correcta de endpoints REST y validación de entrada.
- Implementación de manejo centralizado de errores en los endpoints REST.
- Escritura de pruebas unitarias efectivas para los endpoints REST y la lógica de negocio.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición de endpoints y validación de entrada | Definición de endpoints REST con validación de entrada | — | Los endpoints REST están definidos con sus métodos HTTP y rutas.; Las entradas de los endpoints son validadas según las reglas de negocio. | — | — |
| f1 — Definición de endpoints y validación de entrada | Definición de DTOs con reglas de validación | — | Los endpoints REST están definidos con sus métodos HTTP y rutas.; Las entradas de los endpoints son validadas según las reglas de negocio. | — | — |
| f2 — Manejo centralizado de errores | Implementación de lógica de negocio con persistencia en DynamoDB | — | Los errores de los endpoints son manejados de forma centralizada.; Las respuestas de error siguen un formato consistente. | — | — |
| f3 — Pruebas unitarias | Pruebas unitarias para lógica de negocio y manejo de errores | — | Pruebas unitarias cubren los casos de éxito y error de los endpoints.; Pruebas unitarias validan la lógica de negocio y el manejo de errores. | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Persistencia en DynamoDB | sin ubicar | Verificada |
| Incluir pruebas unitarias con Jest | sin ubicar | Restriccion no verificada en sin ubicar |

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | NestJS, DynamoDB |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **TypeScript**: Tecnologia pedida para este reto: forma parte del stack con el que se resuelve el ejercicio.
- **Node.js con NestJS y TypeScript**: Tecnologia del perfil del candidato: el reto se resuelve con ella.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
