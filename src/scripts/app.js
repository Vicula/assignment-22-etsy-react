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




var homePage = React.createClass({
   render: function(){


      return (
         <div>
            <h1>Workings</h1>
            // <nav>
            //    <img src="../images/etsy-logo.png" className="navLogo"/>
            //    <div className="navIcons">
            //       <span className="glyphicon glyphicon-home"></span>
            //       <span className="glyphicon glyphicon-bell"></span>
            //       <span className="glyphicon glyphicon-shopping-cart"></span>
            //    </div>
            // </nav>
         </div>

      )
   }
})

ReactDOM.render(<homePage/>, document.querySelector('#app-container'))
