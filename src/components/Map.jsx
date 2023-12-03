import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1500
      }}
        style={{
            width: "100%",
            height: "100%"
        }}
    >
      <Geographies
        geography="/features.json"
        fill="#0E0E0F"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[12.4964, 41.9028]}
        dx={-90}
        dy={-20}
        connectorProps={{
          stroke: "#f9f9f9",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#0EA5E9">
          {"Rome"}
        </text>
      </Annotation>
      <Annotation
        subject={[4.3007, 52.0705]}
        dx={-20}
        dy={-70}
        connectorProps={{
          stroke: "#f9f9f9",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="4" y="-10" textAnchor="middle" alignmentBaseline="middle" fill="#0EA5E9">
          {"The Hague"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
