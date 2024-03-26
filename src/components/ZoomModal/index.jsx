import styled from "styled-components"
import Image from "../Gallery/Image"
import IconButton from "../IconButton"

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ZoomModal = ( { photo, whenClosed, whenToggleFavorite } ) => {
    return(
        <>
            {photo && 
            <>
                <Overlay />
                <StyledDialog open={!!photo} onClose={whenClosed}>
                    <Image photo={photo} expanded={true} whenToggleFavorite={whenToggleFavorite} />
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/images/icons/close.png" alt="Close icon" />
                        </IconButton>
                    </form>
                </StyledDialog>
            </>}
        </>
    )
}

export default ZoomModal