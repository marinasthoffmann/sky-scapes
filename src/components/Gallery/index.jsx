import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import Image from "./Image"

const GalleryContainer = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ( { photos = [], whenSelectedPhoto, whenToggleFavorite, setTag } ) => {
    return (
        <>
            <Tags setTag={setTag} />            
            <GalleryContainer>
                <FluidSection>
                    <Title>Browse the gallery</Title>
                    <ImagesContainer>
                        {photos.map( photo => 
                            <Image 
                                whenZoomed={whenSelectedPhoto}
                                whenToggleFavorite={whenToggleFavorite}
                                key={photo.id}
                                photo={photo}
                            />  
                        )}
                    </ImagesContainer>                    
                </FluidSection>
                <Popular />          
            </GalleryContainer>       
        </>
    )
}

export default Gallery