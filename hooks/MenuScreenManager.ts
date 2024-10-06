import { useState } from "react";

export default function MenuScreenManager() {
    const [screen, setScreen] = useState('Menu')

    return {
        get screen() {
            return screen
        },
        setScreen,
    }
}