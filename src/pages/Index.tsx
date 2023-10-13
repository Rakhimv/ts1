import Header from "../components/Header";
import Home from "../components/Home";

export default function Index() {
  return (
    <>
      <Header />
      <div className="content mx-auto my-auto margin-[0 auto] px-[150px] mt-[100px] mb-[100px] max-w-[1720px]">
        <Home />
      </div>
    </>
  )
}
