import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as XLSX from 'xlsx';
import * as alasql from 'alasql';
//import * as $ from 'jquery';
/* TODO: json-query could be replaced with alasql, considering delivery lines proceeding with json-query, will be replaced with alsql once get a chance to explore and play around with alsql*/
import * as jsonQuery from 'json-query';
declare var $: any;


@Component({
  selector: 'app-cloudcomparer',
  templateUrl: './cloudcomparer.component.html',
  styleUrls: ['./cloudcomparer.component.css']
})

export class CloudcomparerComponent implements OnInit, AfterViewInit {

  categories:Category[];
  config:any;
  
  constructor(private dataService: DataService) {
    console.log('constructing cloudcomparer');
    this.dataService.getImageConfig().subscribe((config) => {
      // console.log("--> "+JSON.stringify(config));
      this.config = config;
      // resolve(true);
    });

  }

/* TODO: setTimeout is not a reliable way for this navigation, along with JQuery this needs to be replaced with Angular */
  ngAfterViewInit() {
    console.log(' AfterView Init called...... ');
    setTimeout(() => this.initializeNavigation(), 1500);
    //this.initializeNavigation();
  }


/* TODO: The JQuery needs to be replaced with Angular */
  initializeNavigation() {
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();

      $('#up').on('click', function (e) {

        console.log(" up called ");
        e.preventDefault();
        var target = $(this).get(0).id == 'up' ? $('#down') : $('#up');
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1800);
        /*$('#down').css({ 'margin-top': '10px' });*/
      });
      /*	$(".click_btn").animate({ 'zoom': 1.5}, 1500);
        
        $(".click_btn").click(function(){
              
          $(".banner").slideUp();
          });*/
    });

    $(document).ready(function () {
      /*
      $('.panel-collapse').on('show.bs.collapse hidden.bs.collapse', function(e) {	
              console.log(" panel called ");
          var $panel = $(this).closest('.panel');
          console.log($panel);
          $(this).prev().find('.fa').toggleClass('fa-plus fa-minus');
          $('html,body').animate({
          scrollTop: $panel.offset().top -60
          }, 100);
        });*/

      $('#accordion').on('shown.bs.collapse', function () {

        var panel = $(this).find('.in');

        $('html, body').animate({
          scrollTop: panel.offset().top - 60
        }, 100);


      });


      $('.panel-collapse').on('show.bs.collapse hidden.bs.collapse', function(e) {	
        console.log(" panel called ");
    var $panel = $(this).closest('.panel');
    console.log($panel);
    $(this).prev().find('.fa').toggleClass('fa-plus fa-minus');
  });

      /*	$('#accordion').on('shown.bs.collapse', function (e) {
            var offset = $('.panel.panel-default > .panel-collapse.in').offset();
            if(offset) {
                $('html,body').animate({
                    scrollTop: $('.panel-title a').offset().top -60
                }, 500); 
            }
        }); */


    });
    /*$(window).on("scroll", function() {
        if($(window).scrollTop() > 60) {
            $(".header").css({"background":"rgba(0,0,0,0.6)"});
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").css({"background":"rgba(0,0,0,0.8)"});
        }
    });*/
  }

/* TODO: The JSONQuery could be replaced with alasql, once get a chance to explore and play around with alsql JSONQuery needs to replaced with alasql */
  ngOnInit() {
    console.log(' cloud comparer initilizing.... ');
    let that = this
    this.dataService.getCloudComparer().then(function (res) {
      
      that.categories = res[0];
      let categories = res[0];

      for (let category of categories) {
       
        let services = jsonQuery('[*Category~' + category.Category + ']', { data: res[1] }).value

        //services=services.filter(ser => ser['Category'] ==category.Category);

        category['services'] = services;

        for (let servce of services) {
          let serviceDetail = jsonQuery('[*Service~' + servce.Service + ' & Category~' + category.Category + ']', { data: res[2] }).value
          for (let sDetail of serviceDetail) {
            
            if(sDetail['Instance'])
              sDetail['Instance']=sDetail['Instance'].trim();
            
            sDetail.CloudProvider in servce ? servce[sDetail.CloudProvider].push(sDetail) : servce[sDetail.CloudProvider] = [sDetail];
          }
        }
      }
    }).catch(function (err) {
      console.log(" An Error occured while processing Cloud Compare  ", err);
    });
  }

  readExcelCellLine(input) {
    return input ? input.split('\r\n') : [];
  }

}


interface Category {
  name: string,
  aws: string,
  azure: string,
  google: string,
  bluemix: string,
  oracle: string,
  reflink: string,
  services: Service[],
  comments: string[]
}

interface Service {
  name: string,
  reflink: string,
  comments: string[],
  aws: Instance[],
  azure: Instance[],
  google: Instance[],
  bluemix: Instance[],
  oracle: Instance[]
}

interface Instance {
  name: string,
  rating: string,
  reflink: string
}

