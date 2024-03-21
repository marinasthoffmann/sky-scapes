import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"

const GalleryContainer = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const Gallery = () => {
    return (
        <>
            <Tags />            
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                </FluidSection>
                <Popular />          
            </GalleryContainer>       
        </>
    )
}

export default Gallery