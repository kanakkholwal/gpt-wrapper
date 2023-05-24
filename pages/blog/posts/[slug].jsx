import axios from "axios";
import Head from "next/head";
import { NavBar, PostPageHero, Article, Wrapper, SideBar } from "components/blog";
import { useEffect } from "react";
export async function getStaticPaths() {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/all`);

  const paths = response?.data?.posts?.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/${params.slug}`);

  if (!response?.data?.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response?.data?.post,
    },
    revalidate: 10, // Revalidate the page every 10 seconds
  };
}

export default function Post({ post }) {
  useEffect(() =>{
    const addView = async() =>{
      await axios.post("/api/pages",{
        slug:post.slug,
        type:"article",
        name:post.title,
        increase:["view"]
        })
        .then(({data}) =>{
          console.log(data.message);
        })
        .catch((error) =>{
          console.log(error);
        })
    }
    addView()

  },[])
  return (
    <>
      <Head>
        {/* COMMON TAGS */}
        <meta charSet="utf-8" />
        <title>{post.title}</title>
        {/* Search Engine */}
        <meta name="description" content={post.description} />
        <meta name="image" content={post.image} />
        {/* Schema.org for Google */}
        <meta itemProp="name" content={post.title} />
        <meta itemProp="description" content={post.description} />
        <meta itemProp="image" content={post.image} />
        {/* Open Graph general (Facebook, Pinterest & LinkedIn) */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={"https://kkupgrader.eu.org/blog/posts/" + post.slug} />
        <meta property="og:site_name" content="K K UPGRADER" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.description} />
        <meta property="twitter:image:src" content={post.image} />


      </Head>
      <NavBar />
      <PostPageHero title={post.title} description={post.description} />
      <Wrapper>
        <Article post={post} />
        <SideBar post={post} />
      </Wrapper>
    </>
  );
}
