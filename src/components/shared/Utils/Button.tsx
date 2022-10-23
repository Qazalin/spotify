import { PropsWithChildren } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export type ButtonProps = PropsWithChildren<{
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}>;

export const Button: React.FC<ButtonProps> = ({
  className,
  isLoading,
  disabled,
  onClick,
  children,
}) => {
  if (isLoading)
    return (
      <button
        className={`min-w-[70px] flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-75 ${className}`}
        disabled={true}
      >
        <LoadingSpinner width={20} height={5} />
      </button>
    );
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};
