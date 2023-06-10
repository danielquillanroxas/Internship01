import BaseChart from '../MotherClass';

export default class BarChart extends BaseChart {
  constructor() {
    super();
    this.option = {
      title: {
        text: '',
        subtext: '',
        left:'center'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      // legend: {
      //   show: 'false'
      // },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
  }
}
