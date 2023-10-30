import AspectRatio from "@mui/joy/AspectRatio";
import { BoyRounded } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { BtnContained, BtnOutlined } from "../buttons/Buttons";

export const RoomImage = ({ title, imgUrl, ratio }) => {
    return (
        <>
            <AspectRatio sx={{ borderRadius: 0 }} ratio={ratio}>
                <figure className="image">
                    <img src={imgUrl} alt={title} className="image" />
                </figure>
            </AspectRatio>
        </>
    );
};

export const RoomCapacity = ({ capacity }) => {
    return (
        <>
            <Box title="capacity" className="white green-bc">
                {Array(capacity)
                    .fill()
                    .map(() => (
                        <BoyRounded
                            key={capacity}
                            className="fs-15"
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
                                {displayText ? (
                                    <RoomAmenity
                                        icon={am.icon}
                                        name={am.name}
                                    />
                                ) : (
                                    <>
                                        <RoomAmenitiesIcon icon={am.icon} />
                                    </>
                                )}
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
            <Box sx={{ display: "flex", gap: "0.7rem", width: "100%" }}>
                <p className="orange fs-1">
                    {icon}
                </p>
                <p className="text-sm green">{name}</p>
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
                <p className="card-title green">{title}</p>
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
                    <span
                        className="price green"
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
            <Box className="btn-box">
                <BtnContained link={`rooms/${id}`} text="more info" />
                
                <BtnOutlined link="book-now" text="book now" />
            </Box>
        </>
    );
};
