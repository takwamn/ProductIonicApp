import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.page.html',
  styleUrls: ['./edit-produit.page.scss'],
})
export class EditProduitPage implements OnInit {
  isLoadingResults: boolean;
  public product:any;
  constructor(private api:ProduitService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.onget1Produit();
  }

onget1Produit(){
  this.api.getone(this.activeRoute.snapshot.params.id)
  .subscribe(res => {
    this.product=res;
    console.log(this.product);
  }, err => {
    console.log(err);
  });
}


OnupdateProduct(value:any){
    let syn:Produit = new Produit(this.activeRoute.snapshot.params.id,value.nom,value.prix,value.qte);
    this.api.updateProduct(syn).subscribe(data=>
      this.router.navigate([ '/home' ])
      )
    }


}


