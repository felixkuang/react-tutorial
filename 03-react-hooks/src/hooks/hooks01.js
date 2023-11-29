import { useEffect, useState } from "react";

async function hooks01(str) {

}

export function hook01(str) {
    const [color, setColor] = useState('#2172E5')

    useEffect(() => {
        let stale = false
        
        return () => {
            stale = true
            setColor('#2172E5')
        }
    }, [str])

    return color
}