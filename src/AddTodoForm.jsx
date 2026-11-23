import { useState} from "react";

export default function AddTodoForm({ onAdd }) {
    const [text, setText] = useState("");
{/* AI-assisted - see AI-USAGE.md #1 */}
    function handleSubmit(event) {
        event.preventDefault();
        const Trim_text = text.trim(); // so we can remove whitespace from the input value

        if (Trim_text) {
            onAdd(Trim_text);
            setText("");
        }
    }

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input 
            name="text" 
            placeholder="Add a todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
             /> 
            <button type="submit">Add</button>
        </form>
    );
}