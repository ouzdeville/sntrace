import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { UserService, User } from '../user.service';

declare var google: any;
declare var angular: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  users: User[];
  menuItems: MenuItem[];
  userTree: TreeNode[];
  options: any;
  overlays: any[];
  numero: string="776359893";
  debut:Date=new Date();
  fin:Date=new Date();
  checked: boolean = false;
  clickMessage = '';
  IssuesList: any = [];
  visible:boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    
    this.menuItems = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

  
  this.userTree=[];

  this.options = {
    center: {lat: 14.681788, lng: -17.460405},
    zoom: 12
};

this.overlays = [];


  }

   

  handleAfficher(event: Event) {
    this.visible=true;
    this.userTree=[];
    let path=[];
    let position:any;
    if((this.numero)!=null){
        this.numero=this.numero.replace(/-/g, '');
        this.userService.getUser(this.numero,this.debut,this.fin,this.checked).subscribe((data: {}) => {
            this.users = (<User[]>data);
            this.users.forEach(function(value:User) {
            let tree={
                "label": value.telnumber,
                "data": "Documents Folder",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "children": []
            };
            this.userTree.push(tree);
            let position={"lat": parseFloat(value.coord.latitude), "lng": parseFloat(value.coord.longitude)};
            path.push(position);
            }.bind(this));
            console.log(path);
            this.overlays = [
              new google.maps.Polyline({path: path, geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
              ];
              this.visible=false;

        });
        
        
    } 
    
  }

}
