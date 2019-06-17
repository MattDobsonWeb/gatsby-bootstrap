import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);

  return (
    <Layout>
      <div class="container">
        <div class="row">
          <main class="post blog-post col-lg-8">
            <div class="container">
              <div class="post-single">
                <div class="post-thumbnail">
                  <Img
                    fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                    alt=""
                  />
                </div>
                <div class="post-details">
                  <div class="post-meta d-flex justify-content-between">
                    <div class="category">
                      {post.frontmatter.tags.map(tag => (
                        <Link to={`/tags/${tag}`}>{tag}</Link>
                      ))}
                    </div>
                  </div>
                  <h1>
                    {post.frontmatter.title}
                    <a href="#">
                      <i class="fa fa-bookmark-o"></i>
                    </a>
                  </h1>
                  <div class="post-footer d-flex align-items-center flex-column flex-sm-row">
                    <a
                      href="#"
                      class="author d-flex align-items-center flex-wrap"
                    >
                      <div class="avatar">
                        <img
                          src="img/avatar-1.jpg"
                          alt="..."
                          class="img-fluid"
                        />
                      </div>
                      <div class="title">
                        <span>Matt Dobson</span>
                      </div>
                    </a>
                    <div class="d-flex align-items-center flex-wrap">
                      <div class="date">
                        <i class="icon-clock"></i> {post.frontmatter.date}
                      </div>
                      {/* <div class="views">
                        <i class="icon-eye"></i> 500
                      </div> */}
                    </div>
                  </div>
                  <div
                    class="post-body"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  ></div>
                  <div class="post-tags">
                    {post.frontmatter.tags.map(tag => (
                      <Link to={`/tags/${tag}`} className="tag">
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div class="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
                    <a
                      href="#"
                      class="prev-post text-left d-flex align-items-center"
                    >
                      <div class="icon prev">
                        <i class="fa fa-angle-left"></i>
                      </div>
                      <div class="text">
                        <strong class="text-primary">Previous Post </strong>
                        <h6>I Bought a Wedding Dress.</h6>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="next-post text-right d-flex align-items-center justify-content-end"
                    >
                      <div class="text">
                        <strong class="text-primary">Next Post </strong>
                        <h6>I Bought a Wedding Dress.</h6>
                      </div>
                      <div class="icon next">
                        <i class="fa fa-angle-right"> </i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside class="col-lg-4">
            <div class="widget search">
              <header>
                <h3 class="h6">Search the blog</h3>
              </header>
              <form action="#" class="search-form">
                <div class="form-group">
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" class="submit">
                    <i class="icon-search"></i>
                  </button>
                </div>
              </form>
            </div>

            <div class="widget latest-posts">
              <header>
                <h3 class="h6">Latest Posts</h3>
              </header>
              <div class="blog-posts">
                <a href="#">
                  <div class="item d-flex align-items-center">
                    <div class="image">
                      <img
                        src={post.frontmatter.featuredimage.image}
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="title">
                      <strong>Alberto Savoia Can Teach You About</strong>
                      <div class="d-flex align-items-center">
                        <div class="views">
                          <i class="icon-eye"></i> 500
                        </div>
                        <div class="comments">
                          <i class="icon-comment"></i>12
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="item d-flex align-items-center">
                    <div class="image">
                      <img
                        src="img/small-thumbnail-2.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="title">
                      <strong>Alberto Savoia Can Teach You About</strong>
                      <div class="d-flex align-items-center">
                        <div class="views">
                          <i class="icon-eye"></i> 500
                        </div>
                        <div class="comments">
                          <i class="icon-comment"></i>12
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="item d-flex align-items-center">
                    <div class="image">
                      <img
                        src="img/small-thumbnail-3.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="title">
                      <strong>Alberto Savoia Can Teach You About</strong>
                      <div class="d-flex align-items-center">
                        <div class="views">
                          <i class="icon-eye"></i> 500
                        </div>
                        <div class="comments">
                          <i class="icon-comment"></i>12
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="widget categories">
              <header>
                <h3 class="h6">Categories</h3>
              </header>
              <div class="item d-flex justify-content-between">
                <a href="#">Growth</a>
                <span>12</span>
              </div>
              <div class="item d-flex justify-content-between">
                <a href="#">Local</a>
                <span>25</span>
              </div>
              <div class="item d-flex justify-content-between">
                <a href="#">Sales</a>
                <span>8</span>
              </div>
              <div class="item d-flex justify-content-between">
                <a href="#">Tips</a>
                <span>17</span>
              </div>
              <div class="item d-flex justify-content-between">
                <a href="#">Local</a>
                <span>25</span>
              </div>
            </div>

            <div class="widget tags">
              <header>
                <h3 class="h6">Tags</h3>
              </header>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#" class="tag">
                    #Business
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="tag">
                    #Technology
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="tag">
                    #Fashion
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="tag">
                    #Sports
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="tag">
                    #Economy
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
