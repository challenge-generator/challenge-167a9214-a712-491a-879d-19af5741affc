# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de CRUD con reglas de negocio y respuestas de error consistentes**.

| | |
|---|---|
| Tema | Diseño de APIs REST con validación y manejo de errores |
| Nivel | junior-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 10 |
| Patron arquitectonico | capas estándar (controller-service-repository) |
| Tiempo estimado | 12 horas |

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

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @nestjs/common 10.4.22
- @nestjs/core 10.4.22
- @nestjs/platform-express 10.4.22
- @nestjs/testing 10.4.22
- class-transformer 0.5.1
- class-validator 0.15.1
- express 5.3.0
- reflect-metadata 0.2.2
- rxjs 7.8.2
- uuid 14.0.3
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3
- jest 29.7.0
- ts-jest 29.2.5
- @types/jest 29.5.14

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Segui el orden de arranque del mapa de componentes (infraestructura local primero) y corre `npm install --no-audit --no-fund && npm run build && docker compose config -q` desde la raiz: mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build && docker compose config -q` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición de endpoints y validación de entrada**: Endpoints REST definidos y validación de entrada implementada.
- **Fase 2 — Manejo centralizado de errores**: Manejo centralizado de errores implementado en los endpoints REST.
- **Fase 3 — Pruebas unitarias**: Pruebas unitarias escritas y ejecutadas para los endpoints REST y la lógica de negocio.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/common/exceptions/validation.exception.ts` — La fase "Definición de endpoints y validación de entrada" se implementa aqui: este archivo es el ejercicio.
- [ ] `src/common/filters/http-exception.filter.ts` — La fase "Manejo centralizado de errores" se implementa aqui: este archivo es el ejercicio.
- [ ] `src/test/unit/orders.service.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición de endpoints y validación de entrada | Definición de endpoints REST con validación de entrada | — | Los endpoints REST están definidos con sus métodos HTTP y rutas.; Las entradas de los endpoints son validadas según las reglas de negocio. | — | — |
| f1 — Definición de endpoints y validación de entrada | Definición de DTOs con reglas de validación | — | Los endpoints REST están definidos con sus métodos HTTP y rutas.; Las entradas de los endpoints son validadas según las reglas de negocio. | — | — |
| f2 — Manejo centralizado de errores | Implementación de lógica de negocio con persistencia en DynamoDB | — | Los errores de los endpoints son manejados de forma centralizada.; Las respuestas de error siguen un formato consistente. | — | — |
| f3 — Pruebas unitarias | Pruebas unitarias para lógica de negocio y manejo de errores | — | Pruebas unitarias cubren los casos de éxito y error de los endpoints.; Pruebas unitarias validan la lógica de negocio y el manejo de errores. | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Persistencia en DynamoDB | sin ubicar | Verificada |
| Incluir pruebas unitarias con Jest | sin ubicar | Restriccion no verificada en sin ubicar |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (18)

- `package.json`
- `tsconfig.json`
- `src/orders/dto/create-product.dto.ts`
- `src/orders/dto/update-product.dto.ts`
- `src/orders/entities/product.entity.ts`
- `src/orders/repositories/order.repository.ts`
- `src/common/exceptions/product-not-found.exception.ts`
- `src/common/exceptions/invalid-product.exception.ts`
- `src/common/exceptions/validation.exception.ts`
- `src/common/filters/http-exception.filter.ts`
- `src/orders/orders.controller.ts`
- `src/orders/orders.service.ts`
- `src/app.module.ts`
- `src/test/unit/orders.service.spec.ts`
- `src/main.ts`
- `docker-compose.yml`
- `infra-local/README.md`
- `infra-local/dynamodb/create-tables.sh`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/orders` (presente)
- `src/orders/dto` (presente)
- `src/orders/entities` (presente)
- `src/orders/repositories` (presente)
- `src/common/exceptions` (presente)
- `src/common/filters` (presente)
- `test/unit` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- Cada componente vive en su carpeta: instala y compila dentro de ella, y no muevas archivos entre componentes.
- Respeta los contratos entre componentes (endpoints, topics) tal como estan declarados en el mapa de componentes.
- El patron es **capas estándar (controller-service-repository)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollo backend, Tecnología Node.js con NestJS y TypeScript, Junior L2
- Brecha que el reto ataca: Construye endpoints REST con validación de entrada, manejo centralizado de errores y pruebas unitarias.
- Mision: Prueba post-despliegue SFN prod 2026-11-19 (backend Node)

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
