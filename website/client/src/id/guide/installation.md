---
title: Instalasi
description: Instal Repomix dengan npx, npm, Yarn, Bun, Homebrew, Docker, ekstensi VS Code, atau ekstensi browser, lalu verifikasi setup CLI.
---

# Instalasi


Repomix dapat diinstal dengan berbagai cara, tergantung pada kebutuhan dan preferensi Anda.

## Menggunakan npx (Tanpa Instalasi)

Cara tercepat untuk mencoba Repomix adalah dengan menggunakan `npx` tanpa instalasi:

```bash
npx repomix@latest
```

Ini akan mengunduh dan menjalankan Repomix secara langsung di direktori proyek Anda.

## Instalasi Global

Untuk penggunaan berulang, Anda dapat menginstal Repomix secara global:

::: code-group
```bash [npm]
npm install -g repomix
```
```bash [yarn]
yarn global add repomix
```
```bash [pnpm]
pnpm add -g repomix
```
```bash [bun]
bun add -g repomix
```
```bash [Homebrew]
brew install repomix
```
:::

## Menggunakan Docker

Anda juga dapat menjalankan Repomix menggunakan Docker:

```bash
docker run -v .:/app -it --rm ghcr.io/yamadashy/repomix
```

## Verifikasi Instalasi

Setelah instalasi, Anda dapat memverifikasi bahwa Repomix telah diinstal dengan benar dengan menjalankan:

```bash
repomix --version
```

## Sumber Daya Terkait

- [Penggunaan Dasar](/id/guide/usage) - Pelajari cara menggunakan Repomix
- [Konfigurasi](/id/guide/configuration) - Kustomisasi Repomix untuk kebutuhan Anda
- [Opsi Baris Perintah](/id/guide/command-line-options) - Referensi CLI lengkap
