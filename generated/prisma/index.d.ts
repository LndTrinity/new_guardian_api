
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
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>
/**
 * Model Dispositivo
 * 
 */
export type Dispositivo = $Result.DefaultSelection<Prisma.$DispositivoPayload>
/**
 * Model Dispositivo_config
 * 
 */
export type Dispositivo_config = $Result.DefaultSelection<Prisma.$Dispositivo_configPayload>
/**
 * Model Alerta
 * 
 */
export type Alerta = $Result.DefaultSelection<Prisma.$AlertaPayload>
/**
 * Model Alerta_tipo
 * 
 */
export type Alerta_tipo = $Result.DefaultSelection<Prisma.$Alerta_tipoPayload>
/**
 * Model Localizacao
 * 
 */
export type Localizacao = $Result.DefaultSelection<Prisma.$LocalizacaoPayload>
/**
 * Model Dispositivo_log
 * 
 */
export type Dispositivo_log = $Result.DefaultSelection<Prisma.$Dispositivo_logPayload>
/**
 * Model Usuario_log
 * 
 */
export type Usuario_log = $Result.DefaultSelection<Prisma.$Usuario_logPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Alerta_gravidade: {
  Alerta_vermelho: 'Alerta_vermelho',
  Aviso_amarelo: 'Aviso_amarelo'
};

export type Alerta_gravidade = (typeof Alerta_gravidade)[keyof typeof Alerta_gravidade]


export const Dispositivo_status: {
  Em_movimento: 'Em_movimento',
  Parado: 'Parado',
  Ligado: 'Ligado',
  Desligado: 'Desligado',
  Standby: 'Standby'
};

export type Dispositivo_status = (typeof Dispositivo_status)[keyof typeof Dispositivo_status]

}

export type Alerta_gravidade = $Enums.Alerta_gravidade

export const Alerta_gravidade: typeof $Enums.Alerta_gravidade

export type Dispositivo_status = $Enums.Dispositivo_status

export const Dispositivo_status: typeof $Enums.Dispositivo_status

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
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispositivo`: Exposes CRUD operations for the **Dispositivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivos
    * const dispositivos = await prisma.dispositivo.findMany()
    * ```
    */
  get dispositivo(): Prisma.DispositivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispositivo_config`: Exposes CRUD operations for the **Dispositivo_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivo_configs
    * const dispositivo_configs = await prisma.dispositivo_config.findMany()
    * ```
    */
  get dispositivo_config(): Prisma.Dispositivo_configDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alerta`: Exposes CRUD operations for the **Alerta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alertas
    * const alertas = await prisma.alerta.findMany()
    * ```
    */
  get alerta(): Prisma.AlertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alerta_tipo`: Exposes CRUD operations for the **Alerta_tipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerta_tipos
    * const alerta_tipos = await prisma.alerta_tipo.findMany()
    * ```
    */
  get alerta_tipo(): Prisma.Alerta_tipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **Localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.LocalizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispositivo_log`: Exposes CRUD operations for the **Dispositivo_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispositivo_logs
    * const dispositivo_logs = await prisma.dispositivo_log.findMany()
    * ```
    */
  get dispositivo_log(): Prisma.Dispositivo_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_log`: Exposes CRUD operations for the **Usuario_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_logs
    * const usuario_logs = await prisma.usuario_log.findMany()
    * ```
    */
  get usuario_log(): Prisma.Usuario_logDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
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
    Tokens: 'Tokens',
    Dispositivo: 'Dispositivo',
    Dispositivo_config: 'Dispositivo_config',
    Alerta: 'Alerta',
    Alerta_tipo: 'Alerta_tipo',
    Localizacao: 'Localizacao',
    Dispositivo_log: 'Dispositivo_log',
    Usuario_log: 'Usuario_log'
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
      modelProps: "usuario" | "tokens" | "dispositivo" | "dispositivo_config" | "alerta" | "alerta_tipo" | "localizacao" | "dispositivo_log" | "usuario_log"
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
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      Dispositivo: {
        payload: Prisma.$DispositivoPayload<ExtArgs>
        fields: Prisma.DispositivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispositivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispositivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findFirst: {
            args: Prisma.DispositivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispositivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          findMany: {
            args: Prisma.DispositivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>[]
          }
          create: {
            args: Prisma.DispositivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          createMany: {
            args: Prisma.DispositivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DispositivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          update: {
            args: Prisma.DispositivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          deleteMany: {
            args: Prisma.DispositivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispositivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DispositivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispositivoPayload>
          }
          aggregate: {
            args: Prisma.DispositivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo>
          }
          groupBy: {
            args: Prisma.DispositivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispositivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispositivoCountArgs<ExtArgs>
            result: $Utils.Optional<DispositivoCountAggregateOutputType> | number
          }
        }
      }
      Dispositivo_config: {
        payload: Prisma.$Dispositivo_configPayload<ExtArgs>
        fields: Prisma.Dispositivo_configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Dispositivo_configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Dispositivo_configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>
          }
          findFirst: {
            args: Prisma.Dispositivo_configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Dispositivo_configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>
          }
          findMany: {
            args: Prisma.Dispositivo_configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>[]
          }
          create: {
            args: Prisma.Dispositivo_configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>
          }
          createMany: {
            args: Prisma.Dispositivo_configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Dispositivo_configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>
          }
          update: {
            args: Prisma.Dispositivo_configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>
          }
          deleteMany: {
            args: Prisma.Dispositivo_configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Dispositivo_configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Dispositivo_configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_configPayload>
          }
          aggregate: {
            args: Prisma.Dispositivo_configAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo_config>
          }
          groupBy: {
            args: Prisma.Dispositivo_configGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dispositivo_configGroupByOutputType>[]
          }
          count: {
            args: Prisma.Dispositivo_configCountArgs<ExtArgs>
            result: $Utils.Optional<Dispositivo_configCountAggregateOutputType> | number
          }
        }
      }
      Alerta: {
        payload: Prisma.$AlertaPayload<ExtArgs>
        fields: Prisma.AlertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findFirst: {
            args: Prisma.AlertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          findMany: {
            args: Prisma.AlertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>[]
          }
          create: {
            args: Prisma.AlertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          createMany: {
            args: Prisma.AlertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          update: {
            args: Prisma.AlertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          deleteMany: {
            args: Prisma.AlertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPayload>
          }
          aggregate: {
            args: Prisma.AlertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerta>
          }
          groupBy: {
            args: Prisma.AlertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertaCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaCountAggregateOutputType> | number
          }
        }
      }
      Alerta_tipo: {
        payload: Prisma.$Alerta_tipoPayload<ExtArgs>
        fields: Prisma.Alerta_tipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Alerta_tipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Alerta_tipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>
          }
          findFirst: {
            args: Prisma.Alerta_tipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Alerta_tipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>
          }
          findMany: {
            args: Prisma.Alerta_tipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>[]
          }
          create: {
            args: Prisma.Alerta_tipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>
          }
          createMany: {
            args: Prisma.Alerta_tipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Alerta_tipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>
          }
          update: {
            args: Prisma.Alerta_tipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>
          }
          deleteMany: {
            args: Prisma.Alerta_tipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Alerta_tipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Alerta_tipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Alerta_tipoPayload>
          }
          aggregate: {
            args: Prisma.Alerta_tipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerta_tipo>
          }
          groupBy: {
            args: Prisma.Alerta_tipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Alerta_tipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Alerta_tipoCountArgs<ExtArgs>
            result: $Utils.Optional<Alerta_tipoCountAggregateOutputType> | number
          }
        }
      }
      Localizacao: {
        payload: Prisma.$LocalizacaoPayload<ExtArgs>
        fields: Prisma.LocalizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findFirst: {
            args: Prisma.LocalizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findMany: {
            args: Prisma.LocalizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          create: {
            args: Prisma.LocalizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          createMany: {
            args: Prisma.LocalizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocalizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          update: {
            args: Prisma.LocalizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocalizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.LocalizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
      Dispositivo_log: {
        payload: Prisma.$Dispositivo_logPayload<ExtArgs>
        fields: Prisma.Dispositivo_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Dispositivo_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Dispositivo_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>
          }
          findFirst: {
            args: Prisma.Dispositivo_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Dispositivo_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>
          }
          findMany: {
            args: Prisma.Dispositivo_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>[]
          }
          create: {
            args: Prisma.Dispositivo_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>
          }
          createMany: {
            args: Prisma.Dispositivo_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Dispositivo_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>
          }
          update: {
            args: Prisma.Dispositivo_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>
          }
          deleteMany: {
            args: Prisma.Dispositivo_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Dispositivo_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Dispositivo_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Dispositivo_logPayload>
          }
          aggregate: {
            args: Prisma.Dispositivo_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispositivo_log>
          }
          groupBy: {
            args: Prisma.Dispositivo_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dispositivo_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.Dispositivo_logCountArgs<ExtArgs>
            result: $Utils.Optional<Dispositivo_logCountAggregateOutputType> | number
          }
        }
      }
      Usuario_log: {
        payload: Prisma.$Usuario_logPayload<ExtArgs>
        fields: Prisma.Usuario_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Usuario_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Usuario_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>
          }
          findFirst: {
            args: Prisma.Usuario_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Usuario_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>
          }
          findMany: {
            args: Prisma.Usuario_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>[]
          }
          create: {
            args: Prisma.Usuario_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>
          }
          createMany: {
            args: Prisma.Usuario_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Usuario_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>
          }
          update: {
            args: Prisma.Usuario_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>
          }
          deleteMany: {
            args: Prisma.Usuario_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Usuario_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Usuario_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Usuario_logPayload>
          }
          aggregate: {
            args: Prisma.Usuario_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_log>
          }
          groupBy: {
            args: Prisma.Usuario_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.Usuario_logCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_logCountAggregateOutputType> | number
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
    tokens?: TokensOmit
    dispositivo?: DispositivoOmit
    dispositivo_config?: Dispositivo_configOmit
    alerta?: AlertaOmit
    alerta_tipo?: Alerta_tipoOmit
    localizacao?: LocalizacaoOmit
    dispositivo_log?: Dispositivo_logOmit
    usuario_log?: Usuario_logOmit
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
    dispositivos: number
    log: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | UsuarioCountOutputTypeCountDispositivosArgs
    log?: boolean | UsuarioCountOutputTypeCountLogArgs
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
  export type UsuarioCountOutputTypeCountDispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_logWhereInput
  }


  /**
   * Count Type DispositivoCountOutputType
   */

  export type DispositivoCountOutputType = {
    config: number
    alertas: number
    localizacoes: number
    logs: number
  }

  export type DispositivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | DispositivoCountOutputTypeCountConfigArgs
    alertas?: boolean | DispositivoCountOutputTypeCountAlertasArgs
    localizacoes?: boolean | DispositivoCountOutputTypeCountLocalizacoesArgs
    logs?: boolean | DispositivoCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispositivoCountOutputType
     */
    select?: DispositivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeCountConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dispositivo_configWhereInput
  }

  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeCountAlertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
  }

  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeCountLocalizacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
  }

  /**
   * DispositivoCountOutputType without action
   */
  export type DispositivoCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dispositivo_logWhereInput
  }


  /**
   * Count Type Alerta_tipoCountOutputType
   */

  export type Alerta_tipoCountOutputType = {
    alerta: number
  }

  export type Alerta_tipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | Alerta_tipoCountOutputTypeCountAlertaArgs
  }

  // Custom InputTypes
  /**
   * Alerta_tipoCountOutputType without action
   */
  export type Alerta_tipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipoCountOutputType
     */
    select?: Alerta_tipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Alerta_tipoCountOutputType without action
   */
  export type Alerta_tipoCountOutputTypeCountAlertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    senha: number
    createdAt: number
    updatedAt: number
    deleted: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
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
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt: Date
    updatedAt: Date
    deleted: boolean
    _count: UsuarioCountAggregateOutputType | null
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
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    dispositivos?: boolean | Usuario$dispositivosArgs<ExtArgs>
    log?: boolean | Usuario$logArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "senha" | "createdAt" | "updatedAt" | "deleted", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivos?: boolean | Usuario$dispositivosArgs<ExtArgs>
    log?: boolean | Usuario$logArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      dispositivos: Prisma.$DispositivoPayload<ExtArgs>[]
      log: Prisma.$Usuario_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      cpf: string
      senha: string
      createdAt: Date
      updatedAt: Date
      deleted: boolean
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
    dispositivos<T extends Usuario$dispositivosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$dispositivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log<T extends Usuario$logArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly deleted: FieldRef<"Usuario", 'Boolean'>
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
   * Usuario.dispositivos
   */
  export type Usuario$dispositivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    cursor?: DispositivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Usuario.log
   */
  export type Usuario$logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    where?: Usuario_logWhereInput
    orderBy?: Usuario_logOrderByWithRelationInput | Usuario_logOrderByWithRelationInput[]
    cursor?: Usuario_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_logScalarFieldEnum | Usuario_logScalarFieldEnum[]
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
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    id: number | null
  }

  export type TokensSumAggregateOutputType = {
    id: number | null
  }

  export type TokensMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    createdAt: Date | null
    email: string | null
    deleted: boolean | null
  }

  export type TokensMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    createdAt: Date | null
    email: string | null
    deleted: boolean | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    codigo: number
    createdAt: number
    email: number
    deleted: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    id?: true
  }

  export type TokensSumAggregateInputType = {
    id?: true
  }

  export type TokensMinAggregateInputType = {
    id?: true
    codigo?: true
    createdAt?: true
    email?: true
    deleted?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    codigo?: true
    createdAt?: true
    email?: true
    deleted?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    codigo?: true
    createdAt?: true
    email?: true
    deleted?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: number
    codigo: string
    createdAt: Date
    email: string
    deleted: boolean
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    createdAt?: boolean
    email?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["tokens"]>



  export type TokensSelectScalar = {
    id?: boolean
    codigo?: boolean
    createdAt?: boolean
    email?: boolean
    deleted?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "createdAt" | "email" | "deleted", ExtArgs["result"]["tokens"]>

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      createdAt: Date
      email: string
      deleted: boolean
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
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
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'Int'>
    readonly codigo: FieldRef<"Tokens", 'String'>
    readonly createdAt: FieldRef<"Tokens", 'DateTime'>
    readonly email: FieldRef<"Tokens", 'String'>
    readonly deleted: FieldRef<"Tokens", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
  }


  /**
   * Model Dispositivo
   */

  export type AggregateDispositivo = {
    _count: DispositivoCountAggregateOutputType | null
    _avg: DispositivoAvgAggregateOutputType | null
    _sum: DispositivoSumAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  export type DispositivoAvgAggregateOutputType = {
    bateria: number | null
  }

  export type DispositivoSumAggregateOutputType = {
    bateria: number | null
  }

  export type DispositivoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    modelo: string | null
    numero_de_serie: string | null
    activade: boolean | null
    data_fabricacao: Date | null
    usuarioId: string | null
    bateria: number | null
    status: $Enums.Dispositivo_status | null
  }

  export type DispositivoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    modelo: string | null
    numero_de_serie: string | null
    activade: boolean | null
    data_fabricacao: Date | null
    usuarioId: string | null
    bateria: number | null
    status: $Enums.Dispositivo_status | null
  }

  export type DispositivoCountAggregateOutputType = {
    id: number
    nome: number
    modelo: number
    numero_de_serie: number
    activade: number
    data_fabricacao: number
    usuarioId: number
    bateria: number
    status: number
    _all: number
  }


  export type DispositivoAvgAggregateInputType = {
    bateria?: true
  }

  export type DispositivoSumAggregateInputType = {
    bateria?: true
  }

  export type DispositivoMinAggregateInputType = {
    id?: true
    nome?: true
    modelo?: true
    numero_de_serie?: true
    activade?: true
    data_fabricacao?: true
    usuarioId?: true
    bateria?: true
    status?: true
  }

  export type DispositivoMaxAggregateInputType = {
    id?: true
    nome?: true
    modelo?: true
    numero_de_serie?: true
    activade?: true
    data_fabricacao?: true
    usuarioId?: true
    bateria?: true
    status?: true
  }

  export type DispositivoCountAggregateInputType = {
    id?: true
    nome?: true
    modelo?: true
    numero_de_serie?: true
    activade?: true
    data_fabricacao?: true
    usuarioId?: true
    bateria?: true
    status?: true
    _all?: true
  }

  export type DispositivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo to aggregate.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivos
    **/
    _count?: true | DispositivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispositivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispositivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispositivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispositivoMaxAggregateInputType
  }

  export type GetDispositivoAggregateType<T extends DispositivoAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo[P]>
      : GetScalarType<T[P], AggregateDispositivo[P]>
  }




  export type DispositivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispositivoWhereInput
    orderBy?: DispositivoOrderByWithAggregationInput | DispositivoOrderByWithAggregationInput[]
    by: DispositivoScalarFieldEnum[] | DispositivoScalarFieldEnum
    having?: DispositivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispositivoCountAggregateInputType | true
    _avg?: DispositivoAvgAggregateInputType
    _sum?: DispositivoSumAggregateInputType
    _min?: DispositivoMinAggregateInputType
    _max?: DispositivoMaxAggregateInputType
  }

  export type DispositivoGroupByOutputType = {
    id: string
    nome: string
    modelo: string
    numero_de_serie: string
    activade: boolean
    data_fabricacao: Date
    usuarioId: string | null
    bateria: number
    status: $Enums.Dispositivo_status
    _count: DispositivoCountAggregateOutputType | null
    _avg: DispositivoAvgAggregateOutputType | null
    _sum: DispositivoSumAggregateOutputType | null
    _min: DispositivoMinAggregateOutputType | null
    _max: DispositivoMaxAggregateOutputType | null
  }

  type GetDispositivoGroupByPayload<T extends DispositivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispositivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispositivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
            : GetScalarType<T[P], DispositivoGroupByOutputType[P]>
        }
      >
    >


  export type DispositivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    modelo?: boolean
    numero_de_serie?: boolean
    activade?: boolean
    data_fabricacao?: boolean
    usuarioId?: boolean
    bateria?: boolean
    status?: boolean
    usuario?: boolean | Dispositivo$usuarioArgs<ExtArgs>
    config?: boolean | Dispositivo$configArgs<ExtArgs>
    alertas?: boolean | Dispositivo$alertasArgs<ExtArgs>
    localizacoes?: boolean | Dispositivo$localizacoesArgs<ExtArgs>
    logs?: boolean | Dispositivo$logsArgs<ExtArgs>
    _count?: boolean | DispositivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo"]>



  export type DispositivoSelectScalar = {
    id?: boolean
    nome?: boolean
    modelo?: boolean
    numero_de_serie?: boolean
    activade?: boolean
    data_fabricacao?: boolean
    usuarioId?: boolean
    bateria?: boolean
    status?: boolean
  }

  export type DispositivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "modelo" | "numero_de_serie" | "activade" | "data_fabricacao" | "usuarioId" | "bateria" | "status", ExtArgs["result"]["dispositivo"]>
  export type DispositivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Dispositivo$usuarioArgs<ExtArgs>
    config?: boolean | Dispositivo$configArgs<ExtArgs>
    alertas?: boolean | Dispositivo$alertasArgs<ExtArgs>
    localizacoes?: boolean | Dispositivo$localizacoesArgs<ExtArgs>
    logs?: boolean | Dispositivo$logsArgs<ExtArgs>
    _count?: boolean | DispositivoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DispositivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      config: Prisma.$Dispositivo_configPayload<ExtArgs>[]
      alertas: Prisma.$AlertaPayload<ExtArgs>[]
      localizacoes: Prisma.$LocalizacaoPayload<ExtArgs>[]
      logs: Prisma.$Dispositivo_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      modelo: string
      numero_de_serie: string
      activade: boolean
      data_fabricacao: Date
      usuarioId: string | null
      bateria: number
      status: $Enums.Dispositivo_status
    }, ExtArgs["result"]["dispositivo"]>
    composites: {}
  }

  type DispositivoGetPayload<S extends boolean | null | undefined | DispositivoDefaultArgs> = $Result.GetResult<Prisma.$DispositivoPayload, S>

  type DispositivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispositivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispositivoCountAggregateInputType | true
    }

  export interface DispositivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo'], meta: { name: 'Dispositivo' } }
    /**
     * Find zero or one Dispositivo that matches the filter.
     * @param {DispositivoFindUniqueArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispositivoFindUniqueArgs>(args: SelectSubset<T, DispositivoFindUniqueArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispositivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispositivoFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispositivoFindUniqueOrThrowArgs>(args: SelectSubset<T, DispositivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispositivoFindFirstArgs>(args?: SelectSubset<T, DispositivoFindFirstArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindFirstOrThrowArgs} args - Arguments to find a Dispositivo
     * @example
     * // Get one Dispositivo
     * const dispositivo = await prisma.dispositivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispositivoFindFirstOrThrowArgs>(args?: SelectSubset<T, DispositivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispositivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany()
     * 
     * // Get first 10 Dispositivos
     * const dispositivos = await prisma.dispositivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivoWithIdOnly = await prisma.dispositivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispositivoFindManyArgs>(args?: SelectSubset<T, DispositivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispositivo.
     * @param {DispositivoCreateArgs} args - Arguments to create a Dispositivo.
     * @example
     * // Create one Dispositivo
     * const Dispositivo = await prisma.dispositivo.create({
     *   data: {
     *     // ... data to create a Dispositivo
     *   }
     * })
     * 
     */
    create<T extends DispositivoCreateArgs>(args: SelectSubset<T, DispositivoCreateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispositivos.
     * @param {DispositivoCreateManyArgs} args - Arguments to create many Dispositivos.
     * @example
     * // Create many Dispositivos
     * const dispositivo = await prisma.dispositivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispositivoCreateManyArgs>(args?: SelectSubset<T, DispositivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dispositivo.
     * @param {DispositivoDeleteArgs} args - Arguments to delete one Dispositivo.
     * @example
     * // Delete one Dispositivo
     * const Dispositivo = await prisma.dispositivo.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo
     *   }
     * })
     * 
     */
    delete<T extends DispositivoDeleteArgs>(args: SelectSubset<T, DispositivoDeleteArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispositivo.
     * @param {DispositivoUpdateArgs} args - Arguments to update one Dispositivo.
     * @example
     * // Update one Dispositivo
     * const dispositivo = await prisma.dispositivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispositivoUpdateArgs>(args: SelectSubset<T, DispositivoUpdateArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispositivos.
     * @param {DispositivoDeleteManyArgs} args - Arguments to filter Dispositivos to delete.
     * @example
     * // Delete a few Dispositivos
     * const { count } = await prisma.dispositivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispositivoDeleteManyArgs>(args?: SelectSubset<T, DispositivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivos
     * const dispositivo = await prisma.dispositivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispositivoUpdateManyArgs>(args: SelectSubset<T, DispositivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispositivo.
     * @param {DispositivoUpsertArgs} args - Arguments to update or create a Dispositivo.
     * @example
     * // Update or create a Dispositivo
     * const dispositivo = await prisma.dispositivo.upsert({
     *   create: {
     *     // ... data to create a Dispositivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo we want to update
     *   }
     * })
     */
    upsert<T extends DispositivoUpsertArgs>(args: SelectSubset<T, DispositivoUpsertArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispositivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoCountArgs} args - Arguments to filter Dispositivos to count.
     * @example
     * // Count the number of Dispositivos
     * const count = await prisma.dispositivo.count({
     *   where: {
     *     // ... the filter for the Dispositivos we want to count
     *   }
     * })
    **/
    count<T extends DispositivoCountArgs>(
      args?: Subset<T, DispositivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispositivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispositivoAggregateArgs>(args: Subset<T, DispositivoAggregateArgs>): Prisma.PrismaPromise<GetDispositivoAggregateType<T>>

    /**
     * Group by Dispositivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispositivoGroupByArgs} args - Group by arguments.
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
      T extends DispositivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispositivoGroupByArgs['orderBy'] }
        : { orderBy?: DispositivoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispositivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo model
   */
  readonly fields: DispositivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispositivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Dispositivo$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    config<T extends Dispositivo$configArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$configArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alertas<T extends Dispositivo$alertasArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$alertasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    localizacoes<T extends Dispositivo$localizacoesArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$localizacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Dispositivo$logsArgs<ExtArgs> = {}>(args?: Subset<T, Dispositivo$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dispositivo model
   */
  interface DispositivoFieldRefs {
    readonly id: FieldRef<"Dispositivo", 'String'>
    readonly nome: FieldRef<"Dispositivo", 'String'>
    readonly modelo: FieldRef<"Dispositivo", 'String'>
    readonly numero_de_serie: FieldRef<"Dispositivo", 'String'>
    readonly activade: FieldRef<"Dispositivo", 'Boolean'>
    readonly data_fabricacao: FieldRef<"Dispositivo", 'DateTime'>
    readonly usuarioId: FieldRef<"Dispositivo", 'String'>
    readonly bateria: FieldRef<"Dispositivo", 'Int'>
    readonly status: FieldRef<"Dispositivo", 'Dispositivo_status'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo findUnique
   */
  export type DispositivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findUniqueOrThrow
   */
  export type DispositivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo findFirst
   */
  export type DispositivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findFirstOrThrow
   */
  export type DispositivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivos.
     */
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo findMany
   */
  export type DispositivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivos to fetch.
     */
    where?: DispositivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivos to fetch.
     */
    orderBy?: DispositivoOrderByWithRelationInput | DispositivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivos.
     */
    cursor?: DispositivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivos.
     */
    skip?: number
    distinct?: DispositivoScalarFieldEnum | DispositivoScalarFieldEnum[]
  }

  /**
   * Dispositivo create
   */
  export type DispositivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo.
     */
    data: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
  }

  /**
   * Dispositivo createMany
   */
  export type DispositivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivos.
     */
    data: DispositivoCreateManyInput | DispositivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo update
   */
  export type DispositivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo.
     */
    data: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo to update.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo updateMany
   */
  export type DispositivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivos.
     */
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivos to update
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to update.
     */
    limit?: number
  }

  /**
   * Dispositivo upsert
   */
  export type DispositivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo to update in case it exists.
     */
    where: DispositivoWhereUniqueInput
    /**
     * In case the Dispositivo found by the `where` argument doesn't exist, create a new Dispositivo with this data.
     */
    create: XOR<DispositivoCreateInput, DispositivoUncheckedCreateInput>
    /**
     * In case the Dispositivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispositivoUpdateInput, DispositivoUncheckedUpdateInput>
  }

  /**
   * Dispositivo delete
   */
  export type DispositivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
    /**
     * Filter which Dispositivo to delete.
     */
    where: DispositivoWhereUniqueInput
  }

  /**
   * Dispositivo deleteMany
   */
  export type DispositivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivos to delete
     */
    where?: DispositivoWhereInput
    /**
     * Limit how many Dispositivos to delete.
     */
    limit?: number
  }

  /**
   * Dispositivo.usuario
   */
  export type Dispositivo$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UsuarioWhereInput
  }

  /**
   * Dispositivo.config
   */
  export type Dispositivo$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    where?: Dispositivo_configWhereInput
    orderBy?: Dispositivo_configOrderByWithRelationInput | Dispositivo_configOrderByWithRelationInput[]
    cursor?: Dispositivo_configWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dispositivo_configScalarFieldEnum | Dispositivo_configScalarFieldEnum[]
  }

  /**
   * Dispositivo.alertas
   */
  export type Dispositivo$alertasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    cursor?: AlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Dispositivo.localizacoes
   */
  export type Dispositivo$localizacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    cursor?: LocalizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Dispositivo.logs
   */
  export type Dispositivo$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    where?: Dispositivo_logWhereInput
    orderBy?: Dispositivo_logOrderByWithRelationInput | Dispositivo_logOrderByWithRelationInput[]
    cursor?: Dispositivo_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dispositivo_logScalarFieldEnum | Dispositivo_logScalarFieldEnum[]
  }

  /**
   * Dispositivo without action
   */
  export type DispositivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo
     */
    select?: DispositivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo
     */
    omit?: DispositivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispositivoInclude<ExtArgs> | null
  }


  /**
   * Model Dispositivo_config
   */

  export type AggregateDispositivo_config = {
    _count: Dispositivo_configCountAggregateOutputType | null
    _avg: Dispositivo_configAvgAggregateOutputType | null
    _sum: Dispositivo_configSumAggregateOutputType | null
    _min: Dispositivo_configMinAggregateOutputType | null
    _max: Dispositivo_configMaxAggregateOutputType | null
  }

  export type Dispositivo_configAvgAggregateOutputType = {
    id: number | null
    intervalo_envio: number | null
    alerta_bateria_valor: number | null
  }

  export type Dispositivo_configSumAggregateOutputType = {
    id: number | null
    intervalo_envio: number | null
    alerta_bateria_valor: number | null
  }

  export type Dispositivo_configMinAggregateOutputType = {
    id: number | null
    intervalo_envio: number | null
    monitoramentoLigado: boolean | null
    dispositivoId: string | null
    modo_eco: boolean | null
    alerta_sem_sinal: boolean | null
    alerta_bateria: boolean | null
    alerta_bateria_valor: number | null
  }

  export type Dispositivo_configMaxAggregateOutputType = {
    id: number | null
    intervalo_envio: number | null
    monitoramentoLigado: boolean | null
    dispositivoId: string | null
    modo_eco: boolean | null
    alerta_sem_sinal: boolean | null
    alerta_bateria: boolean | null
    alerta_bateria_valor: number | null
  }

  export type Dispositivo_configCountAggregateOutputType = {
    id: number
    intervalo_envio: number
    monitoramentoLigado: number
    dispositivoId: number
    modo_eco: number
    alerta_sem_sinal: number
    alerta_bateria: number
    alerta_bateria_valor: number
    _all: number
  }


  export type Dispositivo_configAvgAggregateInputType = {
    id?: true
    intervalo_envio?: true
    alerta_bateria_valor?: true
  }

  export type Dispositivo_configSumAggregateInputType = {
    id?: true
    intervalo_envio?: true
    alerta_bateria_valor?: true
  }

  export type Dispositivo_configMinAggregateInputType = {
    id?: true
    intervalo_envio?: true
    monitoramentoLigado?: true
    dispositivoId?: true
    modo_eco?: true
    alerta_sem_sinal?: true
    alerta_bateria?: true
    alerta_bateria_valor?: true
  }

  export type Dispositivo_configMaxAggregateInputType = {
    id?: true
    intervalo_envio?: true
    monitoramentoLigado?: true
    dispositivoId?: true
    modo_eco?: true
    alerta_sem_sinal?: true
    alerta_bateria?: true
    alerta_bateria_valor?: true
  }

  export type Dispositivo_configCountAggregateInputType = {
    id?: true
    intervalo_envio?: true
    monitoramentoLigado?: true
    dispositivoId?: true
    modo_eco?: true
    alerta_sem_sinal?: true
    alerta_bateria?: true
    alerta_bateria_valor?: true
    _all?: true
  }

  export type Dispositivo_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo_config to aggregate.
     */
    where?: Dispositivo_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_configs to fetch.
     */
    orderBy?: Dispositivo_configOrderByWithRelationInput | Dispositivo_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Dispositivo_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivo_configs
    **/
    _count?: true | Dispositivo_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dispositivo_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dispositivo_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dispositivo_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dispositivo_configMaxAggregateInputType
  }

  export type GetDispositivo_configAggregateType<T extends Dispositivo_configAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo_config[P]>
      : GetScalarType<T[P], AggregateDispositivo_config[P]>
  }




  export type Dispositivo_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dispositivo_configWhereInput
    orderBy?: Dispositivo_configOrderByWithAggregationInput | Dispositivo_configOrderByWithAggregationInput[]
    by: Dispositivo_configScalarFieldEnum[] | Dispositivo_configScalarFieldEnum
    having?: Dispositivo_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dispositivo_configCountAggregateInputType | true
    _avg?: Dispositivo_configAvgAggregateInputType
    _sum?: Dispositivo_configSumAggregateInputType
    _min?: Dispositivo_configMinAggregateInputType
    _max?: Dispositivo_configMaxAggregateInputType
  }

  export type Dispositivo_configGroupByOutputType = {
    id: number
    intervalo_envio: number
    monitoramentoLigado: boolean
    dispositivoId: string
    modo_eco: boolean
    alerta_sem_sinal: boolean
    alerta_bateria: boolean
    alerta_bateria_valor: number
    _count: Dispositivo_configCountAggregateOutputType | null
    _avg: Dispositivo_configAvgAggregateOutputType | null
    _sum: Dispositivo_configSumAggregateOutputType | null
    _min: Dispositivo_configMinAggregateOutputType | null
    _max: Dispositivo_configMaxAggregateOutputType | null
  }

  type GetDispositivo_configGroupByPayload<T extends Dispositivo_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dispositivo_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dispositivo_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dispositivo_configGroupByOutputType[P]>
            : GetScalarType<T[P], Dispositivo_configGroupByOutputType[P]>
        }
      >
    >


  export type Dispositivo_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intervalo_envio?: boolean
    monitoramentoLigado?: boolean
    dispositivoId?: boolean
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: boolean
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo_config"]>



  export type Dispositivo_configSelectScalar = {
    id?: boolean
    intervalo_envio?: boolean
    monitoramentoLigado?: boolean
    dispositivoId?: boolean
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: boolean
  }

  export type Dispositivo_configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intervalo_envio" | "monitoramentoLigado" | "dispositivoId" | "modo_eco" | "alerta_sem_sinal" | "alerta_bateria" | "alerta_bateria_valor", ExtArgs["result"]["dispositivo_config"]>
  export type Dispositivo_configInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
  }

  export type $Dispositivo_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo_config"
    objects: {
      dispositivo: Prisma.$DispositivoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      intervalo_envio: number
      monitoramentoLigado: boolean
      dispositivoId: string
      modo_eco: boolean
      alerta_sem_sinal: boolean
      alerta_bateria: boolean
      alerta_bateria_valor: number
    }, ExtArgs["result"]["dispositivo_config"]>
    composites: {}
  }

  type Dispositivo_configGetPayload<S extends boolean | null | undefined | Dispositivo_configDefaultArgs> = $Result.GetResult<Prisma.$Dispositivo_configPayload, S>

  type Dispositivo_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Dispositivo_configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dispositivo_configCountAggregateInputType | true
    }

  export interface Dispositivo_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo_config'], meta: { name: 'Dispositivo_config' } }
    /**
     * Find zero or one Dispositivo_config that matches the filter.
     * @param {Dispositivo_configFindUniqueArgs} args - Arguments to find a Dispositivo_config
     * @example
     * // Get one Dispositivo_config
     * const dispositivo_config = await prisma.dispositivo_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Dispositivo_configFindUniqueArgs>(args: SelectSubset<T, Dispositivo_configFindUniqueArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispositivo_config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Dispositivo_configFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo_config
     * @example
     * // Get one Dispositivo_config
     * const dispositivo_config = await prisma.dispositivo_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Dispositivo_configFindUniqueOrThrowArgs>(args: SelectSubset<T, Dispositivo_configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configFindFirstArgs} args - Arguments to find a Dispositivo_config
     * @example
     * // Get one Dispositivo_config
     * const dispositivo_config = await prisma.dispositivo_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Dispositivo_configFindFirstArgs>(args?: SelectSubset<T, Dispositivo_configFindFirstArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configFindFirstOrThrowArgs} args - Arguments to find a Dispositivo_config
     * @example
     * // Get one Dispositivo_config
     * const dispositivo_config = await prisma.dispositivo_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Dispositivo_configFindFirstOrThrowArgs>(args?: SelectSubset<T, Dispositivo_configFindFirstOrThrowArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispositivo_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivo_configs
     * const dispositivo_configs = await prisma.dispositivo_config.findMany()
     * 
     * // Get first 10 Dispositivo_configs
     * const dispositivo_configs = await prisma.dispositivo_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivo_configWithIdOnly = await prisma.dispositivo_config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Dispositivo_configFindManyArgs>(args?: SelectSubset<T, Dispositivo_configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispositivo_config.
     * @param {Dispositivo_configCreateArgs} args - Arguments to create a Dispositivo_config.
     * @example
     * // Create one Dispositivo_config
     * const Dispositivo_config = await prisma.dispositivo_config.create({
     *   data: {
     *     // ... data to create a Dispositivo_config
     *   }
     * })
     * 
     */
    create<T extends Dispositivo_configCreateArgs>(args: SelectSubset<T, Dispositivo_configCreateArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispositivo_configs.
     * @param {Dispositivo_configCreateManyArgs} args - Arguments to create many Dispositivo_configs.
     * @example
     * // Create many Dispositivo_configs
     * const dispositivo_config = await prisma.dispositivo_config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Dispositivo_configCreateManyArgs>(args?: SelectSubset<T, Dispositivo_configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dispositivo_config.
     * @param {Dispositivo_configDeleteArgs} args - Arguments to delete one Dispositivo_config.
     * @example
     * // Delete one Dispositivo_config
     * const Dispositivo_config = await prisma.dispositivo_config.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo_config
     *   }
     * })
     * 
     */
    delete<T extends Dispositivo_configDeleteArgs>(args: SelectSubset<T, Dispositivo_configDeleteArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispositivo_config.
     * @param {Dispositivo_configUpdateArgs} args - Arguments to update one Dispositivo_config.
     * @example
     * // Update one Dispositivo_config
     * const dispositivo_config = await prisma.dispositivo_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Dispositivo_configUpdateArgs>(args: SelectSubset<T, Dispositivo_configUpdateArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispositivo_configs.
     * @param {Dispositivo_configDeleteManyArgs} args - Arguments to filter Dispositivo_configs to delete.
     * @example
     * // Delete a few Dispositivo_configs
     * const { count } = await prisma.dispositivo_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Dispositivo_configDeleteManyArgs>(args?: SelectSubset<T, Dispositivo_configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivo_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivo_configs
     * const dispositivo_config = await prisma.dispositivo_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Dispositivo_configUpdateManyArgs>(args: SelectSubset<T, Dispositivo_configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispositivo_config.
     * @param {Dispositivo_configUpsertArgs} args - Arguments to update or create a Dispositivo_config.
     * @example
     * // Update or create a Dispositivo_config
     * const dispositivo_config = await prisma.dispositivo_config.upsert({
     *   create: {
     *     // ... data to create a Dispositivo_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo_config we want to update
     *   }
     * })
     */
    upsert<T extends Dispositivo_configUpsertArgs>(args: SelectSubset<T, Dispositivo_configUpsertArgs<ExtArgs>>): Prisma__Dispositivo_configClient<$Result.GetResult<Prisma.$Dispositivo_configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispositivo_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configCountArgs} args - Arguments to filter Dispositivo_configs to count.
     * @example
     * // Count the number of Dispositivo_configs
     * const count = await prisma.dispositivo_config.count({
     *   where: {
     *     // ... the filter for the Dispositivo_configs we want to count
     *   }
     * })
    **/
    count<T extends Dispositivo_configCountArgs>(
      args?: Subset<T, Dispositivo_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dispositivo_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dispositivo_configAggregateArgs>(args: Subset<T, Dispositivo_configAggregateArgs>): Prisma.PrismaPromise<GetDispositivo_configAggregateType<T>>

    /**
     * Group by Dispositivo_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_configGroupByArgs} args - Group by arguments.
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
      T extends Dispositivo_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dispositivo_configGroupByArgs['orderBy'] }
        : { orderBy?: Dispositivo_configGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Dispositivo_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivo_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo_config model
   */
  readonly fields: Dispositivo_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Dispositivo_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispositivo<T extends DispositivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DispositivoDefaultArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dispositivo_config model
   */
  interface Dispositivo_configFieldRefs {
    readonly id: FieldRef<"Dispositivo_config", 'Int'>
    readonly intervalo_envio: FieldRef<"Dispositivo_config", 'Int'>
    readonly monitoramentoLigado: FieldRef<"Dispositivo_config", 'Boolean'>
    readonly dispositivoId: FieldRef<"Dispositivo_config", 'String'>
    readonly modo_eco: FieldRef<"Dispositivo_config", 'Boolean'>
    readonly alerta_sem_sinal: FieldRef<"Dispositivo_config", 'Boolean'>
    readonly alerta_bateria: FieldRef<"Dispositivo_config", 'Boolean'>
    readonly alerta_bateria_valor: FieldRef<"Dispositivo_config", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo_config findUnique
   */
  export type Dispositivo_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_config to fetch.
     */
    where: Dispositivo_configWhereUniqueInput
  }

  /**
   * Dispositivo_config findUniqueOrThrow
   */
  export type Dispositivo_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_config to fetch.
     */
    where: Dispositivo_configWhereUniqueInput
  }

  /**
   * Dispositivo_config findFirst
   */
  export type Dispositivo_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_config to fetch.
     */
    where?: Dispositivo_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_configs to fetch.
     */
    orderBy?: Dispositivo_configOrderByWithRelationInput | Dispositivo_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivo_configs.
     */
    cursor?: Dispositivo_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivo_configs.
     */
    distinct?: Dispositivo_configScalarFieldEnum | Dispositivo_configScalarFieldEnum[]
  }

  /**
   * Dispositivo_config findFirstOrThrow
   */
  export type Dispositivo_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_config to fetch.
     */
    where?: Dispositivo_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_configs to fetch.
     */
    orderBy?: Dispositivo_configOrderByWithRelationInput | Dispositivo_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivo_configs.
     */
    cursor?: Dispositivo_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivo_configs.
     */
    distinct?: Dispositivo_configScalarFieldEnum | Dispositivo_configScalarFieldEnum[]
  }

  /**
   * Dispositivo_config findMany
   */
  export type Dispositivo_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_configs to fetch.
     */
    where?: Dispositivo_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_configs to fetch.
     */
    orderBy?: Dispositivo_configOrderByWithRelationInput | Dispositivo_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivo_configs.
     */
    cursor?: Dispositivo_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_configs.
     */
    skip?: number
    distinct?: Dispositivo_configScalarFieldEnum | Dispositivo_configScalarFieldEnum[]
  }

  /**
   * Dispositivo_config create
   */
  export type Dispositivo_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo_config.
     */
    data: XOR<Dispositivo_configCreateInput, Dispositivo_configUncheckedCreateInput>
  }

  /**
   * Dispositivo_config createMany
   */
  export type Dispositivo_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivo_configs.
     */
    data: Dispositivo_configCreateManyInput | Dispositivo_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo_config update
   */
  export type Dispositivo_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo_config.
     */
    data: XOR<Dispositivo_configUpdateInput, Dispositivo_configUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo_config to update.
     */
    where: Dispositivo_configWhereUniqueInput
  }

  /**
   * Dispositivo_config updateMany
   */
  export type Dispositivo_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivo_configs.
     */
    data: XOR<Dispositivo_configUpdateManyMutationInput, Dispositivo_configUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivo_configs to update
     */
    where?: Dispositivo_configWhereInput
    /**
     * Limit how many Dispositivo_configs to update.
     */
    limit?: number
  }

  /**
   * Dispositivo_config upsert
   */
  export type Dispositivo_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo_config to update in case it exists.
     */
    where: Dispositivo_configWhereUniqueInput
    /**
     * In case the Dispositivo_config found by the `where` argument doesn't exist, create a new Dispositivo_config with this data.
     */
    create: XOR<Dispositivo_configCreateInput, Dispositivo_configUncheckedCreateInput>
    /**
     * In case the Dispositivo_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Dispositivo_configUpdateInput, Dispositivo_configUncheckedUpdateInput>
  }

  /**
   * Dispositivo_config delete
   */
  export type Dispositivo_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
    /**
     * Filter which Dispositivo_config to delete.
     */
    where: Dispositivo_configWhereUniqueInput
  }

  /**
   * Dispositivo_config deleteMany
   */
  export type Dispositivo_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo_configs to delete
     */
    where?: Dispositivo_configWhereInput
    /**
     * Limit how many Dispositivo_configs to delete.
     */
    limit?: number
  }

  /**
   * Dispositivo_config without action
   */
  export type Dispositivo_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_config
     */
    select?: Dispositivo_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_config
     */
    omit?: Dispositivo_configOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_configInclude<ExtArgs> | null
  }


  /**
   * Model Alerta
   */

  export type AggregateAlerta = {
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  export type AlertaAvgAggregateOutputType = {
    id: number | null
    alertaId: number | null
  }

  export type AlertaSumAggregateOutputType = {
    id: number | null
    alertaId: number | null
  }

  export type AlertaMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    gravidede: $Enums.Alerta_gravidade | null
    ativo: boolean | null
    dispositivoId: string | null
    alertaId: number | null
    createdAt: Date | null
  }

  export type AlertaMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    gravidede: $Enums.Alerta_gravidade | null
    ativo: boolean | null
    dispositivoId: string | null
    alertaId: number | null
    createdAt: Date | null
  }

  export type AlertaCountAggregateOutputType = {
    id: number
    descricao: number
    gravidede: number
    ativo: number
    dispositivoId: number
    alertaId: number
    createdAt: number
    _all: number
  }


  export type AlertaAvgAggregateInputType = {
    id?: true
    alertaId?: true
  }

  export type AlertaSumAggregateInputType = {
    id?: true
    alertaId?: true
  }

  export type AlertaMinAggregateInputType = {
    id?: true
    descricao?: true
    gravidede?: true
    ativo?: true
    dispositivoId?: true
    alertaId?: true
    createdAt?: true
  }

  export type AlertaMaxAggregateInputType = {
    id?: true
    descricao?: true
    gravidede?: true
    ativo?: true
    dispositivoId?: true
    alertaId?: true
    createdAt?: true
  }

  export type AlertaCountAggregateInputType = {
    id?: true
    descricao?: true
    gravidede?: true
    ativo?: true
    dispositivoId?: true
    alertaId?: true
    createdAt?: true
    _all?: true
  }

  export type AlertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta to aggregate.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alertas
    **/
    _count?: true | AlertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaMaxAggregateInputType
  }

  export type GetAlertaAggregateType<T extends AlertaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerta[P]>
      : GetScalarType<T[P], AggregateAlerta[P]>
  }




  export type AlertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithAggregationInput | AlertaOrderByWithAggregationInput[]
    by: AlertaScalarFieldEnum[] | AlertaScalarFieldEnum
    having?: AlertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaCountAggregateInputType | true
    _avg?: AlertaAvgAggregateInputType
    _sum?: AlertaSumAggregateInputType
    _min?: AlertaMinAggregateInputType
    _max?: AlertaMaxAggregateInputType
  }

  export type AlertaGroupByOutputType = {
    id: number
    descricao: string
    gravidede: $Enums.Alerta_gravidade
    ativo: boolean
    dispositivoId: string
    alertaId: number
    createdAt: Date
    _count: AlertaCountAggregateOutputType | null
    _avg: AlertaAvgAggregateOutputType | null
    _sum: AlertaSumAggregateOutputType | null
    _min: AlertaMinAggregateOutputType | null
    _max: AlertaMaxAggregateOutputType | null
  }

  type GetAlertaGroupByPayload<T extends AlertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaGroupByOutputType[P]>
        }
      >
    >


  export type AlertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    gravidede?: boolean
    ativo?: boolean
    dispositivoId?: boolean
    alertaId?: boolean
    createdAt?: boolean
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
    alertaTipo?: boolean | Alerta_tipoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta"]>



  export type AlertaSelectScalar = {
    id?: boolean
    descricao?: boolean
    gravidede?: boolean
    ativo?: boolean
    dispositivoId?: boolean
    alertaId?: boolean
    createdAt?: boolean
  }

  export type AlertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "gravidede" | "ativo" | "dispositivoId" | "alertaId" | "createdAt", ExtArgs["result"]["alerta"]>
  export type AlertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
    alertaTipo?: boolean | Alerta_tipoDefaultArgs<ExtArgs>
  }

  export type $AlertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alerta"
    objects: {
      dispositivo: Prisma.$DispositivoPayload<ExtArgs>
      alertaTipo: Prisma.$Alerta_tipoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      gravidede: $Enums.Alerta_gravidade
      ativo: boolean
      dispositivoId: string
      alertaId: number
      createdAt: Date
    }, ExtArgs["result"]["alerta"]>
    composites: {}
  }

  type AlertaGetPayload<S extends boolean | null | undefined | AlertaDefaultArgs> = $Result.GetResult<Prisma.$AlertaPayload, S>

  type AlertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertaCountAggregateInputType | true
    }

  export interface AlertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alerta'], meta: { name: 'Alerta' } }
    /**
     * Find zero or one Alerta that matches the filter.
     * @param {AlertaFindUniqueArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertaFindUniqueArgs>(args: SelectSubset<T, AlertaFindUniqueArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alerta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertaFindUniqueOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertaFindFirstArgs>(args?: SelectSubset<T, AlertaFindFirstArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindFirstOrThrowArgs} args - Arguments to find a Alerta
     * @example
     * // Get one Alerta
     * const alerta = await prisma.alerta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alertas
     * const alertas = await prisma.alerta.findMany()
     * 
     * // Get first 10 Alertas
     * const alertas = await prisma.alerta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertaWithIdOnly = await prisma.alerta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertaFindManyArgs>(args?: SelectSubset<T, AlertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alerta.
     * @param {AlertaCreateArgs} args - Arguments to create a Alerta.
     * @example
     * // Create one Alerta
     * const Alerta = await prisma.alerta.create({
     *   data: {
     *     // ... data to create a Alerta
     *   }
     * })
     * 
     */
    create<T extends AlertaCreateArgs>(args: SelectSubset<T, AlertaCreateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alertas.
     * @param {AlertaCreateManyArgs} args - Arguments to create many Alertas.
     * @example
     * // Create many Alertas
     * const alerta = await prisma.alerta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertaCreateManyArgs>(args?: SelectSubset<T, AlertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alerta.
     * @param {AlertaDeleteArgs} args - Arguments to delete one Alerta.
     * @example
     * // Delete one Alerta
     * const Alerta = await prisma.alerta.delete({
     *   where: {
     *     // ... filter to delete one Alerta
     *   }
     * })
     * 
     */
    delete<T extends AlertaDeleteArgs>(args: SelectSubset<T, AlertaDeleteArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alerta.
     * @param {AlertaUpdateArgs} args - Arguments to update one Alerta.
     * @example
     * // Update one Alerta
     * const alerta = await prisma.alerta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertaUpdateArgs>(args: SelectSubset<T, AlertaUpdateArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alertas.
     * @param {AlertaDeleteManyArgs} args - Arguments to filter Alertas to delete.
     * @example
     * // Delete a few Alertas
     * const { count } = await prisma.alerta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertaDeleteManyArgs>(args?: SelectSubset<T, AlertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alertas
     * const alerta = await prisma.alerta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertaUpdateManyArgs>(args: SelectSubset<T, AlertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alerta.
     * @param {AlertaUpsertArgs} args - Arguments to update or create a Alerta.
     * @example
     * // Update or create a Alerta
     * const alerta = await prisma.alerta.upsert({
     *   create: {
     *     // ... data to create a Alerta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta we want to update
     *   }
     * })
     */
    upsert<T extends AlertaUpsertArgs>(args: SelectSubset<T, AlertaUpsertArgs<ExtArgs>>): Prisma__AlertaClient<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaCountArgs} args - Arguments to filter Alertas to count.
     * @example
     * // Count the number of Alertas
     * const count = await prisma.alerta.count({
     *   where: {
     *     // ... the filter for the Alertas we want to count
     *   }
     * })
    **/
    count<T extends AlertaCountArgs>(
      args?: Subset<T, AlertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertaAggregateArgs>(args: Subset<T, AlertaAggregateArgs>): Prisma.PrismaPromise<GetAlertaAggregateType<T>>

    /**
     * Group by Alerta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaGroupByArgs} args - Group by arguments.
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
      T extends AlertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertaGroupByArgs['orderBy'] }
        : { orderBy?: AlertaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alerta model
   */
  readonly fields: AlertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alerta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispositivo<T extends DispositivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DispositivoDefaultArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alertaTipo<T extends Alerta_tipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Alerta_tipoDefaultArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alerta model
   */
  interface AlertaFieldRefs {
    readonly id: FieldRef<"Alerta", 'Int'>
    readonly descricao: FieldRef<"Alerta", 'String'>
    readonly gravidede: FieldRef<"Alerta", 'Alerta_gravidade'>
    readonly ativo: FieldRef<"Alerta", 'Boolean'>
    readonly dispositivoId: FieldRef<"Alerta", 'String'>
    readonly alertaId: FieldRef<"Alerta", 'Int'>
    readonly createdAt: FieldRef<"Alerta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alerta findUnique
   */
  export type AlertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findUniqueOrThrow
   */
  export type AlertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta findFirst
   */
  export type AlertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findFirstOrThrow
   */
  export type AlertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alerta to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alertas.
     */
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta findMany
   */
  export type AlertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter, which Alertas to fetch.
     */
    where?: AlertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alertas to fetch.
     */
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alertas.
     */
    cursor?: AlertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alertas.
     */
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta create
   */
  export type AlertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to create a Alerta.
     */
    data: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
  }

  /**
   * Alerta createMany
   */
  export type AlertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alertas.
     */
    data: AlertaCreateManyInput | AlertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alerta update
   */
  export type AlertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The data needed to update a Alerta.
     */
    data: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
    /**
     * Choose, which Alerta to update.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta updateMany
   */
  export type AlertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alertas.
     */
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyInput>
    /**
     * Filter which Alertas to update
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to update.
     */
    limit?: number
  }

  /**
   * Alerta upsert
   */
  export type AlertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * The filter to search for the Alerta to update in case it exists.
     */
    where: AlertaWhereUniqueInput
    /**
     * In case the Alerta found by the `where` argument doesn't exist, create a new Alerta with this data.
     */
    create: XOR<AlertaCreateInput, AlertaUncheckedCreateInput>
    /**
     * In case the Alerta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertaUpdateInput, AlertaUncheckedUpdateInput>
  }

  /**
   * Alerta delete
   */
  export type AlertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    /**
     * Filter which Alerta to delete.
     */
    where: AlertaWhereUniqueInput
  }

  /**
   * Alerta deleteMany
   */
  export type AlertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alertas to delete
     */
    where?: AlertaWhereInput
    /**
     * Limit how many Alertas to delete.
     */
    limit?: number
  }

  /**
   * Alerta without action
   */
  export type AlertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
  }


  /**
   * Model Alerta_tipo
   */

  export type AggregateAlerta_tipo = {
    _count: Alerta_tipoCountAggregateOutputType | null
    _avg: Alerta_tipoAvgAggregateOutputType | null
    _sum: Alerta_tipoSumAggregateOutputType | null
    _min: Alerta_tipoMinAggregateOutputType | null
    _max: Alerta_tipoMaxAggregateOutputType | null
  }

  export type Alerta_tipoAvgAggregateOutputType = {
    id: number | null
  }

  export type Alerta_tipoSumAggregateOutputType = {
    id: number | null
  }

  export type Alerta_tipoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    regra: string | null
    valor: string | null
  }

  export type Alerta_tipoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    regra: string | null
    valor: string | null
  }

  export type Alerta_tipoCountAggregateOutputType = {
    id: number
    nome: number
    regra: number
    valor: number
    _all: number
  }


  export type Alerta_tipoAvgAggregateInputType = {
    id?: true
  }

  export type Alerta_tipoSumAggregateInputType = {
    id?: true
  }

  export type Alerta_tipoMinAggregateInputType = {
    id?: true
    nome?: true
    regra?: true
    valor?: true
  }

  export type Alerta_tipoMaxAggregateInputType = {
    id?: true
    nome?: true
    regra?: true
    valor?: true
  }

  export type Alerta_tipoCountAggregateInputType = {
    id?: true
    nome?: true
    regra?: true
    valor?: true
    _all?: true
  }

  export type Alerta_tipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta_tipo to aggregate.
     */
    where?: Alerta_tipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerta_tipos to fetch.
     */
    orderBy?: Alerta_tipoOrderByWithRelationInput | Alerta_tipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Alerta_tipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerta_tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerta_tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerta_tipos
    **/
    _count?: true | Alerta_tipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Alerta_tipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Alerta_tipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Alerta_tipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Alerta_tipoMaxAggregateInputType
  }

  export type GetAlerta_tipoAggregateType<T extends Alerta_tipoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerta_tipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerta_tipo[P]>
      : GetScalarType<T[P], AggregateAlerta_tipo[P]>
  }




  export type Alerta_tipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Alerta_tipoWhereInput
    orderBy?: Alerta_tipoOrderByWithAggregationInput | Alerta_tipoOrderByWithAggregationInput[]
    by: Alerta_tipoScalarFieldEnum[] | Alerta_tipoScalarFieldEnum
    having?: Alerta_tipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Alerta_tipoCountAggregateInputType | true
    _avg?: Alerta_tipoAvgAggregateInputType
    _sum?: Alerta_tipoSumAggregateInputType
    _min?: Alerta_tipoMinAggregateInputType
    _max?: Alerta_tipoMaxAggregateInputType
  }

  export type Alerta_tipoGroupByOutputType = {
    id: number
    nome: string
    regra: string
    valor: string
    _count: Alerta_tipoCountAggregateOutputType | null
    _avg: Alerta_tipoAvgAggregateOutputType | null
    _sum: Alerta_tipoSumAggregateOutputType | null
    _min: Alerta_tipoMinAggregateOutputType | null
    _max: Alerta_tipoMaxAggregateOutputType | null
  }

  type GetAlerta_tipoGroupByPayload<T extends Alerta_tipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Alerta_tipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Alerta_tipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Alerta_tipoGroupByOutputType[P]>
            : GetScalarType<T[P], Alerta_tipoGroupByOutputType[P]>
        }
      >
    >


  export type Alerta_tipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    regra?: boolean
    valor?: boolean
    alerta?: boolean | Alerta_tipo$alertaArgs<ExtArgs>
    _count?: boolean | Alerta_tipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerta_tipo"]>



  export type Alerta_tipoSelectScalar = {
    id?: boolean
    nome?: boolean
    regra?: boolean
    valor?: boolean
  }

  export type Alerta_tipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "regra" | "valor", ExtArgs["result"]["alerta_tipo"]>
  export type Alerta_tipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerta?: boolean | Alerta_tipo$alertaArgs<ExtArgs>
    _count?: boolean | Alerta_tipoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Alerta_tipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alerta_tipo"
    objects: {
      alerta: Prisma.$AlertaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      regra: string
      valor: string
    }, ExtArgs["result"]["alerta_tipo"]>
    composites: {}
  }

  type Alerta_tipoGetPayload<S extends boolean | null | undefined | Alerta_tipoDefaultArgs> = $Result.GetResult<Prisma.$Alerta_tipoPayload, S>

  type Alerta_tipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Alerta_tipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Alerta_tipoCountAggregateInputType | true
    }

  export interface Alerta_tipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alerta_tipo'], meta: { name: 'Alerta_tipo' } }
    /**
     * Find zero or one Alerta_tipo that matches the filter.
     * @param {Alerta_tipoFindUniqueArgs} args - Arguments to find a Alerta_tipo
     * @example
     * // Get one Alerta_tipo
     * const alerta_tipo = await prisma.alerta_tipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Alerta_tipoFindUniqueArgs>(args: SelectSubset<T, Alerta_tipoFindUniqueArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alerta_tipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Alerta_tipoFindUniqueOrThrowArgs} args - Arguments to find a Alerta_tipo
     * @example
     * // Get one Alerta_tipo
     * const alerta_tipo = await prisma.alerta_tipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Alerta_tipoFindUniqueOrThrowArgs>(args: SelectSubset<T, Alerta_tipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta_tipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoFindFirstArgs} args - Arguments to find a Alerta_tipo
     * @example
     * // Get one Alerta_tipo
     * const alerta_tipo = await prisma.alerta_tipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Alerta_tipoFindFirstArgs>(args?: SelectSubset<T, Alerta_tipoFindFirstArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerta_tipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoFindFirstOrThrowArgs} args - Arguments to find a Alerta_tipo
     * @example
     * // Get one Alerta_tipo
     * const alerta_tipo = await prisma.alerta_tipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Alerta_tipoFindFirstOrThrowArgs>(args?: SelectSubset<T, Alerta_tipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerta_tipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerta_tipos
     * const alerta_tipos = await prisma.alerta_tipo.findMany()
     * 
     * // Get first 10 Alerta_tipos
     * const alerta_tipos = await prisma.alerta_tipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alerta_tipoWithIdOnly = await prisma.alerta_tipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Alerta_tipoFindManyArgs>(args?: SelectSubset<T, Alerta_tipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alerta_tipo.
     * @param {Alerta_tipoCreateArgs} args - Arguments to create a Alerta_tipo.
     * @example
     * // Create one Alerta_tipo
     * const Alerta_tipo = await prisma.alerta_tipo.create({
     *   data: {
     *     // ... data to create a Alerta_tipo
     *   }
     * })
     * 
     */
    create<T extends Alerta_tipoCreateArgs>(args: SelectSubset<T, Alerta_tipoCreateArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerta_tipos.
     * @param {Alerta_tipoCreateManyArgs} args - Arguments to create many Alerta_tipos.
     * @example
     * // Create many Alerta_tipos
     * const alerta_tipo = await prisma.alerta_tipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Alerta_tipoCreateManyArgs>(args?: SelectSubset<T, Alerta_tipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alerta_tipo.
     * @param {Alerta_tipoDeleteArgs} args - Arguments to delete one Alerta_tipo.
     * @example
     * // Delete one Alerta_tipo
     * const Alerta_tipo = await prisma.alerta_tipo.delete({
     *   where: {
     *     // ... filter to delete one Alerta_tipo
     *   }
     * })
     * 
     */
    delete<T extends Alerta_tipoDeleteArgs>(args: SelectSubset<T, Alerta_tipoDeleteArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alerta_tipo.
     * @param {Alerta_tipoUpdateArgs} args - Arguments to update one Alerta_tipo.
     * @example
     * // Update one Alerta_tipo
     * const alerta_tipo = await prisma.alerta_tipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Alerta_tipoUpdateArgs>(args: SelectSubset<T, Alerta_tipoUpdateArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerta_tipos.
     * @param {Alerta_tipoDeleteManyArgs} args - Arguments to filter Alerta_tipos to delete.
     * @example
     * // Delete a few Alerta_tipos
     * const { count } = await prisma.alerta_tipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Alerta_tipoDeleteManyArgs>(args?: SelectSubset<T, Alerta_tipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerta_tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerta_tipos
     * const alerta_tipo = await prisma.alerta_tipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Alerta_tipoUpdateManyArgs>(args: SelectSubset<T, Alerta_tipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alerta_tipo.
     * @param {Alerta_tipoUpsertArgs} args - Arguments to update or create a Alerta_tipo.
     * @example
     * // Update or create a Alerta_tipo
     * const alerta_tipo = await prisma.alerta_tipo.upsert({
     *   create: {
     *     // ... data to create a Alerta_tipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerta_tipo we want to update
     *   }
     * })
     */
    upsert<T extends Alerta_tipoUpsertArgs>(args: SelectSubset<T, Alerta_tipoUpsertArgs<ExtArgs>>): Prisma__Alerta_tipoClient<$Result.GetResult<Prisma.$Alerta_tipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerta_tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoCountArgs} args - Arguments to filter Alerta_tipos to count.
     * @example
     * // Count the number of Alerta_tipos
     * const count = await prisma.alerta_tipo.count({
     *   where: {
     *     // ... the filter for the Alerta_tipos we want to count
     *   }
     * })
    **/
    count<T extends Alerta_tipoCountArgs>(
      args?: Subset<T, Alerta_tipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Alerta_tipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerta_tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alerta_tipoAggregateArgs>(args: Subset<T, Alerta_tipoAggregateArgs>): Prisma.PrismaPromise<GetAlerta_tipoAggregateType<T>>

    /**
     * Group by Alerta_tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alerta_tipoGroupByArgs} args - Group by arguments.
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
      T extends Alerta_tipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Alerta_tipoGroupByArgs['orderBy'] }
        : { orderBy?: Alerta_tipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Alerta_tipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlerta_tipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alerta_tipo model
   */
  readonly fields: Alerta_tipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alerta_tipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Alerta_tipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerta<T extends Alerta_tipo$alertaArgs<ExtArgs> = {}>(args?: Subset<T, Alerta_tipo$alertaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alerta_tipo model
   */
  interface Alerta_tipoFieldRefs {
    readonly id: FieldRef<"Alerta_tipo", 'Int'>
    readonly nome: FieldRef<"Alerta_tipo", 'String'>
    readonly regra: FieldRef<"Alerta_tipo", 'String'>
    readonly valor: FieldRef<"Alerta_tipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alerta_tipo findUnique
   */
  export type Alerta_tipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * Filter, which Alerta_tipo to fetch.
     */
    where: Alerta_tipoWhereUniqueInput
  }

  /**
   * Alerta_tipo findUniqueOrThrow
   */
  export type Alerta_tipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * Filter, which Alerta_tipo to fetch.
     */
    where: Alerta_tipoWhereUniqueInput
  }

  /**
   * Alerta_tipo findFirst
   */
  export type Alerta_tipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * Filter, which Alerta_tipo to fetch.
     */
    where?: Alerta_tipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerta_tipos to fetch.
     */
    orderBy?: Alerta_tipoOrderByWithRelationInput | Alerta_tipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerta_tipos.
     */
    cursor?: Alerta_tipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerta_tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerta_tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerta_tipos.
     */
    distinct?: Alerta_tipoScalarFieldEnum | Alerta_tipoScalarFieldEnum[]
  }

  /**
   * Alerta_tipo findFirstOrThrow
   */
  export type Alerta_tipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * Filter, which Alerta_tipo to fetch.
     */
    where?: Alerta_tipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerta_tipos to fetch.
     */
    orderBy?: Alerta_tipoOrderByWithRelationInput | Alerta_tipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerta_tipos.
     */
    cursor?: Alerta_tipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerta_tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerta_tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerta_tipos.
     */
    distinct?: Alerta_tipoScalarFieldEnum | Alerta_tipoScalarFieldEnum[]
  }

  /**
   * Alerta_tipo findMany
   */
  export type Alerta_tipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * Filter, which Alerta_tipos to fetch.
     */
    where?: Alerta_tipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerta_tipos to fetch.
     */
    orderBy?: Alerta_tipoOrderByWithRelationInput | Alerta_tipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerta_tipos.
     */
    cursor?: Alerta_tipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerta_tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerta_tipos.
     */
    skip?: number
    distinct?: Alerta_tipoScalarFieldEnum | Alerta_tipoScalarFieldEnum[]
  }

  /**
   * Alerta_tipo create
   */
  export type Alerta_tipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alerta_tipo.
     */
    data: XOR<Alerta_tipoCreateInput, Alerta_tipoUncheckedCreateInput>
  }

  /**
   * Alerta_tipo createMany
   */
  export type Alerta_tipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerta_tipos.
     */
    data: Alerta_tipoCreateManyInput | Alerta_tipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alerta_tipo update
   */
  export type Alerta_tipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alerta_tipo.
     */
    data: XOR<Alerta_tipoUpdateInput, Alerta_tipoUncheckedUpdateInput>
    /**
     * Choose, which Alerta_tipo to update.
     */
    where: Alerta_tipoWhereUniqueInput
  }

  /**
   * Alerta_tipo updateMany
   */
  export type Alerta_tipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerta_tipos.
     */
    data: XOR<Alerta_tipoUpdateManyMutationInput, Alerta_tipoUncheckedUpdateManyInput>
    /**
     * Filter which Alerta_tipos to update
     */
    where?: Alerta_tipoWhereInput
    /**
     * Limit how many Alerta_tipos to update.
     */
    limit?: number
  }

  /**
   * Alerta_tipo upsert
   */
  export type Alerta_tipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alerta_tipo to update in case it exists.
     */
    where: Alerta_tipoWhereUniqueInput
    /**
     * In case the Alerta_tipo found by the `where` argument doesn't exist, create a new Alerta_tipo with this data.
     */
    create: XOR<Alerta_tipoCreateInput, Alerta_tipoUncheckedCreateInput>
    /**
     * In case the Alerta_tipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Alerta_tipoUpdateInput, Alerta_tipoUncheckedUpdateInput>
  }

  /**
   * Alerta_tipo delete
   */
  export type Alerta_tipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
    /**
     * Filter which Alerta_tipo to delete.
     */
    where: Alerta_tipoWhereUniqueInput
  }

  /**
   * Alerta_tipo deleteMany
   */
  export type Alerta_tipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerta_tipos to delete
     */
    where?: Alerta_tipoWhereInput
    /**
     * Limit how many Alerta_tipos to delete.
     */
    limit?: number
  }

  /**
   * Alerta_tipo.alerta
   */
  export type Alerta_tipo$alertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta
     */
    select?: AlertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta
     */
    omit?: AlertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertaInclude<ExtArgs> | null
    where?: AlertaWhereInput
    orderBy?: AlertaOrderByWithRelationInput | AlertaOrderByWithRelationInput[]
    cursor?: AlertaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertaScalarFieldEnum | AlertaScalarFieldEnum[]
  }

  /**
   * Alerta_tipo without action
   */
  export type Alerta_tipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerta_tipo
     */
    select?: Alerta_tipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerta_tipo
     */
    omit?: Alerta_tipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Alerta_tipoInclude<ExtArgs> | null
  }


  /**
   * Model Localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    id: number | null
    longitude: Decimal | null
    latitude: Decimal | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    id: number | null
    longitude: Decimal | null
    latitude: Decimal | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id: number | null
    longitude: Decimal | null
    latitude: Decimal | null
    data_hora: Date | null
    dispositivoId: string | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id: number | null
    longitude: Decimal | null
    latitude: Decimal | null
    data_hora: Date | null
    dispositivoId: string | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id: number
    longitude: number
    latitude: number
    data_hora: number
    dispositivoId: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
    data_hora?: true
    dispositivoId?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
    data_hora?: true
    dispositivoId?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id?: true
    longitude?: true
    latitude?: true
    data_hora?: true
    dispositivoId?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacao to aggregate.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type LocalizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithAggregationInput | LocalizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: LocalizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id: number
    longitude: Decimal
    latitude: Decimal
    data_hora: Date
    dispositivoId: string
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends LocalizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    longitude?: boolean
    latitude?: boolean
    data_hora?: boolean
    dispositivoId?: boolean
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>



  export type LocalizacaoSelectScalar = {
    id?: boolean
    longitude?: boolean
    latitude?: boolean
    data_hora?: boolean
    dispositivoId?: boolean
  }

  export type LocalizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "longitude" | "latitude" | "data_hora" | "dispositivoId", ExtArgs["result"]["localizacao"]>
  export type LocalizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
  }

  export type $LocalizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacao"
    objects: {
      dispositivo: Prisma.$DispositivoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      longitude: Prisma.Decimal
      latitude: Prisma.Decimal
      data_hora: Date
      dispositivoId: string
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }

  type LocalizacaoGetPayload<S extends boolean | null | undefined | LocalizacaoDefaultArgs> = $Result.GetResult<Prisma.$LocalizacaoPayload, S>

  type LocalizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface LocalizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacao'], meta: { name: 'Localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {LocalizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizacaoFindUniqueArgs>(args: SelectSubset<T, LocalizacaoFindUniqueArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizacaoFindFirstArgs>(args?: SelectSubset<T, LocalizacaoFindFirstArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizacaoFindManyArgs>(args?: SelectSubset<T, LocalizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacao.
     * @param {LocalizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
     */
    create<T extends LocalizacaoCreateArgs>(args: SelectSubset<T, LocalizacaoCreateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacaos.
     * @param {LocalizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizacaoCreateManyArgs>(args?: SelectSubset<T, LocalizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Localizacao.
     * @param {LocalizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
     */
    delete<T extends LocalizacaoDeleteArgs>(args: SelectSubset<T, LocalizacaoDeleteArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacao.
     * @param {LocalizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizacaoUpdateArgs>(args: SelectSubset<T, LocalizacaoUpdateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacaos.
     * @param {LocalizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizacaoDeleteManyArgs>(args?: SelectSubset<T, LocalizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizacaoUpdateManyArgs>(args: SelectSubset<T, LocalizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Localizacao.
     * @param {LocalizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
     */
    upsert<T extends LocalizacaoUpsertArgs>(args: SelectSubset<T, LocalizacaoUpsertArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends LocalizacaoCountArgs>(
      args?: Subset<T, LocalizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoGroupByArgs} args - Group by arguments.
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
      T extends LocalizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacao model
   */
  readonly fields: LocalizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispositivo<T extends DispositivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DispositivoDefaultArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Localizacao model
   */
  interface LocalizacaoFieldRefs {
    readonly id: FieldRef<"Localizacao", 'Int'>
    readonly longitude: FieldRef<"Localizacao", 'Decimal'>
    readonly latitude: FieldRef<"Localizacao", 'Decimal'>
    readonly data_hora: FieldRef<"Localizacao", 'DateTime'>
    readonly dispositivoId: FieldRef<"Localizacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Localizacao findUnique
   */
  export type LocalizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findUniqueOrThrow
   */
  export type LocalizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findFirst
   */
  export type LocalizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findFirstOrThrow
   */
  export type LocalizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findMany
   */
  export type LocalizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacaos to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao create
   */
  export type LocalizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacao.
     */
    data: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
  }

  /**
   * Localizacao createMany
   */
  export type LocalizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacao update
   */
  export type LocalizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacao.
     */
    data: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
    /**
     * Choose, which Localizacao to update.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao updateMany
   */
  export type LocalizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
  }

  /**
   * Localizacao upsert
   */
  export type LocalizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacao to update in case it exists.
     */
    where: LocalizacaoWhereUniqueInput
    /**
     * In case the Localizacao found by the `where` argument doesn't exist, create a new Localizacao with this data.
     */
    create: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
    /**
     * In case the Localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
  }

  /**
   * Localizacao delete
   */
  export type LocalizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter which Localizacao to delete.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao deleteMany
   */
  export type LocalizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacaos to delete
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to delete.
     */
    limit?: number
  }

  /**
   * Localizacao without action
   */
  export type LocalizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
  }


  /**
   * Model Dispositivo_log
   */

  export type AggregateDispositivo_log = {
    _count: Dispositivo_logCountAggregateOutputType | null
    _avg: Dispositivo_logAvgAggregateOutputType | null
    _sum: Dispositivo_logSumAggregateOutputType | null
    _min: Dispositivo_logMinAggregateOutputType | null
    _max: Dispositivo_logMaxAggregateOutputType | null
  }

  export type Dispositivo_logAvgAggregateOutputType = {
    id: number | null
    status_bateria: number | null
  }

  export type Dispositivo_logSumAggregateOutputType = {
    id: number | null
    status_bateria: number | null
  }

  export type Dispositivo_logMinAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    status_bateria: number | null
    descricao: string | null
    banda_dados: string | null
    dispositivoId: string | null
  }

  export type Dispositivo_logMaxAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    status_bateria: number | null
    descricao: string | null
    banda_dados: string | null
    dispositivoId: string | null
  }

  export type Dispositivo_logCountAggregateOutputType = {
    id: number
    data_hora: number
    status_bateria: number
    descricao: number
    banda_dados: number
    dispositivoId: number
    _all: number
  }


  export type Dispositivo_logAvgAggregateInputType = {
    id?: true
    status_bateria?: true
  }

  export type Dispositivo_logSumAggregateInputType = {
    id?: true
    status_bateria?: true
  }

  export type Dispositivo_logMinAggregateInputType = {
    id?: true
    data_hora?: true
    status_bateria?: true
    descricao?: true
    banda_dados?: true
    dispositivoId?: true
  }

  export type Dispositivo_logMaxAggregateInputType = {
    id?: true
    data_hora?: true
    status_bateria?: true
    descricao?: true
    banda_dados?: true
    dispositivoId?: true
  }

  export type Dispositivo_logCountAggregateInputType = {
    id?: true
    data_hora?: true
    status_bateria?: true
    descricao?: true
    banda_dados?: true
    dispositivoId?: true
    _all?: true
  }

  export type Dispositivo_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo_log to aggregate.
     */
    where?: Dispositivo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_logs to fetch.
     */
    orderBy?: Dispositivo_logOrderByWithRelationInput | Dispositivo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Dispositivo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispositivo_logs
    **/
    _count?: true | Dispositivo_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dispositivo_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dispositivo_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dispositivo_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dispositivo_logMaxAggregateInputType
  }

  export type GetDispositivo_logAggregateType<T extends Dispositivo_logAggregateArgs> = {
        [P in keyof T & keyof AggregateDispositivo_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispositivo_log[P]>
      : GetScalarType<T[P], AggregateDispositivo_log[P]>
  }




  export type Dispositivo_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Dispositivo_logWhereInput
    orderBy?: Dispositivo_logOrderByWithAggregationInput | Dispositivo_logOrderByWithAggregationInput[]
    by: Dispositivo_logScalarFieldEnum[] | Dispositivo_logScalarFieldEnum
    having?: Dispositivo_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dispositivo_logCountAggregateInputType | true
    _avg?: Dispositivo_logAvgAggregateInputType
    _sum?: Dispositivo_logSumAggregateInputType
    _min?: Dispositivo_logMinAggregateInputType
    _max?: Dispositivo_logMaxAggregateInputType
  }

  export type Dispositivo_logGroupByOutputType = {
    id: number
    data_hora: Date
    status_bateria: number
    descricao: string | null
    banda_dados: string
    dispositivoId: string
    _count: Dispositivo_logCountAggregateOutputType | null
    _avg: Dispositivo_logAvgAggregateOutputType | null
    _sum: Dispositivo_logSumAggregateOutputType | null
    _min: Dispositivo_logMinAggregateOutputType | null
    _max: Dispositivo_logMaxAggregateOutputType | null
  }

  type GetDispositivo_logGroupByPayload<T extends Dispositivo_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dispositivo_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dispositivo_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dispositivo_logGroupByOutputType[P]>
            : GetScalarType<T[P], Dispositivo_logGroupByOutputType[P]>
        }
      >
    >


  export type Dispositivo_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_hora?: boolean
    status_bateria?: boolean
    descricao?: boolean
    banda_dados?: boolean
    dispositivoId?: boolean
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispositivo_log"]>



  export type Dispositivo_logSelectScalar = {
    id?: boolean
    data_hora?: boolean
    status_bateria?: boolean
    descricao?: boolean
    banda_dados?: boolean
    dispositivoId?: boolean
  }

  export type Dispositivo_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_hora" | "status_bateria" | "descricao" | "banda_dados" | "dispositivoId", ExtArgs["result"]["dispositivo_log"]>
  export type Dispositivo_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispositivo?: boolean | DispositivoDefaultArgs<ExtArgs>
  }

  export type $Dispositivo_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispositivo_log"
    objects: {
      dispositivo: Prisma.$DispositivoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_hora: Date
      status_bateria: number
      descricao: string | null
      banda_dados: string
      dispositivoId: string
    }, ExtArgs["result"]["dispositivo_log"]>
    composites: {}
  }

  type Dispositivo_logGetPayload<S extends boolean | null | undefined | Dispositivo_logDefaultArgs> = $Result.GetResult<Prisma.$Dispositivo_logPayload, S>

  type Dispositivo_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Dispositivo_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dispositivo_logCountAggregateInputType | true
    }

  export interface Dispositivo_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispositivo_log'], meta: { name: 'Dispositivo_log' } }
    /**
     * Find zero or one Dispositivo_log that matches the filter.
     * @param {Dispositivo_logFindUniqueArgs} args - Arguments to find a Dispositivo_log
     * @example
     * // Get one Dispositivo_log
     * const dispositivo_log = await prisma.dispositivo_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Dispositivo_logFindUniqueArgs>(args: SelectSubset<T, Dispositivo_logFindUniqueArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispositivo_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Dispositivo_logFindUniqueOrThrowArgs} args - Arguments to find a Dispositivo_log
     * @example
     * // Get one Dispositivo_log
     * const dispositivo_log = await prisma.dispositivo_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Dispositivo_logFindUniqueOrThrowArgs>(args: SelectSubset<T, Dispositivo_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logFindFirstArgs} args - Arguments to find a Dispositivo_log
     * @example
     * // Get one Dispositivo_log
     * const dispositivo_log = await prisma.dispositivo_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Dispositivo_logFindFirstArgs>(args?: SelectSubset<T, Dispositivo_logFindFirstArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispositivo_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logFindFirstOrThrowArgs} args - Arguments to find a Dispositivo_log
     * @example
     * // Get one Dispositivo_log
     * const dispositivo_log = await prisma.dispositivo_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Dispositivo_logFindFirstOrThrowArgs>(args?: SelectSubset<T, Dispositivo_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispositivo_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispositivo_logs
     * const dispositivo_logs = await prisma.dispositivo_log.findMany()
     * 
     * // Get first 10 Dispositivo_logs
     * const dispositivo_logs = await prisma.dispositivo_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispositivo_logWithIdOnly = await prisma.dispositivo_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Dispositivo_logFindManyArgs>(args?: SelectSubset<T, Dispositivo_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispositivo_log.
     * @param {Dispositivo_logCreateArgs} args - Arguments to create a Dispositivo_log.
     * @example
     * // Create one Dispositivo_log
     * const Dispositivo_log = await prisma.dispositivo_log.create({
     *   data: {
     *     // ... data to create a Dispositivo_log
     *   }
     * })
     * 
     */
    create<T extends Dispositivo_logCreateArgs>(args: SelectSubset<T, Dispositivo_logCreateArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispositivo_logs.
     * @param {Dispositivo_logCreateManyArgs} args - Arguments to create many Dispositivo_logs.
     * @example
     * // Create many Dispositivo_logs
     * const dispositivo_log = await prisma.dispositivo_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Dispositivo_logCreateManyArgs>(args?: SelectSubset<T, Dispositivo_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dispositivo_log.
     * @param {Dispositivo_logDeleteArgs} args - Arguments to delete one Dispositivo_log.
     * @example
     * // Delete one Dispositivo_log
     * const Dispositivo_log = await prisma.dispositivo_log.delete({
     *   where: {
     *     // ... filter to delete one Dispositivo_log
     *   }
     * })
     * 
     */
    delete<T extends Dispositivo_logDeleteArgs>(args: SelectSubset<T, Dispositivo_logDeleteArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispositivo_log.
     * @param {Dispositivo_logUpdateArgs} args - Arguments to update one Dispositivo_log.
     * @example
     * // Update one Dispositivo_log
     * const dispositivo_log = await prisma.dispositivo_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Dispositivo_logUpdateArgs>(args: SelectSubset<T, Dispositivo_logUpdateArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispositivo_logs.
     * @param {Dispositivo_logDeleteManyArgs} args - Arguments to filter Dispositivo_logs to delete.
     * @example
     * // Delete a few Dispositivo_logs
     * const { count } = await prisma.dispositivo_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Dispositivo_logDeleteManyArgs>(args?: SelectSubset<T, Dispositivo_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispositivo_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispositivo_logs
     * const dispositivo_log = await prisma.dispositivo_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Dispositivo_logUpdateManyArgs>(args: SelectSubset<T, Dispositivo_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dispositivo_log.
     * @param {Dispositivo_logUpsertArgs} args - Arguments to update or create a Dispositivo_log.
     * @example
     * // Update or create a Dispositivo_log
     * const dispositivo_log = await prisma.dispositivo_log.upsert({
     *   create: {
     *     // ... data to create a Dispositivo_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispositivo_log we want to update
     *   }
     * })
     */
    upsert<T extends Dispositivo_logUpsertArgs>(args: SelectSubset<T, Dispositivo_logUpsertArgs<ExtArgs>>): Prisma__Dispositivo_logClient<$Result.GetResult<Prisma.$Dispositivo_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispositivo_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logCountArgs} args - Arguments to filter Dispositivo_logs to count.
     * @example
     * // Count the number of Dispositivo_logs
     * const count = await prisma.dispositivo_log.count({
     *   where: {
     *     // ... the filter for the Dispositivo_logs we want to count
     *   }
     * })
    **/
    count<T extends Dispositivo_logCountArgs>(
      args?: Subset<T, Dispositivo_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dispositivo_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispositivo_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dispositivo_logAggregateArgs>(args: Subset<T, Dispositivo_logAggregateArgs>): Prisma.PrismaPromise<GetDispositivo_logAggregateType<T>>

    /**
     * Group by Dispositivo_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dispositivo_logGroupByArgs} args - Group by arguments.
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
      T extends Dispositivo_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Dispositivo_logGroupByArgs['orderBy'] }
        : { orderBy?: Dispositivo_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Dispositivo_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispositivo_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispositivo_log model
   */
  readonly fields: Dispositivo_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispositivo_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Dispositivo_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispositivo<T extends DispositivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DispositivoDefaultArgs<ExtArgs>>): Prisma__DispositivoClient<$Result.GetResult<Prisma.$DispositivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dispositivo_log model
   */
  interface Dispositivo_logFieldRefs {
    readonly id: FieldRef<"Dispositivo_log", 'Int'>
    readonly data_hora: FieldRef<"Dispositivo_log", 'DateTime'>
    readonly status_bateria: FieldRef<"Dispositivo_log", 'Int'>
    readonly descricao: FieldRef<"Dispositivo_log", 'String'>
    readonly banda_dados: FieldRef<"Dispositivo_log", 'String'>
    readonly dispositivoId: FieldRef<"Dispositivo_log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dispositivo_log findUnique
   */
  export type Dispositivo_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_log to fetch.
     */
    where: Dispositivo_logWhereUniqueInput
  }

  /**
   * Dispositivo_log findUniqueOrThrow
   */
  export type Dispositivo_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_log to fetch.
     */
    where: Dispositivo_logWhereUniqueInput
  }

  /**
   * Dispositivo_log findFirst
   */
  export type Dispositivo_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_log to fetch.
     */
    where?: Dispositivo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_logs to fetch.
     */
    orderBy?: Dispositivo_logOrderByWithRelationInput | Dispositivo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivo_logs.
     */
    cursor?: Dispositivo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivo_logs.
     */
    distinct?: Dispositivo_logScalarFieldEnum | Dispositivo_logScalarFieldEnum[]
  }

  /**
   * Dispositivo_log findFirstOrThrow
   */
  export type Dispositivo_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_log to fetch.
     */
    where?: Dispositivo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_logs to fetch.
     */
    orderBy?: Dispositivo_logOrderByWithRelationInput | Dispositivo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispositivo_logs.
     */
    cursor?: Dispositivo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispositivo_logs.
     */
    distinct?: Dispositivo_logScalarFieldEnum | Dispositivo_logScalarFieldEnum[]
  }

  /**
   * Dispositivo_log findMany
   */
  export type Dispositivo_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * Filter, which Dispositivo_logs to fetch.
     */
    where?: Dispositivo_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispositivo_logs to fetch.
     */
    orderBy?: Dispositivo_logOrderByWithRelationInput | Dispositivo_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispositivo_logs.
     */
    cursor?: Dispositivo_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispositivo_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispositivo_logs.
     */
    skip?: number
    distinct?: Dispositivo_logScalarFieldEnum | Dispositivo_logScalarFieldEnum[]
  }

  /**
   * Dispositivo_log create
   */
  export type Dispositivo_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispositivo_log.
     */
    data: XOR<Dispositivo_logCreateInput, Dispositivo_logUncheckedCreateInput>
  }

  /**
   * Dispositivo_log createMany
   */
  export type Dispositivo_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispositivo_logs.
     */
    data: Dispositivo_logCreateManyInput | Dispositivo_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispositivo_log update
   */
  export type Dispositivo_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispositivo_log.
     */
    data: XOR<Dispositivo_logUpdateInput, Dispositivo_logUncheckedUpdateInput>
    /**
     * Choose, which Dispositivo_log to update.
     */
    where: Dispositivo_logWhereUniqueInput
  }

  /**
   * Dispositivo_log updateMany
   */
  export type Dispositivo_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispositivo_logs.
     */
    data: XOR<Dispositivo_logUpdateManyMutationInput, Dispositivo_logUncheckedUpdateManyInput>
    /**
     * Filter which Dispositivo_logs to update
     */
    where?: Dispositivo_logWhereInput
    /**
     * Limit how many Dispositivo_logs to update.
     */
    limit?: number
  }

  /**
   * Dispositivo_log upsert
   */
  export type Dispositivo_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispositivo_log to update in case it exists.
     */
    where: Dispositivo_logWhereUniqueInput
    /**
     * In case the Dispositivo_log found by the `where` argument doesn't exist, create a new Dispositivo_log with this data.
     */
    create: XOR<Dispositivo_logCreateInput, Dispositivo_logUncheckedCreateInput>
    /**
     * In case the Dispositivo_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Dispositivo_logUpdateInput, Dispositivo_logUncheckedUpdateInput>
  }

  /**
   * Dispositivo_log delete
   */
  export type Dispositivo_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
    /**
     * Filter which Dispositivo_log to delete.
     */
    where: Dispositivo_logWhereUniqueInput
  }

  /**
   * Dispositivo_log deleteMany
   */
  export type Dispositivo_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispositivo_logs to delete
     */
    where?: Dispositivo_logWhereInput
    /**
     * Limit how many Dispositivo_logs to delete.
     */
    limit?: number
  }

  /**
   * Dispositivo_log without action
   */
  export type Dispositivo_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispositivo_log
     */
    select?: Dispositivo_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispositivo_log
     */
    omit?: Dispositivo_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Dispositivo_logInclude<ExtArgs> | null
  }


  /**
   * Model Usuario_log
   */

  export type AggregateUsuario_log = {
    _count: Usuario_logCountAggregateOutputType | null
    _avg: Usuario_logAvgAggregateOutputType | null
    _sum: Usuario_logSumAggregateOutputType | null
    _min: Usuario_logMinAggregateOutputType | null
    _max: Usuario_logMaxAggregateOutputType | null
  }

  export type Usuario_logAvgAggregateOutputType = {
    id: number | null
  }

  export type Usuario_logSumAggregateOutputType = {
    id: number | null
  }

  export type Usuario_logMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    data_hora: Date | null
    usuarioId: string | null
  }

  export type Usuario_logMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    data_hora: Date | null
    usuarioId: string | null
  }

  export type Usuario_logCountAggregateOutputType = {
    id: number
    descricao: number
    data_hora: number
    usuarioId: number
    _all: number
  }


  export type Usuario_logAvgAggregateInputType = {
    id?: true
  }

  export type Usuario_logSumAggregateInputType = {
    id?: true
  }

  export type Usuario_logMinAggregateInputType = {
    id?: true
    descricao?: true
    data_hora?: true
    usuarioId?: true
  }

  export type Usuario_logMaxAggregateInputType = {
    id?: true
    descricao?: true
    data_hora?: true
    usuarioId?: true
  }

  export type Usuario_logCountAggregateInputType = {
    id?: true
    descricao?: true
    data_hora?: true
    usuarioId?: true
    _all?: true
  }

  export type Usuario_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario_log to aggregate.
     */
    where?: Usuario_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_logs to fetch.
     */
    orderBy?: Usuario_logOrderByWithRelationInput | Usuario_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Usuario_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuario_logs
    **/
    _count?: true | Usuario_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_logMaxAggregateInputType
  }

  export type GetUsuario_logAggregateType<T extends Usuario_logAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_log[P]>
      : GetScalarType<T[P], AggregateUsuario_log[P]>
  }




  export type Usuario_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Usuario_logWhereInput
    orderBy?: Usuario_logOrderByWithAggregationInput | Usuario_logOrderByWithAggregationInput[]
    by: Usuario_logScalarFieldEnum[] | Usuario_logScalarFieldEnum
    having?: Usuario_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_logCountAggregateInputType | true
    _avg?: Usuario_logAvgAggregateInputType
    _sum?: Usuario_logSumAggregateInputType
    _min?: Usuario_logMinAggregateInputType
    _max?: Usuario_logMaxAggregateInputType
  }

  export type Usuario_logGroupByOutputType = {
    id: number
    descricao: string
    data_hora: Date
    usuarioId: string
    _count: Usuario_logCountAggregateOutputType | null
    _avg: Usuario_logAvgAggregateOutputType | null
    _sum: Usuario_logSumAggregateOutputType | null
    _min: Usuario_logMinAggregateOutputType | null
    _max: Usuario_logMaxAggregateOutputType | null
  }

  type GetUsuario_logGroupByPayload<T extends Usuario_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_logGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_logGroupByOutputType[P]>
        }
      >
    >


  export type Usuario_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    data_hora?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_log"]>



  export type Usuario_logSelectScalar = {
    id?: boolean
    descricao?: boolean
    data_hora?: boolean
    usuarioId?: boolean
  }

  export type Usuario_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "data_hora" | "usuarioId", ExtArgs["result"]["usuario_log"]>
  export type Usuario_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $Usuario_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario_log"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      data_hora: Date
      usuarioId: string
    }, ExtArgs["result"]["usuario_log"]>
    composites: {}
  }

  type Usuario_logGetPayload<S extends boolean | null | undefined | Usuario_logDefaultArgs> = $Result.GetResult<Prisma.$Usuario_logPayload, S>

  type Usuario_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Usuario_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_logCountAggregateInputType | true
    }

  export interface Usuario_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario_log'], meta: { name: 'Usuario_log' } }
    /**
     * Find zero or one Usuario_log that matches the filter.
     * @param {Usuario_logFindUniqueArgs} args - Arguments to find a Usuario_log
     * @example
     * // Get one Usuario_log
     * const usuario_log = await prisma.usuario_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Usuario_logFindUniqueArgs>(args: SelectSubset<T, Usuario_logFindUniqueArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Usuario_logFindUniqueOrThrowArgs} args - Arguments to find a Usuario_log
     * @example
     * // Get one Usuario_log
     * const usuario_log = await prisma.usuario_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Usuario_logFindUniqueOrThrowArgs>(args: SelectSubset<T, Usuario_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logFindFirstArgs} args - Arguments to find a Usuario_log
     * @example
     * // Get one Usuario_log
     * const usuario_log = await prisma.usuario_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Usuario_logFindFirstArgs>(args?: SelectSubset<T, Usuario_logFindFirstArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logFindFirstOrThrowArgs} args - Arguments to find a Usuario_log
     * @example
     * // Get one Usuario_log
     * const usuario_log = await prisma.usuario_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Usuario_logFindFirstOrThrowArgs>(args?: SelectSubset<T, Usuario_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_logs
     * const usuario_logs = await prisma.usuario_log.findMany()
     * 
     * // Get first 10 Usuario_logs
     * const usuario_logs = await prisma.usuario_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuario_logWithIdOnly = await prisma.usuario_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Usuario_logFindManyArgs>(args?: SelectSubset<T, Usuario_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_log.
     * @param {Usuario_logCreateArgs} args - Arguments to create a Usuario_log.
     * @example
     * // Create one Usuario_log
     * const Usuario_log = await prisma.usuario_log.create({
     *   data: {
     *     // ... data to create a Usuario_log
     *   }
     * })
     * 
     */
    create<T extends Usuario_logCreateArgs>(args: SelectSubset<T, Usuario_logCreateArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_logs.
     * @param {Usuario_logCreateManyArgs} args - Arguments to create many Usuario_logs.
     * @example
     * // Create many Usuario_logs
     * const usuario_log = await prisma.usuario_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Usuario_logCreateManyArgs>(args?: SelectSubset<T, Usuario_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario_log.
     * @param {Usuario_logDeleteArgs} args - Arguments to delete one Usuario_log.
     * @example
     * // Delete one Usuario_log
     * const Usuario_log = await prisma.usuario_log.delete({
     *   where: {
     *     // ... filter to delete one Usuario_log
     *   }
     * })
     * 
     */
    delete<T extends Usuario_logDeleteArgs>(args: SelectSubset<T, Usuario_logDeleteArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_log.
     * @param {Usuario_logUpdateArgs} args - Arguments to update one Usuario_log.
     * @example
     * // Update one Usuario_log
     * const usuario_log = await prisma.usuario_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Usuario_logUpdateArgs>(args: SelectSubset<T, Usuario_logUpdateArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_logs.
     * @param {Usuario_logDeleteManyArgs} args - Arguments to filter Usuario_logs to delete.
     * @example
     * // Delete a few Usuario_logs
     * const { count } = await prisma.usuario_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Usuario_logDeleteManyArgs>(args?: SelectSubset<T, Usuario_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_logs
     * const usuario_log = await prisma.usuario_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Usuario_logUpdateManyArgs>(args: SelectSubset<T, Usuario_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario_log.
     * @param {Usuario_logUpsertArgs} args - Arguments to update or create a Usuario_log.
     * @example
     * // Update or create a Usuario_log
     * const usuario_log = await prisma.usuario_log.upsert({
     *   create: {
     *     // ... data to create a Usuario_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_log we want to update
     *   }
     * })
     */
    upsert<T extends Usuario_logUpsertArgs>(args: SelectSubset<T, Usuario_logUpsertArgs<ExtArgs>>): Prisma__Usuario_logClient<$Result.GetResult<Prisma.$Usuario_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logCountArgs} args - Arguments to filter Usuario_logs to count.
     * @example
     * // Count the number of Usuario_logs
     * const count = await prisma.usuario_log.count({
     *   where: {
     *     // ... the filter for the Usuario_logs we want to count
     *   }
     * })
    **/
    count<T extends Usuario_logCountArgs>(
      args?: Subset<T, Usuario_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_logAggregateArgs>(args: Subset<T, Usuario_logAggregateArgs>): Prisma.PrismaPromise<GetUsuario_logAggregateType<T>>

    /**
     * Group by Usuario_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_logGroupByArgs} args - Group by arguments.
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
      T extends Usuario_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Usuario_logGroupByArgs['orderBy'] }
        : { orderBy?: Usuario_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Usuario_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario_log model
   */
  readonly fields: Usuario_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Usuario_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario_log model
   */
  interface Usuario_logFieldRefs {
    readonly id: FieldRef<"Usuario_log", 'Int'>
    readonly descricao: FieldRef<"Usuario_log", 'String'>
    readonly data_hora: FieldRef<"Usuario_log", 'DateTime'>
    readonly usuarioId: FieldRef<"Usuario_log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario_log findUnique
   */
  export type Usuario_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_log to fetch.
     */
    where: Usuario_logWhereUniqueInput
  }

  /**
   * Usuario_log findUniqueOrThrow
   */
  export type Usuario_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_log to fetch.
     */
    where: Usuario_logWhereUniqueInput
  }

  /**
   * Usuario_log findFirst
   */
  export type Usuario_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_log to fetch.
     */
    where?: Usuario_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_logs to fetch.
     */
    orderBy?: Usuario_logOrderByWithRelationInput | Usuario_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuario_logs.
     */
    cursor?: Usuario_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuario_logs.
     */
    distinct?: Usuario_logScalarFieldEnum | Usuario_logScalarFieldEnum[]
  }

  /**
   * Usuario_log findFirstOrThrow
   */
  export type Usuario_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_log to fetch.
     */
    where?: Usuario_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_logs to fetch.
     */
    orderBy?: Usuario_logOrderByWithRelationInput | Usuario_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuario_logs.
     */
    cursor?: Usuario_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuario_logs.
     */
    distinct?: Usuario_logScalarFieldEnum | Usuario_logScalarFieldEnum[]
  }

  /**
   * Usuario_log findMany
   */
  export type Usuario_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * Filter, which Usuario_logs to fetch.
     */
    where?: Usuario_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuario_logs to fetch.
     */
    orderBy?: Usuario_logOrderByWithRelationInput | Usuario_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuario_logs.
     */
    cursor?: Usuario_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuario_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuario_logs.
     */
    skip?: number
    distinct?: Usuario_logScalarFieldEnum | Usuario_logScalarFieldEnum[]
  }

  /**
   * Usuario_log create
   */
  export type Usuario_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario_log.
     */
    data: XOR<Usuario_logCreateInput, Usuario_logUncheckedCreateInput>
  }

  /**
   * Usuario_log createMany
   */
  export type Usuario_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuario_logs.
     */
    data: Usuario_logCreateManyInput | Usuario_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario_log update
   */
  export type Usuario_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario_log.
     */
    data: XOR<Usuario_logUpdateInput, Usuario_logUncheckedUpdateInput>
    /**
     * Choose, which Usuario_log to update.
     */
    where: Usuario_logWhereUniqueInput
  }

  /**
   * Usuario_log updateMany
   */
  export type Usuario_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuario_logs.
     */
    data: XOR<Usuario_logUpdateManyMutationInput, Usuario_logUncheckedUpdateManyInput>
    /**
     * Filter which Usuario_logs to update
     */
    where?: Usuario_logWhereInput
    /**
     * Limit how many Usuario_logs to update.
     */
    limit?: number
  }

  /**
   * Usuario_log upsert
   */
  export type Usuario_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario_log to update in case it exists.
     */
    where: Usuario_logWhereUniqueInput
    /**
     * In case the Usuario_log found by the `where` argument doesn't exist, create a new Usuario_log with this data.
     */
    create: XOR<Usuario_logCreateInput, Usuario_logUncheckedCreateInput>
    /**
     * In case the Usuario_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Usuario_logUpdateInput, Usuario_logUncheckedUpdateInput>
  }

  /**
   * Usuario_log delete
   */
  export type Usuario_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
    /**
     * Filter which Usuario_log to delete.
     */
    where: Usuario_logWhereUniqueInput
  }

  /**
   * Usuario_log deleteMany
   */
  export type Usuario_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario_logs to delete
     */
    where?: Usuario_logWhereInput
    /**
     * Limit how many Usuario_logs to delete.
     */
    limit?: number
  }

  /**
   * Usuario_log without action
   */
  export type Usuario_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_log
     */
    select?: Usuario_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario_log
     */
    omit?: Usuario_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Usuario_logInclude<ExtArgs> | null
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
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    createdAt: 'createdAt',
    email: 'email',
    deleted: 'deleted'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const DispositivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    modelo: 'modelo',
    numero_de_serie: 'numero_de_serie',
    activade: 'activade',
    data_fabricacao: 'data_fabricacao',
    usuarioId: 'usuarioId',
    bateria: 'bateria',
    status: 'status'
  };

  export type DispositivoScalarFieldEnum = (typeof DispositivoScalarFieldEnum)[keyof typeof DispositivoScalarFieldEnum]


  export const Dispositivo_configScalarFieldEnum: {
    id: 'id',
    intervalo_envio: 'intervalo_envio',
    monitoramentoLigado: 'monitoramentoLigado',
    dispositivoId: 'dispositivoId',
    modo_eco: 'modo_eco',
    alerta_sem_sinal: 'alerta_sem_sinal',
    alerta_bateria: 'alerta_bateria',
    alerta_bateria_valor: 'alerta_bateria_valor'
  };

  export type Dispositivo_configScalarFieldEnum = (typeof Dispositivo_configScalarFieldEnum)[keyof typeof Dispositivo_configScalarFieldEnum]


  export const AlertaScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    gravidede: 'gravidede',
    ativo: 'ativo',
    dispositivoId: 'dispositivoId',
    alertaId: 'alertaId',
    createdAt: 'createdAt'
  };

  export type AlertaScalarFieldEnum = (typeof AlertaScalarFieldEnum)[keyof typeof AlertaScalarFieldEnum]


  export const Alerta_tipoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    regra: 'regra',
    valor: 'valor'
  };

  export type Alerta_tipoScalarFieldEnum = (typeof Alerta_tipoScalarFieldEnum)[keyof typeof Alerta_tipoScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id: 'id',
    longitude: 'longitude',
    latitude: 'latitude',
    data_hora: 'data_hora',
    dispositivoId: 'dispositivoId'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const Dispositivo_logScalarFieldEnum: {
    id: 'id',
    data_hora: 'data_hora',
    status_bateria: 'status_bateria',
    descricao: 'descricao',
    banda_dados: 'banda_dados',
    dispositivoId: 'dispositivoId'
  };

  export type Dispositivo_logScalarFieldEnum = (typeof Dispositivo_logScalarFieldEnum)[keyof typeof Dispositivo_logScalarFieldEnum]


  export const Usuario_logScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    data_hora: 'data_hora',
    usuarioId: 'usuarioId'
  };

  export type Usuario_logScalarFieldEnum = (typeof Usuario_logScalarFieldEnum)[keyof typeof Usuario_logScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const TokensOrderByRelevanceFieldEnum: {
    codigo: 'codigo',
    email: 'email'
  };

  export type TokensOrderByRelevanceFieldEnum = (typeof TokensOrderByRelevanceFieldEnum)[keyof typeof TokensOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DispositivoOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    modelo: 'modelo',
    numero_de_serie: 'numero_de_serie',
    usuarioId: 'usuarioId'
  };

  export type DispositivoOrderByRelevanceFieldEnum = (typeof DispositivoOrderByRelevanceFieldEnum)[keyof typeof DispositivoOrderByRelevanceFieldEnum]


  export const Dispositivo_configOrderByRelevanceFieldEnum: {
    dispositivoId: 'dispositivoId'
  };

  export type Dispositivo_configOrderByRelevanceFieldEnum = (typeof Dispositivo_configOrderByRelevanceFieldEnum)[keyof typeof Dispositivo_configOrderByRelevanceFieldEnum]


  export const AlertaOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    dispositivoId: 'dispositivoId'
  };

  export type AlertaOrderByRelevanceFieldEnum = (typeof AlertaOrderByRelevanceFieldEnum)[keyof typeof AlertaOrderByRelevanceFieldEnum]


  export const Alerta_tipoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    regra: 'regra',
    valor: 'valor'
  };

  export type Alerta_tipoOrderByRelevanceFieldEnum = (typeof Alerta_tipoOrderByRelevanceFieldEnum)[keyof typeof Alerta_tipoOrderByRelevanceFieldEnum]


  export const LocalizacaoOrderByRelevanceFieldEnum: {
    dispositivoId: 'dispositivoId'
  };

  export type LocalizacaoOrderByRelevanceFieldEnum = (typeof LocalizacaoOrderByRelevanceFieldEnum)[keyof typeof LocalizacaoOrderByRelevanceFieldEnum]


  export const Dispositivo_logOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    banda_dados: 'banda_dados',
    dispositivoId: 'dispositivoId'
  };

  export type Dispositivo_logOrderByRelevanceFieldEnum = (typeof Dispositivo_logOrderByRelevanceFieldEnum)[keyof typeof Dispositivo_logOrderByRelevanceFieldEnum]


  export const Usuario_logOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    usuarioId: 'usuarioId'
  };

  export type Usuario_logOrderByRelevanceFieldEnum = (typeof Usuario_logOrderByRelevanceFieldEnum)[keyof typeof Usuario_logOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Dispositivo_status'
   */
  export type EnumDispositivo_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Dispositivo_status'>
    


  /**
   * Reference to a field of type 'Alerta_gravidade'
   */
  export type EnumAlerta_gravidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Alerta_gravidade'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


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
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    deleted?: BoolFilter<"Usuario"> | boolean
    dispositivos?: DispositivoListRelationFilter
    log?: Usuario_logListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    dispositivos?: DispositivoOrderByRelationAggregateInput
    log?: Usuario_logOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    deleted?: BoolFilter<"Usuario"> | boolean
    dispositivos?: DispositivoListRelationFilter
    log?: Usuario_logListRelationFilter
  }, "id" | "email" | "cpf">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    deleted?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: IntFilter<"Tokens"> | number
    codigo?: StringFilter<"Tokens"> | string
    createdAt?: DateTimeFilter<"Tokens"> | Date | string
    email?: StringFilter<"Tokens"> | string
    deleted?: BoolFilter<"Tokens"> | boolean
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    deleted?: SortOrder
    _relevance?: TokensOrderByRelevanceInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    codigo?: StringFilter<"Tokens"> | string
    createdAt?: DateTimeFilter<"Tokens"> | Date | string
    email?: StringFilter<"Tokens"> | string
    deleted?: BoolFilter<"Tokens"> | boolean
  }, "id">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    deleted?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _avg?: TokensAvgOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
    _sum?: TokensSumOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tokens"> | number
    codigo?: StringWithAggregatesFilter<"Tokens"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
    email?: StringWithAggregatesFilter<"Tokens"> | string
    deleted?: BoolWithAggregatesFilter<"Tokens"> | boolean
  }

  export type DispositivoWhereInput = {
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    id?: StringFilter<"Dispositivo"> | string
    nome?: StringFilter<"Dispositivo"> | string
    modelo?: StringFilter<"Dispositivo"> | string
    numero_de_serie?: StringFilter<"Dispositivo"> | string
    activade?: BoolFilter<"Dispositivo"> | boolean
    data_fabricacao?: DateTimeFilter<"Dispositivo"> | Date | string
    usuarioId?: StringNullableFilter<"Dispositivo"> | string | null
    bateria?: IntFilter<"Dispositivo"> | number
    status?: EnumDispositivo_statusFilter<"Dispositivo"> | $Enums.Dispositivo_status
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    config?: Dispositivo_configListRelationFilter
    alertas?: AlertaListRelationFilter
    localizacoes?: LocalizacaoListRelationFilter
    logs?: Dispositivo_logListRelationFilter
  }

  export type DispositivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    modelo?: SortOrder
    numero_de_serie?: SortOrder
    activade?: SortOrder
    data_fabricacao?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    bateria?: SortOrder
    status?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    config?: Dispositivo_configOrderByRelationAggregateInput
    alertas?: AlertaOrderByRelationAggregateInput
    localizacoes?: LocalizacaoOrderByRelationAggregateInput
    logs?: Dispositivo_logOrderByRelationAggregateInput
    _relevance?: DispositivoOrderByRelevanceInput
  }

  export type DispositivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DispositivoWhereInput | DispositivoWhereInput[]
    OR?: DispositivoWhereInput[]
    NOT?: DispositivoWhereInput | DispositivoWhereInput[]
    nome?: StringFilter<"Dispositivo"> | string
    modelo?: StringFilter<"Dispositivo"> | string
    numero_de_serie?: StringFilter<"Dispositivo"> | string
    activade?: BoolFilter<"Dispositivo"> | boolean
    data_fabricacao?: DateTimeFilter<"Dispositivo"> | Date | string
    usuarioId?: StringNullableFilter<"Dispositivo"> | string | null
    bateria?: IntFilter<"Dispositivo"> | number
    status?: EnumDispositivo_statusFilter<"Dispositivo"> | $Enums.Dispositivo_status
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    config?: Dispositivo_configListRelationFilter
    alertas?: AlertaListRelationFilter
    localizacoes?: LocalizacaoListRelationFilter
    logs?: Dispositivo_logListRelationFilter
  }, "id">

  export type DispositivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    modelo?: SortOrder
    numero_de_serie?: SortOrder
    activade?: SortOrder
    data_fabricacao?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    bateria?: SortOrder
    status?: SortOrder
    _count?: DispositivoCountOrderByAggregateInput
    _avg?: DispositivoAvgOrderByAggregateInput
    _max?: DispositivoMaxOrderByAggregateInput
    _min?: DispositivoMinOrderByAggregateInput
    _sum?: DispositivoSumOrderByAggregateInput
  }

  export type DispositivoScalarWhereWithAggregatesInput = {
    AND?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    OR?: DispositivoScalarWhereWithAggregatesInput[]
    NOT?: DispositivoScalarWhereWithAggregatesInput | DispositivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispositivo"> | string
    nome?: StringWithAggregatesFilter<"Dispositivo"> | string
    modelo?: StringWithAggregatesFilter<"Dispositivo"> | string
    numero_de_serie?: StringWithAggregatesFilter<"Dispositivo"> | string
    activade?: BoolWithAggregatesFilter<"Dispositivo"> | boolean
    data_fabricacao?: DateTimeWithAggregatesFilter<"Dispositivo"> | Date | string
    usuarioId?: StringNullableWithAggregatesFilter<"Dispositivo"> | string | null
    bateria?: IntWithAggregatesFilter<"Dispositivo"> | number
    status?: EnumDispositivo_statusWithAggregatesFilter<"Dispositivo"> | $Enums.Dispositivo_status
  }

  export type Dispositivo_configWhereInput = {
    AND?: Dispositivo_configWhereInput | Dispositivo_configWhereInput[]
    OR?: Dispositivo_configWhereInput[]
    NOT?: Dispositivo_configWhereInput | Dispositivo_configWhereInput[]
    id?: IntFilter<"Dispositivo_config"> | number
    intervalo_envio?: IntFilter<"Dispositivo_config"> | number
    monitoramentoLigado?: BoolFilter<"Dispositivo_config"> | boolean
    dispositivoId?: StringFilter<"Dispositivo_config"> | string
    modo_eco?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_sem_sinal?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_bateria?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_bateria_valor?: IntFilter<"Dispositivo_config"> | number
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
  }

  export type Dispositivo_configOrderByWithRelationInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    monitoramentoLigado?: SortOrder
    dispositivoId?: SortOrder
    modo_eco?: SortOrder
    alerta_sem_sinal?: SortOrder
    alerta_bateria?: SortOrder
    alerta_bateria_valor?: SortOrder
    dispositivo?: DispositivoOrderByWithRelationInput
    _relevance?: Dispositivo_configOrderByRelevanceInput
  }

  export type Dispositivo_configWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Dispositivo_configWhereInput | Dispositivo_configWhereInput[]
    OR?: Dispositivo_configWhereInput[]
    NOT?: Dispositivo_configWhereInput | Dispositivo_configWhereInput[]
    intervalo_envio?: IntFilter<"Dispositivo_config"> | number
    monitoramentoLigado?: BoolFilter<"Dispositivo_config"> | boolean
    dispositivoId?: StringFilter<"Dispositivo_config"> | string
    modo_eco?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_sem_sinal?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_bateria?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_bateria_valor?: IntFilter<"Dispositivo_config"> | number
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
  }, "id">

  export type Dispositivo_configOrderByWithAggregationInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    monitoramentoLigado?: SortOrder
    dispositivoId?: SortOrder
    modo_eco?: SortOrder
    alerta_sem_sinal?: SortOrder
    alerta_bateria?: SortOrder
    alerta_bateria_valor?: SortOrder
    _count?: Dispositivo_configCountOrderByAggregateInput
    _avg?: Dispositivo_configAvgOrderByAggregateInput
    _max?: Dispositivo_configMaxOrderByAggregateInput
    _min?: Dispositivo_configMinOrderByAggregateInput
    _sum?: Dispositivo_configSumOrderByAggregateInput
  }

  export type Dispositivo_configScalarWhereWithAggregatesInput = {
    AND?: Dispositivo_configScalarWhereWithAggregatesInput | Dispositivo_configScalarWhereWithAggregatesInput[]
    OR?: Dispositivo_configScalarWhereWithAggregatesInput[]
    NOT?: Dispositivo_configScalarWhereWithAggregatesInput | Dispositivo_configScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dispositivo_config"> | number
    intervalo_envio?: IntWithAggregatesFilter<"Dispositivo_config"> | number
    monitoramentoLigado?: BoolWithAggregatesFilter<"Dispositivo_config"> | boolean
    dispositivoId?: StringWithAggregatesFilter<"Dispositivo_config"> | string
    modo_eco?: BoolWithAggregatesFilter<"Dispositivo_config"> | boolean
    alerta_sem_sinal?: BoolWithAggregatesFilter<"Dispositivo_config"> | boolean
    alerta_bateria?: BoolWithAggregatesFilter<"Dispositivo_config"> | boolean
    alerta_bateria_valor?: IntWithAggregatesFilter<"Dispositivo_config"> | number
  }

  export type AlertaWhereInput = {
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    id?: IntFilter<"Alerta"> | number
    descricao?: StringFilter<"Alerta"> | string
    gravidede?: EnumAlerta_gravidadeFilter<"Alerta"> | $Enums.Alerta_gravidade
    ativo?: BoolFilter<"Alerta"> | boolean
    dispositivoId?: StringFilter<"Alerta"> | string
    alertaId?: IntFilter<"Alerta"> | number
    createdAt?: DateTimeFilter<"Alerta"> | Date | string
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
    alertaTipo?: XOR<Alerta_tipoScalarRelationFilter, Alerta_tipoWhereInput>
  }

  export type AlertaOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    gravidede?: SortOrder
    ativo?: SortOrder
    dispositivoId?: SortOrder
    alertaId?: SortOrder
    createdAt?: SortOrder
    dispositivo?: DispositivoOrderByWithRelationInput
    alertaTipo?: Alerta_tipoOrderByWithRelationInput
    _relevance?: AlertaOrderByRelevanceInput
  }

  export type AlertaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertaWhereInput | AlertaWhereInput[]
    OR?: AlertaWhereInput[]
    NOT?: AlertaWhereInput | AlertaWhereInput[]
    descricao?: StringFilter<"Alerta"> | string
    gravidede?: EnumAlerta_gravidadeFilter<"Alerta"> | $Enums.Alerta_gravidade
    ativo?: BoolFilter<"Alerta"> | boolean
    dispositivoId?: StringFilter<"Alerta"> | string
    alertaId?: IntFilter<"Alerta"> | number
    createdAt?: DateTimeFilter<"Alerta"> | Date | string
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
    alertaTipo?: XOR<Alerta_tipoScalarRelationFilter, Alerta_tipoWhereInput>
  }, "id">

  export type AlertaOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    gravidede?: SortOrder
    ativo?: SortOrder
    dispositivoId?: SortOrder
    alertaId?: SortOrder
    createdAt?: SortOrder
    _count?: AlertaCountOrderByAggregateInput
    _avg?: AlertaAvgOrderByAggregateInput
    _max?: AlertaMaxOrderByAggregateInput
    _min?: AlertaMinOrderByAggregateInput
    _sum?: AlertaSumOrderByAggregateInput
  }

  export type AlertaScalarWhereWithAggregatesInput = {
    AND?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    OR?: AlertaScalarWhereWithAggregatesInput[]
    NOT?: AlertaScalarWhereWithAggregatesInput | AlertaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alerta"> | number
    descricao?: StringWithAggregatesFilter<"Alerta"> | string
    gravidede?: EnumAlerta_gravidadeWithAggregatesFilter<"Alerta"> | $Enums.Alerta_gravidade
    ativo?: BoolWithAggregatesFilter<"Alerta"> | boolean
    dispositivoId?: StringWithAggregatesFilter<"Alerta"> | string
    alertaId?: IntWithAggregatesFilter<"Alerta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Alerta"> | Date | string
  }

  export type Alerta_tipoWhereInput = {
    AND?: Alerta_tipoWhereInput | Alerta_tipoWhereInput[]
    OR?: Alerta_tipoWhereInput[]
    NOT?: Alerta_tipoWhereInput | Alerta_tipoWhereInput[]
    id?: IntFilter<"Alerta_tipo"> | number
    nome?: StringFilter<"Alerta_tipo"> | string
    regra?: StringFilter<"Alerta_tipo"> | string
    valor?: StringFilter<"Alerta_tipo"> | string
    alerta?: AlertaListRelationFilter
  }

  export type Alerta_tipoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    regra?: SortOrder
    valor?: SortOrder
    alerta?: AlertaOrderByRelationAggregateInput
    _relevance?: Alerta_tipoOrderByRelevanceInput
  }

  export type Alerta_tipoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Alerta_tipoWhereInput | Alerta_tipoWhereInput[]
    OR?: Alerta_tipoWhereInput[]
    NOT?: Alerta_tipoWhereInput | Alerta_tipoWhereInput[]
    nome?: StringFilter<"Alerta_tipo"> | string
    regra?: StringFilter<"Alerta_tipo"> | string
    valor?: StringFilter<"Alerta_tipo"> | string
    alerta?: AlertaListRelationFilter
  }, "id">

  export type Alerta_tipoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    regra?: SortOrder
    valor?: SortOrder
    _count?: Alerta_tipoCountOrderByAggregateInput
    _avg?: Alerta_tipoAvgOrderByAggregateInput
    _max?: Alerta_tipoMaxOrderByAggregateInput
    _min?: Alerta_tipoMinOrderByAggregateInput
    _sum?: Alerta_tipoSumOrderByAggregateInput
  }

  export type Alerta_tipoScalarWhereWithAggregatesInput = {
    AND?: Alerta_tipoScalarWhereWithAggregatesInput | Alerta_tipoScalarWhereWithAggregatesInput[]
    OR?: Alerta_tipoScalarWhereWithAggregatesInput[]
    NOT?: Alerta_tipoScalarWhereWithAggregatesInput | Alerta_tipoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alerta_tipo"> | number
    nome?: StringWithAggregatesFilter<"Alerta_tipo"> | string
    regra?: StringWithAggregatesFilter<"Alerta_tipo"> | string
    valor?: StringWithAggregatesFilter<"Alerta_tipo"> | string
  }

  export type LocalizacaoWhereInput = {
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    longitude?: DecimalFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFilter<"Localizacao"> | Date | string
    dispositivoId?: StringFilter<"Localizacao"> | string
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
  }

  export type LocalizacaoOrderByWithRelationInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    data_hora?: SortOrder
    dispositivoId?: SortOrder
    dispositivo?: DispositivoOrderByWithRelationInput
    _relevance?: LocalizacaoOrderByRelevanceInput
  }

  export type LocalizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    longitude?: DecimalFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFilter<"Localizacao"> | Date | string
    dispositivoId?: StringFilter<"Localizacao"> | string
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
  }, "id">

  export type LocalizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    data_hora?: SortOrder
    dispositivoId?: SortOrder
    _count?: LocalizacaoCountOrderByAggregateInput
    _avg?: LocalizacaoAvgOrderByAggregateInput
    _max?: LocalizacaoMaxOrderByAggregateInput
    _min?: LocalizacaoMinOrderByAggregateInput
    _sum?: LocalizacaoSumOrderByAggregateInput
  }

  export type LocalizacaoScalarWhereWithAggregatesInput = {
    AND?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    OR?: LocalizacaoScalarWhereWithAggregatesInput[]
    NOT?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localizacao"> | number
    longitude?: DecimalWithAggregatesFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    latitude?: DecimalWithAggregatesFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeWithAggregatesFilter<"Localizacao"> | Date | string
    dispositivoId?: StringWithAggregatesFilter<"Localizacao"> | string
  }

  export type Dispositivo_logWhereInput = {
    AND?: Dispositivo_logWhereInput | Dispositivo_logWhereInput[]
    OR?: Dispositivo_logWhereInput[]
    NOT?: Dispositivo_logWhereInput | Dispositivo_logWhereInput[]
    id?: IntFilter<"Dispositivo_log"> | number
    data_hora?: DateTimeFilter<"Dispositivo_log"> | Date | string
    status_bateria?: IntFilter<"Dispositivo_log"> | number
    descricao?: StringNullableFilter<"Dispositivo_log"> | string | null
    banda_dados?: StringFilter<"Dispositivo_log"> | string
    dispositivoId?: StringFilter<"Dispositivo_log"> | string
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
  }

  export type Dispositivo_logOrderByWithRelationInput = {
    id?: SortOrder
    data_hora?: SortOrder
    status_bateria?: SortOrder
    descricao?: SortOrderInput | SortOrder
    banda_dados?: SortOrder
    dispositivoId?: SortOrder
    dispositivo?: DispositivoOrderByWithRelationInput
    _relevance?: Dispositivo_logOrderByRelevanceInput
  }

  export type Dispositivo_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Dispositivo_logWhereInput | Dispositivo_logWhereInput[]
    OR?: Dispositivo_logWhereInput[]
    NOT?: Dispositivo_logWhereInput | Dispositivo_logWhereInput[]
    data_hora?: DateTimeFilter<"Dispositivo_log"> | Date | string
    status_bateria?: IntFilter<"Dispositivo_log"> | number
    descricao?: StringNullableFilter<"Dispositivo_log"> | string | null
    banda_dados?: StringFilter<"Dispositivo_log"> | string
    dispositivoId?: StringFilter<"Dispositivo_log"> | string
    dispositivo?: XOR<DispositivoScalarRelationFilter, DispositivoWhereInput>
  }, "id">

  export type Dispositivo_logOrderByWithAggregationInput = {
    id?: SortOrder
    data_hora?: SortOrder
    status_bateria?: SortOrder
    descricao?: SortOrderInput | SortOrder
    banda_dados?: SortOrder
    dispositivoId?: SortOrder
    _count?: Dispositivo_logCountOrderByAggregateInput
    _avg?: Dispositivo_logAvgOrderByAggregateInput
    _max?: Dispositivo_logMaxOrderByAggregateInput
    _min?: Dispositivo_logMinOrderByAggregateInput
    _sum?: Dispositivo_logSumOrderByAggregateInput
  }

  export type Dispositivo_logScalarWhereWithAggregatesInput = {
    AND?: Dispositivo_logScalarWhereWithAggregatesInput | Dispositivo_logScalarWhereWithAggregatesInput[]
    OR?: Dispositivo_logScalarWhereWithAggregatesInput[]
    NOT?: Dispositivo_logScalarWhereWithAggregatesInput | Dispositivo_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dispositivo_log"> | number
    data_hora?: DateTimeWithAggregatesFilter<"Dispositivo_log"> | Date | string
    status_bateria?: IntWithAggregatesFilter<"Dispositivo_log"> | number
    descricao?: StringNullableWithAggregatesFilter<"Dispositivo_log"> | string | null
    banda_dados?: StringWithAggregatesFilter<"Dispositivo_log"> | string
    dispositivoId?: StringWithAggregatesFilter<"Dispositivo_log"> | string
  }

  export type Usuario_logWhereInput = {
    AND?: Usuario_logWhereInput | Usuario_logWhereInput[]
    OR?: Usuario_logWhereInput[]
    NOT?: Usuario_logWhereInput | Usuario_logWhereInput[]
    id?: IntFilter<"Usuario_log"> | number
    descricao?: StringFilter<"Usuario_log"> | string
    data_hora?: DateTimeFilter<"Usuario_log"> | Date | string
    usuarioId?: StringFilter<"Usuario_log"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type Usuario_logOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_hora?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: Usuario_logOrderByRelevanceInput
  }

  export type Usuario_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Usuario_logWhereInput | Usuario_logWhereInput[]
    OR?: Usuario_logWhereInput[]
    NOT?: Usuario_logWhereInput | Usuario_logWhereInput[]
    descricao?: StringFilter<"Usuario_log"> | string
    data_hora?: DateTimeFilter<"Usuario_log"> | Date | string
    usuarioId?: StringFilter<"Usuario_log"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type Usuario_logOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_hora?: SortOrder
    usuarioId?: SortOrder
    _count?: Usuario_logCountOrderByAggregateInput
    _avg?: Usuario_logAvgOrderByAggregateInput
    _max?: Usuario_logMaxOrderByAggregateInput
    _min?: Usuario_logMinOrderByAggregateInput
    _sum?: Usuario_logSumOrderByAggregateInput
  }

  export type Usuario_logScalarWhereWithAggregatesInput = {
    AND?: Usuario_logScalarWhereWithAggregatesInput | Usuario_logScalarWhereWithAggregatesInput[]
    OR?: Usuario_logScalarWhereWithAggregatesInput[]
    NOT?: Usuario_logScalarWhereWithAggregatesInput | Usuario_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario_log"> | number
    descricao?: StringWithAggregatesFilter<"Usuario_log"> | string
    data_hora?: DateTimeWithAggregatesFilter<"Usuario_log"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Usuario_log"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    dispositivos?: DispositivoCreateNestedManyWithoutUsuarioInput
    log?: Usuario_logCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutUsuarioInput
    log?: Usuario_logUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    dispositivos?: DispositivoUpdateManyWithoutUsuarioNestedInput
    log?: Usuario_logUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    dispositivos?: DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput
    log?: Usuario_logUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensCreateInput = {
    codigo: string
    createdAt?: Date | string
    email: string
    deleted?: boolean
  }

  export type TokensUncheckedCreateInput = {
    id?: number
    codigo: string
    createdAt?: Date | string
    email: string
    deleted?: boolean
  }

  export type TokensUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensCreateManyInput = {
    id?: number
    codigo: string
    createdAt?: Date | string
    email: string
    deleted?: boolean
  }

  export type TokensUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DispositivoCreateInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    usuario?: UsuarioCreateNestedOneWithoutDispositivosInput
    config?: Dispositivo_configCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    usuarioId?: string | null
    bateria?: number
    status?: $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    usuario?: UsuarioUpdateOneWithoutDispositivosNestedInput
    config?: Dispositivo_configUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoCreateManyInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    usuarioId?: string | null
    bateria?: number
    status?: $Enums.Dispositivo_status
  }

  export type DispositivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
  }

  export type DispositivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
  }

  export type Dispositivo_configCreateInput = {
    intervalo_envio: number
    monitoramentoLigado?: boolean
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: number
    dispositivo: DispositivoCreateNestedOneWithoutConfigInput
  }

  export type Dispositivo_configUncheckedCreateInput = {
    id?: number
    intervalo_envio: number
    monitoramentoLigado?: boolean
    dispositivoId: string
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: number
  }

  export type Dispositivo_configUpdateInput = {
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
    dispositivo?: DispositivoUpdateOneRequiredWithoutConfigNestedInput
  }

  export type Dispositivo_configUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    dispositivoId?: StringFieldUpdateOperationsInput | string
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
  }

  export type Dispositivo_configCreateManyInput = {
    id?: number
    intervalo_envio: number
    monitoramentoLigado?: boolean
    dispositivoId: string
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: number
  }

  export type Dispositivo_configUpdateManyMutationInput = {
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
  }

  export type Dispositivo_configUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    dispositivoId?: StringFieldUpdateOperationsInput | string
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
  }

  export type AlertaCreateInput = {
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    createdAt?: Date | string
    dispositivo: DispositivoCreateNestedOneWithoutAlertasInput
    alertaTipo: Alerta_tipoCreateNestedOneWithoutAlertaInput
  }

  export type AlertaUncheckedCreateInput = {
    id?: number
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    dispositivoId: string
    alertaId: number
    createdAt?: Date | string
  }

  export type AlertaUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: DispositivoUpdateOneRequiredWithoutAlertasNestedInput
    alertaTipo?: Alerta_tipoUpdateOneRequiredWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dispositivoId?: StringFieldUpdateOperationsInput | string
    alertaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaCreateManyInput = {
    id?: number
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    dispositivoId: string
    alertaId: number
    createdAt?: Date | string
  }

  export type AlertaUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dispositivoId?: StringFieldUpdateOperationsInput | string
    alertaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Alerta_tipoCreateInput = {
    nome: string
    regra: string
    valor?: string
    alerta?: AlertaCreateNestedManyWithoutAlertaTipoInput
  }

  export type Alerta_tipoUncheckedCreateInput = {
    id?: number
    nome: string
    regra: string
    valor?: string
    alerta?: AlertaUncheckedCreateNestedManyWithoutAlertaTipoInput
  }

  export type Alerta_tipoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regra?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    alerta?: AlertaUpdateManyWithoutAlertaTipoNestedInput
  }

  export type Alerta_tipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regra?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
    alerta?: AlertaUncheckedUpdateManyWithoutAlertaTipoNestedInput
  }

  export type Alerta_tipoCreateManyInput = {
    id?: number
    nome: string
    regra: string
    valor?: string
  }

  export type Alerta_tipoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regra?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type Alerta_tipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regra?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoCreateInput = {
    longitude: Decimal | DecimalJsLike | number | string
    latitude: Decimal | DecimalJsLike | number | string
    data_hora: Date | string
    dispositivo: DispositivoCreateNestedOneWithoutLocalizacoesInput
  }

  export type LocalizacaoUncheckedCreateInput = {
    id?: number
    longitude: Decimal | DecimalJsLike | number | string
    latitude: Decimal | DecimalJsLike | number | string
    data_hora: Date | string
    dispositivoId: string
  }

  export type LocalizacaoUpdateInput = {
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: DispositivoUpdateOneRequiredWithoutLocalizacoesNestedInput
  }

  export type LocalizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoCreateManyInput = {
    id?: number
    longitude: Decimal | DecimalJsLike | number | string
    latitude: Decimal | DecimalJsLike | number | string
    data_hora: Date | string
    dispositivoId: string
  }

  export type LocalizacaoUpdateManyMutationInput = {
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
  }

  export type Dispositivo_logCreateInput = {
    data_hora: Date | string
    status_bateria: number
    descricao?: string | null
    banda_dados: string
    dispositivo: DispositivoCreateNestedOneWithoutLogsInput
  }

  export type Dispositivo_logUncheckedCreateInput = {
    id?: number
    data_hora: Date | string
    status_bateria: number
    descricao?: string | null
    banda_dados: string
    dispositivoId: string
  }

  export type Dispositivo_logUpdateInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
    dispositivo?: DispositivoUpdateOneRequiredWithoutLogsNestedInput
  }

  export type Dispositivo_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
  }

  export type Dispositivo_logCreateManyInput = {
    id?: number
    data_hora: Date | string
    status_bateria: number
    descricao?: string | null
    banda_dados: string
    dispositivoId: string
  }

  export type Dispositivo_logUpdateManyMutationInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
  }

  export type Dispositivo_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
    dispositivoId?: StringFieldUpdateOperationsInput | string
  }

  export type Usuario_logCreateInput = {
    descricao: string
    data_hora: Date | string
    usuario: UsuarioCreateNestedOneWithoutLogInput
  }

  export type Usuario_logUncheckedCreateInput = {
    id?: number
    descricao: string
    data_hora: Date | string
    usuarioId: string
  }

  export type Usuario_logUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLogNestedInput
  }

  export type Usuario_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type Usuario_logCreateManyInput = {
    id?: number
    descricao: string
    data_hora: Date | string
    usuarioId: string
  }

  export type Usuario_logUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Usuario_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DispositivoListRelationFilter = {
    every?: DispositivoWhereInput
    some?: DispositivoWhereInput
    none?: DispositivoWhereInput
  }

  export type Usuario_logListRelationFilter = {
    every?: Usuario_logWhereInput
    some?: Usuario_logWhereInput
    none?: Usuario_logWhereInput
  }

  export type DispositivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Usuario_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TokensOrderByRelevanceInput = {
    fields: TokensOrderByRelevanceFieldEnum | TokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    deleted?: SortOrder
  }

  export type TokensAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    deleted?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    deleted?: SortOrder
  }

  export type TokensSumOrderByAggregateInput = {
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

  export type EnumDispositivo_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Dispositivo_status | EnumDispositivo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Dispositivo_status[]
    notIn?: $Enums.Dispositivo_status[]
    not?: NestedEnumDispositivo_statusFilter<$PrismaModel> | $Enums.Dispositivo_status
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type Dispositivo_configListRelationFilter = {
    every?: Dispositivo_configWhereInput
    some?: Dispositivo_configWhereInput
    none?: Dispositivo_configWhereInput
  }

  export type AlertaListRelationFilter = {
    every?: AlertaWhereInput
    some?: AlertaWhereInput
    none?: AlertaWhereInput
  }

  export type LocalizacaoListRelationFilter = {
    every?: LocalizacaoWhereInput
    some?: LocalizacaoWhereInput
    none?: LocalizacaoWhereInput
  }

  export type Dispositivo_logListRelationFilter = {
    every?: Dispositivo_logWhereInput
    some?: Dispositivo_logWhereInput
    none?: Dispositivo_logWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Dispositivo_configOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Dispositivo_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DispositivoOrderByRelevanceInput = {
    fields: DispositivoOrderByRelevanceFieldEnum | DispositivoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DispositivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    modelo?: SortOrder
    numero_de_serie?: SortOrder
    activade?: SortOrder
    data_fabricacao?: SortOrder
    usuarioId?: SortOrder
    bateria?: SortOrder
    status?: SortOrder
  }

  export type DispositivoAvgOrderByAggregateInput = {
    bateria?: SortOrder
  }

  export type DispositivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    modelo?: SortOrder
    numero_de_serie?: SortOrder
    activade?: SortOrder
    data_fabricacao?: SortOrder
    usuarioId?: SortOrder
    bateria?: SortOrder
    status?: SortOrder
  }

  export type DispositivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    modelo?: SortOrder
    numero_de_serie?: SortOrder
    activade?: SortOrder
    data_fabricacao?: SortOrder
    usuarioId?: SortOrder
    bateria?: SortOrder
    status?: SortOrder
  }

  export type DispositivoSumOrderByAggregateInput = {
    bateria?: SortOrder
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

  export type EnumDispositivo_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Dispositivo_status | EnumDispositivo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Dispositivo_status[]
    notIn?: $Enums.Dispositivo_status[]
    not?: NestedEnumDispositivo_statusWithAggregatesFilter<$PrismaModel> | $Enums.Dispositivo_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDispositivo_statusFilter<$PrismaModel>
    _max?: NestedEnumDispositivo_statusFilter<$PrismaModel>
  }

  export type DispositivoScalarRelationFilter = {
    is?: DispositivoWhereInput
    isNot?: DispositivoWhereInput
  }

  export type Dispositivo_configOrderByRelevanceInput = {
    fields: Dispositivo_configOrderByRelevanceFieldEnum | Dispositivo_configOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Dispositivo_configCountOrderByAggregateInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    monitoramentoLigado?: SortOrder
    dispositivoId?: SortOrder
    modo_eco?: SortOrder
    alerta_sem_sinal?: SortOrder
    alerta_bateria?: SortOrder
    alerta_bateria_valor?: SortOrder
  }

  export type Dispositivo_configAvgOrderByAggregateInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    alerta_bateria_valor?: SortOrder
  }

  export type Dispositivo_configMaxOrderByAggregateInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    monitoramentoLigado?: SortOrder
    dispositivoId?: SortOrder
    modo_eco?: SortOrder
    alerta_sem_sinal?: SortOrder
    alerta_bateria?: SortOrder
    alerta_bateria_valor?: SortOrder
  }

  export type Dispositivo_configMinOrderByAggregateInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    monitoramentoLigado?: SortOrder
    dispositivoId?: SortOrder
    modo_eco?: SortOrder
    alerta_sem_sinal?: SortOrder
    alerta_bateria?: SortOrder
    alerta_bateria_valor?: SortOrder
  }

  export type Dispositivo_configSumOrderByAggregateInput = {
    id?: SortOrder
    intervalo_envio?: SortOrder
    alerta_bateria_valor?: SortOrder
  }

  export type EnumAlerta_gravidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Alerta_gravidade | EnumAlerta_gravidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Alerta_gravidade[]
    notIn?: $Enums.Alerta_gravidade[]
    not?: NestedEnumAlerta_gravidadeFilter<$PrismaModel> | $Enums.Alerta_gravidade
  }

  export type Alerta_tipoScalarRelationFilter = {
    is?: Alerta_tipoWhereInput
    isNot?: Alerta_tipoWhereInput
  }

  export type AlertaOrderByRelevanceInput = {
    fields: AlertaOrderByRelevanceFieldEnum | AlertaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlertaCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    gravidede?: SortOrder
    ativo?: SortOrder
    dispositivoId?: SortOrder
    alertaId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertaAvgOrderByAggregateInput = {
    id?: SortOrder
    alertaId?: SortOrder
  }

  export type AlertaMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    gravidede?: SortOrder
    ativo?: SortOrder
    dispositivoId?: SortOrder
    alertaId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertaMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    gravidede?: SortOrder
    ativo?: SortOrder
    dispositivoId?: SortOrder
    alertaId?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertaSumOrderByAggregateInput = {
    id?: SortOrder
    alertaId?: SortOrder
  }

  export type EnumAlerta_gravidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Alerta_gravidade | EnumAlerta_gravidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Alerta_gravidade[]
    notIn?: $Enums.Alerta_gravidade[]
    not?: NestedEnumAlerta_gravidadeWithAggregatesFilter<$PrismaModel> | $Enums.Alerta_gravidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlerta_gravidadeFilter<$PrismaModel>
    _max?: NestedEnumAlerta_gravidadeFilter<$PrismaModel>
  }

  export type Alerta_tipoOrderByRelevanceInput = {
    fields: Alerta_tipoOrderByRelevanceFieldEnum | Alerta_tipoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Alerta_tipoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    regra?: SortOrder
    valor?: SortOrder
  }

  export type Alerta_tipoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Alerta_tipoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    regra?: SortOrder
    valor?: SortOrder
  }

  export type Alerta_tipoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    regra?: SortOrder
    valor?: SortOrder
  }

  export type Alerta_tipoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type LocalizacaoOrderByRelevanceInput = {
    fields: LocalizacaoOrderByRelevanceFieldEnum | LocalizacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocalizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    data_hora?: SortOrder
    dispositivoId?: SortOrder
  }

  export type LocalizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type LocalizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    data_hora?: SortOrder
    dispositivoId?: SortOrder
  }

  export type LocalizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    data_hora?: SortOrder
    dispositivoId?: SortOrder
  }

  export type LocalizacaoSumOrderByAggregateInput = {
    id?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Dispositivo_logOrderByRelevanceInput = {
    fields: Dispositivo_logOrderByRelevanceFieldEnum | Dispositivo_logOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Dispositivo_logCountOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    status_bateria?: SortOrder
    descricao?: SortOrder
    banda_dados?: SortOrder
    dispositivoId?: SortOrder
  }

  export type Dispositivo_logAvgOrderByAggregateInput = {
    id?: SortOrder
    status_bateria?: SortOrder
  }

  export type Dispositivo_logMaxOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    status_bateria?: SortOrder
    descricao?: SortOrder
    banda_dados?: SortOrder
    dispositivoId?: SortOrder
  }

  export type Dispositivo_logMinOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    status_bateria?: SortOrder
    descricao?: SortOrder
    banda_dados?: SortOrder
    dispositivoId?: SortOrder
  }

  export type Dispositivo_logSumOrderByAggregateInput = {
    id?: SortOrder
    status_bateria?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type Usuario_logOrderByRelevanceInput = {
    fields: Usuario_logOrderByRelevanceFieldEnum | Usuario_logOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Usuario_logCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_hora?: SortOrder
    usuarioId?: SortOrder
  }

  export type Usuario_logAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Usuario_logMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_hora?: SortOrder
    usuarioId?: SortOrder
  }

  export type Usuario_logMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    data_hora?: SortOrder
    usuarioId?: SortOrder
  }

  export type Usuario_logSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DispositivoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type Usuario_logCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Usuario_logCreateWithoutUsuarioInput, Usuario_logUncheckedCreateWithoutUsuarioInput> | Usuario_logCreateWithoutUsuarioInput[] | Usuario_logUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_logCreateOrConnectWithoutUsuarioInput | Usuario_logCreateOrConnectWithoutUsuarioInput[]
    createMany?: Usuario_logCreateManyUsuarioInputEnvelope
    connect?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
  }

  export type DispositivoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
  }

  export type Usuario_logUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Usuario_logCreateWithoutUsuarioInput, Usuario_logUncheckedCreateWithoutUsuarioInput> | Usuario_logCreateWithoutUsuarioInput[] | Usuario_logUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_logCreateOrConnectWithoutUsuarioInput | Usuario_logCreateOrConnectWithoutUsuarioInput[]
    createMany?: Usuario_logCreateManyUsuarioInputEnvelope
    connect?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DispositivoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutUsuarioInput | DispositivoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutUsuarioInput | DispositivoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutUsuarioInput | DispositivoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type Usuario_logUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Usuario_logCreateWithoutUsuarioInput, Usuario_logUncheckedCreateWithoutUsuarioInput> | Usuario_logCreateWithoutUsuarioInput[] | Usuario_logUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_logCreateOrConnectWithoutUsuarioInput | Usuario_logCreateOrConnectWithoutUsuarioInput[]
    upsert?: Usuario_logUpsertWithWhereUniqueWithoutUsuarioInput | Usuario_logUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: Usuario_logCreateManyUsuarioInputEnvelope
    set?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    disconnect?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    delete?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    connect?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    update?: Usuario_logUpdateWithWhereUniqueWithoutUsuarioInput | Usuario_logUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Usuario_logUpdateManyWithWhereWithoutUsuarioInput | Usuario_logUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Usuario_logScalarWhereInput | Usuario_logScalarWhereInput[]
  }

  export type DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput> | DispositivoCreateWithoutUsuarioInput[] | DispositivoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DispositivoCreateOrConnectWithoutUsuarioInput | DispositivoCreateOrConnectWithoutUsuarioInput[]
    upsert?: DispositivoUpsertWithWhereUniqueWithoutUsuarioInput | DispositivoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DispositivoCreateManyUsuarioInputEnvelope
    set?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    disconnect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    delete?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    connect?: DispositivoWhereUniqueInput | DispositivoWhereUniqueInput[]
    update?: DispositivoUpdateWithWhereUniqueWithoutUsuarioInput | DispositivoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DispositivoUpdateManyWithWhereWithoutUsuarioInput | DispositivoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
  }

  export type Usuario_logUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Usuario_logCreateWithoutUsuarioInput, Usuario_logUncheckedCreateWithoutUsuarioInput> | Usuario_logCreateWithoutUsuarioInput[] | Usuario_logUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Usuario_logCreateOrConnectWithoutUsuarioInput | Usuario_logCreateOrConnectWithoutUsuarioInput[]
    upsert?: Usuario_logUpsertWithWhereUniqueWithoutUsuarioInput | Usuario_logUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: Usuario_logCreateManyUsuarioInputEnvelope
    set?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    disconnect?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    delete?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    connect?: Usuario_logWhereUniqueInput | Usuario_logWhereUniqueInput[]
    update?: Usuario_logUpdateWithWhereUniqueWithoutUsuarioInput | Usuario_logUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Usuario_logUpdateManyWithWhereWithoutUsuarioInput | Usuario_logUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Usuario_logScalarWhereInput | Usuario_logScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutDispositivosInput = {
    create?: XOR<UsuarioCreateWithoutDispositivosInput, UsuarioUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDispositivosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type Dispositivo_configCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<Dispositivo_configCreateWithoutDispositivoInput, Dispositivo_configUncheckedCreateWithoutDispositivoInput> | Dispositivo_configCreateWithoutDispositivoInput[] | Dispositivo_configUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_configCreateOrConnectWithoutDispositivoInput | Dispositivo_configCreateOrConnectWithoutDispositivoInput[]
    createMany?: Dispositivo_configCreateManyDispositivoInputEnvelope
    connect?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
  }

  export type AlertaCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<AlertaCreateWithoutDispositivoInput, AlertaUncheckedCreateWithoutDispositivoInput> | AlertaCreateWithoutDispositivoInput[] | AlertaUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutDispositivoInput | AlertaCreateOrConnectWithoutDispositivoInput[]
    createMany?: AlertaCreateManyDispositivoInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type LocalizacaoCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<LocalizacaoCreateWithoutDispositivoInput, LocalizacaoUncheckedCreateWithoutDispositivoInput> | LocalizacaoCreateWithoutDispositivoInput[] | LocalizacaoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutDispositivoInput | LocalizacaoCreateOrConnectWithoutDispositivoInput[]
    createMany?: LocalizacaoCreateManyDispositivoInputEnvelope
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
  }

  export type Dispositivo_logCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<Dispositivo_logCreateWithoutDispositivoInput, Dispositivo_logUncheckedCreateWithoutDispositivoInput> | Dispositivo_logCreateWithoutDispositivoInput[] | Dispositivo_logUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_logCreateOrConnectWithoutDispositivoInput | Dispositivo_logCreateOrConnectWithoutDispositivoInput[]
    createMany?: Dispositivo_logCreateManyDispositivoInputEnvelope
    connect?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
  }

  export type Dispositivo_configUncheckedCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<Dispositivo_configCreateWithoutDispositivoInput, Dispositivo_configUncheckedCreateWithoutDispositivoInput> | Dispositivo_configCreateWithoutDispositivoInput[] | Dispositivo_configUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_configCreateOrConnectWithoutDispositivoInput | Dispositivo_configCreateOrConnectWithoutDispositivoInput[]
    createMany?: Dispositivo_configCreateManyDispositivoInputEnvelope
    connect?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
  }

  export type AlertaUncheckedCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<AlertaCreateWithoutDispositivoInput, AlertaUncheckedCreateWithoutDispositivoInput> | AlertaCreateWithoutDispositivoInput[] | AlertaUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutDispositivoInput | AlertaCreateOrConnectWithoutDispositivoInput[]
    createMany?: AlertaCreateManyDispositivoInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type LocalizacaoUncheckedCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<LocalizacaoCreateWithoutDispositivoInput, LocalizacaoUncheckedCreateWithoutDispositivoInput> | LocalizacaoCreateWithoutDispositivoInput[] | LocalizacaoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutDispositivoInput | LocalizacaoCreateOrConnectWithoutDispositivoInput[]
    createMany?: LocalizacaoCreateManyDispositivoInputEnvelope
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
  }

  export type Dispositivo_logUncheckedCreateNestedManyWithoutDispositivoInput = {
    create?: XOR<Dispositivo_logCreateWithoutDispositivoInput, Dispositivo_logUncheckedCreateWithoutDispositivoInput> | Dispositivo_logCreateWithoutDispositivoInput[] | Dispositivo_logUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_logCreateOrConnectWithoutDispositivoInput | Dispositivo_logCreateOrConnectWithoutDispositivoInput[]
    createMany?: Dispositivo_logCreateManyDispositivoInputEnvelope
    connect?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
  }

  export type EnumDispositivo_statusFieldUpdateOperationsInput = {
    set?: $Enums.Dispositivo_status
  }

  export type UsuarioUpdateOneWithoutDispositivosNestedInput = {
    create?: XOR<UsuarioCreateWithoutDispositivosInput, UsuarioUncheckedCreateWithoutDispositivosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDispositivosInput
    upsert?: UsuarioUpsertWithoutDispositivosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDispositivosInput, UsuarioUpdateWithoutDispositivosInput>, UsuarioUncheckedUpdateWithoutDispositivosInput>
  }

  export type Dispositivo_configUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<Dispositivo_configCreateWithoutDispositivoInput, Dispositivo_configUncheckedCreateWithoutDispositivoInput> | Dispositivo_configCreateWithoutDispositivoInput[] | Dispositivo_configUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_configCreateOrConnectWithoutDispositivoInput | Dispositivo_configCreateOrConnectWithoutDispositivoInput[]
    upsert?: Dispositivo_configUpsertWithWhereUniqueWithoutDispositivoInput | Dispositivo_configUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: Dispositivo_configCreateManyDispositivoInputEnvelope
    set?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    disconnect?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    delete?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    connect?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    update?: Dispositivo_configUpdateWithWhereUniqueWithoutDispositivoInput | Dispositivo_configUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: Dispositivo_configUpdateManyWithWhereWithoutDispositivoInput | Dispositivo_configUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: Dispositivo_configScalarWhereInput | Dispositivo_configScalarWhereInput[]
  }

  export type AlertaUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<AlertaCreateWithoutDispositivoInput, AlertaUncheckedCreateWithoutDispositivoInput> | AlertaCreateWithoutDispositivoInput[] | AlertaUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutDispositivoInput | AlertaCreateOrConnectWithoutDispositivoInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutDispositivoInput | AlertaUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: AlertaCreateManyDispositivoInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutDispositivoInput | AlertaUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutDispositivoInput | AlertaUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type LocalizacaoUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutDispositivoInput, LocalizacaoUncheckedCreateWithoutDispositivoInput> | LocalizacaoCreateWithoutDispositivoInput[] | LocalizacaoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutDispositivoInput | LocalizacaoCreateOrConnectWithoutDispositivoInput[]
    upsert?: LocalizacaoUpsertWithWhereUniqueWithoutDispositivoInput | LocalizacaoUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: LocalizacaoCreateManyDispositivoInputEnvelope
    set?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    disconnect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    delete?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    update?: LocalizacaoUpdateWithWhereUniqueWithoutDispositivoInput | LocalizacaoUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: LocalizacaoUpdateManyWithWhereWithoutDispositivoInput | LocalizacaoUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
  }

  export type Dispositivo_logUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<Dispositivo_logCreateWithoutDispositivoInput, Dispositivo_logUncheckedCreateWithoutDispositivoInput> | Dispositivo_logCreateWithoutDispositivoInput[] | Dispositivo_logUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_logCreateOrConnectWithoutDispositivoInput | Dispositivo_logCreateOrConnectWithoutDispositivoInput[]
    upsert?: Dispositivo_logUpsertWithWhereUniqueWithoutDispositivoInput | Dispositivo_logUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: Dispositivo_logCreateManyDispositivoInputEnvelope
    set?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    disconnect?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    delete?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    connect?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    update?: Dispositivo_logUpdateWithWhereUniqueWithoutDispositivoInput | Dispositivo_logUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: Dispositivo_logUpdateManyWithWhereWithoutDispositivoInput | Dispositivo_logUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: Dispositivo_logScalarWhereInput | Dispositivo_logScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Dispositivo_configUncheckedUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<Dispositivo_configCreateWithoutDispositivoInput, Dispositivo_configUncheckedCreateWithoutDispositivoInput> | Dispositivo_configCreateWithoutDispositivoInput[] | Dispositivo_configUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_configCreateOrConnectWithoutDispositivoInput | Dispositivo_configCreateOrConnectWithoutDispositivoInput[]
    upsert?: Dispositivo_configUpsertWithWhereUniqueWithoutDispositivoInput | Dispositivo_configUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: Dispositivo_configCreateManyDispositivoInputEnvelope
    set?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    disconnect?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    delete?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    connect?: Dispositivo_configWhereUniqueInput | Dispositivo_configWhereUniqueInput[]
    update?: Dispositivo_configUpdateWithWhereUniqueWithoutDispositivoInput | Dispositivo_configUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: Dispositivo_configUpdateManyWithWhereWithoutDispositivoInput | Dispositivo_configUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: Dispositivo_configScalarWhereInput | Dispositivo_configScalarWhereInput[]
  }

  export type AlertaUncheckedUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<AlertaCreateWithoutDispositivoInput, AlertaUncheckedCreateWithoutDispositivoInput> | AlertaCreateWithoutDispositivoInput[] | AlertaUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutDispositivoInput | AlertaCreateOrConnectWithoutDispositivoInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutDispositivoInput | AlertaUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: AlertaCreateManyDispositivoInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutDispositivoInput | AlertaUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutDispositivoInput | AlertaUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type LocalizacaoUncheckedUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutDispositivoInput, LocalizacaoUncheckedCreateWithoutDispositivoInput> | LocalizacaoCreateWithoutDispositivoInput[] | LocalizacaoUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutDispositivoInput | LocalizacaoCreateOrConnectWithoutDispositivoInput[]
    upsert?: LocalizacaoUpsertWithWhereUniqueWithoutDispositivoInput | LocalizacaoUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: LocalizacaoCreateManyDispositivoInputEnvelope
    set?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    disconnect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    delete?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    update?: LocalizacaoUpdateWithWhereUniqueWithoutDispositivoInput | LocalizacaoUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: LocalizacaoUpdateManyWithWhereWithoutDispositivoInput | LocalizacaoUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
  }

  export type Dispositivo_logUncheckedUpdateManyWithoutDispositivoNestedInput = {
    create?: XOR<Dispositivo_logCreateWithoutDispositivoInput, Dispositivo_logUncheckedCreateWithoutDispositivoInput> | Dispositivo_logCreateWithoutDispositivoInput[] | Dispositivo_logUncheckedCreateWithoutDispositivoInput[]
    connectOrCreate?: Dispositivo_logCreateOrConnectWithoutDispositivoInput | Dispositivo_logCreateOrConnectWithoutDispositivoInput[]
    upsert?: Dispositivo_logUpsertWithWhereUniqueWithoutDispositivoInput | Dispositivo_logUpsertWithWhereUniqueWithoutDispositivoInput[]
    createMany?: Dispositivo_logCreateManyDispositivoInputEnvelope
    set?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    disconnect?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    delete?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    connect?: Dispositivo_logWhereUniqueInput | Dispositivo_logWhereUniqueInput[]
    update?: Dispositivo_logUpdateWithWhereUniqueWithoutDispositivoInput | Dispositivo_logUpdateWithWhereUniqueWithoutDispositivoInput[]
    updateMany?: Dispositivo_logUpdateManyWithWhereWithoutDispositivoInput | Dispositivo_logUpdateManyWithWhereWithoutDispositivoInput[]
    deleteMany?: Dispositivo_logScalarWhereInput | Dispositivo_logScalarWhereInput[]
  }

  export type DispositivoCreateNestedOneWithoutConfigInput = {
    create?: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutConfigInput
    connect?: DispositivoWhereUniqueInput
  }

  export type DispositivoUpdateOneRequiredWithoutConfigNestedInput = {
    create?: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutConfigInput
    upsert?: DispositivoUpsertWithoutConfigInput
    connect?: DispositivoWhereUniqueInput
    update?: XOR<XOR<DispositivoUpdateToOneWithWhereWithoutConfigInput, DispositivoUpdateWithoutConfigInput>, DispositivoUncheckedUpdateWithoutConfigInput>
  }

  export type DispositivoCreateNestedOneWithoutAlertasInput = {
    create?: XOR<DispositivoCreateWithoutAlertasInput, DispositivoUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutAlertasInput
    connect?: DispositivoWhereUniqueInput
  }

  export type Alerta_tipoCreateNestedOneWithoutAlertaInput = {
    create?: XOR<Alerta_tipoCreateWithoutAlertaInput, Alerta_tipoUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: Alerta_tipoCreateOrConnectWithoutAlertaInput
    connect?: Alerta_tipoWhereUniqueInput
  }

  export type EnumAlerta_gravidadeFieldUpdateOperationsInput = {
    set?: $Enums.Alerta_gravidade
  }

  export type DispositivoUpdateOneRequiredWithoutAlertasNestedInput = {
    create?: XOR<DispositivoCreateWithoutAlertasInput, DispositivoUncheckedCreateWithoutAlertasInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutAlertasInput
    upsert?: DispositivoUpsertWithoutAlertasInput
    connect?: DispositivoWhereUniqueInput
    update?: XOR<XOR<DispositivoUpdateToOneWithWhereWithoutAlertasInput, DispositivoUpdateWithoutAlertasInput>, DispositivoUncheckedUpdateWithoutAlertasInput>
  }

  export type Alerta_tipoUpdateOneRequiredWithoutAlertaNestedInput = {
    create?: XOR<Alerta_tipoCreateWithoutAlertaInput, Alerta_tipoUncheckedCreateWithoutAlertaInput>
    connectOrCreate?: Alerta_tipoCreateOrConnectWithoutAlertaInput
    upsert?: Alerta_tipoUpsertWithoutAlertaInput
    connect?: Alerta_tipoWhereUniqueInput
    update?: XOR<XOR<Alerta_tipoUpdateToOneWithWhereWithoutAlertaInput, Alerta_tipoUpdateWithoutAlertaInput>, Alerta_tipoUncheckedUpdateWithoutAlertaInput>
  }

  export type AlertaCreateNestedManyWithoutAlertaTipoInput = {
    create?: XOR<AlertaCreateWithoutAlertaTipoInput, AlertaUncheckedCreateWithoutAlertaTipoInput> | AlertaCreateWithoutAlertaTipoInput[] | AlertaUncheckedCreateWithoutAlertaTipoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutAlertaTipoInput | AlertaCreateOrConnectWithoutAlertaTipoInput[]
    createMany?: AlertaCreateManyAlertaTipoInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type AlertaUncheckedCreateNestedManyWithoutAlertaTipoInput = {
    create?: XOR<AlertaCreateWithoutAlertaTipoInput, AlertaUncheckedCreateWithoutAlertaTipoInput> | AlertaCreateWithoutAlertaTipoInput[] | AlertaUncheckedCreateWithoutAlertaTipoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutAlertaTipoInput | AlertaCreateOrConnectWithoutAlertaTipoInput[]
    createMany?: AlertaCreateManyAlertaTipoInputEnvelope
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
  }

  export type AlertaUpdateManyWithoutAlertaTipoNestedInput = {
    create?: XOR<AlertaCreateWithoutAlertaTipoInput, AlertaUncheckedCreateWithoutAlertaTipoInput> | AlertaCreateWithoutAlertaTipoInput[] | AlertaUncheckedCreateWithoutAlertaTipoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutAlertaTipoInput | AlertaCreateOrConnectWithoutAlertaTipoInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutAlertaTipoInput | AlertaUpsertWithWhereUniqueWithoutAlertaTipoInput[]
    createMany?: AlertaCreateManyAlertaTipoInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutAlertaTipoInput | AlertaUpdateWithWhereUniqueWithoutAlertaTipoInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutAlertaTipoInput | AlertaUpdateManyWithWhereWithoutAlertaTipoInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type AlertaUncheckedUpdateManyWithoutAlertaTipoNestedInput = {
    create?: XOR<AlertaCreateWithoutAlertaTipoInput, AlertaUncheckedCreateWithoutAlertaTipoInput> | AlertaCreateWithoutAlertaTipoInput[] | AlertaUncheckedCreateWithoutAlertaTipoInput[]
    connectOrCreate?: AlertaCreateOrConnectWithoutAlertaTipoInput | AlertaCreateOrConnectWithoutAlertaTipoInput[]
    upsert?: AlertaUpsertWithWhereUniqueWithoutAlertaTipoInput | AlertaUpsertWithWhereUniqueWithoutAlertaTipoInput[]
    createMany?: AlertaCreateManyAlertaTipoInputEnvelope
    set?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    disconnect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    delete?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    connect?: AlertaWhereUniqueInput | AlertaWhereUniqueInput[]
    update?: AlertaUpdateWithWhereUniqueWithoutAlertaTipoInput | AlertaUpdateWithWhereUniqueWithoutAlertaTipoInput[]
    updateMany?: AlertaUpdateManyWithWhereWithoutAlertaTipoInput | AlertaUpdateManyWithWhereWithoutAlertaTipoInput[]
    deleteMany?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
  }

  export type DispositivoCreateNestedOneWithoutLocalizacoesInput = {
    create?: XOR<DispositivoCreateWithoutLocalizacoesInput, DispositivoUncheckedCreateWithoutLocalizacoesInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutLocalizacoesInput
    connect?: DispositivoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DispositivoUpdateOneRequiredWithoutLocalizacoesNestedInput = {
    create?: XOR<DispositivoCreateWithoutLocalizacoesInput, DispositivoUncheckedCreateWithoutLocalizacoesInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutLocalizacoesInput
    upsert?: DispositivoUpsertWithoutLocalizacoesInput
    connect?: DispositivoWhereUniqueInput
    update?: XOR<XOR<DispositivoUpdateToOneWithWhereWithoutLocalizacoesInput, DispositivoUpdateWithoutLocalizacoesInput>, DispositivoUncheckedUpdateWithoutLocalizacoesInput>
  }

  export type DispositivoCreateNestedOneWithoutLogsInput = {
    create?: XOR<DispositivoCreateWithoutLogsInput, DispositivoUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutLogsInput
    connect?: DispositivoWhereUniqueInput
  }

  export type DispositivoUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<DispositivoCreateWithoutLogsInput, DispositivoUncheckedCreateWithoutLogsInput>
    connectOrCreate?: DispositivoCreateOrConnectWithoutLogsInput
    upsert?: DispositivoUpsertWithoutLogsInput
    connect?: DispositivoWhereUniqueInput
    update?: XOR<XOR<DispositivoUpdateToOneWithWhereWithoutLogsInput, DispositivoUpdateWithoutLogsInput>, DispositivoUncheckedUpdateWithoutLogsInput>
  }

  export type UsuarioCreateNestedOneWithoutLogInput = {
    create?: XOR<UsuarioCreateWithoutLogInput, UsuarioUncheckedCreateWithoutLogInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLogNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogInput, UsuarioUncheckedCreateWithoutLogInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogInput
    upsert?: UsuarioUpsertWithoutLogInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogInput, UsuarioUpdateWithoutLogInput>, UsuarioUncheckedUpdateWithoutLogInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumDispositivo_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Dispositivo_status | EnumDispositivo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Dispositivo_status[]
    notIn?: $Enums.Dispositivo_status[]
    not?: NestedEnumDispositivo_statusFilter<$PrismaModel> | $Enums.Dispositivo_status
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

  export type NestedEnumDispositivo_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Dispositivo_status | EnumDispositivo_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Dispositivo_status[]
    notIn?: $Enums.Dispositivo_status[]
    not?: NestedEnumDispositivo_statusWithAggregatesFilter<$PrismaModel> | $Enums.Dispositivo_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDispositivo_statusFilter<$PrismaModel>
    _max?: NestedEnumDispositivo_statusFilter<$PrismaModel>
  }

  export type NestedEnumAlerta_gravidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Alerta_gravidade | EnumAlerta_gravidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Alerta_gravidade[]
    notIn?: $Enums.Alerta_gravidade[]
    not?: NestedEnumAlerta_gravidadeFilter<$PrismaModel> | $Enums.Alerta_gravidade
  }

  export type NestedEnumAlerta_gravidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Alerta_gravidade | EnumAlerta_gravidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Alerta_gravidade[]
    notIn?: $Enums.Alerta_gravidade[]
    not?: NestedEnumAlerta_gravidadeWithAggregatesFilter<$PrismaModel> | $Enums.Alerta_gravidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlerta_gravidadeFilter<$PrismaModel>
    _max?: NestedEnumAlerta_gravidadeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DispositivoCreateWithoutUsuarioInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    config?: Dispositivo_configCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutUsuarioInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput>
  }

  export type DispositivoCreateManyUsuarioInputEnvelope = {
    data: DispositivoCreateManyUsuarioInput | DispositivoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type Usuario_logCreateWithoutUsuarioInput = {
    descricao: string
    data_hora: Date | string
  }

  export type Usuario_logUncheckedCreateWithoutUsuarioInput = {
    id?: number
    descricao: string
    data_hora: Date | string
  }

  export type Usuario_logCreateOrConnectWithoutUsuarioInput = {
    where: Usuario_logWhereUniqueInput
    create: XOR<Usuario_logCreateWithoutUsuarioInput, Usuario_logUncheckedCreateWithoutUsuarioInput>
  }

  export type Usuario_logCreateManyUsuarioInputEnvelope = {
    data: Usuario_logCreateManyUsuarioInput | Usuario_logCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type DispositivoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DispositivoWhereUniqueInput
    update: XOR<DispositivoUpdateWithoutUsuarioInput, DispositivoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DispositivoCreateWithoutUsuarioInput, DispositivoUncheckedCreateWithoutUsuarioInput>
  }

  export type DispositivoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DispositivoWhereUniqueInput
    data: XOR<DispositivoUpdateWithoutUsuarioInput, DispositivoUncheckedUpdateWithoutUsuarioInput>
  }

  export type DispositivoUpdateManyWithWhereWithoutUsuarioInput = {
    where: DispositivoScalarWhereInput
    data: XOR<DispositivoUpdateManyMutationInput, DispositivoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DispositivoScalarWhereInput = {
    AND?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    OR?: DispositivoScalarWhereInput[]
    NOT?: DispositivoScalarWhereInput | DispositivoScalarWhereInput[]
    id?: StringFilter<"Dispositivo"> | string
    nome?: StringFilter<"Dispositivo"> | string
    modelo?: StringFilter<"Dispositivo"> | string
    numero_de_serie?: StringFilter<"Dispositivo"> | string
    activade?: BoolFilter<"Dispositivo"> | boolean
    data_fabricacao?: DateTimeFilter<"Dispositivo"> | Date | string
    usuarioId?: StringNullableFilter<"Dispositivo"> | string | null
    bateria?: IntFilter<"Dispositivo"> | number
    status?: EnumDispositivo_statusFilter<"Dispositivo"> | $Enums.Dispositivo_status
  }

  export type Usuario_logUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Usuario_logWhereUniqueInput
    update: XOR<Usuario_logUpdateWithoutUsuarioInput, Usuario_logUncheckedUpdateWithoutUsuarioInput>
    create: XOR<Usuario_logCreateWithoutUsuarioInput, Usuario_logUncheckedCreateWithoutUsuarioInput>
  }

  export type Usuario_logUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Usuario_logWhereUniqueInput
    data: XOR<Usuario_logUpdateWithoutUsuarioInput, Usuario_logUncheckedUpdateWithoutUsuarioInput>
  }

  export type Usuario_logUpdateManyWithWhereWithoutUsuarioInput = {
    where: Usuario_logScalarWhereInput
    data: XOR<Usuario_logUpdateManyMutationInput, Usuario_logUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type Usuario_logScalarWhereInput = {
    AND?: Usuario_logScalarWhereInput | Usuario_logScalarWhereInput[]
    OR?: Usuario_logScalarWhereInput[]
    NOT?: Usuario_logScalarWhereInput | Usuario_logScalarWhereInput[]
    id?: IntFilter<"Usuario_log"> | number
    descricao?: StringFilter<"Usuario_log"> | string
    data_hora?: DateTimeFilter<"Usuario_log"> | Date | string
    usuarioId?: StringFilter<"Usuario_log"> | string
  }

  export type UsuarioCreateWithoutDispositivosInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    log?: Usuario_logCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDispositivosInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    log?: Usuario_logUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDispositivosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDispositivosInput, UsuarioUncheckedCreateWithoutDispositivosInput>
  }

  export type Dispositivo_configCreateWithoutDispositivoInput = {
    intervalo_envio: number
    monitoramentoLigado?: boolean
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: number
  }

  export type Dispositivo_configUncheckedCreateWithoutDispositivoInput = {
    id?: number
    intervalo_envio: number
    monitoramentoLigado?: boolean
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: number
  }

  export type Dispositivo_configCreateOrConnectWithoutDispositivoInput = {
    where: Dispositivo_configWhereUniqueInput
    create: XOR<Dispositivo_configCreateWithoutDispositivoInput, Dispositivo_configUncheckedCreateWithoutDispositivoInput>
  }

  export type Dispositivo_configCreateManyDispositivoInputEnvelope = {
    data: Dispositivo_configCreateManyDispositivoInput | Dispositivo_configCreateManyDispositivoInput[]
    skipDuplicates?: boolean
  }

  export type AlertaCreateWithoutDispositivoInput = {
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    createdAt?: Date | string
    alertaTipo: Alerta_tipoCreateNestedOneWithoutAlertaInput
  }

  export type AlertaUncheckedCreateWithoutDispositivoInput = {
    id?: number
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    alertaId: number
    createdAt?: Date | string
  }

  export type AlertaCreateOrConnectWithoutDispositivoInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutDispositivoInput, AlertaUncheckedCreateWithoutDispositivoInput>
  }

  export type AlertaCreateManyDispositivoInputEnvelope = {
    data: AlertaCreateManyDispositivoInput | AlertaCreateManyDispositivoInput[]
    skipDuplicates?: boolean
  }

  export type LocalizacaoCreateWithoutDispositivoInput = {
    longitude: Decimal | DecimalJsLike | number | string
    latitude: Decimal | DecimalJsLike | number | string
    data_hora: Date | string
  }

  export type LocalizacaoUncheckedCreateWithoutDispositivoInput = {
    id?: number
    longitude: Decimal | DecimalJsLike | number | string
    latitude: Decimal | DecimalJsLike | number | string
    data_hora: Date | string
  }

  export type LocalizacaoCreateOrConnectWithoutDispositivoInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutDispositivoInput, LocalizacaoUncheckedCreateWithoutDispositivoInput>
  }

  export type LocalizacaoCreateManyDispositivoInputEnvelope = {
    data: LocalizacaoCreateManyDispositivoInput | LocalizacaoCreateManyDispositivoInput[]
    skipDuplicates?: boolean
  }

  export type Dispositivo_logCreateWithoutDispositivoInput = {
    data_hora: Date | string
    status_bateria: number
    descricao?: string | null
    banda_dados: string
  }

  export type Dispositivo_logUncheckedCreateWithoutDispositivoInput = {
    id?: number
    data_hora: Date | string
    status_bateria: number
    descricao?: string | null
    banda_dados: string
  }

  export type Dispositivo_logCreateOrConnectWithoutDispositivoInput = {
    where: Dispositivo_logWhereUniqueInput
    create: XOR<Dispositivo_logCreateWithoutDispositivoInput, Dispositivo_logUncheckedCreateWithoutDispositivoInput>
  }

  export type Dispositivo_logCreateManyDispositivoInputEnvelope = {
    data: Dispositivo_logCreateManyDispositivoInput | Dispositivo_logCreateManyDispositivoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDispositivosInput = {
    update: XOR<UsuarioUpdateWithoutDispositivosInput, UsuarioUncheckedUpdateWithoutDispositivosInput>
    create: XOR<UsuarioCreateWithoutDispositivosInput, UsuarioUncheckedCreateWithoutDispositivosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDispositivosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDispositivosInput, UsuarioUncheckedUpdateWithoutDispositivosInput>
  }

  export type UsuarioUpdateWithoutDispositivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    log?: Usuario_logUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDispositivosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    log?: Usuario_logUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type Dispositivo_configUpsertWithWhereUniqueWithoutDispositivoInput = {
    where: Dispositivo_configWhereUniqueInput
    update: XOR<Dispositivo_configUpdateWithoutDispositivoInput, Dispositivo_configUncheckedUpdateWithoutDispositivoInput>
    create: XOR<Dispositivo_configCreateWithoutDispositivoInput, Dispositivo_configUncheckedCreateWithoutDispositivoInput>
  }

  export type Dispositivo_configUpdateWithWhereUniqueWithoutDispositivoInput = {
    where: Dispositivo_configWhereUniqueInput
    data: XOR<Dispositivo_configUpdateWithoutDispositivoInput, Dispositivo_configUncheckedUpdateWithoutDispositivoInput>
  }

  export type Dispositivo_configUpdateManyWithWhereWithoutDispositivoInput = {
    where: Dispositivo_configScalarWhereInput
    data: XOR<Dispositivo_configUpdateManyMutationInput, Dispositivo_configUncheckedUpdateManyWithoutDispositivoInput>
  }

  export type Dispositivo_configScalarWhereInput = {
    AND?: Dispositivo_configScalarWhereInput | Dispositivo_configScalarWhereInput[]
    OR?: Dispositivo_configScalarWhereInput[]
    NOT?: Dispositivo_configScalarWhereInput | Dispositivo_configScalarWhereInput[]
    id?: IntFilter<"Dispositivo_config"> | number
    intervalo_envio?: IntFilter<"Dispositivo_config"> | number
    monitoramentoLigado?: BoolFilter<"Dispositivo_config"> | boolean
    dispositivoId?: StringFilter<"Dispositivo_config"> | string
    modo_eco?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_sem_sinal?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_bateria?: BoolFilter<"Dispositivo_config"> | boolean
    alerta_bateria_valor?: IntFilter<"Dispositivo_config"> | number
  }

  export type AlertaUpsertWithWhereUniqueWithoutDispositivoInput = {
    where: AlertaWhereUniqueInput
    update: XOR<AlertaUpdateWithoutDispositivoInput, AlertaUncheckedUpdateWithoutDispositivoInput>
    create: XOR<AlertaCreateWithoutDispositivoInput, AlertaUncheckedCreateWithoutDispositivoInput>
  }

  export type AlertaUpdateWithWhereUniqueWithoutDispositivoInput = {
    where: AlertaWhereUniqueInput
    data: XOR<AlertaUpdateWithoutDispositivoInput, AlertaUncheckedUpdateWithoutDispositivoInput>
  }

  export type AlertaUpdateManyWithWhereWithoutDispositivoInput = {
    where: AlertaScalarWhereInput
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyWithoutDispositivoInput>
  }

  export type AlertaScalarWhereInput = {
    AND?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    OR?: AlertaScalarWhereInput[]
    NOT?: AlertaScalarWhereInput | AlertaScalarWhereInput[]
    id?: IntFilter<"Alerta"> | number
    descricao?: StringFilter<"Alerta"> | string
    gravidede?: EnumAlerta_gravidadeFilter<"Alerta"> | $Enums.Alerta_gravidade
    ativo?: BoolFilter<"Alerta"> | boolean
    dispositivoId?: StringFilter<"Alerta"> | string
    alertaId?: IntFilter<"Alerta"> | number
    createdAt?: DateTimeFilter<"Alerta"> | Date | string
  }

  export type LocalizacaoUpsertWithWhereUniqueWithoutDispositivoInput = {
    where: LocalizacaoWhereUniqueInput
    update: XOR<LocalizacaoUpdateWithoutDispositivoInput, LocalizacaoUncheckedUpdateWithoutDispositivoInput>
    create: XOR<LocalizacaoCreateWithoutDispositivoInput, LocalizacaoUncheckedCreateWithoutDispositivoInput>
  }

  export type LocalizacaoUpdateWithWhereUniqueWithoutDispositivoInput = {
    where: LocalizacaoWhereUniqueInput
    data: XOR<LocalizacaoUpdateWithoutDispositivoInput, LocalizacaoUncheckedUpdateWithoutDispositivoInput>
  }

  export type LocalizacaoUpdateManyWithWhereWithoutDispositivoInput = {
    where: LocalizacaoScalarWhereInput
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyWithoutDispositivoInput>
  }

  export type LocalizacaoScalarWhereInput = {
    AND?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
    OR?: LocalizacaoScalarWhereInput[]
    NOT?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    longitude?: DecimalFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFilter<"Localizacao"> | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFilter<"Localizacao"> | Date | string
    dispositivoId?: StringFilter<"Localizacao"> | string
  }

  export type Dispositivo_logUpsertWithWhereUniqueWithoutDispositivoInput = {
    where: Dispositivo_logWhereUniqueInput
    update: XOR<Dispositivo_logUpdateWithoutDispositivoInput, Dispositivo_logUncheckedUpdateWithoutDispositivoInput>
    create: XOR<Dispositivo_logCreateWithoutDispositivoInput, Dispositivo_logUncheckedCreateWithoutDispositivoInput>
  }

  export type Dispositivo_logUpdateWithWhereUniqueWithoutDispositivoInput = {
    where: Dispositivo_logWhereUniqueInput
    data: XOR<Dispositivo_logUpdateWithoutDispositivoInput, Dispositivo_logUncheckedUpdateWithoutDispositivoInput>
  }

  export type Dispositivo_logUpdateManyWithWhereWithoutDispositivoInput = {
    where: Dispositivo_logScalarWhereInput
    data: XOR<Dispositivo_logUpdateManyMutationInput, Dispositivo_logUncheckedUpdateManyWithoutDispositivoInput>
  }

  export type Dispositivo_logScalarWhereInput = {
    AND?: Dispositivo_logScalarWhereInput | Dispositivo_logScalarWhereInput[]
    OR?: Dispositivo_logScalarWhereInput[]
    NOT?: Dispositivo_logScalarWhereInput | Dispositivo_logScalarWhereInput[]
    id?: IntFilter<"Dispositivo_log"> | number
    data_hora?: DateTimeFilter<"Dispositivo_log"> | Date | string
    status_bateria?: IntFilter<"Dispositivo_log"> | number
    descricao?: StringNullableFilter<"Dispositivo_log"> | string | null
    banda_dados?: StringFilter<"Dispositivo_log"> | string
    dispositivoId?: StringFilter<"Dispositivo_log"> | string
  }

  export type DispositivoCreateWithoutConfigInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    usuario?: UsuarioCreateNestedOneWithoutDispositivosInput
    alertas?: AlertaCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutConfigInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    usuarioId?: string | null
    bateria?: number
    status?: $Enums.Dispositivo_status
    alertas?: AlertaUncheckedCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutConfigInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
  }

  export type DispositivoUpsertWithoutConfigInput = {
    update: XOR<DispositivoUpdateWithoutConfigInput, DispositivoUncheckedUpdateWithoutConfigInput>
    create: XOR<DispositivoCreateWithoutConfigInput, DispositivoUncheckedCreateWithoutConfigInput>
    where?: DispositivoWhereInput
  }

  export type DispositivoUpdateToOneWithWhereWithoutConfigInput = {
    where?: DispositivoWhereInput
    data: XOR<DispositivoUpdateWithoutConfigInput, DispositivoUncheckedUpdateWithoutConfigInput>
  }

  export type DispositivoUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    usuario?: UsuarioUpdateOneWithoutDispositivosNestedInput
    alertas?: AlertaUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    alertas?: AlertaUncheckedUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoCreateWithoutAlertasInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    usuario?: UsuarioCreateNestedOneWithoutDispositivosInput
    config?: Dispositivo_configCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutAlertasInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    usuarioId?: string | null
    bateria?: number
    status?: $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutAlertasInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutAlertasInput, DispositivoUncheckedCreateWithoutAlertasInput>
  }

  export type Alerta_tipoCreateWithoutAlertaInput = {
    nome: string
    regra: string
    valor?: string
  }

  export type Alerta_tipoUncheckedCreateWithoutAlertaInput = {
    id?: number
    nome: string
    regra: string
    valor?: string
  }

  export type Alerta_tipoCreateOrConnectWithoutAlertaInput = {
    where: Alerta_tipoWhereUniqueInput
    create: XOR<Alerta_tipoCreateWithoutAlertaInput, Alerta_tipoUncheckedCreateWithoutAlertaInput>
  }

  export type DispositivoUpsertWithoutAlertasInput = {
    update: XOR<DispositivoUpdateWithoutAlertasInput, DispositivoUncheckedUpdateWithoutAlertasInput>
    create: XOR<DispositivoCreateWithoutAlertasInput, DispositivoUncheckedCreateWithoutAlertasInput>
    where?: DispositivoWhereInput
  }

  export type DispositivoUpdateToOneWithWhereWithoutAlertasInput = {
    where?: DispositivoWhereInput
    data: XOR<DispositivoUpdateWithoutAlertasInput, DispositivoUncheckedUpdateWithoutAlertasInput>
  }

  export type DispositivoUpdateWithoutAlertasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    usuario?: UsuarioUpdateOneWithoutDispositivosNestedInput
    config?: Dispositivo_configUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutAlertasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type Alerta_tipoUpsertWithoutAlertaInput = {
    update: XOR<Alerta_tipoUpdateWithoutAlertaInput, Alerta_tipoUncheckedUpdateWithoutAlertaInput>
    create: XOR<Alerta_tipoCreateWithoutAlertaInput, Alerta_tipoUncheckedCreateWithoutAlertaInput>
    where?: Alerta_tipoWhereInput
  }

  export type Alerta_tipoUpdateToOneWithWhereWithoutAlertaInput = {
    where?: Alerta_tipoWhereInput
    data: XOR<Alerta_tipoUpdateWithoutAlertaInput, Alerta_tipoUncheckedUpdateWithoutAlertaInput>
  }

  export type Alerta_tipoUpdateWithoutAlertaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    regra?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type Alerta_tipoUncheckedUpdateWithoutAlertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    regra?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type AlertaCreateWithoutAlertaTipoInput = {
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    createdAt?: Date | string
    dispositivo: DispositivoCreateNestedOneWithoutAlertasInput
  }

  export type AlertaUncheckedCreateWithoutAlertaTipoInput = {
    id?: number
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    dispositivoId: string
    createdAt?: Date | string
  }

  export type AlertaCreateOrConnectWithoutAlertaTipoInput = {
    where: AlertaWhereUniqueInput
    create: XOR<AlertaCreateWithoutAlertaTipoInput, AlertaUncheckedCreateWithoutAlertaTipoInput>
  }

  export type AlertaCreateManyAlertaTipoInputEnvelope = {
    data: AlertaCreateManyAlertaTipoInput | AlertaCreateManyAlertaTipoInput[]
    skipDuplicates?: boolean
  }

  export type AlertaUpsertWithWhereUniqueWithoutAlertaTipoInput = {
    where: AlertaWhereUniqueInput
    update: XOR<AlertaUpdateWithoutAlertaTipoInput, AlertaUncheckedUpdateWithoutAlertaTipoInput>
    create: XOR<AlertaCreateWithoutAlertaTipoInput, AlertaUncheckedCreateWithoutAlertaTipoInput>
  }

  export type AlertaUpdateWithWhereUniqueWithoutAlertaTipoInput = {
    where: AlertaWhereUniqueInput
    data: XOR<AlertaUpdateWithoutAlertaTipoInput, AlertaUncheckedUpdateWithoutAlertaTipoInput>
  }

  export type AlertaUpdateManyWithWhereWithoutAlertaTipoInput = {
    where: AlertaScalarWhereInput
    data: XOR<AlertaUpdateManyMutationInput, AlertaUncheckedUpdateManyWithoutAlertaTipoInput>
  }

  export type DispositivoCreateWithoutLocalizacoesInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    usuario?: UsuarioCreateNestedOneWithoutDispositivosInput
    config?: Dispositivo_configCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutLocalizacoesInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    usuarioId?: string | null
    bateria?: number
    status?: $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutDispositivoInput
    logs?: Dispositivo_logUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutLocalizacoesInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutLocalizacoesInput, DispositivoUncheckedCreateWithoutLocalizacoesInput>
  }

  export type DispositivoUpsertWithoutLocalizacoesInput = {
    update: XOR<DispositivoUpdateWithoutLocalizacoesInput, DispositivoUncheckedUpdateWithoutLocalizacoesInput>
    create: XOR<DispositivoCreateWithoutLocalizacoesInput, DispositivoUncheckedCreateWithoutLocalizacoesInput>
    where?: DispositivoWhereInput
  }

  export type DispositivoUpdateToOneWithWhereWithoutLocalizacoesInput = {
    where?: DispositivoWhereInput
    data: XOR<DispositivoUpdateWithoutLocalizacoesInput, DispositivoUncheckedUpdateWithoutLocalizacoesInput>
  }

  export type DispositivoUpdateWithoutLocalizacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    usuario?: UsuarioUpdateOneWithoutDispositivosNestedInput
    config?: Dispositivo_configUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutLocalizacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoCreateWithoutLogsInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
    usuario?: UsuarioCreateNestedOneWithoutDispositivosInput
    config?: Dispositivo_configCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoUncheckedCreateWithoutLogsInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    usuarioId?: string | null
    bateria?: number
    status?: $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedCreateNestedManyWithoutDispositivoInput
    alertas?: AlertaUncheckedCreateNestedManyWithoutDispositivoInput
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutDispositivoInput
  }

  export type DispositivoCreateOrConnectWithoutLogsInput = {
    where: DispositivoWhereUniqueInput
    create: XOR<DispositivoCreateWithoutLogsInput, DispositivoUncheckedCreateWithoutLogsInput>
  }

  export type DispositivoUpsertWithoutLogsInput = {
    update: XOR<DispositivoUpdateWithoutLogsInput, DispositivoUncheckedUpdateWithoutLogsInput>
    create: XOR<DispositivoCreateWithoutLogsInput, DispositivoUncheckedCreateWithoutLogsInput>
    where?: DispositivoWhereInput
  }

  export type DispositivoUpdateToOneWithWhereWithoutLogsInput = {
    where?: DispositivoWhereInput
    data: XOR<DispositivoUpdateWithoutLogsInput, DispositivoUncheckedUpdateWithoutLogsInput>
  }

  export type DispositivoUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    usuario?: UsuarioUpdateOneWithoutDispositivosNestedInput
    config?: Dispositivo_configUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: NullableStringFieldUpdateOperationsInput | string | null
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type UsuarioCreateWithoutLogInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    dispositivos?: DispositivoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLogInput = {
    id?: string
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted?: boolean
    dispositivos?: DispositivoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLogInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogInput, UsuarioUncheckedCreateWithoutLogInput>
  }

  export type UsuarioUpsertWithoutLogInput = {
    update: XOR<UsuarioUpdateWithoutLogInput, UsuarioUncheckedUpdateWithoutLogInput>
    create: XOR<UsuarioCreateWithoutLogInput, UsuarioUncheckedCreateWithoutLogInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogInput, UsuarioUncheckedUpdateWithoutLogInput>
  }

  export type UsuarioUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    dispositivos?: DispositivoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    dispositivos?: DispositivoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DispositivoCreateManyUsuarioInput = {
    id?: string
    nome?: string
    modelo: string
    numero_de_serie: string
    activade?: boolean
    data_fabricacao: Date | string
    bateria?: number
    status?: $Enums.Dispositivo_status
  }

  export type Usuario_logCreateManyUsuarioInput = {
    id?: number
    descricao: string
    data_hora: Date | string
  }

  export type DispositivoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    config?: Dispositivo_configUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
    config?: Dispositivo_configUncheckedUpdateManyWithoutDispositivoNestedInput
    alertas?: AlertaUncheckedUpdateManyWithoutDispositivoNestedInput
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutDispositivoNestedInput
    logs?: Dispositivo_logUncheckedUpdateManyWithoutDispositivoNestedInput
  }

  export type DispositivoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_de_serie?: StringFieldUpdateOperationsInput | string
    activade?: BoolFieldUpdateOperationsInput | boolean
    data_fabricacao?: DateTimeFieldUpdateOperationsInput | Date | string
    bateria?: IntFieldUpdateOperationsInput | number
    status?: EnumDispositivo_statusFieldUpdateOperationsInput | $Enums.Dispositivo_status
  }

  export type Usuario_logUpdateWithoutUsuarioInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Usuario_logUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Usuario_logUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Dispositivo_configCreateManyDispositivoInput = {
    id?: number
    intervalo_envio: number
    monitoramentoLigado?: boolean
    modo_eco?: boolean
    alerta_sem_sinal?: boolean
    alerta_bateria?: boolean
    alerta_bateria_valor?: number
  }

  export type AlertaCreateManyDispositivoInput = {
    id?: number
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    alertaId: number
    createdAt?: Date | string
  }

  export type LocalizacaoCreateManyDispositivoInput = {
    id?: number
    longitude: Decimal | DecimalJsLike | number | string
    latitude: Decimal | DecimalJsLike | number | string
    data_hora: Date | string
  }

  export type Dispositivo_logCreateManyDispositivoInput = {
    id?: number
    data_hora: Date | string
    status_bateria: number
    descricao?: string | null
    banda_dados: string
  }

  export type Dispositivo_configUpdateWithoutDispositivoInput = {
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
  }

  export type Dispositivo_configUncheckedUpdateWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
  }

  export type Dispositivo_configUncheckedUpdateManyWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    intervalo_envio?: IntFieldUpdateOperationsInput | number
    monitoramentoLigado?: BoolFieldUpdateOperationsInput | boolean
    modo_eco?: BoolFieldUpdateOperationsInput | boolean
    alerta_sem_sinal?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria?: BoolFieldUpdateOperationsInput | boolean
    alerta_bateria_valor?: IntFieldUpdateOperationsInput | number
  }

  export type AlertaUpdateWithoutDispositivoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertaTipo?: Alerta_tipoUpdateOneRequiredWithoutAlertaNestedInput
  }

  export type AlertaUncheckedUpdateWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    alertaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaUncheckedUpdateManyWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    alertaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUpdateWithoutDispositivoInput = {
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateManyWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Dispositivo_logUpdateWithoutDispositivoInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
  }

  export type Dispositivo_logUncheckedUpdateWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
  }

  export type Dispositivo_logUncheckedUpdateManyWithoutDispositivoInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    status_bateria?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    banda_dados?: StringFieldUpdateOperationsInput | string
  }

  export type AlertaCreateManyAlertaTipoInput = {
    id?: number
    descricao: string
    gravidede?: $Enums.Alerta_gravidade
    ativo: boolean
    dispositivoId: string
    createdAt?: Date | string
  }

  export type AlertaUpdateWithoutAlertaTipoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispositivo?: DispositivoUpdateOneRequiredWithoutAlertasNestedInput
  }

  export type AlertaUncheckedUpdateWithoutAlertaTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dispositivoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaUncheckedUpdateManyWithoutAlertaTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    gravidede?: EnumAlerta_gravidadeFieldUpdateOperationsInput | $Enums.Alerta_gravidade
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dispositivoId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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