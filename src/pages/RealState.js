import React from "react"
import { Layout } from "../components/Layout/Layout"
import image from "../images/hero.jpeg"
import "../styles/realState.scss"
import { Card } from "../components/Card/Card"
import { ArticleCard } from "../components/ArticleCard/ArticleCard"
import image1 from "../images/appartment1.jpg"
import image2 from "../images/appartment2.png"
import image3 from "../images/appartment3.jpeg"
import image4 from "../images/article1.jpg"
import image5 from "../images/article3.jpg"
import image6 from "../images/article2.png"
// import { graphql, useStaticQuery } from "gatsby"

const RealState = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allArticle {
  //       nodes {
  //         title
  //         image
  //         details
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <div className="rs-container">
        <img src={image} alt="hero image" className="hero-image" />
        <div className="main-container">
          <h2>Our Great Apartments</h2>
          <div className="card-container">
            <Card
              image={image1}
              price="$10,000"
              description="Great appartment"
              area="200m2"
            />
            <Card
              image={image2}
              price="$20,000"
              description="Great appartment"
              area="300m2"
            />
            <Card
              image={image3}
              price="$30,000"
              description="Great appartment"
              area="400m2"
            />
          </div>
          <div className="card-container">
            <Card
              image={image2}
              price="$10,000"
              description="Great appartment"
              area="200m2"
            />
            <Card
              image={image3}
              price="$20,000"
              description="Great appartment"
              area="300m2"
            />
            <Card
              image={image1}
              price="$30,000"
              description="Great appartment"
              area="400m2"
            />
          </div>
          <div>
            <h2>Our Great Articles</h2>
            <div className="article-container">
              <ArticleCard
                image={image4}
                title="First Article"
                details="A Great Article"
              />
              <ArticleCard
                image={image5}
                title="Second Article"
                details="A Great Article"
              />
            </div>
            <div className="article-container">
              <ArticleCard
                image={image6}
                title="Third Article"
                details="A Great Article"
              />
              <ArticleCard
                image={image4}
                title="Fourth Article"
                details="A Great Article"
              />
            </div>
            {/* <div className="article-container">
              {data.allArticle.nodes.map(item => (
                <ArticleCard
                  title={item.title}
                  details={item.details}
                  image={item.image}
                  key={item.title}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RealState
