import { ThreeDots } from "react-loader-spinner";

export const LoadingSpinner: React.FC<{
  width: string | number;
  height: string | number;
  color?: string;
}> = ({ width, height, color }) => {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius="9"
      color={color ?? "white"}
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};
