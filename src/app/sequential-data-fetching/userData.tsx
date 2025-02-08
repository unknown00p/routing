type DataType = {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
  }
  
async function UserData({userId}: {userId: number}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: DataType[] = await response.json();
    const user = data.filter((val)=> val.id == userId)
    return (
      <>
        <div>
          <div>
            {user.map((val) => (
              <div key={val.id}>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default UserData;
  