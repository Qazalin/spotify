import { Range, getTrackBackground } from "react-range";

export const PlayerSlider: React.FC<{
  onChange: (val: number) => void;
  value: number;
}> = ({ onChange, value }) => {
  const MIN = 0;
  const MAX = 167;
  const STEP = 5;
  return (
    <div className="w-full h-full flex space-x-2 items-center">
      <span className="text-[13px] text-zinc-500">0:00</span>
      <Range
        min={MIN}
        max={MAX}
        step={STEP}
        values={[value]}
        onChange={(vals) => onChange(vals[0] ? vals[0] : 0)}
        renderTrack={({ props, children, isDragged }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              className="h-1 w-full rounded-full self-center"
              style={{
                background: getTrackBackground({
                  values: [value],
                  colors: isDragged
                    ? ["#10b981", "#52525b"]
                    : ["#fff", "#52525b"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`h-[10px] w-[10px] rounded-full ${
              isDragged ? "bg-zinc-50" : "bg-transparent"
            } outline-none`}
          ></div>
        )}
      />
      <span className="text-[13px] text-zinc-500">2:47</span>
    </div>
  );
};
