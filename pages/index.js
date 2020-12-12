// pages/index.js
import ReactPlayer from 'react-player';


import Link from "next/link";
import Layout from "../components/Layout";
import styles from"../styles/index.module.scss";

const Index = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.show_hero}>
      <div className={styles.show_page}>
        <div className={styles.show_title}></div>
        <div className={styles.show_page_section}>
       <h4  className={styles.h4}>WATCH EPISODES</h4>
       <h1 className={styles.h1}>START WATCHING</h1>
       <div className={styles.show_video}>
       <ReactPlayer 
       width="100%"
       height="90%"
       url="https://vimeo.com/377121413" 
       controls
       playing
       />
       </div>
       <div className={styles.slug}>
       <h5 className={styles.slug_date}>S1E1|24/12/20</h5>
       <h7 className={styles.slug_title}>Time to Loosen up</h7>
       </div>  
      </div>
      </div>
      </div>
      <div className={styles.episodes_show}>
      <h1 className={styles.floatme}>Episodes</h1>
      <div className={styles.grid}>
      
          <a href="https://nextjs.org/docs" className={styles.card}>
          <img src="/b.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
          <img src="/a.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
          <img src="/c.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          
        </div>

      </div>
      <div className={styles.clips_show}>
      <h1 className={styles.floatme}>Clips</h1>
    
      <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
          <img src="/6.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
          <img src="/d.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
          <img src="/e.jpg" alt="pic one"width={290} height={150}/>
            <h3> S1E2 | 03/10/20</h3>
            <p>Find grip &rarr; </p>
          </a>

          
        </div>
      
      </div>
      <div className={styles.line}></div>
      <div className={styles.about_us}>
        <h1 className={styles.aboutus_h1}>About Us</h1>
        <span className={styles.about_img}>
        <img src="/title.png" alt="title"width={400} height={300}/>
        </span>
        <p className={styles.about_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor and vitality, so that the labor and sorrow, some important things to do eiusmod. Stress sometimes it passes the main players which facilitates free. This bed is, therefore, venenatis a nibh nisl interdum a augue condimentum id. Dui Textile Textile lot of pot. Each one had to smile varied in diameter than either element. Chili will not be easy vegetarian or ecological element is present. Bananas now pull him drink it. Consectetur adipiscing elit sagittis purus each one it is. Do not bow until he ultrices tincidunt interdum velit laoreet id. Nam therefore now free photography sometimes varied a lot. The lion and the ecological need ullamcorper nulla. Hendrerit gravida makeup, Whosoever shall not. Developers scent like a football graduated a lot of real estate. Libero ante ullamcorper website link, but the football around.

Nor do some shooting movies sapien malesuada bibendum. Dui blandit massa that is not even now, not now. With my bow and hatred in order to sem Nulla. Arizona law enforcement need a whole bananas nibh present. So sad and drink recipes. Nulla soccer season targeted layer carrots pot. In basketball largest peanut running ugly. Proin sagittis nisl rhoncus eleifend quam adipiscing vitae. In time to come, please get a sed felis eget nibh venenatis. Some do so either by the court of the mass of nulla porttitor.</p>

      </div>
    </div>
  </Layout>
);

export default Index;