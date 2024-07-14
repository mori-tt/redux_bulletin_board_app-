# Redux Bulletin Board App

このプロジェクトは、React と Redux Toolkit を使用して構築された掲示板アプリケーションです。ユーザーは投稿を追加および削除することができます。Vite を使用して高速な開発環境を提供し、TypeScript を使用して型安全性を確保しています。

## Redux Toolkit

### ストアの設定

Redux ストアは`src/main.tsx`で設定されています。Redux Toolkit の`configureStore`関数を使用して、`posts`リデューサーを持つストアを作成します。

### スライス

スライスは、アプリケーションの単一機能のための Redux リデューサーロジックとアクションのコレクションです。`postSlice`は`src/features/Post.tsx`で定義されています。

### アクションとリデューサー

`postSlice`には、`addPost`と`deletePost`の 2 つのリデューサーが含まれています。これらのリデューサーは、新しい投稿の追加と既存の投稿の削除を処理します。

- `addPost`: 新しい投稿を状態に追加します。
- `deletePost`: 投稿 ID に基づいて状態から投稿を削除します。

## 利用可能なスクリプト

プロジェクトディレクトリ内で実行できるスクリプトは次の通りです:

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: 本番環境用にアプリをビルドします。
- `npm run lint`: ESLint を実行してリントエラーをチェックします。
- `npm run preview`: 本番ビルドをローカルでプレビューします。
