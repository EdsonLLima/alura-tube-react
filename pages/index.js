import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

// console.log(config.playlists);
function HomePage() {
  const estiloDaHomePage = {
    // backgroundColor: "red"
  };
  return (
    <>
      <CSSReset />
      <div style={estiloDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

const StyleHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top:50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px:
  }
`;
function Header() {
  return (
    <StyleHeader>
      {/* <img src="banner" alt="" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="Edson Lima" />
        <div>
          <h2>{config.name} </h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyleHeader>
  );
}

function Timeline(props) {
  // console.log("Dentro do componente", props);
  const playlistNames = Object.keys(props.playlists);
  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} alt="" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
