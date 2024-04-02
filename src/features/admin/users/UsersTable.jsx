import Table from "../../../ui/Table.jsx";
import Loading from "../../../ui/Loading.jsx";
import Empty from "../../../ui/Empty.jsx";
import useUsers from "../useUsers.js";
import UserRow from "./UserRow.jsx";

function UsersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;
  if (!users?.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
