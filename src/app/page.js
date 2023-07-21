import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center z-0">
      <video
        src="particles.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
      />
      <div className="min-h-screen min-w-full text-center z-10 bg-gray-700 bg-opacity-30">
        <header>
          <div className="px-20 pt-40">
            <Image
              src="/images/joy.jpeg"
              width={150}
              height={150}
              quality={100}
              alt="Picture of the author"
              style={{ borderRadius: "100%", display: "-webkit-inline-box" }}
              className="border-2 "
            />
            <h1 className="font-bold mt-6">@Isaacitzhak</h1>
          </div>
          <p className="font-bold mt-1 pb-24">
            Everything that can be thought can be done
          </p>
        </header>
        <div className="rounded ">
          <ul className="flex items-center justify-center flex-col">
            <li className="flex items-center my-1 hover:bg-opacity-40 hover:bg-white hover:cursor-pointer rounded">
              <Link
                href="https://github.com/IsaacMagno"
                target="_blank"
                className="px-28 py-2"
              >
                <div className="flex w-28">
                  <Image
                    src={"/images/github.png"}
                    width={20}
                    height={20}
                    quality={100}
                    alt="github logo"
                  />
                  <span className="mx-3">GitHub</span>
                </div>
              </Link>
            </li>
            <li className="flex items-center my-1 hover:bg-opacity-40 hover:bg-white hover:cursor-pointer rounded">
              <Link
                href="https://www.linkedin.com/in/isaacmagno/"
                target="_blank"
                className="px-28 py-2"
              >
                <div className="flex w-28">
                  <Image
                    src={"/images/linkedin.png"}
                    width={20}
                    height={20}
                    quality={100}
                    alt="linkedin logo"
                  />

                  <span className="mx-3">LinkedIn</span>
                </div>
              </Link>
            </li>
            <li className="flex items-center my-1 hover:bg-opacity-40 hover:bg-white hover:cursor-pointer rounded">
              <Link
                href="https://isaacmagno.github.io/myPort/"
                target="_blank"
                className="px-28 py-2"
              >
                <div className="flex w-28">
                  <Image
                    src={"/images/logoPort.png"}
                    width={20}
                    height={20}
                    quality={100}
                    alt="portfolio logo"
                  />

                  <span className="mx-3">Portfólio</span>
                </div>
              </Link>
            </li>
            <li className="flex items-center my-1 hover:bg-opacity-40 hover:bg-white hover:cursor-pointer rounded">
              <Link
                href="https://wa.me/5519997050228"
                target="_blank"
                className="px-28 py-2"
              >
                <div className="flex w-28">
                  <Image
                    src={"/images/whatsapp.png"}
                    width={20}
                    height={20}
                    quality={100}
                    alt="whatsApp logo"
                  />
                  <span className="mx-3">WhatsApp</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
