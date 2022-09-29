import { useEffect, useLayoutEffect, useState } from "react";

export const Notification: React.FC<{
  msg: string;
  state: string | boolean;
}> = ({ msg, state }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("mounted: ", mounted);
    if (mounted) {
      console.log("init render");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    }
  }, [state, mounted]);

  return (
    <div
      className={`text-zinc-200 inline-block bg-blue-500 p-2 rounded-md shadow-lg shadow-black absolute bottom-7 left-0 right-0 mx-auto max-w-fit text-sm ${
        showNotification ? "opacity-1" : "opacity-0"
      }  transition-opacity duration-300 ease-in-out px-10 z-50`}
    >
      {msg}
    </div>
  );
};
