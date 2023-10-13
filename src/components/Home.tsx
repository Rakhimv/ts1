
import { FaPlusMinus } from 'react-icons/fa6'
import { Grid, GridItem, ChakraProvider } from "@chakra-ui/react";


export default function Home() {
  

  return (
    <div className="flex justify-between items-center gap-[100px]">
      <div className="">
        <p className="home-p">Раздвижные <br />конструкции <br /><span>с высоким уровнем <br />звукоизоляции</span></p><br />
        <ul className="spisok">
          <li>Собственное производство в России</li>
          <li>Уровень вукоизоляции до 52 дБ</li>
          <li>Расчит проекта по вашим требованиям за 1 час</li>
          <li>Гарантия на продукцию 3 года</li>
          <li>Работа “под ключ”</li>
        </ul>
        <button className='mt-[35px] text-[#B8884B] flex px-[30px] py-[15px] justify-center items-center gap-[8px] border-[#B8884B] border-2  hover:bg-[#B8884B] hover:text-[#ffffff] transition-all' >Получить рассчет проекта <FaPlusMinus /></button>
      </div>

      <div>
        <ChakraProvider>
          <Grid templateColumns='repeat(4, 1fr)' className='w-[660px] h-[660px]' gap={8}>
            <GridItem colSpan={2} rowSpan={4} h='100%' bgImage='url("/src/assets/c1.png")' backgroundSize='cover' />
            <GridItem colSpan={1} rowSpan={2} h='100%' bgImage='url("/src/assets/c2.png")' backgroundSize='cover' />
            <GridItem colSpan={1} h='100%' bgImage='url("/src/assets/c3.png")' backgroundSize='cover' />
            <GridItem colSpan={1} h='100%' bgImage='url("/src/assets/c4.png")' backgroundSize='cover' />
            <GridItem colSpan={2} rowSpan={2} h='100%' bgImage='url("/src/assets/c5.png")' backgroundSize='cover' />
          </Grid>
        </ChakraProvider>
      </div>
    </div>
  )
}
