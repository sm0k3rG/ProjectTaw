
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Direccion
 * 
 */
export type Direccion = $Result.DefaultSelection<Prisma.$DireccionPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model LineaDePedido
 * 
 */
export type LineaDePedido = $Result.DefaultSelection<Prisma.$LineaDePedidoPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Oferta
 * 
 */
export type Oferta = $Result.DefaultSelection<Prisma.$OfertaPayload>
/**
 * Model Sucursal
 * 
 */
export type Sucursal = $Result.DefaultSelection<Prisma.$SucursalPayload>
/**
 * Model ProductoSucursal
 * 
 */
export type ProductoSucursal = $Result.DefaultSelection<Prisma.$ProductoSucursalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **Direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.DireccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lineaDePedido`: Exposes CRUD operations for the **LineaDePedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineaDePedidos
    * const lineaDePedidos = await prisma.lineaDePedido.findMany()
    * ```
    */
  get lineaDePedido(): Prisma.LineaDePedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oferta`: Exposes CRUD operations for the **Oferta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ofertas
    * const ofertas = await prisma.oferta.findMany()
    * ```
    */
  get oferta(): Prisma.OfertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sucursal`: Exposes CRUD operations for the **Sucursal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sucursals
    * const sucursals = await prisma.sucursal.findMany()
    * ```
    */
  get sucursal(): Prisma.SucursalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productoSucursal`: Exposes CRUD operations for the **ProductoSucursal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductoSucursals
    * const productoSucursals = await prisma.productoSucursal.findMany()
    * ```
    */
  get productoSucursal(): Prisma.ProductoSucursalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Direccion: 'Direccion',
    Pedido: 'Pedido',
    LineaDePedido: 'LineaDePedido',
    Producto: 'Producto',
    Categoria: 'Categoria',
    Oferta: 'Oferta',
    Sucursal: 'Sucursal',
    ProductoSucursal: 'ProductoSucursal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "direccion" | "pedido" | "lineaDePedido" | "producto" | "categoria" | "oferta" | "sucursal" | "productoSucursal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Direccion: {
        payload: Prisma.$DireccionPayload<ExtArgs>
        fields: Prisma.DireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findFirst: {
            args: Prisma.DireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findMany: {
            args: Prisma.DireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          create: {
            args: Prisma.DireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          createMany: {
            args: Prisma.DireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          update: {
            args: Prisma.DireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          deleteMany: {
            args: Prisma.DireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.DireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      LineaDePedido: {
        payload: Prisma.$LineaDePedidoPayload<ExtArgs>
        fields: Prisma.LineaDePedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineaDePedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineaDePedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>
          }
          findFirst: {
            args: Prisma.LineaDePedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineaDePedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>
          }
          findMany: {
            args: Prisma.LineaDePedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>[]
          }
          create: {
            args: Prisma.LineaDePedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>
          }
          createMany: {
            args: Prisma.LineaDePedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LineaDePedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>
          }
          update: {
            args: Prisma.LineaDePedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>
          }
          deleteMany: {
            args: Prisma.LineaDePedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineaDePedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LineaDePedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDePedidoPayload>
          }
          aggregate: {
            args: Prisma.LineaDePedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLineaDePedido>
          }
          groupBy: {
            args: Prisma.LineaDePedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineaDePedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineaDePedidoCountArgs<ExtArgs>
            result: $Utils.Optional<LineaDePedidoCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Oferta: {
        payload: Prisma.$OfertaPayload<ExtArgs>
        fields: Prisma.OfertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>
          }
          findFirst: {
            args: Prisma.OfertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>
          }
          findMany: {
            args: Prisma.OfertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>[]
          }
          create: {
            args: Prisma.OfertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>
          }
          createMany: {
            args: Prisma.OfertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OfertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>
          }
          update: {
            args: Prisma.OfertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>
          }
          deleteMany: {
            args: Prisma.OfertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfertaPayload>
          }
          aggregate: {
            args: Prisma.OfertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOferta>
          }
          groupBy: {
            args: Prisma.OfertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfertaCountArgs<ExtArgs>
            result: $Utils.Optional<OfertaCountAggregateOutputType> | number
          }
        }
      }
      Sucursal: {
        payload: Prisma.$SucursalPayload<ExtArgs>
        fields: Prisma.SucursalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SucursalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SucursalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          findFirst: {
            args: Prisma.SucursalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SucursalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          findMany: {
            args: Prisma.SucursalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>[]
          }
          create: {
            args: Prisma.SucursalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          createMany: {
            args: Prisma.SucursalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SucursalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          update: {
            args: Prisma.SucursalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          deleteMany: {
            args: Prisma.SucursalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SucursalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SucursalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          aggregate: {
            args: Prisma.SucursalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSucursal>
          }
          groupBy: {
            args: Prisma.SucursalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SucursalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SucursalCountArgs<ExtArgs>
            result: $Utils.Optional<SucursalCountAggregateOutputType> | number
          }
        }
      }
      ProductoSucursal: {
        payload: Prisma.$ProductoSucursalPayload<ExtArgs>
        fields: Prisma.ProductoSucursalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoSucursalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoSucursalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>
          }
          findFirst: {
            args: Prisma.ProductoSucursalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoSucursalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>
          }
          findMany: {
            args: Prisma.ProductoSucursalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>[]
          }
          create: {
            args: Prisma.ProductoSucursalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>
          }
          createMany: {
            args: Prisma.ProductoSucursalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoSucursalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>
          }
          update: {
            args: Prisma.ProductoSucursalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>
          }
          deleteMany: {
            args: Prisma.ProductoSucursalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoSucursalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoSucursalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoSucursalPayload>
          }
          aggregate: {
            args: Prisma.ProductoSucursalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductoSucursal>
          }
          groupBy: {
            args: Prisma.ProductoSucursalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoSucursalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoSucursalCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoSucursalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    direccion?: DireccionOmit
    pedido?: PedidoOmit
    lineaDePedido?: LineaDePedidoOmit
    producto?: ProductoOmit
    categoria?: CategoriaOmit
    oferta?: OfertaOmit
    sucursal?: SucursalOmit
    productoSucursal?: ProductoSucursalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    direccion: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | UsuarioCountOutputTypeCountDireccionArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDireccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type DireccionCountOutputType
   */

  export type DireccionCountOutputType = {
    pedidos: number
  }

  export type DireccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | DireccionCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DireccionCountOutputType
     */
    select?: DireccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    lineasDePedido: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineasDePedido?: boolean | PedidoCountOutputTypeCountLineasDePedidoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountLineasDePedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaDePedidoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    sucursales: number
    lineasDePedido: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursales?: boolean | ProductoCountOutputTypeCountSucursalesArgs
    lineasDePedido?: boolean | ProductoCountOutputTypeCountLineasDePedidoArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountSucursalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoSucursalWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountLineasDePedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaDePedidoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type SucursalCountOutputType
   */

  export type SucursalCountOutputType = {
    productos: number
  }

  export type SucursalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | SucursalCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SucursalCountOutputType
     */
    select?: SucursalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoSucursalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    telefono: string | null
    tarjetas: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contrasena: string | null
    telefono: string | null
    tarjetas: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    contrasena: number
    telefono: number
    tarjetas: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrasena?: true
    telefono?: true
    tarjetas?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrasena?: true
    telefono?: true
    tarjetas?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrasena?: true
    telefono?: true
    tarjetas?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    telefono?: boolean
    tarjetas?: boolean
    direccion?: boolean | Usuario$direccionArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrasena?: boolean
    telefono?: boolean
    tarjetas?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "contrasena" | "telefono" | "tarjetas", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | Usuario$direccionArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      direccion: Prisma.$DireccionPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      contrasena: string
      telefono: string
      tarjetas: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direccion<T extends Usuario$direccionArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$direccionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly tarjetas: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.direccion
   */
  export type Usuario$direccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    usuarioId: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id: number | null
    numero: number | null
    usuarioId: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id: number | null
    comuna: string | null
    region: string | null
    numero: number | null
    calle: string | null
    usuarioId: number | null
  }

  export type DireccionMaxAggregateOutputType = {
    id: number | null
    comuna: string | null
    region: string | null
    numero: number | null
    calle: string | null
    usuarioId: number | null
  }

  export type DireccionCountAggregateOutputType = {
    id: number
    comuna: number
    region: number
    numero: number
    calle: number
    usuarioId: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id?: true
    numero?: true
    usuarioId?: true
  }

  export type DireccionSumAggregateInputType = {
    id?: true
    numero?: true
    usuarioId?: true
  }

  export type DireccionMinAggregateInputType = {
    id?: true
    comuna?: true
    region?: true
    numero?: true
    calle?: true
    usuarioId?: true
  }

  export type DireccionMaxAggregateInputType = {
    id?: true
    comuna?: true
    region?: true
    numero?: true
    calle?: true
    usuarioId?: true
  }

  export type DireccionCountAggregateInputType = {
    id?: true
    comuna?: true
    region?: true
    numero?: true
    calle?: true
    usuarioId?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccion to aggregate.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type DireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithAggregationInput | DireccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: DireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id: number
    comuna: string
    region: string
    numero: number
    calle: string
    usuarioId: number
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type DireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comuna?: boolean
    region?: boolean
    numero?: boolean
    calle?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pedidos?: boolean | Direccion$pedidosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>



  export type DireccionSelectScalar = {
    id?: boolean
    comuna?: boolean
    region?: boolean
    numero?: boolean
    calle?: boolean
    usuarioId?: boolean
  }

  export type DireccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comuna" | "region" | "numero" | "calle" | "usuarioId", ExtArgs["result"]["direccion"]>
  export type DireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    pedidos?: boolean | Direccion$pedidosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direccion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comuna: string
      region: string
      numero: number
      calle: string
      usuarioId: number
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = $Result.GetResult<Prisma.$DireccionPayload, S>

  type DireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface DireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direccion'], meta: { name: 'Direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {DireccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionFindUniqueArgs>(args: SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DireccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionFindFirstArgs>(args?: SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionWithIdOnly = await prisma.direccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DireccionFindManyArgs>(args?: SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direccion.
     * @param {DireccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends DireccionCreateArgs>(args: SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direccions.
     * @param {DireccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionCreateManyArgs>(args?: SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Direccion.
     * @param {DireccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends DireccionDeleteArgs>(args: SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direccion.
     * @param {DireccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionUpdateArgs>(args: SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direccions.
     * @param {DireccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionDeleteManyArgs>(args?: SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionUpdateManyArgs>(args: SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Direccion.
     * @param {DireccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends DireccionUpsertArgs>(args: SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends DireccionCountArgs>(
      args?: Subset<T, DireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionGroupByArgs['orderBy'] }
        : { orderBy?: DireccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direccion model
   */
  readonly fields: DireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Direccion$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Direccion$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Direccion model
   */
  interface DireccionFieldRefs {
    readonly id: FieldRef<"Direccion", 'Int'>
    readonly comuna: FieldRef<"Direccion", 'String'>
    readonly region: FieldRef<"Direccion", 'String'>
    readonly numero: FieldRef<"Direccion", 'Int'>
    readonly calle: FieldRef<"Direccion", 'String'>
    readonly usuarioId: FieldRef<"Direccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Direccion findUnique
   */
  export type DireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findUniqueOrThrow
   */
  export type DireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findFirst
   */
  export type DireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findFirstOrThrow
   */
  export type DireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findMany
   */
  export type DireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccions to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion create
   */
  export type DireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direccion.
     */
    data: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
  }

  /**
   * Direccion createMany
   */
  export type DireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion update
   */
  export type DireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direccion.
     */
    data: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
    /**
     * Choose, which Direccion to update.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion updateMany
   */
  export type DireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
  }

  /**
   * Direccion upsert
   */
  export type DireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direccion to update in case it exists.
     */
    where: DireccionWhereUniqueInput
    /**
     * In case the Direccion found by the `where` argument doesn't exist, create a new Direccion with this data.
     */
    create: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
    /**
     * In case the Direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
  }

  /**
   * Direccion delete
   */
  export type DireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter which Direccion to delete.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion deleteMany
   */
  export type DireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccions to delete
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to delete.
     */
    limit?: number
  }

  /**
   * Direccion.pedidos
   */
  export type Direccion$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Direccion without action
   */
  export type DireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    direccionId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    direccionId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    fechaPedido: Date | null
    estado: string | null
    usuarioId: number | null
    direccionId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    fechaPedido: Date | null
    estado: string | null
    usuarioId: number | null
    direccionId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    fechaPedido: number
    estado: number
    usuarioId: number
    direccionId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    fechaPedido?: true
    estado?: true
    usuarioId?: true
    direccionId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    fechaPedido?: true
    estado?: true
    usuarioId?: true
    direccionId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    fechaPedido?: true
    estado?: true
    usuarioId?: true
    direccionId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    fechaPedido: Date
    estado: string
    usuarioId: number
    direccionId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaPedido?: boolean
    estado?: boolean
    usuarioId?: boolean
    direccionId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    lineasDePedido?: boolean | Pedido$lineasDePedidoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    fechaPedido?: boolean
    estado?: boolean
    usuarioId?: boolean
    direccionId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaPedido" | "estado" | "usuarioId" | "direccionId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    lineasDePedido?: boolean | Pedido$lineasDePedidoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      direccion: Prisma.$DireccionPayload<ExtArgs>
      lineasDePedido: Prisma.$LineaDePedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaPedido: Date
      estado: string
      usuarioId: number
      direccionId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direccion<T extends DireccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DireccionDefaultArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lineasDePedido<T extends Pedido$lineasDePedidoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$lineasDePedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly fechaPedido: FieldRef<"Pedido", 'DateTime'>
    readonly estado: FieldRef<"Pedido", 'String'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly direccionId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.lineasDePedido
   */
  export type Pedido$lineasDePedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    where?: LineaDePedidoWhereInput
    orderBy?: LineaDePedidoOrderByWithRelationInput | LineaDePedidoOrderByWithRelationInput[]
    cursor?: LineaDePedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaDePedidoScalarFieldEnum | LineaDePedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model LineaDePedido
   */

  export type AggregateLineaDePedido = {
    _count: LineaDePedidoCountAggregateOutputType | null
    _avg: LineaDePedidoAvgAggregateOutputType | null
    _sum: LineaDePedidoSumAggregateOutputType | null
    _min: LineaDePedidoMinAggregateOutputType | null
    _max: LineaDePedidoMaxAggregateOutputType | null
  }

  export type LineaDePedidoAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    productoId: number | null
    pedidoId: number | null
  }

  export type LineaDePedidoSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    productoId: number | null
    pedidoId: number | null
  }

  export type LineaDePedidoMinAggregateOutputType = {
    id: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    productoId: number | null
    pedidoId: number | null
  }

  export type LineaDePedidoMaxAggregateOutputType = {
    id: number | null
    cantidad: number | null
    precioUnitario: number | null
    total: number | null
    productoId: number | null
    pedidoId: number | null
  }

  export type LineaDePedidoCountAggregateOutputType = {
    id: number
    cantidad: number
    precioUnitario: number
    total: number
    productoId: number
    pedidoId: number
    _all: number
  }


  export type LineaDePedidoAvgAggregateInputType = {
    id?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    productoId?: true
    pedidoId?: true
  }

  export type LineaDePedidoSumAggregateInputType = {
    id?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    productoId?: true
    pedidoId?: true
  }

  export type LineaDePedidoMinAggregateInputType = {
    id?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    productoId?: true
    pedidoId?: true
  }

  export type LineaDePedidoMaxAggregateInputType = {
    id?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    productoId?: true
    pedidoId?: true
  }

  export type LineaDePedidoCountAggregateInputType = {
    id?: true
    cantidad?: true
    precioUnitario?: true
    total?: true
    productoId?: true
    pedidoId?: true
    _all?: true
  }

  export type LineaDePedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaDePedido to aggregate.
     */
    where?: LineaDePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDePedidos to fetch.
     */
    orderBy?: LineaDePedidoOrderByWithRelationInput | LineaDePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineaDePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineaDePedidos
    **/
    _count?: true | LineaDePedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineaDePedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineaDePedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineaDePedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineaDePedidoMaxAggregateInputType
  }

  export type GetLineaDePedidoAggregateType<T extends LineaDePedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateLineaDePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineaDePedido[P]>
      : GetScalarType<T[P], AggregateLineaDePedido[P]>
  }




  export type LineaDePedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaDePedidoWhereInput
    orderBy?: LineaDePedidoOrderByWithAggregationInput | LineaDePedidoOrderByWithAggregationInput[]
    by: LineaDePedidoScalarFieldEnum[] | LineaDePedidoScalarFieldEnum
    having?: LineaDePedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineaDePedidoCountAggregateInputType | true
    _avg?: LineaDePedidoAvgAggregateInputType
    _sum?: LineaDePedidoSumAggregateInputType
    _min?: LineaDePedidoMinAggregateInputType
    _max?: LineaDePedidoMaxAggregateInputType
  }

  export type LineaDePedidoGroupByOutputType = {
    id: number
    cantidad: number
    precioUnitario: number
    total: number
    productoId: number
    pedidoId: number
    _count: LineaDePedidoCountAggregateOutputType | null
    _avg: LineaDePedidoAvgAggregateOutputType | null
    _sum: LineaDePedidoSumAggregateOutputType | null
    _min: LineaDePedidoMinAggregateOutputType | null
    _max: LineaDePedidoMaxAggregateOutputType | null
  }

  type GetLineaDePedidoGroupByPayload<T extends LineaDePedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineaDePedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineaDePedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineaDePedidoGroupByOutputType[P]>
            : GetScalarType<T[P], LineaDePedidoGroupByOutputType[P]>
        }
      >
    >


  export type LineaDePedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    total?: boolean
    productoId?: boolean
    pedidoId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineaDePedido"]>



  export type LineaDePedidoSelectScalar = {
    id?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    total?: boolean
    productoId?: boolean
    pedidoId?: boolean
  }

  export type LineaDePedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cantidad" | "precioUnitario" | "total" | "productoId" | "pedidoId", ExtArgs["result"]["lineaDePedido"]>
  export type LineaDePedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $LineaDePedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineaDePedido"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cantidad: number
      precioUnitario: number
      total: number
      productoId: number
      pedidoId: number
    }, ExtArgs["result"]["lineaDePedido"]>
    composites: {}
  }

  type LineaDePedidoGetPayload<S extends boolean | null | undefined | LineaDePedidoDefaultArgs> = $Result.GetResult<Prisma.$LineaDePedidoPayload, S>

  type LineaDePedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineaDePedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineaDePedidoCountAggregateInputType | true
    }

  export interface LineaDePedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineaDePedido'], meta: { name: 'LineaDePedido' } }
    /**
     * Find zero or one LineaDePedido that matches the filter.
     * @param {LineaDePedidoFindUniqueArgs} args - Arguments to find a LineaDePedido
     * @example
     * // Get one LineaDePedido
     * const lineaDePedido = await prisma.lineaDePedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineaDePedidoFindUniqueArgs>(args: SelectSubset<T, LineaDePedidoFindUniqueArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LineaDePedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineaDePedidoFindUniqueOrThrowArgs} args - Arguments to find a LineaDePedido
     * @example
     * // Get one LineaDePedido
     * const lineaDePedido = await prisma.lineaDePedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineaDePedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, LineaDePedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaDePedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoFindFirstArgs} args - Arguments to find a LineaDePedido
     * @example
     * // Get one LineaDePedido
     * const lineaDePedido = await prisma.lineaDePedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineaDePedidoFindFirstArgs>(args?: SelectSubset<T, LineaDePedidoFindFirstArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaDePedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoFindFirstOrThrowArgs} args - Arguments to find a LineaDePedido
     * @example
     * // Get one LineaDePedido
     * const lineaDePedido = await prisma.lineaDePedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineaDePedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, LineaDePedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LineaDePedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineaDePedidos
     * const lineaDePedidos = await prisma.lineaDePedido.findMany()
     * 
     * // Get first 10 LineaDePedidos
     * const lineaDePedidos = await prisma.lineaDePedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineaDePedidoWithIdOnly = await prisma.lineaDePedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineaDePedidoFindManyArgs>(args?: SelectSubset<T, LineaDePedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LineaDePedido.
     * @param {LineaDePedidoCreateArgs} args - Arguments to create a LineaDePedido.
     * @example
     * // Create one LineaDePedido
     * const LineaDePedido = await prisma.lineaDePedido.create({
     *   data: {
     *     // ... data to create a LineaDePedido
     *   }
     * })
     * 
     */
    create<T extends LineaDePedidoCreateArgs>(args: SelectSubset<T, LineaDePedidoCreateArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LineaDePedidos.
     * @param {LineaDePedidoCreateManyArgs} args - Arguments to create many LineaDePedidos.
     * @example
     * // Create many LineaDePedidos
     * const lineaDePedido = await prisma.lineaDePedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineaDePedidoCreateManyArgs>(args?: SelectSubset<T, LineaDePedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LineaDePedido.
     * @param {LineaDePedidoDeleteArgs} args - Arguments to delete one LineaDePedido.
     * @example
     * // Delete one LineaDePedido
     * const LineaDePedido = await prisma.lineaDePedido.delete({
     *   where: {
     *     // ... filter to delete one LineaDePedido
     *   }
     * })
     * 
     */
    delete<T extends LineaDePedidoDeleteArgs>(args: SelectSubset<T, LineaDePedidoDeleteArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LineaDePedido.
     * @param {LineaDePedidoUpdateArgs} args - Arguments to update one LineaDePedido.
     * @example
     * // Update one LineaDePedido
     * const lineaDePedido = await prisma.lineaDePedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineaDePedidoUpdateArgs>(args: SelectSubset<T, LineaDePedidoUpdateArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LineaDePedidos.
     * @param {LineaDePedidoDeleteManyArgs} args - Arguments to filter LineaDePedidos to delete.
     * @example
     * // Delete a few LineaDePedidos
     * const { count } = await prisma.lineaDePedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineaDePedidoDeleteManyArgs>(args?: SelectSubset<T, LineaDePedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineaDePedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineaDePedidos
     * const lineaDePedido = await prisma.lineaDePedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineaDePedidoUpdateManyArgs>(args: SelectSubset<T, LineaDePedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LineaDePedido.
     * @param {LineaDePedidoUpsertArgs} args - Arguments to update or create a LineaDePedido.
     * @example
     * // Update or create a LineaDePedido
     * const lineaDePedido = await prisma.lineaDePedido.upsert({
     *   create: {
     *     // ... data to create a LineaDePedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineaDePedido we want to update
     *   }
     * })
     */
    upsert<T extends LineaDePedidoUpsertArgs>(args: SelectSubset<T, LineaDePedidoUpsertArgs<ExtArgs>>): Prisma__LineaDePedidoClient<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LineaDePedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoCountArgs} args - Arguments to filter LineaDePedidos to count.
     * @example
     * // Count the number of LineaDePedidos
     * const count = await prisma.lineaDePedido.count({
     *   where: {
     *     // ... the filter for the LineaDePedidos we want to count
     *   }
     * })
    **/
    count<T extends LineaDePedidoCountArgs>(
      args?: Subset<T, LineaDePedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineaDePedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineaDePedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineaDePedidoAggregateArgs>(args: Subset<T, LineaDePedidoAggregateArgs>): Prisma.PrismaPromise<GetLineaDePedidoAggregateType<T>>

    /**
     * Group by LineaDePedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDePedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineaDePedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineaDePedidoGroupByArgs['orderBy'] }
        : { orderBy?: LineaDePedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineaDePedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineaDePedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineaDePedido model
   */
  readonly fields: LineaDePedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineaDePedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineaDePedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LineaDePedido model
   */
  interface LineaDePedidoFieldRefs {
    readonly id: FieldRef<"LineaDePedido", 'Int'>
    readonly cantidad: FieldRef<"LineaDePedido", 'Int'>
    readonly precioUnitario: FieldRef<"LineaDePedido", 'Float'>
    readonly total: FieldRef<"LineaDePedido", 'Float'>
    readonly productoId: FieldRef<"LineaDePedido", 'Int'>
    readonly pedidoId: FieldRef<"LineaDePedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LineaDePedido findUnique
   */
  export type LineaDePedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * Filter, which LineaDePedido to fetch.
     */
    where: LineaDePedidoWhereUniqueInput
  }

  /**
   * LineaDePedido findUniqueOrThrow
   */
  export type LineaDePedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * Filter, which LineaDePedido to fetch.
     */
    where: LineaDePedidoWhereUniqueInput
  }

  /**
   * LineaDePedido findFirst
   */
  export type LineaDePedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * Filter, which LineaDePedido to fetch.
     */
    where?: LineaDePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDePedidos to fetch.
     */
    orderBy?: LineaDePedidoOrderByWithRelationInput | LineaDePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaDePedidos.
     */
    cursor?: LineaDePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaDePedidos.
     */
    distinct?: LineaDePedidoScalarFieldEnum | LineaDePedidoScalarFieldEnum[]
  }

  /**
   * LineaDePedido findFirstOrThrow
   */
  export type LineaDePedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * Filter, which LineaDePedido to fetch.
     */
    where?: LineaDePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDePedidos to fetch.
     */
    orderBy?: LineaDePedidoOrderByWithRelationInput | LineaDePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaDePedidos.
     */
    cursor?: LineaDePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaDePedidos.
     */
    distinct?: LineaDePedidoScalarFieldEnum | LineaDePedidoScalarFieldEnum[]
  }

  /**
   * LineaDePedido findMany
   */
  export type LineaDePedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * Filter, which LineaDePedidos to fetch.
     */
    where?: LineaDePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDePedidos to fetch.
     */
    orderBy?: LineaDePedidoOrderByWithRelationInput | LineaDePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineaDePedidos.
     */
    cursor?: LineaDePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDePedidos.
     */
    skip?: number
    distinct?: LineaDePedidoScalarFieldEnum | LineaDePedidoScalarFieldEnum[]
  }

  /**
   * LineaDePedido create
   */
  export type LineaDePedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a LineaDePedido.
     */
    data: XOR<LineaDePedidoCreateInput, LineaDePedidoUncheckedCreateInput>
  }

  /**
   * LineaDePedido createMany
   */
  export type LineaDePedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineaDePedidos.
     */
    data: LineaDePedidoCreateManyInput | LineaDePedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LineaDePedido update
   */
  export type LineaDePedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a LineaDePedido.
     */
    data: XOR<LineaDePedidoUpdateInput, LineaDePedidoUncheckedUpdateInput>
    /**
     * Choose, which LineaDePedido to update.
     */
    where: LineaDePedidoWhereUniqueInput
  }

  /**
   * LineaDePedido updateMany
   */
  export type LineaDePedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineaDePedidos.
     */
    data: XOR<LineaDePedidoUpdateManyMutationInput, LineaDePedidoUncheckedUpdateManyInput>
    /**
     * Filter which LineaDePedidos to update
     */
    where?: LineaDePedidoWhereInput
    /**
     * Limit how many LineaDePedidos to update.
     */
    limit?: number
  }

  /**
   * LineaDePedido upsert
   */
  export type LineaDePedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the LineaDePedido to update in case it exists.
     */
    where: LineaDePedidoWhereUniqueInput
    /**
     * In case the LineaDePedido found by the `where` argument doesn't exist, create a new LineaDePedido with this data.
     */
    create: XOR<LineaDePedidoCreateInput, LineaDePedidoUncheckedCreateInput>
    /**
     * In case the LineaDePedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineaDePedidoUpdateInput, LineaDePedidoUncheckedUpdateInput>
  }

  /**
   * LineaDePedido delete
   */
  export type LineaDePedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    /**
     * Filter which LineaDePedido to delete.
     */
    where: LineaDePedidoWhereUniqueInput
  }

  /**
   * LineaDePedido deleteMany
   */
  export type LineaDePedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaDePedidos to delete
     */
    where?: LineaDePedidoWhereInput
    /**
     * Limit how many LineaDePedidos to delete.
     */
    limit?: number
  }

  /**
   * LineaDePedido without action
   */
  export type LineaDePedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    categoriaId: number | null
    ofertaId: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    categoriaId: number | null
    ofertaId: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    categoriaId: number | null
    ofertaId: number | null
    imagenUrl: string | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    categoriaId: number | null
    ofertaId: number | null
    imagenUrl: string | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    categoriaId: number
    ofertaId: number
    imagenUrl: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    categoriaId?: true
    ofertaId?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    categoriaId?: true
    ofertaId?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoriaId?: true
    ofertaId?: true
    imagenUrl?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoriaId?: true
    ofertaId?: true
    imagenUrl?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    categoriaId?: true
    ofertaId?: true
    imagenUrl?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    categoriaId: number
    ofertaId: number | null
    imagenUrl: string | null
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoriaId?: boolean
    ofertaId?: boolean
    imagenUrl?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    oferta?: boolean | Producto$ofertaArgs<ExtArgs>
    sucursales?: boolean | Producto$sucursalesArgs<ExtArgs>
    lineasDePedido?: boolean | Producto$lineasDePedidoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    categoriaId?: boolean
    ofertaId?: boolean
    imagenUrl?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "categoriaId" | "ofertaId" | "imagenUrl", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    oferta?: boolean | Producto$ofertaArgs<ExtArgs>
    sucursales?: boolean | Producto$sucursalesArgs<ExtArgs>
    lineasDePedido?: boolean | Producto$lineasDePedidoArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      oferta: Prisma.$OfertaPayload<ExtArgs> | null
      sucursales: Prisma.$ProductoSucursalPayload<ExtArgs>[]
      lineasDePedido: Prisma.$LineaDePedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: number
      categoriaId: number
      ofertaId: number | null
      imagenUrl: string | null
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    oferta<T extends Producto$ofertaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$ofertaArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sucursales<T extends Producto$sucursalesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$sucursalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lineasDePedido<T extends Producto$lineasDePedidoArgs<ExtArgs> = {}>(args?: Subset<T, Producto$lineasDePedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaDePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Float'>
    readonly categoriaId: FieldRef<"Producto", 'Int'>
    readonly ofertaId: FieldRef<"Producto", 'Int'>
    readonly imagenUrl: FieldRef<"Producto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.oferta
   */
  export type Producto$ofertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    where?: OfertaWhereInput
  }

  /**
   * Producto.sucursales
   */
  export type Producto$sucursalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    where?: ProductoSucursalWhereInput
    orderBy?: ProductoSucursalOrderByWithRelationInput | ProductoSucursalOrderByWithRelationInput[]
    cursor?: ProductoSucursalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoSucursalScalarFieldEnum | ProductoSucursalScalarFieldEnum[]
  }

  /**
   * Producto.lineasDePedido
   */
  export type Producto$lineasDePedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDePedido
     */
    select?: LineaDePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDePedido
     */
    omit?: LineaDePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDePedidoInclude<ExtArgs> | null
    where?: LineaDePedidoWhereInput
    orderBy?: LineaDePedidoOrderByWithRelationInput | LineaDePedidoOrderByWithRelationInput[]
    cursor?: LineaDePedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaDePedidoScalarFieldEnum | LineaDePedidoScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    estado: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    estado: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    estado: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    estado?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    estado?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    estado?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    estado: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estado?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    estado?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "estado", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      estado: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly estado: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Oferta
   */

  export type AggregateOferta = {
    _count: OfertaCountAggregateOutputType | null
    _avg: OfertaAvgAggregateOutputType | null
    _sum: OfertaSumAggregateOutputType | null
    _min: OfertaMinAggregateOutputType | null
    _max: OfertaMaxAggregateOutputType | null
  }

  export type OfertaAvgAggregateOutputType = {
    id: number | null
    porcentaje: number | null
    productoId: number | null
  }

  export type OfertaSumAggregateOutputType = {
    id: number | null
    porcentaje: number | null
    productoId: number | null
  }

  export type OfertaMinAggregateOutputType = {
    id: number | null
    porcentaje: number | null
    descripcion: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: string | null
    productoId: number | null
  }

  export type OfertaMaxAggregateOutputType = {
    id: number | null
    porcentaje: number | null
    descripcion: string | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: string | null
    productoId: number | null
  }

  export type OfertaCountAggregateOutputType = {
    id: number
    porcentaje: number
    descripcion: number
    fechaInicio: number
    fechaFin: number
    estado: number
    productoId: number
    _all: number
  }


  export type OfertaAvgAggregateInputType = {
    id?: true
    porcentaje?: true
    productoId?: true
  }

  export type OfertaSumAggregateInputType = {
    id?: true
    porcentaje?: true
    productoId?: true
  }

  export type OfertaMinAggregateInputType = {
    id?: true
    porcentaje?: true
    descripcion?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    productoId?: true
  }

  export type OfertaMaxAggregateInputType = {
    id?: true
    porcentaje?: true
    descripcion?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    productoId?: true
  }

  export type OfertaCountAggregateInputType = {
    id?: true
    porcentaje?: true
    descripcion?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    productoId?: true
    _all?: true
  }

  export type OfertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oferta to aggregate.
     */
    where?: OfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ofertas to fetch.
     */
    orderBy?: OfertaOrderByWithRelationInput | OfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ofertas
    **/
    _count?: true | OfertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfertaMaxAggregateInputType
  }

  export type GetOfertaAggregateType<T extends OfertaAggregateArgs> = {
        [P in keyof T & keyof AggregateOferta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOferta[P]>
      : GetScalarType<T[P], AggregateOferta[P]>
  }




  export type OfertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfertaWhereInput
    orderBy?: OfertaOrderByWithAggregationInput | OfertaOrderByWithAggregationInput[]
    by: OfertaScalarFieldEnum[] | OfertaScalarFieldEnum
    having?: OfertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfertaCountAggregateInputType | true
    _avg?: OfertaAvgAggregateInputType
    _sum?: OfertaSumAggregateInputType
    _min?: OfertaMinAggregateInputType
    _max?: OfertaMaxAggregateInputType
  }

  export type OfertaGroupByOutputType = {
    id: number
    porcentaje: number
    descripcion: string
    fechaInicio: Date
    fechaFin: Date
    estado: string
    productoId: number
    _count: OfertaCountAggregateOutputType | null
    _avg: OfertaAvgAggregateOutputType | null
    _sum: OfertaSumAggregateOutputType | null
    _min: OfertaMinAggregateOutputType | null
    _max: OfertaMaxAggregateOutputType | null
  }

  type GetOfertaGroupByPayload<T extends OfertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfertaGroupByOutputType[P]>
            : GetScalarType<T[P], OfertaGroupByOutputType[P]>
        }
      >
    >


  export type OfertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    porcentaje?: boolean
    descripcion?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    productoId?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oferta"]>



  export type OfertaSelectScalar = {
    id?: boolean
    porcentaje?: boolean
    descripcion?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    productoId?: boolean
  }

  export type OfertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "porcentaje" | "descripcion" | "fechaInicio" | "fechaFin" | "estado" | "productoId", ExtArgs["result"]["oferta"]>
  export type OfertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $OfertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Oferta"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      porcentaje: number
      descripcion: string
      fechaInicio: Date
      fechaFin: Date
      estado: string
      productoId: number
    }, ExtArgs["result"]["oferta"]>
    composites: {}
  }

  type OfertaGetPayload<S extends boolean | null | undefined | OfertaDefaultArgs> = $Result.GetResult<Prisma.$OfertaPayload, S>

  type OfertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfertaCountAggregateInputType | true
    }

  export interface OfertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Oferta'], meta: { name: 'Oferta' } }
    /**
     * Find zero or one Oferta that matches the filter.
     * @param {OfertaFindUniqueArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfertaFindUniqueArgs>(args: SelectSubset<T, OfertaFindUniqueArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Oferta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfertaFindUniqueOrThrowArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfertaFindUniqueOrThrowArgs>(args: SelectSubset<T, OfertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oferta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaFindFirstArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfertaFindFirstArgs>(args?: SelectSubset<T, OfertaFindFirstArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Oferta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaFindFirstOrThrowArgs} args - Arguments to find a Oferta
     * @example
     * // Get one Oferta
     * const oferta = await prisma.oferta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfertaFindFirstOrThrowArgs>(args?: SelectSubset<T, OfertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ofertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ofertas
     * const ofertas = await prisma.oferta.findMany()
     * 
     * // Get first 10 Ofertas
     * const ofertas = await prisma.oferta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ofertaWithIdOnly = await prisma.oferta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfertaFindManyArgs>(args?: SelectSubset<T, OfertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Oferta.
     * @param {OfertaCreateArgs} args - Arguments to create a Oferta.
     * @example
     * // Create one Oferta
     * const Oferta = await prisma.oferta.create({
     *   data: {
     *     // ... data to create a Oferta
     *   }
     * })
     * 
     */
    create<T extends OfertaCreateArgs>(args: SelectSubset<T, OfertaCreateArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ofertas.
     * @param {OfertaCreateManyArgs} args - Arguments to create many Ofertas.
     * @example
     * // Create many Ofertas
     * const oferta = await prisma.oferta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfertaCreateManyArgs>(args?: SelectSubset<T, OfertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Oferta.
     * @param {OfertaDeleteArgs} args - Arguments to delete one Oferta.
     * @example
     * // Delete one Oferta
     * const Oferta = await prisma.oferta.delete({
     *   where: {
     *     // ... filter to delete one Oferta
     *   }
     * })
     * 
     */
    delete<T extends OfertaDeleteArgs>(args: SelectSubset<T, OfertaDeleteArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Oferta.
     * @param {OfertaUpdateArgs} args - Arguments to update one Oferta.
     * @example
     * // Update one Oferta
     * const oferta = await prisma.oferta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfertaUpdateArgs>(args: SelectSubset<T, OfertaUpdateArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ofertas.
     * @param {OfertaDeleteManyArgs} args - Arguments to filter Ofertas to delete.
     * @example
     * // Delete a few Ofertas
     * const { count } = await prisma.oferta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfertaDeleteManyArgs>(args?: SelectSubset<T, OfertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ofertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ofertas
     * const oferta = await prisma.oferta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfertaUpdateManyArgs>(args: SelectSubset<T, OfertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Oferta.
     * @param {OfertaUpsertArgs} args - Arguments to update or create a Oferta.
     * @example
     * // Update or create a Oferta
     * const oferta = await prisma.oferta.upsert({
     *   create: {
     *     // ... data to create a Oferta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oferta we want to update
     *   }
     * })
     */
    upsert<T extends OfertaUpsertArgs>(args: SelectSubset<T, OfertaUpsertArgs<ExtArgs>>): Prisma__OfertaClient<$Result.GetResult<Prisma.$OfertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ofertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaCountArgs} args - Arguments to filter Ofertas to count.
     * @example
     * // Count the number of Ofertas
     * const count = await prisma.oferta.count({
     *   where: {
     *     // ... the filter for the Ofertas we want to count
     *   }
     * })
    **/
    count<T extends OfertaCountArgs>(
      args?: Subset<T, OfertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfertaAggregateArgs>(args: Subset<T, OfertaAggregateArgs>): Prisma.PrismaPromise<GetOfertaAggregateType<T>>

    /**
     * Group by Oferta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfertaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfertaGroupByArgs['orderBy'] }
        : { orderBy?: OfertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Oferta model
   */
  readonly fields: OfertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Oferta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Oferta model
   */
  interface OfertaFieldRefs {
    readonly id: FieldRef<"Oferta", 'Int'>
    readonly porcentaje: FieldRef<"Oferta", 'Float'>
    readonly descripcion: FieldRef<"Oferta", 'String'>
    readonly fechaInicio: FieldRef<"Oferta", 'DateTime'>
    readonly fechaFin: FieldRef<"Oferta", 'DateTime'>
    readonly estado: FieldRef<"Oferta", 'String'>
    readonly productoId: FieldRef<"Oferta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Oferta findUnique
   */
  export type OfertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * Filter, which Oferta to fetch.
     */
    where: OfertaWhereUniqueInput
  }

  /**
   * Oferta findUniqueOrThrow
   */
  export type OfertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * Filter, which Oferta to fetch.
     */
    where: OfertaWhereUniqueInput
  }

  /**
   * Oferta findFirst
   */
  export type OfertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * Filter, which Oferta to fetch.
     */
    where?: OfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ofertas to fetch.
     */
    orderBy?: OfertaOrderByWithRelationInput | OfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ofertas.
     */
    cursor?: OfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ofertas.
     */
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * Oferta findFirstOrThrow
   */
  export type OfertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * Filter, which Oferta to fetch.
     */
    where?: OfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ofertas to fetch.
     */
    orderBy?: OfertaOrderByWithRelationInput | OfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ofertas.
     */
    cursor?: OfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ofertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ofertas.
     */
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * Oferta findMany
   */
  export type OfertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * Filter, which Ofertas to fetch.
     */
    where?: OfertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ofertas to fetch.
     */
    orderBy?: OfertaOrderByWithRelationInput | OfertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ofertas.
     */
    cursor?: OfertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ofertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ofertas.
     */
    skip?: number
    distinct?: OfertaScalarFieldEnum | OfertaScalarFieldEnum[]
  }

  /**
   * Oferta create
   */
  export type OfertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * The data needed to create a Oferta.
     */
    data: XOR<OfertaCreateInput, OfertaUncheckedCreateInput>
  }

  /**
   * Oferta createMany
   */
  export type OfertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ofertas.
     */
    data: OfertaCreateManyInput | OfertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Oferta update
   */
  export type OfertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * The data needed to update a Oferta.
     */
    data: XOR<OfertaUpdateInput, OfertaUncheckedUpdateInput>
    /**
     * Choose, which Oferta to update.
     */
    where: OfertaWhereUniqueInput
  }

  /**
   * Oferta updateMany
   */
  export type OfertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ofertas.
     */
    data: XOR<OfertaUpdateManyMutationInput, OfertaUncheckedUpdateManyInput>
    /**
     * Filter which Ofertas to update
     */
    where?: OfertaWhereInput
    /**
     * Limit how many Ofertas to update.
     */
    limit?: number
  }

  /**
   * Oferta upsert
   */
  export type OfertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * The filter to search for the Oferta to update in case it exists.
     */
    where: OfertaWhereUniqueInput
    /**
     * In case the Oferta found by the `where` argument doesn't exist, create a new Oferta with this data.
     */
    create: XOR<OfertaCreateInput, OfertaUncheckedCreateInput>
    /**
     * In case the Oferta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfertaUpdateInput, OfertaUncheckedUpdateInput>
  }

  /**
   * Oferta delete
   */
  export type OfertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
    /**
     * Filter which Oferta to delete.
     */
    where: OfertaWhereUniqueInput
  }

  /**
   * Oferta deleteMany
   */
  export type OfertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ofertas to delete
     */
    where?: OfertaWhereInput
    /**
     * Limit how many Ofertas to delete.
     */
    limit?: number
  }

  /**
   * Oferta without action
   */
  export type OfertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oferta
     */
    select?: OfertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Oferta
     */
    omit?: OfertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfertaInclude<ExtArgs> | null
  }


  /**
   * Model Sucursal
   */

  export type AggregateSucursal = {
    _count: SucursalCountAggregateOutputType | null
    _avg: SucursalAvgAggregateOutputType | null
    _sum: SucursalSumAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  export type SucursalAvgAggregateOutputType = {
    id: number | null
  }

  export type SucursalSumAggregateOutputType = {
    id: number | null
  }

  export type SucursalMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    ciudad: string | null
    region: string | null
  }

  export type SucursalMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    ciudad: string | null
    region: string | null
  }

  export type SucursalCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    ciudad: number
    region: number
    _all: number
  }


  export type SucursalAvgAggregateInputType = {
    id?: true
  }

  export type SucursalSumAggregateInputType = {
    id?: true
  }

  export type SucursalMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    ciudad?: true
    region?: true
  }

  export type SucursalMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    ciudad?: true
    region?: true
  }

  export type SucursalCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    ciudad?: true
    region?: true
    _all?: true
  }

  export type SucursalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sucursal to aggregate.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sucursals
    **/
    _count?: true | SucursalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SucursalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SucursalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SucursalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SucursalMaxAggregateInputType
  }

  export type GetSucursalAggregateType<T extends SucursalAggregateArgs> = {
        [P in keyof T & keyof AggregateSucursal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSucursal[P]>
      : GetScalarType<T[P], AggregateSucursal[P]>
  }




  export type SucursalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SucursalWhereInput
    orderBy?: SucursalOrderByWithAggregationInput | SucursalOrderByWithAggregationInput[]
    by: SucursalScalarFieldEnum[] | SucursalScalarFieldEnum
    having?: SucursalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SucursalCountAggregateInputType | true
    _avg?: SucursalAvgAggregateInputType
    _sum?: SucursalSumAggregateInputType
    _min?: SucursalMinAggregateInputType
    _max?: SucursalMaxAggregateInputType
  }

  export type SucursalGroupByOutputType = {
    id: number
    nombre: string
    direccion: string
    ciudad: string
    region: string
    _count: SucursalCountAggregateOutputType | null
    _avg: SucursalAvgAggregateOutputType | null
    _sum: SucursalSumAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  type GetSucursalGroupByPayload<T extends SucursalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SucursalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SucursalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SucursalGroupByOutputType[P]>
            : GetScalarType<T[P], SucursalGroupByOutputType[P]>
        }
      >
    >


  export type SucursalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    ciudad?: boolean
    region?: boolean
    productos?: boolean | Sucursal$productosArgs<ExtArgs>
    _count?: boolean | SucursalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sucursal"]>



  export type SucursalSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    ciudad?: boolean
    region?: boolean
  }

  export type SucursalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "ciudad" | "region", ExtArgs["result"]["sucursal"]>
  export type SucursalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Sucursal$productosArgs<ExtArgs>
    _count?: boolean | SucursalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SucursalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sucursal"
    objects: {
      productos: Prisma.$ProductoSucursalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string
      ciudad: string
      region: string
    }, ExtArgs["result"]["sucursal"]>
    composites: {}
  }

  type SucursalGetPayload<S extends boolean | null | undefined | SucursalDefaultArgs> = $Result.GetResult<Prisma.$SucursalPayload, S>

  type SucursalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SucursalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SucursalCountAggregateInputType | true
    }

  export interface SucursalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sucursal'], meta: { name: 'Sucursal' } }
    /**
     * Find zero or one Sucursal that matches the filter.
     * @param {SucursalFindUniqueArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SucursalFindUniqueArgs>(args: SelectSubset<T, SucursalFindUniqueArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sucursal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SucursalFindUniqueOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SucursalFindUniqueOrThrowArgs>(args: SelectSubset<T, SucursalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sucursal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindFirstArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SucursalFindFirstArgs>(args?: SelectSubset<T, SucursalFindFirstArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sucursal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindFirstOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SucursalFindFirstOrThrowArgs>(args?: SelectSubset<T, SucursalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sucursals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sucursals
     * const sucursals = await prisma.sucursal.findMany()
     * 
     * // Get first 10 Sucursals
     * const sucursals = await prisma.sucursal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sucursalWithIdOnly = await prisma.sucursal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SucursalFindManyArgs>(args?: SelectSubset<T, SucursalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sucursal.
     * @param {SucursalCreateArgs} args - Arguments to create a Sucursal.
     * @example
     * // Create one Sucursal
     * const Sucursal = await prisma.sucursal.create({
     *   data: {
     *     // ... data to create a Sucursal
     *   }
     * })
     * 
     */
    create<T extends SucursalCreateArgs>(args: SelectSubset<T, SucursalCreateArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sucursals.
     * @param {SucursalCreateManyArgs} args - Arguments to create many Sucursals.
     * @example
     * // Create many Sucursals
     * const sucursal = await prisma.sucursal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SucursalCreateManyArgs>(args?: SelectSubset<T, SucursalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sucursal.
     * @param {SucursalDeleteArgs} args - Arguments to delete one Sucursal.
     * @example
     * // Delete one Sucursal
     * const Sucursal = await prisma.sucursal.delete({
     *   where: {
     *     // ... filter to delete one Sucursal
     *   }
     * })
     * 
     */
    delete<T extends SucursalDeleteArgs>(args: SelectSubset<T, SucursalDeleteArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sucursal.
     * @param {SucursalUpdateArgs} args - Arguments to update one Sucursal.
     * @example
     * // Update one Sucursal
     * const sucursal = await prisma.sucursal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SucursalUpdateArgs>(args: SelectSubset<T, SucursalUpdateArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sucursals.
     * @param {SucursalDeleteManyArgs} args - Arguments to filter Sucursals to delete.
     * @example
     * // Delete a few Sucursals
     * const { count } = await prisma.sucursal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SucursalDeleteManyArgs>(args?: SelectSubset<T, SucursalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sucursals
     * const sucursal = await prisma.sucursal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SucursalUpdateManyArgs>(args: SelectSubset<T, SucursalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sucursal.
     * @param {SucursalUpsertArgs} args - Arguments to update or create a Sucursal.
     * @example
     * // Update or create a Sucursal
     * const sucursal = await prisma.sucursal.upsert({
     *   create: {
     *     // ... data to create a Sucursal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sucursal we want to update
     *   }
     * })
     */
    upsert<T extends SucursalUpsertArgs>(args: SelectSubset<T, SucursalUpsertArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalCountArgs} args - Arguments to filter Sucursals to count.
     * @example
     * // Count the number of Sucursals
     * const count = await prisma.sucursal.count({
     *   where: {
     *     // ... the filter for the Sucursals we want to count
     *   }
     * })
    **/
    count<T extends SucursalCountArgs>(
      args?: Subset<T, SucursalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SucursalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SucursalAggregateArgs>(args: Subset<T, SucursalAggregateArgs>): Prisma.PrismaPromise<GetSucursalAggregateType<T>>

    /**
     * Group by Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SucursalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SucursalGroupByArgs['orderBy'] }
        : { orderBy?: SucursalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SucursalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSucursalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sucursal model
   */
  readonly fields: SucursalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sucursal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SucursalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Sucursal$productosArgs<ExtArgs> = {}>(args?: Subset<T, Sucursal$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sucursal model
   */
  interface SucursalFieldRefs {
    readonly id: FieldRef<"Sucursal", 'Int'>
    readonly nombre: FieldRef<"Sucursal", 'String'>
    readonly direccion: FieldRef<"Sucursal", 'String'>
    readonly ciudad: FieldRef<"Sucursal", 'String'>
    readonly region: FieldRef<"Sucursal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sucursal findUnique
   */
  export type SucursalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal findUniqueOrThrow
   */
  export type SucursalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal findFirst
   */
  export type SucursalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * Sucursal findFirstOrThrow
   */
  export type SucursalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * Sucursal findMany
   */
  export type SucursalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursals to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * Sucursal create
   */
  export type SucursalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The data needed to create a Sucursal.
     */
    data: XOR<SucursalCreateInput, SucursalUncheckedCreateInput>
  }

  /**
   * Sucursal createMany
   */
  export type SucursalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sucursals.
     */
    data: SucursalCreateManyInput | SucursalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sucursal update
   */
  export type SucursalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The data needed to update a Sucursal.
     */
    data: XOR<SucursalUpdateInput, SucursalUncheckedUpdateInput>
    /**
     * Choose, which Sucursal to update.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal updateMany
   */
  export type SucursalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sucursals.
     */
    data: XOR<SucursalUpdateManyMutationInput, SucursalUncheckedUpdateManyInput>
    /**
     * Filter which Sucursals to update
     */
    where?: SucursalWhereInput
    /**
     * Limit how many Sucursals to update.
     */
    limit?: number
  }

  /**
   * Sucursal upsert
   */
  export type SucursalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The filter to search for the Sucursal to update in case it exists.
     */
    where: SucursalWhereUniqueInput
    /**
     * In case the Sucursal found by the `where` argument doesn't exist, create a new Sucursal with this data.
     */
    create: XOR<SucursalCreateInput, SucursalUncheckedCreateInput>
    /**
     * In case the Sucursal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SucursalUpdateInput, SucursalUncheckedUpdateInput>
  }

  /**
   * Sucursal delete
   */
  export type SucursalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter which Sucursal to delete.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal deleteMany
   */
  export type SucursalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sucursals to delete
     */
    where?: SucursalWhereInput
    /**
     * Limit how many Sucursals to delete.
     */
    limit?: number
  }

  /**
   * Sucursal.productos
   */
  export type Sucursal$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    where?: ProductoSucursalWhereInput
    orderBy?: ProductoSucursalOrderByWithRelationInput | ProductoSucursalOrderByWithRelationInput[]
    cursor?: ProductoSucursalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoSucursalScalarFieldEnum | ProductoSucursalScalarFieldEnum[]
  }

  /**
   * Sucursal without action
   */
  export type SucursalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
  }


  /**
   * Model ProductoSucursal
   */

  export type AggregateProductoSucursal = {
    _count: ProductoSucursalCountAggregateOutputType | null
    _avg: ProductoSucursalAvgAggregateOutputType | null
    _sum: ProductoSucursalSumAggregateOutputType | null
    _min: ProductoSucursalMinAggregateOutputType | null
    _max: ProductoSucursalMaxAggregateOutputType | null
  }

  export type ProductoSucursalAvgAggregateOutputType = {
    productoId: number | null
    sucursalId: number | null
    stock: number | null
  }

  export type ProductoSucursalSumAggregateOutputType = {
    productoId: number | null
    sucursalId: number | null
    stock: number | null
  }

  export type ProductoSucursalMinAggregateOutputType = {
    productoId: number | null
    sucursalId: number | null
    stock: number | null
  }

  export type ProductoSucursalMaxAggregateOutputType = {
    productoId: number | null
    sucursalId: number | null
    stock: number | null
  }

  export type ProductoSucursalCountAggregateOutputType = {
    productoId: number
    sucursalId: number
    stock: number
    _all: number
  }


  export type ProductoSucursalAvgAggregateInputType = {
    productoId?: true
    sucursalId?: true
    stock?: true
  }

  export type ProductoSucursalSumAggregateInputType = {
    productoId?: true
    sucursalId?: true
    stock?: true
  }

  export type ProductoSucursalMinAggregateInputType = {
    productoId?: true
    sucursalId?: true
    stock?: true
  }

  export type ProductoSucursalMaxAggregateInputType = {
    productoId?: true
    sucursalId?: true
    stock?: true
  }

  export type ProductoSucursalCountAggregateInputType = {
    productoId?: true
    sucursalId?: true
    stock?: true
    _all?: true
  }

  export type ProductoSucursalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoSucursal to aggregate.
     */
    where?: ProductoSucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoSucursals to fetch.
     */
    orderBy?: ProductoSucursalOrderByWithRelationInput | ProductoSucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoSucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoSucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoSucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductoSucursals
    **/
    _count?: true | ProductoSucursalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoSucursalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSucursalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoSucursalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoSucursalMaxAggregateInputType
  }

  export type GetProductoSucursalAggregateType<T extends ProductoSucursalAggregateArgs> = {
        [P in keyof T & keyof AggregateProductoSucursal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductoSucursal[P]>
      : GetScalarType<T[P], AggregateProductoSucursal[P]>
  }




  export type ProductoSucursalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoSucursalWhereInput
    orderBy?: ProductoSucursalOrderByWithAggregationInput | ProductoSucursalOrderByWithAggregationInput[]
    by: ProductoSucursalScalarFieldEnum[] | ProductoSucursalScalarFieldEnum
    having?: ProductoSucursalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoSucursalCountAggregateInputType | true
    _avg?: ProductoSucursalAvgAggregateInputType
    _sum?: ProductoSucursalSumAggregateInputType
    _min?: ProductoSucursalMinAggregateInputType
    _max?: ProductoSucursalMaxAggregateInputType
  }

  export type ProductoSucursalGroupByOutputType = {
    productoId: number
    sucursalId: number
    stock: number
    _count: ProductoSucursalCountAggregateOutputType | null
    _avg: ProductoSucursalAvgAggregateOutputType | null
    _sum: ProductoSucursalSumAggregateOutputType | null
    _min: ProductoSucursalMinAggregateOutputType | null
    _max: ProductoSucursalMaxAggregateOutputType | null
  }

  type GetProductoSucursalGroupByPayload<T extends ProductoSucursalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoSucursalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoSucursalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoSucursalGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoSucursalGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSucursalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productoId?: boolean
    sucursalId?: boolean
    stock?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productoSucursal"]>



  export type ProductoSucursalSelectScalar = {
    productoId?: boolean
    sucursalId?: boolean
    stock?: boolean
  }

  export type ProductoSucursalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productoId" | "sucursalId" | "stock", ExtArgs["result"]["productoSucursal"]>
  export type ProductoSucursalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
  }

  export type $ProductoSucursalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductoSucursal"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
      sucursal: Prisma.$SucursalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productoId: number
      sucursalId: number
      stock: number
    }, ExtArgs["result"]["productoSucursal"]>
    composites: {}
  }

  type ProductoSucursalGetPayload<S extends boolean | null | undefined | ProductoSucursalDefaultArgs> = $Result.GetResult<Prisma.$ProductoSucursalPayload, S>

  type ProductoSucursalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoSucursalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoSucursalCountAggregateInputType | true
    }

  export interface ProductoSucursalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductoSucursal'], meta: { name: 'ProductoSucursal' } }
    /**
     * Find zero or one ProductoSucursal that matches the filter.
     * @param {ProductoSucursalFindUniqueArgs} args - Arguments to find a ProductoSucursal
     * @example
     * // Get one ProductoSucursal
     * const productoSucursal = await prisma.productoSucursal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoSucursalFindUniqueArgs>(args: SelectSubset<T, ProductoSucursalFindUniqueArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductoSucursal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoSucursalFindUniqueOrThrowArgs} args - Arguments to find a ProductoSucursal
     * @example
     * // Get one ProductoSucursal
     * const productoSucursal = await prisma.productoSucursal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoSucursalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoSucursalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoSucursal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalFindFirstArgs} args - Arguments to find a ProductoSucursal
     * @example
     * // Get one ProductoSucursal
     * const productoSucursal = await prisma.productoSucursal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoSucursalFindFirstArgs>(args?: SelectSubset<T, ProductoSucursalFindFirstArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductoSucursal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalFindFirstOrThrowArgs} args - Arguments to find a ProductoSucursal
     * @example
     * // Get one ProductoSucursal
     * const productoSucursal = await prisma.productoSucursal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoSucursalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoSucursalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductoSucursals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductoSucursals
     * const productoSucursals = await prisma.productoSucursal.findMany()
     * 
     * // Get first 10 ProductoSucursals
     * const productoSucursals = await prisma.productoSucursal.findMany({ take: 10 })
     * 
     * // Only select the `productoId`
     * const productoSucursalWithProductoIdOnly = await prisma.productoSucursal.findMany({ select: { productoId: true } })
     * 
     */
    findMany<T extends ProductoSucursalFindManyArgs>(args?: SelectSubset<T, ProductoSucursalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductoSucursal.
     * @param {ProductoSucursalCreateArgs} args - Arguments to create a ProductoSucursal.
     * @example
     * // Create one ProductoSucursal
     * const ProductoSucursal = await prisma.productoSucursal.create({
     *   data: {
     *     // ... data to create a ProductoSucursal
     *   }
     * })
     * 
     */
    create<T extends ProductoSucursalCreateArgs>(args: SelectSubset<T, ProductoSucursalCreateArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductoSucursals.
     * @param {ProductoSucursalCreateManyArgs} args - Arguments to create many ProductoSucursals.
     * @example
     * // Create many ProductoSucursals
     * const productoSucursal = await prisma.productoSucursal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoSucursalCreateManyArgs>(args?: SelectSubset<T, ProductoSucursalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductoSucursal.
     * @param {ProductoSucursalDeleteArgs} args - Arguments to delete one ProductoSucursal.
     * @example
     * // Delete one ProductoSucursal
     * const ProductoSucursal = await prisma.productoSucursal.delete({
     *   where: {
     *     // ... filter to delete one ProductoSucursal
     *   }
     * })
     * 
     */
    delete<T extends ProductoSucursalDeleteArgs>(args: SelectSubset<T, ProductoSucursalDeleteArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductoSucursal.
     * @param {ProductoSucursalUpdateArgs} args - Arguments to update one ProductoSucursal.
     * @example
     * // Update one ProductoSucursal
     * const productoSucursal = await prisma.productoSucursal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoSucursalUpdateArgs>(args: SelectSubset<T, ProductoSucursalUpdateArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductoSucursals.
     * @param {ProductoSucursalDeleteManyArgs} args - Arguments to filter ProductoSucursals to delete.
     * @example
     * // Delete a few ProductoSucursals
     * const { count } = await prisma.productoSucursal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoSucursalDeleteManyArgs>(args?: SelectSubset<T, ProductoSucursalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductoSucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductoSucursals
     * const productoSucursal = await prisma.productoSucursal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoSucursalUpdateManyArgs>(args: SelectSubset<T, ProductoSucursalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductoSucursal.
     * @param {ProductoSucursalUpsertArgs} args - Arguments to update or create a ProductoSucursal.
     * @example
     * // Update or create a ProductoSucursal
     * const productoSucursal = await prisma.productoSucursal.upsert({
     *   create: {
     *     // ... data to create a ProductoSucursal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductoSucursal we want to update
     *   }
     * })
     */
    upsert<T extends ProductoSucursalUpsertArgs>(args: SelectSubset<T, ProductoSucursalUpsertArgs<ExtArgs>>): Prisma__ProductoSucursalClient<$Result.GetResult<Prisma.$ProductoSucursalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductoSucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalCountArgs} args - Arguments to filter ProductoSucursals to count.
     * @example
     * // Count the number of ProductoSucursals
     * const count = await prisma.productoSucursal.count({
     *   where: {
     *     // ... the filter for the ProductoSucursals we want to count
     *   }
     * })
    **/
    count<T extends ProductoSucursalCountArgs>(
      args?: Subset<T, ProductoSucursalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoSucursalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductoSucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoSucursalAggregateArgs>(args: Subset<T, ProductoSucursalAggregateArgs>): Prisma.PrismaPromise<GetProductoSucursalAggregateType<T>>

    /**
     * Group by ProductoSucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoSucursalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoSucursalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoSucursalGroupByArgs['orderBy'] }
        : { orderBy?: ProductoSucursalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoSucursalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoSucursalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductoSucursal model
   */
  readonly fields: ProductoSucursalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductoSucursal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoSucursalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sucursal<T extends SucursalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SucursalDefaultArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductoSucursal model
   */
  interface ProductoSucursalFieldRefs {
    readonly productoId: FieldRef<"ProductoSucursal", 'Int'>
    readonly sucursalId: FieldRef<"ProductoSucursal", 'Int'>
    readonly stock: FieldRef<"ProductoSucursal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductoSucursal findUnique
   */
  export type ProductoSucursalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * Filter, which ProductoSucursal to fetch.
     */
    where: ProductoSucursalWhereUniqueInput
  }

  /**
   * ProductoSucursal findUniqueOrThrow
   */
  export type ProductoSucursalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * Filter, which ProductoSucursal to fetch.
     */
    where: ProductoSucursalWhereUniqueInput
  }

  /**
   * ProductoSucursal findFirst
   */
  export type ProductoSucursalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * Filter, which ProductoSucursal to fetch.
     */
    where?: ProductoSucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoSucursals to fetch.
     */
    orderBy?: ProductoSucursalOrderByWithRelationInput | ProductoSucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoSucursals.
     */
    cursor?: ProductoSucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoSucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoSucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoSucursals.
     */
    distinct?: ProductoSucursalScalarFieldEnum | ProductoSucursalScalarFieldEnum[]
  }

  /**
   * ProductoSucursal findFirstOrThrow
   */
  export type ProductoSucursalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * Filter, which ProductoSucursal to fetch.
     */
    where?: ProductoSucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoSucursals to fetch.
     */
    orderBy?: ProductoSucursalOrderByWithRelationInput | ProductoSucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductoSucursals.
     */
    cursor?: ProductoSucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoSucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoSucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductoSucursals.
     */
    distinct?: ProductoSucursalScalarFieldEnum | ProductoSucursalScalarFieldEnum[]
  }

  /**
   * ProductoSucursal findMany
   */
  export type ProductoSucursalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * Filter, which ProductoSucursals to fetch.
     */
    where?: ProductoSucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductoSucursals to fetch.
     */
    orderBy?: ProductoSucursalOrderByWithRelationInput | ProductoSucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductoSucursals.
     */
    cursor?: ProductoSucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductoSucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductoSucursals.
     */
    skip?: number
    distinct?: ProductoSucursalScalarFieldEnum | ProductoSucursalScalarFieldEnum[]
  }

  /**
   * ProductoSucursal create
   */
  export type ProductoSucursalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductoSucursal.
     */
    data: XOR<ProductoSucursalCreateInput, ProductoSucursalUncheckedCreateInput>
  }

  /**
   * ProductoSucursal createMany
   */
  export type ProductoSucursalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductoSucursals.
     */
    data: ProductoSucursalCreateManyInput | ProductoSucursalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductoSucursal update
   */
  export type ProductoSucursalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductoSucursal.
     */
    data: XOR<ProductoSucursalUpdateInput, ProductoSucursalUncheckedUpdateInput>
    /**
     * Choose, which ProductoSucursal to update.
     */
    where: ProductoSucursalWhereUniqueInput
  }

  /**
   * ProductoSucursal updateMany
   */
  export type ProductoSucursalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductoSucursals.
     */
    data: XOR<ProductoSucursalUpdateManyMutationInput, ProductoSucursalUncheckedUpdateManyInput>
    /**
     * Filter which ProductoSucursals to update
     */
    where?: ProductoSucursalWhereInput
    /**
     * Limit how many ProductoSucursals to update.
     */
    limit?: number
  }

  /**
   * ProductoSucursal upsert
   */
  export type ProductoSucursalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductoSucursal to update in case it exists.
     */
    where: ProductoSucursalWhereUniqueInput
    /**
     * In case the ProductoSucursal found by the `where` argument doesn't exist, create a new ProductoSucursal with this data.
     */
    create: XOR<ProductoSucursalCreateInput, ProductoSucursalUncheckedCreateInput>
    /**
     * In case the ProductoSucursal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoSucursalUpdateInput, ProductoSucursalUncheckedUpdateInput>
  }

  /**
   * ProductoSucursal delete
   */
  export type ProductoSucursalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
    /**
     * Filter which ProductoSucursal to delete.
     */
    where: ProductoSucursalWhereUniqueInput
  }

  /**
   * ProductoSucursal deleteMany
   */
  export type ProductoSucursalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductoSucursals to delete
     */
    where?: ProductoSucursalWhereInput
    /**
     * Limit how many ProductoSucursals to delete.
     */
    limit?: number
  }

  /**
   * ProductoSucursal without action
   */
  export type ProductoSucursalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoSucursal
     */
    select?: ProductoSucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductoSucursal
     */
    omit?: ProductoSucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoSucursalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    contrasena: 'contrasena',
    telefono: 'telefono',
    tarjetas: 'tarjetas'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id: 'id',
    comuna: 'comuna',
    region: 'region',
    numero: 'numero',
    calle: 'calle',
    usuarioId: 'usuarioId'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    fechaPedido: 'fechaPedido',
    estado: 'estado',
    usuarioId: 'usuarioId',
    direccionId: 'direccionId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const LineaDePedidoScalarFieldEnum: {
    id: 'id',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    total: 'total',
    productoId: 'productoId',
    pedidoId: 'pedidoId'
  };

  export type LineaDePedidoScalarFieldEnum = (typeof LineaDePedidoScalarFieldEnum)[keyof typeof LineaDePedidoScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    categoriaId: 'categoriaId',
    ofertaId: 'ofertaId',
    imagenUrl: 'imagenUrl'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    estado: 'estado'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const OfertaScalarFieldEnum: {
    id: 'id',
    porcentaje: 'porcentaje',
    descripcion: 'descripcion',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    estado: 'estado',
    productoId: 'productoId'
  };

  export type OfertaScalarFieldEnum = (typeof OfertaScalarFieldEnum)[keyof typeof OfertaScalarFieldEnum]


  export const SucursalScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    ciudad: 'ciudad',
    region: 'region'
  };

  export type SucursalScalarFieldEnum = (typeof SucursalScalarFieldEnum)[keyof typeof SucursalScalarFieldEnum]


  export const ProductoSucursalScalarFieldEnum: {
    productoId: 'productoId',
    sucursalId: 'sucursalId',
    stock: 'stock'
  };

  export type ProductoSucursalScalarFieldEnum = (typeof ProductoSucursalScalarFieldEnum)[keyof typeof ProductoSucursalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email',
    contrasena: 'contrasena',
    telefono: 'telefono',
    tarjetas: 'tarjetas'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const DireccionOrderByRelevanceFieldEnum: {
    comuna: 'comuna',
    region: 'region',
    calle: 'calle'
  };

  export type DireccionOrderByRelevanceFieldEnum = (typeof DireccionOrderByRelevanceFieldEnum)[keyof typeof DireccionOrderByRelevanceFieldEnum]


  export const PedidoOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type PedidoOrderByRelevanceFieldEnum = (typeof PedidoOrderByRelevanceFieldEnum)[keyof typeof PedidoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagenUrl: 'imagenUrl'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    estado: 'estado'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const OfertaOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion',
    estado: 'estado'
  };

  export type OfertaOrderByRelevanceFieldEnum = (typeof OfertaOrderByRelevanceFieldEnum)[keyof typeof OfertaOrderByRelevanceFieldEnum]


  export const SucursalOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    direccion: 'direccion',
    ciudad: 'ciudad',
    region: 'region'
  };

  export type SucursalOrderByRelevanceFieldEnum = (typeof SucursalOrderByRelevanceFieldEnum)[keyof typeof SucursalOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    tarjetas?: StringFilter<"Usuario"> | string
    direccion?: DireccionListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    tarjetas?: SortOrder
    direccion?: DireccionOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    tarjetas?: StringFilter<"Usuario"> | string
    direccion?: DireccionListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    tarjetas?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringWithAggregatesFilter<"Usuario"> | string
    tarjetas?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type DireccionWhereInput = {
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id?: IntFilter<"Direccion"> | number
    comuna?: StringFilter<"Direccion"> | string
    region?: StringFilter<"Direccion"> | string
    numero?: IntFilter<"Direccion"> | number
    calle?: StringFilter<"Direccion"> | string
    usuarioId?: IntFilter<"Direccion"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    pedidos?: PedidoListRelationFilter
  }

  export type DireccionOrderByWithRelationInput = {
    id?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    numero?: SortOrder
    calle?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: DireccionOrderByRelevanceInput
  }

  export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    comuna?: StringFilter<"Direccion"> | string
    region?: StringFilter<"Direccion"> | string
    numero?: IntFilter<"Direccion"> | number
    calle?: StringFilter<"Direccion"> | string
    usuarioId?: IntFilter<"Direccion"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type DireccionOrderByWithAggregationInput = {
    id?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    numero?: SortOrder
    calle?: SortOrder
    usuarioId?: SortOrder
    _count?: DireccionCountOrderByAggregateInput
    _avg?: DireccionAvgOrderByAggregateInput
    _max?: DireccionMaxOrderByAggregateInput
    _min?: DireccionMinOrderByAggregateInput
    _sum?: DireccionSumOrderByAggregateInput
  }

  export type DireccionScalarWhereWithAggregatesInput = {
    AND?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    OR?: DireccionScalarWhereWithAggregatesInput[]
    NOT?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Direccion"> | number
    comuna?: StringWithAggregatesFilter<"Direccion"> | string
    region?: StringWithAggregatesFilter<"Direccion"> | string
    numero?: IntWithAggregatesFilter<"Direccion"> | number
    calle?: StringWithAggregatesFilter<"Direccion"> | string
    usuarioId?: IntWithAggregatesFilter<"Direccion"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    estado?: StringFilter<"Pedido"> | string
    usuarioId?: IntFilter<"Pedido"> | number
    direccionId?: IntFilter<"Pedido"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccion?: XOR<DireccionScalarRelationFilter, DireccionWhereInput>
    lineasDePedido?: LineaDePedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    direccion?: DireccionOrderByWithRelationInput
    lineasDePedido?: LineaDePedidoOrderByRelationAggregateInput
    _relevance?: PedidoOrderByRelevanceInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    estado?: StringFilter<"Pedido"> | string
    usuarioId?: IntFilter<"Pedido"> | number
    direccionId?: IntFilter<"Pedido"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccion?: XOR<DireccionScalarRelationFilter, DireccionWhereInput>
    lineasDePedido?: LineaDePedidoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    fechaPedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    estado?: StringWithAggregatesFilter<"Pedido"> | string
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    direccionId?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type LineaDePedidoWhereInput = {
    AND?: LineaDePedidoWhereInput | LineaDePedidoWhereInput[]
    OR?: LineaDePedidoWhereInput[]
    NOT?: LineaDePedidoWhereInput | LineaDePedidoWhereInput[]
    id?: IntFilter<"LineaDePedido"> | number
    cantidad?: IntFilter<"LineaDePedido"> | number
    precioUnitario?: FloatFilter<"LineaDePedido"> | number
    total?: FloatFilter<"LineaDePedido"> | number
    productoId?: IntFilter<"LineaDePedido"> | number
    pedidoId?: IntFilter<"LineaDePedido"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type LineaDePedidoOrderByWithRelationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
  }

  export type LineaDePedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LineaDePedidoWhereInput | LineaDePedidoWhereInput[]
    OR?: LineaDePedidoWhereInput[]
    NOT?: LineaDePedidoWhereInput | LineaDePedidoWhereInput[]
    cantidad?: IntFilter<"LineaDePedido"> | number
    precioUnitario?: FloatFilter<"LineaDePedido"> | number
    total?: FloatFilter<"LineaDePedido"> | number
    productoId?: IntFilter<"LineaDePedido"> | number
    pedidoId?: IntFilter<"LineaDePedido"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id">

  export type LineaDePedidoOrderByWithAggregationInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
    _count?: LineaDePedidoCountOrderByAggregateInput
    _avg?: LineaDePedidoAvgOrderByAggregateInput
    _max?: LineaDePedidoMaxOrderByAggregateInput
    _min?: LineaDePedidoMinOrderByAggregateInput
    _sum?: LineaDePedidoSumOrderByAggregateInput
  }

  export type LineaDePedidoScalarWhereWithAggregatesInput = {
    AND?: LineaDePedidoScalarWhereWithAggregatesInput | LineaDePedidoScalarWhereWithAggregatesInput[]
    OR?: LineaDePedidoScalarWhereWithAggregatesInput[]
    NOT?: LineaDePedidoScalarWhereWithAggregatesInput | LineaDePedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LineaDePedido"> | number
    cantidad?: IntWithAggregatesFilter<"LineaDePedido"> | number
    precioUnitario?: FloatWithAggregatesFilter<"LineaDePedido"> | number
    total?: FloatWithAggregatesFilter<"LineaDePedido"> | number
    productoId?: IntWithAggregatesFilter<"LineaDePedido"> | number
    pedidoId?: IntWithAggregatesFilter<"LineaDePedido"> | number
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    ofertaId?: IntNullableFilter<"Producto"> | number | null
    imagenUrl?: StringNullableFilter<"Producto"> | string | null
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    oferta?: XOR<OfertaNullableScalarRelationFilter, OfertaWhereInput> | null
    sucursales?: ProductoSucursalListRelationFilter
    lineasDePedido?: LineaDePedidoListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrderInput | SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    oferta?: OfertaOrderByWithRelationInput
    sucursales?: ProductoSucursalOrderByRelationAggregateInput
    lineasDePedido?: LineaDePedidoOrderByRelationAggregateInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    ofertaId?: IntNullableFilter<"Producto"> | number | null
    imagenUrl?: StringNullableFilter<"Producto"> | string | null
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    oferta?: XOR<OfertaNullableScalarRelationFilter, OfertaWhereInput> | null
    sucursales?: ProductoSucursalListRelationFilter
    lineasDePedido?: LineaDePedidoListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrderInput | SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    precio?: FloatWithAggregatesFilter<"Producto"> | number
    categoriaId?: IntWithAggregatesFilter<"Producto"> | number
    ofertaId?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    imagenUrl?: StringNullableWithAggregatesFilter<"Producto"> | string | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    estado?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    estado?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    estado?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type OfertaWhereInput = {
    AND?: OfertaWhereInput | OfertaWhereInput[]
    OR?: OfertaWhereInput[]
    NOT?: OfertaWhereInput | OfertaWhereInput[]
    id?: IntFilter<"Oferta"> | number
    porcentaje?: FloatFilter<"Oferta"> | number
    descripcion?: StringFilter<"Oferta"> | string
    fechaInicio?: DateTimeFilter<"Oferta"> | Date | string
    fechaFin?: DateTimeFilter<"Oferta"> | Date | string
    estado?: StringFilter<"Oferta"> | string
    productoId?: IntFilter<"Oferta"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type OfertaOrderByWithRelationInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    productoId?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    _relevance?: OfertaOrderByRelevanceInput
  }

  export type OfertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productoId?: number
    AND?: OfertaWhereInput | OfertaWhereInput[]
    OR?: OfertaWhereInput[]
    NOT?: OfertaWhereInput | OfertaWhereInput[]
    porcentaje?: FloatFilter<"Oferta"> | number
    descripcion?: StringFilter<"Oferta"> | string
    fechaInicio?: DateTimeFilter<"Oferta"> | Date | string
    fechaFin?: DateTimeFilter<"Oferta"> | Date | string
    estado?: StringFilter<"Oferta"> | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id" | "productoId">

  export type OfertaOrderByWithAggregationInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    productoId?: SortOrder
    _count?: OfertaCountOrderByAggregateInput
    _avg?: OfertaAvgOrderByAggregateInput
    _max?: OfertaMaxOrderByAggregateInput
    _min?: OfertaMinOrderByAggregateInput
    _sum?: OfertaSumOrderByAggregateInput
  }

  export type OfertaScalarWhereWithAggregatesInput = {
    AND?: OfertaScalarWhereWithAggregatesInput | OfertaScalarWhereWithAggregatesInput[]
    OR?: OfertaScalarWhereWithAggregatesInput[]
    NOT?: OfertaScalarWhereWithAggregatesInput | OfertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Oferta"> | number
    porcentaje?: FloatWithAggregatesFilter<"Oferta"> | number
    descripcion?: StringWithAggregatesFilter<"Oferta"> | string
    fechaInicio?: DateTimeWithAggregatesFilter<"Oferta"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Oferta"> | Date | string
    estado?: StringWithAggregatesFilter<"Oferta"> | string
    productoId?: IntWithAggregatesFilter<"Oferta"> | number
  }

  export type SucursalWhereInput = {
    AND?: SucursalWhereInput | SucursalWhereInput[]
    OR?: SucursalWhereInput[]
    NOT?: SucursalWhereInput | SucursalWhereInput[]
    id?: IntFilter<"Sucursal"> | number
    nombre?: StringFilter<"Sucursal"> | string
    direccion?: StringFilter<"Sucursal"> | string
    ciudad?: StringFilter<"Sucursal"> | string
    region?: StringFilter<"Sucursal"> | string
    productos?: ProductoSucursalListRelationFilter
  }

  export type SucursalOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    region?: SortOrder
    productos?: ProductoSucursalOrderByRelationAggregateInput
    _relevance?: SucursalOrderByRelevanceInput
  }

  export type SucursalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SucursalWhereInput | SucursalWhereInput[]
    OR?: SucursalWhereInput[]
    NOT?: SucursalWhereInput | SucursalWhereInput[]
    nombre?: StringFilter<"Sucursal"> | string
    direccion?: StringFilter<"Sucursal"> | string
    ciudad?: StringFilter<"Sucursal"> | string
    region?: StringFilter<"Sucursal"> | string
    productos?: ProductoSucursalListRelationFilter
  }, "id">

  export type SucursalOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    region?: SortOrder
    _count?: SucursalCountOrderByAggregateInput
    _avg?: SucursalAvgOrderByAggregateInput
    _max?: SucursalMaxOrderByAggregateInput
    _min?: SucursalMinOrderByAggregateInput
    _sum?: SucursalSumOrderByAggregateInput
  }

  export type SucursalScalarWhereWithAggregatesInput = {
    AND?: SucursalScalarWhereWithAggregatesInput | SucursalScalarWhereWithAggregatesInput[]
    OR?: SucursalScalarWhereWithAggregatesInput[]
    NOT?: SucursalScalarWhereWithAggregatesInput | SucursalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sucursal"> | number
    nombre?: StringWithAggregatesFilter<"Sucursal"> | string
    direccion?: StringWithAggregatesFilter<"Sucursal"> | string
    ciudad?: StringWithAggregatesFilter<"Sucursal"> | string
    region?: StringWithAggregatesFilter<"Sucursal"> | string
  }

  export type ProductoSucursalWhereInput = {
    AND?: ProductoSucursalWhereInput | ProductoSucursalWhereInput[]
    OR?: ProductoSucursalWhereInput[]
    NOT?: ProductoSucursalWhereInput | ProductoSucursalWhereInput[]
    productoId?: IntFilter<"ProductoSucursal"> | number
    sucursalId?: IntFilter<"ProductoSucursal"> | number
    stock?: IntFilter<"ProductoSucursal"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    sucursal?: XOR<SucursalScalarRelationFilter, SucursalWhereInput>
  }

  export type ProductoSucursalOrderByWithRelationInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    sucursal?: SucursalOrderByWithRelationInput
  }

  export type ProductoSucursalWhereUniqueInput = Prisma.AtLeast<{
    productoId_sucursalId?: ProductoSucursalProductoIdSucursalIdCompoundUniqueInput
    AND?: ProductoSucursalWhereInput | ProductoSucursalWhereInput[]
    OR?: ProductoSucursalWhereInput[]
    NOT?: ProductoSucursalWhereInput | ProductoSucursalWhereInput[]
    productoId?: IntFilter<"ProductoSucursal"> | number
    sucursalId?: IntFilter<"ProductoSucursal"> | number
    stock?: IntFilter<"ProductoSucursal"> | number
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    sucursal?: XOR<SucursalScalarRelationFilter, SucursalWhereInput>
  }, "productoId_sucursalId">

  export type ProductoSucursalOrderByWithAggregationInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
    _count?: ProductoSucursalCountOrderByAggregateInput
    _avg?: ProductoSucursalAvgOrderByAggregateInput
    _max?: ProductoSucursalMaxOrderByAggregateInput
    _min?: ProductoSucursalMinOrderByAggregateInput
    _sum?: ProductoSucursalSumOrderByAggregateInput
  }

  export type ProductoSucursalScalarWhereWithAggregatesInput = {
    AND?: ProductoSucursalScalarWhereWithAggregatesInput | ProductoSucursalScalarWhereWithAggregatesInput[]
    OR?: ProductoSucursalScalarWhereWithAggregatesInput[]
    NOT?: ProductoSucursalScalarWhereWithAggregatesInput | ProductoSucursalScalarWhereWithAggregatesInput[]
    productoId?: IntWithAggregatesFilter<"ProductoSucursal"> | number
    sucursalId?: IntWithAggregatesFilter<"ProductoSucursal"> | number
    stock?: IntWithAggregatesFilter<"ProductoSucursal"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    direccion?: DireccionCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    direccion?: DireccionUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
    direccion?: DireccionUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
    direccion?: DireccionUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionCreateInput = {
    comuna: string
    region: string
    numero: number
    calle: string
    usuario: UsuarioCreateNestedOneWithoutDireccionInput
    pedidos?: PedidoCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateInput = {
    id?: number
    comuna: string
    region: string
    numero: number
    calle: string
    usuarioId: number
    pedidos?: PedidoUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUpdateInput = {
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionNestedInput
    pedidos?: PedidoUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    pedidos?: PedidoUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionCreateManyInput = {
    id?: number
    comuna: string
    region: string
    numero: number
    calle: string
    usuarioId: number
  }

  export type DireccionUpdateManyMutationInput = {
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    fechaPedido: Date | string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    usuarioId: number
    direccionId: number
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    usuarioId: number
    direccionId: number
  }

  export type PedidoUpdateManyMutationInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoCreateInput = {
    cantidad: number
    precioUnitario: number
    total: number
    producto: ProductoCreateNestedOneWithoutLineasDePedidoInput
    pedido: PedidoCreateNestedOneWithoutLineasDePedidoInput
  }

  export type LineaDePedidoUncheckedCreateInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    productoId: number
    pedidoId: number
  }

  export type LineaDePedidoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutLineasDePedidoNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutLineasDePedidoNestedInput
  }

  export type LineaDePedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoCreateManyInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    productoId: number
    pedidoId: number
  }

  export type LineaDePedidoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    oferta?: OfertaCreateNestedOneWithoutProductoInput
    sucursales?: ProductoSucursalCreateNestedManyWithoutProductoInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    categoriaId: number
    ofertaId?: number | null
    imagenUrl?: string | null
    oferta?: OfertaUncheckedCreateNestedOneWithoutProductoInput
    sucursales?: ProductoSucursalUncheckedCreateNestedManyWithoutProductoInput
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    oferta?: OfertaUpdateOneWithoutProductoNestedInput
    sucursales?: ProductoSucursalUpdateManyWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oferta?: OfertaUncheckedUpdateOneWithoutProductoNestedInput
    sucursales?: ProductoSucursalUncheckedUpdateManyWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    categoriaId: number
    ofertaId?: number | null
    imagenUrl?: string | null
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaCreateInput = {
    nombre: string
    estado: string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    estado: string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    estado: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OfertaCreateInput = {
    porcentaje: number
    descripcion: string
    fechaInicio: Date | string
    fechaFin: Date | string
    estado: string
    producto: ProductoCreateNestedOneWithoutOfertaInput
  }

  export type OfertaUncheckedCreateInput = {
    id?: number
    porcentaje: number
    descripcion: string
    fechaInicio: Date | string
    fechaFin: Date | string
    estado: string
    productoId: number
  }

  export type OfertaUpdateInput = {
    porcentaje?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    producto?: ProductoUpdateOneRequiredWithoutOfertaNestedInput
  }

  export type OfertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcentaje?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type OfertaCreateManyInput = {
    id?: number
    porcentaje: number
    descripcion: string
    fechaInicio: Date | string
    fechaFin: Date | string
    estado: string
    productoId: number
  }

  export type OfertaUpdateManyMutationInput = {
    porcentaje?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OfertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcentaje?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type SucursalCreateInput = {
    nombre: string
    direccion: string
    ciudad: string
    region: string
    productos?: ProductoSucursalCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion: string
    ciudad: string
    region: string
    productos?: ProductoSucursalUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    productos?: ProductoSucursalUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    productos?: ProductoSucursalUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalCreateManyInput = {
    id?: number
    nombre: string
    direccion: string
    ciudad: string
    region: string
  }

  export type SucursalUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type SucursalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoSucursalCreateInput = {
    stock: number
    producto: ProductoCreateNestedOneWithoutSucursalesInput
    sucursal: SucursalCreateNestedOneWithoutProductosInput
  }

  export type ProductoSucursalUncheckedCreateInput = {
    productoId: number
    sucursalId: number
    stock: number
  }

  export type ProductoSucursalUpdateInput = {
    stock?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutSucursalesNestedInput
    sucursal?: SucursalUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoSucursalUncheckedUpdateInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    sucursalId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoSucursalCreateManyInput = {
    productoId: number
    sucursalId: number
    stock: number
  }

  export type ProductoSucursalUpdateManyMutationInput = {
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoSucursalUncheckedUpdateManyInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    sucursalId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DireccionListRelationFilter = {
    every?: DireccionWhereInput
    some?: DireccionWhereInput
    none?: DireccionWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type DireccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    tarjetas?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    tarjetas?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    tarjetas?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type DireccionOrderByRelevanceInput = {
    fields: DireccionOrderByRelevanceFieldEnum | DireccionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DireccionCountOrderByAggregateInput = {
    id?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    numero?: SortOrder
    calle?: SortOrder
    usuarioId?: SortOrder
  }

  export type DireccionAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type DireccionMaxOrderByAggregateInput = {
    id?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    numero?: SortOrder
    calle?: SortOrder
    usuarioId?: SortOrder
  }

  export type DireccionMinOrderByAggregateInput = {
    id?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    numero?: SortOrder
    calle?: SortOrder
    usuarioId?: SortOrder
  }

  export type DireccionSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DireccionScalarRelationFilter = {
    is?: DireccionWhereInput
    isNot?: DireccionWhereInput
  }

  export type LineaDePedidoListRelationFilter = {
    every?: LineaDePedidoWhereInput
    some?: LineaDePedidoWhereInput
    none?: LineaDePedidoWhereInput
  }

  export type LineaDePedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelevanceInput = {
    fields: PedidoOrderByRelevanceFieldEnum | PedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type LineaDePedidoCountOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type LineaDePedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type LineaDePedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type LineaDePedidoMinOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type LineaDePedidoSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    total?: SortOrder
    productoId?: SortOrder
    pedidoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type OfertaNullableScalarRelationFilter = {
    is?: OfertaWhereInput | null
    isNot?: OfertaWhereInput | null
  }

  export type ProductoSucursalListRelationFilter = {
    every?: ProductoSucursalWhereInput
    some?: ProductoSucursalWhereInput
    none?: ProductoSucursalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductoSucursalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrder
    imagenUrl?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrder
    imagenUrl?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrder
    imagenUrl?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
    ofertaId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OfertaOrderByRelevanceInput = {
    fields: OfertaOrderByRelevanceFieldEnum | OfertaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OfertaCountOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    productoId?: SortOrder
  }

  export type OfertaAvgOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    productoId?: SortOrder
  }

  export type OfertaMaxOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    productoId?: SortOrder
  }

  export type OfertaMinOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    descripcion?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    productoId?: SortOrder
  }

  export type OfertaSumOrderByAggregateInput = {
    id?: SortOrder
    porcentaje?: SortOrder
    productoId?: SortOrder
  }

  export type SucursalOrderByRelevanceInput = {
    fields: SucursalOrderByRelevanceFieldEnum | SucursalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SucursalCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    region?: SortOrder
  }

  export type SucursalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SucursalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    region?: SortOrder
  }

  export type SucursalMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    ciudad?: SortOrder
    region?: SortOrder
  }

  export type SucursalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SucursalScalarRelationFilter = {
    is?: SucursalWhereInput
    isNot?: SucursalWhereInput
  }

  export type ProductoSucursalProductoIdSucursalIdCompoundUniqueInput = {
    productoId: number
    sucursalId: number
  }

  export type ProductoSucursalCountOrderByAggregateInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
  }

  export type ProductoSucursalAvgOrderByAggregateInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
  }

  export type ProductoSucursalMaxOrderByAggregateInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
  }

  export type ProductoSucursalMinOrderByAggregateInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
  }

  export type ProductoSucursalSumOrderByAggregateInput = {
    productoId?: SortOrder
    sucursalId?: SortOrder
    stock?: SortOrder
  }

  export type DireccionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DireccionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutUsuarioInput | DireccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutUsuarioInput | DireccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutUsuarioInput | DireccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DireccionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutUsuarioInput | DireccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutUsuarioInput | DireccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutUsuarioInput | DireccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDireccionInput = {
    create?: XOR<UsuarioCreateWithoutDireccionInput, UsuarioUncheckedCreateWithoutDireccionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDireccionInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutDireccionInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutDireccionNestedInput = {
    create?: XOR<UsuarioCreateWithoutDireccionInput, UsuarioUncheckedCreateWithoutDireccionInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDireccionInput
    upsert?: UsuarioUpsertWithoutDireccionInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDireccionInput, UsuarioUpdateWithoutDireccionInput>, UsuarioUncheckedUpdateWithoutDireccionInput>
  }

  export type PedidoUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutDireccionInput | PedidoUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutDireccionInput | PedidoUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutDireccionInput | PedidoUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutDireccionInput | PedidoUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutDireccionInput | PedidoUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutDireccionInput | PedidoUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DireccionCreateNestedOneWithoutPedidosInput = {
    create?: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutPedidosInput
    connect?: DireccionWhereUniqueInput
  }

  export type LineaDePedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<LineaDePedidoCreateWithoutPedidoInput, LineaDePedidoUncheckedCreateWithoutPedidoInput> | LineaDePedidoCreateWithoutPedidoInput[] | LineaDePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutPedidoInput | LineaDePedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: LineaDePedidoCreateManyPedidoInputEnvelope
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
  }

  export type LineaDePedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<LineaDePedidoCreateWithoutPedidoInput, LineaDePedidoUncheckedCreateWithoutPedidoInput> | LineaDePedidoCreateWithoutPedidoInput[] | LineaDePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutPedidoInput | LineaDePedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: LineaDePedidoCreateManyPedidoInputEnvelope
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type DireccionUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutPedidosInput
    upsert?: DireccionUpsertWithoutPedidosInput
    connect?: DireccionWhereUniqueInput
    update?: XOR<XOR<DireccionUpdateToOneWithWhereWithoutPedidosInput, DireccionUpdateWithoutPedidosInput>, DireccionUncheckedUpdateWithoutPedidosInput>
  }

  export type LineaDePedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<LineaDePedidoCreateWithoutPedidoInput, LineaDePedidoUncheckedCreateWithoutPedidoInput> | LineaDePedidoCreateWithoutPedidoInput[] | LineaDePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutPedidoInput | LineaDePedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: LineaDePedidoUpsertWithWhereUniqueWithoutPedidoInput | LineaDePedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: LineaDePedidoCreateManyPedidoInputEnvelope
    set?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    disconnect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    delete?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    update?: LineaDePedidoUpdateWithWhereUniqueWithoutPedidoInput | LineaDePedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: LineaDePedidoUpdateManyWithWhereWithoutPedidoInput | LineaDePedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: LineaDePedidoScalarWhereInput | LineaDePedidoScalarWhereInput[]
  }

  export type LineaDePedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<LineaDePedidoCreateWithoutPedidoInput, LineaDePedidoUncheckedCreateWithoutPedidoInput> | LineaDePedidoCreateWithoutPedidoInput[] | LineaDePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutPedidoInput | LineaDePedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: LineaDePedidoUpsertWithWhereUniqueWithoutPedidoInput | LineaDePedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: LineaDePedidoCreateManyPedidoInputEnvelope
    set?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    disconnect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    delete?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    update?: LineaDePedidoUpdateWithWhereUniqueWithoutPedidoInput | LineaDePedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: LineaDePedidoUpdateManyWithWhereWithoutPedidoInput | LineaDePedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: LineaDePedidoScalarWhereInput | LineaDePedidoScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutLineasDePedidoInput = {
    create?: XOR<ProductoCreateWithoutLineasDePedidoInput, ProductoUncheckedCreateWithoutLineasDePedidoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLineasDePedidoInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutLineasDePedidoInput = {
    create?: XOR<PedidoCreateWithoutLineasDePedidoInput, PedidoUncheckedCreateWithoutLineasDePedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutLineasDePedidoInput
    connect?: PedidoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductoUpdateOneRequiredWithoutLineasDePedidoNestedInput = {
    create?: XOR<ProductoCreateWithoutLineasDePedidoInput, ProductoUncheckedCreateWithoutLineasDePedidoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLineasDePedidoInput
    upsert?: ProductoUpsertWithoutLineasDePedidoInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutLineasDePedidoInput, ProductoUpdateWithoutLineasDePedidoInput>, ProductoUncheckedUpdateWithoutLineasDePedidoInput>
  }

  export type PedidoUpdateOneRequiredWithoutLineasDePedidoNestedInput = {
    create?: XOR<PedidoCreateWithoutLineasDePedidoInput, PedidoUncheckedCreateWithoutLineasDePedidoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutLineasDePedidoInput
    upsert?: PedidoUpsertWithoutLineasDePedidoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutLineasDePedidoInput, PedidoUpdateWithoutLineasDePedidoInput>, PedidoUncheckedUpdateWithoutLineasDePedidoInput>
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type OfertaCreateNestedOneWithoutProductoInput = {
    create?: XOR<OfertaCreateWithoutProductoInput, OfertaUncheckedCreateWithoutProductoInput>
    connectOrCreate?: OfertaCreateOrConnectWithoutProductoInput
    connect?: OfertaWhereUniqueInput
  }

  export type ProductoSucursalCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoSucursalCreateWithoutProductoInput, ProductoSucursalUncheckedCreateWithoutProductoInput> | ProductoSucursalCreateWithoutProductoInput[] | ProductoSucursalUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutProductoInput | ProductoSucursalCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoSucursalCreateManyProductoInputEnvelope
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
  }

  export type LineaDePedidoCreateNestedManyWithoutProductoInput = {
    create?: XOR<LineaDePedidoCreateWithoutProductoInput, LineaDePedidoUncheckedCreateWithoutProductoInput> | LineaDePedidoCreateWithoutProductoInput[] | LineaDePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutProductoInput | LineaDePedidoCreateOrConnectWithoutProductoInput[]
    createMany?: LineaDePedidoCreateManyProductoInputEnvelope
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
  }

  export type OfertaUncheckedCreateNestedOneWithoutProductoInput = {
    create?: XOR<OfertaCreateWithoutProductoInput, OfertaUncheckedCreateWithoutProductoInput>
    connectOrCreate?: OfertaCreateOrConnectWithoutProductoInput
    connect?: OfertaWhereUniqueInput
  }

  export type ProductoSucursalUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ProductoSucursalCreateWithoutProductoInput, ProductoSucursalUncheckedCreateWithoutProductoInput> | ProductoSucursalCreateWithoutProductoInput[] | ProductoSucursalUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutProductoInput | ProductoSucursalCreateOrConnectWithoutProductoInput[]
    createMany?: ProductoSucursalCreateManyProductoInputEnvelope
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
  }

  export type LineaDePedidoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<LineaDePedidoCreateWithoutProductoInput, LineaDePedidoUncheckedCreateWithoutProductoInput> | LineaDePedidoCreateWithoutProductoInput[] | LineaDePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutProductoInput | LineaDePedidoCreateOrConnectWithoutProductoInput[]
    createMany?: LineaDePedidoCreateManyProductoInputEnvelope
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type OfertaUpdateOneWithoutProductoNestedInput = {
    create?: XOR<OfertaCreateWithoutProductoInput, OfertaUncheckedCreateWithoutProductoInput>
    connectOrCreate?: OfertaCreateOrConnectWithoutProductoInput
    upsert?: OfertaUpsertWithoutProductoInput
    disconnect?: OfertaWhereInput | boolean
    delete?: OfertaWhereInput | boolean
    connect?: OfertaWhereUniqueInput
    update?: XOR<XOR<OfertaUpdateToOneWithWhereWithoutProductoInput, OfertaUpdateWithoutProductoInput>, OfertaUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoSucursalUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoSucursalCreateWithoutProductoInput, ProductoSucursalUncheckedCreateWithoutProductoInput> | ProductoSucursalCreateWithoutProductoInput[] | ProductoSucursalUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutProductoInput | ProductoSucursalCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoSucursalUpsertWithWhereUniqueWithoutProductoInput | ProductoSucursalUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoSucursalCreateManyProductoInputEnvelope
    set?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    disconnect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    delete?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    update?: ProductoSucursalUpdateWithWhereUniqueWithoutProductoInput | ProductoSucursalUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoSucursalUpdateManyWithWhereWithoutProductoInput | ProductoSucursalUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoSucursalScalarWhereInput | ProductoSucursalScalarWhereInput[]
  }

  export type LineaDePedidoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LineaDePedidoCreateWithoutProductoInput, LineaDePedidoUncheckedCreateWithoutProductoInput> | LineaDePedidoCreateWithoutProductoInput[] | LineaDePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutProductoInput | LineaDePedidoCreateOrConnectWithoutProductoInput[]
    upsert?: LineaDePedidoUpsertWithWhereUniqueWithoutProductoInput | LineaDePedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LineaDePedidoCreateManyProductoInputEnvelope
    set?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    disconnect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    delete?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    update?: LineaDePedidoUpdateWithWhereUniqueWithoutProductoInput | LineaDePedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LineaDePedidoUpdateManyWithWhereWithoutProductoInput | LineaDePedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LineaDePedidoScalarWhereInput | LineaDePedidoScalarWhereInput[]
  }

  export type OfertaUncheckedUpdateOneWithoutProductoNestedInput = {
    create?: XOR<OfertaCreateWithoutProductoInput, OfertaUncheckedCreateWithoutProductoInput>
    connectOrCreate?: OfertaCreateOrConnectWithoutProductoInput
    upsert?: OfertaUpsertWithoutProductoInput
    disconnect?: OfertaWhereInput | boolean
    delete?: OfertaWhereInput | boolean
    connect?: OfertaWhereUniqueInput
    update?: XOR<XOR<OfertaUpdateToOneWithWhereWithoutProductoInput, OfertaUpdateWithoutProductoInput>, OfertaUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoSucursalUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ProductoSucursalCreateWithoutProductoInput, ProductoSucursalUncheckedCreateWithoutProductoInput> | ProductoSucursalCreateWithoutProductoInput[] | ProductoSucursalUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutProductoInput | ProductoSucursalCreateOrConnectWithoutProductoInput[]
    upsert?: ProductoSucursalUpsertWithWhereUniqueWithoutProductoInput | ProductoSucursalUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ProductoSucursalCreateManyProductoInputEnvelope
    set?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    disconnect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    delete?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    update?: ProductoSucursalUpdateWithWhereUniqueWithoutProductoInput | ProductoSucursalUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ProductoSucursalUpdateManyWithWhereWithoutProductoInput | ProductoSucursalUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ProductoSucursalScalarWhereInput | ProductoSucursalScalarWhereInput[]
  }

  export type LineaDePedidoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LineaDePedidoCreateWithoutProductoInput, LineaDePedidoUncheckedCreateWithoutProductoInput> | LineaDePedidoCreateWithoutProductoInput[] | LineaDePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaDePedidoCreateOrConnectWithoutProductoInput | LineaDePedidoCreateOrConnectWithoutProductoInput[]
    upsert?: LineaDePedidoUpsertWithWhereUniqueWithoutProductoInput | LineaDePedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LineaDePedidoCreateManyProductoInputEnvelope
    set?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    disconnect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    delete?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    connect?: LineaDePedidoWhereUniqueInput | LineaDePedidoWhereUniqueInput[]
    update?: LineaDePedidoUpdateWithWhereUniqueWithoutProductoInput | LineaDePedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LineaDePedidoUpdateManyWithWhereWithoutProductoInput | LineaDePedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LineaDePedidoScalarWhereInput | LineaDePedidoScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutOfertaInput = {
    create?: XOR<ProductoCreateWithoutOfertaInput, ProductoUncheckedCreateWithoutOfertaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutOfertaInput
    connect?: ProductoWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutOfertaNestedInput = {
    create?: XOR<ProductoCreateWithoutOfertaInput, ProductoUncheckedCreateWithoutOfertaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutOfertaInput
    upsert?: ProductoUpsertWithoutOfertaInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutOfertaInput, ProductoUpdateWithoutOfertaInput>, ProductoUncheckedUpdateWithoutOfertaInput>
  }

  export type ProductoSucursalCreateNestedManyWithoutSucursalInput = {
    create?: XOR<ProductoSucursalCreateWithoutSucursalInput, ProductoSucursalUncheckedCreateWithoutSucursalInput> | ProductoSucursalCreateWithoutSucursalInput[] | ProductoSucursalUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutSucursalInput | ProductoSucursalCreateOrConnectWithoutSucursalInput[]
    createMany?: ProductoSucursalCreateManySucursalInputEnvelope
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
  }

  export type ProductoSucursalUncheckedCreateNestedManyWithoutSucursalInput = {
    create?: XOR<ProductoSucursalCreateWithoutSucursalInput, ProductoSucursalUncheckedCreateWithoutSucursalInput> | ProductoSucursalCreateWithoutSucursalInput[] | ProductoSucursalUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutSucursalInput | ProductoSucursalCreateOrConnectWithoutSucursalInput[]
    createMany?: ProductoSucursalCreateManySucursalInputEnvelope
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
  }

  export type ProductoSucursalUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<ProductoSucursalCreateWithoutSucursalInput, ProductoSucursalUncheckedCreateWithoutSucursalInput> | ProductoSucursalCreateWithoutSucursalInput[] | ProductoSucursalUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutSucursalInput | ProductoSucursalCreateOrConnectWithoutSucursalInput[]
    upsert?: ProductoSucursalUpsertWithWhereUniqueWithoutSucursalInput | ProductoSucursalUpsertWithWhereUniqueWithoutSucursalInput[]
    createMany?: ProductoSucursalCreateManySucursalInputEnvelope
    set?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    disconnect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    delete?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    update?: ProductoSucursalUpdateWithWhereUniqueWithoutSucursalInput | ProductoSucursalUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: ProductoSucursalUpdateManyWithWhereWithoutSucursalInput | ProductoSucursalUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: ProductoSucursalScalarWhereInput | ProductoSucursalScalarWhereInput[]
  }

  export type ProductoSucursalUncheckedUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<ProductoSucursalCreateWithoutSucursalInput, ProductoSucursalUncheckedCreateWithoutSucursalInput> | ProductoSucursalCreateWithoutSucursalInput[] | ProductoSucursalUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: ProductoSucursalCreateOrConnectWithoutSucursalInput | ProductoSucursalCreateOrConnectWithoutSucursalInput[]
    upsert?: ProductoSucursalUpsertWithWhereUniqueWithoutSucursalInput | ProductoSucursalUpsertWithWhereUniqueWithoutSucursalInput[]
    createMany?: ProductoSucursalCreateManySucursalInputEnvelope
    set?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    disconnect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    delete?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    connect?: ProductoSucursalWhereUniqueInput | ProductoSucursalWhereUniqueInput[]
    update?: ProductoSucursalUpdateWithWhereUniqueWithoutSucursalInput | ProductoSucursalUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: ProductoSucursalUpdateManyWithWhereWithoutSucursalInput | ProductoSucursalUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: ProductoSucursalScalarWhereInput | ProductoSucursalScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutSucursalesInput = {
    create?: XOR<ProductoCreateWithoutSucursalesInput, ProductoUncheckedCreateWithoutSucursalesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutSucursalesInput
    connect?: ProductoWhereUniqueInput
  }

  export type SucursalCreateNestedOneWithoutProductosInput = {
    create?: XOR<SucursalCreateWithoutProductosInput, SucursalUncheckedCreateWithoutProductosInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutProductosInput
    connect?: SucursalWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutSucursalesNestedInput = {
    create?: XOR<ProductoCreateWithoutSucursalesInput, ProductoUncheckedCreateWithoutSucursalesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutSucursalesInput
    upsert?: ProductoUpsertWithoutSucursalesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutSucursalesInput, ProductoUpdateWithoutSucursalesInput>, ProductoUncheckedUpdateWithoutSucursalesInput>
  }

  export type SucursalUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<SucursalCreateWithoutProductosInput, SucursalUncheckedCreateWithoutProductosInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutProductosInput
    upsert?: SucursalUpsertWithoutProductosInput
    connect?: SucursalWhereUniqueInput
    update?: XOR<XOR<SucursalUpdateToOneWithWhereWithoutProductosInput, SucursalUpdateWithoutProductosInput>, SucursalUncheckedUpdateWithoutProductosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DireccionCreateWithoutUsuarioInput = {
    comuna: string
    region: string
    numero: number
    calle: string
    pedidos?: PedidoCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    comuna: string
    region: string
    numero: number
    calle: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionCreateOrConnectWithoutUsuarioInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput>
  }

  export type DireccionCreateManyUsuarioInputEnvelope = {
    data: DireccionCreateManyUsuarioInput | DireccionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutUsuarioInput = {
    fechaPedido: Date | string
    estado: string
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    direccionId: number
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type DireccionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutUsuarioInput, DireccionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutUsuarioInput, DireccionUncheckedUpdateWithoutUsuarioInput>
  }

  export type DireccionUpdateManyWithWhereWithoutUsuarioInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DireccionScalarWhereInput = {
    AND?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    OR?: DireccionScalarWhereInput[]
    NOT?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    id?: IntFilter<"Direccion"> | number
    comuna?: StringFilter<"Direccion"> | string
    region?: StringFilter<"Direccion"> | string
    numero?: IntFilter<"Direccion"> | number
    calle?: StringFilter<"Direccion"> | string
    usuarioId?: IntFilter<"Direccion"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    estado?: StringFilter<"Pedido"> | string
    usuarioId?: IntFilter<"Pedido"> | number
    direccionId?: IntFilter<"Pedido"> | number
  }

  export type UsuarioCreateWithoutDireccionInput = {
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDireccionInput = {
    id?: number
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDireccionInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDireccionInput, UsuarioUncheckedCreateWithoutDireccionInput>
  }

  export type PedidoCreateWithoutDireccionInput = {
    fechaPedido: Date | string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutDireccionInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    usuarioId: number
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutDireccionInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput>
  }

  export type PedidoCreateManyDireccionInputEnvelope = {
    data: PedidoCreateManyDireccionInput | PedidoCreateManyDireccionInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDireccionInput = {
    update: XOR<UsuarioUpdateWithoutDireccionInput, UsuarioUncheckedUpdateWithoutDireccionInput>
    create: XOR<UsuarioCreateWithoutDireccionInput, UsuarioUncheckedCreateWithoutDireccionInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDireccionInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDireccionInput, UsuarioUncheckedUpdateWithoutDireccionInput>
  }

  export type UsuarioUpdateWithoutDireccionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutDireccionInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutDireccionInput, PedidoUncheckedUpdateWithoutDireccionInput>
    create: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutDireccionInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutDireccionInput, PedidoUncheckedUpdateWithoutDireccionInput>
  }

  export type PedidoUpdateManyWithWhereWithoutDireccionInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutDireccionInput>
  }

  export type UsuarioCreateWithoutPedidosInput = {
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    direccion?: DireccionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    email: string
    contrasena: string
    telefono: string
    tarjetas: string
    direccion?: DireccionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type DireccionCreateWithoutPedidosInput = {
    comuna: string
    region: string
    numero: number
    calle: string
    usuario: UsuarioCreateNestedOneWithoutDireccionInput
  }

  export type DireccionUncheckedCreateWithoutPedidosInput = {
    id?: number
    comuna: string
    region: string
    numero: number
    calle: string
    usuarioId: number
  }

  export type DireccionCreateOrConnectWithoutPedidosInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
  }

  export type LineaDePedidoCreateWithoutPedidoInput = {
    cantidad: number
    precioUnitario: number
    total: number
    producto: ProductoCreateNestedOneWithoutLineasDePedidoInput
  }

  export type LineaDePedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    productoId: number
  }

  export type LineaDePedidoCreateOrConnectWithoutPedidoInput = {
    where: LineaDePedidoWhereUniqueInput
    create: XOR<LineaDePedidoCreateWithoutPedidoInput, LineaDePedidoUncheckedCreateWithoutPedidoInput>
  }

  export type LineaDePedidoCreateManyPedidoInputEnvelope = {
    data: LineaDePedidoCreateManyPedidoInput | LineaDePedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
    direccion?: DireccionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    tarjetas?: StringFieldUpdateOperationsInput | string
    direccion?: DireccionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DireccionUpsertWithoutPedidosInput = {
    update: XOR<DireccionUpdateWithoutPedidosInput, DireccionUncheckedUpdateWithoutPedidosInput>
    create: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
    where?: DireccionWhereInput
  }

  export type DireccionUpdateToOneWithWhereWithoutPedidosInput = {
    where?: DireccionWhereInput
    data: XOR<DireccionUpdateWithoutPedidosInput, DireccionUncheckedUpdateWithoutPedidosInput>
  }

  export type DireccionUpdateWithoutPedidosInput = {
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: LineaDePedidoWhereUniqueInput
    update: XOR<LineaDePedidoUpdateWithoutPedidoInput, LineaDePedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<LineaDePedidoCreateWithoutPedidoInput, LineaDePedidoUncheckedCreateWithoutPedidoInput>
  }

  export type LineaDePedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: LineaDePedidoWhereUniqueInput
    data: XOR<LineaDePedidoUpdateWithoutPedidoInput, LineaDePedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type LineaDePedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: LineaDePedidoScalarWhereInput
    data: XOR<LineaDePedidoUpdateManyMutationInput, LineaDePedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type LineaDePedidoScalarWhereInput = {
    AND?: LineaDePedidoScalarWhereInput | LineaDePedidoScalarWhereInput[]
    OR?: LineaDePedidoScalarWhereInput[]
    NOT?: LineaDePedidoScalarWhereInput | LineaDePedidoScalarWhereInput[]
    id?: IntFilter<"LineaDePedido"> | number
    cantidad?: IntFilter<"LineaDePedido"> | number
    precioUnitario?: FloatFilter<"LineaDePedido"> | number
    total?: FloatFilter<"LineaDePedido"> | number
    productoId?: IntFilter<"LineaDePedido"> | number
    pedidoId?: IntFilter<"LineaDePedido"> | number
  }

  export type ProductoCreateWithoutLineasDePedidoInput = {
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    oferta?: OfertaCreateNestedOneWithoutProductoInput
    sucursales?: ProductoSucursalCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutLineasDePedidoInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    categoriaId: number
    ofertaId?: number | null
    imagenUrl?: string | null
    oferta?: OfertaUncheckedCreateNestedOneWithoutProductoInput
    sucursales?: ProductoSucursalUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutLineasDePedidoInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutLineasDePedidoInput, ProductoUncheckedCreateWithoutLineasDePedidoInput>
  }

  export type PedidoCreateWithoutLineasDePedidoInput = {
    fechaPedido: Date | string
    estado: string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    direccion: DireccionCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutLineasDePedidoInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    usuarioId: number
    direccionId: number
  }

  export type PedidoCreateOrConnectWithoutLineasDePedidoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutLineasDePedidoInput, PedidoUncheckedCreateWithoutLineasDePedidoInput>
  }

  export type ProductoUpsertWithoutLineasDePedidoInput = {
    update: XOR<ProductoUpdateWithoutLineasDePedidoInput, ProductoUncheckedUpdateWithoutLineasDePedidoInput>
    create: XOR<ProductoCreateWithoutLineasDePedidoInput, ProductoUncheckedCreateWithoutLineasDePedidoInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutLineasDePedidoInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutLineasDePedidoInput, ProductoUncheckedUpdateWithoutLineasDePedidoInput>
  }

  export type ProductoUpdateWithoutLineasDePedidoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    oferta?: OfertaUpdateOneWithoutProductoNestedInput
    sucursales?: ProductoSucursalUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutLineasDePedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oferta?: OfertaUncheckedUpdateOneWithoutProductoNestedInput
    sucursales?: ProductoSucursalUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type PedidoUpsertWithoutLineasDePedidoInput = {
    update: XOR<PedidoUpdateWithoutLineasDePedidoInput, PedidoUncheckedUpdateWithoutLineasDePedidoInput>
    create: XOR<PedidoCreateWithoutLineasDePedidoInput, PedidoUncheckedCreateWithoutLineasDePedidoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutLineasDePedidoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutLineasDePedidoInput, PedidoUncheckedUpdateWithoutLineasDePedidoInput>
  }

  export type PedidoUpdateWithoutLineasDePedidoInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutLineasDePedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
    estado: string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    estado: string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type OfertaCreateWithoutProductoInput = {
    porcentaje: number
    descripcion: string
    fechaInicio: Date | string
    fechaFin: Date | string
    estado: string
  }

  export type OfertaUncheckedCreateWithoutProductoInput = {
    id?: number
    porcentaje: number
    descripcion: string
    fechaInicio: Date | string
    fechaFin: Date | string
    estado: string
  }

  export type OfertaCreateOrConnectWithoutProductoInput = {
    where: OfertaWhereUniqueInput
    create: XOR<OfertaCreateWithoutProductoInput, OfertaUncheckedCreateWithoutProductoInput>
  }

  export type ProductoSucursalCreateWithoutProductoInput = {
    stock: number
    sucursal: SucursalCreateNestedOneWithoutProductosInput
  }

  export type ProductoSucursalUncheckedCreateWithoutProductoInput = {
    sucursalId: number
    stock: number
  }

  export type ProductoSucursalCreateOrConnectWithoutProductoInput = {
    where: ProductoSucursalWhereUniqueInput
    create: XOR<ProductoSucursalCreateWithoutProductoInput, ProductoSucursalUncheckedCreateWithoutProductoInput>
  }

  export type ProductoSucursalCreateManyProductoInputEnvelope = {
    data: ProductoSucursalCreateManyProductoInput | ProductoSucursalCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type LineaDePedidoCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: number
    total: number
    pedido: PedidoCreateNestedOneWithoutLineasDePedidoInput
  }

  export type LineaDePedidoUncheckedCreateWithoutProductoInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    pedidoId: number
  }

  export type LineaDePedidoCreateOrConnectWithoutProductoInput = {
    where: LineaDePedidoWhereUniqueInput
    create: XOR<LineaDePedidoCreateWithoutProductoInput, LineaDePedidoUncheckedCreateWithoutProductoInput>
  }

  export type LineaDePedidoCreateManyProductoInputEnvelope = {
    data: LineaDePedidoCreateManyProductoInput | LineaDePedidoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OfertaUpsertWithoutProductoInput = {
    update: XOR<OfertaUpdateWithoutProductoInput, OfertaUncheckedUpdateWithoutProductoInput>
    create: XOR<OfertaCreateWithoutProductoInput, OfertaUncheckedCreateWithoutProductoInput>
    where?: OfertaWhereInput
  }

  export type OfertaUpdateToOneWithWhereWithoutProductoInput = {
    where?: OfertaWhereInput
    data: XOR<OfertaUpdateWithoutProductoInput, OfertaUncheckedUpdateWithoutProductoInput>
  }

  export type OfertaUpdateWithoutProductoInput = {
    porcentaje?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OfertaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    porcentaje?: FloatFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoSucursalUpsertWithWhereUniqueWithoutProductoInput = {
    where: ProductoSucursalWhereUniqueInput
    update: XOR<ProductoSucursalUpdateWithoutProductoInput, ProductoSucursalUncheckedUpdateWithoutProductoInput>
    create: XOR<ProductoSucursalCreateWithoutProductoInput, ProductoSucursalUncheckedCreateWithoutProductoInput>
  }

  export type ProductoSucursalUpdateWithWhereUniqueWithoutProductoInput = {
    where: ProductoSucursalWhereUniqueInput
    data: XOR<ProductoSucursalUpdateWithoutProductoInput, ProductoSucursalUncheckedUpdateWithoutProductoInput>
  }

  export type ProductoSucursalUpdateManyWithWhereWithoutProductoInput = {
    where: ProductoSucursalScalarWhereInput
    data: XOR<ProductoSucursalUpdateManyMutationInput, ProductoSucursalUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoSucursalScalarWhereInput = {
    AND?: ProductoSucursalScalarWhereInput | ProductoSucursalScalarWhereInput[]
    OR?: ProductoSucursalScalarWhereInput[]
    NOT?: ProductoSucursalScalarWhereInput | ProductoSucursalScalarWhereInput[]
    productoId?: IntFilter<"ProductoSucursal"> | number
    sucursalId?: IntFilter<"ProductoSucursal"> | number
    stock?: IntFilter<"ProductoSucursal"> | number
  }

  export type LineaDePedidoUpsertWithWhereUniqueWithoutProductoInput = {
    where: LineaDePedidoWhereUniqueInput
    update: XOR<LineaDePedidoUpdateWithoutProductoInput, LineaDePedidoUncheckedUpdateWithoutProductoInput>
    create: XOR<LineaDePedidoCreateWithoutProductoInput, LineaDePedidoUncheckedCreateWithoutProductoInput>
  }

  export type LineaDePedidoUpdateWithWhereUniqueWithoutProductoInput = {
    where: LineaDePedidoWhereUniqueInput
    data: XOR<LineaDePedidoUpdateWithoutProductoInput, LineaDePedidoUncheckedUpdateWithoutProductoInput>
  }

  export type LineaDePedidoUpdateManyWithWhereWithoutProductoInput = {
    where: LineaDePedidoScalarWhereInput
    data: XOR<LineaDePedidoUpdateManyMutationInput, LineaDePedidoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
    oferta?: OfertaCreateNestedOneWithoutProductoInput
    sucursales?: ProductoSucursalCreateNestedManyWithoutProductoInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
    oferta?: OfertaUncheckedCreateNestedOneWithoutProductoInput
    sucursales?: ProductoSucursalUncheckedCreateNestedManyWithoutProductoInput
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: FloatFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    ofertaId?: IntNullableFilter<"Producto"> | number | null
    imagenUrl?: StringNullableFilter<"Producto"> | string | null
  }

  export type ProductoCreateWithoutOfertaInput = {
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    sucursales?: ProductoSucursalCreateNestedManyWithoutProductoInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutOfertaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    categoriaId: number
    ofertaId?: number | null
    imagenUrl?: string | null
    sucursales?: ProductoSucursalUncheckedCreateNestedManyWithoutProductoInput
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutOfertaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutOfertaInput, ProductoUncheckedCreateWithoutOfertaInput>
  }

  export type ProductoUpsertWithoutOfertaInput = {
    update: XOR<ProductoUpdateWithoutOfertaInput, ProductoUncheckedUpdateWithoutOfertaInput>
    create: XOR<ProductoCreateWithoutOfertaInput, ProductoUncheckedCreateWithoutOfertaInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutOfertaInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutOfertaInput, ProductoUncheckedUpdateWithoutOfertaInput>
  }

  export type ProductoUpdateWithoutOfertaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    sucursales?: ProductoSucursalUpdateManyWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutOfertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sucursales?: ProductoSucursalUncheckedUpdateManyWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoSucursalCreateWithoutSucursalInput = {
    stock: number
    producto: ProductoCreateNestedOneWithoutSucursalesInput
  }

  export type ProductoSucursalUncheckedCreateWithoutSucursalInput = {
    productoId: number
    stock: number
  }

  export type ProductoSucursalCreateOrConnectWithoutSucursalInput = {
    where: ProductoSucursalWhereUniqueInput
    create: XOR<ProductoSucursalCreateWithoutSucursalInput, ProductoSucursalUncheckedCreateWithoutSucursalInput>
  }

  export type ProductoSucursalCreateManySucursalInputEnvelope = {
    data: ProductoSucursalCreateManySucursalInput | ProductoSucursalCreateManySucursalInput[]
    skipDuplicates?: boolean
  }

  export type ProductoSucursalUpsertWithWhereUniqueWithoutSucursalInput = {
    where: ProductoSucursalWhereUniqueInput
    update: XOR<ProductoSucursalUpdateWithoutSucursalInput, ProductoSucursalUncheckedUpdateWithoutSucursalInput>
    create: XOR<ProductoSucursalCreateWithoutSucursalInput, ProductoSucursalUncheckedCreateWithoutSucursalInput>
  }

  export type ProductoSucursalUpdateWithWhereUniqueWithoutSucursalInput = {
    where: ProductoSucursalWhereUniqueInput
    data: XOR<ProductoSucursalUpdateWithoutSucursalInput, ProductoSucursalUncheckedUpdateWithoutSucursalInput>
  }

  export type ProductoSucursalUpdateManyWithWhereWithoutSucursalInput = {
    where: ProductoSucursalScalarWhereInput
    data: XOR<ProductoSucursalUpdateManyMutationInput, ProductoSucursalUncheckedUpdateManyWithoutSucursalInput>
  }

  export type ProductoCreateWithoutSucursalesInput = {
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    oferta?: OfertaCreateNestedOneWithoutProductoInput
    lineasDePedido?: LineaDePedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutSucursalesInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    categoriaId: number
    ofertaId?: number | null
    imagenUrl?: string | null
    oferta?: OfertaUncheckedCreateNestedOneWithoutProductoInput
    lineasDePedido?: LineaDePedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutSucursalesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutSucursalesInput, ProductoUncheckedCreateWithoutSucursalesInput>
  }

  export type SucursalCreateWithoutProductosInput = {
    nombre: string
    direccion: string
    ciudad: string
    region: string
  }

  export type SucursalUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    direccion: string
    ciudad: string
    region: string
  }

  export type SucursalCreateOrConnectWithoutProductosInput = {
    where: SucursalWhereUniqueInput
    create: XOR<SucursalCreateWithoutProductosInput, SucursalUncheckedCreateWithoutProductosInput>
  }

  export type ProductoUpsertWithoutSucursalesInput = {
    update: XOR<ProductoUpdateWithoutSucursalesInput, ProductoUncheckedUpdateWithoutSucursalesInput>
    create: XOR<ProductoCreateWithoutSucursalesInput, ProductoUncheckedCreateWithoutSucursalesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutSucursalesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutSucursalesInput, ProductoUncheckedUpdateWithoutSucursalesInput>
  }

  export type ProductoUpdateWithoutSucursalesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    oferta?: OfertaUpdateOneWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutSucursalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oferta?: OfertaUncheckedUpdateOneWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type SucursalUpsertWithoutProductosInput = {
    update: XOR<SucursalUpdateWithoutProductosInput, SucursalUncheckedUpdateWithoutProductosInput>
    create: XOR<SucursalCreateWithoutProductosInput, SucursalUncheckedCreateWithoutProductosInput>
    where?: SucursalWhereInput
  }

  export type SucursalUpdateToOneWithWhereWithoutProductosInput = {
    where?: SucursalWhereInput
    data: XOR<SucursalUpdateWithoutProductosInput, SucursalUncheckedUpdateWithoutProductosInput>
  }

  export type SucursalUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type SucursalUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionCreateManyUsuarioInput = {
    id?: number
    comuna: string
    region: string
    numero: number
    calle: string
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    direccionId: number
  }

  export type DireccionUpdateWithoutUsuarioInput = {
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    calle?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionId?: IntFieldUpdateOperationsInput | number
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direccionId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateManyDireccionInput = {
    id?: number
    fechaPedido: Date | string
    estado: string
    usuarioId: number
  }

  export type PedidoUpdateWithoutDireccionInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoCreateManyPedidoInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    productoId: number
  }

  export type LineaDePedidoUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutLineasDePedidoNestedInput
  }

  export type LineaDePedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoSucursalCreateManyProductoInput = {
    sucursalId: number
    stock: number
  }

  export type LineaDePedidoCreateManyProductoInput = {
    id?: number
    cantidad: number
    precioUnitario: number
    total: number
    pedidoId: number
  }

  export type ProductoSucursalUpdateWithoutProductoInput = {
    stock?: IntFieldUpdateOperationsInput | number
    sucursal?: SucursalUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoSucursalUncheckedUpdateWithoutProductoInput = {
    sucursalId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoSucursalUncheckedUpdateManyWithoutProductoInput = {
    sucursalId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutLineasDePedidoNestedInput
  }

  export type LineaDePedidoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDePedidoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    ofertaId?: number | null
    imagenUrl?: string | null
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oferta?: OfertaUpdateOneWithoutProductoNestedInput
    sucursales?: ProductoSucursalUpdateManyWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    oferta?: OfertaUncheckedUpdateOneWithoutProductoNestedInput
    sucursales?: ProductoSucursalUncheckedUpdateManyWithoutProductoNestedInput
    lineasDePedido?: LineaDePedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    ofertaId?: NullableIntFieldUpdateOperationsInput | number | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoSucursalCreateManySucursalInput = {
    productoId: number
    stock: number
  }

  export type ProductoSucursalUpdateWithoutSucursalInput = {
    stock?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutSucursalesNestedInput
  }

  export type ProductoSucursalUncheckedUpdateWithoutSucursalInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoSucursalUncheckedUpdateManyWithoutSucursalInput = {
    productoId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}