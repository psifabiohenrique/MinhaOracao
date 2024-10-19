import { useState } from "react";

export default function MenuScreenManager() {
    const [rosary, setRosary] = useState('Doloroso')

    return {
        get rosary() {
            return rosary
        },
        setRosary,
    }
}