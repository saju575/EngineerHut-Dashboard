import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../../data";
import "./CustomerList.scss";

const CustomerList = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <ModeEditOutlineRoundedIcon />
            </div>
            <div className="deleteButton">
              <DeleteOutlineRoundedIcon />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-[#f5f7fa] min-h-screen">
      <div className="pl-6 pt-3">
        <h1 className="font-semibold text-xl">Customers</h1>
        <p className="customer-links">
          Home / <span>Customers</span>
        </p>
      </div>

      <div className="customers">
        <div style={{ height: 400, width: "auto" }}>
          <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
