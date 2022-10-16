import {
  PropsWithChildren,
  RefObject,
  Dispatch,
  SetStateAction,
  useEffect,
  MouseEvent,
} from "react";

export const MenuDropdown: React.FC<
  PropsWithChildren<{
    wrapperRef: RefObject<HTMLDivElement>;
    options: string[];
    onOptionClick: (option: string) => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }>
> = ({ wrapperRef, options, onOptionClick, children, isOpen, setIsOpen }) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsOpen]);

  return (
    <div
      className={`bg-zinc-800 shadow-lg shadow-black/75 absolute top-9 -left-14 p-3 px-5 rounded-md space-y-2 ${
        isOpen ? "opacity-1" : "opacity-0"
      } transition-opacity duration-300 z-50`}
    >
      {options.map((opt, i) => (
        <p
          key={`usr-menue-${i}`}
          className="capitalize cursor-pointer"
          onClick={() => onOptionClick(opt)}
        >
          {opt}
        </p>
      ))}
      {children}
    </div>
  );
};
