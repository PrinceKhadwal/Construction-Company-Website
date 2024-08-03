import React from "react";
import { STATS_DATA } from "../utils/data";
import StatsCard from "./Cards/StatsCard";

const Stats = () => {
  return (
    <>
      <section className="bg-secondary">
        <div className="max-w-screen-xl flex justify-around mx-auto flex-wrap">
          {STATS_DATA.map((item, index) => (
            <StatsCard
              key={index}
              iconUrl={item.iconUrl}
              count={item.count}
              label={item.label}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Stats;
