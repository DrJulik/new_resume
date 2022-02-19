import styles from '../../styles/Home.module.css'
import {useEffect, useState} from 'react'

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const [scrolling, setScrolling] = useState(false)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        setTimeout(() => setOpacity(0.8) ,2000)
    },[])

    useEffect(() => {
        const onScroll = (e:any) => {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return (
        <div className="mouse_scroll" style={{opacity:opacity}}>

		<div className="mouse">
			<div className="wheel"></div>
		</div>
		<div>
			<span className="m_scroll_arrows unu"></span>
			<span className="m_scroll_arrows doi"></span>
			<span className="m_scroll_arrows trei"></span>
		</div>
</div>
    )
}

export default ScrollIndicator
