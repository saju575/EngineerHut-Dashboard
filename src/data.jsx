export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <>
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                </>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "order",
        headerName: "Orders",
        width: 100,
    },
    {
        field: "country",
        headerName: "Country",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
    {
        field: "join",
        headerName: "Join On",
        width: 200,
    },
    // {
    //     field: "action",
    //     headerName: "Action",
    //     width: 100,
    // },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "Active",
        email: "1snow@gmail.com",
        order: 35,
        country: "USA",
        join: "22-09-23",
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "2snow@gmail.com",
        status: "Paid",
        order: 42,
        country: "UK",
        join: "22-09-21",
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "3snow@gmail.com",
        status: "Paid",
        order: 45,
        country: "UAE",
        join: "22-09-22",
    },
    {
        id: 4,
        username: "Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "4snow@gmail.com",
        status: "Active",
        order: 16,
        country: "USA",
        join: "22-08-23",
    },
];