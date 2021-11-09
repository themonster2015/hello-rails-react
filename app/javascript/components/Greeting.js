import React, {useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchGreeting } from "../configureStore"

export default function Greeting() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreeting())
    
  }, [dispatch])
  const greeting = useSelector(state => state.greeting)

  return (
    <React.Fragment>
    Greetings: {greeting}
  </React.Fragment>
  )
}
