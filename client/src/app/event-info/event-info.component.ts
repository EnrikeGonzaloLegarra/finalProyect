import { Component, OnInit } from '@angular/core';
import { ShowEventService } from '../show-event.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from "../session.service";
import { UserService } from "../user.service";

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
    /*------------------------PRUEBA GOOGLE CHART -----------------------*/


    /*------------------------FIN PRUEBA GOOGLE CHART -----------------------*/
    constructor(private eventService: ShowEventService, private session: SessionService, private userSession: UserService, private route: ActivatedRoute) { }

    ngOnInit() {

        this.session.isLoggedIn()
            .subscribe(
            (user) => this.successCb(user),
            (err) => console.log("error: isLoggedIn failed")

            );



        GoogleMapsLoader.KEY = "AIzaSyAN9OdByHcEHDc-fwHvjNsvh6XKKDvrciY";
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        const instance = this;
        GoogleMapsLoader.load(function(google) {
            console.log("mapsmapsmapsmapsmapsmapsmapsmapsmapsmapsmapsmapsmaps")


            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: location,
                zoomControl: false,
                scaleControl: false,
                streetViewControl: false,
                mapTypeControl: false,
            });
            var styles = [{
            }]
            map.setOptions({ styles: styles });

            instance.eventService.printMap()
            .subscribe((gpxTrack) => {
              var bounds = new google.maps.LatLngBounds();
              gpxTrack.map((p) => bounds.extend(p));
              var flightPath = new google.maps.Polyline({
                  path: gpxTrack,
                  geodesic: true,
                  strokeColor: '#FF0000',
                  strokeOpacity: 1.0,
                  strokeWeight: 2
              });
              flightPath.setMap(map);
              map.fitBounds(bounds);
            });
        });

        this.route.params.subscribe((params) => this.eventId = params['id']);

        this.event = this.getOneEvent();

        console.log("ususususususu", this.userSession.getUser())
    }

    getOneEvent() {
        return this.eventService.showEvent(this.eventId).subscribe((event) => this.event = event);
    }

    printTrack(result) {
        result.forEach(result, function() {
            var lat = this.res._lat;
            var lon = this.res._lon;
            console.log(lat, lon);
        });

    }

    errorCb(err) {
        this.error = err;
        this.user = null;
    }

    successCb(user) {
        this.user = user;
        console.log(user._id)
        // console.log(user, this.user)
        this.error = null;
    }
}
