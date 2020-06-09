
$("document").ready(function() {
    $('.nav-link-collapse').on('click', function() {
      $('.nav-link-collapse').not(this).removeClass('nav-link-show');
      $(this).toggleClass('nav-link-show');
    });
  });


$("document").ready(function(){

    $("#output1").click(()=>{

        $.get("https://jsonplaceholder.typicode.com/todos",(res,status,xhr)=>{
            if(status=="success")
            {
            
            let table =  "<tr> <th>Id</th> <th>Tasks</th> <th>Status</th></tr>";
                for(i=0;i<res.length;i++)
                {
                  
                    table += "<tr><td>" +
                    res[i].id + "</td><td>"+"<input type='checkbox' class='chk' />"+" "+ 
                    res[i].title + "</td><td>" +
                    res[i].completed + "</td></tr>"
                       
                };
                document.getElementById('output').innerHTML += table;
                document.getElementById('output1').disabled = true;

                var result = document.getElementById('output');
                tr = result.getElementsByTagName('tr');
                
                for (i = 1; i < tr.length; i++)
                 {
                    td = tr[i].getElementsByTagName("td")[2];  
                    if(td.innerHTML=="true"||td.innerText=="true")
                    {
                       var chks= document.getElementsByTagName("input");
                         chks[i-1].disabled = true;
                    }
                 }
            }
        });
    });
});

$("#output").click(()=>{
    var chkd = document.querySelectorAll('input[type="checkbox"]:checked');
    var promise=new Promise(function(resolve){
        setTimeout(function(){
            if(chkd.length == 5)
            resolve();
        },0);
    });

function checktodo(){
    alert("Congrats you have completed 5 tasks");
    for (var i = 0; i < chkd.length; i++) {
             if (chkd[i].type == 'checkbox') {
                 chkd[i].disabled = true;
             }
         }
}
promise
.then(checktodo);
});



// $("#output").onmouseup( function unchk()
//     {
            
            // for (var i = 0; i < allchks.length; i++) {
            //     if (chks[i].type == 'checkbox') {
            //         chks[i].disabled = true;
            //     }
            // }
            // if (chks.length == 5)
            // {
            //      alert('Congrats. 5 Tasks have been Successfully Completed ');
            //     document.querySelectorAll('input[type="checkbox"]:not(:checked)').prop('disabled',true);
               
            // }
          

//});

// async function call()
// {
//     await checktodo();
// }
// checktodo();
// var promise = checktodo();
// promise
// .then(()=>{
//     alert('Congrats. 5 Tasks have been Successfully Completed ');
// })
// .catch(()=>{
//         console.log('not yet completed');
// });
