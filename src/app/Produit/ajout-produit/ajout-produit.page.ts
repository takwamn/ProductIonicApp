import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { ToastController, NavController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.page.html',
  styleUrls: ['./ajout-produit.page.scss'],
})

export class AjoutProduitPage implements OnInit {
 
  public allProducts:Produit[];
   public currentP:Produit;
   mode:number=1;
   productForm: FormGroup;

   nom = '';
   prix : number=null;
   qte: number = null;
   isLoadingResults = false;
    id:number;
  constructor(public router:Router,
    public produitService:ProduitService,
    public toastController:ToastController,
    public navCtrl:NavController,private formBuilder: FormBuilder
    ) {
      this.currentP=new Produit(this.id,this.nom,this.prix,this.qte);
     }

  ngOnInit() {
  //  this.productForm = this.formBuilder.group({
    //  'nom' : [null, Validators.required],
      //'prix' : [null, Validators.required],
      //'qte' : [null, Validators.required]
    //});
  }
    /*onFormSubmit(data:Produit) {
      this.isLoadingResults = true;
      this.produitService.addProduct(data)
        .subscribe((res: any) => {
          this.currentP=res
            const id = res.id;
            this.isLoadingResults = false;
            this.router.navigate(['/home']);
          }, (err: any) => {
            console.log(err);
            this.isLoadingResults = false;
          });
    }
*/
  OnsaveProduct(){
    this.produitService.addProduct(this.currentP).subscribe(res=>{
     // await loading.present();

     // this.currentP=res
      this.mode=2;
      console.log();
      this.gotolist();
      //}
      //,err=>{console.log(err);
     })
  
   } 


 /* saveProduct(data:Produit){
    this.produitService.addProduct(data).subscribe(res => {
    let toast =await this.toastController.create({
      message: 'details a ete ajoute pour :'+this.currentP.nomp,
      duration:3000
    })
     // this.currentP=res
     // this.mode=2;
      this.gotolist();
      }
      ,err=>{console.log(err);
     })
  
   } 
  */
   gotolist(){
    this.router.navigate([ '/home' ]);
  }

  OnewProduct(){
    this.mode=1;
  }

}
