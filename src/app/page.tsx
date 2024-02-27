import Image from "next/image";
import Link from "next/link";
import logo from "../asset/pastor.jpg";

export default function Home() {
  return (
    <main className=" px-4 flex min-h-screen flex-col items-center justify-between xl:px-24 mt-4 xl:mt-8">
      <div>
        <div>
          <h1 className="text-center font-bold mb-3">
            Introduction: BLESSED WITH LAUGHTER
          </h1>
          <div className="text-justify">
            <p>I welcome you onboard 2024 fasting and prayer for twenty-one days.
            We will be seeking God each day with fasting and prayers as an act
            of worship and to make our petition known unto God.</p>
            <p>God had made a promise that He is blessing us with laughter in this year but then
            we have to pray through in order to activate the promise. There will
            be powers that will not want you to laugh, there will definitely be
            structures that the devil has put in place to stop you from
            laughing, you need to dismantle it through prayer and get through to
            your destination of laughter.</p>
            <p>Wisdom of God is to be desired also in order to solve daily problems that will eventually get us to that
            point where you will laugh. Instruction is needed from heaven in
            order for us to be able to navigate through to the place of
            laughter. He did it for heroes in the Bible, he will do it for you
            too.</p>
            <p>Don’t joke with this meeting because a word of promise is about
            to be established “Call unto me, and I will answer thee, and shew
            thee great and mighty things, which thou knowest not.” Jer 33:3. If
            you are the one who will call on Him, be expectant of answer
            quickly.</p>
            <p className="font-bold mt-4">Remember PUSH - Pray Until Something Happen.</p>
                
          </div>
        </div>
        <div className="flex my-8 flex-col xl:flex-row">
          <Image src={logo} width={120} height={120} alt="logo" style={{}} />
          <div className=" mt-4 xl:mt-0 xl:ml-4">
            <h1 className="font-bold">Pastor Olusola Isaac Ajewole</h1>
            <p>Presiding Pastor</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:items-center mb-4">
        <h1 className=" my-4 font-bold xl:mb-8 text-justify">
          Click below to go to each day prayer points
        </h1>
        <div className=" flex flex-col gap-y-4 xl:flex-row xl:gap-x-4 items-center">
          <Link href="/day1-3" className="link">
            Day 1 to 3
          </Link>
          <Link href="/day4-6" className="link">
            Day 4 to 6
          </Link>
          <Link href="/day7-9" className="link">
            Day 7 to 9
          </Link>
          <Link href="/day10-12" className="link">
            Day 10 to 12
          </Link>
          <Link href="/day13-15" className="link">
            Day 13 to 15
          </Link>
          <Link href="/day16-18" className="link">
            Day 16 to 18
          </Link>
          <Link href="/day19-21" className="link">
            Day 19 to 21
          </Link>
        </div>
      </div>
    </main>
  );
}
