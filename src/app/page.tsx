import Image from "next/image";
import Link from "next/link";
import logo from '../asset/pastor.jpg'

export default function Home() {
  return (
    <main className=" px-4 flex min-h-screen flex-col items-center justify-between xl:px-24 mt-4 xl:mt-8">
      <div>
        <div>
          <h1 className="text-center font-bold mb-3">Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            ullam culpa, quo voluptas nam tenetur assumenda quisquam officiis
            ipsam repellat ex expedita saepe quod voluptatibus magnam voluptate
            sequi numquam odio quia, in fugit. Fugiat aliquid ut ullam fugit
            ipsa deleniti nostrum inventore reprehenderit quo unde ratione
            quibusdam et, fuga debitis dolorum sequi vero omnis. Reprehenderit
            eum architecto magni praesentium id quod aspernatur quibusdam
            ratione eligendi, ullam ipsam incidunt sunt facere vitae tempora
            quae dolor qui. Quasi, quisquam repellendus ratione doloremque
            officiis placeat obcaecati, ab sunt in eveniet optio maiores
            delectus dignissimos perspiciatis necessitatibus nobis dolorem
            quibusdam id velit magnam quidem officia. Facilis, rem animi? Optio
            aut itaque nemo, consequatur molestias minus delectus deserunt,
            voluptates saepe, eaque blanditiis pariatur modi perferendis sint
            nostrum quae dolores commodi ea quos illum odio perspiciatis
            quaerat. At assumenda quis, blanditiis temporibus natus, iure
            deserunt in ipsum enim numquam itaque rerum. Accusantium quis, sequi
            totam molestias laboriosam distinctio itaque blanditiis ea excepturi
            incidunt accusamus vitae explicabo ducimus eos molestiae quibusdam
            recusandae quod ex hic et! Dolor quam vero quidem error earum!
            Adipisci harum tempora ratione architecto odit excepturi laboriosam
            maxime dolores recusandae velit. Voluptatum, temporibus iusto,
            tenetur at, eius architecto nihil obcaecati totam hic placeat ad.
          </p>
        </div>
        <div className="flex my-8 flex-col xl:flex-row">
        <Image src={logo} width={120} height={120} alt="logo" style={{}}/>
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
