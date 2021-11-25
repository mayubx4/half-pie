import './App.css';
import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';

function App() {
  const chartDom = useRef()
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(100)
  useEffect(() => {
    if (chartDom) {
      const myChart = echarts.init(chartDom.current)
      const option = {
        tooltip: {
          trigger: 'item'
        },

        series: [
          {
            name: 'half pie',
            type: 'pie',
            radius: ['100%', '0%'],
            center: ['50%', '100%'],
            startAngle: 180-start,
            endAngle: 360,
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: end, name: '' },
              { value: 100, name: '' }
            ]
          }
        ]
      };
      option && myChart.setOption(option)
    }
  }, [chartDom, start, end])

  const handleStart = (v) => {
    setStart(+v + 1.8)
  }
  const handleEnd = (v) => {
    setEnd(+v + 1.8-start)
  }
  return (
    <div className="App">
      <div id="main" ref={chartDom} style={{ width: "100%", height: "500px" }}>

      </div>
      <div>
        start
        <input type="number"
          onChange={(e) => {
            handleStart(e.target.value)
          }} />
      </div>
      <div>
        end
        <input type="number"
          onChange={(e) => {
            handleEnd(e.target.value)
          }} />
      </div>
    </div>
  );
}

export default App;
