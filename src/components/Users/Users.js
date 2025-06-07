import { useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import axios from "axios";
import DataContext from "../../context/DataContext";
import { GridToolbar } from '@mui/x-data-grid';

const columns = [
  {
    field: "username",
    headerClassName: "users-header",
    flex: 1,
    headerName: "Name",
    sortable: true,
    minWidth: 200,
    // renderCell: (params) => {
    //   return (
    //     <>
    //       <Avatar src={params.value.userImage} sx={{ mr: "8px" }} />
    //       {params.value.name}
    //     </>
    //   );
    // },
  },
  {
    field: "fullname",
    headerName: "FullName",
    sortable: false,
    minWidth: 250,
    headerClassName: "users-header",
    flex: 1,
  },
  {
    field: "phoneNo",
    headerName: "PhoneNo",
    sortable: false,
    minWidth: 250,
    headerClassName: "users-header",
    flex: 1,
  },
  {
    field: "batchName",
    headerName: "batchName",
    sortable: false,
    minWidth: 130,
    headerClassName: "users-header",
    flex: 1,
  },
  {
    field: "courseName",
    headerName: "CourseName",
    sortable: false,
    headerClassName: "users-header",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            display: "inline",
            backgroundColor:
              params.value === "Active"
                ? "rgba(84, 214, 44, 0.16)"
                : "rgba(255, 72, 66, 0.16)",
            color:
              params.value === "Active"
                ? "rgb(34, 154, 22)"
                : "rgb(183, 33, 54)",
            borderRadius: "6px",
            fontSize: "0.75rem",
            fontWeight: "700",
            height: "24px",
            minWidth: "22px",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            padding: "4px 8px",
            fontFamily: "Public Sans, sans-serif",
          }}
        >
          {params.value}
        </Box>
      );
    },
  },
];

const Users = (props) => {
  const ctx = useContext(DataContext);
  useEffect(() => {
    async function fetchUsers() {
      let res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/student/getstudent`)
      ctx.setListOfUsers(res.data);
    }
    fetchUsers()
  }, [ctx]);
  return (
    <Box sx={{ padding: "10px" }}>
      <Box
        sx={{
          marginTop: 4,
          mb: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
      </Box>
      <Box
        sx={{
          height: 450,
          width: "100%",
          "& .users-header": {
            backgroundColor: "#F1F1F1",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: "100%",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
        </Box>
         <DataGrid
          columns={columns}
          rows={ctx.listOfUsers}
          getRowId={(row)=>row._id}
          components={{
            Toolbar: GridToolbar,
          }}
      />
      </Box>
    </Box>
  );
};

export default Users;
