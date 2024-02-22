import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import './BlogPost.css';

const client = sanityClient({
  projectId: 'o69x3ncj',
  dataset: 'production',
  useCdn: false, // Set to false to ensure fresh data
});

function BlogPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && title == "blog1"][0]{
          title,
          slug,
          author->{
            name,
          },
          mainImage,
          categories[]->{
            title,
          },
          publishedAt,
          body[]{
            ...,
            _type == 'reference' => @->,
          },
        }`;

        const data = await client.fetch(query);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='content'>
        {/* <h1 >{post.title}</h1> */}
        <h1>Choosing the Title of the Post</h1>
        <p>
          Author: {post.author.name} Published At: {post.publishedAt}
        </p>
        <img src='https://via.placeholder.com/' alt='Blog Post' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit
          magna. Suspendisse potenti. Ut vel justo eu nunc placerat gravida. Sed
          at orci neque. Cras euismod suscipit lacus, nec consectetur elit
          feugiat non. Maecenas vel lectus in quam sollicitudin ultrices sed non
          dui. Integer nec turpis non mauris faucibus lacinia. Quisque euismod
          viverra purus. Nullam eu condimentum metus. Vivamus ultrices turpis
          velit, a faucibus metus posuere vel.
        </p>

        <img src='https://via.placeholder.com/200x100' alt='Blog Post' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit
          magna. Suspendisse potenti. Ut vel justo eu nunc placerat gravida. Sed
          at orci neque. Cras euismod suscipit lacus, nec consectetur elit
          feugiat non. Maecenas vel lectus in quam sollicitudin ultrices sed non
          dui. Integer nec turpis non mauris faucibus lacinia. Quisque euismod
          viverra purus. Nullam eu condimentum metus. Vivamus ultrices turpis
          velit, a faucibus metus posuere vel.
        </p>
      </div>
    </>
  );
}

export default BlogPost;
