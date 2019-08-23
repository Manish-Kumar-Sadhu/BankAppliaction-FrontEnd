import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';
  doughnut: any;
  line: any;
  constructor() { }

  ngOnInit() {
    // doughnut chart
    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: ''
        },legend: {
					position: 'bottom',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,35,25,5],
					backgroundColor: ["#EB5757","#FFD200","#cbb4d4","#0ED2F7"],
					label: 'Account Types'
				}],
				labels: ['Savings','Current','Fixed Deposits','Recurring Deposits']
			}
    })


    this.line =  new Chart('line',{
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: '',
        },legend: {
					position: 'bottom',
				},animation: {
					animateScale: true,
					animateRotate: true
        },
        fill: false
      },
      data: {
				datasets: [{
					data: [2430, 1560, 3650, 2300, 1560, 2650, 3560, 5403 ,  4043, 2556, 5165, 6900],
          backgroundColor: ["#EB5757","#FFD200","#cbb4d4","#0ED2F7" , "#2dbcf1" , "#1ebfae" , "#f18455","#f5c417" , 
                        "#cbb4d4", "#EB5757" , "#da22ff", "#cbb4d4" ],
          label: ['Transactions'] , 
          fill: false,
          borderColor : "#f18455",
          pointHoverRadius : 16,
				}],
				labels: ['Jan','Feb','Mar','Apr', 'May' , 'Jun' ,'Jul', 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
			}
    })
  }
}
