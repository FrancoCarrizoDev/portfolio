import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.scss";

import { Presentation } from "../components/presentation";
import { Skills } from "../components/skills";
import { Experience } from "../components/experience";
import { Footer } from "../components/footer";

import { Projects } from "../components/projects";
import { Prefooter } from "../components/prefooter";
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <Presentation />
      <Skills />
      <Experience />
      <hr />
      <Projects />
      <Prefooter />
      <Footer />
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
