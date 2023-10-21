
import AspectRatio from "@mui/joy/AspectRatio";
import { BoyRounded } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const RoomImage = ({ title, imgUrl, ratio }) => {
    return (
        <>
            <AspectRatio sx={{ borderRadius: 0 }} ratio={ratio}>
                <figure  style={{ height: "100%", width: "100%", overflow: "hidden"  }}>
                    <img src={imgUrl} alt={title} className="image"/>
                </figure>
            </AspectRatio>
        </>
    );
};



export const RoomCapacity = ({ capacity }) => {
    return (
        <>
            <Box
                title="capacity"
                className="white green-bc">
                {Array(capacity)
                    .fill()
                    .map(() => (
                        <BoyRounded
                            key={capacity}
                            style={{ fontSize: "2rem" }}
                        />
                    ))}
            </Box>
        </>
    );
};


export const RoomAmenities = ({ amenities, amenity, displayText }) => {
  return (
    <>
      {amenity &&
        amenities &&
        amenity.map((am) => {
          if (amenities.includes(am.name)) {
            return (
              <div
              className="green"
                title={am.name}
                key={am.name}
                
              >
                {displayText ? 
                    <RoomAmenity icon={am.icon} name={am.name} />
                 : 
                 <>
                    <RoomAmenitiesIcon icon={am.icon} />
                </>}
              </div>
            );
          }
          return null;
        })}
    </>
  );
};


const RoomAmenity = ({ icon, name }) => {
    return (
        <>
            <Box sx={{display:"flex", gap:"0.7rem", width: "100%"}}>
                <p className="orange" style={{fontSize:"1rem"}}>{icon}</p> 
                <p className="smallText green">{name}</p>
            </Box>
        </>
    ); 
    };



const RoomAmenitiesIcon = ({ icon }) => {
    return (
        <>
            <p>{icon}</p>
        </>
    );
};



export const RoomTitle = ({ title }) => {
    return (
        <>
            <Box>
                <p className="cardTitle green">{title}</p>
            </Box>
        </>
    );
};



export const RoomPrice = ({ title, price }) => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <p className="subtitle green" style={{ fontWeight: 700 }}>
                    $
                    <span className="price green"
                        style={{ letterSpacing: "-10px" }}
                    >
                        {price}
                    </span>
                    pp night
                </p>
            </Box>
        </>
    );
};



export const RoomDescription = ({ description }) => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "end" }}>
                <p className="subtitle green">${description}</p>
            </Box>
        </>
    );
};



export const GroupButtons = ({ id }) => {
    return (
        <>
        <Box sx= {{ width: "100%", display: "flex", justifyContent: "space-between", gap: "0.7rem" }}>
                <Box sx={{ flex: 1 }}>
                    <Link to={`/rooms/${id}`}>
                        <Box className="btn contained-btn">more info </Box>
                    </Link>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Link to={`/rooms/${id}`}>
                        <Box className="btn outlined-btn">book now </Box>
                    </Link>
                </Box>
            </Box>
        </>
    );
};

