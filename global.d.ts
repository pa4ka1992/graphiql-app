declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema;
}

interface ImportMetaEnv {
  readonly VITE_GRAPH_API: string;
  readonly VITE_GRAPH_FIREBASE_API_KEY: string;
  readonly VITE_GRAPH_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_GRAPH_FIREBASE_PROJECT_ID: string;
  readonly VITE_GRAPH_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_GRAPH_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_GRAPH_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export * from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    barsColor: Palette['primary'];
  }

  interface PaletteOptions {
    barsColor?: PaletteOptions['primary'];
  }
}
