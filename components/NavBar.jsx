import styled from 'styled-components'
import Link from 'next/link'


const Header = styled.div `

    width: 100%;
`
const StyledButton = styled.button `
    ${'' /* padding: 8px; */}
    margin-left: 16px;
    padding: 8px 16px;

`



const NavBar = ()=>{

    return (
        <Header>
        <StyledButton>
        <Link href="/">
                <a>Login</a>
            </Link>
        </StyledButton>

        <StyledButton>
        <Link href="/addnewuser">
                <a>Lägg till användare</a>
            </Link>
        </StyledButton>

        <StyledButton>
        <Link href="/allequipment">
                <a>All utrustning</a>
            </Link>
        </StyledButton>
        

        </Header>
    )
}

export default NavBar