// pages/index.js
import ReactPlayer from 'react-player';
import fetch from "isomorphic-fetch";

import Head from 'next/head';
import Link from "next/link";

//data
import { getAllPosts } from '../lib/api';
import Layout from "../components/Layout";
import styles from"../styles/index.module.scss";

const Index = ({allPosts:{ edges } }) => (
  <Layout>
    <div className={styles.container}>

    <div className={styles.show_hero}>
      <div className={styles.show_page}>
        <div className={styles.show_title}></div>
        <p className={styles.h4}>WATCH EPISODES</p>
        <div className={styles.show_page_section}>
       

       <div className={styles.video_outer}>
       <h1 className={styles.h1}>START WATCHING</h1>
       <div className={styles.show_video}>
       <ReactPlayer 
       width="100%"
       height="90%"
       url="https://vimeo.com/377121413" 
       controls
       //playing
       />
       </div>
       <div className={styles.slug}>
       <h5 className={styles.slug_date}>S1E1|24/12/20</h5>
       <h7 className={styles.slug_title}>Time to Loosen up</h7>
       </div>  
       </div>
      </div>
      </div>
      </div>
      
    <div className={styles.episodes}>
    <h1 className={styles.floatme}>Episodes</h1>
    <div className={styles.grid}>
        {edges.map(({ node }) => (
        <div className={styles.card} key={node.id}>
          <div className={styles.listitem_thumbnail}>    
          </div>
          <div className={styles.listitem__content}>
        
       
        <div className={styles.episode_video}>
        <ReactPlayer className={styles.react_player}
        width="100%"
        height="100%"
       url={node.extraPostInfo.videoLin.url} 
       controls
       //playing
       />
       </div>
       
       
       <p className={styles.description}>{node.extraPostInfo.description} &nbsp; &nbsp; {node.extraPostInfo.customdate}</p>
       <p>{node.title}</p>
      </div>
    </div>
      ))}
    </div>
    </div>
    
    <div className={styles.clips_show}>
      <h1 className={styles.floatme}>Clips</h1>
    
      <div className={styles.grid}>
          <a href="https://nextjs.org/ds" className={styles.card}>
          <img class={styles.clips_img}src="/6.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/ds" className={styles.card}>
          <img class={styles.clips_img} src="/d.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/ds" className={styles.card}>
          <img class={styles.clips_img} src="/e.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          
        </div>
      
      </div>

      <div className={styles.line}></div>
      <div className={styles.about_us}>
        <h1 className={styles.aboutus_h1}>About Us</h1>
        <span className={styles.about_img}>
        <img className={styles.img}src="/title.png" alt="title"/>
        </span>
        <p className={styles.about_content}>Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed tempor and vitality,
          so that the labor and sorrow, some important things to do eiusmod.
           Stress sometimes it passes the main players which facilitates free. 
           This bed is, therefore, id.
             Chili will not be easy vegetarian or ecological element is present.
              Bananas now pull him drink it. 
               Do not bow until he ultrices tincidunt interdum velit laoreet id. 
               hole bananas nibh present. So sad and drink recipes. </p>

      </div>

    </div>
  </Layout>
);

export default Index;

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}
