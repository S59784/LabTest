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

    
    $.ajax({
        type: "GET",
        url: "https://kerbau.odaje.biz/getstaff.php",
        data: "",
        cache: false,
        success: function(datareceived){
         //instruction to execute when the ajax call is succeeds
            var newData = JSON.parse(datareceived);
            var textOutput = "";

            for(let n = 1; n < newData.length; n++){

                const element = newData[n];

                var email = JSON.parse(element).email;

                textOutput = textOutput + "<tr><td>"+n+"</td><td>"+
                    "<a href = 'secondpage.html?id="+n+"'>"+ email +"</a></td> </tr>"
            }

            $('#maintable tbody').html(textOutput);
        },
     
        error: function(error){
         //instructions to execute when the ajax is failed
            console.log(`Error ${error}`);
        }
        });
    
})