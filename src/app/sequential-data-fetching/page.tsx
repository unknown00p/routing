import UserData from "./userData";

type DataType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function serverFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: DataType[] = await response.json();
  const filteredPosts = data.filter((val) => val.id % 10 == 1);
  return (
    <>
      <div>
        <div className="flex gap-3 flex-wrap justify-center">
          {filteredPosts.map((val) => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {val.title}
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {val.body}
              </p>
              <div className="inline-flex font-medium items-center text-blue-600 hover:underline">
                <UserData userId={val.userId}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default serverFetch;
