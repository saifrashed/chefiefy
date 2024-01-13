import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie, setCookie } from "../lib/cookie";

export default function Cookie() {
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    if (getCookie("tailwindgrabber-consent")) {
      setIsAccepted(true);
    }
  }, []);

  const acceptCookie = () => {
    setCookie("tailwindgrabber-consent", true);
    setIsAccepted(true);
  };

  return (
    <>
      {!isAccepted && (
        <div
          className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full bg-gray-50 dark:bg-slate-900 p-5 z-50">
          <div className="md:flex items-center  ">
            <div className="md:flex-1 px-3 mb-5 md:mb-0">
              <p className="text-center md:text-left leading-tight md:pr-12">
                We use cookies to enhance your experience on our website. By clicking "Accept," you consent to the use of all cookies.
              </p>
            </div>
            <div className="px-3 text-center">
              <Link href={"/privacy-policy"}>
                <button
                  className="w-full md:w-auto py-2 px-8 my-1 bg-gray-800 hover:bg-gray-900 text-white rounded font-bold text-sm mr-3">
                  Privacy Policy
                </button>
              </Link>
              <button
                className="w-full md:w-auto py-2 px-8 my-1 bg-primary hover:bg-secondary text-white rounded font-bold text-sm"
                onClick={acceptCookie}>
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
