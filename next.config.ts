import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// 1. Detección automática del nombre del repositorio
let repo = 'LuisLeon1705'; // Fallback por defecto
if (isGitHubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.split('/')[1];
}

// 2. Determinar si es una User Page (ej. nombre.github.io) o Project Page
// Las User Pages se sirven en la raíz (/), las Project Pages en /nombre-repo/
const isUserPage = repo.toLowerCase().endsWith('.github.io');
const basePath = isProd && !isUserPage ? `/${repo}` : '';
const assetPrefix = isProd && !isUserPage ? `/${repo}/` : '';

const nextConfig: NextConfig = {
  // Habilita la exportación estática (necesario para GitHub Pages)
  output: "export",

  // Configuración de rutas
  basePath: basePath,
  assetPrefix: assetPrefix,

  // GitHub Pages no soporta la optimización de imágenes nativa de Next.js
  images: {
    unoptimized: true,
  },

  // Ayuda a prevenir errores 404 al asegurar que las URLs terminen en /
  trailingSlash: true,

  // Expone el basePath para que puedas usarlo en el código si fuera necesario
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
