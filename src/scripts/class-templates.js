const React = require('react')
const ReactDOM = require('react-dom')

var theGlobalDecider = false



var HomePage = React.createClass({

   getInitialState: function(){
      let startingState = {
         popUpDisplay: theGlobalDecider,
         searchValue: ''
      }

      return startingState
   },

   searchFunction: function(evt){

      console.log(this.state.searchValue)
   },

   searchInputChange: function(event){
      this.setState({
         searchValue: event.target.value
      })

   },

   _displayModal: function(lid){
      console.log('heyo', lid)
      console.log(this.state.popUpDisplay)

      if(this.state.popUpDisplay === false){
         this.setState({
            popUpDisplay: true
         })
         theGlobalDecider = true
      } else {
         this.setState({
            popUpDisplay: false
         })
         theGlobalDecider = false
      }

      window.location.hash = '#closerLook/' + lid


   },


   render: function(){


      let jumboTitleText = "Whoever you are, find whatever you're into"

      let etsyData = this.props.data

      let tileData = etsyData.map((someData, i)=>{
         // console.log(someData)
         // console.log(i)
         var crntPic2 = ''

         if (someData.attributes.Images[0].url_170x135 === undefined){
            crntPic2 = 'https://robohash.org/travis/?set=set2'
         } else {
            crntPic2 = someData.attributes.Images[0].url_170x135
         }

         let divStyle = {
             backgroundImage: 'url('+ crntPic2 +')'
         }
         let productName = someData.attributes.title.slice(0, 25) + '...'
         let productCreator = someData.attributes.Shop.shop_name
         let productPrice = "$"+someData.attributes.price
         // console.log('???? this ?????', this)
         return(
            <a href='#' key={someData.cid} onClick={(evt)=>{ evt.preventDefault(); this._displayModal(someData.get('listing_id'));} }>
               <div className="col-md-4 crntProduct" style={divStyle} >
                  <div className="crntProdInfo">
                     <h1>{productName}</h1>
                     <p className="crntCreator">{productCreator}</p>
                     <p className="crntPrice">{productPrice}</p>
                  </div>
               </div>
            </a>
         )

      })


      return (
         <div>
            <CloserPage serveStuff={etsyData} displayStatus={this.state.popUpDisplay} someNewNew={this}/>
            <nav>
               <img src="../images/etsy-logo.png" className="navLogo"/>
               <div className="navIcons">
                  <img src="../images/Home-48.png"/>
                  <img src="../images/Appointment Reminders-48.png"/>
                  <img src="../images/Shopping Cart-48.png"/>
               </div>
               <ol className="navCats">
                  <li>Clothing & Accessories</li>
                  <li>Jewelry</li>
                  <li>Craft Supplies & Tools</li>
                  <li>Weddings</li>
                  <li>Entertainment</li>
                  <li>Home & Living</li>
                  <li>Kids & Baby</li>
                  <li>Vintage</li>
               </ol>
            </nav>
            <div>
               <div className="jumbotron">
                  <h1 className="jumboTitle">{jumboTitleText}</h1>
                  <div className="input-group jumboSearch">
                     <input type="text" value={this.state.searchValue} onChange={this.searchInputChange} className="form-control jumboSearchBar"/>
                     <div className="input-group-btn">
                        <button type="button" className="btn default jumboSearchBut" onClick={this.searchFunction}>Search</button>
                     </div>
                  </div>
               </div>
               <div className="homeInfoBlocksbox">
                  <div className="col-sm-4">
                     <img src="../images/how_etsy_works_1.20160609191624.png"/>
                     <h3>Get something you love</h3>
                     <p>Our marketplace is a world of vintage and handmade goods</p>
                  </div>
                  <div className="col-sm-4">
                     <img src="../images/how_etsy_works_2.20160609191624.png"/>
                     <h3>Find your new favorite shop</h3>
                     <p>More than a million independent sellers from everywhere are right here</p>
                  </div>
                  <div className="col-sm-4">
                     <img src="../images/how_etsy_works_3.20160609191624.png"/>
                     <h3>Buy safely and securely</h3>
                     <p>Etsy protects every transaction, so shop with confidence</p>
                  </div>
               </div>
            </div>
            <div>
               <h1 className="homePageTitle">Browse our selection..</h1>
               <div className="col-sm-3 contentNavBox">
                  <h4>Show results for :</h4>
                  <div>
                     <h5>All Categories</h5>
                     <ul>
                        <a href="#"><li>Accessories</li></a>
                        <a href="#"><li>Toys & Games</li></a>
                        <a href="#"><li>Shoes</li></a>
                        <a href="#"><li>Jewelry</li></a>
                        <a href="#"><li>Clothing</li></a>
                        <a href="#"><li>Pet Supplies</li></a>
                        <a href="#"><li>Bath & Beauty</li></a>
                        <a href="#"><li>Home & Living</li></a>
                        <a href="#"><li>Bags & Purses</li></a>
                        <a href="#"><li>Books, Movies & Music</li></a>
                     </ul>
                  </div>
                  <h4>Refine your search :</h4>
                  <div>
                     <h5>Item type</h5>
                     <input type="checkbox"/>All items<br/>
                     <input type="checkbox"/>Handmade<br/>
                     <input type="checkbox"/>Vintage<br/>
                     <hr/>
                     <h5>Price ($)</h5>
                     <input type="checkbox"/>Any Price<br/>
                     <input type="checkbox"/>Under 25$<br/>
                     <input type="checkbox"/>$25 to $50<br/>
                     <input type="checkbox"/>$50 to $100<br/>
                     <input type="checkbox"/>Over $100<br/>
                  </div>

               </div>
               <div className="container contentListingBox">
                  <div id="tileHolder">
                     {tileData}
                  </div>
                  <nav className="productPagination">
                     <ul className="pagination">
                        <li>
                           <a href="#" >
                              <span>&laquo;</span>
                           </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                           <a href="#">
                              <span>&raquo;</span>
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div className="container-fluid homePageFooter"></div>
         </div>
      )
   }
})

var CloserPage = React.createClass({

   someFunction: function(){
      theGlobalDecider = false
      this.props.someNewNew.setState({
         popUpDisplay: false
      })

   },

   addToCart: function(){

   },

   render: function(){
      // console.log(this.props)
      let crntData = this.props.serveStuff




      if(this.props.displayStatus === false){
         return (
            <div></div>
         )
      }else {
         let crntId = Number(window.location.hash.slice(12))

         var selectedProductIndex = crntData.findIndex(function(mdls, i){
            return mdls.get('listing_id') === crntId
         })
         let selectedProduct = crntData[selectedProductIndex].attributes
         let crntPic = ''

         if (selectedProduct.Images[0].url_570xN === undefined){
            crntPic = 'https://robohash.org/travis/?set=set2'
         } else {
            crntPic = selectedProduct.Images[0].url_570xN
         }

         let prodPicStyle = {
            backgroundImage: "url(" + crntPic + ")",
            backgroundSize: "cover",
            height: '65vh',
            width: '100%'
         }




         return (
            <div className="moreInfoBox">
               <div className="infoInnerBox">
                  <nav>
                     <span className="closerLookAdd" onClick={this.addToCart}>+</span>
                     <span className="closerLookClose" onClick={this.someFunction}>x</span>
                  </nav>
                  <div>
                     <div className="col-sm-7 closerProductPic" style={prodPicStyle}>

                     </div>
                     <div className="col-sm-5 closerProductInfo">
                        <h3>{selectedProduct.title}</h3>
                        <h3>{'$' + selectedProduct.price}</h3>
                        <p>{selectedProduct.description}</p>
                     </div>
                  </div>
               </div>
            </div>
         )
      }

   }
})



module.exports = {
   HomePage: HomePage,
   CloserPage: CloserPage
}
