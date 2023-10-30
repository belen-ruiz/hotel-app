// import { Button, Box, Typography } from "@mui/material";
// import React from "react";
// import { FilterView } from "./FilterView";

// export const FilterData = ({ getAllRooms, totalGuests, setSelect, select }) => {
//     return (
//         <Box className="box-sb">
//             {totalGuests > 0 && totalGuests < 5 ? (
//                 <>
//                     <Box className="dataDisplay">
//                         Showing results for Rooms for {totalGuests} people
//                     </Box>
//                     <Box className="dataButton" onClick={getAllRooms}>
//                         Show all Rooms
//                     </Box>
//                 </>
//             ) : null}
//             {totalGuests > 5 ? (
//                 <>
//                     <Box className="dataDisplay"> 
//                         No rooms available for {totalGuests} people
//                     </Box>
//                     <Box className="dataButton" onClick={getAllRooms}>
//                         Show all Rooms
//                     </Box>
//                 </>
//             ) : null}

//             {totalGuests === 0 ? (
//                 <Box className="dataDisplay"> Showing results for all Rooms</Box>
//             ) : null}

//             <FilterView setSelect={setSelect} select={select} />
//         </Box>
//     );
// };


import React from "react";
import { Box } from "@mui/material";
import { FilterView } from "./FilterView";

export const FilterData = ({ getAllRooms, totalGuests, setSelect, select }) => {
  let dataDisplay = null;

  if (totalGuests === 0) {
    dataDisplay = "Showing results for all Rooms";
  } else if (totalGuests < 5) {
    dataDisplay = `Showing results for Rooms for ${totalGuests} people`;
  } else {
    dataDisplay = `No rooms available for ${totalGuests} people`;
  }

  return (
    <Box className="box-sb">
      {dataDisplay && (
        <>
          <Box className="data-btn" onClick={getAllRooms}>
            Show all Rooms
          </Box>
          <Box className="data-info">{dataDisplay}</Box>
        </>
      )}

      <FilterView setSelect={setSelect} select={select} />
    </Box>
  );
};
