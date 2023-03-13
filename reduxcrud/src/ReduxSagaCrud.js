import React, { useState } from "react";

const ReduxSagaCrud = () => {
  const initialValues = {
    name: "",
    location: "",
    email: "",
  };
  const [input, setInput] = useState({ ...initialValues });
  const [body, setBody] = useState([]);
  const [id, setId] = useState(null);
  const [editing,setEditing]=useState(false)

  const onInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (id === null) {
      const data = { ...body, id: new Date().getTime().toString() };
      setBody([...body, data]);
      setInput({ ...initialValues });
    } else {
      body.map((e) => {
        if (e.id === id) {
          (e.name = input.name);
            (e.location = input.location);
            (e.email = input.email);
        }
      });
    }
    setInput({...input})
    setInput({...initialValues})
    
  };

  const reset = () => {
    setInput({ ...initialValues });
  };

  // const keys = body.length > 0 ? Object.keys(body[0]) : [];
  const keys =  ["id","name","location","email"]
  console.log(keys);

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={input.name}
            onChange={onInput}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Hyderabad"
            value={input.location}
            onChange={onInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@abc.com"
            value={input.email}
            onChange={onInput}
            required
          />
        </div>
        <div>
          <button type="reset" onClick={reset}>
            Reset
          </button>
          <button type="submit" onClick={submit}>
            {editing?"Save Changes":"Save"}
          </button>
        </div>
      </form>

      <table border="2">
        <thead>
          <tr>
            {keys.map((e) => (
              <th>{e}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {body.map((data) => {
            return (
              <tr >
                {keys.map((e) => {
                  return <td>{data[e]}</td>;
                })}
                <td>
                  <button
                    onClick={() => {
                      // setInput(body.find((e) => e.id === data.id));
                      // setEditing(!editing)
                      // setId(id)
                    }}
                  >
                    Edit
                  </button>
                </td>
                {/*onClick={(id)=>{setInput(data)}}*/}
                <td>
                  <button
                    onClick={() => {
                      // setBody(body.filter((e) => e.id !== data.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ReduxSagaCrud;
