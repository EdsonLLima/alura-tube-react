import React from "react";
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
  const [valorDoFiltro, setValorDaFiltro] = React.useState("");
  return (
    <>
      <CSSReset />
      <div style={estiloDaHomePage}>
        {/* Prop Drilling */}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDaFiltro={setValorDaFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
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
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px:
  }
`;

const StyleBanner = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"); */
  /* background-image: url(${config["bg-image"]}); */
  background-image: url(${({ bg }) => bg});
  background-color: blue;
  height: 430px;
`;
function Header() {
  return (
    <StyleHeader>
      <StyleBanner bg={config["bg-image"]} />
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

function Timeline({ searchValue, ...props }) {
  // console.log("Dentro do componente", props);
  const playlistNames = Object.keys(props.playlists);
  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalize = video.title.toLowerCase();
                  const searchValueNormalize = searchValue.toLowerCase();
                  return titleNormalize.includes(searchValueNormalize);
                })
                .map((video) => {
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
