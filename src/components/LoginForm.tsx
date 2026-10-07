'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  CitaresLogo,
  CitaresIcon,
  UserIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  ShieldCheckIcon,
  AlertCircleIcon,
} from './icons/Icons';
import { Button } from './ui/Button';
import { InputAffix } from './ui/InputAffix';
import { setupMockBridgeIfNeeded } from '@/utils/mockBridge';
import { CommaDeskLoginState } from '@/types/commadesk';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [emailSpecific, setEmailSpecific] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [currentPanel, setCurrentPanel] = useState<'login' | 'otp' | 'email'>('login');

  const otpInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Tự động kích hoạt mock bridge khi chạy local không có platform CommaDesk
    if (typeof window !== 'undefined' && !window.CommaDeskLogin) {
      setupMockBridgeIfNeeded();
    }

    const waitBridge = (cb: () => void) => {
      if (window.CommaDeskLogin) return cb();
      const interval = setInterval(() => {
        if (window.CommaDeskLogin) {
          clearInterval(interval);
          cb();
        }
      }, 50);
    };

    waitBridge(() => {
      const unsubscribe = window.CommaDeskLogin?.onState((state: CommaDeskLoginState) => {
        if (!state) return;

        if (state.status === 'loading') {
          setIsLoading(true);
          setErrorMsg('');
          return;
        }

        setIsLoading(false);

        if (state.status === 'error') {
          setErrorMsg(state.error || 'Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
          return;
        }

        if (state.status === 'requires_2fa') {
          setErrorMsg('');
          setCurrentPanel('otp');
          setOtp('');
          setTimeout(() => otpInputRef.current?.focus(), 100);
          return;
        }

        if (state.status === 'requires_email') {
          setErrorMsg('');
          setCurrentPanel('email');
          setTimeout(() => emailInputRef.current?.focus(), 100);
          return;
        }

        if (state.status === 'requires_org') {
          setErrorMsg(state.error || 'Không xác định được tổ chức phòng lab liên kết. Vui lòng liên hệ ban quản trị.');
          setCurrentPanel('login');
          return;
        }

        if (state.status === 'success') {
          setErrorMsg('');
        }
      });

      return () => {
        if (unsubscribe) unsubscribe();
      };
    });
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg('Vui lòng nhập mã định danh thủ kho hoặc email đăng nhập.');
      return;
    }
    if (!password) {
      setErrorMsg('Vui lòng nhập mật khẩu bảo mật.');
      return;
    }

    setErrorMsg('');
    try {
      await window.CommaDeskLogin?.login({
        username: username.trim(),
        password: password,
        rememberMe: true,
      });
    } catch {}
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanOtp = otp.trim();
    if (!cleanOtp || cleanOtp.length < 6) {
      setErrorMsg('Vui lòng nhập đủ 6 chữ số mã xác thực OTP.');
      return;
    }

    setErrorMsg('');
    try {
      await window.CommaDeskLogin?.verify2fa({
        code: cleanOtp,
      });
    } catch {}
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = emailSpecific.trim();
    if (!cleanEmail) {
      setErrorMsg('Vui lòng nhập địa chỉ email của bạn.');
      return;
    }

    setErrorMsg('');
    try {
      await window.CommaDeskLogin?.login({
        username: username.trim(),
        password: password,
        emailSpecific: cleanEmail,
        rememberMe: true,
      });
    } catch {}
  };

  return (
    <div className="bg-white flex items-center justify-center p-6 sm:p-10 xl:p-14 relative overflow-y-auto min-h-screen lg:min-h-0">
      <div className="w-full max-w-[420px] animate-fade-slide-up">
        {/* Logo CITARES công nghệ cao căn giữa */}
        <CitaresLogo className="mb-6 w-full" />

        {/* Tiêu đề Cổng Đăng Nhập */}
        <div className="mb-7">
          <h2 className="text-[26px] font-extrabold text-[#0d1b3e] tracking-tight mb-1.5">Cổng Đăng Nhập</h2>
          <p className="text-sm text-[#475569]">Hệ thống quản lý kho thiết bị &amp; phòng lab thực hành CITARES</p>
        </div>

        {/* Khung Thông Báo Lỗi */}
        <div
          id="error"
          className="text-[#d3122a] bg-[#fff2f2] border border-[#ffd0d4] rounded-xl p-3 text-sm leading-snug flex items-start gap-2.5 mb-5"
          hidden={!errorMsg}
          role="alert"
        >
          <AlertCircleIcon size={18} className="shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>

        {/* 1. Form Đăng Nhập Chính */}
        <form
          id="login-form"
          onSubmit={handleLoginSubmit}
          hidden={currentPanel !== 'login'}
          noValidate
          className="flex flex-col gap-5"
        >
          <InputAffix
            id="username"
            name="username"
            type="text"
            label="Tài khoản / Mã nhân viên kho"
            requiredMark
            prefixIcon={<UserIcon size={18} />}
            placeholder="Nhập mã nhân viên hoặc email nội bộ"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <InputAffix
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Mật khẩu"
            requiredMark
            prefixIcon={<LockIcon size={18} />}
            placeholder="Nhập mật khẩu truy cập"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            suffixAction={
              <button
                type="button"
                id="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                aria-pressed={showPassword}
                className="bg-transparent border-0 cursor-pointer text-[#64748b] hover:text-[#0d1b3e] p-1 shrink-0 transition-colors"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            }
          />

          <Button
            type="submit"
            id="btn-login"
            size="lg"
            isLoading={isLoading}
            loadingText="Đang xác thực hệ thống..."
            leftIcon={<ShieldCheckIcon size={16} />}
            className="w-full mt-1"
          >
            <span id="btn-login-label">Đăng Nhập Quản Trị</span>
          </Button>
        </form>

        {/* 2. requires_email Form */}
        <div
          id="email-box"
          className="animate-fade-slide-up"
          hidden={currentPanel !== 'email'}
        >
          <p className="text-[17px] font-bold text-[#0d1b3e] mb-1.5">Xác nhận email liên kết</p>
          <p className="text-sm text-[#475569] leading-relaxed mb-5">
            Tài khoản quản trị này được gán cho nhiều phòng lab hoặc trung tâm. Vui lòng nhập email làm việc chính thức để tiếp tục.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
            <InputAffix
              id="emailSpecific"
              name="emailSpecific"
              type="email"
              ref={emailInputRef}
              label="Email làm việc"
              requiredMark
              prefixIcon={<MailIcon size={18} />}
              placeholder="admin@citares.edu.vn"
              value={emailSpecific}
              onChange={(e) => setEmailSpecific(e.target.value)}
              autoComplete="email"
            />
            <Button
              type="submit"
              id="btn-email"
              size="lg"
              isLoading={isLoading}
              className="w-full mt-1"
            >
              Tiếp tục
            </Button>
            <Button
              type="button"
              id="btn-email-back"
              variant="secondary"
              onClick={() => {
                setErrorMsg('');
                setCurrentPanel('login');
              }}
              className="w-full"
            >
              Quay lại đăng nhập
            </Button>
          </form>
        </div>

        {/* 3. requires_2fa Form */}
        <div
          id="otp-box"
          className="animate-fade-slide-up"
          hidden={currentPanel !== 'otp'}
        >
          <p className="text-[17px] font-bold text-[#0d1b3e] mb-1.5">Xác thực 2 bước (2FA)</p>
          <p className="text-sm text-[#475569] leading-relaxed mb-5">
            Vui lòng nhập mã bảo mật OTP 6 chữ số từ ứng dụng xác thực của nhân viên kho (Google Authenticator / MS Authenticator).
          </p>
          <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
            <InputAffix
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              ref={otpInputRef}
              label="Mã OTP 6 số"
              requiredMark
              prefixIcon={<ShieldCheckIcon size={18} />}
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              autoComplete="one-time-code"
              className="tracking-widest font-semibold"
            />
            <Button
              type="submit"
              id="btn-otp"
              size="lg"
              isLoading={isLoading}
              loadingText="Đang kiểm tra OTP..."
              className="w-full mt-1"
            >
              Xác nhận mã bảo mật
            </Button>
            <Button
              type="button"
              id="btn-otp-back"
              variant="secondary"
              onClick={() => {
                setErrorMsg('');
                setCurrentPanel('login');
              }}
              className="w-full"
            >
              Quay lại đăng nhập
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
