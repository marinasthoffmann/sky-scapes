import styled from "styled-components"
import Image from "../Gallery/Image"

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
`

const ZoomModal = ( { photo } ) => {
    return(
        <>
            {photo && 
            <>
                <Overlay />
                <StyledDialog open={!!photo}>
                    <Image photo={photo} expanded={true} />
                    <form method="dialog">
                        <button>OK</button>
                    </form>
                </StyledDialog>
            </>}
        </>
    )
}

export default ZoomModal