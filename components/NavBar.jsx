import styled from 'styled-components'
import Link from 'next/link'


const Header = styled.div `

    width: 100%;
    background-color: violet;
    padding: 0.5rem;
`
const StyledButton = styled.button `
    ${'' /* padding: 8px; */}
    margin-left: 16px;
    padding: 5px 10px;

`
const StyledLink = styled(Link)`

    margin:0.2rem;
    color:white;
    text-decoration: none;


` 
const StyledALink=styled.a`
    color:black;
    cursor:pointer;
    margin:1rem;

    
`


const NavBar = ()=>{

    return (
        <Header>
        
        <Link href="/">
            <StyledALink>Login</StyledALink>
        </Link>
       

        <Link href="/addnewuser">
            <StyledALink>Lägg till användare</StyledALink>
        </Link>
      

    
        <Link href="/allequipment">
            <StyledALink>All utrustning</StyledALink>
        </Link>
  
        

        </Header>
    )
}

export default NavBar