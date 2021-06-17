import styled from 'styled-components';
import ImgSlider from './imgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });

    }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/Home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;