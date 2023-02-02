export interface AppReducer {
  theme: AppTheme;
}

export enum AppTheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}
