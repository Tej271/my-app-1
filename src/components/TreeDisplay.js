import React from "react";
import axios from "axios";

function TreeDisplay() {
  const [users, setUsers] = React.useState([]);

  const fetchData = async () => {
    await axios
      .get("http://localhost:3004/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchData();
  });

  return (
    <div style={{ margin: "4%" }}>
      <div>Basic Display of Users</div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TreeDisplay;
