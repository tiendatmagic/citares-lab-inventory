import { CommaDeskLoginBridge, CommaDeskLoginState, CommaDeskLoginPayload, CommaDesk2faPayload } from '@/types/commadesk';

export function setupMockBridgeIfNeeded(): void {
  if (typeof window === 'undefined') return;
  if (window.CommaDeskLogin) return;

  const listeners: Array<(state: CommaDeskLoginState) => void> = [];
  let currentState: CommaDeskLoginState = {
    organizationId: 'citares-training-facility',
    apiBase: '',
    status: 'idle',
    mfaToken: '',
    error: null,
  };

  const emit = (patch: Partial<CommaDeskLoginState>) => {
    currentState = { ...currentState, ...patch };
    listeners.forEach((fn) => {
      try {
        fn(currentState);
      } catch (err) {
        console.error('[MockBridge] Listener error:', err);
      }
    });
  };

  const mockBridge: CommaDeskLoginBridge = {
    init(opts = {}) {
      currentState.organizationId = opts.organizationId || 'citares-training-facility';
      currentState.apiBase = opts.apiBase || '';
      emit({ status: 'idle', error: null });
      return this;
    },

    getContext() {
      return {
        organizationId: currentState.organizationId || 'citares-training-facility',
        apiBase: currentState.apiBase || '',
        status: currentState.status,
      };
    },

    onState(callback) {
      listeners.push(callback);
      // Gửi trạng thái hiện tại ngay lập tức cho subscriber mới
      setTimeout(() => callback(currentState), 0);
      return () => {
        const index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
    },

    async login(payload: CommaDeskLoginPayload) {
      const username = (payload.username || payload.email || '').trim();
      const password = payload.password || '';

      emit({ status: 'loading', error: null });

      await new Promise((r) => setTimeout(r, 650));

      if (!username) {
        emit({ status: 'error', error: 'Vui lòng nhập mã học viên, email giảng viên hoặc tài khoản đào tạo.' });
        throw new Error('Vui lòng nhập tên đăng nhập');
      }

      if (password === 'wrong' || password === 'error') {
        emit({ status: 'error', error: 'Mật khẩu không chính xác. Vui lòng kiểm tra lại.' });
        throw new Error('Mật khẩu không đúng');
      }

      // Giả lập luồng requires_email
      if ((username.includes('email') || username === 'multi') && !payload.emailSpecific) {
        emit({
          status: 'requires_email',
          message: 'Tài khoản đào tạo liên kết nhiều lớp học. Vui lòng xác nhận email đào tạo chính thức.',
        });
        return { status: 'requires_email' };
      }

      // Giả lập luồng requires_2fa
      if (username.includes('2fa') || username === 'admin' || username === 'citares') {
        const token = 'mock-mfa-token-' + Date.now();
        currentState.mfaToken = token;
        emit({ status: 'requires_2fa', mfaToken: token });
        return { status: 'requires_2fa', mfa_token: token };
      }

      // Đăng nhập thành công mặc định
      emit({ status: 'success', error: null });
      mockBridge.redirectAfterLogin();
      return { success: true };
    },

    async verify2fa(payload: CommaDesk2faPayload) {
      const code = (payload.code || '').trim();
      emit({ status: 'loading', error: null });

      await new Promise((r) => setTimeout(r, 600));

      if (code === '000000') {
        emit({ status: 'error', error: 'Mã OTP không chính xác hoặc đã hết hiệu lực.' });
        throw new Error('OTP sai');
      }

      emit({ status: 'success', error: null });
      mockBridge.redirectAfterLogin();
      return { success: true };
    },

    redirectAfterLogin() {
      if (typeof window !== 'undefined') {
        window.location.replace('/dashboard');
      }
    },
  };

  window.CommaDeskLogin = mockBridge;
  console.info('[MockBridge] Initialized CITARES Training Platform Mock Bridge for development preview.');
}

