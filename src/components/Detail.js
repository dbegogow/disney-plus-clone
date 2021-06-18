import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=1200&aspectRatio=1.78&format=jpeg"
                    alt=""
                />
            </Background>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 150px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

export default Detail;