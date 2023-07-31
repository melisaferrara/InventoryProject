import React from "react";

const InformationCard = ({ information }) => {
  
    return (
    <div className="flex justify-end p-5 font-bold">
      <div className="text-white w-1/2 h-1/2">
        <div className="bg-cyan-900 flex justify-start p-3 text-xl">
          <p>{information.name}</p>
        </div>
        <div className="bg-cyan-600">
          <p>
            {information.category === "weapon"
              ? information.stats.damage
              : information.category === "shield"
              ? information.stats.defense
              : information.stats?.armor}
          </p>
          <p>{information.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
