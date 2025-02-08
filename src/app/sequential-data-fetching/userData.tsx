type DataType = {
    id: number;
    name: string;
  }
  
async function UserData({userId}: {userId: number}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data: DataType = await response.json();
    // const user = data.filter((val)=> val.id == userId)
    return (
      <>
        <div>
          <div>
            {data.name}
          </div>
        </div>
      </>
    );
  }
  
  export default UserData;
  