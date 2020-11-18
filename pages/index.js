import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import News from '../components/News';
const Index = (props)=>(
    <Layout> <br/>
    <div>
        <h1>ABC News</h1>
        <News articles={props.articles}/>
    </div></Layout>
)
Index.getInitialProps = async function(){
    const res = await fetch(
        'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d270d55ff3a548b7a6d654fa84a47124&format=json')
    const data = await res.json();
    return{
        articles : data
    }
}
export default Index;