/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_KEY?: string;
  readonly PUBLIC_GA4_MEASUREMENT_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
