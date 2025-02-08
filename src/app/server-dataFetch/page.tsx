type DataType = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

async function serverFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: DataType[] = await response.json();
  return (
    <>
      <div>
        <div>
          {data.map((val) => (
            <div key={val.id}>
              <p>{val.name}</p>
              <p>{val.username}</p>
              <p>{val.email}</p>
              <p>{val.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default serverFetch;
