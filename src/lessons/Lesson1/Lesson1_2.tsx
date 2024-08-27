import { useState } from "react";

const Lesson1_2 = () => {

  const [form, setForm] = useState({
    firstName: "taku",
    lastName: "yamada",
    email: "yamataku@gmail.com",
  })

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value
              })
            }
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e) =>
              setForm({
                firstName: form.firstName,
                lastName: e.target.value,
                email: form.email,
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            className="border border-slate-500"
            onChange={(e) =>
              setForm({
                firstName: form.firstName,
                lastName: form.lastName,
                email: e.target.value,
              })
            }
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
