import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function NotFound() {
    // function to navigate and send user to a home page
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            // passing value to go backwards
            navigate("/", { state: "Error Not Page" })
        }, 1000)
    }, [])
    return <h1>NotFound</h1>
}