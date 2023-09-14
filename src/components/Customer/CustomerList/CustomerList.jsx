import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {userColumns, userRows} from "../../../data"
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import "./CustomerList.scss"

const CustomerList = () => {
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 300,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                  <div className="viewButton"><ModeEditOutlineRoundedIcon/></div>
                <div
                  className="deleteButton"
                >
                  <DeleteOutlineRoundedIcon/>
                </div>
              </div>
            );
          },
        },
      ];

    return (
        <>
            <h1>Customers</h1>
            <p className='products-links'>Home / <span>Customers</span></p>
            <div className="customers">
                
                <div style={{ height: 400, width: 'auto' }}>
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
        </>

    )
}

export default CustomerList