import { useDispatch,useSelector } from 'react-redux';
import { Chart } from 'react-chartjs-2';
const Charts = () => {
    const state=useSelector(state=>state.users)
    const label=state.map((element)=>element.first_name)
    const data=state.map((element)=>element.id)
    const chartData={ 
        labels: label,
        datasets: [
          {
            label: "First dataset",
            data: data,
            fill: true,
            backgroundColor: "green",
            borderColor: "rgba(75,192,192,1)"
          },]
    }
    const chartDataPie={ 
        labels: label,
        datasets: [
          {
            label: "First dataset",
            data: data,
            fill: true,
            backgroundColor: ["green","blue","cyan","orange","red","yellow","brown"],
            borderColor: "rgba(75,192,192,1)",
           
          },]
    }
    return (
        <>
        {console.log(label)}
        <h1>charts</h1> 
        <div className="chart-container">
        <Chart type="line" data={chartData}/>
        <Chart type="pie" data={chartDataPie}/>
        </div>
      
        </>);
}
 
export default Charts;