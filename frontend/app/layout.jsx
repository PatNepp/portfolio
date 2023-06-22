import '../styles/globals.css';

export const metadata = {
    title: 'PN Portfolio',
    description: 'Patrick Nepp, web developer portfolio',
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className='body'>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default RootLayout;