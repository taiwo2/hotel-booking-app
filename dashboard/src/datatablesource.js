export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "country",
    headerName: "country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  }
];

export const hotelsColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  {
    field: "desc",
    headerName: "Title",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
  }
];
export const roomsColumns = [
  { field: "_id", headerName: "ID", width: 600 },
  {
    field: "desc",
    headerName: "Title",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  }
];