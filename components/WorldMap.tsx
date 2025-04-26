"use client";
import React from "react";

const WorldMap: React.FC = () => {
  return (
    <>
      <div className="map-container">
        <img src="/dessert.png" alt="Desert" className="map-image desert" />
        <img src="/forest.png" alt="Forest" className="map-image forest" />
        <img
          src="/mountains.png"
          alt="Mountains"
          className="map-image mountains"
        />
      </div>

      <style jsx>{`
        .map-container {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
        }

        .map-image {
          height: auto;
          transition: transform 0.2s ease;
          position: relative;
          z-index: 2;
        }

        .map-image:hover {
          transform: scale(1.05);
        }

        .desert {
          width: 241px;
          margin-right: -100px;
          margin-bottom: 74px;
        }

        .forest {
          width: 350px;
          margin-bottom: 10px;
        }

        .mountains {
          width: 325px;
          margin-bottom: 35px;
          margin-left: -150px;
        }
      `}</style>
    </>
  );
};

export default WorldMap;
