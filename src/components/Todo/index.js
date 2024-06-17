import { useRef, useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import icon from "../../asset/images";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter, addToDo, mark, updateToDo, deleteToDo } from "../../action/action";

function Todo() {
    const [text, setText] = useState("");
    const [update, setUpdate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState();

    const inputRef = useRef();

    // redux
    const count = useSelector((state) => state.counter.count);
    const list = useSelector((state) => state.lister.list);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text === "") {
            alert("Please type your work");
        } else {
            // setList([...list, { checked: false, text: text }]);
            dispatch(addToDo({ checked: false, text: text }));
            setText("");
        }
    };

    const handleMark = (index) => {
        // setList(() => {
        //     let checked = !list[index].checked;
        //     let newList = list.toSpliced(index, 1, { checked, text: list[index].text });
        //     return newList;
        // });
        const checked = !list[index].checked;
        dispatch(mark(index, checked));
    };

    const handleUpdate = (index) => {
        setText(list[index].text);

        inputRef.current.focus();

        setUpdate(true);

        setCurrentIndex(index);
    };

    const updateData = () => {
        // setList(() => {
        //     let checked = list[currentIndex].checked;
        //     let newList = list.toSpliced(currentIndex, 1, { checked, text: text });
        //     return newList;
        // });
        dispatch(updateToDo(currentIndex, text));

        setText("");
        setUpdate(false);
    };

    const handleDelete = (index) => {
        // setList(list.filter((item, i) => i !== index));
        const newList = list.filter((item, i) => i !== index);
        dispatch(deleteToDo(newList));
    };

    return (
        <div id="app">
            <div className="row">
                <h2>To Do List</h2>
                <img src={icon} alt="" />
            </div>
            <div className="row">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Add your to do list"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {update ? (
                    <Button handleLogic={updateData}>Update</Button>
                ) : (
                    <Button handleLogic={handleAdd}>Add</Button>
                )}
            </div>
            <ul className="task">
                {list.map((item, index) => (
                    <div key={index} className="box">
                        <div
                            className={"icon ".concat(list[index].checked ? "checked" : "")}
                            onClick={() => handleMark(index)}
                        ></div>
                        <li
                            className={"text ".concat(list[index].checked ? "checked" : "")}
                            onClick={() => handleMark(index)}
                        >
                            {item.text}
                        </li>
                        <span onClick={() => handleUpdate(index)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </span>
                        <span onClick={() => handleDelete(index)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </div>
                ))}
            </ul>

            <div>Count: {count}</div>

            <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>

            <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
        </div>
    );
}

export default Todo;
