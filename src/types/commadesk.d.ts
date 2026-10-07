export type CommaDeskLoginStatus =
  | 'idle'
  | 'loading'
  | 'requires_email'
  | 'requires_2fa'
  | 'requires_org'
  | 'error'
  | 'success';

export interface CommaDeskLoginState {
  organizationId?: string;
  apiBase?: string;
  status: CommaDeskLoginStatus;
  error?: string | null;
  message?: string | null;
  mfaToken?: string;
}

export interface CommaDeskLoginPayload {
  username?: string;
  email?: string;
  password?: string;
  emailSpecific?: string;
  rememberMe?: boolean;
}

export interface CommaDesk2faPayload {
  code: string;
  mfaToken?: string;
}

export interface CommaDeskLoginContext {
  organizationId: string;
  apiBase: string;
  status: string;
}

export interface CommaDeskLoginBridge {
  init(opts?: { organizationId?: string; apiBase?: string }): CommaDeskLoginBridge;
  getContext(): CommaDeskLoginContext;
  onState(callback: (state: CommaDeskLoginState) => void): () => void;
  login(payload: CommaDeskLoginPayload): Promise<any>;
  verify2fa(payload: CommaDesk2faPayload): Promise<any>;
  redirectAfterLogin(): void;
}

declare global {
  interface Window {
    CommaDeskLogin?: CommaDeskLoginBridge;
  }
}
