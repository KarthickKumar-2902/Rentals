import React from "react";
import pRoom from "../../assets/roomimages/shop-2.jpeg"

const Placelist = () => {
  return <div>
    
        <div className="placeList">
            <div className="place">
                <div className="placeImg">
                    <img src={pRoom} alt="pRoom" />
                </div>
                <div className="placeTitle">
                    <span>
                        Coimbatore
                    </span>
                </div>
            </div>
        </div>

  </div>;
};

export default Placelist;
