import react from "react";
import {Container} from 'react-bootstrap'
const Display = () => {
    return(
        <div className="videoDiv">
            <Container className="videoContainer">
                 <div className="ratio ratio-16x9 iframeDiv">
                    <iframe src="https://www.youtube.com/embed/38RZdFK7Prg" title="YouTube Video" allowFullScreen></iframe>
                 </div>
            </Container>
        </div>
    )
}
export default Display;