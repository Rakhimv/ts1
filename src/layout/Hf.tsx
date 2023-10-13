import Header from "../components/Header";
import { Outlet } from 'react-router-dom'
export default function Hf() {
  return (
    <>
        <Header />
        <main><Outlet /></main>
    </>
  )
}
