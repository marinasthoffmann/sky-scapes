import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import photos from "./photos.json"
import { useEffect, useState } from "react"
import ZoomModal from "./components/ZoomModal"
import Footer from "./components/Footer"

const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    img {
      max-width: 212px;
    }
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag
      const filterByTitle = !filter || photo.title.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })
    setGalleryPhotos(filteredPhotos)
  }, [filter, tag])

  const whenToggleFavorite = (photo) => {
    if (photo.id == selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
      }
    }))
  }

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter}/>
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner text={"The most complete space photo gallery!"} backgroundImage={"./images/banner.png"}/>
            <Gallery 
              photos={galleryPhotos} 
              whenSelectedPhoto={photo => setSelectedPhoto(photo)}
              whenToggleFavorite={whenToggleFavorite}
              setTag={setTag}
            />
          </GalleryContent>          
        </MainContainer>
      </AppContainer>
      <Footer />
      <ZoomModal 
        photo={selectedPhoto}
        whenClosed={() => setSelectedPhoto(null)}
        whenToggleFavorite={whenToggleFavorite}
      />      
    </GradientBackground>
  )
}

export default App
