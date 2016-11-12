import Reflux from 'reflux';
import $ from 'jquery';
import ReservaActions from '../actions/ReservaAction';

var ReservaStore = Reflux.createStore({

    listenables: [ReservaActions],

    crearReservaP: function(idReserva, date, selected, selected2) {    
      $.ajax({
      	crossDomain: true,
      	cache: false,
      	context: this,
      	url: 'https://haskell-dojo.herokuapp.com/menus',
  		  method: 'POST',
  		  processData: false,
  		  data: '{\n"restaurant": 1,\n"name":name", \n"date":date ,\n"price": price,\n"description": description"\n}',
		    success: function(data) {
          console.log(data);     
        }
	    });
    }

    enviarDatos: function (idReserva,restaurant,idUsuario){

      
    }

});

export default ReservaStore;
