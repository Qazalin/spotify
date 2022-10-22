import { ThreeDots } from "react-loader-spinner";

export const LoadingSpinner: React.FC<{
  width: string | number;
  height: string | number;
}> = ({ width, height }) => {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};
