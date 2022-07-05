import React, { useState } from "react"
import axios from "axios"

import { Container, Row, Col, Ratio } from "react-bootstrap"
import {
  videoThumbnail,
  otherVideos,
  youtubeBtn,
  youtubeParagraph,
  playlistColumn,
} from "../styles/mycontent.module.css"

export default function Youtube() {
  const [videoData, setVideoData] = useState({ ready: false })
  const [videoId, setVideoId] = useState("2uCF2H_KLEI")

  function handleResponse(response) {
    setVideoData({
      ready: true,
      items: response.data.items,
    })
  }

  function search() {
    let apiKey = "AIzaSyDIjG75y8qSniz3JwwkkJ4y3ZpJplPWlkE"
    let apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAMpvoRlymrtyHFdT0G3vHA&order=date&key=${apiKey}`

    axios.get(apiUrl).then(handleResponse)
  }

  if (videoData.ready) {
    return (
      <div className="Youtube">
        <Container fluid>
          <Row>
            <Col>
              <Ratio aspectRatio="16x9">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Ratio>
              <h4>Cheap Coffee Channel</h4>
              <p className={youtubeParagraph}>
                The green coffee value chain is broken. Cheap Coffee provides a
                broad explanation of the economics, mechanics, and power
                structures that define the industry today.
              </p>
              <a
                className={youtubeBtn}
                href="https://www.youtube.com/c/CedroAltoCoffee"
                target="_blank"
                rel="noreferrer"
              >
                Subscribe
              </a>
            </Col>
            <Col className={playlistColumn}>
              {videoData.items.map(function (item) {
                return (
                  <div
                    role="button"
                    tabIndex="0"
                    className={otherVideos}
                    key={item.id.videoId}
                    onClick={() => setVideoId(item.id.videoId)}
                  >
                    <img
                      className={videoThumbnail}
                      src={item.snippet.thumbnails.default.url}
                      alt="video"
                    />
                    <div>
                      <h5>{item.snippet.title}</h5>
                      <p>{item.snippet.description}</p>
                    </div>
                  </div>
                )
              })}
            </Col>
          </Row>
        </Container>
      </div>
    )
  } else {
    search()
    return "Loading..."
  }
}
