import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeedMenu() {
  return (
    <Nav style={{ position: "sticky" }}>
      <Nav.Item>
        <Nav.Link as={Link} to="/feed">
          팔로워
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/feed">
          내가 좋아요한 게시물
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/feed">
          내가 업로드한 게시물
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FeedMenu;
