// CustomErrorは、組み込みのErrorクラスを拡張する抽象クラスです。
// 他のカスタムエラークラスの基底クラスとして設計されています。
export abstract class CustomError extends Error {
  // 各サブクラスはstatusCodeプロパティを定義する必要があります。
  abstract statusCode: number;

  // コンストラクタはmessageパラメータを受け取り、それを基底のErrorクラスに渡します。
  constructor(message: string) {
    super(message);

    // これは組み込みクラスを拡張しているため必要な行です。
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  // 各サブクラスはserializeErrorsメソッドを実装する必要があります。
  // このメソッドは、エラーメッセージとオプションのフィールドを含むオブジェクトの配列を返します。
  abstract serializeErrors(): { message: string; field?: string }[];
}

// abstractは、TypeScriptで抽象クラスや抽象メソッドを定義するために使用されるキーワードです。

// 抽象クラス (abstract class)
// 定義: 抽象クラスは、直接インスタンス化できないクラスです。つまり、抽象クラス自体からオブジェクトを作成することはできません。
// 目的: 他のクラスが継承するための基底クラスとして使用されます。
// 特徴: 抽象クラスは、抽象メソッドを含むことができます。
// 抽象メソッド (abstract method)
// 定義: 抽象メソッドは、抽象クラス内で定義されるメソッドで、具体的な実装を持ちません。
// 目的: サブクラスがこのメソッドを実装することを強制します。
// 特徴: 抽象メソッドは、抽象クラス内でのみ定義できます。
