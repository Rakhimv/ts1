import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full border-['#252D35'] border-b-2">
        <div className="mx-auto my-auto max-w-[1720px] w-full h-[100px] px-[150px] flex items-center justify-between">
        
        <Link to='/'><img src="/src/assets/logo.svg" alt="" className="w-[50px] h-[50px]" /></Link>
        <div className='hfont hidden md:flex gap-[40px]'>
            <a href="#">Продукция</a>
            <a href="#">Области применения</a>
            <a href="#">Калькулятор</a>
            <a href="#">Проекты</a>
            <a href="#">Информация</a>
            <a href="#">Новости</a>
            <a href="#">О компании</a>
            <a href="#">Контакты</a>
        </div>
        <Link to='/auth' className="w-[50px] h-[50px] border-black border-[3px] flex justify-center items-center">
        <AiOutlineUser className="text-3xl" />
        </Link>
        </div>
    </header>
  )
}
