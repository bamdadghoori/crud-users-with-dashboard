import Users from "./pagination/users";
import SearchBox from "./searchbox";
import UserCreator from "./userCreator";
import { Outlet } from 'react-router-dom';
import UserDetails from './userDetails';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'nuka-carousel';
import 'chart.js/auto';
import { Bubble, Chart } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import SimpleImageSlider from "react-simple-image-slider";
const Home = (props) => {
  const images=[
    {url:"https://picsum.photos/200"},
    {url:"https://picsum.photos/200"},
    {url:"https://picsum.photos/200"},
    {url:"https://picsum.photos/200"},
    {url:"https://picsum.photos/200"},
  ]
 
    const chartData={ 
      labels: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر"],
      datasets: [
        {
          label: "First dataset",
          data: [33, 53, 85, 41, 44, 65,52],
          fill: true,
          backgroundColor: "green",
          borderColor: "rgba(75,192,192,1)"
        },]
  }
  const chartDataBubble={ 
    labels: ["فروردین","اردیبهشت"],
    datasets: [
      {
        label: "First dataset",
        data: [{x: 3, y:4, r:12},{x: 3, y:4, r:10}],
        // fill: true,
        backgroundColor: ["green","blue","cyan","orange","red","yellow","brown"],
        borderColor: "rgba(75,192,192,1)"
      },]
}
  const chartDataPie={ 
    labels: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65,52],
        fill: true,
        backgroundColor: ["green","blue","cyan","orange","red","yellow","brown"],
        borderColor: ["green","blue","cyan","orange","red","yellow","brown"],
       
      },]
}
   const options={
    //  labels:{
    //    display:true,
       
    //  },
    //  label:{
    //   display:true,
      
    // },
    // // legend ghesmat shatranji va mehvar mokhtasat hast
    // // legend:{
    // //   display:true,
    // // },
    // title:{
    //   display:true
    // },
    //   responsive: true,
    //   maintainAspectRatio: true,
     
   }
    return ( 
        <>
        {console.log(chartData)}
           {/* use outlet to have semi-spa website. outlet send child route from parent(app.js) to child  */}
       <Outlet/>
      
        <div className="container">
    <div className="crud-title">Crud Users</div>
   <div className="row">

  <SearchBox  HandleSearch={props.HandleSearch}/>
    
    <div className="source-code">To see the source code:<a href="https://github.com/bamdadghoori/crud-users-react-redux">https://github.com/bamdadghoori/crud-users-react-redux</a></div>
    
   
     <UserCreator/>
   
    
  
    </div>
    <Users Items={props.Items} SearchText={props.SearchText} ResetSearch={props.ResetSearch}/>
      {/* <SimpleImageSlider
        width={400}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={4}
        // onClickNav={{
        //   toRight:false
        // }}
      /> */}
        {/* <Carousel width="50%" autoPlay={true} infiniteLoop={true} interval="4000">
                <div>
                    <img src="https://picsum.photos/200" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://picsum.photos/200" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://picsum.photos/200" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            
      <Carousel width="400px"nextButtonText="fsafds" autoplayInterval={3000} wrapAround={true} autoplay={true} renderCenterLeftControls={({ previousSlide }) => (
    <button onClick={previousSlide} >
      <i className="fa fa-arrow-left" />
    </button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button onClick={nextSlide}>
      <i className="fa fa-arrow-right"/>
    </button>
  )}>
                <div>
                    <img src="../../logo192.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../logo192.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../../logo192.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  </div> 
  <div className="chart-container">
  <Chart type="line" data={chartData} options={options} />
     {/* <span>نمودار دایره ای</span> */}
  <Chart type="pie" data={chartDataPie} options={options} />
   <Chart type="doughnut" data={chartDataPie} options={options} />
   {/* <Chart type="" data={chartDataPie} options={options} /> */}
   <Bubble data={chartDataBubble} options={options}/>
   <Chart type="bar" data={chartData} options={options}/>
  </div>
  </>);
}
 
export default Home;