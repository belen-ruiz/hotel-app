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
                        <BoyRounded key={capacity} className="fs-15" />
                    ))}
            </Box>
        </>
    );
};

export const RoomAmenities = ({ amenities, amenity, displayText }) => {
    return (
        <>
            {amenity && amenities &&
                amenity.map((am) => {
                    if (amenities.includes(am.name)) {
                        return (
                            <div
                                className="green"
                                title={am.name}
                                key={am.name}
                            >
                                {displayText ? (
                                    <>
                                        <Box>
                                            <div className="orange fs-05">
                                                {am.icon}
                                            </div>
                                            <div className="text-sm green">
                                                {am.name}
                                            </div>
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        <div className="orange ">{am.icon}</div>
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

export const RoomTitle = ({ title }) => {
    return (
        <>
            <div className="card-title green">{title}</div>
        </>
    );
};

export const RoomPrice = ({ price }) => {
    return (
        <>
            <Box>
                <div className="subtitle green">
                    $<span className="price green">{price}</span>
                    pp night
                </div>
            </Box>
        </>
    );
};

export const RoomDescription = ({ description }) => {
    return (
        <>
            <Box>
                <div className="subtitle green">${description}</div>
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
