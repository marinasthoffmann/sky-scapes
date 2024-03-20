import styled from "styled-components"
import NavigationItem from "./NavigationItem"

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem 
                        activeIcon="/images/icons/home-active.png" 
                        inactiveIcon="/images/icons/home-inactive.png"
                        active={true}
                    >
                        Home
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="/images/icons/most-seen-active.png" 
                        inactiveIcon="/images/icons/most-seen-inactive.png"
                    >
                        Most seen
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="/images/icons/most-liked-active.png" 
                        inactiveIcon="/images/icons/most-liked-inactive.png"
                    >
                        Most liked
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="/images/icons/new-active.png" 
                        inactiveIcon="/images/icons/new-inactive.png"
                    >
                        New
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon="/images/icons/surprise-me-active.png" 
                        inactiveIcon="/images/icons/surprise-me-inactive.png"
                    >
                        Surprise me!
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default SideBar