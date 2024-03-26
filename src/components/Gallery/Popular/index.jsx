import styled from "styled-components"
import Title from "../../Title"

import photos from './photos-popular.json'

const PhotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Photo = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`

const Popular = () => {
    return (
        <section>
            <Title aligment="center">Popular</Title>
            <PhotosColumn>
                {photos.map(photo => <Photo key={photo.id} src={photo.path} alt={photo.alt} />)}
            </PhotosColumn>
            <Button>View more</Button>
        </section>
    )
}

export default Popular