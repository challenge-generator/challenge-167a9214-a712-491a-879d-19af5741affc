# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/common/exceptions/validation.exception.ts` — La fase "Definición de endpoints y validación de entrada" se implementa aqui: este archivo es el ejercicio.
- `src/common/filters/http-exception.filter.ts` — La fase "Manejo centralizado de errores" se implementa aqui: este archivo es el ejercicio.
- `src/test/unit/orders.service.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.

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

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollo backend, Tecnología Node.js con NestJS y TypeScript, Junior L2

### Brecha de conocimiento
Construye endpoints REST con validación de entrada, manejo centralizado de errores y pruebas unitarias.

### Misión / candidato
Prueba post-despliegue SFN prod 2026-11-19 (backend Node)

### Reto
- Tema: Diseño de APIs REST con validación y manejo de errores
- Seniority: junior-l2
- Tipo: practical
- Título: Implementación de CRUD con reglas de negocio y respuestas de error consistentes
- Tiempo estimado: 12 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición de endpoints y validación de entrada — objetivo: Definir los endpoints REST y validar las entradas para asegurar la integridad de los datos. — entregable (NO resolver): Endpoints REST definidos y validación de entrada implementada.
- Fase 2: Manejo centralizado de errores — objetivo: Implementar un manejo centralizado de errores para los endpoints REST. — entregable (NO resolver): Manejo centralizado de errores implementado en los endpoints REST.
- Fase 3: Pruebas unitarias — objetivo: Escribir pruebas unitarias para los endpoints REST y la lógica de negocio. — entregable (NO resolver): Pruebas unitarias escritas y ejecutadas para los endpoints REST y la lógica de negocio.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-nest",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@nestjs/common": "10.4.22",
    "@nestjs/core": "10.4.22",
    "@nestjs/platform-express": "10.4.22",
    "@nestjs/testing": "10.4.22",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "express": "5.3.0",
    "reflect-metadata": "0.2.2",
    "rxjs": "7.8.2",
    "uuid": "14.0.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests"
  ]
}

// === ARCHIVO: src/orders/dto/create-product.dto.ts ===
import { IsString, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  stock: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  constructor(name: string, price: number, stock: number, category: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }

  validateInvariants(): void {
    if (this.price < 0) {
      throw new Error('Price cannot be negative');
    }
    if (this.stock < 0 || this.stock > 10000) {
      throw new Error('Stock must be between 0 and 10000');
    }
    if (!this.name || this.name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!this.category || this.category.trim() === '') {
      throw new Error('Category cannot be empty');
    }
  }
}

// === ARCHIVO: src/orders/dto/update-product.dto.ts ===
import { IsString, IsNumber, Min, Max, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(0)
  @Max(10000)
  @IsOptional()
  stock?: number;

  @IsString()
  @IsOptional()
  category?: string;

  constructor(name?: string, price?: number, stock?: number, category?: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
  }

  validateInvariants(): void {
    if (this.price !== undefined && this.price < 0) {
      throw new Error('Price cannot be negative');
    }
    if (this.stock !== undefined && (this.stock < 0 || this.stock > 10000)) {
      throw new Error('Stock must be between 0 and 10000');
    }
    if (this.name !== undefined && (!this.name || this.name.trim() === '')) {
      throw new Error('Name cannot be empty');
    }
    if (this.category !== undefined && (!this.category || this.category.trim() === '')) {
      throw new Error('Category cannot be empty');
    }
  }
}

// === ARCHIVO: src/orders/entities/product.entity.ts ===
import { v4 as uuidv4 } from 'uuid';

export class Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;

  constructor(name: string, price: number, stock: number, category: string, id?: string) {
    this.id = id || uuidv4();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
    this.validateInvariants();
  }

  validateInvariants(): void {
    if (this.price < 0) {
      throw new Error('Price cannot be negative');
    }
    if (this.stock < 0 || this.stock > 10000) {
      throw new Error('Stock must be between 0 and 10000');
    }
    if (!this.name || this.name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!this.category || this.category.trim() === '') {
      throw new Error('Category cannot be empty');
    }
  }

  update(updateData: Partial<Product>): Product {
    if (updateData.name !== undefined) {
      this.name = updateData.name;
    }
    if (updateData.price !== undefined) {
      this.price = updateData.price;
    }
    if (updateData.stock !== undefined) {
      this.stock = updateData.stock;
    }
    if (updateData.category !== undefined) {
      this.category = updateData.category;
    }
    this.validateInvariants();
    return this;
  }
}

// === ARCHIVO: src/orders/repositories/order.repository.ts ===
import { Product } from '../entities/product.entity';

export interface OrderRepository {
  createProduct(product: Product): Promise<Product>;
  findAllProducts(): Promise<Product[]>;
  findProductById(id: string): Promise<Product | null>;
  updateProduct(id: string, product: Partial<Product>): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}

// === ARCHIVO: src/common/exceptions/product-not-found.exception.ts ===
import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotFoundException extends HttpException {
  constructor(id: string) {
    super(`Product with ID ${id} not found`, HttpStatus.NOT_FOUND);
  }

  static forId(id: string): ProductNotFoundException {
    return new ProductNotFoundException(id);
  }
}

// === ARCHIVO: src/common/exceptions/invalid-product.exception.ts ===
import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidProductException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }

  static forInvariantViolation(violation: string): InvalidProductException {
    return new InvalidProductException(`Invalid product: ${violation}`);
  }

  static forMissingFields(fields: string[]): InvalidProductException {
    return new InvalidProductException(`Missing required fields: ${fields.join(', ')}`);
  }

  static forInvalidPrice(): InvalidProductException {
    return new InvalidProductException('Price must be a positive number');
  }

  static forInvalidStock(): InvalidProductException {
    return new InvalidProductException('Stock must be between 0 and 10000');
  }
}

// === ARCHIVO: src/common/exceptions/validation.exception.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { HttpException, HttpStatus } from '@nestjs/common';
import { InvalidProductException } from './invalid-product.exception';
import { ProductNotFoundException } from './product-not-found.exception';

export class ValidationException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }

  static fromValidationErrors(errors: string[]): ValidationException {
    throw new Error('TODO(reto): fromValidationErrors');
  }

  static fromDtoValidation(dtoName: string, errors: string[]): ValidationException {
    throw new Error('TODO(reto): fromDtoValidation');
  }

  static forInvalidProductData(data: unknown): ValidationException {
    throw new Error('TODO(reto): forInvalidProductData');
  }

  static handleProductException(error: unknown): HttpException {
    throw new Error('TODO(reto): handleProductException');
  }

  static validateProductFields(
    name?: string,
    price?: number,
    stock?: number,
    category?: string
  ): void {
    throw new Error('TODO(reto): validateProductFields');
  }

  static validatePartialProductFields(
    name?: string,
    price?: number,
    stock?: number,
    category?: string
  ): void {
    throw new Error('TODO(reto): validatePartialProductFields');
  }
}

// === ARCHIVO: src/common/filters/http-exception.filter.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { InvalidProductException } from '../exceptions/invalid-product.exception';
import { ProductNotFoundException } from '../exceptions/product-not-found.exception';
import { ValidationException } from '../exceptions/validation.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const responseObj = exceptionResponse as Record<string, unknown>;
        message = (responseObj.message as string) || message;
        error = (responseObj.error as string) || error;
      }
    } else if (exception instanceof InvalidProductException) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      error = 'Invalid Product';
    } else if (exception instanceof ProductNotFoundException) {
      status = HttpStatus.NOT_FOUND;
      message = exception.message;
      error = 'Product Not Found';
    } else if (exception instanceof ValidationException) {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      error = 'Validation Error';
    } else if (exception instanceof Error) {
      message = exception.message;
      this.logger.error(
        `Unhandled exception: ${exception.message}`,
        exception.stack
      );
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      error,
      message: Array.isArray(message) ? message : [message],
    };

    this.logger.error(
      `${request.method} ${request.url} - Status: ${status} - Message: ${message}`
    );

    response.status(status).json(errorResponse);
  }

  buildErrorResponse(
    status: HttpStatus,
    error: string,
    message: string | string[],
    request: Request
  ): Record<string, unknown> {
    throw new Error('TODO(reto): buildErrorResponse');
  }

  isHttpException(exception: unknown): exception is HttpException {
    throw new Error('TODO(reto): isHttpException');
  }

  getStatusFromException(exception: unknown): number {
    throw new Error('TODO(reto): getStatusFromException');
  }

  getMessageFromException(exception: unknown): string {
    throw new Error('TODO(reto): getMessageFromException');
  }
}

// === ARCHIVO: src/orders/orders.controller.ts ===
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  UseFilters,
  ParseUUIDPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';
import { ProductNotFoundException } from '../common/exceptions/product-not-found.exception';
import { InvalidProductException } from '../common/exceptions/invalid-product.exception';

@Controller('products')
@UseFilters(HttpExceptionFilter)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    try {
      createProductDto.validateInvariants();
      return await this.ordersService.createProduct(createProductDto);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Price')) {
          throw InvalidProductException.forInvalidPrice();
        }
        if (error.message.includes('Stock')) {
          throw InvalidProductException.forInvalidStock();
        }
        if (error.message.includes('Name') || error.message.includes('Category')) {
          throw InvalidProductException.forInvariantViolation(error.message);
        }
      }
      throw error;
    }
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.ordersService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseUUIDPipe) id: string): Promise<Product> {
    const product = await this.ordersService.getProductById(id);
    if (!product) {
      throw ProductNotFoundException.forId(id);
    }
    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      updateProductDto.validateInvariants();
      const product = await this.ordersService.updateProduct(id, updateProductDto);
      if (!product) {
        throw ProductNotFoundException.forId(id);
      }
      return product;
    } catch (error) {
      if (error instanceof ProductNotFoundException) {
        throw error;
      }
      if (error instanceof Error) {
        if (error.message.includes('Price')) {
          throw InvalidProductException.forInvalidPrice();
        }
        if (error.message.includes('Stock')) {
          throw InvalidProductException.forInvalidStock();
        }
        if (error.message.includes('Name') || error.message.includes('Category')) {
          throw InvalidProductException.forInvariantViolation(error.message);
        }
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const product = await this.ordersService.getProductById(id);
    if (!product) {
      throw ProductNotFoundException.forId(id);
    }
    await this.ordersService.deleteProduct(id);
  }
}

// === ARCHIVO: src/orders/orders.service.ts ===
import { Injectable, Logger, Inject } from '@nestjs/common';
import { OrderRepository } from './repositories/order.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductNotFoundException } from '../common/exceptions/product-not-found.exception';
import { InvalidProductException } from '../common/exceptions/invalid-product.exception';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(@Inject('OrderRepository') private readonly orderRepository: OrderRepository) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    this.logger.log(`Creating product with name: ${createProductDto.name}`);

    try {
      const product = new Product(
        createProductDto.name,
        createProductDto.price,
        createProductDto.stock,
        createProductDto.category,
      );

      const createdProduct = await this.orderRepository.createProduct(product);
      this.logger.log(`Product created successfully with id: ${createdProduct.id}`);
      return createdProduct;
    } catch (error) {
      this.logger.error(`Failed to create product: ${error}`);
      if (error instanceof InvalidProductException) {
        throw error;
      }
      throw InvalidProductException.forInvariantViolation(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  async getProducts(): Promise<Product[]> {
    this.logger.log('Fetching all products');
    const products = await this.orderRepository.findAllProducts();
    this.logger.log(`Found ${products.length} products`);
    return products;
  }

  async getProductById(id: string): Promise<Product | null> {
    this.logger.log(`Fetching product with id: ${id}`);
    const product = await this.orderRepository.findProductById(id);
    if (!product) {
      this.logger.warn(`Product not found with id: ${id}`);
      return null;
    }
    return product;
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product | null> {
    this.logger.log(`Updating product with id: ${id}`);

    const existingProduct = await this.orderRepository.findProductById(id);
    if (!existingProduct) {
      this.logger.warn(`Product not found for update with id: ${id}`);
      return null;
    }

    try {
      const updateData: Partial<Product> = {};
      if (updateProductDto.name !== undefined) {
        updateData.name = updateProductDto.name;
      }
      if (updateProductDto.price !== undefined) {
        updateData.price = updateProductDto.price;
      }
      if (updateProductDto.stock !== undefined) {
        updateData.stock = updateProductDto.stock;
      }
      if (updateProductDto.category !== undefined) {
        updateData.category = updateProductDto.category;
      }

      const updatedProduct = await this.orderRepository.updateProduct(id, updateData);
      this.logger.log(`Product updated successfully with id: ${updatedProduct.id}`);
      return updatedProduct;
    } catch (error) {
      this.logger.error(`Failed to update product: ${error}`);
      if (error instanceof InvalidProductException) {
        throw error;
      }
      throw InvalidProductException.forInvariantViolation(
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  async deleteProduct(id: string): Promise<void> {
    this.logger.log(`Deleting product with id: ${id}`);
    await this.orderRepository.deleteProduct(id);
    this.logger.log(`Product deleted successfully with id: ${id}`);
  }
}

// === ARCHIVO: src/app.module.ts ===
import { Module } from '@nestjs/common';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'OrderRepository',
      useValue: {
        createProduct: jest.fn(),
        findAllProducts: jest.fn(),
        findProductById: jest.fn(),
        updateProduct: jest.fn(),
        deleteProduct: jest.fn(),
      },
    },
  ],
})
export class AppModule {}

// === ARCHIVO: src/test/unit/orders.service.spec.ts ===
import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../../orders/orders.service';
import { Product } from '../../orders/entities/product.entity';
import { CreateProductDto } from '../../orders/dto/create-product.dto';

describe('OrdersService', () => {
  let service: OrdersService;
  let repository: {
    createProduct: jest.Mock;
    findAllProducts: jest.Mock;
    findProductById: jest.Mock;
    updateProduct: jest.Mock;
    deleteProduct: jest.Mock;
  };

  beforeEach(async () => {
    const mockRepository = {
      createProduct: jest.fn(),
      findAllProducts: jest.fn(),
      findProductById: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: 'OrderRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    repository = module.get('OrderRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createProduct', () => {
    it.todo('TODO(reto): should create a product and return it');
    it.todo('TODO(reto): should throw ValidationException when DTO is invalid');
  });

  describe('getProducts', () => {
    it.todo('TODO(reto): should return all products');
    it.todo('TODO(reto): should return empty array when no products exist');
  });

  describe('getProductById', () => {
    it.todo('TODO(reto): should return product when found');
    it.todo('TODO(reto): should throw ProductNotFoundException when not found');
  });

  describe('updateProduct', () => {
    it.todo('TODO(reto): should update and return product');
    it.todo('TODO(reto): should throw ProductNotFoundException when not found');
    it.todo('TODO(reto): should throw ValidationException when update data is invalid');
  });

  describe('deleteProduct', () => {
    it.todo('TODO(reto): should delete product successfully');
    it.todo('TODO(reto): should throw ProductNotFoundException when not found');
  });
});

// === ARCHIVO: src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"

```
