import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {//


  constructor() { }

  ngOnInit() {
  }

 ngAfterViewInit(){
        this.initializeNavigation();
   }

/* TODO: The JQuery needs to be replaced with Angular */

  private initializeNavigation() {
   console.log(" navigating to details page... ");
       $('#up').on('click', function(e){
                e.preventDefault();
                var target= $(this).get(0).id == 'up' ? $('#down') : $('#up');
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                  }, 1800);
        });


  }
}
