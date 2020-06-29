export interface AppOption {
  appName: string;
  loadUrl: string;
  activeWhen: Function;
  customProps: Object;
  status?: string;
}
