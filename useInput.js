import {useState} from "react";

// Создаёт связь управляемого инпута и state
// Чтобы использовать нужно развернуть возвращаемый объект в атрибуты инпута
// <input {...returnObj} name="email" placeholder="Ваш Email" />
// Чтобы изменить состояние вручную (очистка и т.д.) можно вызвать setValue как метод возвращаемого объекта

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value, onChange, setValue
    }
};