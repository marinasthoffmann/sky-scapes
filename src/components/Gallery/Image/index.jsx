import styled from "styled-components"
import IconButton from "../../IconButton"

const Image = ({ photo }) => {
    
    const Figure = styled.figure`
        width: 460px;
        max-width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        background-color: #001634;
        border-radius: 20px;
        color: white;
        & >img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
        }
        h3{
            padding: 0px 12px;
            margin: 12px 0px;
        }
    `

    const Footer = styled.footer`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        line-height: 5px;
    `
    
    return(
        <Figure id={`photo-${photo.id}`}>
            <img src={photo.path} />
            <figcaption>
                <h3>{photo.title}</h3>
                <Footer>
                    <p>{photo.source}</p>
                    <IconButton>
                        <img src="/images/icons/favorite.png" alt="Favorite icon" />
                    </IconButton>
                    <IconButton>
                    <img src="/images/icons/expand.png" alt="Expand icon" />
                    </IconButton>
                </Footer>
            </figcaption>
        </Figure>
    )
}

export default Image