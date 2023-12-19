"use client";

import React, { ChangeEvent } from "react";
import airlines from "../../data/airlines.json" assert { type: "json" };
import { useState } from "react";
import O1Information from "../organisms/o1-information/o1-information";
import { A2DataProps } from "../atoms/a2-data/A2Data";
import M2Form, { M2FormProps } from "../molecule/m2-form/M2Form";

export default function Home() {
  const [airline, setAirline] = useState("SAS");
  const airlineData = airlines.find((a) => a.icao === airline);

  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty(
      "--airline-color",
      `${airlineData?.color}`
    );
  }

  const handleAirlineChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAirline(event.target.value);
  };

  const selectData: M2FormProps = {
    heading: "What can I carry with",
    form: [
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
  };

  const airlineDataSet: Array<{
    heading: string;
    dataset: Array<A2DataProps>;
  }> = [
    {
      heading: "Maximum baggage size",
      dataset: [
        {
          number: airlineData?.carryOn?.baggageSize?.length || 0,
          unit: "cm",
          description: "Length",
        },
        {
          number: airlineData?.carryOn?.baggageSize?.width || 0,
          unit: "cm",
          description: "Width",
        },
        {
          number: airlineData?.carryOn?.baggageSize?.depth || 0,
          unit: "cm",
          description: "Depth",
        },
      ],
    },
    {
      heading: "Maximum baggage weight",
      dataset: [
        {
          number: airlineData?.carryOn?.baggageWeight || 0,
          unit: "kg",
        },
      ],
    },
  ];

  return (
    <main>
      <div className="container">
        <M2Form heading={selectData.heading} form={selectData.form} />
        <O1Information
          infosections={airlineDataSet}
          url={airlines.find((a) => a.icao === airline)?.url || "#"}
          text="Visit airline website"
        />
      </div>
    </main>
  );
}
