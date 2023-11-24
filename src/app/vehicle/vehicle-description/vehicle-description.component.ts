import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';
import { VehicleService } from 'src/app/services/vehicle.servce';
import { Vehicle } from 'src/shared/model/Vehicle';

@Component({
  selector: 'app-vehicle-description',
  templateUrl: './vehicle-description.component.html',
  styleUrls: ['./vehicle-description.component.css']
})
export class VehicleDescriptionComponent implements OnInit {

  vehicle: Vehicle = {
    id: 0,
    name: '',
    price: 0,
    rating: 0,
    vehicleType: '',
    twoWheelerType: '',
    imgUrl: ''
  };

  quantity: number = 1;
  selectedFuelType: string = "PETROL"
  selectedColor: string = "RED"

  charges: { name: string, price: string }[] = [];
  discounts: { name: string, price: string }[] = [];

  colors = ["RED", "BLACK", "PINK"];
  fuelType = ["PETROL", "CNG"]
  constructor(private activeRoute: ActivatedRoute, private vehicleService: VehicleService,private cartService:CartService,private storageService:StorageService) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params["id"];
    this.vehicleService.getVehicleById(Number(id)).subscribe(response => {
      this.vehicle = response.responseData;

      if (this.vehicle.vehicleType === "CAR") {
        this.vehicleService.getDiscountByFuelType().subscribe(response => {
          this.discounts = response.responseData
        })
      } else if (this.vehicle.vehicleType === "BIKE") {
        this.vehicleService.getDiscountByTwoWheelerType().subscribe(response => {
          this.discounts = response.responseData
        })
      }
    });

    this.vehicleService.getExtraChargeByColor().subscribe(response => {
      this.charges = response.responseData
    })

  }

  addToCart() {
    const item={
      quantity: this.quantity,
      color: this.selectedColor,
      fuelType: this.selectedFuelType,
      itemType: "CART",
      vehicle: this.vehicle
    }
    const id=JSON.parse(this.storageService.getItem("user")).id;

    this.cartService.addToCart(item,id).subscribe({next:(response)=>{
      console.log(response)
    },error:()=>{}})
  }


  increment() {
    this.quantity < 10 && (this.quantity += 1)
  }
  decrement() {
    this.quantity > 1 && (this.quantity -= 1)
  }
}
