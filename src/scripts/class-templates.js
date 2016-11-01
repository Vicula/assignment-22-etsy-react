const React = require('react')
const ReactDOM = require('react-dom')


var homePage = React.createClass({
   render: function(){


      return (
         <div>
            <nav>
               <img src="../images/etsy-logo.png" className="navLogo">
               <div className="navIcons">
                  <span className="glyphicon glyphicon-home"></span>
                  <span className="glyphicon glyphicon-bell"></span>
                  <span className="glyphicon glyphicon-shopping-cart"></span>
               </div>
            </nav>
         </div>

      )
   }
})
