import { useState } from "react";
import { Button, ButtonProps } from "./Button";
import { Notification } from "@spotify/components/shared/Notification";

export type ButtonWithOptimisticUpdateProps = ButtonProps & {
  isError: boolean;
  isSuccessful: boolean;
  action: string;
  firstChild: React.ReactNode; // the child that is rendered when we're in the initial state or when the update wasn't successful
  nextChild: React.ReactNode; // the child that is rendered when we're in the optimistic update and successful state
  mutate: () => void;
};

export const ButtonWithOptimisticUpdate: React.FC<
  ButtonWithOptimisticUpdateProps
> = ({
  firstChild,
  nextChild,
  action,
  className,
  disabled,
  mutate,
  isError,
  isSuccessful,
}) => {
  const [visibleChild, setVisibleChild] = useState<"first" | "next">("first");
  const errorMessages = `Failed to ${action}`;
  const successMessages = `Successfully ${action}`;

  const toggleVisibleChild = () => {
    setVisibleChild((prev) => (prev === "first" ? "next" : "first"));
  };
  function handleOptimisticUpdate() {
    console.log("optimistically updating");
    toggleVisibleChild();
    console.log("Mutating the database");
    mutate();
  }
  return (
    <>
      <Button
        className={className}
        disabled={disabled}
        onClick={handleOptimisticUpdate}
      >
        {visibleChild === "first" ? firstChild : nextChild}
      </Button>
      <Notification msg={errorMessages} isError={true} show={isError} />
      <Notification msg={successMessages} isError={false} show={isSuccessful} />
    </>
  );
};
