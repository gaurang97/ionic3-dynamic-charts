import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('radarCanvas') radarCanvas;
  @ViewChild('polarCanvas') polarCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('bubbleCanvas') bubbleCanvas;
  @ViewChild('mixedCanvas') mixedCanvas;
 
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  radarChart: any;
  polarAreaChart: any;
  pieChart: any;
  bubbleChart: any;
  mixedChart: any;
  data1=""
  data2=""
  data3=""
  data4=""
  data5=""
  data6=""
  data7=""
 
  constructor(public navCtrl: NavController) {
    
      
    }

  
 
  ionViewDidLoad() {
     console.log('ionViewDidLoad ChartJsPage');
    this.barChart = setInterval(()=>{this.getBarChart();},5000)
    this.doughnutChart =setInterval(()=>{this.getDoughnutChart();},5000);
    this.lineChart = setInterval(()=>{this.getLineChart();},5000);
    this.radarChart = setInterval(()=>{this.getRadarChart();},5000);
    this.pieChart = setInterval(()=>{this.getPieChart();},5000);
    this.polarAreaChart = setInterval(()=>{this.getPolarAreaChart();},5000);
    this.bubbleChart = setInterval(()=>{this.getBubbleChart();},5000);
    this.mixedChart = setInterval(()=>{this.getMixedChart();},5000);

  }
 
  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      type: chartType,
      data: data,
      options: options
    });
  }
 
  
  getBarChart() {
    let data = {
      labels: ["Jaipur", "Delhi", "Kota", "Ajmer", "Alwar", "Udaipur", "Mumbai"],
      datasets: [{
        label: '# of Accidents',
        data: [this.data1, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(244, 164, 96, 0.8)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(244, 164, 96, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };
 
    let options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
 
    return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
  }
  
  getDoughnutChart() {
    let data = {
      labels: ["Jaipur", "Ajmer", "Kota", "Delhi", "Alwar", "Udaipur", "Mumbai"],
      datasets: [{
        label: '# of Accidents',
        data: [5, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(244, 164, 96, 0.8)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        hoverBackgroundColor: ["#FF6384", "#551a8b", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
      }]
    };
 
    return this.getChart(this.doughnutCanvas.nativeElement, "doughnut", data);
  }
  
  getLineChart() {
    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
      datasets: [
        {
          label: "Initial Dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.data1, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7],
          spanGaps: false,
        },
        {
          label: "Final Dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(175,92,192,0.4)",
          borderColor: "rgba(31,156,156,1)",
          borderCapStyle: 'butt',
          borderDash: [5, 8],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(31,156,156,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(31,156,156,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.data1, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7],
          spanGaps: false,
        }
      ]
    };
 
    return this.getChart(this.lineCanvas.nativeElement, "line", data);
  }
  
  getRadarChart() {
    let data = {
      labels: ["Jaipur", "Delhi", "Ajmer", "Kota", "Alwar", "Udaipur", "Mumbai"],
      datasets: [
        {
          label: "Initial Dataset",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [this.data1, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7]
        },
        {
          label: "Final Dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [this.data1, this.data2, this.data3, this.data4, this.data5, this.data6, this.data7]
        }
      ]
    };
 
    let options = {
      scale: {
        reverse: true,
        ticks: {
          beginAtZero: true
        }
      }
    };
 
    return this.getChart(this.radarCanvas.nativeElement, "radar", data, options);
  }
  
  getPolarAreaChart() {
    let data = {
      datasets: [{
        data: [this.data1, this.data2, this.data3, this.data4, this.data5],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
        label: 'Current Dataset'
      }],
      labels: ["Jaipur", "Ajmer", "Delhi", "Alwar", "Kota"]
    };
 
    let options = {
      elements: {
        arc: {
          borderColor: "#000000"
        }
      }
    };
 
    return this.getChart(this.polarCanvas.nativeElement, "polarArea", data, options);
  }
  
  getPieChart() {
    let data = {
      labels: ["Jaipur", "Kota", "Delhi"],
      datasets: [
        {
          data: [this.data1, this.data2, this.data3],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };
 
    return this.getChart(this.pieCanvas.nativeElement, "pie", data);
 
  }
  
  getBubbleChart() {
    let data = {
      datasets: [
        {
          label: 'Initial Dataset',
          data: [
            { x: this.data1, y: this.data2, r:this.data3 },
            {x: this.data1, y: this.data2, r:this.data3  },
          ],
          backgroundColor: "#FF6384",
          hoverBackgroundColor: "#FF6384",
        }]
    };
 
    let options = {
      elements: {
        points: {
          borderWidth: 1,
          borderColor: 'rgb(0, 0, 0)'
        }
      }
    };
 
    return this.getChart(this.bubbleCanvas.nativeElement, "bubble", data, options);
  }
  
  getMixedChart() {
    let data = {
      labels: ['Item 1', 'Item 2', 'Item 3'],
      datasets: [
        {
          type: 'bar',
          label: 'Bar Component',
          data: [this.data1,this.data2,this.data3 ],
          backgroundColor: "#F5DEB3"
        },
        {
          type: 'line',
          label: 'Line Component',
          data: [30, 20, 10],
          backgroundColor: "#F5DEB3"
        }
      ]
    };
 
    return this.getChart(this.mixedCanvas.nativeElement, "bar", data);
 
  }  
  dataf2(m){
    this.data2=m;
  }
  
 }