import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsAction, selectSong, removeLikeAction, likeAction } from "../../redux/actions/songActions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const MainSection = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.song.songs);
  const likedSongs = useSelector((state) => state.likes.likedSongs);

  useEffect(() => {
    dispatch(getSongsAction("rock"));
  }, [dispatch]);
  console.log("Canzoni con il mi piace:", likedSongs);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col md={9} lg={11} className="mainLinks d-none d-md-flex">
          <Nav className="justify-content-start">
            <Nav.Link href="#">TRENDING</Nav.Link>
            <Nav.Link href="#">PODCAST</Nav.Link>
            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#">NEW RELEASES</Nav.Link>
            <Nav.Link href="#">DISCOVER</Nav.Link>
          </Nav>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={10}>
          <Card className="p-3">
            <Card.Title>Rock Classics</Card.Title>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3">
              {songs.map((song) => {
                const isLiked = likedSongs.some((likedSong) => likedSong.id === song.id);

                return (
                  <Col key={song.id} sm={6} lg={3}>
                    <Card onClick={() => dispatch(selectSong(song))}>
                      <Card.Img variant="top" src={song.album.cover} />
                      <Card.Body>
                        <Card.Title>{song.title}</Card.Title>
                        <Card.Text>{song.artist.name}</Card.Text>
                        <div
                          onClick={() => {
                            if (isLiked) {
                              console.log(`Rimosso "${song.title}" dai mi piace`);
                              dispatch(removeLikeAction(song));
                            } else {
                              console.log(`Aggiunto "${song.title}" ai mi piace`);
                              dispatch(likeAction(song));
                            }
                          }}
                        >
                          {isLiked ? <HeartFill className="text-danger" /> : <Heart />}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default MainSection;
