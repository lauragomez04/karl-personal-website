import React, { useState } from "react"
import axios from "axios"

import { Container, Row, Col } from "react-bootstrap"

import { videoThumbnail, otherVideos } from "../styles/mycontent.module.css"

export default function Youtube() {
  const [videoData, setVideoData] = useState({ ready: false })

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
        <Container>
          <Row>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2uCF2H_KLEI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
            <Col>
              {videoData.items.map(function (item, index) {
                return (
                  <div className={otherVideos} key={index}>
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
