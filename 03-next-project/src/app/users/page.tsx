import { getUsers } from "@/core/api/users";

const UsersPage = async () => {
  const users = await getUsers();
  console.log("users", users);
  return (
    <div>
      <h1>Our users</h1>
      <ul className="flex flex-wrap gap-2">
        {users.map((value) => (
          <div className="p-10 text-center bg-blue-950" key={value.email}>
            <h5>name: {value.name}</h5>
            <p>email: {value.email}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
