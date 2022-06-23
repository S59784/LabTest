$(function(){
    
    //create crossroads
    crossroads.addRoute('road');
    crossroads.addRoute('lorem/ipsum');
    crossroads.routed.add(console.log, console);

    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

    //hasher.setHash('lorem/ipsum');

    $.ajax({

        type: "GET",
        url: "https://kerbau.odaje.biz/getstaff.php",
        data: "",
        cache: false,
        success: function(datareturned){

        var newData = JSON.parse(datareturned);
        var textOutput = "";
        var htmlText = "";

        for(let n = 1; n < newData.length; n++){

            const element = newData[n];

            var email = JSON.parse(element).email;

            textOutput = textOutput + "<tr><td>"+n+"</td><td>"+
                "secondpage=<a href ='secondpage.html?id="+n+"'>"+ email +"</a></td> </tr>";

            htmlText = htmlText+"<tr><td>"+secondpage+"</td></tr>";
        }

            $('#maintable tbody').html(htmlText);
        },

        error: function(error){
            //instructions to execute when the ajax is failed
               console.log(`Error ${error}`);
           }
    });


})