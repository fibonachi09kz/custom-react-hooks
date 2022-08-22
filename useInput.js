import {useState} from "react";

// Создаёт связь управляемого инпута и state
// Чтобы использовать нужно развернуть возвращаемый объект в атрибуты инпута
// <input {...returnObj} name="email" placeholder="Ваш Email" />

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
};