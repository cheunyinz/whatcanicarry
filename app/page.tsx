"use client";

import React, { ChangeEvent, useEffect } from "react";
import airlines from "../src/data/airlines.json" assert { type: "json" };
import { useState } from "react";
import O1Information from "../src/components/organisms/o1-information/o1-information";
import { A2DataProps } from "../src/components/atoms/a2-data/A2Data";
import M2Form, { M2FormProps } from "../src/components/molecule/m2-form/M2Form";

export default function Home() {
  const [airline, setAirline] = useState("");
  const [isMetric, setMetric] = useState(true);
  const airlineData = airlines.find((a) => a.icao === airline);
  const baggageSizeData = airlineData?.carryOn?.baggageSize;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--airline-color",
        `${airlineData?.color || "var(--secondary-font-color)"}`
      );
    }
  }, [airlineData]);

  const handleAirlineChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAirline(event.target.value);
  };

  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMetric(event.target.checked);
  };

  const formData: M2FormProps = {
    heading: "What can I carry with",
    select: [
      {
        name: "airlines",
        id: "airlines-select",
        onChange: handleAirlineChange,
        children: airlines.map((airline) => (
          <option value={airline.icao} key={airline.icao}>
            {airline.name}
          </option>
        )),
      },
    ],
    toggle: {
      firstToggle: "Metric",
      secondToggle: "Imperial",
      toggleName: "isMetric",
      onChange: handleUnitChange,
    },
  };

  const airlineDataSet: Array<{
    heading: string;
    dataset: Array<A2DataProps>;
  }> = [
    {
      heading: "Maximum baggage dimensions",

      dataset: [
        {
          number: baggageSizeData?.length || 0,
          unit: "cm",
          description: "Length",
          isMetric,
        },
        {
          number: baggageSizeData?.width || 0,
          unit: "cm",
          description: "Width",
          isMetric,
        },
        {
          number: baggageSizeData?.depth || 0,
          unit: "cm",
          description: "Depth",
          isMetric,
        },
      ],
    },
    {
      heading: "Maximum baggage weight",
      dataset: [
        {
          number: airlineData?.carryOn?.baggageWeight || 0,
          unit: "kg",
          isMetric,
        },
      ],
    },
  ];

  return (
    <main>
      <div className="container">
        <M2Form {...formData} />
        <O1Information
          infosections={airlineDataSet}
          url={airlineData?.url || "#"}
          text="Visit airline website"
        />
      </div>
    </main>
  );
}
