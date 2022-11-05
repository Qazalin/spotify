import { durationFormatter } from "@spotify/utils";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

export const PlayerSlider: React.FC<{
  onChange: (val: number) => void;
  onFinalChange: () => void;
  value: number;
  duration: number;
}> = ({ onChange, value, onFinalChange, duration }) => {
  return (
    <div className="w-full h-full flex space-x-2 items-center">
      <span className="text-[13px] text-zinc-500">
        {durationFormatter(value)}
      </span>
      <Range
        min={0}
        max={duration}
        step={1}
        values={[value, duration]}
        onChange={(vals) => onChange(vals[0] ? vals[0] : 0)}
        onFinalChange={onFinalChange}
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
                  min: 0,
                  max: duration,
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
      <span className="text-[13px] text-zinc-500">
        {durationFormatter(duration)}
      </span>
    </div>
  );
};
