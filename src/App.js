import React , {useRef, useState} from 'react';
import styles from  './App.module.css';
import user1 from './old/user1.png'
import user2 from './old/user2.png'
import user3 from './old/user3.png'
import user4 from './old/user4.png'
const App=()=> {
  const slide = useRef(null);
  const [ActiveList, setActiveList] = useState('one')

  const shift=(transform, active)=>{
    slide.current.style.transform = transform
    setActiveList(active)
  }
  return (
    <div className={styles.hero}>
      <h1>Testimonials</h1>
      <div className={styles.container}>
        <div className={styles.indicator}>
        <span className={[styles.btn,  ActiveList === 'one' ? styles.active: ''].join(' ')} onClick={()=>shift("translateX(0px)", "one")}></span>
          <span className={[styles.btn,  ActiveList === 'two' ? styles.active: ''].join(' ')} onClick={()=>shift("translateX(-800px)", "two")}></span>
          <span className={[styles.btn,  ActiveList === 'three' ? styles.active: ''].join(' ')} onClick={()=>shift("translateX(-1600px)", "three")}></span>
          <span className={[styles.btn,  ActiveList === 'four' ? styles.active: ''].join(' ')} onClick={()=>shift("translateX(-2400px)", "four")}></span>
         </div>

        <div className={styles.testimonial}>
          <div className={styles.row} ref={slide}>
            <div className={styles.col}>
            <div className={styles.card}>
                 <p>Sarah Samona is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.</p>
                 <h3>Sarah</h3>
                 <p>Zara Inc.</p>
             </div>
             <div className={styles.pic}>
                 <img src={user1} />
             </div>
            </div>

            <div className={styles.col}>
            <div className={styles.card}>
                 <p>Sarah Samona is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.</p>
                 <h3>Sarah</h3>
                 <p>Zara Inc.</p>
             </div>
             <div className={styles.pic}>
                 <img src={user2} />
             </div>
            </div>

            <div className={styles.col}>
            <div className={styles.card}>
                 <p>Sarah Samona is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.</p>
                 <h3>Sarah</h3>
                 <p>Zara Inc.</p>
             </div>
             <div className={styles.pic}>
                 <img src={user3} />
             </div>
            </div>

            <div className={styles.col}>
            <div className={styles.card}>
                 <p>Sarah Samona is an American internet entrepreneur and media proprietor, and investor. She is the founder of the multi-national technology company Zara.</p>
                 <h3>Sarah</h3>
                 <p>Zara Inc.</p>
             </div>
             <div className={styles.pic}>
                 <img src={user4} />
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
