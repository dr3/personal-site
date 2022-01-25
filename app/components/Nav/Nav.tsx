import styled from "styled-components";

const StyledNav = styled.nav`
    width: 39rem;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem auto;
`

const StyledNavLink = styled.a`
    color: #4078c0;
    text-decoration: none;
`;


const Navigation = () => {
    return (
        <StyledNav>
           <StyledNavLink aria-current="page" href="/">Home</StyledNavLink>
           <StyledNavLink href="https://github.com/dr3" target="_new">Github</StyledNavLink>
           <StyledNavLink href="/contact">Contact</StyledNavLink>
           <StyledNavLink href="/photos">Photos</StyledNavLink>
           <StyledNavLink href="/cv">CV</StyledNavLink>
        </StyledNav>
    )
}

export default Navigation;
