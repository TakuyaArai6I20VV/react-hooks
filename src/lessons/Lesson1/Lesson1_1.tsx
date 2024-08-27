import { ChangeEvent, useState } from "react"

const Lesson1_1 = () => {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("taku")

  const handleClick = () => {
    setAge(age + 1)
  }

  return (
    <div>
      <input className="border" type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <button className="border p-2 rounded-md bg-red-100" onClick={handleClick}>Add Age</button>
      <p>You are {age}</p>
      <p>Your name is {name}</p>
    </div>
  );
};

export default Lesson1_1;
