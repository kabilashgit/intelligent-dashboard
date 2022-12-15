import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { randomGen } from "../../HelperUtils";

const CustomWorldMap = () => {
  const dataSet = {
    MX: randomGen(10, 100),
    US: randomGen(10, 100),
    AR: randomGen(10, 100),
    CA: randomGen(10, 100),
    GR: randomGen(10, 100),
    BD: randomGen(10, 100),
    MN: randomGen(10, 100),
    BN: randomGen(10, 100),
    BH: randomGen(10, 100),
    BT: randomGen(10, 100),
    HK: randomGen(10, 100),
    JO: randomGen(10, 100),
    PS: randomGen(10, 100),
    LB: randomGen(10, 100),
    LA: randomGen(10, 100),
    TW: randomGen(10, 100),
    TR: randomGen(10, 100),
    LK: randomGen(10, 100),
    TL: randomGen(10, 100),
    TM: randomGen(10, 100),
    TJ: randomGen(10, 100),
    TH: randomGen(10, 100),
    XC: randomGen(10, 100),
    NP: randomGen(10, 100),
    PK: randomGen(10, 100),
    PH: randomGen(10, 100),
    AE: randomGen(10, 100),
    CN: randomGen(10, 100),
    AF: randomGen(10, 100),
    IQ: randomGen(10, 100),
    JP: randomGen(10, 100),
    IR: randomGen(10, 100),
    AM: randomGen(10, 100),
    SY: randomGen(10, 100),
    VN: randomGen(10, 100),
    GE: randomGen(10, 100),
    IL: randomGen(10, 100),
    IN: randomGen(10, 100),
    AZ: randomGen(10, 100),
    ID: randomGen(10, 100),
    OM: randomGen(10, 100),
    KG: randomGen(10, 100),
    UZ: randomGen(10, 100),
    MM: randomGen(10, 100),
    SG: randomGen(10, 100),
    KH: randomGen(10, 100),
    CY: randomGen(10, 100),
    QA: randomGen(10, 100),
    KR: randomGen(10, 100),
    KP: randomGen(10, 100),
    KW: randomGen(10, 100),
    KZ: randomGen(10, 100),
    SA: randomGen(10, 100),
    MY: randomGen(10, 100),
    YE: randomGen(10, 100),
  };

  return (
    <>
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        style={{
          width: "100%",
          height: "280px",
          minHeight: '280px'
        }}
        regionStyle={{
          initial: {
            fill: "#efefef",
          },
        }}
        focusOn={{
          x: 2,
          y: 2,
          scale: 1,
        }}
        series={{
          regions: [
            {
              values: dataSet, // this is the map data
              scale: ["#C8EEFF", "#0071A4"], // your color game's here
              normalizeFunction: "polynomial",
            },
          ],
        }}
        className="map"
        onRegionTipShow={function (e, el, code) {
          // eslint-disable-next-line
          {
            el.html(el.html() + " : " + dataSet[code])
          }
        }}
      />
    </>
  );
};

export default CustomWorldMap;
