/** @format */
import { useState } from "react";
import "../Header/header.scss";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(false);
  const [id, setId] = useState("");

  const openModal = () => {
    setShowModal(true);
    setText(false);
  };
  const closeModal = () => setShowModal(false);

  function handleCloseModal(e) {
    if (e.target.className === "modal active") {
      closeModal();
    }
  }

  const [todosFirstName, setTodosFirstName] = useState("");
  const [todosLastName, setTodosLastName] = useState("");
  const [todosAge, setTodosAge] = useState("");

  const handleChangeInputF = (e) => {
    setTodosFirstName(e.target.value);
  };
  const handleChangeInputL = (e) => {
    setTodosLastName(e.target.value);
  };
  const handleChangeInputA = (e) => {
    setTodosAge(e.target.value);
  };

  const [todos, setTodos] = useState(() => {
    const localItem = localStorage.getItem("todos");
    return localItem ? JSON.parse(localItem) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todosFirstName.trim()) {
      return alert("Ma'lumot kiritmadingiz!");
    }
    if (!todosLastName.trim()) {
      return alert("Ma'lumot kiritmadingiz!");
    }
    if (!todosAge.trim()) {
      return alert("Ma'lumot kiritmadingiz!");
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        firstName: todosFirstName,
        lastName: todosLastName,
        age: todosAge,
      },
    ]);

    setTodosFirstName("");
    setTodosLastName("");
    setTodosAge("");

    closeModal();
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  const handleDelete = (id) => {
    const uptadeLocal = todos.filter((todo) => todo.id !== id);

    setTodos(uptadeLocal);
  };

  const handleEdit = (id) => {
    openModal();
    setText(true);
    todos.forEach((item) => {
      if (item.id === id) {
        setTodosFirstName(item.firstName);
        setTodosLastName(item.lastName);
        setTodosAge(item.age);
      }
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!todosFirstName.trim()) {
      return alert("Ma'lumot kiritmadingiz!");
    }
    if (!todosLastName.trim()) {
      return alert("Ma'lumot kiritmadingiz!");
    }
    if (!todosAge.trim()) {
      return alert("Ma'lumot kiritmadingiz!");
    }

    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          firstName: todosFirstName,
          lastName: todosLastName,
          age: todosAge,
        };
      }
      return item;
    });

    setTodos(updatedTodos);

    setTodosFirstName("");
    setTodosLastName("");
    setTodosAge("");

    closeModal();
  };

  localStorage.setItem("todos", JSON.stringify(todos));

  const tr = todos.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.age}</td>
        <td
          onClick={() => {
            handleEdit(item.id);
            setId(item.id);
          }}
        >
          <i className='fa-solid fa-pencil'></i>
        </td>
        <td onClick={() => handleDelete(item.id)}>
          <i className='fa-solid fa-trash'></i>
        </td>
      </tr>
    );
  });

  return (
    <header>
      <div className='container'>
        <div
          className={`modal ${showModal ? "active" : ""}`}
          onClick={handleCloseModal}
        >
          <div className={`modal-item ${showModal ? "active" : ""}`}>
            <i className='fa-solid fa-xmark' onClick={closeModal}></i>
            <form className='form' onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Ism'
                value={todosFirstName}
                onChange={handleChangeInputF}
              />
              <input
                type='text'
                placeholder='Familiya'
                value={todosLastName}
                onChange={handleChangeInputL}
              />
              <input
                type='number'
                placeholder='Yosh'
                value={todosAge}
                onChange={handleChangeInputA}
              />
              <button type='submit' onClick={text ? handleSave : handleSubmit}>
                {text ? "O‘zgartirish" : "Qo‘shish"}
              </button>
            </form>
          </div>
        </div>
        <h1>Foydalanuvchi ma'lumotlari</h1>
        <button className='openModal addUser' onClick={openModal}>
          Qo'shish +
        </button>
        <table className='fl-table'>
          <thead>
            <tr>
              <th>Ism</th>
              <th>Familiya</th>
              <th>Yosh</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='tBody'>{tr}</tbody>
        </table>
      </div>
    </header>
  );
};

export default Header;
