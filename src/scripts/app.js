const Backbone = require('Backbone')
const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')


// const appRouter = Backbone.Router.extend({
//
//    routes: {
//       "moreInfo/:id" : "showMorePage",
//       "closerLook:id" : "showCloserLook",
//       "" : "showHomePage"
//    },
//
//
//
// })
//
//
// const app = new appRouter




var HomePage = React.createClass({
   render: function(){

      let jumboTitleText = "Whoever you are, find whatever you're into"


      return (
         <div>
            <nav>
               <img src="../images/etsy-logo.png" className="navLogo"/>
               <div className="navIcons">
                  <img src="../images/Home-48.png"/>
                  <img src="../images/Appointment Reminders-48.png"/>
                  <img src="../images/Shopping Cart-48.png"/>
               </div>
            </nav>
            <div>
               <div className="jumbotron">
                  <h1 className="jumboTitle">{jumboTitleText}</h1>
                  <div className="input-group jumboSearch">
                     <input type="text" className="form-control jumboSearchBar"/>
                     <div className="input-group-btn">
                        <button type="button" className="btn default jumboSearchBut">Search</button>
                     </div>
                  </div>
               </div>
               <div className="homeInfoBlocksbox">

               </div>
            </div>
         </div>
      )
   }
})

ReactDOM.render(<HomePage/>, document.querySelector('#app-container'))
