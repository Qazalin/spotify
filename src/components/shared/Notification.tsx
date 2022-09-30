import { useFirstRender } from "@spotify/utils/hooks/useFirstRender";
import { useEffect, useState } from "react";

export const Notification: React.FC<{
  msg: string;
  state?: string | boolean;
}> = ({ msg, state }) => {
  const [showNotification, setShowNotification] = useState(false);
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isFirstRender) {
      console.log("not init render");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    }
  }, [state, isFirstRender]);

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
