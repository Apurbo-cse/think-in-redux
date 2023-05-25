import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDED } from "../redux/books/actionType";

const AddBook = () => {
    const dispatch = useDispatch();
    const [input,setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(ADDED(input))
        setInput("");
    }

    return (
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form"  onSubmit={submitHandler}>
                <div className="space-y-2">
                    <label for="name">Book Name</label>
                    <input
                        className="text-input"
                        type="text"
                        id="input-Bookname"
                        name="name"
                        value={input}
                        onChange={handleInput}
                    />
                </div>

                <button type="submit" className="submit" >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
