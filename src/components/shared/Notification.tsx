import { useFirstRender } from "@spotify/utils/hooks/useFirstRender";
import { useEffect, useState } from "react";

export const Notification: React.FC<{
  msg: string;
  isError?: boolean;
  show: boolean;
}> = ({ msg, show, isError }) => {
  const [showNotification, setShowNotification] = useState(false);
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isFirstRender && show) {
      console.log("not init render");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    }
  }, [show, isFirstRender]);

  return (
    <div
      className={`text-zinc-200 inline-block ${
        isError ? "bg-red-500" : "bg-blue-500"
      } p-2 rounded-md shadow-lg shadow-black absolute bottom-7 left-0 right-0 mx-auto max-w-fit text-sm ${
        showNotification ? "opacity-1" : "opacity-0"
      }  transition-opacity duration-500 ease-in-out px-10 z-50`}
    >
      {msg}
    </div>
  );
};
