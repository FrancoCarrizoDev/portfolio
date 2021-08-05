import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.scss";
import avatar from "../assets/images/cartoon.png";
import react from "../assets/images/logos/atomic-structure.svg";
import node from "../assets/images/logos/nodejs.svg";
import js from "../assets/images/logos/javascript.svg";
import sass from "../assets/images/logos/sass.svg";
import sql from "../assets/images/logos/sql-server.svg";
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className="main__bottom__background">
        <div className="main__wrapper container triangulo-equilatero-bottom-left">
          <div className="">
            <h1 className="text-center">Full-Stack Developer & Tutor</h1>
            <h4 className="text-center">
              I analyze, code and solve problems in the development world
            </h4>
            <div className="mt-5 mx-auto main__logos__container">
              <img src={js} alt="" />
              <img src={sass} alt="" />
              <img src={react} alt="" id="react" />
              <img src={node} alt="" />
              <img src={sql} alt="" />
            </div>
            {/* <ArticlesComponent articles={data.allStrapiArticle.edges} /> */}
          </div>
        </div>
        <div className="main__avatar__container">
          <img src={avatar} alt="foto de avatar" className="avatar" />
        </div>
        <div className="main__myDescription__container">
          <div>
            <h3 className="text-center ">Hi, I’m Matt. Nice to meet you.</h3>
            <p className="text-center">
              Since beginning my journey as a freelance designer nearly 10 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
