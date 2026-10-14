/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_ROSTER?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
