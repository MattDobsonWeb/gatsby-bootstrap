import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogRoll = () => (
  <StaticQuery
    query={graphql`
      query PostQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              featuredpost: { eq: true }
            }
          }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                description
                date(formatString: "MMMM DD, YYYY")
                fromNow: date(fromNow: true)
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className="featured-posts no-padding-top">
          <div className="container">
            {data.allMarkdownRemark.edges.map(({ node }, i) => {
              return i % 2 == 0 ? (
                <div key={node.id} className="row d-flex align-items-stretch">
                  <div className="text col-lg-7">
                    <div className="text-inner d-flex align-items-center">
                      <div className="content">
                        <header className="post-header">
                          <div className="category">
                            {node.frontmatter.tags.map(tag => (
                              <Link to={`/tags/${tag}`}>{tag}</Link>
                            ))}
                          </div>
                          <Link to={node.fields.slug}>
                            <h2 className="h4">{node.frontmatter.title}</h2>
                          </Link>
                        </header>
                        <p>{node.frontmatter.description}</p>
                        <footer className="post-footer d-flex align-items-center">
                          <a
                            href="#"
                            className="author d-flex align-items-center flex-wrap"
                          >
                            <div className="avatar">
                              <img
                                src="img/avatar-1.jpg"
                                alt="..."
                                className="img-fluid"
                              />
                            </div>
                            <div className="title">
                              <span>John Doe</span>
                            </div>
                          </a>
                          <div className="date">
                            <i className="icon-clock"></i>{' '}
                            {node.frontmatter.fromNow}
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                  <div className="image col-lg-5">
                    <Img
                      fluid={
                        node.frontmatter.featuredimage.childImageSharp.fluid
                      }
                    />
                  </div>
                </div>
              ) : (
                <div key={node.id} className="row d-flex align-items-stretch">
                  <div className="image col-lg-5">
                    <Img
                      fluid={
                        node.frontmatter.featuredimage.childImageSharp.fluid
                      }
                    />
                  </div>
                  <div className="text col-lg-7">
                    <div className="text-inner d-flex align-items-center">
                      <div className="content">
                        <header className="post-header">
                          <div className="category">
                            {node.frontmatter.tags.map(tag => (
                              <Link to={`/tags/${tag}`}>{tag}</Link>
                            ))}
                          </div>
                          <Link to={node.fields.slug}>
                            <h2 className="h4">{node.frontmatter.title}</h2>
                          </Link>
                        </header>
                        <p>{node.frontmatter.description}</p>
                        <footer className="post-footer d-flex align-items-center">
                          <a
                            href="#"
                            className="author d-flex align-items-center flex-wrap"
                          >
                            <div className="avatar">
                              <img
                                src="img/avatar-1.jpg"
                                alt="..."
                                className="img-fluid"
                              />
                            </div>
                            <div className="title">
                              <span>John Doe</span>
                            </div>
                          </a>
                          <div className="date">
                            <i className="icon-clock"></i>{' '}
                            {node.frontmatter.fromNow}
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      );
    }}
  />
);

export default BlogRoll;
