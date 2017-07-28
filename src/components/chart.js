import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function sum(data) {
  return data.reduce((total, num) => {
    return total + num;
  });
}

export default ({ data, color }) => {
  return (
    <div>
      <Sparklines height={100} width={200} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>
        {sum(data) / data.length}
      </div>
    </div>
  );
};
