import Link from "next/link"
import Image from "next/image"

const linkInfo = [
    {text: 'Home', href: '/'},
    {text: 'Case Studies', href: '/projects'},
    {text: 'Contact', href: '/contact'},
]

const Navbar = () => {
  return (
    <nav>
        <div>
            <h1>PN</h1>
        </div>
        <div>
            <ul>
            {
                linkInfo.map((info) => (
                    <li key={info.text}>
                        <Link href={info.href}>
                            {info.text}
                        </Link>
                    </li>
                ))
            }
            </ul>
            <button>
                <Image src='/assets/download.png' width={12} height={12} alt='download'/>
                Resume
            </button>
        </div>
    </nav>
  )
}

export default Navbar