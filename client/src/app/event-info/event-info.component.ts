import { Component, OnInit } from '@angular/core';
import { ShowEventService } from '../show-event.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from "../session.service";
import { UserService } from "../user.service";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

declare function require(name: String);
var GoogleMapsLoader = require('google-maps');


@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  error: string;
  eventId: string;
  event: Object;
  user: any;
  km: any;
  ele: any;

  eleArray = [];

  public lineChartOptions: any = {
    chartType: 'LineChart',
    dataTable: [
      ['Tiempo (seg)', 'Altura (metros)']
    ],
    options: {
      legend: 'none',
      'title': 'Elevation/Time',
      backgroundColor: {
        fill: '#ECF0F1'
      },
      lineWidth: 4,
      colors: ['#0D7377'],
      width: 900, height: 170,
      hAxis: { gridlines: { color: '#ECF0F1' } }
    },

  };


  constructor(private eventService: ShowEventService, private session: SessionService, private userSession: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.eventId = params['id']);

    this.session.isLoggedIn()
      .subscribe(
      (user) => this.successCb(user));

    this.getElevation();
    this.getOneEvent();

    GoogleMapsLoader.KEY = "AIzaSyAN9OdByHcEHDc-fwHvjNsvh6XKKDvrciY";
    GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

    const instance = this;
    GoogleMapsLoader.load(function(google) {


      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: location,
        zoomControl: true,
        scaleControl: false,
        streetViewControl: true,
        mapTypeControl: true,
        mapTypeId: 'terrain'
      });
      var styles = [
        {
          featureType: "all",
          stylers: [
            { saturation: -80 }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            { hue: "#00ffee" },
            { saturation: 50 }
          ]
        }, {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];
      map.setOptions({ styles: styles });

      instance.eventService.printMap(instance.event["gpxFile"])
        .subscribe((gpxTrack) => {
          var bounds = new google.maps.LatLngBounds();
          gpxTrack.map((p) => bounds.extend(p));
          var trackPath = new google.maps.Polyline({
            path: gpxTrack,
            geodesic: true,
            strokeColor: '#0D7377',
            strokeOpacity: 1.0,
            strokeWeight: 3
          });
          instance.calculateDistance(gpxTrack);
          trackPath.setMap(map);
          map.fitBounds(bounds);
        });

    });

  }/*------------end NgOnInit-----------*/

  getElevation() {
    this.eventService.printChart()
      .subscribe((elevation) => {
        for (var i = 0; i < elevation.length; i++) {
          this.lineChartOptions.dataTable.push([i, elevation[i].ele]);
        }
      });
  }

  getOneEvent() {
    return this.eventService.showEvent(this.eventId).subscribe((event) => this.event = event);
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

  calculateTrackPointDistance(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLon = (lon2 - lon1) * (Math.PI / 180);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d;
  }

  calculateDistance(gpxtrack) {
    let distance = 0;
    let distanceArray = [0];
    for (var i = 1; i < gpxtrack.length; i++) {
      distance += this.calculateTrackPointDistance(gpxtrack[i - 1].lat, gpxtrack[i - 1].lng, gpxtrack[i].lat, gpxtrack[i].lng);
      distanceArray.push(distance);
    }
    this.km = distanceArray[distanceArray.length - 1].toFixed();
    return distanceArray[distanceArray.length - 1];
  }




}
