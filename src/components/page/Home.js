import p1 from '../../image/1.png'
import p2 from '../../image/2.png'
import p3 from '../../image/3.png'
import p4 from '../../image/4.png'
import './Home.css'

const Home = () => {
  return (
    <div className='img-container'>
        <img src={p1} alt='p1' />
        <img src={p2} alt='p2' />
        <img src={p3} alt='p3' />
        <img src={p4} alt='p4' />
    </div>
  )
}

export default Home