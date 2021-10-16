import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { Colors } from "../../Styles/Colors";

interface Props {
  initial: number;
  last: number;
  label: string;
}

const CustomRangeSlider: React.FC<Props> = ({ initial, last, label }) => {
  const [values, setValues] = React.useState([initial, last]);
  let STEP = initial + 1;
  let MIN = initial;
  let MAX = last;
  return (
    <>
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          marginBottom: "1rem",
          textTransform: "uppercase",
        }}
      >
        {label}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={false}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
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
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: [
                      Colors.lightBlack,
                      Colors.yellow,
                      Colors.lightBlack,
                    ],
                    min: MIN,
                    max: MAX,
                    rtl: false,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "18px",
                width: "18px",
                borderRadius: "50%",
                backgroundColor: Colors.white,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-28px",
                  color: Colors.white,
                  fontWeight: "bold",
                  fontSize: "14px",
                  fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                  padding: "4px",
                  borderRadius: "50%",
                  backgroundColor: Colors.yellow,
                }}
              >
                {values[index].toFixed(0)}
              </div>
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  backgroundColor: isDragged ? Colors.yellow : Colors.grey,
                }}
              />
            </div>
          )}
        />
      </div>
    </>
  );
};

export default CustomRangeSlider;
