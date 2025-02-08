"use client";

import { useEffect, useState } from "react";

interface DataType {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export default function clientData() {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <p>loading</p>;

  if (error) return <p>{error}</p>;

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
